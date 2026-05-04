import * as logger from "firebase-functions/logger";
import { createSupabaseClient } from "../shared/supabase-client";
import { sendTeamGenerationNotification } from "./team-notification";

interface PlayerLite { id: number; name: string; position: string; }

/**
 * Core team generation logic (Supabase port).
 *
 * Behaviour gepoort vanuit de oude Sheets-versie:
 * - Vind de wedstrijd op `dateString`.
 * - Skip als er al lineups bestaan (oud: skip als TeamWit/TeamRood al gevuld).
 * - Lees aanwezigheid (status='Ja') + filter op actieve spelers.
 * - Vereis minimaal 6 spelers (ongewijzigd t.o.v. oud).
 * - Random shuffle + alternerend over twee teams (positie wordt niet meegenomen
 *   in de verdeling, identiek aan de oude implementatie).
 * - Schrijf match_lineups en update matches.team_generation
 *   ('Automatisch' bij scheduled, 'Handmatig' bij manual — gelijk aan oud).
 * - Verstuur push-notificatie (oud: altijd; we behouden dat — `trigger` wordt
 *   doorgegeven zodat de notification-laag kan kiezen).
 */
export async function performAutoTeamGeneration(dateString: string, trigger: string) {
  const supabase = createSupabaseClient();

  try {
    // 1. Vind de wedstrijd op deze datum.
    logger.info(`🔍 Checking for match on ${dateString}...`);

    const { data: matches, error: matchErr } = await supabase
      .from('matches')
      .select('id, date, team_generation')
      .eq('date', dateString)
      .limit(1);
    if (matchErr) {
      logger.error('team-logic: could not load match', matchErr);
      throw new Error(`Cannot find match for date ${dateString}: ${matchErr.message}`);
    }
    const match = matches?.[0];
    if (!match) {
      return {
        success: false,
        message: `No match found for ${dateString}`,
      };
    }

    // Skip als er al lineups zijn (oud gedrag: skip als teams al ingevuld).
    const { data: existingLineups, error: existErr } = await supabase
      .from('match_lineups')
      .select('player_id, team')
      .eq('match_id', match.id);
    if (existErr) {
      logger.error('team-logic: could not check existing lineups', existErr);
      throw new Error(`Cannot check existing lineups: ${existErr.message}`);
    }
    if ((existingLineups ?? []).length > 0) {
      return {
        success: false,
        message: `Teams already generated for match on ${dateString} (${existingLineups!.length} existing lineup rows).`,
      };
    }

    logger.info(`✅ Match found for ${dateString} (id=${match.id})`);

    // 2. Lees aanwezigheid voor deze match (alleen 'Ja').
    logger.info(`🔍 Getting present players for match ${match.id}...`);

    const { data: attendanceRows, error: attErr } = await supabase
      .from('attendance')
      .select('player_id, status')
      .eq('match_id', match.id)
      .eq('status', 'Ja');
    if (attErr) {
      logger.error('team-logic: could not load attendance', attErr);
      throw new Error(`Attendance load failed: ${attErr.message}`);
    }
    const attendingIds = new Set((attendanceRows ?? []).map(r => r.player_id));

    // 3. Lees alle spelers (voor naam/positie/actief).
    const { data: allPlayers, error: playersErr } = await supabase
      .from('players')
      .select('id, name, position, actief');
    if (playersErr) {
      logger.error('team-logic: could not load players', playersErr);
      throw new Error(`Players load failed: ${playersErr.message}`);
    }

    // 4. Filter op aanwezig. Wie 'Ja' zegt speelt mee, ongeacht de `actief`-vlag —
    //    die vlag bepaalt zichtbaarheid in defaults/uitnodigingen, niet of een
    //    bevestigde aanmelding meetelt.
    const playerById = new Map((allPlayers ?? []).map(p => [p.id, p]));
    const skippedNonActief: string[] = [];
    const attendingPlayers: PlayerLite[] = [];
    for (const id of attendingIds) {
      const p = playerById.get(id);
      if (!p) continue;
      attendingPlayers.push({ id: p.id, name: (p.name ?? '').trim(), position: p.position ?? 'Speler' });
      if (!p.actief) skippedNonActief.push((p.name ?? '').trim());
    }

    logger.info(`👥 Total present players: ${attendingPlayers.length} - ${attendingPlayers.map(p => p.name).join(', ')}`);
    if (skippedNonActief.length > 0) {
      logger.info(`ℹ️ Including non-actief players who confirmed: ${skippedNonActief.join(', ')}`);
    }

    if (attendingPlayers.length < 6) {
      return {
        success: false,
        message: `Not enough players present (${attendingPlayers.length}/6 minimum). Present: ${attendingPlayers.map(p => p.name).join(', ')}`,
      };
    }

    // 5. Algoritme — port van oude logica: random shuffle + alternerende verdeling.
    logger.info(`🎯 Generating teams with ${attendingPlayers.length} players`);

    const { teamWhite, teamRed } = balanceTeams(attendingPlayers);

    const teamWhiteNames = teamWhite
      .map(pid => attendingPlayers.find(p => p.id === pid)?.name ?? '')
      .filter(Boolean);
    const teamRedNames = teamRed
      .map(pid => attendingPlayers.find(p => p.id === pid)?.name ?? '')
      .filter(Boolean);
    const teamWhiteStr = teamWhiteNames.join(', ');
    const teamRedStr = teamRedNames.join(', ');

    logger.info(`✅ Teams generated: White (${teamWhite.length}): ${teamWhiteStr}`);
    logger.info(`✅ Teams generated: Red (${teamRed.length}): ${teamRedStr}`);

    // 6. Schrijf naar Supabase.
    const generatieMethode: 'Automatisch' | 'Handmatig' = trigger === 'scheduled' ? 'Automatisch' : 'Handmatig';

    const { error: updMatchErr } = await supabase
      .from('matches')
      .update({ team_generation: generatieMethode })
      .eq('id', match.id);
    if (updMatchErr) {
      logger.error('team-logic: could not update match team_generation', updMatchErr);
      throw new Error(`Match update failed: ${updMatchErr.message}`);
    }

    const { error: delErr } = await supabase
      .from('match_lineups')
      .delete()
      .eq('match_id', match.id);
    if (delErr) {
      logger.error('team-logic: could not delete old lineups', delErr);
      throw new Error(`Lineup delete failed: ${delErr.message}`);
    }

    const lineupRows = [
      ...teamWhite.map(pid => ({ match_id: match.id, player_id: pid, team: 'wit' as const })),
      ...teamRed.map(pid => ({ match_id: match.id, player_id: pid, team: 'rood' as const })),
    ];
    if (lineupRows.length > 0) {
      const { error: insErr } = await supabase.from('match_lineups').insert(lineupRows);
      if (insErr) {
        logger.error('team-logic: could not insert lineups', insErr);
        throw new Error(`Lineup insert failed: ${insErr.message}`);
      }
    }

    logger.info(`✅ Teams saved successfully to Supabase with generation method: ${generatieMethode}`);

    // 7. Push notification (oud gedrag: altijd verzenden).
    logger.info(`📧 Sending push notifications...`);
    try {
      await sendTeamGenerationNotification(teamWhiteStr, teamRedStr, trigger);
      logger.info(`✅ Push notifications sent successfully`);
    } catch (notifError) {
      logger.error(`⚠️ Failed to send push notifications:`, notifError);
      // Notification-fouten breken de operation niet.
    }

    return {
      success: true,
      message: `Teams automatically generated and saved! White: ${teamWhiteStr}. Red: ${teamRedStr}.`,
      teams: {
        teamWhite: teamWhiteNames,
        teamRed: teamRedNames,
      },
      playersCount: attendingPlayers.length,
      trigger: trigger,
    };

  } catch (error) {
    logger.error(`❌ Error in performAutoTeamGeneration:`, error);
    throw error;
  }
}

/**
 * Port van het oude balansing-algoritme:
 *   - Random shuffle van álle aanwezige spelers (positie wordt niet apart behandeld).
 *   - Alternerende verdeling (i % 2 === 0 → wit, anders rood).
 *
 * Het oude algoritme las wel `position` uit Spelers, maar gebruikte het verder
 * niet in de verdeling (zie commentaar "we can enhance this later" in de oude
 * code). De `rating` was bovendien hardcoded op 5. We repliceren die simpele
 * semantiek hier 1-op-1, maar dan op id-basis.
 */
function balanceTeams(players: PlayerLite[]): { teamWhite: number[]; teamRed: number[] } {
  const shuffled = [...players].sort(() => Math.random() - 0.5);

  const teamWhite: number[] = [];
  const teamRed: number[] = [];

  for (let i = 0; i < shuffled.length; i++) {
    if (i % 2 === 0) {
      teamWhite.push(shuffled[i].id);
    } else {
      teamRed.push(shuffled[i].id);
    }
  }

  return { teamWhite, teamRed };
}

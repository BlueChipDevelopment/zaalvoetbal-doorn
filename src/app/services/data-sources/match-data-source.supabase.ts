import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { WedstrijdData } from '../../interfaces/IWedstrijd';
import { Database } from '../../types/database.types';
import { MatchDataSource } from './match-data-source';
import { SupabaseClientService } from './supabase-client.service';

type MatchUpdate = Database['public']['Tables']['matches']['Update'];
type MatchInsert = Database['public']['Tables']['matches']['Insert'];

@Injectable({ providedIn: 'root' })
export class SupabaseMatchDataSource extends MatchDataSource {
  constructor(private supabase: SupabaseClientService) {
    super();
  }

  getAll(): Observable<WedstrijdData[]> {
    return from(
      this.supabase.client
        .from('matches')
        .select('*, match_lineups(player_id, team)')
        .order('date'),
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        const seizoenCounters = new Map<string, number>();
        return (data ?? []).map((row: any) => {
          const lineups = (row.match_lineups ?? []) as { player_id: number; team: 'wit' | 'rood' }[];
          const teamWit = lineups.filter(l => l.team === 'wit').map(l => l.player_id);
          const teamRood = lineups.filter(l => l.team === 'rood').map(l => l.player_id);
          const seizoen = row.season ?? null;
          let seizoenWedstrijdNummer: number | undefined;
          if (seizoen) {
            const current = seizoenCounters.get(seizoen) || 0;
            seizoenWedstrijdNummer = current + 1;
            seizoenCounters.set(seizoen, seizoenWedstrijdNummer);
          }
          return {
            id: row.id,
            seizoen,
            seizoenWedstrijdNummer,
            datum: row.date ? new Date(row.date) : null,
            datumString: row.date,
            teamWit,
            teamRood,
            teamGeneratie: row.team_generation ?? '',
            scoreWit: row.score_white,
            scoreRood: row.score_red,
            zlatanPlayerId: row.zlatan_player_id ?? null,
            ventielPlayerId: row.ventiel_player_id ?? null,
            voorbeschouwing: row.voorbeschouwing ?? undefined,
            locatie: row.location ?? undefined,
          } as WedstrijdData;
        });
      }),
    );
  }

  add(match: WedstrijdData): Observable<WedstrijdData> {
    const dateIso = this.formatDateISO(match.datum);
    if (!dateIso) {
      throw new Error('Cannot add match without datum');
    }
    const insert: MatchInsert = {
      date: dateIso,
      location: match.locatie ?? null,
      team_generation: match.teamGeneratie ?? null,
      score_white: match.scoreWit,
      score_red: match.scoreRood,
      zlatan_player_id: match.zlatanPlayerId,
      ventiel_player_id: match.ventielPlayerId,
      voorbeschouwing: match.voorbeschouwing ?? null,
    };
    return from(
      this.supabase.client.from('matches').insert(insert).select('*').single(),
    ).pipe(
      switchMap(({ data, error }) => {
        if (error) throw error;
        const matchId = data!.id;
        const lineupRows = [
          ...match.teamWit.map(pid => ({ match_id: matchId, player_id: pid, team: 'wit' as const })),
          ...match.teamRood.map(pid => ({ match_id: matchId, player_id: pid, team: 'rood' as const })),
        ];
        if (lineupRows.length === 0) {
          return [{ ...match, id: matchId, datumString: insert.date }];
        }
        return from(
          this.supabase.client.from('match_lineups').insert(lineupRows),
        ).pipe(
          map(({ error: lineupError }) => {
            if (lineupError) throw lineupError;
            return { ...match, id: matchId, datumString: insert.date };
          }),
        );
      }),
    );
  }

  update(match: WedstrijdData): Observable<void> {
    if (!match.id) {
      throw new Error('Cannot update match without id');
    }
    const update: MatchUpdate = {
      date: this.formatDateISO(match.datum) ?? undefined,
      location: match.locatie ?? null,
      team_generation: match.teamGeneratie ?? null,
      score_white: match.scoreWit,
      score_red: match.scoreRood,
      zlatan_player_id: match.zlatanPlayerId,
      ventiel_player_id: match.ventielPlayerId,
      voorbeschouwing: match.voorbeschouwing ?? null,
    };
    return from(
      this.supabase.client.from('matches').update(update).eq('id', match.id),
    ).pipe(
      switchMap(({ error }) => {
        if (error) throw error;
        return this.replaceLineups(match.id!, match.teamWit, match.teamRood);
      }),
    );
  }

  updateScore(
    matchId: number,
    scoreWhite: number,
    scoreRed: number,
    zlatanPlayerId: number | null,
  ): Observable<void> {
    return from(
      this.supabase.client.from('matches').update({
        score_white: scoreWhite,
        score_red: scoreRed,
        zlatan_player_id: zlatanPlayerId,
      }).eq('id', matchId),
    ).pipe(
      map(({ error }) => {
        if (error) throw error;
        return undefined;
      }),
    );
  }

  updateTeams(
    matchId: number,
    teamWit: number[],
    teamRood: number[],
    teamGeneration: string,
    voorbeschouwing?: string,
  ): Observable<void> {
    const update: MatchUpdate = { team_generation: teamGeneration };
    if (voorbeschouwing) {
      update.voorbeschouwing = voorbeschouwing;
    }
    return from(
      this.supabase.client.from('matches').update(update).eq('id', matchId),
    ).pipe(
      switchMap(({ error }) => {
        if (error) throw error;
        return this.replaceLineups(matchId, teamWit, teamRood);
      }),
    );
  }

  /**
   * Vervangt de match_lineups voor een wedstrijd via delete + insert.
   *
   * Let op: deze flow draait NIET in een Postgres-transactie. Als de delete
   * slaagt maar de insert faalt, raakt de wedstrijd zijn opstelling kwijt.
   * Voor de huidige schaal (1 wedstrijd/week, single-user write) acceptabel,
   * maar bij volume (data-migratie sub-project 5) de hele flow vervangen door
   * een Postgres RPC `replace_match_lineups(match_id, lineups jsonb)` die
   * beide stappen atomic uitvoert.
   */
  private replaceLineups(matchId: number, teamWit: number[], teamRood: number[]): Observable<void> {
    return from(
      this.supabase.client.from('match_lineups').delete().eq('match_id', matchId),
    ).pipe(
      switchMap(({ error: deleteError }) => {
        if (deleteError) throw deleteError;
        const lineupRows = [
          ...teamWit.map(pid => ({ match_id: matchId, player_id: pid, team: 'wit' as const })),
          ...teamRood.map(pid => ({ match_id: matchId, player_id: pid, team: 'rood' as const })),
        ];
        if (lineupRows.length === 0) {
          return of(undefined);
        }
        return from(
          this.supabase.client.from('match_lineups').insert(lineupRows),
        ).pipe(
          map(({ error: insertError }) => {
            if (insertError) throw insertError;
            return undefined;
          }),
        );
      }),
    );
  }

  private formatDateISO(date: Date | null | undefined): string | null {
    if (!date) return null;
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
}

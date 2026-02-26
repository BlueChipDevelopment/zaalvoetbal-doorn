import {onRequest} from "firebase-functions/v2/https";
import {defineSecret} from "firebase-functions/params";
import * as logger from "firebase-functions/logger";
import Anthropic from "@anthropic-ai/sdk";
import {setCorsHeaders} from "../shared/cors";
import {FIREBASE_CONFIG} from "../config/constants";

const anthropicApiKey = defineSecret("ANTHROPIC_API_KEY");

export const generateTeamCommentary = onRequest(
  {region: FIREBASE_CONFIG.region, secrets: [anthropicApiKey]},
  async (req, res) => {
    setCorsHeaders(res);
    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    try {
      const {teamWhite, teamRed, stats} = req.body;

      const client = new Anthropic({apiKey: anthropicApiKey.value()});

      const prompt = buildPrompt(teamWhite, teamRed, stats);

      const message = await client.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        system: "Je bent een enthousiaste maar nuchtere Nederlandse sportverslaggever " +
          "die wekelijks een VOORUITBLIK schrijft op de aankomende zaalvoetbalwedstrijd " +
          "voor een recreatieve groep in Doorn. " +
          "BELANGRIJK: de wedstrijd is NOG NIET gespeeld. Je schrijft een preview/vooruitblik. " +
          "De totalScore per team is de optelsom van spelersratings — dit is GEEN wedstrijduitslag. " +
          "Schrijf levendig, kort en grappig. Varieer je schrijfstijl: soms als columnist, " +
          "soms als radiopresentator, soms als poëtisch verslaggever. " +
          "Gebruik de voornamen van spelers (geen achternamen bekend). " +
          "Output is puur HTML met <p> en <strong> tags. Geen <h1>/<h2> headings. " +
          "Geen markdown codeblocks (geen ```). Maximaal 5-6 alinea's.",
        messages: [{role: "user", content: prompt}],
      });

      const textBlock = message.content.find(
        (b): b is Anthropic.TextBlock => b.type === "text"
      );
      // Strip markdown codeblock wrappers (```html ... ```) als de AI die toevoegt
      const raw = textBlock?.text ?? "";
      const commentary = raw
        .replace(/^```html\s*/i, "")
        .replace(/^```\s*/m, "")
        .replace(/```\s*$/, "")
        .trim();

      res.json({commentary});
    } catch (error) {
      logger.error("Error generating AI commentary:", error);
      res.status(500).json({error: "Failed to generate commentary"});
    }
  }
);

function buildPrompt(teamWhite: any, teamRed: any, stats: any): string {
  const whitePlayers = (teamWhite.players || [])
    .map((p: any) =>
      `  - ${p.name} (${p.position}, rating ${p.rating}, ` +
      `${p.gamesPlayed} wedstrijden, winratio ${p.winRatio != null ? Math.round(p.winRatio * 100) + "%" : "onbekend"}, ` +
      `${p.wins ?? 0}W/${p.losses ?? 0}V/${p.ties ?? 0}G)`
    ).join("\n");

  const redPlayers = (teamRed.players || [])
    .map((p: any) =>
      `  - ${p.name} (${p.position}, rating ${p.rating}, ` +
      `${p.gamesPlayed} wedstrijden, winratio ${p.winRatio != null ? Math.round(p.winRatio * 100) + "%" : "onbekend"}, ` +
      `${p.wins ?? 0}W/${p.losses ?? 0}V/${p.ties ?? 0}G)`
    ).join("\n");

  let prompt = `Schrijf een VOORUITBLIK (de wedstrijd is nog niet gespeeld!) voor deze zaalvoetbalwedstrijd:

TEAM WIT (totaal rating: ${teamWhite.totalScore}):
${whitePlayers}

TEAM ROOD (totaal rating: ${teamRed.totalScore}):
${redPlayers}

BALANS: Het verschil in teamrating is ${stats.scoreDiff} punten.
ERVARING: Wit heeft ${stats.experience?.white || 0} wedstrijden ervaring, Rood ${stats.experience?.red || 0}.`;

  if (stats.playersInForm?.length > 0) {
    prompt += `\n\nSPELERS IN VORM (>70% winrate laatste 5): ${stats.playersInForm.map((p: any) => `${p.name} (${p.recentWins} van 5 gewonnen)`).join(", ")}`;
  }
  if (stats.playersInPoorForm?.length > 0) {
    prompt += `\nSPELERS UIT VORM (<30% winrate laatste 5): ${stats.playersInPoorForm.join(", ")}`;
  }
  if (stats.winStreaks?.length > 0) {
    prompt += `\nWINSTREAKS: ${stats.winStreaks.map((s: any) => `${s.name} (${s.streak} op rij)`).join(", ")}`;
  }
  if (stats.duos?.length > 0) {
    prompt += `\nSTERKE DUO'S: ${stats.duos.map((d: any) => `${d.playerA} & ${d.playerB} (${Math.round(d.winRate * 100)}% winrate in ${d.games} wedstrijden samen)`).join("; ")}`;
  }
  if (stats.newPlayers?.length > 0) {
    prompt += `\nNIEUWELINGEN (≤3 wedstrijden): ${stats.newPlayers.join(", ")}`;
  }
  if (stats.zlatanStars?.length > 0) {
    prompt += `\nZLATAN-PUNTEN (spectaculaire acties): ${stats.zlatanStars.map((p: any) => `${p.name} (${p.points}pt)`).join(", ")}`;
  }
  if (stats.ventielStars?.length > 0) {
    prompt += `\nVENTIEL-PUNTEN (onhandige momenten): ${stats.ventielStars.map((p: any) => `${p.name} (${p.points}pt)`).join(", ")}`;
  }
  if (stats.historischeWedstrijden?.length > 0) {
    prompt += `\n\nEERDERE VERGELIJKBARE OPSTELLINGEN:`;
    for (const h of stats.historischeWedstrijden) {
      prompt += `\n  - ${h.datum}: ${h.score}% overlap${h.isFlipped ? " (teams omgedraaid)" : ""}${h.uitslag ? `, uitslag was ${h.uitslag}` : ""}`;
    }
  }

  prompt += `\n\nSchrijf een vooruitblik met:
1. Een pakkende opening over hoe gebalanceerd de teams zijn
2. Wie er in vorm is en wie niet (als relevant)
3. 2-3 leuke feitjes (duo-chemistry, ervaring, winstreaks, zlatan/ventiel punten, nieuwkomers)
4. Eventuele historie met vergelijkbare opstellingen
5. Sluit af met een speelse voorspelling over wie gaat winnen (gebruik het woord "eindoordeel" in plaats van "verdict")`;

  return prompt;
}

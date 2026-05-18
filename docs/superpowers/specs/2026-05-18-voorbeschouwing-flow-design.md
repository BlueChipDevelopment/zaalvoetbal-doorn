# Voorbeschouwing-flow: twee-staps opstelling

**Datum:** 2026-05-18
**Component:** `src/app/components/opstelling/`

## Probleem

De voorbeschouwing (AI-gegenereerde wedstrijdanalyse) staat nu ingeklapt
onder een klikbare teaser-quote, met de teams er direct onder op dezelfde
pagina. Gebruikers scrollen er langs zonder 'm te lezen. De wens: de
voorbeschouwing altijd actief aanbieden, en de opstelling pas tonen nadat de
gebruiker doorklikt.

## Doel

Een twee-staps flow op de opstelling-pagina, mobiel-eerst:

1. **Stap 1 — Voorbeschouwing**: alleen de voorbeschouwing zichtbaar,
   volledig uitgeklapt.
2. **Stap 2 — Opstelling**: teams + spelerskaarten, pas zichtbaar ná
   doorklikken.

## Flow & states

De `countdown`-tak (teams nog niet bekend) blijft ongewijzigd. Er komt één
nieuwe state-property bij:

- `showOpstelling: boolean` — default `false`.

Zodra teams bekend zijn:

- `showOpstelling === false` → render stap 1 (voorbeschouwing + knop).
- `showOpstelling === true` → render stap 2 (teams, spelerskaarten,
  deel-knop).

Elk paginabezoek begint bij stap 1; er wordt niets onthouden.

## Knop-gedrag (laden)

De voorbeschouwing wordt soms live door AI gegenereerd (`isLoadingCommentary`).
Tijdens het laden toont stap 1 een spinner met de tekst
"Voorbeschouwing wordt geschreven…".

De knop **"Bekijk de opstelling →"** is **disabled** zolang:

- `isLoadingCommentary === true`, OF
- `algorithmExplanation` leeg is.

De knop activeert dus pas als er een complete voorbeschouwing staat — de
AI-tekst óf, bij API-fout, de template-fallback. Bij een opgeslagen
`wedstrijd.voorbeschouwing` is de knop meteen actief (geen laadfase).

Klik op de knop zet `showOpstelling = true`.

## UI — stap 1 (mobiel-eerst)

```
┌─────────────────────────┐
│  📋 Voorbeschouwing      │
│                         │
│  [volledige AI-tekst]   │
│                         │
│  ┌───────────────────┐  │
│  │ Bekijk opstelling →│  │  ← full-width, onderaan
│  └───────────────────┘  │
└─────────────────────────┘
```

- Voorbeschouwing-card wordt het hoofdelement (niet langer een uitklap-paneel).
- Volledige tekst zichtbaar — geen truncatie, geen "meer details"-toggle.
- Knop: full-width `mat-flat-button` (primary), onderaan. Spinner-variant
  tijdens laden.

## Wijzigingen in bestaande code

### Verwijderen

- Klikbare teaser-quote (`team-analysis-quote` blok in de template).
- `showDetailedAnalysis`-toggle (de voorbeschouwing is geen uitklap meer).
- "Meer details"-inklap: `showFullExplanation` + de `length > 800`-logica.
- Daarmee overbodig en te verwijderen uit de component:
  `commentaryTeaser`, `getBalanceDescription`, `getDetailedBalanceAnalysis`,
  `showDetailedAnalysis`, `showFullExplanation`.

### Behouden

- De fallback-template-logica (`generatePersonalizedExplanation`,
  `analyzeTeam`, `determineMainFactors`, `generateComprehensiveAnalysis`,
  `generateAICommentary` en hun helpers). Die vult `algorithmExplanation`
  als de AI-call faalt, zodat de knop altijd uiteindelijk activeert.
- De `countdown`-tak en `setCountdown`/`updateCountdown`.

### Toevoegen

- `showOpstelling: boolean = false`.
- Een getter/methode voor de disabled-staat van de knop, bijv.
  `get canRevealOpstelling(): boolean`.
- Klik-handler die `showOpstelling = true` zet.

## Edge cases

- **AI-call faalt** → `generateAICommentary` valt terug op de
  template-fallback die `algorithmExplanation` vult → knop activeert alsnog.
- **Opgeslagen `wedstrijd.voorbeschouwing`** → direct toegekend aan
  `algorithmExplanation`, geen laadfase, knop meteen actief.
- **Teams bekend maar geen voorbeschouwing mogelijk** (lege squads) — komt
  in de praktijk niet voor zodra teams bekend zijn; geen aparte afhandeling.

## Out of scope

- Onthouden dat een gebruiker de voorbeschouwing al zag (bewust afgewezen:
  elke keer eerst).
- Wijzigingen aan de countdown/reveal-timing.
- Wijzigingen aan de AI-generatie zelf (`generateTeamCommentary` function).

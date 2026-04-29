# Spelersprofiel — design

Dedicated profielpagina per speler, FIFA-card aan de top met statistiek-blokken
eronder. Bereikbaar vanaf klassement en aanwezigheid via klik op een
spelersnaam. Publiek leesbaar zoals de rest van de app.

## Scope

**In scope (MVP):**
- Lazy-loaded `speler-profiel`-route op `/speler/:id`.
- FIFA-card hero met avatar (initialen op gradient), naam, positie, OVR rating
  prominent, 4 sub-attributen onderin (Wedstrijden, Win%, Zlatan/wed, Aanw%).
- Tier-kleur op basis van rating (brons / zilver / goud).
- Quick-stats grid: totaal wedstrijden, W/V/G, huidige + langste win-streak,
  Zlatan-, Ventiel-punten.
- Rating-trend lijngrafiek (laatste 12 maanden default, toggle naar "alles").
- Top-5 beste teammates op basis van co-win% (min 3 samen-wedstrijden).
- Match-history laatste 10: datum, eigen team, tegenstander-team, score, W/V/G.
- Klikbare namen in klassement + aanwezigheid die naar `/speler/:id` linken.
- `players.photo_url text NULL` schema-kolom toegevoegd; UI rendert foto als
  beschikbaar, anders fallback initialen-avatar.

**Out of scope (later):**
- Foto-upload UI (kolom is wel klaar, admin kan voorlopig handmatig in DB).
- Head-to-head tegenstander-secties (komt in een latere ronde).
- Deelbaar-als-afbeelding (html2canvas/Web Share API).
- Achievements/badges (hoort bij Gamification-roadmap-item).
- Rivaliteiten-tabel "Chris vs Ward lifetime 12-8-3".

## Achtergrond

`players` heeft `id, name, position, actief`. Rating is een afgeleide waarde
die `GameStatisticsService` per speler over de hele match-historie berekent.
W/V/G en Zlatan/Ventiel-tellingen komen ook al uit die service voor het
klassement. We hergebruiken die zoveel mogelijk; nieuwe queries alleen voor de
zaken die het klassement niet kent (rating-trend, win-streaks, beste teammates,
match-history).

## Belangrijkste ontwerpkeuzes

### FIFA-card als visueel hart

Eén component `player-card.component` rendert de card. Layout: vertical card
~360px hoog, ~240px breed (responsive: op mobiel volledige breedte tot
maximaal 320px). Gradient-achtergrond op basis van tier:

| Tier   | Rating-bucket | Gradient            |
|--------|---------------|---------------------|
| Brons  | < 5.5         | `#a87532 → #6b4214` |
| Zilver | 5.5 – 6.9     | `#c0c0c0 → #707070` |
| Goud   | ≥ 7.0         | `#e5b840 → #997820` |

Drempels arbitrair gekozen op basis van het bekende rating-bereik in dit team
(meeste spelers tussen 5 en 7); bij eerste deploy kan dit nog tweaken.

Card-content (van boven naar onder):
- Linksboven: positie-afkorting (in zwarte capsule).
- Rechtsboven: OVR rating, groot (afgerond op 0.1).
- Midden: avatar (initialen op semi-transparante cirkel, 96px) — als
  `photo_url` aanwezig: `<img>` met `object-fit: cover` in dezelfde cirkel.
- Onder avatar: naam in capitalised serif (groot).
- Onderaan: 2x2 grid sub-attributen, elk getal + label.

### Quick-stats grid

Onder de card. 6 cijfer-tegels in een flex-wrap. Elke tegel: groot getal +
korte label. Mat-card per tegel.

### Rating-trend grafiek

`ngx-charts` (of `chart.js`) — niet als nieuwe dependency, maar simpele
inline SVG-line is voldoende. Voor 12 maanden ~30 datapunten. Toggle
"12 maanden / alles".

Reconstructie: per match `m` van speler `p`, bereken rating als de
`GameStatisticsService` zou doen tot en met match `m`. Dat is een synchrone
berekening op de match-history (geen DB call per match); `O(matches²)` in
worst-case maar dataset is klein (~200 matches × 20 spelers = trivial).

### Top-5 teammates

Voor speler `p`: voor alle andere spelers `q`, tel `samen_gespeeld` (zelfde
team, zelfde match) en `samen_gewonnen`. Filter op `samen_gespeeld ≥ 3`,
sorteer op `samen_gewonnen / samen_gespeeld` desc, top 5. Bestaande
chemistry-modal heeft een vergelijkbare berekening; refactor naar
`PlayerProfileService` zodat beide het delen.

### Match-history laatste 10

Sortering: `match.date` desc. Per rij: datum, eigen team-kleur (Wit/Rood),
tegenstander-team-leden als initials-strook, score, W/V/G-chip.

### Routing en navigatie

```
/speler/:id  →  SpelerProfielModule (lazy)
```

Klikbaar maken vanaf:
- `leaderboard.component`: namen in de tabel → `routerLink="/speler/{{id}}"`.
- `attendance.component`: namen in de aanwezigheid-lijst → idem.

Geen menu-link in sidenav. Profielpagina is een bestemming, geen primaire nav.

### Schema-uitbreiding

```sql
ALTER TABLE players ADD COLUMN photo_url text;
```

Forward-compatibel: bestaande code raakt 'm niet aan, nieuwe profielpagina
checkt `if (player.photo_url) { ... } else { renderInitials() }`.

## Componenten

### Nieuwe bestanden

```
src/app/components/speler-profiel/
  speler-profiel.component.ts
  speler-profiel.component.html
  speler-profiel.component.scss
  speler-profiel.module.ts
  speler-profiel-routing.module.ts
  player-card/
    player-card.component.ts
    player-card.component.html
    player-card.component.scss
  rating-trend-chart/
    rating-trend-chart.component.ts
    rating-trend-chart.component.html
    rating-trend-chart.component.scss

src/app/services/
  player-profile.service.ts
  player-profile.service.spec.ts

src/app/utils/
  player-tier.ts          # tier-bucket + gradient-helper
  player-tier.spec.ts
  player-initials.ts      # naam → "CK" / "BdK"
  player-initials.spec.ts

supabase/migrations/
  YYYYMMDDHHMMSS_add_players_photo_url.sql
```

### Aangepaste bestanden

```
src/app/app-routing.module.ts                  # nieuwe lazy-route
src/app/components/leaderboard/...html         # naam → routerLink
src/app/components/attendance/...html          # naam → routerLink
src/app/types/database.types.ts                # photo_url toevoegen
functions/src/types/database.types.ts          # idem
```

### Behouden ongewijzigd

- `GameStatisticsService` (uitgebreid alleen als rating-trend reconstructie er
  niet in past — anders nieuwe `PlayerProfileService` ervoor).
- Klassement, kalender, team-generator-routes — niet geraakt.

## Data-flow

**Pagina-load:**
```
SpelerProfielComponent ngOnInit
  → ActivatedRoute params → playerId
  → forkJoin([
      PlayerService.getById(playerId),
      PlayerProfileService.getStats(playerId),
      PlayerProfileService.getRatingTrend(playerId, range),
      PlayerProfileService.getTopTeammates(playerId, 5),
      PlayerProfileService.getMatchHistory(playerId, 10),
    ])
  → render
```

`PlayerProfileService.getStats(id)` returnt:
```ts
{
  rating: number;
  matchesPlayed: number;
  wins: number;
  losses: number;
  draws: number;
  winRate: number;
  zlatanCount: number;
  ventielCount: number;
  zlatanPerMatch: number;
  attendanceRate: number;        // # aanwezig / # uitnodigingen
  currentWinStreak: number;
  longestWinStreak: number;
}
```

`getRatingTrend(id, range)` returnt array `{ matchDate, rating }`.
`getTopTeammates(id, n)` returnt array `{ teammate: Player, played, wins, winRate }`.
`getMatchHistory(id, n)` returnt array van match-rijen met team-mate-info.

## Acceptance criteria

- [ ] Route `/speler/:id` bereikbaar; lazy-loaded module.
- [ ] FIFA-card toont avatar (initialen of foto), naam, positie, rating, 4 sub-attrs.
- [ ] Tier-kleur correct (brons/zilver/goud).
- [ ] Quick-stats grid toont 6 tegels.
- [ ] Rating-trend grafiek met toggle 12mnd / alles.
- [ ] Top-5 teammates lijst.
- [ ] Match-history laatste 10 met W/V/G-chip.
- [ ] Namen in klassement → routerLink naar profiel.
- [ ] Namen in aanwezigheid → routerLink naar profiel.
- [ ] `players.photo_url` migratie geapplied; types-files bijgewerkt.
- [ ] Foto-fallback (initialen) werkt als `photo_url` null is.
- [ ] `npm test` blijft groen + nieuwe units voor tier/initials/profile-service.
- [ ] `ng build --configuration production` slaagt.

## Risico's en open punten

- **Rating-trend reconstructie kan zwaar zijn** als rating-formule veel
  history scant per match. Bij merkbare lag → resultaat memoizen of via
  Supabase view berekenen.
- **Tier-thresholds arbitrair**: brons <5.5 / zilver 5.5–7 / goud ≥7. Tweaken
  na visuele review op echte data.
- **`position`-veld is nu altijd "Speler"** — niet differentiërend. Voor MVP
  tonen we 'm gewoon; in later iteratie inline editen via admin.
- **Initial-avatars kunnen lelijk zijn** voor lange namen ("Anne-Marije" → "AM"
  is OK, "Christof" → "C" is mager). Util gebruikt eerste-letter + eerste-letter
  achternaam-deel als beschikbaar.
- **Bundle-size** van rating-trend-chart: bewust geen nieuwe lib; eigen SVG
  ~50 regels. Als gebruikers complexere visualisaties willen → later
  `ngx-charts` toevoegen als losse PR.

# Spelersprofiel polish — design

Tweede ronde op de profielpagina. Vervangt de bare-bones eigen SVG-grafiek door
ngx-charts, voegt een FIFA-stijl form-indicator toe (laatste-10 W/V/G bolletjes)
en geeft de cijfers een subtiele count-up-animatie.

## Scope

**In scope:**
- `RatingTrendChartComponent` herschreven met `@swimlane/ngx-charts`
  `<ngx-charts-line-chart>`. Smooth curve, gradient-fill onder de lijn, x-as met
  datums, y-as met rating, hover-tooltip. Toggle 12mnd / alles blijft.
- Nieuw `FormIndicatorComponent`: rij gekleurde bolletjes voor laatste 10
  wedstrijden (W groen, V rood, G grijs), tooltip per bolletje met datum + score.
  Plek: tussen FIFA-card-hero en quick-stats grid.
- `CountUpDirective`: subtiele `requestAnimationFrame`-animatie op de cijfers in
  de FIFA-card en quick-stats grid. Eén keer bij mount, ~600ms.

**Out of scope:**
- Foto-upload UI (kolom blijft handmatig vullen).
- Achievements/badges (apart roadmap-item: Gamification).
- Vergelijk-modus (overlay andere speler).
- Radar-/bar-charts of andere chart-types (kunnen volgen als ngx-charts er
  eenmaal in zit; nu alleen line).

## Achtergrond

Huidige `RatingTrendChartComponent` rendert handmatig een `<path>` zonder assen,
zonder datapunten, zonder tooltips. Bij kleine datasets (zoals nu) ziet 't er
visueel mager uit. ngx-charts is Angular-first, declaratief en levert deze
features standaard. Bundle-impact ~+100kb gzipped — acceptabel; is een lazy-loaded
module dus alleen kosten als de profiel-route geopend wordt.

## Belangrijkste ontwerpkeuzes

### `@swimlane/ngx-charts` als chart-library

- Versie compatibel met Angular 18 (recent: `^21.x`).
- `BrowserAnimationsModule` is al onderdeel van `app.module.ts`.
- We gebruiken in deze ronde **alleen** `<ngx-charts-line-chart>`. Andere
  modules importeren we pas als we ze nodig hebben.

### Line-chart configuratie

- Eén `series` met label "Rating".
- `[curve]="curveBasis"` voor smoothe lijn.
- Custom kleurenset (1 kleur): primary-blue.
- `xAxis="true"`, `yAxis="true"`, `xAxisLabel`/`yAxisLabel` leeg (titel boven
  grafiek volstaat). `[autoScale]="true"`. `[gradient]="true"`.
- Datums op x-as: ngx-charts ondersteunt Date-typed x-values.
- Hoogte vast op 280px (responsive width).

### `FormIndicatorComponent`

- Input: `MatchHistoryEntry[]` (of subset). Renderen alleen de laatste 10.
- Bolletje per match: 28×28px circle, `outcome.win/loss/draw` kleuren uit
  styles_variables (`$success-color`, `$error-color`, `$secondary-color`).
- Tooltip via `matTooltip`: `"Wit 5-3 — 18 mrt 2026"`.
- Order: oudste links, nieuwste rechts (visuele "voortgang").
- Empty-state: hide blok als `history.length === 0`.

### `CountUpDirective`

- Standalone directive, selector `[appCountUp]`.
- Bindt `@Input() appCountUp: number` (target value) en optioneel
  `@Input() countUpDuration = 600`.
- In `ngOnInit` (of `ngOnChanges` op eerste change): start animatie van 0 →
  target via `requestAnimationFrame`, schrijft naar `el.textContent`.
- Respecteert `prefers-reduced-motion`: skip animatie bij die preference, set
  direct.
- Toepasbaar op een `<span>` met cijferwaarde. Voor float-waarden:
  optioneel `@Input() countUpDecimals = 0` voor afronding.

### Plaatsing op de pagina

```
<app-fifa-card> (hero)
<app-form-indicator>     ← nieuw
<section quick-stats>    (cijfers krijgen [appCountUp])
<section trend>          (ngx-charts line-chart i.p.v. eigen SVG)
<section teammates>
<section history>
```

## Componenten

### Nieuwe bestanden
- `src/app/components/speler-profiel/form-indicator/form-indicator.component.{ts,html,scss}`
- `src/app/directives/count-up.directive.ts`
- `src/app/directives/count-up.directive.spec.ts`

### Aangepaste bestanden
- `src/app/components/speler-profiel/rating-trend-chart/rating-trend-chart.component.{ts,html,scss}` — herschreven met ngx-charts.
- `src/app/components/speler-profiel/speler-profiel.component.{html,ts}` — voeg `<app-form-indicator>` toe + `[appCountUp]` op cijfers.
- `src/app/components/speler-profiel/speler-profiel.module.ts` — declareer FormIndicatorComponent + import NgxChartsModule.
- `src/app/components/speler-profiel/player-card/player-card.component.html` — `[appCountUp]` op rating + sub-attrs.
- `package.json` + `package-lock.json` — `@swimlane/ngx-charts` toevoegen.

### Behouden ongewijzigd
- FIFA-card layout / tier-styling.
- Top-5 / Slechtste-5 teammates blokken.
- Match history table.

## Acceptance criteria

- [ ] Rating-trend tab toont een ngx-charts line-chart met smooth curve,
      gradient-fill, datum-as, rating-as en hover-tooltip.
- [ ] Toggle 12mnd / alles werkt zoals nu.
- [ ] Empty-state ("onvoldoende wedstrijden") blijft werken.
- [ ] Form-indicator toont 0-10 bolletjes (oudste links). Per bolletje een
      tooltip met team-kleur, score, datum, W/V/G.
- [ ] Count-up animatie loopt op rating, matchesPlayed, winRate%, ZLA/W,
      AANW%, en de 6 cijfers in quick-stats. ~600ms duration. Skip bij
      `prefers-reduced-motion`.
- [ ] `npm test` blijft groen.
- [ ] `ng build --configuration production` slaagt.
- [ ] Lazy-loaded bundle voor `/speler/:id` neemt redelijk toe (~100kb gzipped
      acceptabel; meet en flag als > +200kb).

## Risico's en open punten

- **ngx-charts versie-compat met Angular 18**: bevestigen tijdens install. Bij
  conflict valt project terug op handmatige line-chart-fix (eigen SVG met
  axes, datapoints, gradient-fill, tooltips).
- **Bundle-grootte**: ngx-charts trekt d3 mee. Alleen line-module importeren
  via `NgxChartsModule` is OK; tree-shaking zou de rest moeten droppen.
- **CountUpDirective + Angular change-detection**: directive werkt direct op
  `nativeElement.textContent`; conflicteert niet met data-binding zolang de
  template-content `{{ value }}` niet ook actief beheerd wordt. Aanpak:
  directive zet element-content; template-binding wordt vervangen door de
  directive-output. Doc dit duidelijk in de directive.
- **Form-indicator op weinig data**: <10 wedstrijden → toon wat er is, geen
  placeholders.

# Speler-modal mobielvriendelijk maken — Ontwerp

**Datum:** 2026-07-01
**Component:** `src/app/components/admin/admin-spelers/speler-dialog/`
**Type:** UI/UX-verfijning (CSS + template), geen logica-wijziging

## Probleem

De edit-/add-modal voor spelerbeheer (`SpelerDialogComponent`) oogt op mobiel niet fris:

1. **Te weinig marge** tussen de modal-header en het eerste element.
2. **Tekst te groot** en **inputvelden passen niet** in de modal (horizontale overflow).
3. De **"Recente mutaties"**-lijst (strippenkaart-ledger) staat altijd open onderaan de Lidmaatschap-tab en maakt de modal onnodig lang.

## Doel

Een compacte, mobielvriendelijke modal die de Material-UX-richtlijnen volgt: correcte typografie, genoeg witruimte onder de header, velden die binnen de modal passen, en de mutatie-historie op-aanvraag in plaats van altijd zichtbaar.

## Scope

- **Alleen** de component `speler-dialog` (template `.html` + styles `.scss`) en, waar nodig, een scoped titel-fix.
- **Geen** wijziging aan de globale `h2`-regel in `styles.scss` (die raakt andere schermen).
- **Geen** wijzigingen aan de TypeScript-logica, services of dataflow.
- **Geen** wijziging aan de tab-structuur (Gegevens / Lidmaatschap blijft).

## Root-cause-analyse

### Grote header
`speler-dialog.component.html` gebruikt `<h2 mat-dialog-title>`. In `src/styles.scss` staat een globale regel `h2 { font-size: $font-size-3xl (30px) }` die over de Material-dialogtitel heen bleedt. Material's eigen dialogtitel is ~20px medium; de globale regel maakt hem 30px.

**Fix:** een component-scoped regel die `[mat-dialog-title]` (de dialogtitel) terugzet naar Material-formaat (`$font-size-xl` = 20px, `$font-weight-medium`), zodat de globale bleed lokaal wordt overschreven zónder de globale regel aan te raken.

### Inputs passen niet / overflow
Op mobiel is het panel `width: 100vw` (regel in `styles.scss`, `.speler-dialog-panel`). Horizontale padding stapelt:
- `mat-dialog-content { padding: 8px 20px 12px }` → 40px horizontaal,
- plus de eigen padding van `mat-mdc-tab-body-content` binnen het tab-panel.

De `.full-width`-velden zijn `width: 100%` zonder expliciete `box-sizing`-garantie binnen dat gestapelde padding-model, wat op smalle schermen tot horizontale overflow leidt.

**Fix:**
- Neutraliseer de dubbele padding op mobiel: laat de horizontale padding op één niveau liggen (dialog-content) en zet de tab-body-content-padding horizontaal op 0 binnen deze modal.
- Borg `box-sizing: border-box` op de form-velden en `max-width: 100%` zodat niets buiten de modal duwt.
- `.saldo-bewerk mat-form-field { width: 150px }` en de knop kunnen samen breder zijn dan een smal scherm → laat deze rij netjes wrappen (staat al `flex-wrap: wrap`, maar borg dat het saldoveld `flex: 1 1 auto` met een `min-width` krijgt i.p.v. hard 150px op mobiel).

### Grote teksten algemeen
De globale koppen-/labelregels in `styles.scss` bleeden binnen de modal. De component overschrijft labels al deels; we borgen dat labels en inputs in de modal `$font-size-base` (16px) gebruiken en dat de `h3` "Recente mutaties" (nu al `$font-size-lg`) verdwijnt in het expansion-panel (zie hieronder).

## Ontwerp per klacht

### 1. Header & spacing
- Scoped titel-regel: `~20px`, `$font-weight-medium`, met ondermarge naar de tab-balk.
- Ruimere `padding-top` op `.tab-content` en/of marge boven de tab-groep, zodat er duidelijk lucht zit tussen header en eerste veld.

### 2. Compactere velden
- Dubbele horizontale padding wegnemen; `box-sizing`/`max-width` borgen (zie root-cause).
- Op mobiel (`@media (max-width: $bp-mobile)`) de veldspacing iets strakker (`margin-bottom` van `.full-width` van 16px → 12px) voor een compactere kolom, zonder gedrongen te ogen.
- Toggle-rijen (`.toggle-field`) blijven, maar borgen dat labels niet de globale uppercase/bold-bleed krijgen (staat al overschreven — verifiëren en behouden).

### 3. Mutaties inklapbaar
- Vervang het blok `<h3>Recente mutaties</h3> + lijst` door een `mat-expansion-panel`, **standaard dichtgeklapt**.
- Paneel-titel: `Recente mutaties` met daarachter het aantal, bijv. `Recente mutaties (12)`; bij `0` toont het paneel "Nog geen mutaties" als het wordt uitgeklapt.
- De bestaande `*ngIf="!ledgerLoading"`-logica en de `ledger`-lijst blijven binnen het uitgeklapte paneel.
- `MatExpansionModule` toevoegen aan de imports van `admin.module.ts` (nog niet aanwezig — geverifieerd).

## Mockup — Lidmaatschap-tab op mobiel

```
┌──────────────────────────────┐
│ Speler wijzigen              │  ← ~20px, medium (niet 30px)
│                              │  ← extra marge
│ [ Gegevens ][ Lidmaatschap ] │
│                              │
│ Op de strippenkaart     (○ ) │
│ Abonnement 2025/2026    ( ○) │
│                              │
│ Saldo [  8 ] [Bijwerken]     │
│ [+5 strippen] [+10 strippen] │
│                              │
│ ▸ Recente mutaties (12)      │  ← dicht, tik = uitklappen
└──────────────────────────────┘
```

## Bestanden die wijzigen

- `speler-dialog.component.html` — `h3`+lijst → `mat-expansion-panel`.
- `speler-dialog.component.scss` — scoped titel-fix, spacing, `box-sizing`/overflow, mobiele media-query.
- `admin.module.ts` — `MatExpansionModule` toevoegen aan imports (nog niet aanwezig).

## Buiten scope

- Globale `h2`-regel in `styles.scss` blijft ongewijzigd.
- Tab-structuur, veldenset, validatie en alle service-/dataflow-logica blijven ongewijzigd.
- De Gegevens-tab-inhoud verandert alleen mee voor zover het de gedeelde spacing-/typografie-fixes betreft.

## Testen / verificatie

- `ng build` slaagt zonder errors.
- Handmatig (of via browser-tooling) op mobiele viewport (≤600px): geen horizontale scroll, titel ~20px, zichtbare marge onder header, velden binnen de modal, mutaties standaard dicht en uitklapbaar.
- Bestaande unit-test `speler-dialog.component.spec.ts` blijft groen; deze spreekt de ledger-lijst niet direct aan (geverifieerd), dus geen testaanpassing nodig.

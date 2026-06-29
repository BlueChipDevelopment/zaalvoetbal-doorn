# Speler- & lidmaatschap-dialog samenvoegen tot tabs

**Datum:** 2026-06-29
**Status:** Ontwerp ter review

## Probleem

Spelerbeheer heeft nu twee aparte dialogs (speler **wijzigen** en
**lidmaatschap**) en twee actieknoppen per rij. Dat samenvoegen tot één getabde
dialog maakt het beheer overzichtelijker.

Daarnaast lost dit een bestaande bug op: de wijzig-dialog bewaart
`usesStrippenkaart` niet bij opslaan (`speler-dialog.component.ts:59-65` bouwt
het speler-object zonder dat veld), waardoor de data-source bij `update`
`uses_strippenkaart: undefined ?? false` schrijft. Gevolg: een speler bewerken +
opslaan **zet diens strippenkaart-status op false**.

## Besluiten (uit brainstorm)

1. Eén `SpelerDialogComponent` met een `mat-tab-group`:
   - **Tab "Gegevens"** — bestaand formulier (naam/positie/actief/e-mail/beheerder),
     opgeslagen via de footer-knop **Opslaan** (formulier-model, geeft resultaat
     terug aan de parent).
   - **Tab "Lidmaatschap"** — strippenkaart-toggle, abonnement-toggle (huidig
     seizoen), een **bewerkbaar saldo-totaal** + `+5`/`+10`-snelknoppen, en
     mutatie-historie. **Directe acties** (schrijven meteen weg), zoals de
     huidige lidmaatschap-dialog.
2. De **strippenkaart-toggle** staat op de Lidmaatschap-tab (directe actie).
3. De Lidmaatschap-tab is **alleen actief in bewerk-modus** (bij toevoegen
   bestaat de speler nog niet).
4. `LidmaatschapDialogComponent` verdwijnt; de inhoud verhuist naar de getabde
   `SpelerDialogComponent`.
5. De losse `card_membership`-actieknop verdwijnt; het potlood-icoon opent de
   getabde dialog.
6. De "Lidmaatschap"-kolom toont voortaan **abonnement én strippen**.
7. **Bugfix:** de Gegevens-opslag bewaart `usesStrippenkaart`.

## Architectuur

### Getabde dialog

`SpelerDialogComponent` host een `mat-tab-group` (MatTabsModule zit al in
`admin.module`). Twee interactiemodellen, elk binnen zijn eigen tab — precies
zoals de twee dialogs nu al werken:

- **Gegevens-tab = formulier.** Onveranderd reactive form. De footer
  **Opslaan/Annuleren** stuurt dit formulier; `onSave` sluit de dialog met
  `{ player, originalName }` (edit) of `player` (add), waarna de parent
  `updatePlayer`/`addPlayer` aanroept.
- **Lidmaatschap-tab = directe acties.** Strippenkaart-toggle (schrijft via
  `PlayerService.updatePlayer`), abonnement-toggle (`StrippenkaartService.setSubscription`),
  strippen-saldo en mutatie-historie. Elke actie schrijft meteen weg en herlaadt
  de tab-data. "Annuleren" draait deze niet terug (een gekochte strippenkaart
  annuleer je niet); dat is inherent en acceptabel.
  - **`+5`/`+10`-snelknoppen** → `StrippenkaartService.addStrips` (mutatie
    `kaart gekocht`), voor het normale "kaart gekocht"-geval.
  - **Bewerkbaar saldo-totaal** — een invoerveld voorgevuld met het huidige
    saldo. Bij opslaan boekt het component het **verschil** als correctie:
    `delta = nieuw_totaal − huidig_saldo`, en roept `StrippenkaartService.correct(playerId, delta)`
    aan (alleen als `delta !== 0`). De gebruiker zet dus simpelweg het nieuwe
    totaal; het mutatie-logboek blijft de bron van waarheid (geen destructieve
    overschrijving, historie behouden). Dit vervangt de oude `±`-correctie-UI.

**Add-modus:** alleen de Gegevens-tab; de Lidmaatschap-tab is verborgen
(`*ngIf="isEditMode"`) omdat er nog geen speler-id is.

**Bugfix in `onSave`:** het component houdt de actuele `usesStrippenkaart`-waarde
bij (geïnitialiseerd uit `data.player`, bijgewerkt wanneer de toggle op de
Lidmaatschap-tab wordt omgezet). `onSave` neemt die waarde mee in het
player-object zodat opslaan van de Gegevens-tab de strippenkaart-status niet
wist:
```typescript
const player: PlayerSheetData = {
  name: formValue.name,
  position: formValue.position,
  actief: formValue.actief,
  email: formValue.email?.trim().toLowerCase() || undefined,
  isAdmin: formValue.isAdmin,
  usesStrippenkaart: this.usesStrippenkaart,
};
```

### Statuskolom

De bestaande "Lidmaatschap"-kolom toont in één oogopslag:
- **`Abo`** als de speler een abonnement heeft voor het huidige seizoen,
- **`Strippen: N`** als `usesStrippenkaart`,
- beide naast elkaar als beide gelden, anders **`—`**.

`AdminSpelersComponent` laadt daarvoor het huidige seizoen
(`GameStatisticsService.getCurrentSeason()`) en éénmalig
`StrippenkaartService`-subscriptions voor dat seizoen (één call → `Set<number>`
van speler-ids), naast de bestaande saldo's (gedeelde fetch via `inflight$`).

## Componenten & verantwoordelijkheden

| Unit | Wijziging |
|------|-----------|
| `SpelerDialogComponent` (.ts/.html) | `mat-tab-group`; Lidmaatschap-state + acties (uit `LidmaatschapDialogComponent`) ingevoegd; inject `PlayerService`, `StrippenkaartService`, `GameStatisticsService`, `SnackbarService`; `onSave` bewaart `usesStrippenkaart`. |
| `LidmaatschapDialogComponent` (.ts/.html/.scss) | **Verwijderd** (inhoud verhuisd). |
| `admin.module.ts` | `LidmaatschapDialogComponent` uit declarations halen. (MatTabsModule + FormsModule zitten er al.) |
| `AdminSpelersComponent` (.ts) | `openLidmaatschap` + `card_membership`-knop verwijderen; huidig seizoen + subscriptions laden; `isSubscribed`-set voor de kolom. |
| `admin-spelers.component.html` | Lidmaatschap-kolom toont `Abo`/`Strippen: N`/`—`; losse lidmaatschap-actieknop weg. |

## Datastroom

1. Admin klikt het potlood-icoon → getabde dialog opent op **Gegevens**.
2. Op **Lidmaatschap** (edit) laadt de dialog saldo/abonnement/historie; toggles en
   strippen-acties schrijven direct weg en herladen de tab.
3. Footer **Opslaan** sluit met het Gegevens-resultaat → parent `updatePlayer`
   (inclusief behouden `usesStrippenkaart`) → tabel herlaadt (saldo + abonnement +
   strippen-status in de kolom).

## Foutafhandeling

- Ongeldig Gegevens-formulier → Opslaan uitgeschakeld (bestaand gedrag).
- Fout bij een directe lidmaatschap-actie → bestaande snackbar-foutmelding; de
  tab-state wordt niet gewijzigd.
- Add-modus → Lidmaatschap-tab verborgen, geen id-afhankelijke calls.

## Testen

- Unit: `SpelerDialogComponent.onSave` bewaart `usesStrippenkaart` in edit-modus
  (de bugfix) — nieuw test.
- Unit: het bewerkbare saldo-totaal boekt het juiste verschil — `correct` wordt
  aangeroepen met `nieuw_totaal − huidig_saldo`, en niet aangeroepen als het
  totaal ongewijzigd is.
- Unit: bestaande vaste-beheerder/`isAdmin`-toggle-logica blijft werken.
- Dev-build slaagt (template met tabs compileert; `LidmaatschapDialogComponent`-
  referenties zijn verwijderd).
- Volledige suite blijft groen (o.a. profiel-spec ongemoeid).

## Buiten scope (YAGNI)

- Geen datamodel- of data-source-wijzigingen (op de bugfix-mapping na, die al
  bestaat).
- Geen wijziging aan de aftreklogica of het saldo-model.
- Geen nieuwe lidmaatschapsvelden.

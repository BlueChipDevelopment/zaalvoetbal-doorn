# Speler-modal mobielvriendelijk — Implementatieplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** De speler-beheer-modal (`SpelerDialogComponent`) op mobiel compact en fris maken: kleinere header, meer marge onder de header, velden die binnen de modal passen, en de mutatie-historie inklapbaar.

**Architecture:** Puur presentatie: één template-wijziging (mutaties → `mat-expansion-panel`), één module-import (`MatExpansionModule`), en scoped SCSS-fixes voor typografie/spacing/overflow. Geen wijziging aan TypeScript-logica, services of dataflow.

**Tech Stack:** Angular 18, Angular Material, SCSS met variabelen uit `src/styles_variables.scss`.

## Global Constraints

- Gebruik kleuren/typografie-variabelen uit `src/styles_variables.scss` — geen hardcoded waarden.
- Volg Angular Material UX-conventies.
- **Niet** de globale `h2`-regel in `src/styles.scss` aanraken (raakt andere schermen) — fix scoped in de component.
- Geen wijzigingen aan logica, validatie of tab-structuur (Gegevens / Lidmaatschap blijft).
- Werk direct op `main` (projectconventie); geen feature-branch.

---

### Task 1: Mutaties in een inklapbaar paneel

**Files:**
- Modify: `src/app/components/admin/admin.module.ts` (imports)
- Modify: `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.html:79-88`
- Test: `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.spec.ts` (bestaand, blijft groen)

**Interfaces:**
- Consumes: bestaande componentvelden `ledger: StripTransaction[]` en `ledgerLoading: boolean` (ongewijzigd).
- Produces: geen nieuwe publieke API; alleen template + module-import.

- [ ] **Step 1: Voeg `MatExpansionModule` toe aan de admin-module**

In `src/app/components/admin/admin.module.ts`, voeg de import toe onder de andere Material-imports (na regel 16, `MatSnackBarModule`):

```typescript
import { MatExpansionModule } from '@angular/material/expansion';
```

En voeg `MatExpansionModule` toe aan de `imports`-array (na `MatSnackBarModule,` op regel 56):

```typescript
    MatSnackBarModule,
    MatExpansionModule,
```

- [ ] **Step 2: Vervang de mutaties-`h3`+lijst door een expansion-panel**

In `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.html`, vervang dit blok (regels 79-88):

```html
        <h3>Recente mutaties</h3>
        <div *ngIf="!ledgerLoading">
          <p *ngIf="ledger.length === 0">Nog geen mutaties.</p>
          <ul class="ledger">
            <li *ngFor="let t of ledger">
              {{ t.amount > 0 ? '+' : '' }}{{ t.amount }} — {{ t.reason }}
              <span class="datum" *ngIf="t.createdAt">({{ t.createdAt | date:'dd-MM-yyyy' }})</span>
            </li>
          </ul>
        </div>
```

door:

```html
        <mat-expansion-panel class="mutaties-panel" *ngIf="!ledgerLoading">
          <mat-expansion-panel-header>
            <mat-panel-title>Recente mutaties ({{ ledger.length }})</mat-panel-title>
          </mat-expansion-panel-header>
          <p *ngIf="ledger.length === 0">Nog geen mutaties.</p>
          <ul class="ledger">
            <li *ngFor="let t of ledger">
              {{ t.amount > 0 ? '+' : '' }}{{ t.amount }} — {{ t.reason }}
              <span class="datum" *ngIf="t.createdAt">({{ t.createdAt | date:'dd-MM-yyyy' }})</span>
            </li>
          </ul>
        </mat-expansion-panel>
```

Het paneel is standaard dichtgeklapt; de titel toont het aantal mutaties.

- [ ] **Step 3: Draai de bestaande unit-tests (moeten groen blijven)**

Run: `ng test --watch=false --browsers=ChromeHeadless --include='**/speler-dialog.component.spec.ts'`
Expected: PASS — de 3 bestaande tests slagen (spec gebruikt `NO_ERRORS_SCHEMA`, dus de nieuwe tag breekt niets).

- [ ] **Step 4: Build om de template/module-wijziging te valideren**

Run: `ng build --configuration production`
Expected: build slaagt zonder errors (met name: geen "mat-expansion-panel is not a known element").

- [ ] **Step 5: Commit**

```bash
git add src/app/components/admin/admin.module.ts src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.html
git commit -m "Speler-modal: recente mutaties inklapbaar (expansion panel)"
```

---

### Task 2: Typografie, spacing & overflow op mobiel

**Files:**
- Modify: `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.scss`

**Interfaces:**
- Consumes: SCSS-variabelen uit `src/styles_variables.scss` (`$font-size-*`, `$font-weight-*`, `$line-height-*`, `$border-color`, `$bp-mobile`).
- Produces: geen code-API; alleen visuele wijzigingen.

- [ ] **Step 1: Scoped titel-fix + ruimere spacing onder de header**

In `speler-dialog.component.scss`, voeg bovenaan (na de `@import` op regel 1) een scoped regel toe die de globale `h2 { 30px }` lokaal terugbrengt naar Material-formaat, plus marge onder de titel:

```scss
// De globale h2-regel (30px) bleedt over de dialogtitel; scoped terug naar
// Material-formaat en wat lucht naar de tab-balk eronder.
h2[mat-dialog-title] {
  font-size: $font-size-xl;          // 20px i.p.v. globale 30px
  font-weight: $font-weight-medium;
  line-height: $line-height-tight;
  margin: 0 0 8px;
}
```

Vergroot daarnaast de ademruimte boven het eerste veld: wijzig `.tab-content` (regels 3-7) van `padding-top: 12px` naar `16px`:

```scss
.tab-content {
  display: flex;
  flex-direction: column;
  padding-top: 16px;
}
```

- [ ] **Step 2: Overflow wegnemen (dubbele tab-padding + box-sizing)**

Voeg toe: neutraliseer de horizontale padding van de Material tab-body binnen deze dialog, en borg `box-sizing` op de volle-breedte velden. Plaats na de `.tab-content`-regel:

```scss
// Material's tab-body voegt eigen horizontale padding toe bovenop
// mat-dialog-content; op smalle schermen duwt dat velden buiten de modal.
:host ::ng-deep .mat-mdc-tab-body-content {
  padding-left: 0;
  padding-right: 0;
  box-sizing: border-box;
}
```

En breid de bestaande `.full-width` (regels 9-12) uit met `max-width` en `box-sizing`:

```scss
.full-width {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
}
```

- [ ] **Step 3: Mobiele compactheid + saldoveld dat meeschaalt**

Voeg onderaan het bestand een mobiele media-query toe die de verticale spacing strakker maakt en het saldoveld laat meeschalen i.p.v. de harde `150px`:

```scss
@media (max-width: $bp-mobile) {
  .full-width {
    margin-bottom: 12px;
  }

  .toggle-field {
    margin-bottom: 12px;
  }

  .saldo-bewerk mat-form-field {
    flex: 1 1 auto;
    width: auto;
    min-width: 120px;
  }
}
```

- [ ] **Step 4: Verwijder de nu ongebruikte `h3`-regel + geef het paneel een strak randje**

De `<h3>Recente mutaties</h3>` is in Task 1 vervangen; verwijder de nu dode regel `.tab-content h3 { ... }` (regels 37-42) en voeg in plaats daarvan een lichte styling voor het mutaties-paneel toe:

```scss
// ─── Lidmaatschap-tab ───────────────────────────────────────────────
.mutaties-panel {
  box-shadow: none;
  border: 1px solid $border-color;
  border-radius: 4px;
}
```

- [ ] **Step 5: Build om de SCSS te valideren**

Run: `ng build --configuration production`
Expected: build slaagt zonder SCSS-compilatiefouten.

- [ ] **Step 6: Visuele verificatie op mobiele viewport**

Open de app, ga naar Beheer → Spelers, open een speler ter bewerking en zet de browser op een mobiele viewport (≤600px breed, bijv. via DevTools device toolbar). Controleer:
- Titel is ~20px (niet gedrongen/groot), met zichtbare marge naar de tab-balk.
- Geen horizontale scroll; alle inputvelden vallen binnen de modal.
- Op de Lidmaatschap-tab staat "Recente mutaties (n)" standaard dichtgeklapt en klapt met één tik uit.

- [ ] **Step 7: Commit**

```bash
git add src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.scss
git commit -m "Speler-modal: mobiele typografie, spacing en overflow-fix"
```

---

## Self-Review

**Spec coverage:**
- Klacht 1 (marge onder header) → Task 2 Step 1 (titel-marge + `.tab-content` padding-top).
- Klacht 2 (grote tekst / velden passen niet) → Task 2 Step 1 (titel-fix), Step 2 (overflow/box-sizing), Step 3 (mobiele compactheid).
- Klacht 3 (mutaties verstoppen) → Task 1 (expansion panel).
- Root-cause grote header (globale `h2`) → Task 2 Step 1, scoped, zonder globale regel te raken. ✓
- `MatExpansionModule`-import → Task 1 Step 1. ✓
- Scope-grenzen (geen logica/tab-structuur/globale h2) gerespecteerd. ✓

**Placeholder scan:** geen TBD/TODO/"handle edge cases"; alle stappen bevatten concrete code of commando's. ✓

**Type consistency:** geen nieuwe TS-signatures; hergebruikt bestaande `ledger`/`ledgerLoading`. CSS-klassenaam `.mutaties-panel` consistent tussen Task 1 (template) en Task 2 (scss). ✓

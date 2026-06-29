# Speler- & lidmaatschap-dialog samenvoegen tot tabs — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** De wijzig- en lidmaatschap-dialog samenvoegen tot één getabde `SpelerDialogComponent`, met een bewerkbaar strippen-saldo, een verrijkte statuskolom, en een bugfix die voorkomt dat opslaan `usesStrippenkaart` wist.

**Architecture:** `SpelerDialogComponent` krijgt een `mat-tab-group` met tab "Gegevens" (bestaand formulier, opslaan via footer) en tab "Lidmaatschap" (directe acties, alleen in bewerk-modus, inhoud uit de te verwijderen `LidmaatschapDialogComponent`). De saldo-correctie wordt een bewerkbaar totaal-veld dat intern het verschil als `correctie`-mutatie boekt. De statuskolom toont abonnement + strippen.

**Tech Stack:** Angular 18, Angular Material (MatTabsModule), RxJS, Jasmine/Karma, Supabase.

## Global Constraints

- Geen datamodel-/data-source-wijzigingen; saldo blijft `sum(strip_transactions.amount)` via het bestaande logboek.
- De **Lidmaatschap-tab = directe acties** (schrijven meteen weg + herladen); de **Gegevens-tab = formulier** (opslaan via footer). "Annuleren" draait directe acties niet terug.
- Lidmaatschap-tab alleen in **bewerk-modus** (`*ngIf="isEditMode"`).
- Bewerkbaar saldo-totaal boekt `delta = nieuw_totaal − huidig_saldo` via `StrippenkaartService.correct(playerId, delta)`, alleen als `delta !== 0`.
- `onSave` moet `usesStrippenkaart` meenemen (bugfix).
- Mutaties (writes) gebruiken **geen** `takeUntilDestroyed`.
- `MatTabsModule` en `FormsModule` zitten al in `admin.module.ts`.
- Volg bestaande Material-/codeconventies; reason-strings blijven `'wedstrijd'`/`'kaart gekocht'`/`'correctie'`.

---

## File Structure

- Modify: `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.ts` — tabs-logica + lidmaatschap-state + bugfix.
- Modify: `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.html` — `mat-tab-group`.
- Create: `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.spec.ts` — onSave-bugfix + applyTotal-delta.
- Delete: `src/app/components/admin/admin-spelers/lidmaatschap-dialog/` (`.ts`/`.html`/`.scss`).
- Modify: `src/app/components/admin/admin.module.ts` — `LidmaatschapDialogComponent` uit imports/declarations.
- Modify: `src/app/components/admin/admin-spelers/admin-spelers.component.ts` — `openLidmaatschap` + import weg (Task 1); abonnement-set laden (Task 2).
- Modify: `src/app/components/admin/admin-spelers/admin-spelers.component.html` — `card_membership`-knop weg (Task 1); kolom `Abo`+`Strippen` (Task 2).

---

### Task 1: Getabde SpelerDialog + bugfix + bewerkbaar saldo; oude dialog verwijderen

**Files:**
- Modify: `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.ts`
- Modify: `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.html`
- Create: `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.spec.ts`
- Delete: `src/app/components/admin/admin-spelers/lidmaatschap-dialog/lidmaatschap-dialog.component.ts` + `.html` + `.scss`
- Modify: `src/app/components/admin/admin.module.ts`
- Modify: `src/app/components/admin/admin-spelers/admin-spelers.component.ts`
- Modify: `src/app/components/admin/admin-spelers/admin-spelers.component.html`

**Interfaces:**
- Consumes: `PlayerService.updatePlayer`, `StrippenkaartService` (`getBalance`, `getLedger`, `addStrips`, `correct`, `isSubscribed`, `setSubscription`, `refresh`), `GameStatisticsService.getCurrentSeason()`, `SnackbarService.error`, `StripTransaction`.
- Produces: `SpelerDialogComponent` met tabs; `onSave` levert (edit) `{ player, originalName }` met `usesStrippenkaart` gezet; `applyTotal()` boekt het saldo-verschil.

- [ ] **Step 1: Schrijf de spec (failing)**

Create `speler-dialog.component.spec.ts`:
```typescript
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { SpelerDialogComponent } from './speler-dialog.component';
import { PlayerService } from '../../../../services/player.service';
import { StrippenkaartService } from '../../../../services/strippenkaart.service';
import { GameStatisticsService } from '../../../../services/game.statistics.service';
import { SnackbarService } from '../../../../services/snackbar.service';

describe('SpelerDialogComponent', () => {
  let dialogRef: jasmine.SpyObj<MatDialogRef<SpelerDialogComponent>>;
  let strippenkaart: jasmine.SpyObj<StrippenkaartService>;
  let playerService: jasmine.SpyObj<PlayerService>;

  function setup(data: any) {
    dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    strippenkaart = jasmine.createSpyObj('StrippenkaartService',
      ['getBalance', 'getLedger', 'addStrips', 'correct', 'isSubscribed', 'setSubscription', 'refresh']);
    strippenkaart.getBalance.and.returnValue(of(0));
    strippenkaart.getLedger.and.returnValue(of([]));
    strippenkaart.correct.and.returnValue(of(undefined));
    strippenkaart.addStrips.and.returnValue(of(undefined));
    strippenkaart.isSubscribed.and.returnValue(of(false));
    playerService = jasmine.createSpyObj('PlayerService', ['updatePlayer']);
    playerService.updatePlayer.and.returnValue(of(undefined));
    const stats = { getCurrentSeason: () => of(null) };

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SpelerDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogRef },
        { provide: MAT_DIALOG_DATA, useValue: data },
        { provide: PlayerService, useValue: playerService },
        { provide: StrippenkaartService, useValue: strippenkaart },
        { provide: GameStatisticsService, useValue: stats },
        { provide: SnackbarService, useValue: jasmine.createSpyObj('SnackbarService', ['error']) },
      ],
    });
    return TestBed.createComponent(SpelerDialogComponent).componentInstance;
  }

  it('onSave bewaart usesStrippenkaart in edit-modus (bugfix)', () => {
    const c = setup({ mode: 'edit', originalName: 'Bob', player: { id: 1, name: 'Bob', position: 'Speler', actief: true, usesStrippenkaart: true } });
    c.onSave();
    const arg = dialogRef.close.calls.mostRecent().args[0];
    expect(arg.player.usesStrippenkaart).toBeTrue();
    expect(arg.originalName).toBe('Bob');
  });

  it('applyTotal boekt het verschil als correctie', () => {
    const c = setup({ mode: 'edit', originalName: 'Bob', player: { id: 5, name: 'Bob', position: 'Speler', actief: true } });
    c.balance = 3;
    c.newTotal = 10;
    c.applyTotal();
    expect(strippenkaart.correct).toHaveBeenCalledWith(5, 7);
  });

  it('applyTotal doet niets als het totaal ongewijzigd is', () => {
    const c = setup({ mode: 'edit', originalName: 'Bob', player: { id: 5, name: 'Bob', position: 'Speler', actief: true } });
    c.balance = 8;
    c.newTotal = 8;
    c.applyTotal();
    expect(strippenkaart.correct).not.toHaveBeenCalled();
  });
});
```

- [ ] **Step 2: Run om falen te bevestigen**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/speler-dialog.component.spec.ts'`
Expected: FAIL — `applyTotal`/`newTotal`/`balance` bestaan nog niet en `onSave` mist `usesStrippenkaart`.

- [ ] **Step 3: Herschrijf de component**

Vervang `speler-dialog.component.ts` volledig door:
```typescript
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerSheetData } from '../../../../interfaces/IPlayerSheet';
import { StripTransaction } from '../../../../interfaces/IStrippenkaart';
import { environment } from '../../../../../environments/environment';
import { PlayerService } from '../../../../services/player.service';
import { StrippenkaartService } from '../../../../services/strippenkaart.service';
import { GameStatisticsService } from '../../../../services/game.statistics.service';
import { SnackbarService } from '../../../../services/snackbar.service';

export interface SpelerDialogData {
  player: PlayerSheetData | null;
  mode: 'add' | 'edit';
  originalName?: string;
}

@Component({
  selector: 'app-speler-dialog',
  templateUrl: './speler-dialog.component.html',
  styleUrls: ['./speler-dialog.component.scss']
})
export class SpelerDialogComponent implements OnInit {
  spelerForm: FormGroup;
  isEditMode: boolean;
  /** True als deze speler een vaste (env-whitelist) beheerder is: rol niet wijzigbaar. */
  isVasteBeheerder = false;
  positions = ['Keeper', 'Speler'];

  // Lidmaatschap-tab state (alleen in edit-modus gebruikt)
  player: PlayerSheetData | null;
  season: string | null = null;
  usesStrippenkaart = false;
  hasSubscription = false;
  balance = 0;
  newTotal: number | null = null;
  ledger: StripTransaction[] = [];
  ledgerLoading = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SpelerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SpelerDialogData,
    private playerService: PlayerService,
    private strippenkaart: StrippenkaartService,
    private stats: GameStatisticsService,
    private snackbar: SnackbarService,
  ) {
    this.isEditMode = data.mode === 'edit';
    this.player = data.player;
    this.usesStrippenkaart = !!data.player?.usesStrippenkaart;

    const envAdmins = environment.adminEmails.map((e: string) => e.toLowerCase());
    const playerEmail = data.player?.email?.toLowerCase();
    this.isVasteBeheerder = !!playerEmail && envAdmins.includes(playerEmail);

    this.spelerForm = this.fb.group({
      name: [data.player?.name || '', Validators.required],
      position: [data.player?.position || 'Speler', Validators.required],
      actief: [data.player?.actief !== undefined ? data.player.actief : true],
      email: [data.player?.email || '', Validators.email],
      isAdmin: [{ value: data.player?.isAdmin || false, disabled: this.isVasteBeheerder }]
    });

    if (this.isEditMode) {
      this.spelerForm.get('name')?.disable();
    }
  }

  ngOnInit(): void {
    if (this.isEditMode && this.player?.id != null) {
      this.stats.getCurrentSeason().subscribe(season => {
        this.season = season;
        this.reloadMembership();
      });
    }
  }

  private reloadMembership(): void {
    const id = this.player!.id!;
    this.ledgerLoading = true;
    this.strippenkaart.refresh();
    this.strippenkaart.getBalance(id).subscribe(b => {
      this.balance = b;
      this.newTotal = b;
    });
    this.strippenkaart.getLedger(id).subscribe(l => {
      this.ledger = [...l].reverse();
      this.ledgerLoading = false;
    });
    if (this.season) {
      this.strippenkaart.isSubscribed(id, this.season).subscribe(s => (this.hasSubscription = s));
    }
  }

  toggleStrippenkaart(): void {
    const updated: PlayerSheetData = { ...(this.player as PlayerSheetData), usesStrippenkaart: !this.usesStrippenkaart };
    this.playerService.updatePlayer(this.player!.name, updated).subscribe({
      next: () => {
        this.usesStrippenkaart = !this.usesStrippenkaart;
        this.player = updated;
      },
      error: () => this.snackbar.error('Kon strippenkaart-status niet opslaan'),
    });
  }

  toggleSubscription(): void {
    if (!this.season) return;
    const target = !this.hasSubscription;
    this.strippenkaart.setSubscription(this.player!.id!, this.season, target).subscribe({
      next: () => (this.hasSubscription = target),
      error: () => this.snackbar.error('Kon abonnement niet opslaan'),
    });
  }

  addStrips(amount: number): void {
    if (!amount) return;
    this.strippenkaart.addStrips(this.player!.id!, amount).subscribe({
      next: () => this.reloadMembership(),
      error: () => this.snackbar.error('Kon strippen niet toevoegen'),
    });
  }

  /** Zet het saldo op newTotal door het verschil als correctie te boeken. */
  applyTotal(): void {
    if (this.newTotal === null || this.newTotal === undefined) return;
    const delta = this.newTotal - this.balance;
    if (delta === 0) return;
    this.strippenkaart.correct(this.player!.id!, delta).subscribe({
      next: () => this.reloadMembership(),
      error: () => this.snackbar.error('Kon saldo niet aanpassen'),
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.spelerForm.valid) {
      const formValue = this.spelerForm.getRawValue(); // includes disabled fields

      const player: PlayerSheetData = {
        name: formValue.name,
        position: formValue.position,
        actief: formValue.actief,
        email: formValue.email?.trim().toLowerCase() || undefined,
        isAdmin: formValue.isAdmin,
        usesStrippenkaart: this.usesStrippenkaart,
      };

      if (this.isEditMode) {
        this.dialogRef.close({
          player,
          originalName: this.data.originalName || this.data.player?.name
        });
      } else {
        this.dialogRef.close(player);
      }
    }
  }

  getDialogTitle(): string {
    return this.isEditMode ? 'Speler Wijzigen' : 'Speler Toevoegen';
  }
}
```

- [ ] **Step 4: Run de spec om te slagen**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/speler-dialog.component.spec.ts'`
Expected: PASS (3 tests).

- [ ] **Step 5: Herschrijf het template met tabs**

Vervang `speler-dialog.component.html` volledig door:
```html
<h2 mat-dialog-title>{{ getDialogTitle() }}</h2>

<mat-dialog-content>
  <mat-tab-group>
    <mat-tab label="Gegevens">
      <form [formGroup]="spelerForm" class="tab-content">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Spelernaam</mat-label>
          <input matInput formControlName="name" required>
          <mat-error *ngIf="spelerForm.get('name')?.hasError('required')">
            Spelernaam is verplicht
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Positie</mat-label>
          <mat-select formControlName="position" required>
            <mat-option *ngFor="let position of positions" [value]="position">
              {{ position }}
            </mat-option>
          </mat-select>
          <mat-error *ngIf="spelerForm.get('position')?.hasError('required')">
            Positie is verplicht
          </mat-error>
        </mat-form-field>

        <div class="toggle-field">
          <label>Actief</label>
          <mat-slide-toggle formControlName="actief"></mat-slide-toggle>
        </div>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>E-mail (voor inloggen)</mat-label>
          <input matInput type="email" formControlName="email" placeholder="naam@gmail.com">
          <mat-error *ngIf="spelerForm.get('email')?.hasError('email')">
            Ongeldig e-mailadres
          </mat-error>
        </mat-form-field>

        <div class="toggle-field">
          <label>Beheerder</label>
          <mat-slide-toggle formControlName="isAdmin"></mat-slide-toggle>
        </div>
        <p class="hint" *ngIf="isVasteBeheerder">
          Vaste beheerder — deze rol kan niet worden uitgezet.
        </p>
      </form>
    </mat-tab>

    <mat-tab label="Lidmaatschap" *ngIf="isEditMode">
      <div class="tab-content">
        <div class="toggle-field">
          <label>Op de strippenkaart</label>
          <mat-slide-toggle [checked]="usesStrippenkaart" (change)="toggleStrippenkaart()"></mat-slide-toggle>
        </div>

        <div class="toggle-field">
          <label>Abonnement dit seizoen{{ season ? ' (' + season + ')' : '' }}</label>
          <mat-slide-toggle [checked]="hasSubscription" [disabled]="!season" (change)="toggleSubscription()"></mat-slide-toggle>
        </div>
        <p class="hint" *ngIf="!season">Nog geen seizoen bekend (geen wedstrijden) — abonnement is nu niet instelbaar.</p>

        <div class="saldo-bewerk">
          <mat-form-field appearance="outline">
            <mat-label>Strippen-saldo</mat-label>
            <input matInput type="number" [(ngModel)]="newTotal" [ngModelOptions]="{standalone: true}">
          </mat-form-field>
          <button mat-stroked-button (click)="applyTotal()" [disabled]="newTotal === null || newTotal === balance">
            Saldo bijwerken
          </button>
          <span class="op" *ngIf="balance <= 0">strippen op</span>
        </div>

        <div class="acties">
          <button mat-stroked-button (click)="addStrips(5)">+5 strippen</button>
          <button mat-stroked-button (click)="addStrips(10)">+10 strippen</button>
        </div>

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
      </div>
    </mat-tab>
  </mat-tab-group>
</mat-dialog-content>

<mat-dialog-actions align="end">
  <button mat-button (click)="onCancel()">Annuleren</button>
  <button mat-raised-button color="primary" (click)="onSave()" [disabled]="!spelerForm.valid">
    Opslaan
  </button>
</mat-dialog-actions>
```

- [ ] **Step 6: Verwijder de losse Lidmaatschap-dialog en de verwijzingen ernaar**

1. Verwijder de map `src/app/components/admin/admin-spelers/lidmaatschap-dialog/` (de drie bestanden `.ts`/`.html`/`.scss`):
   ```bash
   rm -r src/app/components/admin/admin-spelers/lidmaatschap-dialog
   ```
2. In `admin.module.ts`: verwijder de import-regel `import { LidmaatschapDialogComponent } from './admin-spelers/lidmaatschap-dialog/lidmaatschap-dialog.component';` en haal `LidmaatschapDialogComponent` uit de `declarations`-array.
3. In `admin-spelers.component.ts`:
   - Verwijder de import `import { LidmaatschapDialogComponent } from './lidmaatschap-dialog/lidmaatschap-dialog.component';`
   - Verwijder de hele methode `openLidmaatschap(...)` (regels rond 151-157).
4. In `admin-spelers.component.html`: verwijder de tweede actieknop (de `card_membership`-knop):
   ```html
          <button mat-icon-button color="primary" (click)="openLidmaatschap(player)" aria-label="Lidmaatschap">
            <mat-icon>card_membership</mat-icon>
          </button>
   ```
   (Laat de edit-knop staan; die opent nu de getabde dialog.)

- [ ] **Step 7: Verifieer build + de gewijzigde specs**

Run: `npx ng build --configuration development`
Expected: build slaagt (geen verwijzingen meer naar `LidmaatschapDialogComponent`).

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/speler-dialog.component.spec.ts'`
Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add src/app/components/admin/admin-spelers/speler-dialog/ src/app/components/admin/admin.module.ts src/app/components/admin/admin-spelers/admin-spelers.component.ts src/app/components/admin/admin-spelers/admin-spelers.component.html
git commit -m "SpelerDialog: tabs (Gegevens + Lidmaatschap), bewerkbaar saldo, usesStrippenkaart-bugfix; losse lidmaatschap-dialog verwijderd"
```

---

### Task 2: Statuskolom verrijken met abonnement + strippen

**Files:**
- Modify: `src/app/components/admin/admin-spelers/admin-spelers.component.ts`
- Modify: `src/app/components/admin/admin-spelers/admin-spelers.component.html`

**Interfaces:**
- Consumes: `GameStatisticsService.getCurrentSeason()`, `StrippenkaartService.getSubscriptions(season)`.
- Produces: `subscribedPlayerIds: Set<number>` voor de kolomweergave.

- [ ] **Step 1: Laad de abonnementen in de component**

In `admin-spelers.component.ts`:
1. Voeg de import toe: `import { GameStatisticsService } from '../../../services/game.statistics.service';`
2. Injecteer in de constructor (naast de bestaande params): `private stats: GameStatisticsService`
3. Voeg een veld toe naast `balances`:
   ```typescript
   subscribedPlayerIds = new Set<number>();
   ```
4. Voeg een methode toe:
   ```typescript
   private loadSubscriptions(): void {
     this.stats.getCurrentSeason().subscribe(season => {
       if (!season) { this.subscribedPlayerIds = new Set(); return; }
       this.strippenkaart.getSubscriptions(season).subscribe(ids => {
         this.subscribedPlayerIds = new Set(ids);
       });
     });
   }
   ```
5. Roep deze aan in `loadPlayers()`, in de `next`-callback ná `this.loadBalances(players);`:
   ```typescript
        this.loadBalances(players);
        this.loadSubscriptions();
   ```

- [ ] **Step 2: Verrijk de kolom in het template**

Vervang in `admin-spelers.component.html` de `lidmaatschap`-kolom door:
```html
      <ng-container matColumnDef="lidmaatschap">
        <th mat-header-cell *matHeaderCellDef>Lidmaatschap</th>
        <td mat-cell *matCellDef="let player">
          <span class="badge-abo" *ngIf="player.id != null && subscribedPlayerIds.has(player.id)">Abo</span>
          <span *ngIf="player.usesStrippenkaart">Strippen: {{ balances[player.id] ?? '…' }}</span>
          <span *ngIf="!player.usesStrippenkaart && !(player.id != null && subscribedPlayerIds.has(player.id))">—</span>
        </td>
      </ng-container>
```

- [ ] **Step 3: Verifieer build**

Run: `npx ng build --configuration development`
Expected: build slaagt.

- [ ] **Step 4: Commit**

```bash
git add src/app/components/admin/admin-spelers/admin-spelers.component.ts src/app/components/admin/admin-spelers/admin-spelers.component.html
git commit -m "Spelerbeheer: lidmaatschap-kolom toont abonnement + strippen"
```

---

### Task 3: Eindverificatie + whole-branch review

**Files:** geen wijziging — verificatie.

- [ ] **Step 1: Volledige testsuite**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless`
Expected: alle specs groen (0 FAILED).

- [ ] **Step 2: Productie-build**

Run: `npx ng build --configuration production`
Expected: build slaagt (bestaande bundle-budget-waarschuwing is geen fout).

- [ ] **Step 3: Handmatige rooktest (door de gebruiker)**

- Open een speler via het potlood-icoon → twee tabs (Gegevens + Lidmaatschap).
- Op Lidmaatschap: zet strippenkaart aan, voeg +10 toe → saldo 10; zet het saldo-veld op 7 + "Saldo bijwerken" → saldo 7 (mutatie `correctie -3` in de historie).
- Wijzig op Gegevens iets (bv. positie) + Opslaan → de strippenkaart-status blijft behouden (bugfix), saldo ongewijzigd.
- In de tabel toont de Lidmaatschap-kolom `Abo` en/of `Strippen: N`.
- Bij **toevoegen** is er geen Lidmaatschap-tab.

> Deploy (`ng deploy`) gebeurt door de gebruiker, na een verse productie-build.

---

## Self-Review

**Spec coverage:**
- Getabde dialog (Gegevens + Lidmaatschap), Lidmaatschap alleen in edit → Task 1. ✅
- Strippenkaart-toggle op Lidmaatschap-tab (directe actie) → Task 1. ✅
- Bewerkbaar saldo-totaal → delta als `correctie` → Task 1 (`applyTotal`). ✅
- `+5`/`+10` blijven 'kaart gekocht' → Task 1. ✅
- Bugfix `onSave` bewaart `usesStrippenkaart` → Task 1. ✅
- Losse dialog + `card_membership`-knop verwijderd → Task 1. ✅
- Kolom toont `Abo` + `Strippen` → Task 2. ✅
- Tests (bugfix + delta) → Task 1; verificatie → Task 3. ✅
- Geen datamodel-wijziging → bevestigd. ✅

**Placeholder scan:** geen TBD/TODO; alle code-stappen bevatten volledige code.

**Type consistency:** `applyTotal`/`newTotal`/`balance`/`usesStrippenkaart` consistent in component + spec. `subscribedPlayerIds: Set<number>` consistent in component + template. `StrippenkaartService.correct(playerId, delta)` / `getSubscriptions(season)` matchen de bestaande service-signatures.

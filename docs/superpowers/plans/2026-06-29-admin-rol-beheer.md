# Admin-rol beheren vanuit de applicatie — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Beheerders beheren vanuit de Spelerbeheer-tab via een `is_admin`-vlag + `email` op de `players`-tabel, in plaats van een hardcoded environment-whitelist.

**Architecture:** Twee kolommen op `players` (`email`, `is_admin`). De admin-check wordt DB-gestuurd via een nieuwe `PlayerDataSource.isAdminEmail`, ge-OR'd met de bestaande `environment.adminEmails` als break-glass fallback. De bestaande `speler-dialog`/`admin-spelers` UI krijgt een e-mailveld + Beheerder-toggle.

**Tech Stack:** Angular 18, Supabase (Postgres) via supabase-js, Angular Material, RxJS, Jasmine/Karma.

## Global Constraints

- Beveiliging blijft **client-side** (gelijk aan huidig niveau); geen RLS/Supabase-Auth-afdwinging.
- E-mail wordt altijd **lowercase** opgeslagen en vergeleken.
- Chris (`cs.de.kok@gmail.com`) blijft **permanent** in `environment.adminEmails` (vaste, niet-verwijderbare beheerder) → garandeert altijd ≥1 admin.
- Alle data-toegang loopt via de data-source-abstractie (`PlayerDataSource`), niet rechtstreeks via `SupabaseClient` vanuit componenten/services.
- Mutaties (writes) gebruiken **geen** `takeUntilDestroyed` (bestaande conventie in `admin-spelers`).
- Volg bestaande Material-/codeconventies.

---

## File Structure

- Create: `supabase/migrations/20260629120000_add_players_email_and_is_admin.sql` — kolommen + seed.
- Modify: `src/app/types/database.types.ts` — hergenereren (players krijgt `email`, `is_admin`).
- Modify: `src/app/interfaces/IPlayerSheet.ts` — DTO uitbreiden.
- Modify: `src/app/services/data-sources/player-data-source.ts` — abstract `isAdminEmail`.
- Modify: `src/app/services/data-sources/player-data-source.supabase.ts` — read/write velden + `isAdminEmail`.
- Modify: `src/app/services/data-sources/player-data-source.supabase.spec.ts` — tests.
- Modify: `src/app/services/auth.service.ts` — DB OR env-check.
- Create: `src/app/services/auth.service.spec.ts` — test `resolveIsAdmin`.
- Modify: `src/app/components/login/login.component.ts` — gecombineerde check.
- Modify: `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.ts` + `.html` — e-mail + Beheerder-toggle.
- Modify: `src/app/components/admin/admin-spelers/admin-spelers.component.ts` + `.html` — Beheerder-kolom + self-demotion-bevestiging.

---

### Task 1: DB-migratie + types hergenereren

**Files:**
- Create: `supabase/migrations/20260629120000_add_players_email_and_is_admin.sql`
- Modify: `src/app/types/database.types.ts`

**Interfaces:**
- Produces: kolommen `players.email (text, nullable)` en `players.is_admin (boolean not null default false)`; geseede admins Chris/Hans/Ward.

- [ ] **Step 1: Verifieer de exacte spelernamen tegen live data**

Authenticeer de Supabase MCP (tool `mcp__plugin_supabase_supabase__authenticate`), draai daarna:

```sql
select id, name from players where name in ('Chris','Hans','Ward') order by name;
```

Expected: 3 rijen, namen exact `Chris`, `Hans`, `Ward`. Wijkt een naam af → stop en stem af met de gebruiker vóór de seed.

- [ ] **Step 2: Schrijf de migratie**

`supabase/migrations/20260629120000_add_players_email_and_is_admin.sql`:

```sql
-- Voeg admin-rol-velden toe aan players: email (Google-login) + is_admin vlag.
-- Beheerders worden hiermee vanuit de app beheerbaar i.p.v. een hardcoded
-- environment-whitelist. Zie spec 2026-06-29-admin-rol-beheer-design.md.

ALTER TABLE players ADD COLUMN IF NOT EXISTS email text;
ALTER TABLE players ADD COLUMN IF NOT EXISTS is_admin boolean NOT NULL DEFAULT false;

-- Seed de drie bestaande beheerders op naam (records heten exact Chris/Hans/Ward).
UPDATE players SET email = 'cs.de.kok@gmail.com',    is_admin = true WHERE name = 'Chris';
UPDATE players SET email = 'davids.hans@gmail.com',  is_admin = true WHERE name = 'Hans';
UPDATE players SET email = 'wardnoorland@gmail.com', is_admin = true WHERE name = 'Ward';
```

- [ ] **Step 3: Pas de migratie toe op het gelinkte project**

Run: `npx supabase db push`
Expected: de nieuwe migratie wordt toegepast zonder fouten.

- [ ] **Step 4: Verifieer de seed**

Via Supabase MCP `execute_sql`:

```sql
select name, email, is_admin from players where is_admin = true order by name;
```

Expected: 3 rijen (Chris/Hans/Ward) met de juiste lowercase e-mails en `is_admin = true`.

- [ ] **Step 5: Hergenereer de types**

Run: `npx supabase gen types typescript --project-id tfbwkmqnzwbsvgscixsg > src/app/types/database.types.ts`
Expected: in `database.types.ts` bevat het `players`-blok (Row/Insert/Update) nu `email: string | null` en `is_admin: boolean`.

- [ ] **Step 6: Commit**

```bash
git add supabase/migrations/20260629120000_add_players_email_and_is_admin.sql src/app/types/database.types.ts
git commit -m "DB: players.email + is_admin + seed van vaste admins"
```

---

### Task 2: PlayerSheetData DTO uitbreiden

**Files:**
- Modify: `src/app/interfaces/IPlayerSheet.ts`

**Interfaces:**
- Produces: `PlayerSheetData.email?: string`, `PlayerSheetData.isAdmin?: boolean`.

> Beide velden zijn **optioneel** zodat bestaande constructies van `PlayerSheetData` (team-generator, wedstrijden, etc.) blijven compileren. Lezers behandelen ontbrekende `isAdmin` als `false`. (Afwijking t.o.v. spec, die `isAdmin: boolean` noemde — optioneel is veiliger voor incrementele adoptie.)

- [ ] **Step 1: Voeg velden toe**

In `IPlayerSheet.ts`, binnen `interface PlayerSheetData`, na `actief: boolean;`:

```typescript
  /** Google-loginadres van de speler (lowercase). Alleen gevuld voor wie kan inloggen. */
  email?: string;
  /** Beheerrechten-vlag. Afwezig = geen admin. */
  isAdmin?: boolean;
```

- [ ] **Step 2: Verifieer dat het compileert**

Run: `npx tsc --noEmit -p tsconfig.json`
Expected: geen nieuwe fouten gerelateerd aan `PlayerSheetData`.

- [ ] **Step 3: Commit**

```bash
git add src/app/interfaces/IPlayerSheet.ts
git commit -m "PlayerSheetData: optionele email + isAdmin velden"
```

---

### Task 3: SupabasePlayerDataSource — velden + isAdminEmail

**Files:**
- Modify: `src/app/services/data-sources/player-data-source.ts`
- Modify: `src/app/services/data-sources/player-data-source.supabase.ts`
- Test: `src/app/services/data-sources/player-data-source.supabase.spec.ts`

**Interfaces:**
- Consumes: `PlayerSheetData` met `email?`, `isAdmin?` (Task 2).
- Produces: `PlayerDataSource.isAdminEmail(email: string): Observable<boolean>`; `getAll` levert `email`/`isAdmin`; `add`/`update` schrijven `email` (lowercase of null) + `is_admin`.

- [ ] **Step 1: Pas bestaande tests aan + voeg nieuwe toe**

In `player-data-source.supabase.spec.ts`:

Vervang de `getAll`-test-assertie zodat rows en mapping de nieuwe velden bevatten:

```typescript
  it('getAll mapt rows van players-tabel naar PlayerSheetData', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: [
      { id: 1, name: 'Alice', position: 'Speler', actief: true, email: 'alice@x.nl', is_admin: true, created_at: '...' },
      { id: 2, name: 'Bob', position: 'Keeper', actief: false, email: null, is_admin: false, created_at: '...' },
    ], error: null }).then(resolve);

    const players = await lastValueFrom(dataSource.getAll());

    expect(mockClient.from).toHaveBeenCalledWith('players');
    expect(queryBuilder.order).toHaveBeenCalledWith('name');
    expect(players).toEqual([
      { id: 1, name: 'Alice', position: 'Speler', actief: true, email: 'alice@x.nl', isAdmin: true },
      { id: 2, name: 'Bob', position: 'Keeper', actief: false, email: undefined, isAdmin: false },
    ]);
  });
```

Vervang de `add`-test:

```typescript
  it('add insert een rij in players', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.add({ name: 'Carl', position: 'Speler', actief: true, email: 'Carl@X.nl', isAdmin: true }));

    expect(queryBuilder.insert).toHaveBeenCalledWith({
      name: 'Carl',
      position: 'Speler',
      actief: true,
      email: 'carl@x.nl',
      is_admin: true,
    });
  });
```

Vervang de `update by id`-test:

```typescript
  it('update by id update de bijbehorende rij', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.update(5, { name: 'Updated', position: 'Keeper', actief: false }));

    expect(queryBuilder.update).toHaveBeenCalledWith({
      name: 'Updated',
      position: 'Keeper',
      actief: false,
      email: null,
      is_admin: false,
    });
    expect(queryBuilder.eq).toHaveBeenCalledWith('id', 5);
  });
```

Voeg twee nieuwe tests toe voor `isAdminEmail` (vóór de slotaccolade van `describe`):

```typescript
  it('isAdminEmail true als er een admin-rij matcht (lowercase)', async () => {
    queryBuilder.then = (resolve: any) =>
      Promise.resolve({ data: [{ id: 3 }], error: null }).then(resolve);

    const result = await lastValueFrom(dataSource.isAdminEmail('Chris@Example.COM'));

    expect(result).toBeTrue();
    expect(queryBuilder.eq).toHaveBeenCalledWith('email', 'chris@example.com');
    expect(queryBuilder.eq).toHaveBeenCalledWith('is_admin', true);
  });

  it('isAdminEmail false als er geen rij matcht', async () => {
    queryBuilder.then = (resolve: any) =>
      Promise.resolve({ data: [], error: null }).then(resolve);

    const result = await lastValueFrom(dataSource.isAdminEmail('nobody@example.com'));

    expect(result).toBeFalse();
  });
```

- [ ] **Step 2: Run de tests om falen te bevestigen**

Run: `npx ng test --watch=false --browsers=ChromeHeadless --include='**/player-data-source.supabase.spec.ts'`
Expected: FAIL — `isAdminEmail` bestaat nog niet + insert/update/getAll-payloads kloppen niet.

- [ ] **Step 3: Voeg de abstracte methode toe**

In `player-data-source.ts`, binnen de class na `update(...)`:

```typescript
  /** True als er een speler met dit e-mailadres (lowercase) is_admin = true heeft. */
  abstract isAdminEmail(email: string): Observable<boolean>;
```

- [ ] **Step 4: Implementeer in de Supabase-adapter**

Vervang `player-data-source.supabase.ts` volledig door:

```typescript
import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PlayerSheetData } from '../../interfaces/IPlayerSheet';
import { PlayerDataSource } from './player-data-source';
import { SupabaseClientService } from './supabase-client.service';

@Injectable({ providedIn: 'root' })
export class SupabasePlayerDataSource extends PlayerDataSource {
  constructor(private supabase: SupabaseClientService) {
    super();
  }

  private normalizeEmail(email?: string): string | null {
    const trimmed = email?.trim().toLowerCase();
    return trimmed ? trimmed : null;
  }

  getAll(): Observable<PlayerSheetData[]> {
    return from(
      this.supabase.client
        .from('players')
        .select('id, name, position, actief, email, is_admin')
        .order('name'),
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return (data ?? []).map(row => ({
          id: row.id,
          name: row.name,
          position: row.position,
          actief: row.actief,
          email: row.email ?? undefined,
          isAdmin: row.is_admin ?? false,
        }));
      }),
    );
  }

  add(player: PlayerSheetData): Observable<void> {
    return from(
      this.supabase.client.from('players').insert({
        name: player.name,
        position: player.position,
        actief: player.actief,
        email: this.normalizeEmail(player.email),
        is_admin: player.isAdmin ?? false,
      }),
    ).pipe(
      map(({ error }) => {
        if (error) throw error;
        return undefined;
      }),
    );
  }

  update(nameOrId: string | number, player: PlayerSheetData): Observable<void> {
    const updateById = (id: number) =>
      from(
        this.supabase.client.from('players').update({
          name: player.name,
          position: player.position,
          actief: player.actief,
          email: this.normalizeEmail(player.email),
          is_admin: player.isAdmin ?? false,
        }).eq('id', id),
      ).pipe(
        map(({ error }) => {
          if (error) throw error;
          return undefined;
        }),
      );

    if (typeof nameOrId === 'number') {
      return updateById(nameOrId);
    }

    return from(
      this.supabase.client.from('players').select('id').eq('name', nameOrId).limit(1),
    ).pipe(
      switchMap(({ data, error }) => {
        if (error) throw error;
        const row = data?.[0];
        if (!row) {
          return throwError(() => new Error(`Player not found: ${nameOrId}`));
        }
        return updateById(row.id);
      }),
    );
  }

  isAdminEmail(email: string): Observable<boolean> {
    const normalized = email.trim().toLowerCase();
    return from(
      this.supabase.client
        .from('players')
        .select('id')
        .eq('email', normalized)
        .eq('is_admin', true)
        .limit(1),
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return (data?.length ?? 0) > 0;
      }),
    );
  }
}
```

- [ ] **Step 5: Run de tests om te slagen**

Run: `npx ng test --watch=false --browsers=ChromeHeadless --include='**/player-data-source.supabase.spec.ts'`
Expected: PASS (alle tests groen).

- [ ] **Step 6: Commit**

```bash
git add src/app/services/data-sources/player-data-source.ts src/app/services/data-sources/player-data-source.supabase.ts src/app/services/data-sources/player-data-source.supabase.spec.ts
git commit -m "SupabasePlayerDataSource: email/is_admin read-write + isAdminEmail"
```

---

### Task 4: AuthService — DB OR env admin-check

**Files:**
- Modify: `src/app/services/auth.service.ts`
- Test: `src/app/services/auth.service.spec.ts` (create)

**Interfaces:**
- Consumes: `PlayerDataSource.isAdminEmail` (Task 3).
- Produces: `AuthService.resolveIsAdmin(email: string | null | undefined): Observable<boolean>`; `isAuthorizedAdmin$` en `isAdminEmail()` gebruiken die.

- [ ] **Step 1: Schrijf de test**

Create `src/app/services/auth.service.spec.ts`:

```typescript
import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { AuthService } from './auth.service';
import { PlayerDataSource } from './data-sources/player-data-source';

describe('AuthService.resolveIsAdmin', () => {
  let service: AuthService;
  let players: jasmine.SpyObj<PlayerDataSource>;

  beforeEach(() => {
    players = jasmine.createSpyObj<PlayerDataSource>('PlayerDataSource', ['getAll', 'add', 'update', 'isAdminEmail']);
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Auth, useValue: {} },
        { provide: PlayerDataSource, useValue: players },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('true voor een env-whitelist e-mail zonder DB-call', async () => {
    const result = await lastValueFrom(service.resolveIsAdmin('cs.de.kok@gmail.com'));
    expect(result).toBeTrue();
    expect(players.isAdminEmail).not.toHaveBeenCalled();
  });

  it('true als de DB de e-mail als admin meldt', async () => {
    players.isAdminEmail.and.returnValue(of(true));
    const result = await lastValueFrom(service.resolveIsAdmin('iemand@example.com'));
    expect(result).toBeTrue();
    expect(players.isAdminEmail).toHaveBeenCalledWith('iemand@example.com');
  });

  it('false als noch env noch DB matcht', async () => {
    players.isAdminEmail.and.returnValue(of(false));
    const result = await lastValueFrom(service.resolveIsAdmin('iemand@example.com'));
    expect(result).toBeFalse();
  });

  it('false (en geen DB-call) bij lege e-mail', async () => {
    const result = await lastValueFrom(service.resolveIsAdmin(null));
    expect(result).toBeFalse();
    expect(players.isAdminEmail).not.toHaveBeenCalled();
  });
});
```

- [ ] **Step 2: Run de test om falen te bevestigen**

Run: `npx ng test --watch=false --browsers=ChromeHeadless --include='**/auth.service.spec.ts'`
Expected: FAIL — `resolveIsAdmin` bestaat nog niet.

- [ ] **Step 3: Herschrijf AuthService**

Vervang `src/app/services/auth.service.ts` volledig door:

```typescript
import { Injectable, inject } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, authState, User } from '@angular/fire/auth';
import { Observable, of, firstValueFrom } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { PlayerDataSource } from './data-sources/player-data-source';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private players = inject(PlayerDataSource);

  /** Vaste break-glass admins (lowercase). Bevat altijd minimaal Chris. */
  private readonly envAdminEmails = environment.adminEmails.map(e => e.toLowerCase());

  isAuthenticated$: Observable<boolean>;
  isAuthorizedAdmin$: Observable<boolean>;

  constructor() {
    const authState$ = authState(this.auth);

    this.isAuthenticated$ = authState$.pipe(
      map(user => !!user)
    );

    this.isAuthorizedAdmin$ = authState$.pipe(
      switchMap(user => this.resolveIsAdmin(user?.email))
    );
  }

  /**
   * Bepaalt of een e-mail admin is: env-fallback OF DB-vlag. Puur en los van
   * Firebase, zodat het zelfstandig te testen is.
   */
  resolveIsAdmin(email: string | null | undefined): Observable<boolean> {
    const normalized = email?.trim().toLowerCase();
    if (!normalized) {
      return of(false);
    }
    if (this.envAdminEmails.includes(normalized)) {
      return of(true);
    }
    return this.players.isAdminEmail(normalized).pipe(
      catchError(() => of(false))
    );
  }

  async signInWithGoogle(): Promise<any> {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      console.log('✅ Google Sign-In successful:', result);
      return result;
    } catch (error) {
      console.error('❌ Google Sign-In error in service:', error);
      throw error;
    }
  }

  async signOut(): Promise<void> {
    return signOut(this.auth);
  }

  getCurrentUser(): Observable<User | null> {
    return authState(this.auth);
  }

  /** True als de huidige ingelogde gebruiker admin is (env OF DB). */
  async isAdminEmail(): Promise<boolean> {
    const user = this.auth.currentUser;
    return firstValueFrom(this.resolveIsAdmin(user?.email));
  }
}
```

- [ ] **Step 4: Run de test om te slagen**

Run: `npx ng test --watch=false --browsers=ChromeHeadless --include='**/auth.service.spec.ts'`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/services/auth.service.ts src/app/services/auth.service.spec.ts
git commit -m "AuthService: admin-check via DB OR env-fallback"
```

---

### Task 5: LoginComponent — gecombineerde check

**Files:**
- Modify: `src/app/components/login/login.component.ts`

**Interfaces:**
- Consumes: `AuthService.isAdminEmail()` (Task 4).

- [ ] **Step 1: Vervang de whitelist-check**

In `login.component.ts`, vervang het blok in `signInWithGoogle` dat nu `environment.adminEmails.includes(user.email)` gebruikt:

```typescript
      if (!user || !user.email) {
        await this.authService.signOut();
        this.loading = false;
        this.errorMessage = 'Geen email adres gevonden in je Google account';
        return;
      }

      const isAdmin = await this.authService.isAdminEmail();
      if (!isAdmin) {
        await this.authService.signOut();
        this.loading = false;
        this.errorMessage = `Toegang geweigerd. Je email (${user.email}) heeft geen beheer rechten.`;
        return;
      }

      // Success - user is admin (env-fallback of DB)
      this.router.navigate(['/beheer']);
```

- [ ] **Step 2: Verwijder de ongebruikte environment-import**

Verwijder bovenin de regel `import { environment } from '../../../environments/environment';` (niet langer gebruikt).

- [ ] **Step 3: Verifieer dat het compileert**

Run: `npx tsc --noEmit -p tsconfig.json`
Expected: geen fouten; geen "unused import"-gerelateerde TS-fout.

- [ ] **Step 4: Commit**

```bash
git add src/app/components/login/login.component.ts
git commit -m "LoginComponent: admin-check via AuthService (DB OR env)"
```

---

### Task 6: SpelerDialog — e-mail + Beheerder-toggle

**Files:**
- Modify: `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.ts`
- Modify: `src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.html`

**Interfaces:**
- Consumes: `PlayerSheetData` met `email?`, `isAdmin?`; `environment.adminEmails`.
- Produces: dialog `close()` levert `PlayerSheetData` met `email` + `isAdmin`.

- [ ] **Step 1: Breid de component uit**

Vervang `speler-dialog.component.ts` volledig door:

```typescript
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerSheetData } from '../../../../interfaces/IPlayerSheet';
import { environment } from '../../../../environments/environment';

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

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SpelerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SpelerDialogData
  ) {
    this.isEditMode = data.mode === 'edit';

    const envAdmins = environment.adminEmails.map(e => e.toLowerCase());
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

  ngOnInit(): void {}

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
        isAdmin: formValue.isAdmin
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

- [ ] **Step 2: Breid het template uit**

In `speler-dialog.component.html`, vóór de afsluitende `</form>` (na het `actief`-toggle-blok):

```html
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
```

- [ ] **Step 3: Verifieer dat het compileert/bouwt**

Run: `npx ng build --configuration development`
Expected: build slaagt (de admin-module compileert met de nieuwe form-controls/template).

- [ ] **Step 4: Commit**

```bash
git add src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.ts src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.html
git commit -m "SpelerDialog: e-mail veld + Beheerder-toggle (vaste admin beschermd)"
```

---

### Task 7: AdminSpelers — Beheerder-kolom + self-demotion-bevestiging

**Files:**
- Modify: `src/app/components/admin/admin-spelers/admin-spelers.component.ts`
- Modify: `src/app/components/admin/admin-spelers/admin-spelers.component.html`

**Interfaces:**
- Consumes: `PlayerSheetData.isAdmin`/`email`; `AuthService.getCurrentUser()`; `ConfirmDialogComponent` (`ConfirmDialogData`).

- [ ] **Step 1: Breid de component uit**

Vervang `admin-spelers.component.ts` volledig door:

```typescript
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerService } from '../../../services/player.service';
import { PlayerSheetData } from '../../../interfaces/IPlayerSheet';
import { SpelerDialogComponent } from './speler-dialog/speler-dialog.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { SnackbarService } from '../../../services/snackbar.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-spelers',
  templateUrl: './admin-spelers.component.html',
  styleUrls: ['./admin-spelers.component.scss']
})
export class AdminSpelersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'position', 'actief', 'isAdmin', 'actions'];
  dataSource = new MatTableDataSource<PlayerSheetData>();
  loading = true;
  private currentUserEmail: string | null = null;

  private destroyRef = inject(DestroyRef);

  constructor(
    private playerService: PlayerService,
    private dialog: MatDialog,
    private snackbar: SnackbarService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(user => {
        this.currentUserEmail = user?.email?.toLowerCase() ?? null;
      });
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.loading = true;
    this.playerService.refreshPlayers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
      next: (players) => {
        this.dataSource.data = players;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading players:', error);
        this.loading = false;
      }
    });
  }

  addPlayer(): void {
    const dialogRef = this.dialog.open(SpelerDialogComponent, {
      width: '500px',
      data: { player: null, mode: 'add' }
    });

    dialogRef.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
      if (result) {
        this.playerService.addPlayer(result)
          .subscribe({
          next: () => {
            this.loadPlayers();
          },
          error: (error) => {
            console.error('Error adding player:', error);
            this.snackbar.error('Fout bij toevoegen speler: ' + error.message);
          }
        });
      }
    });
  }

  editPlayer(player: PlayerSheetData): void {
    const dialogRef = this.dialog.open(SpelerDialogComponent, {
      width: '500px',
      data: { player: { ...player }, mode: 'edit', originalName: player.name }
    });

    dialogRef.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
      if (!result) {
        return;
      }
      const isSelf = !!player.email && player.email.toLowerCase() === this.currentUserEmail;
      const losesOwnAdmin = isSelf && player.isAdmin === true && result.player.isAdmin === false;

      if (losesOwnAdmin) {
        const confirmRef = this.dialog.open(ConfirmDialogComponent, {
          width: '420px',
          data: {
            title: 'Eigen beheerrechten verwijderen',
            message: 'Je verwijdert je eigen beheerrechten. Doorgaan?',
            confirmLabel: 'Doorgaan',
            destructive: true
          }
        });
        confirmRef.afterClosed()
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe(confirmed => {
            if (confirmed) {
              this.saveEdit(result);
            } else {
              this.loadPlayers(); // reset UI naar opgeslagen toestand
            }
          });
        return;
      }

      this.saveEdit(result);
    });
  }

  private saveEdit(result: { player: PlayerSheetData; originalName: string }): void {
    this.playerService.updatePlayer(result.originalName, result.player)
      .subscribe({
      next: () => {
        this.loadPlayers();
      },
      error: (error) => {
        console.error('Error updating player:', error);
        this.snackbar.error('Fout bij wijzigen speler: ' + error.message);
      }
    });
  }

  getActiefText(actief: boolean): string {
    return actief ? 'Ja' : 'Nee';
  }
}
```

- [ ] **Step 2: Breid het template uit**

In `admin-spelers.component.html`, voeg vóór de `actions`-`ng-container` een nieuwe kolom toe:

```html
      <ng-container matColumnDef="isAdmin">
        <th mat-header-cell *matHeaderCellDef>Beheerder</th>
        <td mat-cell *matCellDef="let player">
          <mat-icon *ngIf="player.isAdmin" color="primary" aria-label="Beheerder">verified_user</mat-icon>
        </td>
      </ng-container>
```

- [ ] **Step 3: Verifieer dat het bouwt**

Run: `npx ng build --configuration development`
Expected: build slaagt. (Indien `MatIconModule` nog niet in de admin-module zit, voeg die import toe — controleer `admin.module.ts`.)

- [ ] **Step 4: Commit**

```bash
git add src/app/components/admin/admin-spelers/admin-spelers.component.ts src/app/components/admin/admin-spelers/admin-spelers.component.html
git commit -m "AdminSpelers: Beheerder-kolom + self-demotion bevestiging"
```

---

### Task 8: Volledige verificatie + productie-build

**Files:** geen wijziging — verificatie.

- [ ] **Step 1: Run de volledige testsuite**

Run: `npx ng test --watch=false --browsers=ChromeHeadless`
Expected: alle specs groen.

- [ ] **Step 2: Productie-build**

Run: `npx ng build --configuration production`
Expected: build slaagt (de bestaande bundle-budget-waarschuwing is geen fout).

- [ ] **Step 3: Handmatige rooktest (door de gebruiker)**

- Log in als Chris → Beheer toegankelijk; in Spelerbeheer toont Chris de Beheerder-toggle als "Vaste beheerder" (uitgeschakeld).
- Zet bij een vierde speler een e-mail + Beheerder aan → die speler kan inloggen en krijgt Beheer.
- Zet bij die vierde speler Beheerder weer uit → na opnieuw inloggen geen Beheer meer.

> Deploy (`ng deploy`) gebeurt door de gebruiker buiten auto-mode, net als eerder.

---

## Self-Review

**Spec coverage:**
- Datamodel (email + is_admin) → Task 1. ✅
- Lowercase normalisatie → Task 3 (data source) + Task 4 (auth). ✅
- Autorisatie DB OR env → Task 4; login → Task 5; AdminGuard ongewijzigd (profiteert via `isAuthorizedAdmin$`). ✅
- Seed Chris/Hans/Ward → Task 1. ✅
- Vaste beheerder (env, ≥1 admin) → Task 4 (env-fallback) + Task 6 (toggle disabled). ✅
- UI e-mail + toggle → Task 6; Beheerder-kolom → Task 7; self-demotion bevestiging → Task 7. ✅
- Tests (isAdminEmail, auth, DTO-mapping) → Task 3 + Task 4. ✅

**Placeholder scan:** geen TBD/TODO; alle stappen bevatten concrete code/commando's.

**Type consistency:** `isAdminEmail(email)` consistent in abstract + impl + auth + spec. `resolveIsAdmin` consistent in AuthService + spec. `PlayerSheetData.email/isAdmin` consistent in DTO, data source, dialog, component.

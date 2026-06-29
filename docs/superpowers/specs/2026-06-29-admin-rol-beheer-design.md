# Admin-rol beheren vanuit de applicatie

**Datum:** 2026-06-29
**Status:** Ontwerp ter review

## Probleem

Beheerders worden nu vastgelegd in een hardcoded e-mail-whitelist
(`environment.adminEmails`) in de (gitignored) environment-bestanden. Een admin
toevoegen vereist een code-wijziging, een nieuwe build en een deploy vanaf de
machine waar de lokale environment-bestanden staan. Dat is foutgevoelig en niet
zelfbedienbaar.

Doel: beheerders beheren **vanuit de applicatie**, als onderdeel van de
bestaande spelerbeheer-tab. Spelers als Ward, Chris en Hans zijn dan zowel
speler als beheerder, beheerd op één plek.

## Besluiten (uit brainstorm)

1. **Identiteitskoppeling:** e-mail + rol op de speler zelf (geen aparte tabel).
2. **Rolmodel:** simpele `is_admin`-vlag (geen rol-enum; YAGNI).
3. **Beveiliging:** client-side, gelijk aan huidig niveau. Geen serverafdwinging
   via RLS/Supabase Auth (de app authenticeert met Firebase, terwijl data in
   Supabase staat — server-side koppeling valt buiten scope).
4. **Bootstrap:** seed via migratie **én** behoud `environment.adminEmails` als
   break-glass fallback.
5. **Minimaal één admin:** er moet altijd minstens één beheerder zijn. Chris
   (`cs.de.kok@gmail.com`) is de vaste, niet-verwijderbare beheerder; dit wordt
   gegarandeerd doordat hij permanent in `environment.adminEmails` staat.

## Architectuur

### Datamodel (Supabase)

Twee kolommen toevoegen aan `players`:

| Kolom      | Type      | Constraint                | Toelichting                                            |
|------------|-----------|---------------------------|--------------------------------------------------------|
| `email`    | `text`    | nullable                  | Google-loginadres, **lowercase** opgeslagen.           |
| `is_admin` | `boolean` | `not null default false`  | Beheerrechten-vlag.                                    |

- Migratie voegt de kolommen toe.
- Seed-stap in dezelfde migratie: zet `email` + `is_admin = true` op de
  bestaande speler-records van Chris, Hans en Ward (gematcht op spelernaam; de
  exacte namen worden bij implementatie geverifieerd tegen de live data).
- Na de migratie `src/app/types/database.types.ts` opnieuw genereren.

### Autorisatie-flow

De admin-check wordt DB-gestuurd met de whitelist als vangnet:

```
isAdmin(email) = (er bestaat een player met lower(email) = login-email AND is_admin = true)
                 OR environment.adminEmails (lowercase) bevat login-email
```

- **`PlayerDataSource`** krijgt een methode `isAdminEmail(email: string):
  Observable<boolean>` met Supabase-implementatie:
  `select id from players where email = <lower> and is_admin = true limit 1`.
- **`AuthService.isAuthorizedAdmin$`** wordt herschreven: `authState` →
  `switchMap` naar de DB-check, ge-OR'd met de bestaande
  `environment.adminEmails`-check. Beide kanten vergelijken op lowercase.
- **`AuthService.isAdminEmail()`** (de async helper) volgt dezelfde
  gecombineerde logica.
- **`login.component`** gebruikt dezelfde check in plaats van rechtstreeks
  `environment.adminEmails.includes(...)`.
- **`AdminGuard`** blijft ongewijzigd in vorm (leunt op `isAuthenticated$` en
  `isAuthorizedAdmin$`), maar profiteert automatisch van de nieuwe bron.

`environment.adminEmails` blijft bestaan als break-glass vangnet. Chris
(`cs.de.kok@gmail.com`) blijft hier **permanent** in staan, zodat er altijd
minstens één beheerder is — ook als de DB-data ooit misgaat of leeg raakt. De
overige admins worden normaal via de DB beheerd.

### Beheer-UI (bestaande Spelerbeheer-tab)

- **`PlayerSheetData`** (DTO) uitbreiden met `email?: string` en
  `isAdmin: boolean`.
- **`SupabasePlayerDataSource`** `getAll`/`add`/`update` mappen de nieuwe velden
  mee (lees + schrijf). E-mail wordt bij schrijven genormaliseerd naar lowercase
  (lege invoer → `null`).
- **`speler-dialog`**: twee velden erbij:
  - E-mail (`matInput`, type email, optioneel, met e-mailformaat-validatie).
  - Beheerder (`mat-slide-toggle`, label "Beheerder").
- **`admin-spelers`** tabel: kolom/badge "Beheerder" (bv. een chip of icoon bij
  `isAdmin === true`).
- **Safeguards:**
  - **Vaste beheerder:** spelers met een e-mail die in `environment.adminEmails`
    staat (in de praktijk Chris) krijgen een uitgeschakelde Beheerder-toggle met
    tooltip/badge "Vaste beheerder". Hun rechten kunnen niet via de UI worden
    afgenomen; de env-fallback garandeert dat ze admin blijven, ongeacht de
    `is_admin`-waarde in de DB.
  - **Eigen rechten:** zet een (niet-vaste) admin de eigen Beheerder-toggle uit,
    dan een bevestigingsdialoog ("Je verwijdert je eigen beheerrechten —
    doorgaan?").

## Componenten & verantwoordelijkheden

| Unit                          | Wijziging                                                        |
|-------------------------------|------------------------------------------------------------------|
| Supabase-migratie             | Kolommen `email`, `is_admin` + seed van 3 admins.                |
| `database.types.ts`           | Hergenereren.                                                    |
| `IPlayerSheet.PlayerSheetData`| Velden `email?`, `isAdmin`.                                      |
| `PlayerDataSource` (abstract) | Nieuwe `isAdminEmail(email)`.                                    |
| `SupabasePlayerDataSource`    | `isAdminEmail` + `email`/`is_admin` in get/add/update.          |
| `AuthService`                 | `isAuthorizedAdmin$` + `isAdminEmail()` → DB OR env.            |
| `LoginComponent`              | Gebruikt gecombineerde check.                                   |
| `SpelerDialogComponent`       | E-mail-veld + Beheerder-toggle.                                 |
| `AdminSpelersComponent`       | Beheerder-kolom, "vaste beheerder" (env) beschermen, self-demotion-bevestiging. |

## Datastroom

1. Gebruiker logt in via Firebase Google-popup → e-mail bekend.
2. `AuthService` vraagt `players` of die e-mail een admin is (OR env-fallback).
3. `AdminGuard` laat toe/weigert op basis daarvan; `app.component` toont
   logout/beheer-acties op basis van `isAuthorizedAdmin$`.
4. In Spelerbeheer bewerkt een admin een speler: e-mail + Beheerder-toggle gaan
   via `PlayerService` → `SupabasePlayerDataSource` naar de `players`-tabel.

## Foutafhandeling

- DB-check faalt (netwerk) → behandel als "geen admin", maar env-fallback kan
  alsnog toegang geven. Geen harde crash; bestaande snackbar-foutmeldingen
  hergebruiken.
- Ongeldig e-mailformaat in de dialog → formuliervalidatie blokkeert opslaan.
- Dubbele e-mail op meerdere spelers: niet hard afdwingen in deze iteratie
  (client-side niveau); wel lowercase-normalisatie zodat matching consistent is.

## Testen

- Unit: `SupabasePlayerDataSource.isAdminEmail` (match, geen match, lowercase).
- Unit: `AuthService.isAuthorizedAdmin$` (DB true, env true, beide false).
- Unit: DTO-mapping van `email`/`is_admin` in get/add/update.
- Bestaande specs blijven groen (`player-data-source.supabase.spec.ts`).

## Buiten scope (YAGNI)

- Rol-enum of meerdere rollen.
- Server-side afdwinging (RLS / Supabase Auth-migratie).
- Uniciteits-constraint op e-mail in de DB.
- Uitnodigingsflow / e-mailverificatie.

## Seed-detail

De speler-records heten exact `Chris`, `Hans` en `Ward`. De seed matcht op die
namen:

| Speler | Login-e-mail              |
|--------|---------------------------|
| Chris  | `cs.de.kok@gmail.com`     |
| Hans   | `davids.hans@gmail.com`   |
| Ward   | `wardnoorland@gmail.com`  |

Bij implementatie wordt dit nog even geverifieerd tegen de live `players`-tabel
(via Supabase MCP) voordat de seed draait.

## Toekomstige uitbreiding (out-of-scope)

Een volgende iteratie breidt de ledenadministratie uit met abonnementen /
strippenkaart. Valt buiten deze spec, maar het datamodel op `players` is daar
niet mee in conflict.

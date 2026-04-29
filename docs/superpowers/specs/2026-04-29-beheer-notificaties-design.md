# Beheer-Notificaties scherm — design

Eerste post-migratie feature uit de roadmap. Voegt een `admin-notificaties`-pagina
toe onder `/admin/notificaties` met drie tabs: Abonnementen, Geschiedenis,
Analytics. Plus een test-broadcast-knop voor admin om de push-flow te valideren.

## Scope

**In scope:**
- Lazy-loaded `admin-notificaties.module` onder `/admin/notificaties`,
  beschermd door bestaande `AdminGuard`.
- Eén component met `<mat-tab-group>` voor 3 tabs.
- `BeheerNotificatiesService` met read-methods voor de drie views + write-method voor test-broadcast.
- Backend-tweak: `sendPushToAll` Function logt elke call naar `reminder_log`
  (zodat ook broadcasts en tests in geschiedenis verschijnen, niet alleen scheduled reminders).
- Eenvoudige user-agent parser voor leesbare device-namen.
- Linkje vanuit het bestaande admin-menu naar de nieuwe pagina.

**Out of scope:**
- Conversie-funnel "zien → openen → reageren". Vereist client-side ack-endpoint;
  expliciet uit-scope per sub-project 1.
- Handmatige actions zoals "deactivate subscription" of "verwijder uit DB".
  Read-only kan voor nu — als zo'n action ooit nodig is, los te bouwen.
- Drill-down per gebruiker (bv. "wanneer kreeg Chris zijn laatste reminders").
  Zit potentieel in de Spelersprofiel-pagina-roadmap-item.
- Export naar CSV / e-mail-rapport.

## Achtergrond

Sub-project 1 zette de `reminder_log`-tabel al op (kolommen `id`, `sent_at`,
`type`, `title`, `body`, `recipients_count`, `succeeded_count`, `expired_count`).
Sub-project 6 vulde 'm via `attendance-reminders` en `team-notification`. De
`push_subscriptions`-tabel werd door sub-project 5 gevuld met 5 entries en
groeit naarmate gebruikers zich abonneren.

Beheerder mist nu inzicht in:
- "Wie kan ik bereiken?" — wie heeft push aanstaan, op welk device.
- "Wat is er recent gestuurd?" — welke broadcasts/reminders zijn de deur uit.
- "Hoeveel actieve gebruikers ontbreken nog?" — wie zou wel actief zijn maar
  heeft geen push aan.

Het beheer-scherm dekt deze drie inzichten.

## Belangrijkste ontwerpkeuzes

### Eén component met 3 tabs

`<mat-tab-group>` in `admin-notificaties.component`. Per tab een eigen child-component
of inline-template, afhankelijk van complexiteit. Voor de Analytics-tab waarschijnlijk
inline (drie blokken naast elkaar of onder elkaar). Voor Abonnementen en Geschiedenis
tabel-views met `<mat-table>` zoals andere admin-screens.

### `BeheerNotificatiesService`

Nieuwe service, geen wijziging aan `NotificationDataSource` (die heeft al
`getAllSubscriptions`, `addSubscription`, `deactivateSubscription` — bedoeld voor
de browser-flow van end-users, niet voor admin-listing).

```ts
@Injectable({ providedIn: 'root' })
export class BeheerNotificatiesService {
  // Tab 1
  getSubscriptionsForAdmin(): Observable<AdminSubscription[]>;
  // Tab 2
  getReminderHistory(limit = 50): Observable<ReminderLogEntry[]>;
  // Tab 3
  getAnalytics(): Observable<NotificationsAnalytics>;
  // Test-knop
  sendTestBroadcast(title, body): Observable<{sent, failed, deactivated}>;
}
```

Reads gaan rechtstreeks tegen Supabase (via een nieuwe `SupabaseClientService`-call —
of via Postgres-views als 't te complex wordt). Writes voor test-broadcast triggeren
de bestaande `sendPushToAll`-Function via HTTP.

### `sendPushToAll` schrijft naar `reminder_log`

Een 5-regel-aanpassing in `functions/src/notifications/send-push-to-all.ts`: na
de send-loop, schrijf één rij in `reminder_log` met `type` afgeleid van
`req.body.type` (bv. `'broadcast-test'`, `'broadcast-manual'`, `'broadcast-other'`).
Hierdoor is de Geschiedenis-tab compleet — niet alleen reminders.

### User-agent-parser

Eenvoudige regex-based util die `user_agent`-string omzet naar bv.
`'Chrome op Windows'`, `'Safari op iPhone'`, `'Firefox op Mac'`. Geen
externe library; ~30 regels regex. Default fallback: `'Onbekend'`.

### Analytics-blokken — concreet

1. **Bereik nu** — getal-tegel "X / Y actieve spelers bereikbaar".
   Plus tabel met spelers zonder werkende sub.
   Bron: `players` waar `actief=true` ∖ `push_subscriptions` waar `active=true`.
2. **Groei over tijd** — staafdiagram (Material-chart of simpele inline SVG) van
   `count(*)` per maand op basis van `created_at`. Periode: laatste 12 maanden.
3. **Push-resultaten 30 dagen** — drie cijfer-tegels: total recipients,
   total succeeded, total expired. Bron: `sum(...) from reminder_log where sent_at > now() - 30 days`.

### Test-broadcast-knop

Een mat-button "Stuur test-broadcast" boven de tabs (of als pinned action). Opent
een mat-dialog met velden: title, body, optioneel URL. Submit triggert
`sendPushToAll` met `type: 'broadcast-test'`. Resultaat (sent / failed /
deactivated) wordt teruggetoond in een snackbar. Vervolgens roept `getReminderHistory`
opnieuw aan zodat de Geschiedenis-tab de nieuwe rij toont.

### RLS / authorization

Het `AdminGuard` voorkomt dat niet-admins de pagina kunnen openen. De Supabase-reads
gaan via de anon-key — RLS staat `FOR ALL` voor anon (zoals de hele app), dus
de admin-screen kan gewoon lezen. Voor `sendPushToAll` (HTTP-call) blijft dezelfde
admin-guard gelden in de UI; de Function zelf checkt geen auth (zoals nu — pre-existing
trade-off, post-Supabase-Auth-migratie aan te scherpen).

## Componenten

### Nieuwe bestanden

```
src/app/components/admin/admin-notificaties/
  admin-notificaties.component.ts
  admin-notificaties.component.html
  admin-notificaties.component.scss
  admin-notificaties.module.ts
  test-broadcast-dialog.component.ts (klein, ~50 regels)
  test-broadcast-dialog.component.html

src/app/services/
  beheer-notificaties.service.ts
  beheer-notificaties.service.spec.ts

src/app/utils/
  user-agent-parser.ts
  user-agent-parser.spec.ts
```

### Aangepaste bestanden

```
src/app/components/admin/admin-routing.module.ts        # nieuwe route
src/app/components/admin/admin.component.html           # menu-link "Notificaties"
functions/src/notifications/send-push-to-all.ts         # log naar reminder_log
```

### Behouden ongewijzigd

- `NotificationDataSource` en `SupabaseNotificationDataSource` (gebruikt door browser-flow).
- VAPID-key, push-flow naar service-worker.
- `AdminGuard`, `AdminModule`-bootstrap.

## Data-flow

**Tab 1 — Abonnementen:**
```
Component
  → BeheerNotificatiesService.getSubscriptionsForAdmin()
  → supabase.from('push_subscriptions')
      .select('*, players:player_id(name)')
      .order('active', { ascending: false })
      .order('last_seen_at', { ascending: false, nullsFirst: false })
  → map naar AdminSubscription[] (incl. ua-parser-result)
  → render in mat-table
```

**Tab 2 — Geschiedenis:**
```
Component
  → BeheerNotificatiesService.getReminderHistory(50)
  → supabase.from('reminder_log')
      .select('*')
      .order('sent_at', { ascending: false })
      .limit(50)
  → render in mat-table
```

**Tab 3 — Analytics:**
```
Component
  → BeheerNotificatiesService.getAnalytics()
  → combineLatest:
    - supabase.from('players').select('id, name, actief')
    - supabase.from('push_subscriptions').select('player_id, active, created_at')
    - supabase.from('reminder_log').select('recipients_count, succeeded_count, expired_count, sent_at').gte('sent_at', new Date(now-30d).toISOString())
  → map naar { reachableCount, totalActiveCount, unreachablePlayers[],
               growthByMonth[], last30dStats }
  → render in 3 blokken
```

**Test-broadcast:**
```
Click "Stuur test-broadcast"
  → MatDialog opens TestBroadcastDialog
  → User vult title + body in, klikt Versturen
  → BeheerNotificatiesService.sendTestBroadcast(title, body)
  → POST naar firebaseBaseUrl/sendPushToAll met type='broadcast-test'
  → snackbar: "Test verstuurd: 5 ontvangers, 4 geslaagd"
  → component refreshes Geschiedenis-tab
```

## Acceptance criteria

- [ ] Route `/admin/notificaties` is bereikbaar via het admin-menu, beschermd door `AdminGuard`.
- [ ] Tab 1 toont alle push_subscriptions met speler, device-string, status, dates.
      Active eerst, daarna sorted op `last_seen_at` desc.
- [ ] Tab 2 toont laatste 50 reminder_log-rijen descending op `sent_at`.
- [ ] Tab 3 toont:
      - "X / Y bereikbaar"-tegel
      - Lijst spelers zonder werkende sub
      - Maand-staaf-trend laatste 12 maanden
      - 30-dagen recipient/succeeded/expired-cijfers
- [ ] Test-broadcast-knop opent een dialog en stuurt bij submit een echte push naar alle actieve subs.
      Resultaat-feedback via snackbar.
- [ ] Na een test-broadcast verschijnt direct een nieuwe rij in Tab 2 (Geschiedenis).
- [ ] Functions: `sendPushToAll` logt elke call naar `reminder_log`.
- [ ] User-agent parser tests dekken Chrome, Safari, Firefox, Edge + iOS, Android, Windows, Mac.
- [ ] `npm test` blijft groen.
- [ ] `ng build --configuration production` slaagt.
- [ ] Smoke-test op productie of dev-server: alle 3 tabs renderen, test-broadcast werkt.

## Risico's en open punten

- **Bundle-size**: nieuwe lazy-loaded module wordt apart gebundeld (geen impact op
  initial bundle). Geen action nodig.
- **`reminder_log` zonder `match_id`-kolom**: huidige dedup in attendance-reminders
  werkt via `ilike('body', '%match=N%')`. Voor het Geschiedenis-tab niet relevant
  (we tonen de rauwe rijen). Tracked-follow-up uit sub-project 6 final review.
- **Maand-staaf-trend met weinig data**: Supabase-project is jong (5 subs), dus
  de trend toont waarschijnlijk 1-2 maanden met enkele subs. Acceptable; groeit
  vanzelf.
- **Test-broadcast naar alle actieve subs is "echt"**: gebruikers krijgen een
  notificatie als de admin op de knop drukt. Dialog heeft een waarschuwing /
  "weet je 't zeker?"-checkbox.
- **Geen handmatige deactivate-actie**: als een sub stuk is en niet door auto-cleanup
  is verwijderd, blijft 'ie staan. Acceptabel; auto-cleanup pakt 'm bij eerstvolgende
  send.
- **Wisselende user-agent-strings**: parser is best-effort. Vreemde browsers tonen
  als "Onbekend"; geen blocker.

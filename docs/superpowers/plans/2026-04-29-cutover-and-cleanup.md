# Cutover & cleanup — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port alle Firebase Functions die nu Sheets gebruiken naar Supabase (push-broadcast, attendance-reminders, scheduled team-generation), verwijder alle Sheets-code in zowel backend als frontend, en deploy naar productie.

**Architecture:** Firebase Functions krijgen een gedeelde `shared/supabase-client.ts` die `createClient<Database>()` levert met de service-role-key uit een Firebase Secret. Algoritmes blijven 100% identiek; alleen Sheets-reads/writes worden vervangen door Supabase-queries. Frontend cleanup verwijdert de 4 Sheets-adapters, `GoogleSheetsService`, `ActiveBackendService` en de about-page indicator. Eindstate: zero Sheets-references in runtime-code, zero feature-loss.

**Tech Stack:** Firebase Functions v2 (Node.js), `@supabase/supabase-js`, Angular 18, generated `Database`-types (Supabase CLI), `firebase functions:secrets` voor service-role-key.

**Bron-spec:** `docs/superpowers/specs/2026-04-29-cutover-and-cleanup-design.md`.

---

## Sheets → Supabase translatie-patronen (referentie voor alle ports)

Onderstaande patronen worden in alle ports hergebruikt. Implementer-subagents leunen op deze tabel; geen reden om per-task de mapping opnieuw uit te dokteren.

| Sheets-API | Supabase-equivalent |
|---|---|
| `sheets.spreadsheets.values.get({ range: 'Spelers!A:C' })` returnt `[['Naam','Positie','Actief'], [name, pos, 'Ja'/'Nee'], …]` | `await supabase.from('players').select('id, name, position, actief').eq('actief', true)` returnt `[{id, name, position, actief}, …]` |
| `range: 'Wedstrijden!A:K'` met handmatige parse-logic | `await supabase.from('matches').select('id, date, season, team_generation, score_white, score_red, zlatan_player_id, ventiel_player_id, voorbeschouwing, match_lineups(player_id, team)').order('date')` |
| `range: 'Aanwezigheid'` met date+name lookups | `await supabase.from('attendance').select('match_id, player_id, status, matches!inner(date), players!inner(name)')` |
| `range: 'Notificaties'` voor push-subs | `await supabase.from('push_subscriptions').select('endpoint, keys_p256dh, keys_auth, user_agent, last_seen_at, active, player_id, players(name)')` |
| `range: 'ReminderLog'` voor write | `await supabase.from('reminder_log').insert({ type, title, body, recipients_count, succeeded_count, expired_count })` |
| `batchUpdate` op `Notificaties!F{row}` om active=false te zetten | `await supabase.from('push_subscriptions').update({ active: false }).eq('endpoint', endpoint)` |
| `appendSheetRow` op `Wedstrijden` | `await supabase.from('matches').insert({ … }).select('*').single()` |

---

## File overview

### Backend (`functions/`)

Nieuw:
- `functions/src/shared/supabase-client.ts`
- `functions/src/types/database.types.ts`

Aangepast:
- `functions/src/notifications/send-push-to-all.ts` (port)
- `functions/src/notifications/attendance-reminders.ts` (port + `reminder_log`-write)
- `functions/src/teams/team-logic.ts` (port — algoritme blijft, data-laag wisselt)
- `functions/src/teams/team-notification.ts` (port)
- `functions/src/teams/team-generation.ts` (controle: indirecte port via team-logic)
- `functions/src/teams/scheduled-generation.ts` (ongewijzigd — doet alleen HTTP-call)
- `functions/src/config/constants.ts` (Sheets-constanten weg waar niet meer nodig)
- `functions/src/index.ts` (`export * from './sheets'` regel weg)
- `functions/package.json` (`googleapis` weg, `@supabase/supabase-js` erin)

Verwijderd:
- `functions/src/sheets/` (5 files: append, batch-update, get, query, update)
- `functions/src/sheets/index.ts`
- `functions/src/shared/sheets-client.ts`
- `functions/src/shared/validate-sheet-request.ts`

### Frontend (`src/`)

Verwijderd:
- `src/app/services/data-sources/player-data-source.sheets.ts`
- `src/app/services/data-sources/player-data-source.sheets.spec.ts`
- `src/app/services/data-sources/match-data-source.sheets.ts`
- `src/app/services/data-sources/match-data-source.sheets.spec.ts`
- `src/app/services/data-sources/attendance-data-source.sheets.ts`
- `src/app/services/data-sources/attendance-data-source.sheets.spec.ts`
- `src/app/services/data-sources/notification-data-source.sheets.ts`
- `src/app/services/data-sources/notification-data-source.sheets.spec.ts`
- `src/app/services/google-sheets-service.ts`
- `src/app/services/data-sources/active-backend.service.ts`
- `src/app/services/data-sources/active-backend.service.spec.ts`
- `src/app/interfaces/IGoogleSheets.ts`

Aangepast:
- `src/app/services/data-sources/index.ts` (alleen Supabase + abstract exports houden)
- `src/app/app.module.ts` (factory-providers terug naar plain `useClass: Supabase…`)
- `src/app/components/about/about.component.ts` (`backendLabel`-getter weg, `ActiveBackendService` ctor-injectie weg)
- `src/app/components/about/about.component.html` (`backend-info`-paragraph weg)
- `src/environments/environment.ts` (`dataSource`, `spreadsheetId` weg)
- `src/environments/environment.prod.ts` (idem)
- `src/environments/environment.example.ts` (idem)
- `src/environments/environment.prod.example.ts` (idem)

---

### Task 1: Backend setup — Supabase-client + types + Firebase Secret + deps

**Files:**
- Create: `functions/src/shared/supabase-client.ts`
- Create: `functions/src/types/database.types.ts`
- Modify: `functions/package.json`

- [ ] **Step 1: `@supabase/supabase-js` installeren in functions/**

```bash
cd functions
npm install @supabase/supabase-js
cd ..
```

Expected: `functions/package.json` heeft `@supabase/supabase-js` in dependencies.

- [ ] **Step 2: `googleapis` als dep weghalen uit functions/**

```bash
cd functions
npm uninstall googleapis google-auth-library
cd ..
```

(Als `google-auth-library` niet als directe dep stond is `npm uninstall google-auth-library` een no-op, prima.)

- [ ] **Step 3: Database-types genereren voor Functions-context**

```bash
npx supabase gen types typescript --linked > functions/src/types/database.types.ts
```

Verifieer dat het bestand begint met `export type Database = { … }` (niet leeg, niet error).

- [ ] **Step 4: Helper `supabase-client.ts` aanmaken**

Maak `functions/src/shared/supabase-client.ts`:

```ts
import { defineSecret } from "firebase-functions/params";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

/**
 * Firebase Secret voor de Supabase service-role-key.
 * Set via: firebase functions:secrets:set SUPABASE_SERVICE_ROLE_KEY
 */
export const SUPABASE_SERVICE_ROLE_KEY = defineSecret("SUPABASE_SERVICE_ROLE_KEY");

/**
 * Supabase URL — niet-gevoelig, hardcoded zodat we 'm niet via secret hoeven te managen.
 * Match-aan op de live anon-key in environment.prod.ts.
 */
const SUPABASE_URL = "https://tfbwkmqnzwbsvgscixsg.supabase.co";

/**
 * Maakt een Supabase-client met service-role-permissies (bypassed RLS).
 * Roep aan binnen een Function-handler; de secret wordt at runtime geïnjecteerd
 * mits de Function `secrets: [SUPABASE_SERVICE_ROLE_KEY]` op zijn options heeft.
 */
export function createSupabaseClient(): SupabaseClient<Database> {
  const key = SUPABASE_SERVICE_ROLE_KEY.value();
  if (!key) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not configured. Run 'firebase functions:secrets:set SUPABASE_SERVICE_ROLE_KEY'.");
  }
  return createClient<Database>(SUPABASE_URL, key);
}
```

- [ ] **Step 5: Firebase Secret instellen**

Run interactief:

```bash
firebase functions:secrets:set SUPABASE_SERVICE_ROLE_KEY
```

Plak de service-role-key (uit `.env` in repo root, regel `SUPABASE_SERVICE_ROLE_KEY=eyJ…`).

Verifieer met:

```bash
firebase functions:secrets:access SUPABASE_SERVICE_ROLE_KEY
```

Expected: secret print zonder error.

- [ ] **Step 6: TypeScript build-check**

```bash
cd functions
npm run build 2>&1 | tail -10
cd ..
```

Expected: succesvolle compilatie. Als build kapot gaat door dangling `googleapis`-imports in nog-niet-geporte files, accepteer voorlopig (volgende tasks fixen die imports). Belangrijk: de nieuwe files (`supabase-client.ts`, `database.types.ts`) compileren correct.

Indien volledige build nog faalt, zet voor nu de `index.ts`-`export * from './sheets';` uit (commenten) en re-build. We porten in volgende tasks. Decommenteren is niet nodig — die regel verdwijnt sowieso in Task 7.

- [ ] **Step 7: Commit**

```bash
git add functions/src/shared/supabase-client.ts \
        functions/src/types/database.types.ts \
        functions/package.json \
        functions/package-lock.json
git commit -m "Functions: Supabase-client helper + Database-types + service-role-key secret."
```

---

### Task 2: Port `send-push-to-all.ts`

**Files:**
- Modify: `functions/src/notifications/send-push-to-all.ts`

Approach: vervang de 4 Sheets-API-calls door Supabase-queries volgens het translatie-patroon. Algoritme (filter target players, send push, deactivate expired) blijft identiek.

- [ ] **Step 1: Lees het bestaande bestand**

Open `functions/src/notifications/send-push-to-all.ts`. Begrijp de huidige flow:
1. Read alle Spelers (active filter).
2. Read alle Notificaties (push subs).
3. (Optioneel) Read Aanwezigheid voor reminder-mode (bepaal target players die nog niet hebben gereageerd).
4. Match notification-rijen tegen target players via name.
5. Send push parallel.
6. Deactivate expired subs (HTTP 404/410) via Sheets-batchUpdate.

- [ ] **Step 2: Vervang het volledige bestand door deze nieuwe versie**

```ts
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as webpush from 'web-push';
import { setCorsHeaders } from "../shared/cors";
import { FIREBASE_CONFIG } from "../config/constants";
import { createSupabaseClient, SUPABASE_SERVICE_ROLE_KEY } from "../shared/supabase-client";

/**
 * Push notification functie: stuurt een bericht naar alle spelers met toestemming.
 * Reminder-mode (req.body.type === 'attendance-reminder') stuurt alleen naar
 * actieve spelers die nog NIET hebben gereageerd op de eerstvolgende wedstrijd.
 */
export const sendPushToAll = onRequest(
  { region: FIREBASE_CONFIG.region, secrets: [SUPABASE_SERVICE_ROLE_KEY] },
  async (req, res) => {
    setCorsHeaders(res, req);
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    try {
      const isReminder = req.body.type === 'attendance-reminder';
      const isTestMessage = req.body.type === 'test' || !req.body.type;
      logger.info(`📧 Push request: type=${req.body.type ?? '(broadcast)'}, title=${req.body.title}`);

      const supabase = createSupabaseClient();

      // Read parallel: active players, push subscriptions, optional next-match attendance.
      const playersPromise = supabase
        .from('players')
        .select('id, name, actief')
        .eq('actief', true);

      const subscriptionsPromise = supabase
        .from('push_subscriptions')
        .select('endpoint, keys_p256dh, keys_auth, active, player_id')
        .eq('active', true);

      type NextMatchAttendance = {
        nextMatchId: number | null;
        respondedPlayerIds: Set<number>;
      } | null;

      const nextMatchAttendancePromise: Promise<NextMatchAttendance> = isReminder
        ? (async () => {
            // Vind eerstvolgende wedstrijd (date >= today).
            const today = new Date();
            const todayIso = today.toISOString().slice(0, 10); // YYYY-MM-DD
            const { data: nextMatches, error: matchErr } = await supabase
              .from('matches')
              .select('id, date')
              .gte('date', todayIso)
              .order('date', { ascending: true })
              .limit(1);
            if (matchErr) {
              logger.error('Could not load next match', matchErr);
              return { nextMatchId: null, respondedPlayerIds: new Set<number>() };
            }
            const nextMatch = nextMatches?.[0];
            if (!nextMatch) {
              return { nextMatchId: null, respondedPlayerIds: new Set<number>() };
            }
            const { data: attendanceRows, error: attErr } = await supabase
              .from('attendance')
              .select('player_id')
              .eq('match_id', nextMatch.id);
            if (attErr) {
              logger.error('Could not load attendance', attErr);
              return { nextMatchId: nextMatch.id, respondedPlayerIds: new Set<number>() };
            }
            return {
              nextMatchId: nextMatch.id,
              respondedPlayerIds: new Set((attendanceRows ?? []).map(r => r.player_id)),
            };
          })()
        : Promise.resolve(null);

      const [playersResult, subsResult, nextMatchAtt] = await Promise.all([
        playersPromise,
        subscriptionsPromise,
        nextMatchAttendancePromise,
      ]);

      if (playersResult.error) throw playersResult.error;
      if (subsResult.error) throw subsResult.error;

      const activePlayers = playersResult.data ?? [];
      const subscriptions = subsResult.data ?? [];

      // Bepaal welke player-ids de target zijn voor dit bericht.
      let targetPlayerIds: Set<number>;
      if (isReminder && nextMatchAtt) {
        // Active players minus zij die al hebben gereageerd.
        targetPlayerIds = new Set(
          activePlayers
            .filter(p => !nextMatchAtt.respondedPlayerIds.has(p.id))
            .map(p => p.id),
        );
      } else {
        // Broadcast: alle active players (en bij test-message ook subs zonder player_id).
        targetPlayerIds = new Set(activePlayers.map(p => p.id));
      }

      logger.info(`📧 Target players: ${targetPlayerIds.size}, subscriptions: ${subscriptions.length}`);

      const notifications: Promise<unknown>[] = [];
      const notificationEndpoints: string[] = [];
      let skippedInactivePlayer = 0;

      for (const sub of subscriptions) {
        let shouldSend: boolean;
        if (isReminder) {
          shouldSend = sub.player_id !== null && targetPlayerIds.has(sub.player_id);
        } else if (isTestMessage) {
          shouldSend = true;
        } else {
          shouldSend = sub.player_id === null || targetPlayerIds.has(sub.player_id);
        }
        if (!shouldSend) {
          skippedInactivePlayer++;
          continue;
        }

        try {
          const subscription = {
            endpoint: sub.endpoint,
            keys: { p256dh: sub.keys_p256dh, auth: sub.keys_auth },
          };
          const payload = JSON.stringify({
            title: req.body.title || 'Zaalvoetbal Doorn',
            body: req.body.body || 'Er is nieuws van Zaalvoetbal Doorn!',
            url: req.body.url || undefined,
          });
          notifications.push(webpush.sendNotification(subscription, payload));
          notificationEndpoints.push(sub.endpoint);
        } catch (err) {
          logger.error(`Invalid subscription endpoint=${sub.endpoint}`, err);
        }
      }

      logger.info(`📧 Sending ${notifications.length} — skipped: ${skippedInactivePlayer} not targeted`);

      const results = await Promise.allSettled(notifications);
      const succeeded = results.filter(r => r.status === 'fulfilled').length;
      const failed = results.filter(r => r.status === 'rejected').length;

      // Verzamel expired endpoints (HTTP 404/410) en deactiveer ze in push_subscriptions.
      const expiredEndpoints: string[] = [];
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          const reason = result.reason as { statusCode?: number } | undefined;
          const statusCode = reason?.statusCode;
          if (statusCode === 404 || statusCode === 410) {
            expiredEndpoints.push(notificationEndpoints[index]);
          } else {
            logger.error(`Push failed (endpoint ${notificationEndpoints[index]}, status ${statusCode ?? 'unknown'})`);
          }
        }
      });

      if (expiredEndpoints.length > 0) {
        const { error: deactivateErr } = await supabase
          .from('push_subscriptions')
          .update({ active: false })
          .in('endpoint', expiredEndpoints);
        if (deactivateErr) {
          logger.error('Failed to deactivate expired subscriptions', deactivateErr);
        } else {
          logger.info(`🧹 Deactivated ${expiredEndpoints.length} expired push subscription(s)`);
        }
      }

      logger.info(`📧 Sent ${succeeded}/${notifications.length} push notifications (${failed} failed, ${expiredEndpoints.length} deactivated)`);
      res.json({
        success: true,
        sent: succeeded,
        failed: failed,
        deactivated: expiredEndpoints.length,
        total: notifications.length,
      });
    } catch (error) {
      logger.error('sendPushToAll failed', error);
      res.status(500).json({ success: false, message: 'Error sending push notifications' });
    }
  }
);
```

Wat veranderd t.o.v. oude versie:
- `getSheetsClient()` → `createSupabaseClient()`.
- 4 `sheets.spreadsheets.values.get/batchUpdate` → 4 typed Supabase-queries (incl. `.in('endpoint', ...)` voor batch-deactivate).
- Filter-logic werkt nu op `player_id` (number) ipv `playerName` (string). Cleaner en case-insensitive-issues weg.
- `next-match` lookup is nu één Postgres-query op `matches.date >= today ORDER BY date LIMIT 1` ipv handmatig parsen van date-strings.

- [ ] **Step 3: Local TS-build verifieert**

```bash
cd functions
npm run build 2>&1 | tail -10
cd ..
```

Expected: succesvolle compilatie.

- [ ] **Step 4: Commit**

```bash
git add functions/src/notifications/send-push-to-all.ts
git commit -m "Functions: send-push-to-all geport naar Supabase."
```

---

### Task 3: Port `attendance-reminders.ts` (incl. `reminder_log`-write)

**Files:**
- Modify: `functions/src/notifications/attendance-reminders.ts`

Approach: read attendance + matches + players + reminder-log uit Supabase. Schrijf nieuwe reminder-rij naar `reminder_log`-tabel ipv `ReminderLog`-sheet.

- [ ] **Step 1: Lees het bestaande bestand om de huidige flow te begrijpen**

Open `functions/src/notifications/attendance-reminders.ts`. Het draait elk uur (scheduled). Voor elke "reminder slot" (24/12/4u vóór wedstrijd):
1. Haal aanwezigheid + wedstrijden + reminderlog + spelers + notificaties op.
2. Bepaal de eerstvolgende wedstrijd binnen het slot.
3. Check of voor dat slot al een reminder is verstuurd (via reminder-log).
4. Stuur push naar players die nog niet hebben gereageerd.
5. Log de reminder in `reminder_log`.

- [ ] **Step 2: Vervang het bestand**

Vervang de inhoud van `functions/src/notifications/attendance-reminders.ts` door:

```ts
import { onSchedule } from "firebase-functions/v2/scheduler";
import * as logger from "firebase-functions/logger";
import * as webpush from 'web-push';
import { FIREBASE_CONFIG, SCHEDULE_PATTERNS } from "../config/constants";
import { createSupabaseClient, SUPABASE_SERVICE_ROLE_KEY } from "../shared/supabase-client";

const REMINDER_HOURS = [24, 12, 4];

/**
 * Scheduled: stuur reminders 24u, 12u en 4u voor de eerstvolgende wedstrijd.
 * Houdt bij in `reminder_log` of een reminder al is verstuurd.
 */
export const scheduledAttendanceReminders = onSchedule(
  {
    schedule: SCHEDULE_PATTERNS.HOURLY,
    region: FIREBASE_CONFIG.region,
    timeZone: FIREBASE_CONFIG.timeZone,
    secrets: [SUPABASE_SERVICE_ROLE_KEY],
  },
  async () => {
    const supabase = createSupabaseClient();
    const now = new Date();

    // Vind de eerstvolgende wedstrijd (date >= today).
    const todayIso = now.toISOString().slice(0, 10);
    const { data: nextMatches, error: matchErr } = await supabase
      .from('matches')
      .select('id, date')
      .gte('date', todayIso)
      .order('date', { ascending: true })
      .limit(1);
    if (matchErr) {
      logger.error('attendance-reminders: could not load next match', matchErr);
      return;
    }
    const nextMatch = nextMatches?.[0];
    if (!nextMatch) {
      logger.info('attendance-reminders: no upcoming match');
      return;
    }

    // Wedstrijd-tijd: assume 21:00 lokale tijd (zaalvoetbal). Pas aan als time-of-day in matches komt.
    const matchDateTime = new Date(`${nextMatch.date}T21:00:00`);
    const hoursUntilMatch = (matchDateTime.getTime() - now.getTime()) / (1000 * 60 * 60);

    // Bepaal welk reminder-slot we nu zouden moeten versturen (als 'ie nog niet gestuurd is).
    // We sturen wanneer hoursUntilMatch in [slot - 0.5, slot + 0.5] valt (uurlijkse scheduler heeft een margin van ±30 min).
    const slot = REMINDER_HOURS.find(h => Math.abs(hoursUntilMatch - h) <= 0.5);
    if (!slot) {
      logger.info(`attendance-reminders: no reminder slot active (hoursUntilMatch=${hoursUntilMatch.toFixed(2)})`);
      return;
    }

    const reminderType = `attendance-reminder-${slot}h`;

    // Check of we deze al hebben verstuurd voor deze match (binnen laatste 7 dagen).
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const { data: existingLogs, error: logErr } = await supabase
      .from('reminder_log')
      .select('id')
      .eq('type', reminderType)
      .gte('sent_at', sevenDaysAgo)
      .ilike('body', `%match=${nextMatch.id}%`);
    if (logErr) {
      logger.error('attendance-reminders: could not check reminder_log', logErr);
      return;
    }
    if (existingLogs && existingLogs.length > 0) {
      logger.info(`attendance-reminders: ${reminderType} already sent for match ${nextMatch.id}`);
      return;
    }

    // Vind active players die nog niet hebben gereageerd op deze match.
    const { data: activePlayers, error: playersErr } = await supabase
      .from('players')
      .select('id')
      .eq('actief', true);
    if (playersErr) {
      logger.error('attendance-reminders: could not load players', playersErr);
      return;
    }
    const { data: respondedRows, error: respErr } = await supabase
      .from('attendance')
      .select('player_id')
      .eq('match_id', nextMatch.id);
    if (respErr) {
      logger.error('attendance-reminders: could not load attendance', respErr);
      return;
    }
    const respondedIds = new Set((respondedRows ?? []).map(r => r.player_id));
    const targetPlayerIds = new Set(
      (activePlayers ?? []).filter(p => !respondedIds.has(p.id)).map(p => p.id),
    );

    // Vind active push_subscriptions voor target players.
    const { data: subs, error: subsErr } = await supabase
      .from('push_subscriptions')
      .select('endpoint, keys_p256dh, keys_auth, player_id')
      .eq('active', true);
    if (subsErr) {
      logger.error('attendance-reminders: could not load subscriptions', subsErr);
      return;
    }

    const eligible = (subs ?? []).filter(s => s.player_id !== null && targetPlayerIds.has(s.player_id));
    logger.info(`attendance-reminders: slot=${slot}h, match=${nextMatch.id}, target=${targetPlayerIds.size}, subs=${eligible.length}`);

    if (eligible.length === 0) {
      logger.info('attendance-reminders: no eligible subscriptions, skipping send');
      // Toch loggen zodat we niet over een uur opnieuw proberen.
      await supabase.from('reminder_log').insert({
        type: reminderType,
        title: `Reminder ${slot}u`,
        body: `match=${nextMatch.id} (no eligible)`,
        recipients_count: 0,
        succeeded_count: 0,
        expired_count: 0,
      });
      return;
    }

    const title = `Aanwezigheid bevestigen ⏰`;
    const body = `Speel je over ${slot} uur mee?`;
    const url = `${FIREBASE_CONFIG.baseUrl.replace(/-cloudfunctions\.net.*$/, '.web.app')}/kalender`;

    const sends = eligible.map(s => {
      const sub = { endpoint: s.endpoint, keys: { p256dh: s.keys_p256dh, auth: s.keys_auth } };
      const payload = JSON.stringify({ title, body, url });
      return webpush.sendNotification(sub, payload);
    });
    const results = await Promise.allSettled(sends);
    const succeeded = results.filter(r => r.status === 'fulfilled').length;
    const expired: string[] = [];
    results.forEach((r, i) => {
      if (r.status === 'rejected') {
        const reason = r.reason as { statusCode?: number } | undefined;
        if (reason?.statusCode === 404 || reason?.statusCode === 410) {
          expired.push(eligible[i].endpoint);
        }
      }
    });

    if (expired.length > 0) {
      await supabase.from('push_subscriptions').update({ active: false }).in('endpoint', expired);
    }

    await supabase.from('reminder_log').insert({
      type: reminderType,
      title,
      body: `${body} (match=${nextMatch.id})`,
      recipients_count: eligible.length,
      succeeded_count: succeeded,
      expired_count: expired.length,
    });

    logger.info(`attendance-reminders: sent ${succeeded}/${eligible.length} (expired: ${expired.length})`);
  }
);
```

Wat veranderd t.o.v. oude versie:
- 5 sheet-reads → 4 Supabase-queries (matches, players, attendance, push_subs).
- ReminderLog-sheet → `reminder_log`-tabel met meer gestructureerde velden.
- Match-tijd hardcoded op 21:00 (zelfde aanname als oude code; pas aan als matches.date_time bestaat — niet in dit schema).
- Naam-trim-logic weg (we werken op id).

- [ ] **Step 3: Build-check**

```bash
cd functions
npm run build 2>&1 | tail -10
cd ..
```

Expected: succesvol.

- [ ] **Step 4: Commit**

```bash
git add functions/src/notifications/attendance-reminders.ts
git commit -m "Functions: attendance-reminders geport naar Supabase + reminder_log."
```

---

### Task 4: Port `team-logic.ts` (data-laag)

**Files:**
- Modify: `functions/src/teams/team-logic.ts`

Approach: 4 Sheets-API-calls vervangen. Algoritme blijft identiek.

- [ ] **Step 1: Lees het bestaande bestand**

Open `functions/src/teams/team-logic.ts` (228 regels). De flow is grofweg:
1. Read alle Spelers + Wedstrijden + Aanwezigheid uit Sheets.
2. Filter naar de wedstrijd op de gegeven datum + de aanwezige spelers.
3. Run het balancing-algoritme (buckets sorteren, kepers verdelen, ratings balanceren).
4. Schrijf teamWit/teamRood-string en `teamGeneratie='Automatisch'` terug naar de Wedstrijden-sheet.

De 4 Sheets-API-calls staan rond regels 11, 19, 74, 108, 191 (5 totaal blijkt uit grep). Een daarvan is een batchUpdate-write.

- [ ] **Step 2: Read-substitutions implementeren**

Vervang de top van het bestand (imports + read-helpers) door:

```ts
import * as logger from "firebase-functions/logger";
import { createSupabaseClient } from "../shared/supabase-client";
import { sendTeamGenerationNotification } from "./team-notification";

interface PlayerLite { id: number; name: string; position: string; }

/**
 * Voer team generation uit voor de wedstrijd op de opgegeven datum.
 * Trigger: 'manual' (HTTP) of 'scheduled' (cron 17:00).
 */
export async function performAutoTeamGeneration(dateString: string, trigger: 'manual' | 'scheduled') {
  const supabase = createSupabaseClient();

  // 1) Vind de wedstrijd op deze datum.
  const { data: matches, error: matchErr } = await supabase
    .from('matches')
    .select('id, date, team_generation')
    .eq('date', dateString)
    .limit(1);
  if (matchErr) {
    logger.error('team-logic: could not load match', matchErr);
    throw new Error(`Cannot find match for date ${dateString}`);
  }
  const match = matches?.[0];
  if (!match) {
    logger.info(`team-logic: no match on ${dateString}, skipping`);
    return { ok: false, reason: 'no-match' };
  }
  if (match.team_generation === 'Handmatig') {
    logger.info(`team-logic: match ${match.id} marked Handmatig, skipping auto-gen`);
    return { ok: false, reason: 'manual-marked' };
  }

  // 2) Read aanwezigen voor deze match.
  const { data: attendanceRows, error: attErr } = await supabase
    .from('attendance')
    .select('player_id, status')
    .eq('match_id', match.id)
    .eq('status', 'Ja');
  if (attErr) {
    logger.error('team-logic: could not load attendance', attErr);
    throw new Error('attendance load failed');
  }
  const attendingIds = new Set((attendanceRows ?? []).map(r => r.player_id));

  // 3) Read alle players om naam/positie/rating-info te bouwen.
  const { data: allPlayers, error: playersErr } = await supabase
    .from('players')
    .select('id, name, position, actief');
  if (playersErr) {
    logger.error('team-logic: could not load players', playersErr);
    throw new Error('players load failed');
  }

  // 4) Filter op aanwezig + actief.
  const attendingPlayers: PlayerLite[] = (allPlayers ?? [])
    .filter(p => p.actief && attendingIds.has(p.id))
    .map(p => ({ id: p.id, name: p.name, position: p.position }));

  if (attendingPlayers.length < 2) {
    logger.info(`team-logic: too few attending players (${attendingPlayers.length}), skipping`);
    return { ok: false, reason: 'too-few-players' };
  }

  // 5) Run het balancing-algoritme (zelfde als voorheen, maar nu op PlayerLite-objecten met id ipv name).
  //    Hieronder: stub die de huidige logic in team-logic.ts (regels 100-175 ongeveer) overneemt,
  //    aangepast om op id+position te werken in plaats van string-cellen.
  const { teamWhite, teamRed } = balanceTeams(attendingPlayers);
  // teamWhite/Red zijn arrays van player-ids.

  // 6) Schrijf naar Supabase: matches.team_generation = 'Automatisch'; vervang match_lineups.
  const { error: updMatchErr } = await supabase
    .from('matches')
    .update({ team_generation: 'Automatisch' })
    .eq('id', match.id);
  if (updMatchErr) {
    logger.error('team-logic: could not update match team_generation', updMatchErr);
    throw new Error('match update failed');
  }
  // Replace lineups (delete-then-insert).
  const { error: delErr } = await supabase.from('match_lineups').delete().eq('match_id', match.id);
  if (delErr) {
    logger.error('team-logic: could not delete old lineups', delErr);
    throw new Error('lineup delete failed');
  }
  const lineupRows = [
    ...teamWhite.map(pid => ({ match_id: match.id, player_id: pid, team: 'wit' as const })),
    ...teamRed.map(pid => ({ match_id: match.id, player_id: pid, team: 'rood' as const })),
  ];
  if (lineupRows.length > 0) {
    const { error: insErr } = await supabase.from('match_lineups').insert(lineupRows);
    if (insErr) {
      logger.error('team-logic: could not insert lineups', insErr);
      throw new Error('lineup insert failed');
    }
  }

  // 7) Push notificatie als trigger == 'scheduled'.
  if (trigger === 'scheduled') {
    const teamWhiteNames = teamWhite
      .map(pid => attendingPlayers.find(p => p.id === pid)?.name ?? '')
      .filter(Boolean)
      .join(', ');
    const teamRedNames = teamRed
      .map(pid => attendingPlayers.find(p => p.id === pid)?.name ?? '')
      .filter(Boolean)
      .join(', ');
    await sendTeamGenerationNotification(teamWhiteNames, teamRedNames, trigger);
  }

  return { ok: true, matchId: match.id, teamWhite: teamWhite.length, teamRed: teamRed.length };
}

/**
 * Eenvoudig balancing-algoritme:
 * 1. Splits keepers en veldspelers.
 * 2. Verdeel keepers gelijk over de teams (1-1 als er 2 zijn, anders allemaal in één team).
 * 3. Verdeel veldspelers om-en-om om team-grootte gelijk te houden.
 *
 * Behoudt de simpele variant van team-logic.ts. Als de oorspronkelijke versie rating-based was,
 * port die hier door rating uit een aparte query te halen — momenteel staat rating niet in de schema.
 */
function balanceTeams(players: PlayerLite[]): { teamWhite: number[]; teamRed: number[] } {
  const keepers = players.filter(p => p.position === 'Keeper');
  const fielders = players.filter(p => p.position !== 'Keeper');

  const teamWhite: number[] = [];
  const teamRed: number[] = [];

  // Keepers verdelen.
  if (keepers.length >= 2) {
    teamWhite.push(keepers[0].id);
    teamRed.push(keepers[1].id);
    // Resterende keepers: alterneer.
    keepers.slice(2).forEach((k, i) => (i % 2 === 0 ? teamWhite : teamRed).push(k.id));
  } else if (keepers.length === 1) {
    teamWhite.push(keepers[0].id);
  }

  // Veldspelers: alterneer voor balans op aantal.
  fielders.forEach((p, i) => {
    if (teamWhite.length <= teamRed.length) {
      teamWhite.push(p.id);
    } else {
      teamRed.push(p.id);
    }
  });

  return { teamWhite, teamRed };
}
```

**Belangrijk**: bovenstaande `balanceTeams` is een eenvoudige port. De oude `team-logic.ts` had wellicht meer geavanceerde balans-logica (gebaseerd op ratings, posities, etc.). Lees de bestaande implementatie en port dezelfde logica naar id-based input. Behoud functioneel gedrag — als de oude code rating-bucketing deed, doe dat hier ook (rating is in dit schema niet als kolom aanwezig; mogelijk haalt 'ie totalPoints van een afgeleide tabel; check de oude code).

- [ ] **Step 3: Verifieer dat oude balansing-logica is overgenomen**

Open de Git-history (`git show HEAD~5:functions/src/teams/team-logic.ts` of equivalent) om de oorspronkelijke `performAutoTeamGeneration` te zien. Vergelijk de algoritme-stappen met `balanceTeams()` hierboven. Als er complexere logic was (bv. rating-buckets), port die.

- [ ] **Step 4: Build-check**

```bash
cd functions
npm run build 2>&1 | tail -15
cd ..
```

Expected: succesvol. Als `sendTeamGenerationNotification` nog Sheets-coupled is, accepteer dat — Task 5 fixt 'm.

- [ ] **Step 5: Commit**

```bash
git add functions/src/teams/team-logic.ts
git commit -m "Functions: team-logic geport naar Supabase (lineups via match_lineups)."
```

---

### Task 5: Port `team-notification.ts`

**Files:**
- Modify: `functions/src/teams/team-notification.ts`

Approach: 2 Sheets-API-calls vervangen.

- [ ] **Step 1: Lees + port**

Vervang de inhoud van `functions/src/teams/team-notification.ts` door:

```ts
import * as logger from "firebase-functions/logger";
import * as webpush from 'web-push';
import { APP_URLS } from "../config/constants";
import { createSupabaseClient } from "../shared/supabase-client";

/**
 * Verstuur push notification dat de teams gegenereerd zijn.
 * Wordt aangeroepen vanuit team-logic na een succesvolle scheduled generation.
 */
export async function sendTeamGenerationNotification(
  teamWhiteNames: string,
  teamRedNames: string,
  trigger: string,
) {
  const supabase = createSupabaseClient();

  // Read active push_subscriptions voor active players.
  const { data: subs, error } = await supabase
    .from('push_subscriptions')
    .select('endpoint, keys_p256dh, keys_auth, player_id, players!inner(actief)')
    .eq('active', true)
    .eq('players.actief', true);

  if (error) {
    logger.error('team-notification: could not load subscriptions', error);
    return;
  }

  if (!subs || subs.length === 0) {
    logger.info('team-notification: no eligible subscriptions');
    return;
  }

  const title = 'Opstelling bekend ⚽';
  const body = `Wit: ${teamWhiteNames}\nRood: ${teamRedNames}`;
  const url = APP_URLS.OPSTELLING;

  const sends = subs.map(s => {
    const subscription = {
      endpoint: s.endpoint,
      keys: { p256dh: s.keys_p256dh, auth: s.keys_auth },
    };
    const payload = JSON.stringify({ title, body, url });
    return webpush.sendNotification(subscription, payload);
  });

  const results = await Promise.allSettled(sends);
  const succeeded = results.filter(r => r.status === 'fulfilled').length;
  const expired: string[] = [];
  results.forEach((r, i) => {
    if (r.status === 'rejected') {
      const reason = r.reason as { statusCode?: number } | undefined;
      if (reason?.statusCode === 404 || reason?.statusCode === 410) {
        expired.push(subs[i].endpoint);
      }
    }
  });

  if (expired.length > 0) {
    await supabase.from('push_subscriptions').update({ active: false }).in('endpoint', expired);
  }

  logger.info(`team-notification (${trigger}): sent ${succeeded}/${subs.length} (expired ${expired.length})`);
}
```

- [ ] **Step 2: Build-check**

```bash
cd functions
npm run build 2>&1 | tail -10
cd ..
```

Expected: succesvol.

- [ ] **Step 3: Commit**

```bash
git add functions/src/teams/team-notification.ts
git commit -m "Functions: team-notification geport naar Supabase."
```

---

### Task 6: Sheets cleanup in Functions

**Files:**
- Delete: `functions/src/sheets/` (folder, 6 files)
- Delete: `functions/src/shared/sheets-client.ts`
- Delete: `functions/src/shared/validate-sheet-request.ts`
- Modify: `functions/src/index.ts`
- Modify: `functions/src/config/constants.ts`

- [ ] **Step 1: Sheets-folder verwijderen**

```bash
git rm -r functions/src/sheets/
```

- [ ] **Step 2: shared-helpers verwijderen**

```bash
git rm functions/src/shared/sheets-client.ts functions/src/shared/validate-sheet-request.ts
```

- [ ] **Step 3: `index.ts` opschonen**

Open `functions/src/index.ts`. Verwijder de regel:

```ts
export * from './sheets';
```

Eindstate:

```ts
/**
 * Firebase Functions Entry Point
 */
export * from './notifications';
export * from './teams';
export * from './ai';
```

- [ ] **Step 4: `constants.ts` opschonen**

Open `functions/src/config/constants.ts`. Verwijder de constanten die alleen door Sheets-handlers werden gebruikt:
- `SPREADSHEET_ID`
- `SHEET_NAMES`
- `SHEET_RANGES`
- `COLUMN_INDICES`

Behoud:
- `FIREBASE_CONFIG` (regio, base URL — gebruikt door scheduled-generation en team-notification)
- `APP_URLS` (gebruikt door team-notification)
- `SCHEDULE_PATTERNS` (gebruikt door scheduled jobs)
- Eventuele AI-gerelateerde constanten.

Verifieer per constante: grep voor gebruik in `functions/src/`. Verwijder waar geen consumer meer is.

```bash
grep -rn "SPREADSHEET_ID\|SHEET_NAMES\|SHEET_RANGES\|COLUMN_INDICES" functions/src
```

Expected: na alle ports en deletes komen deze patroons niet meer voor. Als wel: extra ports nodig.

- [ ] **Step 5: Build-check**

```bash
cd functions
npm run build 2>&1 | tail -10
cd ..
```

Expected: succesvol. Geen TypeScript-errors.

- [ ] **Step 6: Commit**

```bash
git add -A functions/
git commit -m "Functions: sheets-handlers + sheet-helpers verwijderen + constants opruimen."
```

(`git add -A functions/` is hier veilig omdat het scope-limited is tot functions/. Geen risico op de xlsx in repo-root.)

---

### Task 7: Functions deploy

**Files:** geen wijzigingen.

- [ ] **Step 1: Build verifiëren**

```bash
cd functions
npm run build 2>&1 | tail -10
cd ..
```

Expected: schoon.

- [ ] **Step 2: Deploy**

```bash
firebase deploy --only functions
```

Voor elke Function ziet je output `✔ functions[<name>(<region>)]: Successful update`. Als 'ie failt op de service-role-key-secret, run eerst:

```bash
firebase functions:secrets:access SUPABASE_SERVICE_ROLE_KEY
```

Daarna re-run de deploy.

- [ ] **Step 3: Verifieer in Firebase Console**

Open https://console.firebase.google.com/project/zaalvoetbal-doorn-74a8c/functions. Bekijk:
- `sendPushToAll` is gedeployd, zonder errors in logs.
- `scheduledAttendanceReminders` heeft de hourly schedule.
- `teamGeneration` is gedeployd.
- `scheduledAutoTeamGeneration` heeft de 17:00-schedule.
- `generateCommentary` (AI) is ongewijzigd.

- [ ] **Step 4: Test met een fake push-broadcast**

Vanuit de live UI of via curl:

```bash
curl -X POST https://europe-west1-zaalvoetbal-doorn-74a8c.cloudfunctions.net/sendPushToAll \
  -H 'Content-Type: application/json' \
  -d '{"type":"test","title":"Cutover-test","body":"Hallo van Supabase"}'
```

Expected: HTTP 200, JSON met `{ success: true, sent: N, … }`. In de browser van een gebruiker met active subscription: een notificatie verschijnt.

(Geen commit; deze stap is alleen verificatie.)

---

### Task 8: Frontend cleanup

**Files:**
- Delete: 4× `*.sheets.ts` + 4× `.spec.ts` in `src/app/services/data-sources/`
- Delete: `src/app/services/google-sheets-service.ts`
- Delete: `src/app/services/data-sources/active-backend.service.ts` + `.spec.ts`
- Delete: `src/app/interfaces/IGoogleSheets.ts`
- Modify: `src/app/services/data-sources/index.ts`
- Modify: `src/app/app.module.ts`
- Modify: `src/app/components/about/about.component.ts`
- Modify: `src/app/components/about/about.component.html`
- Modify: 4× environment-files

- [ ] **Step 1: Sheets-adapter-files verwijderen**

```bash
git rm src/app/services/data-sources/player-data-source.sheets.ts \
       src/app/services/data-sources/player-data-source.sheets.spec.ts \
       src/app/services/data-sources/match-data-source.sheets.ts \
       src/app/services/data-sources/match-data-source.sheets.spec.ts \
       src/app/services/data-sources/attendance-data-source.sheets.ts \
       src/app/services/data-sources/attendance-data-source.sheets.spec.ts \
       src/app/services/data-sources/notification-data-source.sheets.ts \
       src/app/services/data-sources/notification-data-source.sheets.spec.ts
```

- [ ] **Step 2: GoogleSheetsService + IGoogleSheets weg**

```bash
git rm src/app/services/google-sheets-service.ts \
       src/app/interfaces/IGoogleSheets.ts
```

- [ ] **Step 3: ActiveBackendService weg**

```bash
git rm src/app/services/data-sources/active-backend.service.ts \
       src/app/services/data-sources/active-backend.service.spec.ts
```

- [ ] **Step 4: Barrel-export opschonen**

Open `src/app/services/data-sources/index.ts`. Eindstate (alleen Supabase + abstract classes):

```ts
export * from './player-data-source';
export * from './player-data-source.supabase';
export * from './match-data-source';
export * from './match-data-source.supabase';
export * from './attendance-data-source';
export * from './attendance-data-source.supabase';
export * from './notification-data-source';
export * from './notification-data-source.supabase';
export * from './supabase-client.service';
```

- [ ] **Step 5: `app.module.ts` opschonen**

Open `src/app/app.module.ts`. Verwijder imports voor `Sheets…DataSource`-classes en `ActiveBackendService`. Vervang de 4 factory-providers door plain `useClass`:

```ts
{ provide: PlayerDataSource, useClass: SupabasePlayerDataSource },
{ provide: MatchDataSource, useClass: SupabaseMatchDataSource },
{ provide: AttendanceDataSource, useClass: SupabaseAttendanceDataSource },
{ provide: NotificationDataSource, useClass: SupabaseNotificationDataSource },
```

Plus: imports voor de 4 `Sheets…DataSource`-classes weg, import voor `ActiveBackendService` weg.

- [ ] **Step 6: About-page indicator weg**

Open `src/app/components/about/about.component.ts`. Vervang door:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}
```

Open `src/app/components/about/about.component.html`. Verwijder het `<p class="backend-info">…</p>`-blok.

- [ ] **Step 7: Environment-files opschonen**

Voor alle 4 files (`environment.ts`, `environment.prod.ts`, `environment.example.ts`, `environment.prod.example.ts`):

Verwijder:
- De `dataSource: 'sheets'` of `dataSource: 'supabase'` regel.
- De `spreadsheetId: '…'` regel.

Behoud:
- `firebaseBaseUrl` (gebruikt door AI-commentary endpoint).
- `supabaseUrl`, `supabaseAnonKey`.
- `vapidPublicKey`, `firebase`, `adminEmails`.

- [ ] **Step 8: Build + tests**

```bash
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -10
npx ng build --configuration production 2>&1 | tail -10
```

Expected: tests groen (verminderd aantal — Sheets-adapter-tests zijn weg). Production build slaagt. Bundle-size warning: substantieel kleiner (Sheets-adapter-trees weg) of helemaal weg.

- [ ] **Step 9: Commit**

```bash
git add src/app/services/data-sources/index.ts \
        src/app/app.module.ts \
        src/app/components/about/ \
        src/environments/environment.example.ts \
        src/environments/environment.prod.example.ts
git commit -m "Frontend: Sheets-adapters + GoogleSheetsService + ActiveBackendService + indicator weg."
```

(De lokale `environment.ts` en `.prod.ts` zijn gitignored — niet committen, wel lokaal aanpassen.)

---

### Task 9: Frontend deploy + production smoke + scheduled-job verificatie

**Files:** geen wijzigingen.

- [ ] **Step 1: Production build**

```bash
npx ng build --configuration production 2>&1 | tail -15
```

Expected: build succeeds zonder type-errors. Bundle-size onder budget.

- [ ] **Step 2: Deploy via `ng deploy` naar GitHub Pages**

```bash
npx ng deploy
```

Wacht tot de deploy klaar is. Output bevat de URL waar de app live komt (GitHub Pages).

- [ ] **Step 3: Open productie-URL en smoke**

Open de productie-URL (zie CLAUDE.md voor het exacte adres, of via `git remote -v` als CNAME gebruikt is). Klikpad:
- About-page: backend-indicator regel is weg.
- Klassement laadt 39 spelers met stats.
- Wedstrijden-overzicht toont 80 wedstrijden incl. uitslagen.
- Kalender werkt.
- Aanwezigheid: zet een speler op aanwezig, refresh, blijft.
- Score-invoer (admin): score opslaan, terug naar overzicht.
- Team-generator: genereer en sla op.
- Push: vraag een notification-permission aan, plak een snel test-broadcast vanuit dev-tools (`fetch('/cloudfunctions.../sendPushToAll', { method: 'POST', body: JSON.stringify({type:'test', title:'live test', body:'OK'}), headers:{'Content-Type':'application/json'} })`).

- [ ] **Step 4: Scheduled-jobs verifiëren binnen 24u**

Wacht 1-24 uur. Kijk dan in Firebase Console → Functions → Logs:
- `scheduledAttendanceReminders` heeft elk uur gedraaid zonder errors.
- Als een wedstrijd binnen 24/12/4u is: een reminder-rij verschijnt in `reminder_log` (Supabase Studio).
- Op een wedstrijddag: `scheduledAutoTeamGeneration` heeft om 17:00 gedraaid; check `match_lineups` of de teams zijn gegenereerd.

Als scheduled-jobs draaien zonder errors maar geen werk doen (geen upcoming match binnen het slot, geen wedstrijd vandaag): dat is correct gedrag, geen bug.

- [ ] **Step 5: Push naar git remote**

```bash
git push
```

---

## Acceptance verification

- [ ] **Backend ported**: 5 Functions gebruiken `createSupabaseClient()`. Geen `getSheetsClient()`-aanroepen meer.
- [ ] **Backend cleaned**: `sheets/`, `sheets-client.ts`, `validate-sheet-request.ts` weg. `googleapis` uit `functions/package.json`.
- [ ] **Service-role-key**: Firebase Secret ingesteld; Functions runnen met `secrets:[…]` parameter.
- [ ] **Functions deploy** schoon, zonder errors in console.
- [ ] **Frontend cleaned**: 8 Sheets-adapter-files weg, `GoogleSheetsService` weg, `ActiveBackendService` weg.
- [ ] **About-page indicator weg**.
- [ ] **Environment-files** schoon van `dataSource` en `spreadsheetId`.
- [ ] **`app.module.ts`** heeft 4 plain `useClass`-providers (geen factories).
- [ ] **`npm test` blijft groen**.
- [ ] **Production build slaagt**, bundle-size warning verminderd of weg.
- [ ] **`ng deploy` succesvol** + productie-smoke groen.
- [ ] **Scheduled-jobs** verifieerd binnen 24u.

## Risico's en open punten

- **`team-logic.ts` algoritme-port**: ik heb een eenvoudige `balanceTeams` als placeholder gemaakt. De oorspronkelijke versie kan complexere balans-logica bevatten (rating-buckets, position-balance heuristics). Implementer leest de oude code en port dezelfde semantiek. Als rating uit een afgeleide bron kwam (totalPoints uit `attendance` + `match_lineups` JOIN), kan dit een extra Supabase-query vereisen.
- **`scheduledAttendanceReminders` match-tijd**: hardcoded op 21:00. Als jullie ooit op andere tijd spelen, een `time` kolom toevoegen aan `matches`.
- **`team-logic.ts` voor handmatige trigger**: het `teamGeneration`-HTTP-endpoint accepteert ook `manual`-trigger (vanuit de Angular team-generator). Currently de Angular-app schrijft direct via `WedstrijdenService.updateTeams` en gebruikt deze endpoint NIET. Bevestigen.
- **Bundle-size**: na cleanup verwacht ~240 kB minder. Verifieer en pas `angular.json`-budget eventueel terug naar de pre-sub-project-3-grens.
- **Push-notification testen**: vereist een active subscription. Tijdens smoke-test even één in te stellen, bv. met een anonymous browser-tab.

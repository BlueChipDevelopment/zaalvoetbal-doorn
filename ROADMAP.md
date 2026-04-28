# Roadmap

Grotere dingen die op de planning staan maar nog niet in code zitten.

## Migratie naar Supabase

Vervang Google Sheets als data-store door Supabase (Postgres).

**Waarom**:
- Echte SQL in plaats van full-table-scans + client-side filteren.
- Realtime subscriptions (kalender/aanwezigheid ververst live).
- Geen Sheets-rate-limits (60 reads/min per user).
- Geen data-kwaliteit-issues meer zoals Excel-datum-serials en trailing spaces.

**Scope**:
- Nieuwe tabellen: `players`, `matches`, `attendance`, `push_subscriptions`, `reminder_log`.
- Migreer `GoogleSheetsService` → `SupabaseService` (of direct supabase-js in componenten).
- Firebase Functions behouden voor wat ze echt nodig hebben (web push, AI commentary);
  Sheets-endpoints kunnen weg.
- Data-migratie: CSV-export per tab → `COPY` in Postgres.

**Let op**:
- De sheet is nu ook admin-UI; wordt vervangen door Supabase Table Editor of de
  bestaande `beheer`-module uitbreiden.
- Google Drive version history verdwijnt — inrichten van backup/point-in-time.

**Backup-strategie (free tier heeft geen automatische backups)**:
- Wekelijkse `pg_dump` via GitHub Actions naar private repo of Drive/S3 — set & forget.
- Alternatief lokaal: `supabase db dump` via de CLI of `pg_dump` direct.
- CSV-export per tabel als leesbare snapshot (Sheets-vervanger voor handmatig kijken).
- Free-project pauzeert na 7 dagen inactiviteit; niet relevant tijdens seizoen,
  wel even handmatig unpausen na de zomerstop.

## Beheer-scherm "Notificaties"

Pas na Supabase-migratie, of als los project eerder.

1. **Abonnementen-tab**: lijst van `push_subscriptions` — speler, device (userAgent),
   actief ja/nee, aangemeld sinds. Geeft direct inzicht in "wie kan ik bereiken".
2. **Geschiedenis-tab**: log per `sendPushToAll`-call (datum, type, titel, verstuurd,
   geslaagd, expired). Vereist een kleine extra tabel en een extra write per broadcast.
3. **Analytics-tab**: bereik over tijd (hoeveel spelers hebben push aanstaan,
   trend per week/maand), conversie-funnel (zien melding → openen app →
   reageren op aanwezigheid). Doel: zien welke spelers nog ontbreken en of
   bereik groeit.

Delivery-garantie is niet haalbaar zonder client-side ack-endpoint — alleen
"opdracht gegeven aan pushservice".

## Spelersprofiel-pagina

Dedicated pagina per speler, bereikbaar door klikken op een naam in het
klassement of in de aanwezigheid-lijst.

**Inhoud**:
- Rating-trend over tijd (lijngrafiek).
- Aantallen: gespeelde wedstrijden, W/V/G, winst%, Zlatan- en ventielpunten.
- Top-5 beste en slechtste teammates op basis van win% (uitbreiding van
  huidige chemistry-modal).
- Head-to-head tegen top tegenstanders: "wanneer speelt Chris tegen Ward,
  wie wint vaker?".
- Match history: laatste 10 wedstrijden met opstelling en uitslag.
- Langste win-streak, huidige streak.
- FIFA-style player card: kaartje per speler met foto, overall rating, sterke
  punten en positie — als visuele samenvatting bovenaan de profielpagina,
  deelbaar als afbeelding.

**Dependencies**:
- Makkelijker met echte SQL (Supabase) dan met Sheets — doe dit pas daarna.

## Gamification

Achievements / badges die automatisch uit bestaande data worden afgeleid.
Versterkt betrokkenheid zonder dat je extra data hoeft bij te houden.

**Voorbeelden**:
- Mijlpalen: 10 / 50 / 100 wedstrijden gespeeld.
- Streaks: "3 op rij gewonnen", "5 op rij gewonnen".
- Zlatan/ventiel: "eerste Zlatan-punt", "hat-trick van Zlatan-punten", etc.
- Seizoen: "Eerste wedstrijd van het seizoen gespeeld", "Alle wedstrijden
  van het seizoen aanwezig geweest".
- Gekoppeld aan spelersprofiel-pagina (verzameling zichtbaar per speler).

**Opties voor later**:
- Man-of-the-match voting (spelers stemmen achteraf op beste speler).
- Pre-match poll "wie wint?" met scorebord voor beste voorspeller.
- Seizoen-rewind aan het eind van het seizoen: "jouw seizoen in cijfers",
  deelbaar via WhatsApp.

## Stats & inzicht

Extra inzichten bovenop het huidige klassement, afgeleid uit bestaande data.
Makkelijker te bouwen na Supabase-migratie (echte SQL).

- **Lifetime head-to-head / rivaliteiten**: voor elk spelerspaar W/V/G over
  alle wedstrijden waarin ze tegenover elkaar stonden — "Chris vs Ward,
  lifetime: 12-8-3". Eigen pagina of sectie op spelersprofiel.
- **Onverwachte combos**: spelersgroepjes (2 of 3) met opvallende win%
  ondanks weinig samenspeel-momenten — "deze 3 hebben samen 100% gewonnen
  in 4 wedstrijden". Filter op minimaal aantal samen gespeelde wedstrijden
  om ruis te vermijden.

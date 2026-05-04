# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm start
# or
ng serve

# Build for production
ng build --configuration production

# Run tests
ng test

# E2E tests
ng e2e

# Deploy to GitHub Pages
ng deploy
```

## Architecture Overview

This is an Angular 18 application for managing futsal team generation, player statistics, and match attendance. Data lives in Supabase (Postgres); push-notification broadcasts run via Firebase Functions.

### Core Components Structure

- **Team Generator** (`src/app/components/team-generator/`) - Generates balanced futsal teams based on player ratings and positions
- **Leaderboard** (`src/app/components/leaderboard/`) - Displays player rankings, statistics, and team chemistry analysis  
- **Attendance** (`src/app/components/attendance/`) - Manages player attendance for matches
- **Kalender** (`src/app/components/kalender/`) - Calendar view for players to mark availability
- **Wedstrijden** (`src/app/components/wedstrijden/`) - Match management and history
- **Score** (`src/app/components/score/`) - Score entry and match result tracking

### Key Services

- **SupabaseClientService** (`src/app/services/data-sources/`) - Shared, lazily-instantiated `SupabaseClient` typed against generated `Database` types in `src/app/types/database.types.ts`
- **Data sources** (`src/app/services/data-sources/`) - Abstract interfaces with Supabase implementations: `PlayerDataSource`, `MatchDataSource`, `AttendanceDataSource`, `NotificationDataSource`. Domain services depend on these abstractions, not on Supabase directly.
- **PlayerService / PlayerProfileService** - Player data, ratings, and per-profile statistics
- **WedstrijdenService** - Match data operations
- **AttendanceService** - Player attendance management
- **TeamGenerateService** - Core team balancing algorithms
- **GameStatisticsService** - Player performance analytics
- **RecordsService** - Hall of Fame / season MVPs
- **NotificationService** - Web Push subscription handling on the client
- **BeheerNotificatiesService** - Admin view: subscriptions, broadcast history, analytics; calls `sendPushToAll` Firebase Function for broadcasts

### Data Architecture

Primary data store is **Supabase (Postgres)**, accessed via the typed client and the data-source abstractions above. The Supabase schema is reflected in `src/app/types/database.types.ts` — consult that file for current table/column names rather than guessing. Firebase Functions remain only for push-notification broadcasts (`sendPushToAll`) which writes a `reminder_log` entry per call.

### Key Interfaces

All TypeScript interfaces are centralized in `src/app/interfaces/`:
- `IPlayer.ts` - Player data structure
- `IWedstrijd.ts` - Match data structure
- `ITeam.ts` - Team composition structure
- `IAttendance.ts` - Attendance tracking structure

### Design Principles

- **Follow Angular Material UX guidelines as closely as possible** — use Material Design patterns, components, and conventions
- Prefer Angular Material components over custom implementations
- Navigation drawer (sidenav) headers should show app branding (logo + name), not generic labels like "Menu"
- Toolbar layout follows Material Design: hamburger left, title/logo centered on mobile, actions right
- Refer to [Material Design guidelines](https://m2.material.io/) for UX decisions when in doubt

### Styling

- Uses Angular Material with custom color scheme (not standard theme)
- **IMPORTANT: Always check `src/styles_variables.scss` for color definitions before adding new styles**
- Custom color palette defined in `src/styles_variables.scss`:
  - Primary color: `#1976d2` (blue)
  - Secondary color: `#616161` (grey)
  - Success color: `#43a047` (green)
  - Error color: `#f44336` (red)
- Global styles and imports are in `src/styles.scss`
- Component-specific styles follow Angular's encapsulated styling approach
- **When creating new components or styling, always use the variables from `styles_variables.scss` instead of hardcoding colors**

### Supabase Integration

- All reads/writes go through the data-source classes in `src/app/services/data-sources/`. Don't call `SupabaseClient` directly from components or domain services — extend the relevant data source instead.
- Types are generated; regenerate `database.types.ts` after schema changes so queries stay type-safe.
- The anon key (`supabaseAnonKey`) is used client-side; rely on Supabase RLS for authorization, not on hiding the key.

### Firebase Functions (push notifications only)

`firebaseBaseUrl` in environment still points at Cloud Functions used for push broadcasts:
- `sendPushToAll` - Broadcast a Web Push message to all active subscribers; logs each call to `reminder_log`.

No other Sheets/Firebase data endpoints are in use.

### Deployment

- Build output goes to `dist/browser/` (see angular.json)
- CNAME file in `src/CNAME` is copied to build for custom domain
- Uses `angular-cli-ghpages` for GitHub Pages deployment
- Service Worker configured for PWA functionality

### Environment Configuration

- Environment files are in `src/environments/`
- Required keys: `supabaseUrl` + `supabaseAnonKey` (data store), `firebaseBaseUrl` + `vapidPublicKey` + `firebase.*` (push notifications), `adminEmails` (admin guard)
- See `.example` files for required environment variables

### Testing

- Uses Jasmine/Karma for unit tests
- Protractor for E2E testing
- Test files follow `*.spec.ts` naming convention
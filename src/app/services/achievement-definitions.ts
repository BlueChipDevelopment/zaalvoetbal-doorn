import { AchievementDefinition } from '../interfaces/IAchievement';

export const ACHIEVEMENT_DEFINITIONS: AchievementDefinition[] = [
  {
    key: 'matches_played',
    category: 'milestone',
    title: 'Veteraan',
    description: 'Aantal gespeelde wedstrijden.',
    icon: 'directions_run',
    tiers: [
      { tier: 'bronze', threshold: 10 },
      { tier: 'silver', threshold: 50 },
      { tier: 'gold', threshold: 100 },
      { tier: 'platinum', threshold: 250 },
    ],
  },
  {
    key: 'matches_won',
    category: 'milestone',
    title: 'Winnaar',
    description: 'Aantal gewonnen wedstrijden.',
    icon: 'emoji_events',
    tiers: [
      { tier: 'bronze', threshold: 10 },
      { tier: 'silver', threshold: 50 },
      { tier: 'gold', threshold: 100 },
    ],
  },
  {
    key: 'zlatan_points',
    category: 'milestone',
    title: 'Zlatan',
    description: 'Totaal aantal Zlatan-punten.',
    icon: 'military_tech',
    tiers: [
      { tier: 'bronze', threshold: 5 },
      { tier: 'silver', threshold: 25 },
      { tier: 'gold', threshold: 50 },
    ],
  },
  {
    key: 'streak_3',
    category: 'streak',
    title: 'Hat-trick',
    description: '3 wedstrijden op rij gewonnen.',
    icon: 'local_fire_department',
  },
  {
    key: 'streak_5',
    category: 'streak',
    title: 'Onstuitbaar',
    description: '5 wedstrijden op rij gewonnen.',
    icon: 'local_fire_department',
  },
  {
    key: 'streak_7',
    category: 'streak',
    title: 'Legendarisch',
    description: '7 wedstrijden op rij gewonnen.',
    icon: 'local_fire_department',
  },
  {
    key: 'season_champion',
    category: 'season',
    title: 'Seizoenskampioen',
    description: 'Top-1 klassement van een afgerond seizoen.',
    icon: 'workspace_premium',
  },
  {
    key: 'season_podium',
    category: 'season',
    title: 'Podium',
    description: 'Top-3 klassement van een afgerond seizoen.',
    icon: 'looks_3',
  },
  {
    key: 'season_full_attend',
    category: 'season',
    title: 'Altijd aanwezig',
    description: 'Gespeeld in elke wedstrijd van een afgerond seizoen.',
    icon: 'event_available',
  },
];

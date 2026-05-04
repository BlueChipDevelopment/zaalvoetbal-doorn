export type AchievementCategory = 'milestone' | 'streak' | 'season';
export type AchievementTier = 'bronze' | 'silver' | 'gold' | 'platinum';

export interface AchievementTierDef {
  tier: AchievementTier;
  threshold: number;
}

export interface AchievementDefinition {
  key: string;
  category: AchievementCategory;
  title: string;
  description: string;
  icon: string;
  tiers?: AchievementTierDef[];
}

export interface AchievementOccurrence {
  season: string;
  date: Date | null;
}

export interface PlayerAchievement {
  key: string;
  category: AchievementCategory;
  tier: AchievementTier | null;
  title: string;
  description: string;
  icon: string;
  earnedAt: Date | null;
  progress?: { current: number; target: number };
  occurrences?: AchievementOccurrence[];
}

export interface AchievementSummary {
  key: string;
  tier: AchievementTier | null;
  holdersCount: number;
  totalPlayers: number;
  rarity: number;
}

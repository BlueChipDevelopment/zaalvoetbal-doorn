import { ACHIEVEMENT_DEFINITIONS } from './achievement-definitions';

describe('ACHIEVEMENT_DEFINITIONS', () => {
  it('alle keys zijn uniek', () => {
    const keys = ACHIEVEMENT_DEFINITIONS.map(d => d.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('tier-drempels zijn strikt oplopend per definitie', () => {
    for (const def of ACHIEVEMENT_DEFINITIONS) {
      if (!def.tiers) continue;
      const thresholds = def.tiers.map(t => t.threshold);
      const sorted = [...thresholds].sort((a, b) => a - b);
      expect(thresholds).toEqual(sorted);
      expect(new Set(thresholds).size).toBe(thresholds.length);
    }
  });

  it('bevat de v1-set: 3 milestones, 3 streaks, 3 season', () => {
    const milestones = ACHIEVEMENT_DEFINITIONS.filter(d => d.category === 'milestone');
    const streaks = ACHIEVEMENT_DEFINITIONS.filter(d => d.category === 'streak');
    const seasons = ACHIEVEMENT_DEFINITIONS.filter(d => d.category === 'season');
    expect(milestones.map(d => d.key).sort()).toEqual(['matches_played', 'matches_won', 'zlatan_points']);
    expect(streaks.map(d => d.key).sort()).toEqual(['streak_3', 'streak_5', 'streak_7']);
    expect(seasons.map(d => d.key).sort()).toEqual(['season_champion', 'season_full_attend', 'season_podium']);
  });
});

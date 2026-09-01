import { CURRENT_POINTS, LEGACY_POINTS, pointsForOutcome, pointsSystemForSeason } from './points-system';

describe('pointsSystemForSeason', () => {
  it('gebruikt de oude telling voor seizoenen vóór 2026-2027', () => {
    expect(pointsSystemForSeason('2024-2025')).toEqual(LEGACY_POINTS);
    expect(pointsSystemForSeason('2025-2026')).toEqual(LEGACY_POINTS);
  });
  it('gebruikt de nieuwe telling vanaf 2026-2027', () => {
    expect(pointsSystemForSeason('2026-2027')).toEqual(CURRENT_POINTS);
    expect(pointsSystemForSeason('2027-2028')).toEqual(CURRENT_POINTS);
  });
  it('valt terug op de oude telling zonder seizoen', () => {
    expect(pointsSystemForSeason(null)).toEqual(LEGACY_POINTS);
    expect(pointsSystemForSeason(undefined)).toEqual(LEGACY_POINTS);
    expect(pointsSystemForSeason('')).toEqual(LEGACY_POINTS);
  });
});

describe('pointsForOutcome', () => {
  it('waardeert winst met 3 in oude seizoenen en 4 in nieuwe', () => {
    expect(pointsForOutcome('2025-2026', 'win')).toBe(3);
    expect(pointsForOutcome('2026-2027', 'win')).toBe(4);
  });
  it('houdt gelijkspel en verlies gelijk in beide systemen', () => {
    expect(pointsForOutcome('2025-2026', 'draw')).toBe(2);
    expect(pointsForOutcome('2026-2027', 'draw')).toBe(2);
    expect(pointsForOutcome('2025-2026', 'loss')).toBe(1);
    expect(pointsForOutcome('2026-2027', 'loss')).toBe(1);
  });
});

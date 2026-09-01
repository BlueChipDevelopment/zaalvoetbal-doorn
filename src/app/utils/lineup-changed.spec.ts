import { lineupChanged } from './lineup-changed';

describe('lineupChanged', () => {
  it('ziet een identieke opstelling als ongewijzigd', () => {
    expect(lineupChanged([1, 2, 3], [4, 5, 6], [1, 2, 3], [4, 5, 6])).toBe(false);
  });

  it('negeert de volgorde binnen een team', () => {
    expect(lineupChanged([1, 2, 3], [4, 5, 6], [3, 1, 2], [6, 5, 4])).toBe(false);
  });

  it('ziet een geruilde speler als wijziging', () => {
    expect(lineupChanged([1, 2, 3], [4, 5, 6], [1, 2, 4], [3, 5, 6])).toBe(true);
  });

  it('ziet omgedraaide teamkleuren als wijziging', () => {
    expect(lineupChanged([1, 2, 3], [4, 5, 6], [4, 5, 6], [1, 2, 3])).toBe(true);
  });

  it('ziet een extra of ontbrekende speler als wijziging', () => {
    expect(lineupChanged([1, 2, 3], [4, 5, 6], [1, 2, 3, 7], [4, 5, 6])).toBe(true);
    expect(lineupChanged([1, 2, 3], [4, 5, 6], [1, 2], [4, 5, 6])).toBe(true);
  });

  it('beschouwt een lege of ontbrekende opgeslagen opstelling als wijziging', () => {
    expect(lineupChanged([], [], [1, 2, 3], [4, 5, 6])).toBe(true);
    expect(lineupChanged(null, null, [1, 2, 3], [4, 5, 6])).toBe(true);
    expect(lineupChanged(undefined, undefined, [1, 2, 3], [4, 5, 6])).toBe(true);
  });
});

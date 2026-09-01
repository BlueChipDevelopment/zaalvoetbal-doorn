import { applySeasonDecider, compareByDecider } from './season-decider';
import { SeasonDecider } from '../interfaces/ISeasonDecider';

describe('applySeasonDecider', () => {
  const decider: SeasonDecider = {
    season: '2025-2026',
    winnerPlayerId: 7,
    note: 'Beslist na strafschoppen',
  };
  const tied = [{ playerId: 29, name: 'Bo' }, { playerId: 7, name: 'Paul' }];

  it('houdt bij een gelijkstand alleen de winnaar over, met toelichting', () => {
    const result = applySeasonDecider(tied, decider);
    expect(result.holders.map(h => h.playerId)).toEqual([7]);
    expect(result.note).toBe('Beslist na strafschoppen');
  });

  it('laat de houders ongemoeid zonder beslissing', () => {
    expect(applySeasonDecider(tied, null).holders).toEqual(tied);
    expect(applySeasonDecider(tied, null).note).toBeUndefined();
    expect(applySeasonDecider(tied, undefined).holders).toEqual(tied);
  });

  it('doet niets als er maar één houder is', () => {
    const single = [{ playerId: 7, name: 'Paul' }];
    const result = applySeasonDecider(single, decider);
    expect(result.holders).toEqual(single);
    expect(result.note).toBeUndefined();
  });

  it('valt terug op de gedeelde titel als de winnaar geen houder meer is', () => {
    const others = [{ playerId: 29, name: 'Bo' }, { playerId: 3, name: 'Ruben' }];
    const result = applySeasonDecider(others, decider);
    expect(result.holders).toEqual(others);
    expect(result.note).toBeUndefined();
  });

  it('geeft geen toelichting als de beslissing er geen heeft', () => {
    const result = applySeasonDecider(tied, { ...decider, note: null });
    expect(result.holders.map(h => h.playerId)).toEqual([7]);
    expect(result.note).toBeUndefined();
  });
});

describe('compareByDecider', () => {
  const decider: SeasonDecider = { season: '2025-2026', winnerPlayerId: 7, note: null };

  it('zet de winnaar van de beslissing vooraan', () => {
    expect(compareByDecider(7, 29, decider)).toBe(-1);
    expect(compareByDecider(29, 7, decider)).toBe(1);
  });

  it('laat de volgorde ongemoeid zonder beslissing of bij andere spelers', () => {
    expect(compareByDecider(7, 29, null)).toBe(0);
    expect(compareByDecider(3, 29, decider)).toBe(0);
  });
});

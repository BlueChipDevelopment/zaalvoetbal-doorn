import { getPlayerTier } from './player-tier';

describe('getPlayerTier', () => {
  it('brons onder 5.5', () => {
    expect(getPlayerTier(5.0).name).toBe('brons');
    expect(getPlayerTier(5.49).name).toBe('brons');
  });
  it('zilver tussen 5.5 en 7.0', () => {
    expect(getPlayerTier(5.5).name).toBe('zilver');
    expect(getPlayerTier(6.99).name).toBe('zilver');
  });
  it('goud vanaf 7.0', () => {
    expect(getPlayerTier(7.0).name).toBe('goud');
    expect(getPlayerTier(9.5).name).toBe('goud');
  });
  it('returnt gradient-stops als CSS-string', () => {
    expect(getPlayerTier(7.5).gradient).toContain('linear-gradient');
  });
});

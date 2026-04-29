import { playerInitials } from './player-initials';

describe('playerInitials', () => {
  it('één naam → eerste letter capitalised', () => {
    expect(playerInitials('Chris')).toBe('C');
  });
  it('voor- en achternaam → twee initialen', () => {
    expect(playerInitials('Chris de Kok')).toBe('CK');
  });
  it('met streepje → eerste letter elk deel max 2', () => {
    expect(playerInitials('Anne-Marije')).toBe('AM');
  });
  it('extra spaties wordt getrimd', () => {
    expect(playerInitials('  Bob   van   Dijk ')).toBe('BD');
  });
  it('lege/null/undefined → ?', () => {
    expect(playerInitials('')).toBe('?');
    expect(playerInitials(null)).toBe('?');
    expect(playerInitials(undefined)).toBe('?');
  });
});

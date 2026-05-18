import { resolveSquadIds } from './resolve-squad-ids';

describe('resolveSquadIds', () => {
  const stats = [
    { id: 1, name: 'Jan' },
    { id: 2, name: 'Piet' },
    { id: 3, name: 'Klaas' },
  ];

  it('resolvet id-loze formulier-spelers op naam (de team-generator-bug)', () => {
    // Squad zoals het formulier 'm aanlevert: namen zonder id.
    const squad = [{ name: 'Jan' }, { name: 'Piet' }];
    const result = resolveSquadIds(squad, stats);
    expect(result.ids).toEqual([1, 2]);
    expect(result.unresolved).toEqual([]);
  });

  it('matcht ongevoelig voor hoofdletters en spaties', () => {
    const result = resolveSquadIds([{ name: '  jAn ' }], stats);
    expect(result.ids).toEqual([1]);
    expect(result.unresolved).toEqual([]);
  });

  it('neemt een al aanwezig numeriek id direct over', () => {
    const result = resolveSquadIds([{ id: 99, name: 'Onbekend' }], stats);
    expect(result.ids).toEqual([99]);
    expect(result.unresolved).toEqual([]);
  });

  it('rapporteert namen zonder match in unresolved', () => {
    const result = resolveSquadIds([{ name: 'Jan' }, { name: 'Spook' }], stats);
    expect(result.ids).toEqual([1]);
    expect(result.unresolved).toEqual(['Spook']);
  });

  it('behandelt een lege naam als onresolvbaar', () => {
    const result = resolveSquadIds([{ name: '' }, { name: null }], stats);
    expect(result.ids).toEqual([]);
    expect(result.unresolved).toEqual(['(onbekend)', '(onbekend)']);
  });
});

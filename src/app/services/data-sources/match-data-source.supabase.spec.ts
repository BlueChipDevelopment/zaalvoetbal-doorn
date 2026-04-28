import { TestBed } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';
import { SupabaseMatchDataSource } from './match-data-source.supabase';
import { SupabaseClientService } from './supabase-client.service';

describe('SupabaseMatchDataSource', () => {
  let dataSource: SupabaseMatchDataSource;
  let mockClient: any;
  let matchesQB: any;
  let lineupsQB: any;

  beforeEach(() => {
    matchesQB = {
      select: jasmine.createSpy('select').and.callFake(() => matchesQB),
      insert: jasmine.createSpy('insert').and.callFake(() => matchesQB),
      update: jasmine.createSpy('update').and.callFake(() => matchesQB),
      eq: jasmine.createSpy('eq').and.callFake(() => matchesQB),
      order: jasmine.createSpy('order').and.callFake(() => matchesQB),
      single: jasmine.createSpy('single').and.callFake(() => matchesQB),
      then: (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve),
    };
    lineupsQB = {
      delete: jasmine.createSpy('delete').and.callFake(() => lineupsQB),
      insert: jasmine.createSpy('insert').and.callFake(() => lineupsQB),
      eq: jasmine.createSpy('eq').and.callFake(() => lineupsQB),
      then: (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve),
    };
    mockClient = {
      from: jasmine.createSpy('from').and.callFake((table: string) => {
        if (table === 'matches') return matchesQB;
        if (table === 'match_lineups') return lineupsQB;
        return null;
      }),
    };

    TestBed.configureTestingModule({
      providers: [
        SupabaseMatchDataSource,
        { provide: SupabaseClientService, useValue: { client: mockClient } },
      ],
    });
    dataSource = TestBed.inject(SupabaseMatchDataSource);
  });

  it('getAll selecteert matches met match_lineups join', async () => {
    matchesQB.then = (resolve: any) => Promise.resolve({
      data: [{
        id: 1, date: '2025-09-15', location: 'Sporthal Steinheim',
        season: '2025-2026', team_generation: 'Automatisch',
        score_white: 3, score_red: 2,
        zlatan_player_id: 5, ventiel_player_id: null,
        voorbeschouwing: null,
        match_lineups: [
          { player_id: 1, team: 'wit' },
          { player_id: 2, team: 'wit' },
          { player_id: 3, team: 'rood' },
          { player_id: 4, team: 'rood' },
        ],
      }],
      error: null,
    }).then(resolve);

    const matches = await lastValueFrom(dataSource.getAll());

    expect(mockClient.from).toHaveBeenCalledWith('matches');
    expect(matchesQB.select).toHaveBeenCalledWith(jasmine.stringMatching(/match_lineups/));
    expect(matches.length).toBe(1);
    expect(matches[0].id).toBe(1);
    expect(matches[0].teamWit).toEqual([1, 2]);
    expect(matches[0].teamRood).toEqual([3, 4]);
    expect(matches[0].zlatanPlayerId).toBe(5);
    expect(matches[0].seizoenWedstrijdNummer).toBe(1);
  });

  it('updateScore schrijft direct naar matches.eq(id)', async () => {
    matchesQB.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.updateScore(7, 4, 2, 5));

    expect(matchesQB.update).toHaveBeenCalledWith({
      score_white: 4,
      score_red: 2,
      zlatan_player_id: 5,
    });
    expect(matchesQB.eq).toHaveBeenCalledWith('id', 7);
  });

  it('updateScore met null zlatan stuurt zlatan_player_id: null', async () => {
    matchesQB.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.updateScore(7, 1, 0, null));

    expect(matchesQB.update).toHaveBeenCalledWith({
      score_white: 1,
      score_red: 0,
      zlatan_player_id: null,
    });
  });

  it('updateTeams delete-then-insert match_lineups en update matches voor teamGeneration', async () => {
    matchesQB.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);
    lineupsQB.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.updateTeams(7, [1, 2], [3, 4], 'Handmatig', 'tactiek'));

    expect(lineupsQB.delete).toHaveBeenCalled();
    expect(lineupsQB.eq).toHaveBeenCalledWith('match_id', 7);
    expect(lineupsQB.insert).toHaveBeenCalledWith([
      { match_id: 7, player_id: 1, team: 'wit' },
      { match_id: 7, player_id: 2, team: 'wit' },
      { match_id: 7, player_id: 3, team: 'rood' },
      { match_id: 7, player_id: 4, team: 'rood' },
    ]);
    expect(matchesQB.update).toHaveBeenCalledWith({
      team_generation: 'Handmatig',
      voorbeschouwing: 'tactiek',
    });
  });

  it('updateTeams zonder voorbeschouwing schrijft alleen team_generation', async () => {
    matchesQB.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);
    lineupsQB.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.updateTeams(7, [1], [2], 'Automatisch'));

    expect(matchesQB.update).toHaveBeenCalledWith({ team_generation: 'Automatisch' });
  });
});

import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PlayerService } from './player.service';
import { WedstrijdenService } from './wedstrijden.service';
import { GameStatisticsService } from './game.statistics.service';
import { PlayerSheetData } from '../interfaces/IPlayerSheet';
import { WedstrijdData } from '../interfaces/IWedstrijd';
import { Player } from '../interfaces/IPlayer';

export interface RecordHolder {
  playerId: number;
  name: string;
  value: number;
}

export interface RecordCategory {
  key: string;
  title: string;
  icon: string;
  unit: string;
  higherIsBetter: boolean;
  holders: RecordHolder[];
}

const MIN_MATCHES_FOR_WINRATE = 10;

@Injectable({ providedIn: 'root' })
export class RecordsService {
  constructor(
    private playerService: PlayerService,
    private wedstrijdenService: WedstrijdenService,
    private statsService: GameStatisticsService,
  ) {}

  /**
   * Bereken alle records over de hele match-historie (all-time).
   */
  getRecords(): Observable<RecordCategory[]> {
    return forkJoin({
      spelers: this.playerService.getPlayers(),
      wedstrijden: this.wedstrijdenService.getGespeeldeWedstrijden(),
      fullStats: this.statsService.getFullPlayerStats(null),
    }).pipe(
      map(({ spelers, wedstrijden, fullStats }) => this.computeRecords(spelers, wedstrijden, fullStats)),
    );
  }

  /**
   * Bereken seizoen-MVP's: per AFGEROND seizoen de speler met de hoogste
   * totalPoints. Het lopende seizoen (getCurrentSeason) wordt overgeslagen —
   * MVP staat pas vast als het seizoen klaar is.
   */
  getSeasonMVPs(): Observable<RecordCategory[]> {
    return forkJoin({
      seasons: this.statsService.getAvailableSeasons(),
      current: this.statsService.getCurrentSeason(),
    }).pipe(
      switchMap(({ seasons, current }) => {
        const completed = (seasons ?? []).filter(s => s !== current);
        if (completed.length === 0) return of([] as RecordCategory[]);
        return forkJoin(
          completed.map(season =>
            this.statsService.getFullPlayerStats(season).pipe(
              map(stats => this.buildSeasonMvp(season, stats)),
            ),
          ),
        );
      }),
    );
  }

  /**
   * Combineer all-time records + seizoen-MVP's tot één lijst.
   */
  getAllRecords(): Observable<RecordCategory[]> {
    return forkJoin([this.getRecords(), this.getSeasonMVPs()]).pipe(
      map(([records, mvps]) => [...records, ...mvps]),
    );
  }

  /**
   * Filter records waarvan deze speler een holder is (single of shared).
   * Inclusief seizoen-MVP's.
   */
  getRecordsForPlayer(playerId: number): Observable<RecordCategory[]> {
    return this.getAllRecords().pipe(
      map(records => records.filter(r => r.holders.some(h => h.playerId === playerId))),
    );
  }

  private buildSeasonMvp(season: string, stats: Player[]): RecordCategory {
    return this.buildTopRecord({
      key: `mvp-${season}`,
      title: `MVP seizoen ${season}`,
      icon: 'workspace_premium',
      unit: 'punten',
      higherIsBetter: true,
      stats,
      valueFn: p => p.totalPoints,
    });
  }

  private computeRecords(
    spelers: PlayerSheetData[],
    wedstrijden: WedstrijdData[],
    fullStats: Player[],
  ): RecordCategory[] {
    const categories: RecordCategory[] = [];

    // 1) Hoogste rating
    categories.push(this.buildTopRecord({
      key: 'highest-rating',
      title: 'Hoogste rating (all-time)',
      icon: 'star',
      unit: '',
      higherIsBetter: true,
      stats: fullStats,
      valueFn: p => p.rating,
    }));

    // 2) Meeste wedstrijden
    categories.push(this.buildTopRecord({
      key: 'most-matches',
      title: 'Meeste wedstrijden',
      icon: 'directions_run',
      unit: 'wedstrijden',
      higherIsBetter: true,
      stats: fullStats,
      valueFn: p => p.gamesPlayed,
    }));

    // 3) Langste win-streak
    const winStreaks = this.computeStreaks(spelers, wedstrijden, 'W');
    categories.push(this.buildTopFromMap({
      key: 'longest-win-streak',
      title: 'Langste win-streak',
      icon: 'local_fire_department',
      unit: 'wedstrijden',
      higherIsBetter: true,
      values: winStreaks,
      spelers,
    }));

    // 4) Langste verlies-streak
    const lossStreaks = this.computeStreaks(spelers, wedstrijden, 'L');
    categories.push(this.buildTopFromMap({
      key: 'longest-loss-streak',
      title: 'Langste verlies-streak',
      icon: 'trending_down',
      unit: 'wedstrijden',
      higherIsBetter: true,
      values: lossStreaks,
      spelers,
    }));

    // 5) Meeste Zlatan-punten
    categories.push(this.buildTopRecord({
      key: 'most-zlatans',
      title: 'Meeste Zlatan-punten',
      icon: 'military_tech',
      unit: 'punten',
      higherIsBetter: true,
      stats: fullStats,
      valueFn: p => p.zlatanPoints,
    }));

    // 6) Meeste Ventiel-punten
    categories.push(this.buildTopRecord({
      key: 'most-ventiels',
      title: 'Meeste Ventiel-punten',
      icon: 'mood_bad',
      unit: 'punten',
      higherIsBetter: true,
      stats: fullStats,
      valueFn: p => p.ventielPoints,
    }));

    // 7) Beste win-percentage (min 10 wedstrijden)
    const eligible = fullStats.filter(p => p.gamesPlayed >= MIN_MATCHES_FOR_WINRATE);
    categories.push(this.buildTopRecord({
      key: 'highest-winrate',
      title: 'Beste win-percentage',
      icon: 'emoji_events',
      unit: '%',
      higherIsBetter: true,
      stats: eligible,
      valueFn: p => p.winRatio,
    }));

    return categories;
  }

  private buildTopRecord(opts: {
    key: string;
    title: string;
    icon: string;
    unit: string;
    higherIsBetter: boolean;
    stats: Player[];
    valueFn: (p: Player) => number;
  }): RecordCategory {
    const eligible = opts.stats.filter(p => typeof p.id === 'number');
    let holders: RecordHolder[] = [];
    if (eligible.length > 0) {
      const values = eligible.map(opts.valueFn);
      const top = opts.higherIsBetter ? Math.max(...values) : Math.min(...values);
      // Als top 0 is en hoger=better, geef geen holders (niemand heeft het record)
      if (!(opts.higherIsBetter && top === 0)) {
        holders = eligible
          .filter(p => opts.valueFn(p) === top)
          .map(p => ({ playerId: p.id as number, name: p.name, value: top }))
          .sort((a, b) => a.name.localeCompare(b.name));
      }
    }
    return {
      key: opts.key,
      title: opts.title,
      icon: opts.icon,
      unit: opts.unit,
      higherIsBetter: opts.higherIsBetter,
      holders,
    };
  }

  private buildTopFromMap(opts: {
    key: string;
    title: string;
    icon: string;
    unit: string;
    higherIsBetter: boolean;
    values: Map<number, number>;
    spelers: PlayerSheetData[];
  }): RecordCategory {
    const spelersById = new Map<number, PlayerSheetData>();
    opts.spelers.forEach(p => { if (typeof p.id === 'number') spelersById.set(p.id, p); });

    let holders: RecordHolder[] = [];
    const entries = Array.from(opts.values.entries()).filter(([, v]) => v > 0);
    if (entries.length > 0) {
      const values = entries.map(([, v]) => v);
      const top = opts.higherIsBetter ? Math.max(...values) : Math.min(...values);
      holders = entries
        .filter(([, v]) => v === top)
        .map(([id, v]) => {
          const sp = spelersById.get(id);
          return sp ? { playerId: id, name: sp.name, value: v } : null;
        })
        .filter((h): h is RecordHolder => h !== null)
        .sort((a, b) => a.name.localeCompare(b.name));
    }
    return {
      key: opts.key,
      title: opts.title,
      icon: opts.icon,
      unit: opts.unit,
      higherIsBetter: opts.higherIsBetter,
      holders,
    };
  }

  /**
   * Bereken longest streak van het opgegeven outcome-type per speler.
   */
  private computeStreaks(
    spelers: PlayerSheetData[],
    wedstrijden: WedstrijdData[],
    target: 'W' | 'L',
  ): Map<number, number> {
    const result = new Map<number, number>();
    const sorted = [...wedstrijden].sort((a, b) => {
      if (!a.datum || !b.datum) return 0;
      return a.datum.getTime() - b.datum.getTime();
    });

    spelers.forEach(p => {
      if (typeof p.id !== 'number') return;
      const id = p.id;
      let longest = 0;
      let run = 0;
      sorted.forEach(m => {
        const inWit = (m.teamWit || []).includes(id);
        const inRood = (m.teamRood || []).includes(id);
        if (!inWit && !inRood) return;
        const scoreWit = m.scoreWit ?? 0;
        const scoreRood = m.scoreRood ?? 0;
        const ownScore = inWit ? scoreWit : scoreRood;
        const oppScore = inWit ? scoreRood : scoreWit;
        let outcome: 'W' | 'L' | 'D';
        if (ownScore > oppScore) outcome = 'W';
        else if (ownScore < oppScore) outcome = 'L';
        else outcome = 'D';

        if (outcome === target) {
          run++;
          if (run > longest) longest = run;
        } else {
          run = 0;
        }
      });
      result.set(id, longest);
    });

    return result;
  }
}

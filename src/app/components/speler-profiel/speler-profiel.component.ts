import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, combineLatest, of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { PlayerService } from '../../services/player.service';
import {
  PlayerProfileService,
  PlayerProfileStats,
  RatingPoint,
  TopTeammate,
  MatchHistoryEntry,
} from '../../services/player-profile.service';
import { PlayerSheetData } from '../../interfaces/IPlayerSheet';
import { RecordCategory, RecordsService } from '../../services/records.service';
import { AchievementsService } from '../../services/achievements.service';
import { PlayerAchievement } from '../../interfaces/IAchievement';
import { playerInitials } from '../../utils/player-initials';

interface ProfileVm {
  player: PlayerSheetData;
  stats: PlayerProfileStats;
  trend: RatingPoint[];
  teammates: TopTeammate[];
  worstTeammates: TopTeammate[];
  history: MatchHistoryEntry[];
  recordsHeld: RecordCategory[];
  achievements: PlayerAchievement[];
}

@Component({
  selector: 'app-speler-profiel',
  templateUrl: './speler-profiel.component.html',
  styleUrls: ['./speler-profiel.component.scss'],
})
export class SpelerProfielComponent implements OnInit, OnDestroy {
  vm$!: Observable<ProfileVm | null>;
  trendRange$ = new BehaviorSubject<'12m' | 'all'>('12m');
  readonly historyColumns = ['date', 'ownTeam', 'opponents', 'score', 'outcome'];

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private profileService: PlayerProfileService,
    private recordsService: RecordsService,
    private achievementsService: AchievementsService,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.vm$ = combineLatest([this.route.paramMap, this.trendRange$]).pipe(
      switchMap(([params, range]) => {
        const id = Number(params.get('id'));
        if (!Number.isFinite(id)) return of(null);
        return combineLatest([
          this.playerService.getPlayers().pipe(map(ps => ps.find(p => p.id === id) ?? null)),
          this.profileService.getStats(id),
          this.profileService.getRatingTrend(id, range),
          this.profileService.getTopTeammates(id, 5),
          this.profileService.getWorstTeammates(id, 5),
          this.profileService.getMatchHistory(id, 10),
          this.recordsService.getRecordsForPlayer(id),
          this.achievementsService.getPlayerAchievements(id),
        ]).pipe(
          map(([player, stats, trend, teammates, worstTeammates, history, recordsHeld, achievements]) =>
            player ? { player, stats, trend, teammates, worstTeammates, history, recordsHeld, achievements } : null,
          ),
          tap(vm => {
            if (vm?.player?.name) {
              this.titleService.setTitle(`${vm.player.name} — Zaalvoetbal Doorn`);
            }
          }),
        );
      }),
    );
  }

  ngOnDestroy(): void {
    this.titleService.setTitle('Zaalvoetbal Doorn');
  }

  onRangeChange(range: '12m' | 'all'): void {
    this.trendRange$.next(range);
  }

  initialsFor(name: string | null | undefined): string {
    return playerInitials(name);
  }

  getHolderValue(record: RecordCategory, playerId: number): string {
    const holder = record.holders.find(h => h.playerId === playerId);
    if (!holder) return '';
    const value = Math.round(holder.value * 10) / 10;
    return record.unit ? `${value} ${record.unit}` : `${value}`;
  }
}

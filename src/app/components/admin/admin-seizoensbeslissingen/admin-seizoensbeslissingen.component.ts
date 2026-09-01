import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { forkJoin, of, switchMap } from 'rxjs';
import { GameStatisticsService } from '../../../services/game.statistics.service';
import { SeasonDecidersService } from '../../../services/season-deciders.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { Player } from '../../../interfaces/IPlayer';

/** Eén afgerond seizoen met de spelers die aan kop gelijk zijn geëindigd. */
interface SeasonRow {
  season: string;
  topPoints: number;
  tied: Player[];
  winnerPlayerId: number | null;
  note: string;
  saving: boolean;
}

@Component({
  selector: 'app-admin-seizoensbeslissingen',
  templateUrl: './admin-seizoensbeslissingen.component.html',
  styleUrls: ['./admin-seizoensbeslissingen.component.scss'],
})
export class AdminSeizoensbeslissingenComponent implements OnInit {
  rows: SeasonRow[] = [];
  loading = true;

  private destroyRef = inject(DestroyRef);

  constructor(
    private stats: GameStatisticsService,
    private seasonDeciders: SeasonDecidersService,
    private snackbar: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.loading = true;
    forkJoin({
      seasons: this.stats.getAvailableSeasons(),
      current: this.stats.getCurrentSeason(),
      deciders: this.seasonDeciders.getBySeason(),
    })
      .pipe(
        switchMap(({ seasons, current, deciders }) => {
          // Alleen afgeronde seizoenen: zolang er nog gespeeld wordt, is er
          // niets te beslechten.
          const completed = (seasons ?? []).filter(s => s !== current);
          if (completed.length === 0) return of({ perSeason: [], deciders });
          return forkJoin(
            completed.map(season =>
              this.stats.getFullPlayerStats(season).pipe(
                switchMap(stats => of({ season, stats })),
              ),
            ),
          ).pipe(switchMap(perSeason => of({ perSeason, deciders })));
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: ({ perSeason, deciders }) => {
          this.rows = perSeason.map(({ season, stats }) => {
            const eligible = stats.filter(p => typeof p.id === 'number' && p.totalPoints > 0);
            const topPoints = Math.max(...eligible.map(p => p.totalPoints), 0);
            const tied = eligible
              .filter(p => p.totalPoints === topPoints)
              .sort((a, b) => a.name.localeCompare(b.name));
            const decider = deciders.get(season) ?? null;
            return {
              season,
              topPoints,
              tied,
              winnerPlayerId: decider?.winnerPlayerId ?? null,
              note: decider?.note ?? '',
              saving: false,
            };
          });
          this.loading = false;
        },
        error: () => {
          this.snackbar.error('Fout bij het laden van de seizoensgegevens.');
          this.loading = false;
        },
      });
  }

  save(row: SeasonRow): void {
    if (row.winnerPlayerId === null) return;
    row.saving = true;
    this.seasonDeciders.set(row.season, row.winnerPlayerId, row.note.trim() || null).subscribe({
      next: () => {
        row.saving = false;
        this.snackbar.success(`Beslissing voor ${row.season} opgeslagen.`);
      },
      error: () => {
        row.saving = false;
        this.snackbar.error('Fout bij het opslaan van de beslissing.');
      },
    });
  }

  clear(row: SeasonRow): void {
    row.saving = true;
    this.seasonDeciders.clear(row.season).subscribe({
      next: () => {
        row.winnerPlayerId = null;
        row.note = '';
        row.saving = false;
        this.snackbar.success(`Beslissing voor ${row.season} verwijderd.`);
      },
      error: () => {
        row.saving = false;
        this.snackbar.error('Fout bij het verwijderen van de beslissing.');
      },
    });
  }
}

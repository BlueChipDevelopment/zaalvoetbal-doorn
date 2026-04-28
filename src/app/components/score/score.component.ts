import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NextMatchService, NextMatchInfo } from '../../services/next-match.service';
import { getCurrentDateTimeISO } from '../../utils/date-utils';
import { NextMatchInfoComponent } from '../next-match-info/next-match-info.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { GameStatisticsService } from '../../services/game.statistics.service';
import { WedstrijdenService } from '../../services/wedstrijden.service';
import { Player } from '../../interfaces/IPlayer';

interface Match {
  rowNumber?: number; // Make optional
  matchNumber: number;
  date: string;
  teamWhitePlayerIds: number[];
  teamRedPlayerIds: number[];
  teamWhiteGoals?: number | string;
  teamRedGoals?: number | string;
  zlatanPlayerId?: number | null;
}

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NextMatchInfoComponent,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    PlayerCardComponent,
  ],
})
export class ScoreComponent implements OnInit {
  nextMatch: Match | null = null;
  nextMatchInfo: NextMatchInfo | null = null;
  teamWhitePlayers: Player[] = [];
  teamRedPlayers: Player[] = [];
  /** Spelers (Player objecten met id) die in beide teams zitten — gebruikt door de Zlatan-dropdown. */
  participatingPlayers: Player[] = [];
  whiteGoals: number | null = null;
  redGoals: number | null = null;
  selectedZlatanId: number | null = null;
  isLoading: boolean = true;
  errorMessage: string | null = null;

  private destroyRef = inject(DestroyRef);

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private nextMatchService: NextMatchService,
    private gameStatisticsService: GameStatisticsService,
    private wedstrijdenService: WedstrijdenService
  ) {}

  ngOnInit(): void {
    this.loadNextMatch();
  }

  private loadNextMatch(): void {
    this.isLoading = true;
    this.errorMessage = null;
    this.nextMatch = null;
    this.whiteGoals = null;
    this.redGoals = null;
    this.selectedZlatanId = null;
    this.participatingPlayers = [];

    // Haal eerst alle spelersstats op via gameStatisticsService
    this.gameStatisticsService.getFullPlayerStats()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
      next: (playerStats: Player[]) => {
        this.nextMatchService.getNextMatchInfo()
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
          next: (info) => {
            this.nextMatchInfo = info;
            if (info && info.wedstrijd) {
              const wedstrijd = info.wedstrijd;
              this.nextMatch = {
                matchNumber: wedstrijd.id ?? 0,
                date: info.parsedDate ? getCurrentDateTimeISO() : info.date,
                teamWhitePlayerIds: wedstrijd.teamWit ?? [],
                teamRedPlayerIds: wedstrijd.teamRood ?? [],
                teamWhiteGoals: wedstrijd.scoreWit ?? undefined,
                teamRedGoals: wedstrijd.scoreRood ?? undefined,
                zlatanPlayerId: wedstrijd.zlatanPlayerId,
                rowNumber: info.rowNumber // direct uit NextMatchInfo
              };
              // Bouw de player objecten voor de cards
              if (this.nextMatch) {
                this.teamWhitePlayers = this.parsePlayers(this.nextMatch.teamWhitePlayerIds, playerStats);
                this.teamRedPlayers = this.parsePlayers(this.nextMatch.teamRedPlayerIds, playerStats);
                // Combineer unieke spelers (op id) voor de dropdown
                const seen = new Set<number>();
                this.participatingPlayers = [...this.teamWhitePlayers, ...this.teamRedPlayers]
                  .filter(p => {
                    if (typeof p.id !== 'number' || seen.has(p.id)) return false;
                    seen.add(p.id);
                    return true;
                  });
              }
              this.isLoading = false;
            } else {
              this.errorMessage = 'Geen aankomende wedstrijd gevonden.';
              this.isLoading = false;
            }
          },
          error: error => {
            this.errorMessage = 'Fout bij het laden van wedstrijden.';
            this.isLoading = false;
          }
        });
      },
      error: error => {
        this.errorMessage = 'Fout bij het laden van spelers.';
        this.isLoading = false;
      }
    });
  }

  /**
   * Zet een array van player-ids om naar een array van Player objecten via playerStats lookup.
   */
  private parsePlayers(playerIds: number[], playerStats: Player[]): Player[] {
    return (playerIds ?? [])
      .map(id => {
        const match = playerStats.find(p => p.id === id);
        if (!match) {
          console.warn('No match for player id:', id, 'in playerStats');
          return { id, name: '', position: '', rating: 0 } as Player;
        }
        return match;
      })
      .filter(p => !!p.name);
  }

  submitScores(): void {
    if (this.nextMatch && this.whiteGoals !== null && this.redGoals !== null) {
      const rowIndexToUpdate = this.nextMatch.rowNumber;

      if (!rowIndexToUpdate) {
        this._snackBar.open('Kan wedstrijd niet identificeren voor het opslaan van scores.', 'OK', {
          duration: 5000,
          panelClass: ['futsal-notification', 'futsal-notification-error']
        });
        return;
      }

      // Extra validatie: controleer of we de juiste wedstrijd hebben
      const matchNumber = this.nextMatch.matchNumber;
      const seizoen = this.nextMatchInfo?.wedstrijd?.seizoen;
      const absoluteId = this.nextMatchInfo?.wedstrijd?.id; // Gebruik het absolute ID voor vergelijking

      if (seizoen && absoluteId) {
        // Dubbele controle via wedstrijdenService
        this.nextMatchService.getNextMatchInfo()
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
          next: (currentMatchInfo) => {
            // Vergelijk op seizoen + absolute ID (stabiel)
            if (currentMatchInfo?.wedstrijd?.seizoen === seizoen &&
                currentMatchInfo?.wedstrijd?.id === absoluteId) {
              // Veilig om scores op te slaan
              this.performScoreUpdate(rowIndexToUpdate);
            } else {
              this._snackBar.open('Wedstrijdgegevens zijn veranderd. Herlaad de pagina.', 'OK', {
                duration: 5000,
                panelClass: ['futsal-notification', 'futsal-notification-warning']
              });
            }
          },
          error: () => {
            // Fallback: gebruik de oorspronkelijke methode
            this.performScoreUpdate(rowIndexToUpdate);
          }
        });
      } else {
        // Fallback voor bestaande wedstrijden zonder seizoen of ID
        this.performScoreUpdate(rowIndexToUpdate);
      }
    } else {
      this._snackBar.open('Vul eerst beide scores in.', 'OK', {
        duration: 3000,
        panelClass: ['futsal-notification', 'futsal-notification-warning']
      });
    }
  }

  private performScoreUpdate(rowIndexToUpdate: number): void {
    const matchNumber = this.nextMatch?.matchNumber;
    const seizoen = this.nextMatchInfo?.wedstrijd?.seizoen;
    const matchId = this.nextMatchInfo?.wedstrijd?.id;
    console.log(`💾 Scores opslaan - Seizoen: ${seizoen || 'onbekend'}, Wedstrijd: ${matchNumber}, ID: ${matchId}`);

    if (!matchId) {
      console.error('❌ Geen match-id beschikbaar voor score-update');
      this._snackBar.open('Fout: kon wedstrijd niet identificeren.', 'Sluiten', {
        duration: 5000,
        panelClass: ['futsal-notification', 'futsal-notification-error']
      });
      return;
    }

    // Mutation: bewust GEEN takeUntilDestroyed zodat de save doorgaat ook als de
    // gebruiker wegnavigeert voor de response binnen is.
    this.wedstrijdenService.updateScore(
      matchId,
      this.whiteGoals!,
      this.redGoals!,
      this.selectedZlatanId,
    ).subscribe({
      next: () => {
        console.log(`✅ Scores succesvol opgeslagen voor ${seizoen || 'onbekend'} wedstrijd ${matchNumber}`);
        this._snackBar.open('Scores en Zlatan succesvol opgeslagen!', 'OK', {
          duration: 3000,
          panelClass: ['futsal-notification', 'futsal-notification-success']
        }).afterDismissed().subscribe(() => {
          this.router.navigate(['/klassement']);
        });
      },
      error: error => {
        console.error(`❌ Fout bij opslaan scores voor ${seizoen || 'onbekend'} wedstrijd ${matchNumber}:`, error);
        this._snackBar.open('Fout bij opslaan. Probeer het opnieuw.', 'Sluiten', {
          duration: 5000,
          panelClass: ['futsal-notification', 'futsal-notification-error']
        });
      }
    });
  }
}

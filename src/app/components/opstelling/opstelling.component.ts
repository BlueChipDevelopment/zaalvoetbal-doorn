import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NextMatchService, NextMatchInfo } from '../../services/next-match.service';
import { GameStatisticsService } from '../../services/game.statistics.service';
import { parseDate } from '../../utils/date-utils';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingStateComponent } from '../loading-state/loading-state.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SnackbarService } from '../../services/snackbar.service';
import { switchMap } from 'rxjs/operators';
import { Player } from '../../interfaces/IPlayer';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-opstelling',
  templateUrl: './opstelling.component.html',
  standalone: true,
  styleUrls: ['./opstelling.component.scss'],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    LoadingStateComponent,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    PlayerCardComponent
  ]
})
export class OpstellingComponent implements OnInit, OnDestroy {
  teams: { teamWhite: Player[]; teamRed: Player[] } | null = null;
  orderedTeams: { key: string, value: Player[] }[] = [];
  loading = true;
  error: string | null = null;
  opstellingUrl = window.location.origin + '/opstelling';
  nextMatchInfo: NextMatchInfo | null = null;
  showOpstelling = false;
  revealTime: Date | null = null;
  countdown: string | null = null;
  algorithmExplanation = '';
  isLoadingCommentary = false;

  private destroyRef = inject(DestroyRef);
  private countdownInterval: ReturnType<typeof setInterval> | null = null;

  constructor(
    private nextMatchService: NextMatchService,
    private gameStatisticsService: GameStatisticsService,
    private snackbar: SnackbarService
  ) {}

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }

  ngOnInit(): void {
    this.loading = true;
    this.nextMatchService.getNextMatchInfo()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
      next: (info) => {
        this.nextMatchInfo = info;
        if (info && info.wedstrijd && info.wedstrijd.teamWit?.length && info.wedstrijd.teamRood?.length) {
          // Opstelling is bekend
          this.loadPlayerCards(info);
        } else {
          // Opstelling nog niet bekend, bereken reveal time
          this.setCountdown(info);
          this.loading = false;
        }
      },
      error: () => {
        this.error = 'Fout bij laden van wedstrijdinformatie.';
        this.loading = false;
      }
    });
  }

  private loadPlayerCards(info: NextMatchInfo) {
    this.gameStatisticsService.getCurrentSeason().pipe(
      switchMap(currentSeason => this.gameStatisticsService.getFullPlayerStats(currentSeason)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (playerStats) => {
        const teamWhite = this.parsePlayers(info.wedstrijd.teamWit, playerStats);
        const teamRed = this.parsePlayers(info.wedstrijd.teamRood, playerStats);
        this.teams = { teamWhite, teamRed };
        this.orderedTeams = [
          { key: 'teamWhite', value: teamWhite },
          { key: 'teamRed', value: teamRed }
        ];
        
        // Gebruik opgeslagen voorbeschouwing, anders AI genereren
        if (info.wedstrijd.voorbeschouwing) {
          this.algorithmExplanation = info.wedstrijd.voorbeschouwing;
        } else {
          this.generateComprehensiveAnalysis(teamWhite, teamRed);
        }
        
        this.loading = false;
      },
      error: () => {
        this.error = 'Fout bij laden van spelers.';
        this.loading = false;
      }
    });
  }

  private parsePlayers(playerIds: number[], playerStats: any[]): any[] {
    return (playerIds ?? [])
      .map((id: number) => {
        const match = playerStats.find((p: any) => p.id === id);
        return match || { id, name: '', position: '', rating: null };
      })
      .filter((p: any) => !!p.name);
  }

  private setCountdown(info: NextMatchInfo | null) {
    if (!info || !info.parsedDate) return;
    // Reveal time = 3.5 uur voor wedstrijd
    const reveal = new Date(info.parsedDate.getTime());
    reveal.setHours(reveal.getHours() - 3, reveal.getMinutes() - 30);
    this.revealTime = reveal;
    this.updateCountdown();
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);
  }

  private updateCountdown() {
    if (!this.revealTime) return;
    const now = new Date();
    const diff = this.revealTime.getTime() - now.getTime();
    if (diff <= 0) {
      this.countdown = 'De opstelling wordt elk moment bekend gemaakt!';
      return;
    }

    const totalHours = diff / (1000 * 60 * 60);

    // Show days if more than 24 hours until reveal
    if (totalHours > 24) {
      const days = Math.floor(totalHours / 24);
      this.countdown = `${days} dag${days === 1 ? '' : 'en'} tot de opstelling bekend wordt.`;
    } else {
      // Show detailed countdown (hours, minutes, seconds) within 24 hours
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      this.countdown = `${hours}u ${minutes}m ${seconds}s tot de opstelling bekend wordt.`;
    }
  }

  copyOpstellingLink() {
    navigator.clipboard.writeText(this.opstellingUrl);
    this.snackbar.success('Link naar de opstelling gekopieerd!');
  }

  getTeamRating(team: any[]): number {
    if (!team || !Array.isArray(team)) return 0;
    return team.reduce((sum, p) => sum + (p && p.rating ? p.rating : 0), 0);
  }

  getTeamPlayerNames(teamKey: string): string {
    const team = this.teams?.[teamKey as keyof typeof this.teams];
    if (!team || !Array.isArray(team)) return '';
    return team.map(p => p.name).join(', ');
  }

  /**
   * De knop 'Bekijk de opstelling' wacht alleen tot de voorbeschouwing klaar is
   * met laden. Blijft die leeg — bijvoorbeeld door een AI-storing — dan is de
   * opstelling gewoon zichtbaar; een storing mag niemand buitensluiten.
   */
  get canRevealOpstelling(): boolean {
    return !this.isLoadingCommentary;
  }

  revealOpstelling(): void {
    this.showOpstelling = true;
  }

  // Comprehensive team analysis methods
  private generateComprehensiveAnalysis(teamWhite: Player[], teamRed: Player[]): void {
    if (!teamWhite.length || !teamRed.length) {
      this.algorithmExplanation = '';
      return;
    }
    this.generateAICommentary(teamWhite, teamRed);
  }

  private async generateAICommentary(teamWhite: Player[], teamRed: Player[]): Promise<void> {
    this.isLoadingCommentary = true;
    try {
      // matchId meesturen: de functie hergebruikt een al opgeslagen
      // voorbeschouwing en bewaart een nieuwe, zodat er per wedstrijd één
      // AI-call nodig is in plaats van één per bezoeker.
      const payload = {
        ...this.buildCommentaryPayload(teamWhite, teamRed),
        matchId: this.nextMatchInfo?.wedstrijd?.id,
      };
      const response = await fetch(`${environment.firebaseBaseUrl}/generateTeamCommentary`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const { commentary } = await response.json();
      if (commentary) {
        this.algorithmExplanation = commentary;
      }
    } catch (err) {
      // Geen voorbeschouwing is niet erg: de opstelling blijft gewoon zichtbaar.
      console.warn('AI-voorbeschouwing niet beschikbaar:', err);
    } finally {
      this.isLoadingCommentary = false;
    }
  }

  private buildCommentaryPayload(teamWhite: Player[], teamRed: Player[]) {
    const whiteScore = this.getTeamRating(teamWhite);
    const redScore = this.getTeamRating(teamRed);
    const whiteDuo = this.findBestDuo(teamWhite);
    const redDuo = this.findBestDuo(teamRed);

    const toFormStats = (players: Player[]) => players
      .filter(p => p.gameHistory && p.gameHistory.length >= 3)
      .map(p => {
        const recent = p.gameHistory.slice(-5);
        return { name: p.name, winPct: recent.filter(g => g.result === 3).length / recent.length };
      });

    const whiteForm = toFormStats(teamWhite);
    const redForm = toFormStats(teamRed);

    return {
      teamWhite: {
        name: 'Team Wit', totalScore: whiteScore,
        players: teamWhite.map(p => ({
          name: p.name, position: p.position, rating: p.rating,
          gamesPlayed: p.gamesPlayed || 0, winRatio: p.winRatio ?? null,
          wins: p.wins || 0, losses: p.losses || 0, ties: p.ties || 0
        }))
      },
      teamRed: {
        name: 'Team Rood', totalScore: redScore,
        players: teamRed.map(p => ({
          name: p.name, position: p.position, rating: p.rating,
          gamesPlayed: p.gamesPlayed || 0, winRatio: p.winRatio ?? null,
          wins: p.wins || 0, losses: p.losses || 0, ties: p.ties || 0
        }))
      },
      stats: {
        scoreDiff: Math.abs(whiteScore - redScore),
        playersInForm: [...whiteForm, ...redForm]
          .filter(p => p.winPct > 0.7)
          .map(p => ({ name: p.name, recentWins: Math.round(p.winPct * 5) })),
        playersInPoorForm: [...whiteForm, ...redForm]
          .filter(p => p.winPct < 0.3).map(p => p.name),
        winStreaks: this.findWinStreaks([...teamWhite, ...teamRed])
          .map(({ player, streak }) => ({ name: player.name, streak })),
        duos: [whiteDuo, redDuo].filter(Boolean),
        newPlayers: [...teamWhite, ...teamRed]
          .filter(p => !p.gamesPlayed || p.gamesPlayed <= 3).map(p => p.name),
        zlatanStars: [...teamWhite, ...teamRed]
          .filter(p => (p.zlatanPoints || 0) >= 3)
          .map(p => ({ name: p.name, points: p.zlatanPoints })),
        ventielStars: [...teamWhite, ...teamRed]
          .filter(p => (p.ventielPoints || 0) >= 3)
          .map(p => ({ name: p.name, points: p.ventielPoints })),
        experience: {
          white: teamWhite.reduce((sum, p) => sum + (p.gamesPlayed || 0), 0),
          red: teamRed.reduce((sum, p) => sum + (p.gamesPlayed || 0), 0)
        },
        historischeWedstrijden: []
      }
    };
  }

  private findBestDuo(squad: Player[]): { playerA: string; playerB: string; winRate: number; games: number } | null {
    let best: { playerA: string; playerB: string; winRate: number; games: number } | null = null;
    for (let i = 0; i < squad.length; i++) {
      for (let j = i + 1; j < squad.length; j++) {
        const a = squad[i]; const b = squad[j];
        if (!a.gameHistory || !b.gameHistory) continue;
        let together = 0; let wins = 0;
        for (const game of a.gameHistory) {
          if (game.teammates?.includes(b.name)) {
            together++;
            if (game.result === 3) wins++;
          }
        }
        if (together >= 3) {
          const winRate = wins / together;
          if (!best || winRate > best.winRate || (winRate === best.winRate && together > best.games)) {
            best = { playerA: a.name, playerB: b.name, winRate, games: together };
          }
        }
      }
    }
    return best;
  }

  private findWinStreaks(squad: Player[]): { player: Player; streak: number }[] {
    return squad.map(player => {
      if (!player.gameHistory || player.gameHistory.length < 3) return null;
      let streak = 0;
      for (let i = player.gameHistory.length - 1; i >= 0; i--) {
        if (player.gameHistory[i].result === 3) streak++;
        else break;
      }
      return streak >= 3 ? { player, streak } : null;
    }).filter((x): x is { player: Player; streak: number } => x !== null);
  }

}

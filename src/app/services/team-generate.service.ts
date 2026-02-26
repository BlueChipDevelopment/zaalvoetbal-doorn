import { Injectable } from '@angular/core';
import { Player } from '../interfaces/IPlayer';
import { Positions } from '../enums/positions.enum';
import { Team } from '../interfaces/ITeam';
import { GoogleSheetsService } from './google-sheets-service';
import { GameStatisticsService } from './game.statistics.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { parseDate } from '../utils/date-utils';

export interface FormAdjustment {
  playerName: string;
  originalRating: number;
  adjustedRating: number;
  formMultiplier: number;
}

export interface TeamGenerationResult {
  teams: Team[];
  combinationsChecked: number;
  scoreDifference: number;
  averageDifference: number;
  formAdjustments: FormAdjustment[];
  keepersLocked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TeamGenerateService {
  private generatedTeams: Team[] = [];
  private lastGenerationResult: TeamGenerationResult | null = null;

  constructor(private googleSheetsService: GoogleSheetsService, private gameStatisticsService: GameStatisticsService) {}

  generateTeams(players: Player[]): TeamGenerationResult | null {
    if (!players || players.length === 0) {
      return null;
    }
    const result = this.completeTeamGeneration(players);
    this.lastGenerationResult = result;
    return result;
  }

  getLastGenerationResult(): TeamGenerationResult | null {
    return this.lastGenerationResult;
  }

  private completeTeamGeneration(players: Player[]): TeamGenerationResult {
    const goalKeepers = players.filter(player => player.position === Positions.GOAL_KEEPER);
    const fieldPlayers = players.filter(player => player.position !== Positions.GOAL_KEEPER);

    // Keeper verdeling: bij 2 keepers → 1 per team. Bij 0 of 1 → keeper als veldspeler.
    // Bij 3+ keepers: 1 per team, rest als veldspeler.
    let keeperWhite: Player | null = null;
    let keeperRed: Player | null = null;
    let extraFieldPlayers: Player[] = [];
    let keepersLocked = false;

    if (goalKeepers.length >= 2) {
      // Shuffle keepers for random assignment
      const shuffledKeepers = this.shuffle([...goalKeepers]);
      keeperWhite = shuffledKeepers[0];
      keeperRed = shuffledKeepers[1];
      extraFieldPlayers = shuffledKeepers.slice(2); // Rest als veldspeler
      keepersLocked = true;
    } else {
      // 0 of 1 keeper: behandel als veldspeler
      extraFieldPlayers = [...goalKeepers];
    }

    const allFieldPlayers = [...fieldPlayers, ...extraFieldPlayers];

    // Collect form adjustments
    const formAdjustments: FormAdjustment[] = [];

    // Calculate effective rating for each field player
    const playerScores = allFieldPlayers.map(player => {
      const formMultiplier = this.calculateRecentForm(player);
      const adjustedRating = player.rating * formMultiplier;
      if (formMultiplier > 1.3 || formMultiplier < 0.7) {
        formAdjustments.push({
          playerName: player.name,
          originalRating: player.rating,
          adjustedRating: Number(adjustedRating.toFixed(1)),
          formMultiplier: Number(formMultiplier.toFixed(2))
        });
      }
      return { player, adjustedRating };
    });

    // Brute-force: vind de optimale verdeling
    const n = allFieldPlayers.length;
    const halfSize = Math.floor(n / 2);

    let bestDifference = Infinity;
    let bestCombinations: number[][] = [];
    let totalDifference = 0;
    let combinationsChecked = 0;

    const totalScore = playerScores.reduce((sum, ps) => sum + ps.adjustedRating, 0);

    // Generate all combinations of size halfSize from n players
    const indices = Array.from({ length: n }, (_, i) => i);

    const generateCombinations = (start: number, combo: number[]) => {
      if (combo.length === halfSize) {
        combinationsChecked++;
        const teamAScore = combo.reduce((sum, idx) => sum + playerScores[idx].adjustedRating, 0);
        const teamBScore = totalScore - teamAScore;
        const diff = Math.abs(teamAScore - teamBScore);
        totalDifference += diff;

        if (diff < bestDifference) {
          bestDifference = diff;
          bestCombinations = [combo.slice()];
        } else if (diff === bestDifference) {
          bestCombinations.push(combo.slice());
        }
        return;
      }

      const remaining = halfSize - combo.length;
      for (let i = start; i <= n - remaining; i++) {
        combo.push(i);
        generateCombinations(i + 1, combo);
        combo.pop();
      }
    };

    generateCombinations(0, []);

    // Random keuze bij gelijke scores voor variatie
    const chosenCombo = bestCombinations[Math.floor(Math.random() * bestCombinations.length)];
    const averageDifference = combinationsChecked > 0 ? totalDifference / combinationsChecked : 0;

    // Build teams
    const teamWhiteFieldPlayers: Player[] = [];
    const teamRedFieldPlayers: Player[] = [];
    const chosenSet = new Set(chosenCombo);

    for (let i = 0; i < n; i++) {
      if (chosenSet.has(i)) {
        teamWhiteFieldPlayers.push(allFieldPlayers[i]);
      } else {
        teamRedFieldPlayers.push(allFieldPlayers[i]);
      }
    }

    const whiteSquad = keeperWhite ? [keeperWhite, ...teamWhiteFieldPlayers] : [...teamWhiteFieldPlayers];
    const redSquad = keeperRed ? [keeperRed, ...teamRedFieldPlayers] : [...teamRedFieldPlayers];

    const teamWhite = this.buildTeam('Team Wit', 'white', whiteSquad);
    const teamRed = this.buildTeam('Team Rood', 'red', redSquad);

    this.generatedTeams = [teamWhite, teamRed];

    return {
      teams: [teamWhite, teamRed],
      combinationsChecked,
      scoreDifference: Number(bestDifference.toFixed(1)),
      averageDifference: Number(averageDifference.toFixed(1)),
      formAdjustments,
      keepersLocked
    };
  }

  private buildTeam(name: string, shirtcolor: string, squad: Player[]): Team {
    const sumOfRatings = squad.reduce((sum, p) => sum + (p.rating || 0), 0);
    const totalScore = this.calculateTeamScoreFromPlayers(squad);
    const chemistryScore = this.calculateTeamChemistryFromPlayers(squad);

    return {
      name,
      squad,
      totalScore,
      shirtcolor,
      attack: 0,
      defense: 0,
      condition: 0,
      sumOfRatings,
      chemistryScore
    };
  }

  recalculateTeamScores(team: Team): void {
    team.sumOfRatings = team.squad.reduce((sum, p) => sum + (p.rating || 0), 0);
    team.totalScore = this.calculateTeamScoreFromPlayers(team.squad);
    team.chemistryScore = this.calculateTeamChemistryFromPlayers(team.squad);
  }

  cleanGeneratedTeams(): void {
    this.generatedTeams = [];
    this.lastGenerationResult = null;
  }

  getGeneratedTeams(): Team[] {
    return this.generatedTeams;
  }

  getFullPlayerStats(season?: string | null): Observable<Player[]> {
    return this.gameStatisticsService.getFullPlayerStats(season);
  }

  getCurrentSeasonPlayerStats(): Observable<Player[]> {
    return this.gameStatisticsService.getCurrentSeason().pipe(
      switchMap(currentSeason => {
        return this.gameStatisticsService.getFullPlayerStats(currentSeason);
      })
    );
  }

  // Helper method to shuffle an array
  private shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length;
    let randomIndex: number;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  // Calculate player's recent form based on last 5 games (0.5 to 1.5 multiplier)
  private calculateRecentForm(player: Player): number {
    if (!player.gameHistory || player.gameHistory.length === 0) {
      return 1.0; // Neutral form for players without history
    }

    // Get last 5 games, sorted by date (most recent first)
    const recentGames = [...player.gameHistory]
      .sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        if (!dateA || !dateB) return 0;
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, 5);

    if (recentGames.length === 0) return 1.0;

    // Calculate form based on results (3=win, 2=tie, 1=loss)
    const recentPoints = recentGames.reduce((sum, game) => sum + game.result, 0);
    const maxPossible = recentGames.length * 3;
    const formRatio = recentPoints / maxPossible;

    // Convert to multiplier between 0.5 (very poor form) and 1.5 (excellent form)
    return 0.5 + (formRatio * 1.0);
  }

  private getPlayerStatsFromCache(playerName: string): Player | null {
    return this.gameStatisticsService.getPlayerStatsByName(playerName) || null;
  }

  // Calculate team chemistry from Player objects directly (no cache dependency)
  private calculateTeamChemistryFromPlayers(squad: Player[]): number {
    if (squad.length <= 1) return 0;

    let positionBonus = 0;
    let ratingSum = 0;

    for (const player of squad) {
      if (player.position === Positions.GOAL_KEEPER.toString() || player.position === Positions.GOAL_KEEPER) {
        positionBonus += 0.2;
      } else {
        positionBonus += 0.5;
      }
      ratingSum += player.rating || 0;
    }

    const teamSizeFactor = Math.min(squad.length / 11, 1);
    const averageRating = squad.length > 0 ? ratingSum / squad.length : 5;
    const ratingFactor = averageRating / 10;

    const chemistryValue = (3 * teamSizeFactor + positionBonus + 2 * ratingFactor);

    return Number(chemistryValue.toFixed(2));
  }

  // Calculate team score from Player objects directly (no cache dependency)
  private calculateTeamScoreFromPlayers(squad: Player[]): number {
    if (!squad.length) return 0;

    let totalScore = 0;
    for (const player of squad) {
      if (player && player.rating) {
        const formMultiplier = this.calculateRecentForm(player);
        const adjustedRating = player.rating * formMultiplier;
        totalScore += adjustedRating;
      }
    }

    return totalScore;
  }
}

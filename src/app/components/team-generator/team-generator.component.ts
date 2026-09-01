import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from '../../interfaces/IPlayer';
import { Positions } from '../../enums/positions.enum';
import { Team, Teams } from '../../interfaces/ITeam';
import { TeamGenerateService, TeamGenerationResult } from '../../services/team-generate.service';
import { AttendanceService } from '../../services/attendance.service';
import { PlayerService } from '../../services/player.service';
import { PlayerSheetData } from '../../interfaces/IPlayerSheet';
import { finalize } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { NextMatchService, NextMatchInfo } from '../../services/next-match.service';
import { WedstrijdenService } from '../../services/wedstrijden.service';
import { WedstrijdData } from '../../interfaces/IWedstrijd';
import { resolveSquadIds } from '../../utils/resolve-squad-ids';
import { lineupChanged } from '../../utils/lineup-changed';
import { NextMatchInfoComponent } from '../next-match-info/next-match-info.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingStateComponent } from '../loading-state/loading-state.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../../services/snackbar.service';
import { environment } from '../../../environments/environment';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-team-generator',
  standalone: true, 
  templateUrl: './team-generator.component.html',
  styleUrls: ['./team-generator.component.scss'],
  imports: [
    CommonModule,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    NextMatchInfoComponent,
    MatProgressSpinnerModule,
    LoadingStateComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    PlayerCardComponent,
    DragDropModule,
  ],
})
export class TeamGeneratorComponent implements OnInit {
  private activePlayersList: Player[] = new Array<Player>();
  private fullPlayerStats: Player[] = [];
  private historischeWedstrijden: WedstrijdData[] = [];
  private loadingSubject = new ReplaySubject<boolean>(1);
  loading$ = this.loadingSubject.asObservable();

  public isFirst: boolean = true;
  public isGenerated = false;
  public isGenerating = false;
  public isTeamsSaved = false;
  public isSavingTeams = false;

  public algorithmExplanation = '';
  public showFullExplanation = false;
  public isLoadingCommentary = false;
  private lastGenerationResult: TeamGenerationResult | null = null;
  
  protected positions: string[] = Object.values(Positions);
  protected ratings: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  protected numOfPlayers: number = 0;
  protected teams: Teams = {} as Teams;
  protected hidePlayerRatings: boolean = false;
  protected errorMessage: string | null = null;

  protected playerForms: FormGroup = new FormGroup({
    players: new FormArray<FormGroup>([]),
  });

  nextMatchInfo: NextMatchInfo | null = null;

  private destroyRef = inject(DestroyRef);

  constructor(
    private teamGenerateService: TeamGenerateService,
    private nextMatchService: NextMatchService,
    private wedstrijdenService: WedstrijdenService,
    private attendanceService: AttendanceService,
    private playerService: PlayerService,
    private snackBar: MatSnackBar,
    private snackbar: SnackbarService,
  ) {
  }

  ngOnInit(): void {
    this.loadingSubject.next(true);
    this.nextMatchService.getNextMatchInfo()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(info => {
        this.nextMatchInfo = info;
        this.loadingSubject.next(false);
      });
    this.wedstrijdenService.getGespeeldeWedstrijden()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(wedstrijden => {
        this.historischeWedstrijden = wedstrijden;
      });
  }

  protected getAsFormArray(formArray: any): FormArray {
    return formArray as FormArray;
  }

  protected getAsFormGroup(fromGroup: any): FormGroup {
    return fromGroup as FormGroup;
  }

  generateTeams() {
    this.isGenerating = true;
    this.teamGenerateService.cleanGeneratedTeams();

    // Use setTimeout to allow UI to update with spinner before heavy computation
    setTimeout(() => {
      const values = this.playerForms.value;
      if (!values.players || values.players.length === 0) {
        this.errorMessage = 'Please add players first.';
        this.isGenerating = false;
        return;
      }

      // Extract players directly from the form array to ensure only present players are included
      const selectedPlayers = this.getAsFormArray(this.playerForms.controls['players']).controls
        .map((control) => control.value)
        .filter((player: Player) => player && player.name && player.name.trim() !== '' && player.position && player.rating);

      console.log('Selected players for team generation:', selectedPlayers);

      // Generate teams with only selected players
      this.lastGenerationResult = this.teamGenerateService.generateTeams(selectedPlayers);
      const generatedTeams = this.teamGenerateService.getGeneratedTeams();

      // Initialize teams object
      this.teams = {} as Teams;

      // Properly assign teams by index
      if (generatedTeams.length >= 2) {
        this.teams = {
          teamWhite: generatedTeams[0],
          teamRed: generatedTeams[1]
        };
      }

      this.isGenerated = true;

      // Bewust geen voorbeschouwing hier: die kost een AI-call en je schuift
      // meestal nog een paar keer. Hij wordt gemaakt bij het opslaan.
      this.algorithmExplanation = '';

      this.isGenerating = false;
    }, 100);
  }
  
  private enrichSquad(squad: Player[]): Player[] {
    return squad.map(player => {
      const full = this.fullPlayerStats.find(p => p.name === player.name);
      return full ? { ...player, ...full, rating: player.rating, position: player.position } : player;
    });
  }

  private analyzeTeam(team: Team) {
    const squad = this.enrichSquad(team.squad);

    // Find players with exceptional form (last 5 games > 70% win rate)
    const playersInForm = squad.filter(player => {
      if (!player.gameHistory || player.gameHistory.length < 3) return false;
      const recentGames = player.gameHistory.slice(-5);
      const wins = recentGames.filter(game => game.result === 3).length;
      return (wins / recentGames.length) > 0.7;
    });

    // Find players with poor form (last 5 games < 30% win rate)
    const playersInPoorForm = squad.filter(player => {
      if (!player.gameHistory || player.gameHistory.length < 3) return false;
      const recentGames = player.gameHistory.slice(-5);
      const wins = recentGames.filter(game => game.result === 3).length;
      return (wins / recentGames.length) < 0.3;
    });

    // Find players on a win streak (3+ consecutive wins from the end)
    const playersOnWinStreak = squad
      .map(player => {
        if (!player.gameHistory || player.gameHistory.length < 3) return null;
        let streak = 0;
        for (let i = player.gameHistory.length - 1; i >= 0; i--) {
          if (player.gameHistory[i].result === 3) streak++;
          else break;
        }
        return streak >= 3 ? { player, streak } : null;
      })
      .filter((x): x is { player: Player; streak: number } => x !== null);

    // Total experience (sum of gamesPlayed)
    const totalExperience = squad.reduce((sum, p) => sum + (p.gamesPlayed || 0), 0);

    // Find new players (<=3 games played)
    const newPlayers = squad.filter(player =>
      !player.gamesPlayed || player.gamesPlayed <= 3
    );

    // Find players with notable zlatan or ventiel points
    const zlatanStars = squad.filter(p => (p.zlatanPoints || 0) >= 3);
    const ventielStars = squad.filter(p => (p.ventielPoints || 0) >= 3);

    return {
      playersInForm,
      playersInPoorForm,
      playersOnWinStreak,
      newPlayers,
      totalExperience,
      zlatanStars,
      ventielStars,
      totalScore: team.totalScore || 0
    };
  }

  private setIntersectionSize(a: Set<string>, b: Set<string>): number {
    let count = 0;
    a.forEach(v => { if (b.has(v)) count++; });
    return count;
  }

  private findSimilarTeamCompositions(): { wedstrijd: WedstrijdData; score: number; isFlipped: boolean }[] {
    if (!this.teams.teamWhite?.squad || !this.teams.teamRed?.squad) return [];

    const curWhite = new Set(this.teams.teamWhite.squad.map(p => p.name.toLowerCase().trim()));
    const curRed   = new Set(this.teams.teamRed.squad.map(p => p.name.toLowerCase().trim()));

    const results: { wedstrijd: WedstrijdData; score: number; isFlipped: boolean }[] = [];

    // Resolve historic player-ids naar namen (lowercase) via fullPlayerStats voor naam-vergelijking.
    const idToName = (id: number): string => {
      const stat = this.fullPlayerStats.find(p => p.id === id);
      return stat?.name?.toLowerCase().trim() ?? '';
    };

    for (const w of this.historischeWedstrijden) {
      if (!w.teamWit?.length || !w.teamRood?.length || !w.datum) continue;
      const histWhite = new Set(w.teamWit.map(idToName).filter(n => n));
      const histRed   = new Set(w.teamRood.map(idToName).filter(n => n));
      if (histWhite.size === 0 && histRed.size === 0) continue;

      // Normaal: wit vs wit + rood vs rood
      const normalScore = (
        this.setIntersectionSize(curWhite, histWhite) / Math.max(curWhite.size, histWhite.size) +
        this.setIntersectionSize(curRed,   histRed)   / Math.max(curRed.size,   histRed.size)
      ) / 2;

      // Omgedraaid: wit vs rood + rood vs wit
      const flippedScore = (
        this.setIntersectionSize(curWhite, histRed)   / Math.max(curWhite.size, histRed.size) +
        this.setIntersectionSize(curRed,   histWhite) / Math.max(curRed.size,   histWhite.size)
      ) / 2;

      const best = Math.max(normalScore, flippedScore);
      if (best >= 0.6) {
        results.push({ wedstrijd: w, score: best, isFlipped: flippedScore > normalScore });
      }
    }

    return results.sort((a, b) => b.score - a.score).slice(0, 2);
  }

  private findBestDuo(squad: Player[]): { playerA: string; playerB: string; winRate: number; games: number } | null {
    let bestDuo: { playerA: string; playerB: string; winRate: number; games: number } | null = null;

    for (let i = 0; i < squad.length; i++) {
      for (let j = i + 1; j < squad.length; j++) {
        const a = squad[i];
        const b = squad[j];
        if (!a.gameHistory || !b.gameHistory) continue;

        // Find games where both were teammates
        let together = 0;
        let wins = 0;
        for (const game of a.gameHistory) {
          if (game.teammates && game.teammates.includes(b.name)) {
            together++;
            if (game.result === 3) wins++;
          }
        }

        if (together >= 3) {
          const winRate = wins / together;
          if (!bestDuo || winRate > bestDuo.winRate || (winRate === bestDuo.winRate && together > bestDuo.games)) {
            bestDuo = { playerA: a.name, playerB: b.name, winRate, games: together };
          }
        }
      }
    }
    return bestDuo;
  }

  /**
   * Maakt de voorbeschouwing voor de op te slaan opstelling. Geeft null terug
   * als de AI niet bereikbaar is; de opstelling wordt dan zonder verhaal
   * opgeslagen in plaats van met een verouderd verhaal.
   */
  private async generateAICommentary(teamWhite: Team, teamRed: Team): Promise<string | null> {
    this.isLoadingCommentary = true;
    try {
      const whiteAnalysis = this.analyzeTeam(teamWhite);
      const redAnalysis = this.analyzeTeam(teamRed);
      const payload = this.buildCommentaryPayload(teamWhite, teamRed, whiteAnalysis, redAnalysis);
      const response = await fetch(`${environment.firebaseBaseUrl}/generateTeamCommentary`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const { commentary } = await response.json();
      return commentary || null;
    } catch (err) {
      console.warn('AI-voorbeschouwing niet beschikbaar:', err);
      return null;
    } finally {
      this.isLoadingCommentary = false;
    }
  }

  private buildCommentaryPayload(teamWhite: Team, teamRed: Team, whiteAnalysis: any, redAnalysis: any) {
    const whiteDuo = this.findBestDuo(this.enrichSquad(teamWhite.squad));
    const redDuo = this.findBestDuo(this.enrichSquad(teamRed.squad));
    const vergelijkbaar = this.findSimilarTeamCompositions();

    return {
      teamWhite: {
        name: teamWhite.name,
        totalScore: whiteAnalysis.totalScore,
        players: this.enrichSquad(teamWhite.squad).map(p => ({
          name: p.name, position: p.position, rating: p.rating,
          gamesPlayed: p.gamesPlayed || 0,
          winRatio: p.winRatio ?? null,
          wins: p.wins || 0, losses: p.losses || 0, ties: p.ties || 0
        }))
      },
      teamRed: {
        name: teamRed.name,
        totalScore: redAnalysis.totalScore,
        players: this.enrichSquad(teamRed.squad).map(p => ({
          name: p.name, position: p.position, rating: p.rating,
          gamesPlayed: p.gamesPlayed || 0,
          winRatio: p.winRatio ?? null,
          wins: p.wins || 0, losses: p.losses || 0, ties: p.ties || 0
        }))
      },
      stats: {
        scoreDiff: Math.abs(whiteAnalysis.totalScore - redAnalysis.totalScore),
        playersInForm: [...whiteAnalysis.playersInForm, ...redAnalysis.playersInForm]
          .map((p: Player) => ({ name: p.name, recentWins: p.gameHistory?.slice(-5).filter((g: any) => g.result === 3).length })),
        playersInPoorForm: [...whiteAnalysis.playersInPoorForm, ...redAnalysis.playersInPoorForm]
          .map((p: Player) => p.name),
        winStreaks: [...whiteAnalysis.playersOnWinStreak, ...redAnalysis.playersOnWinStreak]
          .map(({ player, streak }: any) => ({ name: player.name, streak })),
        duos: [whiteDuo, redDuo].filter(Boolean),
        newPlayers: [...whiteAnalysis.newPlayers, ...redAnalysis.newPlayers].map((p: Player) => p.name),
        zlatanStars: [...whiteAnalysis.zlatanStars, ...redAnalysis.zlatanStars]
          .map((p: Player) => ({ name: p.name, points: p.zlatanPoints })),
        ventielStars: [...whiteAnalysis.ventielStars, ...redAnalysis.ventielStars]
          .map((p: Player) => ({ name: p.name, points: p.ventielPoints })),
        experience: { white: whiteAnalysis.totalExperience, red: redAnalysis.totalExperience },
        historischeWedstrijden: vergelijkbaar.map(v => ({
          datum: v.wedstrijd.datum?.toLocaleDateString('nl-NL'),
          score: Math.round(v.score * 100),
          isFlipped: v.isFlipped,
          uitslag: v.wedstrijd.scoreWit !== null ? `${v.wedstrijd.scoreWit}-${v.wedstrijd.scoreRood}` : null
        }))
      }
    };
  }

  protected clean(): void {
    this.numOfPlayers = 0;
    this.playerForms = new FormGroup({
      players: new FormArray<FormGroup>([]),
    });

    this.isFirst = true;
    this.isGenerated = false;
  }

  protected addNewPlayer(): void {
    let form = new FormGroup({
      name: new FormControl<string | null>(null, [Validators.required]),
      position: new FormControl<string | null>(Positions.PLAYER.toString(), [Validators.required]),
      rating: new FormControl<number | null>(null, [Validators.required]),
    });
    (this.playerForms.controls['players'] as FormArray).push(form);
    this.numOfPlayers++;
  }

  protected deletePlayer(index: number): void {
    (this.playerForms.controls['players'] as FormArray).removeAt(index);
    this.numOfPlayers--;

    if (this.numOfPlayers < 1) this.isFirst = true;
  }

  protected getTeams(): string[] {
    return Object.keys(this.teams);
  }

  protected getTeam(teamName: string): Team {
    return this.teams[teamName as keyof Teams] as Team;
  }

  protected getPlayerByName(playerName: string): Player {
    return this.playerForms.controls['players'].value.find((player: Player) => {
      return player.name == playerName;
    });
  }

  protected createPlayerForms(): void {
    let formArr = new FormArray<FormGroup>([]);
    for (let i = 0; i < this.numOfPlayers; i++) {
      let form = new FormGroup({
        name: new FormControl<string | null>(null, [Validators.required]),
        position: new FormControl<string | null>(null, [Validators.required]),
        rating: new FormControl<number | null>(null, [Validators.required]),
      });
      formArr.push(form);
    }

    this.playerForms.controls['players'] = formArr;
    this.isFirst = false;
  }

  protected GetAanwezigSpelers(): void {
    this.loadingSubject.next(true);
    this.errorMessage = null;
    
    // Eerst alle ratings ophalen (huidige seizoen)
    this.teamGenerateService.getCurrentSeasonPlayerStats().pipe(
      finalize(() => this.loadingSubject.next(false)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (playerStats: any[]) => {
        this.fullPlayerStats = playerStats as Player[];
        this.nextMatchService.getNextMatchInfo()
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
          next: (matchInfo) => {
            if (!matchInfo) {
              this.snackbar.error('Geen aankomende wedstrijd gevonden.');
              return;
            }

            const dateString = matchInfo.parsedDate
              ? this.attendanceService.formatDate(matchInfo.parsedDate)
              : matchInfo.date;

            // Gebruik AttendanceService in plaats van direct Google Sheets
            this.attendanceService.getPresentPlayers(dateString)
              .pipe(takeUntilDestroyed(this.destroyRef))
              .subscribe({
              next: (presentPlayers) => {
                if (presentPlayers.length === 0) {
                  this.snackbar.error('Geen aanwezige spelers gevonden voor de volgende wedstrijd.');
                  return;
                }
                
                let formArr = new FormArray<FormGroup>([]);
                for (let player of presentPlayers) {
                  const playerStat = playerStats.find((p: any) => p.name === player.name);
                  let form = new FormGroup({
                    name: new FormControl<string | null>(player.name, [Validators.required]),
                    position: new FormControl<string | null>(playerStat ? playerStat.position : player.position || Positions.PLAYER.toString(), [Validators.required]),
                    rating: new FormControl<number | null>(playerStat ? playerStat.rating : null, [Validators.required]),
                  });
                  formArr.push(form);
                }
                
                this.playerForms.controls['players'] = formArr;
                this.numOfPlayers = presentPlayers.length;
                this.isFirst = false;
                this.isGenerated = false;
                this.errorMessage = null;
              },
              error: (err) => {
                this.snackbar.error('Fout bij ophalen aanwezigheid: ' + (err.message || err));
              }
            });
          },
          error: (err) => {
            this.snackbar.error('Fout bij ophalen wedstrijden: ' + (err.message || err));
          }
        });
      },
      error: (err) => {
        this.snackbar.error('Fout bij ophalen spelersstatistieken: ' + (err.message || err));
      }
    });
  }
  

  protected GetAlleActieveSpelers(): void {
    this.loadingSubject.next(true);
    this.errorMessage = null;
    
    // Get statistics data to merge with player data (huidige seizoen)
    this.teamGenerateService.getCurrentSeasonPlayerStats()
      .pipe(
        finalize(() => this.loadingSubject.next(false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (players: any[]) => {
          this.fullPlayerStats = players as Player[];
          // Filter alleen actieve spelers (statistics already include actief status from PlayerService)
          this.activePlayersList = players.filter(p => p.actief);
          if (this.activePlayersList.length > 0) {
            this.GenerateFormFields();
          }
        },
        error: (error) => {
          this.snackbar.error(error.message || 'Fout bij ophalen spelers.');
        }
      });
  }

  private GenerateFormFields() {
    this.numOfPlayers = this.activePlayersList.length;
    let formArr = new FormArray<FormGroup>([]);
    for (let player of this.activePlayersList) {
      const playerName = (player as any).name || (player as any).player || '';
      // Normaliseer positie zodat deze overeenkomt met de enum waarden
      let playerPosition = (player as any).position || null;
      if (playerPosition) {
        // Zoek een match in Positions enum (case-insensitive)
        const match = this.positions.find(
          pos => pos.toLowerCase() === playerPosition.toLowerCase()
        );
        playerPosition = match || playerPosition;
      }
      let form = new FormGroup({
        name: new FormControl<string | null>(playerName, [Validators.required]),
        position: new FormControl<string | null>(playerPosition, [Validators.required]),
        rating: new FormControl<number | null>(player.rating, [Validators.required]),
      });
      formArr.push(form);
    }
    this.playerForms.controls['players'] = formArr;
    this.isFirst = false;
  }

  saveTeamsToSheet(): void {
    void this.saveTeams();
  }

  private async saveTeams(): Promise<void> {
    if (!this.nextMatchInfo || !this.teams.teamWhite || !this.teams.teamRed) {
      this.snackbar.error('Kan teams niet opslaan: ontbrekende gegevens.');
      return;
    }

    // Prevent double-click/double-save
    if (this.isSavingTeams) {
      console.log('⚠️ Save already in progress, ignoring duplicate call');
      return;
    }

    this.isSavingTeams = true;
    this.loadingSubject.next(true);
    this.errorMessage = null;

    // Speler-ids resolven via fullPlayerStats: de squad-objecten uit het
    // formulier dragen zelf geen id. Lukt het matchen niet, dan breken we af —
    // anders zou updateTeams een lege opstelling opslaan (delete zonder insert)
    // en de bestaande opstelling wissen.
    const whiteResolved = resolveSquadIds(this.teams.teamWhite.squad, this.fullPlayerStats);
    const redResolved = resolveSquadIds(this.teams.teamRed.squad, this.fullPlayerStats);
    const unresolved = [...whiteResolved.unresolved, ...redResolved.unresolved];
    if (unresolved.length > 0) {
      console.error('❌ Spelers zonder id-match:', unresolved);
      this.isSavingTeams = false;
      this.loadingSubject.next(false);
      this.snackbar.error(
        `Kan deze spelers niet koppelen: ${unresolved.join(', ')}. Teams niet opgeslagen.`,
      );
      return;
    }
    const teamWhitePlayerIds = whiteResolved.ids;
    const teamRedPlayerIds = redResolved.ids;
    if (teamWhitePlayerIds.length === 0 || teamRedPlayerIds.length === 0) {
      console.error('❌ Leeg team — opslaan afgebroken');
      this.isSavingTeams = false;
      this.loadingSubject.next(false);
      this.snackbar.error('Eén van de teams is leeg — teams niet opgeslagen.');
      return;
    }

    // Extra validatie: controleer seizoen en wedstrijdnummer
    const seizoen = this.nextMatchInfo.seizoen;
    const matchNumber = this.nextMatchInfo.matchNumber;

    console.log(`💾 Teams opslaan - Seizoen: ${seizoen || 'onbekend'}, Wedstrijd: ${matchNumber}`);

    // Match-id opzoeken voor de updateTeams-aanroep
    const matchId = this.nextMatchInfo?.wedstrijd?.id;
    if (!matchId) {
      console.error('❌ Geen match-id beschikbaar voor team-update');
      this.isSavingTeams = false;
      this.loadingSubject.next(false);
      this.snackbar.error('Fout: kon wedstrijd niet identificeren.');
      return;
    }

    // Voorbeschouwing: alleen een AI-call als de opstelling daadwerkelijk
    // afwijkt van wat er al opgeslagen staat. Slaan we dezelfde opstelling nog
    // eens op, dan blijft het bestaande verhaal staan (undefined = niet aanraken).
    const teamsChanged = lineupChanged(
      this.nextMatchInfo.wedstrijd?.teamWit,
      this.nextMatchInfo.wedstrijd?.teamRood,
      teamWhitePlayerIds,
      teamRedPlayerIds,
    );
    let voorbeschouwing: string | null | undefined = undefined;
    if (teamsChanged) {
      // null bij een mislukte AI-call: liever geen verhaal dan een verhaal over
      // een opstelling die niet meer klopt.
      voorbeschouwing = await this.generateAICommentary(this.teams.teamWhite, this.teams.teamRed);
      this.algorithmExplanation = voorbeschouwing ?? '';
    }

    // Mutation: bewust GEEN takeUntilDestroyed zodat de save doorgaat ook als de
    // gebruiker wegnavigeert voor de response binnen is.
    this.wedstrijdenService.updateTeams(
      matchId,
      teamWhitePlayerIds,
      teamRedPlayerIds,
      'Handmatig',
      voorbeschouwing,
    ).subscribe({
      next: () => {
        console.log(`✅ Teams succesvol opgeslagen voor ${seizoen || 'onbekend'} wedstrijd ${matchNumber}`);
        this.isTeamsSaved = true;
        this.isSavingTeams = false;
        this.loadingSubject.next(false);
        this.snackbar.success('Teams opgeslagen!');
        this.sendPushNotificationToAll(
          'Opstelling bekend ⚽',
          'Bekijk de teams voor de volgende wedstrijd.',
          window.location.origin + '/opstelling',
        );
      },
      error: (err) => {
        console.error(`❌ Fout bij opslaan teams voor ${seizoen || 'onbekend'} wedstrijd ${matchNumber}:`, err);
        this.isSavingTeams = false;
        this.loadingSubject.next(false);
        this.snackbar.error('Fout bij opslaan teams: ' + (err.message || err));
      },
    });
  }

  onPlayerDrop(event: CdkDragDrop<any[]>, targetTeamKey: string) {
    const sourceTeamKey = this.getTeams().find(teamKey => this.getTeam(teamKey).squad === event.previousContainer.data);
    const targetTeam = this.getTeam(targetTeamKey);
    const sourceTeam = this.getTeam(sourceTeamKey!);
    if (event.previousContainer === event.container) {
      // Zelfde team, sorteren
      const moved = targetTeam.squad.splice(event.previousIndex, 1)[0];
      targetTeam.squad.splice(event.currentIndex, 0, moved);
    } else {
      // Tussen teams verplaatsen
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    // Herbereken alle scores (sumOfRatings, totalScore, chemistryScore)
    this.teamGenerateService.recalculateTeamScores(targetTeam);
    if (sourceTeamKey && sourceTeamKey !== targetTeamKey) {
      this.teamGenerateService.recalculateTeamScores(sourceTeam);
    }
  }

  get connectedDropLists(): string[] {
    return this.getTeams().map(t => t + '-drop');
  }


  /**
   * Stuur een push notificatie naar alle spelers met toestemming (via backend)
   */
  sendPushNotificationToAll(title: string, body: string, url: string) {
    fetch(`${environment.firebaseBaseUrl}/sendPushToAll`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body, url })
    })
      .then(async res => {
        if (!res.ok) {
          const text = await res.text();
          // Backend stuurt tegenwoordig een JSON-body met een `message`-veld;
          // ouder formaat was plain tekst. Beide afhandelen.
          let message = text;
          try {
            const parsed = JSON.parse(text);
            if (parsed && typeof parsed.message === 'string') message = parsed.message;
          } catch {
            // geen JSON — houd tekst zoals hij is
          }
          throw new Error(message || `HTTP ${res.status}`);
        }
        this.snackbar.success('Push notificatie verstuurd!');
      })
      .catch(err => {
        const message = err instanceof Error ? err.message : String(err);
        this.snackbar.error('Fout bij versturen push notificatie: ' + message);
      });
  }

  trackByTeamKey(index: number, key: string): string {
    return key;
  }
}
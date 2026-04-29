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
import { NextMatchInfoComponent } from '../next-match-info/next-match-info.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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

      // Generate explanation for the team balancing algorithm
      this.createAlgorithmExplanation();

      this.isGenerating = false;
    }, 100);
  }
  
  private createAlgorithmExplanation() {
    const teams = this.teamGenerateService.getGeneratedTeams();
    if (!teams || teams.length < 2) return;

    const teamWhite = teams[0];
    const teamRed = teams[1];

    // Analyze team characteristics
    const whiteAnalysis = this.analyzeTeam(teamWhite);
    const redAnalysis = this.analyzeTeam(teamRed);

    // Start AI-versie (bij falen valt terug op template)
    this.generateAICommentary(teamWhite, teamRed, whiteAnalysis, redAnalysis);
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

  private generatePersonalizedExplanation(
    teamWhite: Team,
    teamRed: Team,
    whiteAnalysis: any,
    redAnalysis: any,
    _factors: string[]
  ): string {
    const parts: string[] = [];
    const scoreDiff = Math.abs(whiteAnalysis.totalScore - redAnalysis.totalScore);
    const genResult = this.lastGenerationResult;

    // --- A. Opening — Balansoordeel ---
    if (scoreDiff < 0.5) {
      parts.push('<p><strong>Dit wordt een absolute thriller!</strong> Het algoritme kon nauwelijks verschil vinden tussen deze teams — op papier zijn ze vrijwel identiek.</p>');
    } else if (scoreDiff < 2) {
      parts.push('<p><strong>Op papier zijn deze teams uitzonderlijk goed gebalanceerd.</strong> Het verschil is minimaal, dus dit belooft een spannende pot te worden.</p>');
    } else {
      const favoriet = whiteAnalysis.totalScore > redAnalysis.totalScore ? teamWhite.name : teamRed.name;
      parts.push(`<p><strong>${favoriet} start met een klein voordeel</strong>, maar juist dat maakt het spannend — de underdog heeft alles te winnen.</p>`);
    }

    // --- B. Vorm-verhaal ---
    const formParts: string[] = [];
    const allInForm = [
      ...whiteAnalysis.playersInForm.map((p: Player) => ({ player: p, team: teamWhite.name })),
      ...redAnalysis.playersInForm.map((p: Player) => ({ player: p, team: teamRed.name }))
    ];
    for (const { player, team } of allInForm) {
      const recentGames = player.gameHistory.slice(-5);
      const wins = recentGames.filter((g: any) => g.result === 3).length;
      if (genResult) {
        const adj = genResult.formAdjustments.find((a: any) => a.playerName === player.name);
        if (adj) {
          formParts.push(`<p>Let op <strong>${player.name}</strong> (${team}) — met ${wins} overwinningen in de laatste ${recentGames.length} wedstrijden is hij in topvorm. Zijn effectieve rating steeg van ${adj.originalRating} naar ${adj.adjustedRating}.</p>`);
        } else {
          formParts.push(`<p>Let op <strong>${player.name}</strong> (${team}) — met ${wins} overwinningen in de laatste ${recentGames.length} wedstrijden is hij momenteel niet te stoppen.</p>`);
        }
      } else {
        formParts.push(`<p>Let op <strong>${player.name}</strong> (${team}) — met ${wins} overwinningen in de laatste ${recentGames.length} wedstrijden is hij momenteel niet te stoppen.</p>`);
      }
    }

    const allPoorForm = [
      ...whiteAnalysis.playersInPoorForm.map((p: Player) => ({ player: p, team: teamWhite.name })),
      ...redAnalysis.playersInPoorForm.map((p: Player) => ({ player: p, team: teamRed.name }))
    ];
    for (const { player } of allPoorForm) {
      if (genResult) {
        const adj = genResult.formAdjustments.find((a: any) => a.playerName === player.name);
        if (adj) {
          formParts.push(`<p><strong>${player.name}</strong> zoekt naar zijn beste niveau na een lastige reeks (rating aangepast van ${adj.originalRating} naar ${adj.adjustedRating}). Een comeback zou het verschil kunnen maken.</p>`);
        } else {
          formParts.push(`<p><strong>${player.name}</strong> zoekt naar zijn beste niveau na een lastige reeks. Een comeback zou het verschil kunnen maken.</p>`);
        }
      } else {
        formParts.push(`<p><strong>${player.name}</strong> zoekt naar zijn beste niveau na een lastige reeks. Een comeback zou het verschil kunnen maken.</p>`);
      }
    }

    if (formParts.length > 0) {
      parts.push(...formParts);
    }

    // --- C. Fun facts pool ---
    const funFacts: string[] = [];

    // Duo-chemistry
    const whiteDuo = this.findBestDuo(this.enrichSquad(teamWhite.squad));
    const redDuo = this.findBestDuo(this.enrichSquad(teamRed.squad));
    if (whiteDuo) {
      const pct = Math.round(whiteDuo.winRate * 100);
      funFacts.push(`<p>Wist je dat <strong>${whiteDuo.playerA}</strong> en <strong>${whiteDuo.playerB}</strong> samen een winrate van ${pct}% hebben in ${whiteDuo.games} gezamenlijke wedstrijden? ${teamWhite.name} kan daarvan profiteren!</p>`);
    }
    if (redDuo) {
      const pct = Math.round(redDuo.winRate * 100);
      funFacts.push(`<p>Wist je dat <strong>${redDuo.playerA}</strong> en <strong>${redDuo.playerB}</strong> samen een winrate van ${pct}% hebben in ${redDuo.games} gezamenlijke wedstrijden? ${teamRed.name} kan daarvan profiteren!</p>`);
    }

    // Experience comparison
    const whiteExp = whiteAnalysis.totalExperience;
    const redExp = redAnalysis.totalExperience;
    if (whiteExp > 0 || redExp > 0) {
      funFacts.push(`<p>${teamWhite.name} brengt samen <strong>${whiteExp} wedstrijden</strong> ervaring mee dit seizoen, ${teamRed.name} <strong>${redExp}</strong>. ${whiteExp > redExp ? 'Het ervaringsvoordeel ligt bij Wit.' : redExp > whiteExp ? 'Het ervaringsvoordeel ligt bij Rood.' : 'Ervaring is precies gelijk verdeeld!'}</p>`);
    }

    // Newcomer spotlight
    const allNewPlayers = [...whiteAnalysis.newPlayers, ...redAnalysis.newPlayers];
    for (const player of allNewPlayers) {
      const n = player.gamesPlayed || 0;
      funFacts.push(`<p>Voor <strong>${player.name}</strong> wordt dit pas wedstrijd nummer ${n + 1} — spannend debuut tussen ervaren spelers!</p>`);
    }

    // Win streaks
    const allStreaks = [...whiteAnalysis.playersOnWinStreak, ...redAnalysis.playersOnWinStreak];
    for (const { player, streak } of allStreaks) {
      funFacts.push(`<p>Let op: <strong>${player.name}</strong> is al ${streak} wedstrijden ongeslagen! Wie stopt deze reeks?</p>`);
    }

    // Zlatan highlights
    const allZlatan = [...whiteAnalysis.zlatanStars, ...redAnalysis.zlatanStars];
    for (const player of allZlatan) {
      funFacts.push(`<p><strong>${player.name}</strong> staat bekend om zijn zlatanpunten (${player.zlatanPoints}) — verwacht spectaculaire acties!</p>`);
    }

    // Ventiel highlights
    const allVentiel = [...whiteAnalysis.ventielStars, ...redAnalysis.ventielStars];
    for (const player of allVentiel) {
      funFacts.push(`<p><strong>${player.name}</strong> heeft ${player.ventielPoints} ventielpoints — de onbetwiste ventielheld van de groep.</p>`);
    }

    // Select random 2-3 fun facts from pool
    if (funFacts.length > 0) {
      const shuffled = funFacts.sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, Math.min(3, Math.max(2, shuffled.length)));
      parts.push(...selected);
    }

    // Historical team compositions — altijd tonen als gevonden
    const vergelijkbaar = this.findSimilarTeamCompositions();
    const maandNamen = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
    for (const { wedstrijd: w, score, isFlipped } of vergelijkbaar) {
      const dag   = w.datum!.getDate();
      const maand = maandNamen[w.datum!.getMonth()];
      const jaar  = w.datum!.getFullYear();
      const pct   = Math.round(score * 100);
      const uitslag = (w.scoreWit !== null && w.scoreRood !== null)
        ? `Wit ${w.scoreWit} – ${w.scoreRood} Rood`
        : null;

      let tekst: string;
      if (pct === 100 && !isFlipped) {
        tekst = `Exact dezelfde teams als op <strong>${dag} ${maand} ${jaar}</strong>!${uitslag ? ` Toen werd het <strong>${uitslag}</strong>.` : ''} Wordt de geschiedenis herhaald?`;
      } else if (pct === 100 && isFlipped) {
        tekst = `Op <strong>${dag} ${maand} ${jaar}</strong> stonden dezelfde spelers tegenover elkaar, maar dan omgekeerd.${uitslag ? ` Uitslag: <strong>${uitslag}</strong>.` : ''} Revanche time?`;
      } else if (isFlipped) {
        tekst = `<strong>${pct}%</strong> overlap met de wedstrijd van <strong>${dag} ${maand} ${jaar}</strong> — maar Wit en Rood waren toen omgedraaid.${uitslag ? ` Uitslag: <strong>${uitslag}</strong>.` : ''}`;
      } else {
        tekst = `<strong>${pct}%</strong> van de huidige opstelling speelde ook op <strong>${dag} ${maand} ${jaar}</strong>.${uitslag ? ` Toen eindigde het <strong>${uitslag}</strong>.` : ''}`;
      }
      parts.push(`<p>${tekst}</p>`);
    }

    // --- E. Afsluiter — Voorspelling ---
    if (scoreDiff < 1) {
      parts.push('<p><strong>Verdict:</strong> dit wordt een wedstrijd die tot de laatste seconde spannend blijft. Zet je schrap!</p>');
    } else if (scoreDiff < 2) {
      const favoriet = whiteAnalysis.totalScore > redAnalysis.totalScore ? teamWhite.name : teamRed.name;
      parts.push(`<p><strong>Verdict:</strong> ${favoriet} begint als lichte favoriet, maar de marges zijn flinterdun. Alles is mogelijk!</p>`);
    } else {
      const favoriet = whiteAnalysis.totalScore > redAnalysis.totalScore ? teamWhite.name : teamRed.name;
      const underdog = whiteAnalysis.totalScore > redAnalysis.totalScore ? teamRed.name : teamWhite.name;
      parts.push(`<p><strong>Verdict:</strong> ${favoriet} start als favoriet, maar onderschat nooit de underdog. ${underdog} heeft niets te verliezen!</p>`);
    }

    return parts.join('');
  }

  private async generateAICommentary(
    teamWhite: Team, teamRed: Team,
    whiteAnalysis: any, redAnalysis: any
  ): Promise<void> {
    this.isLoadingCommentary = true;
    try {
      const payload = this.buildCommentaryPayload(teamWhite, teamRed, whiteAnalysis, redAnalysis);
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
      // Fallback naar template-versie
      console.warn('AI commentary niet beschikbaar, template wordt gebruikt:', err);
      this.algorithmExplanation = this.generatePersonalizedExplanation(
        teamWhite, teamRed, whiteAnalysis, redAnalysis, []
      );
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

    // Save to Wedstrijden sheet — id-arrays aanleveren aan WedstrijdenService.
    const teamWhitePlayerIds = this.teams.teamWhite.squad
      .map(p => p.id)
      .filter((id): id is number => typeof id === 'number');
    const teamRedPlayerIds = this.teams.teamRed.squad
      .map(p => p.id)
      .filter((id): id is number => typeof id === 'number');

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

    // Mutation: bewust GEEN takeUntilDestroyed zodat de save doorgaat ook als de
    // gebruiker wegnavigeert voor de response binnen is.
    this.wedstrijdenService.updateTeams(
      matchId,
      teamWhitePlayerIds,
      teamRedPlayerIds,
      'Handmatig',
      this.algorithmExplanation || undefined,
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
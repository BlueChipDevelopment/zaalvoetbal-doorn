import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerService } from '../../../services/player.service';
import { PlayerSheetData } from '../../../interfaces/IPlayerSheet';
import { SpelerDialogComponent } from './speler-dialog/speler-dialog.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { SnackbarService } from '../../../services/snackbar.service';
import { AuthService } from '../../../services/auth.service';
import { StrippenkaartService } from '../../../services/strippenkaart.service';

@Component({
  selector: 'app-admin-spelers',
  templateUrl: './admin-spelers.component.html',
  styleUrls: ['./admin-spelers.component.scss']
})
export class AdminSpelersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'position', 'actief', 'isAdmin', 'lidmaatschap', 'actions'];
  dataSource = new MatTableDataSource<PlayerSheetData>();
  loading = true;
  balances: Record<number, number> = {};
  private currentUserEmail: string | null = null;

  private destroyRef = inject(DestroyRef);

  constructor(
    private playerService: PlayerService,
    private dialog: MatDialog,
    private snackbar: SnackbarService,
    private authService: AuthService,
    private strippenkaart: StrippenkaartService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(user => {
        this.currentUserEmail = user?.email?.toLowerCase() ?? null;
      });
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.loading = true;
    this.playerService.refreshPlayers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
      next: (players) => {
        this.dataSource.data = players;
        this.loadBalances(players);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading players:', error);
        this.loading = false;
      }
    });
  }

  addPlayer(): void {
    const dialogRef = this.dialog.open(SpelerDialogComponent, {
      width: '500px',
      data: { player: null, mode: 'add' }
    });

    dialogRef.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
      if (result) {
        this.playerService.addPlayer(result)
          .subscribe({
          next: () => {
            this.loadPlayers();
          },
          error: (error) => {
            console.error('Error adding player:', error);
            this.snackbar.error('Fout bij toevoegen speler: ' + error.message);
          }
        });
      }
    });
  }

  editPlayer(player: PlayerSheetData): void {
    const dialogRef = this.dialog.open(SpelerDialogComponent, {
      width: '500px',
      data: { player: { ...player }, mode: 'edit', originalName: player.name }
    });

    dialogRef.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
      if (!result) {
        return;
      }
      const isSelf = !!player.email && player.email.toLowerCase() === this.currentUserEmail;
      const losesOwnAdmin = isSelf && player.isAdmin === true && result.player.isAdmin === false;
      const changesOwnEmail = isSelf && (result.player.email || '').toLowerCase() !== (player.email || '').toLowerCase();
      const selfLockoutRisk = losesOwnAdmin || changesOwnEmail;

      if (selfLockoutRisk) {
        const confirmRef = this.dialog.open(ConfirmDialogComponent, {
          width: '420px',
          data: {
            title: 'Eigen toegang wijzigen',
            message: 'Je wijzigt je eigen beheerrechten of inlog-e-mailadres. Hierdoor kun je jezelf buitensluiten. Doorgaan?',
            confirmLabel: 'Doorgaan',
            destructive: true
          }
        });
        confirmRef.afterClosed()
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe(confirmed => {
            if (confirmed) {
              this.saveEdit(result);
            } else {
              this.loadPlayers(); // reset UI naar opgeslagen toestand
            }
          });
        return;
      }

      this.saveEdit(result);
    });
  }

  private saveEdit(result: { player: PlayerSheetData; originalName: string }): void {
    this.playerService.updatePlayer(result.originalName, result.player)
      .subscribe({
      next: () => {
        this.loadPlayers();
      },
      error: (error) => {
        console.error('Error updating player:', error);
        this.snackbar.error('Fout bij wijzigen speler: ' + error.message);
      }
    });
  }

  private loadBalances(players: PlayerSheetData[]): void {
    this.strippenkaart.refresh();
    players.forEach(p => {
      if (p.id != null) {
        this.strippenkaart.getBalance(p.id).subscribe(b => (this.balances[p.id!] = b));
      }
    });
  }

  getActiefText(actief: boolean): string {
    return actief ? 'Ja' : 'Nee';
  }
}

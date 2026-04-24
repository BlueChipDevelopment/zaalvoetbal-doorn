import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerService } from '../../../services/player.service';
import { PlayerSheetData } from '../../../interfaces/IPlayerSheet';
import { SpelerDialogComponent } from './speler-dialog/speler-dialog.component';

@Component({
  selector: 'app-admin-spelers',
  templateUrl: './admin-spelers.component.html',
  styleUrls: ['./admin-spelers.component.scss']
})
export class AdminSpelersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'position', 'actief', 'actions'];
  dataSource = new MatTableDataSource<PlayerSheetData>();
  loading = true;

  private destroyRef = inject(DestroyRef);

  constructor(
    private playerService: PlayerService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.loading = true;
    this.playerService.refreshPlayers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
      next: (players) => {
        this.dataSource.data = players;
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
        // Mutation: geen takeUntilDestroyed zodat de write doorgaat bij navigatie.
        this.playerService.addPlayer(result)
          .subscribe({
          next: () => {
            this.loadPlayers();
          },
          error: (error) => {
            console.error('Error adding player:', error);
            alert('Fout bij toevoegen speler: ' + error.message);
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
      if (result) {
        // Mutation: geen takeUntilDestroyed zodat de write doorgaat bij navigatie.
        this.playerService.updatePlayer(result.originalName, result.player)
          .subscribe({
          next: () => {
            this.loadPlayers();
          },
          error: (error) => {
            console.error('Error updating player:', error);
            alert('Fout bij wijzigen speler: ' + error.message);
          }
        });
      }
    });
  }

  getActiefText(actief: boolean): string {
    return actief ? 'Ja' : 'Nee';
  }
}

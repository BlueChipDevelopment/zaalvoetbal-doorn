import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { WedstrijdenService } from '../../../services/wedstrijden.service';
import { WedstrijdData } from '../../../interfaces/IWedstrijd';
import { WedstrijdDialogComponent } from './wedstrijd-dialog/wedstrijd-dialog.component';

@Component({
  selector: 'app-admin-wedstrijden',
  templateUrl: './admin-wedstrijden.component.html',
  styleUrls: ['./admin-wedstrijden.component.scss']
})
export class AdminWedstrijdenComponent implements OnInit {
  displayedColumns: string[] = ['seizoen', 'datum', 'teamWit', 'teamRood', 'scoreWit', 'scoreRood', 'zlatan', 'actions'];
  dataSource = new MatTableDataSource<WedstrijdData>();
  loading = true;

  constructor(
    private wedstrijdenService: WedstrijdenService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadWedstrijden();
  }

  loadWedstrijden(): void {
    this.loading = true;
    this.wedstrijdenService.refreshCache().subscribe({
      next: (wedstrijden) => {
        // Sort by date descending (newest first)
        const sorted = wedstrijden.sort((a, b) => {
          if (!a.datum) return 1;
          if (!b.datum) return -1;
          return b.datum.getTime() - a.datum.getTime();
        });
        this.dataSource.data = sorted;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading wedstrijden:', error);
        this.loading = false;
      }
    });
  }

  editWedstrijd(wedstrijd: WedstrijdData): void {
    const dialogRef = this.dialog.open(WedstrijdDialogComponent, {
      width: '700px',
      data: { ...wedstrijd }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.wedstrijdenService.updateWedstrijd(result).subscribe({
          next: () => {
            this.loadWedstrijden();
          },
          error: (error) => {
            console.error('Error updating wedstrijd:', error);
            alert('Fout bij wijzigen wedstrijd: ' + error.message);
          }
        });
      }
    });
  }

  formatDate(datum: Date | null): string {
    if (!datum) return '-';
    const day = String(datum.getDate()).padStart(2, '0');
    const month = String(datum.getMonth() + 1).padStart(2, '0');
    const year = datum.getFullYear();
    return `${day}-${month}-${year}`;
  }

  formatScore(score: number | null): string {
    return score !== null ? String(score) : '-';
  }

  getTeamNames(teamString: string): string {
    // Return first 50 characters if too long
    return teamString.length > 50 ? teamString.substring(0, 50) + '...' : teamString;
  }
}

import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WedstrijdenService } from '../../services/wedstrijden.service';
import { WedstrijdData } from '../../interfaces/IWedstrijd';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatError } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { PlayerNamePipe } from '../../pipes/player-name.pipe';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

@Component({
  selector: 'app-wedstrijden',
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule, MatError, MatIconModule, PlayerNamePipe, EmptyStateComponent],
  templateUrl: './wedstrijden.component.html',
  styleUrl: './wedstrijden.component.scss'
})
export class WedstrijdenComponent implements OnInit {
  wedstrijden: WedstrijdData[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  private destroyRef = inject(DestroyRef);

  constructor(private wedstrijdenService: WedstrijdenService) {}

  ngOnInit(): void {
    this.wedstrijdenService.getGespeeldeWedstrijden()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
      next: (wedstrijden: WedstrijdData[]) => {
        // Sort by date, most recent first
        this.wedstrijden = wedstrijden.sort((a, b) => {
          // Datum is now a Date object, so compare directly
          if (!a.datum || !b.datum) return 0;
          return b.datum.getTime() - a.datum.getTime();
        });
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Fout bij het laden van wedstrijden.';
        this.isLoading = false;
      }
    });
  }

  trackByWedstrijd(_index: number, w: WedstrijdData): string {
    return w.datum ? w.datum.toISOString() : `${w.seizoen ?? ''}-${w.id ?? _index}`;
  }
}

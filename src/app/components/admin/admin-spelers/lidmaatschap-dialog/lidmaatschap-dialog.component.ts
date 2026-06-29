import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlayerSheetData } from '../../../../interfaces/IPlayerSheet';
import { PlayerService } from '../../../../services/player.service';
import { StrippenkaartService } from '../../../../services/strippenkaart.service';
import { GameStatisticsService } from '../../../../services/game.statistics.service';
import { StripTransaction } from '../../../../interfaces/IStrippenkaart';
import { SnackbarService } from '../../../../services/snackbar.service';

export interface LidmaatschapDialogData {
  player: PlayerSheetData;
}

@Component({
  selector: 'app-lidmaatschap-dialog',
  templateUrl: './lidmaatschap-dialog.component.html',
  styleUrls: ['./lidmaatschap-dialog.component.scss'],
})
export class LidmaatschapDialogComponent implements OnInit {
  player: PlayerSheetData;
  season: string | null = null;
  usesStrippenkaart = false;
  hasSubscription = false;
  balance = 0;
  ledger: StripTransaction[] = [];
  customAmount: number | null = null;
  loading = true;

  constructor(
    public dialogRef: MatDialogRef<LidmaatschapDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LidmaatschapDialogData,
    private playerService: PlayerService,
    private strippenkaart: StrippenkaartService,
    private stats: GameStatisticsService,
    private snackbar: SnackbarService,
  ) {
    this.player = data.player;
    this.usesStrippenkaart = !!data.player.usesStrippenkaart;
  }

  ngOnInit(): void {
    this.stats.getCurrentSeason().subscribe(season => {
      this.season = season;
      this.reload();
    });
  }

  private reload(): void {
    const id = this.player.id!;
    this.loading = true;
    this.strippenkaart.refresh();
    this.strippenkaart.getBalance(id).subscribe(b => (this.balance = b));
    this.strippenkaart.getLedger(id).subscribe(l => {
      this.ledger = [...l].reverse();
      this.loading = false;
    });
    if (this.season) {
      this.strippenkaart.isSubscribed(id, this.season).subscribe(s => (this.hasSubscription = s));
    }
  }

  toggleStrippenkaart(): void {
    const updated: PlayerSheetData = { ...this.player, usesStrippenkaart: !this.usesStrippenkaart };
    this.playerService.updatePlayer(this.player.name, updated).subscribe({
      next: () => {
        this.usesStrippenkaart = !this.usesStrippenkaart;
        this.player = updated;
      },
      error: () => this.snackbar.error('Kon strippenkaart-status niet opslaan'),
    });
  }

  toggleSubscription(): void {
    if (!this.season) return;
    const target = !this.hasSubscription;
    this.strippenkaart.setSubscription(this.player.id!, this.season, target).subscribe({
      next: () => (this.hasSubscription = target),
      error: () => this.snackbar.error('Kon abonnement niet opslaan'),
    });
  }

  addStrips(amount: number): void {
    if (!amount) return;
    this.strippenkaart.addStrips(this.player.id!, amount).subscribe({
      next: () => this.reload(),
      error: () => this.snackbar.error('Kon strippen niet toevoegen'),
    });
  }

  correct(amount: number | null): void {
    if (!amount) return;
    this.strippenkaart.correct(this.player.id!, amount).subscribe({
      next: () => { this.customAmount = null; this.reload(); },
      error: () => this.snackbar.error('Kon correctie niet opslaan'),
    });
  }

  close(): void {
    this.dialogRef.close(true);
  }
}

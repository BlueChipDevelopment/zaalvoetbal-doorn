import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerSheetData } from '../../../../interfaces/IPlayerSheet';
import { StripTransaction } from '../../../../interfaces/IStrippenkaart';
import { environment } from '../../../../../environments/environment';
import { PlayerService } from '../../../../services/player.service';
import { StrippenkaartService } from '../../../../services/strippenkaart.service';
import { GameStatisticsService } from '../../../../services/game.statistics.service';
import { SnackbarService } from '../../../../services/snackbar.service';

export interface SpelerDialogData {
  player: PlayerSheetData | null;
  mode: 'add' | 'edit';
  originalName?: string;
}

@Component({
  selector: 'app-speler-dialog',
  templateUrl: './speler-dialog.component.html',
  styleUrls: ['./speler-dialog.component.scss']
})
export class SpelerDialogComponent implements OnInit {
  spelerForm: FormGroup;
  isEditMode: boolean;
  /** True als deze speler een vaste (env-whitelist) beheerder is: rol niet wijzigbaar. */
  isVasteBeheerder = false;
  positions = ['Keeper', 'Speler'];

  // Lidmaatschap-tab state (alleen in edit-modus gebruikt)
  player: PlayerSheetData | null;
  season: string | null = null;
  usesStrippenkaart = false;
  hasSubscription = false;
  balance = 0;
  newTotal: number | null = null;
  ledger: StripTransaction[] = [];
  ledgerLoading = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SpelerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SpelerDialogData,
    private playerService: PlayerService,
    private strippenkaart: StrippenkaartService,
    private stats: GameStatisticsService,
    private snackbar: SnackbarService,
  ) {
    this.isEditMode = data.mode === 'edit';
    this.player = data.player;
    this.usesStrippenkaart = !!data.player?.usesStrippenkaart;

    const envAdmins = environment.adminEmails.map((e: string) => e.toLowerCase());
    const playerEmail = data.player?.email?.toLowerCase();
    this.isVasteBeheerder = !!playerEmail && envAdmins.includes(playerEmail);

    this.spelerForm = this.fb.group({
      name: [data.player?.name || '', Validators.required],
      position: [data.player?.position || 'Speler', Validators.required],
      actief: [data.player?.actief !== undefined ? data.player.actief : true],
      email: [data.player?.email || '', Validators.email],
      isAdmin: [{ value: data.player?.isAdmin || false, disabled: this.isVasteBeheerder }]
    });

    if (this.isEditMode) {
      this.spelerForm.get('name')?.disable();
    }
  }

  ngOnInit(): void {
    if (this.isEditMode && this.player?.id != null) {
      this.stats.getCurrentSeason().subscribe(season => {
        this.season = season;
        this.reloadMembership();
      });
    }
  }

  private reloadMembership(): void {
    const id = this.player!.id!;
    this.ledgerLoading = true;
    this.strippenkaart.refresh();
    this.strippenkaart.getBalance(id).subscribe(b => {
      this.balance = b;
      this.newTotal = b;
    });
    this.strippenkaart.getLedger(id).subscribe(l => {
      this.ledger = [...l].reverse();
      this.ledgerLoading = false;
    });
    if (this.season) {
      this.strippenkaart.isSubscribed(id, this.season).subscribe(s => (this.hasSubscription = s));
    }
  }

  toggleStrippenkaart(): void {
    const updated: PlayerSheetData = { ...(this.player as PlayerSheetData), usesStrippenkaart: !this.usesStrippenkaart };
    this.playerService.updatePlayer(this.player!.name, updated).subscribe({
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
    this.strippenkaart.setSubscription(this.player!.id!, this.season, target).subscribe({
      next: () => (this.hasSubscription = target),
      error: () => this.snackbar.error('Kon abonnement niet opslaan'),
    });
  }

  addStrips(amount: number): void {
    if (!amount) return;
    this.strippenkaart.addStrips(this.player!.id!, amount).subscribe({
      next: () => this.reloadMembership(),
      error: () => this.snackbar.error('Kon strippen niet toevoegen'),
    });
  }

  /** Zet het saldo op newTotal door het verschil als correctie te boeken. */
  applyTotal(): void {
    if (this.newTotal === null || this.newTotal === undefined) return;
    const delta = this.newTotal - this.balance;
    if (delta === 0) return;
    this.strippenkaart.correct(this.player!.id!, delta).subscribe({
      next: () => this.reloadMembership(),
      error: () => this.snackbar.error('Kon saldo niet aanpassen'),
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.spelerForm.valid) {
      const formValue = this.spelerForm.getRawValue(); // includes disabled fields

      const player: PlayerSheetData = {
        name: formValue.name,
        position: formValue.position,
        actief: formValue.actief,
        email: formValue.email?.trim().toLowerCase() || undefined,
        isAdmin: formValue.isAdmin,
        usesStrippenkaart: this.usesStrippenkaart,
      };

      if (this.isEditMode) {
        this.dialogRef.close({
          player,
          originalName: this.data.originalName || this.data.player?.name
        });
      } else {
        this.dialogRef.close(player);
      }
    }
  }

  getDialogTitle(): string {
    return this.isEditMode ? 'Speler Wijzigen' : 'Speler Toevoegen';
  }
}

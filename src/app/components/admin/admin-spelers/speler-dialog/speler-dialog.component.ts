import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerSheetData } from '../../../../interfaces/IPlayerSheet';
import { environment } from '../../../../../environments/environment';

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

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SpelerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SpelerDialogData
  ) {
    this.isEditMode = data.mode === 'edit';

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

  ngOnInit(): void {}

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
        isAdmin: formValue.isAdmin
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

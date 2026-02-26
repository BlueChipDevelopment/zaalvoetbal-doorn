import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerSheetData } from '../../../../interfaces/IPlayerSheet';

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
  positions = ['Keeper', 'Speler'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SpelerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SpelerDialogData
  ) {
    this.isEditMode = data.mode === 'edit';
    this.spelerForm = this.fb.group({
      name: [data.player?.name || '', Validators.required],
      position: [data.player?.position || 'Speler', Validators.required],
      actief: [data.player?.actief !== undefined ? data.player.actief : true]
    });

    // Disable name field in edit mode to prevent changing the identifier
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
      const formValue = this.spelerForm.getRawValue(); // getRawValue includes disabled fields
      
      const player: PlayerSheetData = {
        name: formValue.name,
        position: formValue.position,
        actief: formValue.actief
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

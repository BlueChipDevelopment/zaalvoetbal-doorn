import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WedstrijdData } from '../../../../interfaces/IWedstrijd';

@Component({
  selector: 'app-wedstrijd-dialog',
  templateUrl: './wedstrijd-dialog.component.html',
  styleUrls: ['./wedstrijd-dialog.component.scss']
})
export class WedstrijdDialogComponent implements OnInit {
  wedstrijdForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<WedstrijdDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WedstrijdData | null
  ) {
    this.wedstrijdForm = this.fb.group({
      seizoen: [data?.seizoen || '', Validators.required],
      datum: [data?.datum || null, Validators.required],
      teamWit: [data?.teamWit || ''],
      teamRood: [data?.teamRood || ''],
      teamGeneratie: [data?.teamGeneratie || ''],
      scoreWit: [data?.scoreWit, [Validators.min(0)]],
      scoreRood: [data?.scoreRood, [Validators.min(0)]],
      zlatan: [data?.zlatan || ''],
      ventiel: [data?.ventiel || '']
    });
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.wedstrijdForm.valid) {
      const formValue = this.wedstrijdForm.value;
      
      const updatedWedstrijd: WedstrijdData = {
        ...this.data,
        seizoen: formValue.seizoen,
        datum: formValue.datum,
        teamWit: formValue.teamWit || '',
        teamRood: formValue.teamRood || '',
        teamGeneratie: formValue.teamGeneratie || '',
        scoreWit: formValue.scoreWit !== '' && formValue.scoreWit !== null ? Number(formValue.scoreWit) : null,
        scoreRood: formValue.scoreRood !== '' && formValue.scoreRood !== null ? Number(formValue.scoreRood) : null,
        zlatan: formValue.zlatan || '',
        ventiel: formValue.ventiel || ''
      };

      this.dialogRef.close(updatedWedstrijd);
    }
  }

  getDialogTitle(): string {
    return this.data ? 'Wedstrijd Wijzigen' : 'Wedstrijd Toevoegen';
  }
}

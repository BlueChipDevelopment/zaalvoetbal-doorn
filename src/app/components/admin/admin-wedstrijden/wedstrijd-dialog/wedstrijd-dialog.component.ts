import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { WedstrijdData } from '../../../../interfaces/IWedstrijd';
import { PlayerService } from '../../../../services/player.service';
import { PlayerSheetData } from '../../../../interfaces/IPlayerSheet';

@Component({
  selector: 'app-wedstrijd-dialog',
  templateUrl: './wedstrijd-dialog.component.html',
  styleUrls: ['./wedstrijd-dialog.component.scss']
})
export class WedstrijdDialogComponent implements OnInit {
  wedstrijdForm: FormGroup;
  teamGeneratieOpties: string[] = ['Automatisch', 'Handmatig'];
  allPlayers$: Observable<PlayerSheetData[]>;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService,
    public dialogRef: MatDialogRef<WedstrijdDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WedstrijdData | null
  ) {
    this.allPlayers$ = this.playerService.getPlayers();
    this.wedstrijdForm = this.fb.group({
      seizoen: [data?.seizoen || this.getCurrentSeizoen(), Validators.required],
      datum: [data?.datum || null, Validators.required],
      teamWit: [data?.teamWit || []],
      teamRood: [data?.teamRood || []],
      teamGeneratie: [data?.teamGeneratie || ''],
      scoreWit: [data?.scoreWit, [Validators.min(0)]],
      scoreRood: [data?.scoreRood, [Validators.min(0)]],
      zlatanPlayerId: [data?.zlatanPlayerId ?? null],
      ventielPlayerId: [data?.ventielPlayerId ?? null]
    });
  }

  ngOnInit(): void {}

  getCurrentSeizoen(): string {
    const now = new Date();
    const month = now.getMonth(); // 0-11
    const year = now.getFullYear();

    // Seizoen loopt van augustus (7) tot juli (6)
    if (month < 7) {
      return `${year - 1}-${year}`;
    } else {
      return `${year}-${year + 1}`;
    }
  }

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
        teamWit: formValue.teamWit || [],
        teamRood: formValue.teamRood || [],
        teamGeneratie: formValue.teamGeneratie || '',
        scoreWit: formValue.scoreWit !== '' && formValue.scoreWit !== null ? Number(formValue.scoreWit) : null,
        scoreRood: formValue.scoreRood !== '' && formValue.scoreRood !== null ? Number(formValue.scoreRood) : null,
        zlatanPlayerId: formValue.zlatanPlayerId ?? null,
        ventielPlayerId: formValue.ventielPlayerId ?? null
      };

      this.dialogRef.close(updatedWedstrijd);
    }
  }

  getDialogTitle(): string {
    return this.data ? 'Wedstrijd Wijzigen' : 'Wedstrijd Toevoegen';
  }
}

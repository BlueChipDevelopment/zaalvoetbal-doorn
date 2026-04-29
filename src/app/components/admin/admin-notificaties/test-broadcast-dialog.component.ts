import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-test-broadcast-dialog',
  templateUrl: './test-broadcast-dialog.component.html',
})
export class TestBroadcastDialogComponent {
  readonly form: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<TestBroadcastDialogComponent>) {
    this.form = this.fb.group({
      title: ['Test broadcast', Validators.required],
      body: ['Dit is een test van Zaalvoetbal Doorn.', Validators.required],
      confirm: [false, Validators.requiredTrue],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  send(): void {
    if (this.form.invalid) return;
    const { title, body } = this.form.value;
    this.dialogRef.close({ title, body });
  }
}

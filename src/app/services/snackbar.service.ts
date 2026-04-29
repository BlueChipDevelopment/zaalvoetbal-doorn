import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

const BASE_CONFIG: MatSnackBarConfig = {
  horizontalPosition: 'center',
  verticalPosition: 'bottom',
};

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  private snackBar = inject(MatSnackBar);

  success(message: string, action = 'OK'): void {
    this.snackBar.open(message, action, {
      ...BASE_CONFIG,
      duration: 3000,
      panelClass: ['futsal-notification', 'futsal-notification-success'],
    });
  }

  error(message: string, action = 'Sluiten'): void {
    this.snackBar.open(message, action, {
      ...BASE_CONFIG,
      duration: 5000,
      panelClass: ['futsal-notification', 'futsal-notification-error'],
    });
  }

  info(message: string, action = 'OK'): void {
    this.snackBar.open(message, action, {
      ...BASE_CONFIG,
      duration: 4000,
      panelClass: ['futsal-notification', 'futsal-notification-info'],
    });
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbar: SnackbarService,
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      take(1),
      switchMap((isAuthenticated) => {
        // First check: is user logged in at all?
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
          return of(false);
        }

        // Second check: is user on admin whitelist?
        return this.authService.isAuthorizedAdmin$.pipe(
          take(1),
          switchMap((isAdmin) => {
            if (!isAdmin) {
              this.snackbar.error('Je account heeft geen beheer rechten.');
              this.router.navigate(['/']);
              return of(false);
            }
            return of(true);
          })
        );
      })
    );
  }
}

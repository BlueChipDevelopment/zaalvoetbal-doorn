import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      take(1),
      switchMap((isAuthenticated) => {
        // First check: is user logged in at all?
        if (!isAuthenticated) {
          console.log('🔒 Not authenticated - redirecting to login');
          this.router.navigate(['/login']);
          return of(false);
        }

        // Second check: is user on admin whitelist?
        return this.authService.isAuthorizedAdmin$.pipe(
          take(1),
          switchMap((isAdmin) => {
            if (!isAdmin) {
              console.warn('⚠️ User authenticated but not authorized as admin');
              alert('Je account heeft geen beheer rechten.');
              this.router.navigate(['/']);
              return of(false);
            }

            console.log('✅ Authorized admin access granted');
            return of(true);
          })
        );
      })
    );
  }
}

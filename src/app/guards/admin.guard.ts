import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Skip authentication in development mode if configured
    if (environment.skipAdminAuth) {
      console.log('🔓 Admin authentication skipped (development mode)');
      return true;
    }

    const code = prompt('Voer de beheerderscode in:');
    
    if (code === environment.adminCode) {
      return true;
    } else {
      alert('Onjuiste code. Toegang geweigerd.');
      this.router.navigate(['/']);
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
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

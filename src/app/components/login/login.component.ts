import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async signInWithGoogle(): Promise<void> {
    this.loading = true;
    this.errorMessage = '';

    try {
      const result = await this.authService.signInWithGoogle();
      const user = result.user;
      
      // Check if user email is on admin whitelist
      if (!user || !user.email) {
        await this.authService.signOut();
        this.loading = false;
        this.errorMessage = 'Geen email adres gevonden in je Google account';
        return;
      }

      if (!environment.adminEmails.includes(user.email)) {
        await this.authService.signOut();
        this.loading = false;
        this.errorMessage = `Toegang geweigerd. Je email (${user.email}) heeft geen beheer rechten.`;
        return;
      }

      // Success - user is on whitelist
      this.router.navigate(['/beheer']);
    } catch (error: any) {
      console.error('❌ Google Sign-In error:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      this.loading = false;
      if (error.code === 'auth/popup-closed-by-user') {
        this.errorMessage = 'Inloggen geannuleerd';
      } else if (error.code === 'auth/popup-blocked') {
        this.errorMessage = 'Pop-up geblokkeerd. Sta pop-ups toe voor deze site.';
      } else if (error.code === 'auth/unauthorized-domain') {
        this.errorMessage = 'Deze domein is niet toegestaan. Neem contact op met de beheerder.';
      } else if (error.code === 'auth/operation-not-allowed') {
        this.errorMessage = 'Google Sign-In is niet geactiveerd in Firebase.';
      } else {
        this.errorMessage = `Er is een fout opgetreden: ${error.message || 'Probeer het opnieuw.'}`;
      }
    }
  }
}

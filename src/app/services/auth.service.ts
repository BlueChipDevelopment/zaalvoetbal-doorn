import { Injectable, inject } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, authState, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  
  isAuthenticated$: Observable<boolean>;
  isAuthorizedAdmin$: Observable<boolean>;

  constructor() {
    // Get auth state as observable
    const authState$ = authState(this.auth);

    this.isAuthenticated$ = authState$.pipe(
      map(user => !!user)
    );

    // Check if user is both authenticated AND on the admin whitelist
    this.isAuthorizedAdmin$ = authState$.pipe(
      map(user => {
        if (!user || !user.email) {
          return false;
        }
        return environment.adminEmails.includes(user.email);
      })
    );
  }

  async signInWithGoogle(): Promise<any> {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      console.log('✅ Google Sign-In successful:', result);
      return result;
    } catch (error) {
      console.error('❌ Google Sign-In error in service:', error);
      throw error;
    }
  }

  async signOut(): Promise<void> {
    return signOut(this.auth);
  }

  getCurrentUser(): Observable<User | null> {
    return authState(this.auth);
  }

  // Check if current user email is on admin whitelist
  async isAdminEmail(): Promise<boolean> {
    const user = this.auth.currentUser;
    if (!user || !user.email) {
      return false;
    }
    return environment.adminEmails.includes(user.email);
  }
}

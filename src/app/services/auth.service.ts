import { Injectable, inject } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, authState, User } from '@angular/fire/auth';
import { Observable, of, firstValueFrom, defer } from 'rxjs';
import { map, switchMap, catchError, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { PlayerDataSource } from './data-sources/player-data-source';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private players = inject(PlayerDataSource);

  /** Vaste break-glass admins (lowercase). Bevat altijd minimaal Chris. */
  private readonly envAdminEmails = environment.adminEmails.map(e => e.toLowerCase());

  isAuthenticated$: Observable<boolean>;
  isAuthorizedAdmin$: Observable<boolean>;

  constructor() {
    // defer ensures authState() is only called on subscription, not during construction.
    // This keeps tests that inject AuthService without a real Firebase app from failing.
    this.isAuthenticated$ = defer(() => authState(this.auth)).pipe(
      map(user => !!user)
    );

    this.isAuthorizedAdmin$ = defer(() => authState(this.auth)).pipe(
      switchMap(user => this.resolveIsAdmin(user?.email)),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  /**
   * Bepaalt of een e-mail admin is: env-fallback OF DB-vlag. Puur en los van
   * Firebase, zodat het zelfstandig te testen is.
   */
  resolveIsAdmin(email: string | null | undefined): Observable<boolean> {
    const normalized = email?.trim().toLowerCase();
    if (!normalized) {
      return of(false);
    }
    if (this.envAdminEmails.includes(normalized)) {
      return of(true);
    }
    return this.players.isAdminEmail(normalized).pipe(
      catchError(() => of(false))
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

  /** True als de huidige ingelogde gebruiker admin is (env OF DB). */
  async isAdminEmail(): Promise<boolean> {
    const user = this.auth.currentUser;
    return firstValueFrom(this.resolveIsAdmin(user?.email));
  }
}

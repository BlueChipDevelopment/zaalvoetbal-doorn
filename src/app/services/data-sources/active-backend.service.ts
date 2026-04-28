import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export type BackendKind = 'sheets' | 'supabase';

const STORAGE_KEY = 'zd-backend';
const VALID: ReadonlyArray<BackendKind> = ['sheets', 'supabase'];

/**
 * Bepaalt welke data-source-implementatie Angular DI uitlevert.
 *
 * Resolutie-volgorde bij instantiatie:
 *   1. localStorage.getItem('zd-backend') — als geldige BackendKind, wint.
 *   2. environment.dataSource.
 *   3. Fallback: 'sheets'.
 *
 * Niet reactief — switch via localStorage + F5, of environment + rebuild.
 */
@Injectable({ providedIn: 'root' })
export class ActiveBackendService {
  readonly current: BackendKind = this.resolve();

  private resolve(): BackendKind {
    const override = this.readLocalStorage();
    if (override) return override;
    const fromEnv = (environment as any).dataSource;
    if (this.isValid(fromEnv)) return fromEnv;
    return 'sheets';
  }

  private readLocalStorage(): BackendKind | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return this.isValid(raw) ? raw : null;
    } catch {
      // localStorage kan niet beschikbaar zijn (private browsing, SSR, etc.)
      return null;
    }
  }

  private isValid(value: unknown): value is BackendKind {
    return typeof value === 'string' && (VALID as ReadonlyArray<string>).includes(value);
  }
}

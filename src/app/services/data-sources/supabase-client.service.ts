import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { Database } from '../../types/database.types';

/**
 * Gedeelde, lazy-geinstantieerde Supabase-client. Hangt eraan: anon-key uit
 * environment, type-safe queries via de gegenereerde `Database`-types.
 */
@Injectable({ providedIn: 'root' })
export class SupabaseClientService {
  readonly client: SupabaseClient<Database> = createClient<Database>(
    environment.supabaseUrl,
    environment.supabaseAnonKey,
  );
}

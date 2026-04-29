import { defineSecret } from "firebase-functions/params";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

/**
 * Firebase Secret voor de Supabase service-role-key.
 * Set via: firebase functions:secrets:set SUPABASE_SERVICE_ROLE_KEY
 */
export const SUPABASE_SERVICE_ROLE_KEY = defineSecret("SUPABASE_SERVICE_ROLE_KEY");

/**
 * Supabase URL — niet-gevoelig, hardcoded zodat we 'm niet via secret hoeven te managen.
 * Match-aan op de live anon-key in environment.prod.ts.
 */
const SUPABASE_URL = "https://tfbwkmqnzwbsvgscixsg.supabase.co";

/**
 * Maakt een Supabase-client met service-role-permissies (bypassed RLS).
 * Roep aan binnen een Function-handler; de secret wordt at runtime geïnjecteerd
 * mits de Function `secrets: [SUPABASE_SERVICE_ROLE_KEY]` op zijn options heeft.
 */
export function createSupabaseClient(): SupabaseClient<Database> {
  const key = SUPABASE_SERVICE_ROLE_KEY.value();
  if (!key) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not configured. Run 'firebase functions:secrets:set SUPABASE_SERVICE_ROLE_KEY'.");
  }
  return createClient<Database>(SUPABASE_URL, key);
}

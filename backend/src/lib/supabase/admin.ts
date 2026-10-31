import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

type SupabaseAdminClient = SupabaseClient<Database>;

declare global {
  // eslint-disable-next-line no-var
  var __skillBridgeSupabaseAdmin: SupabaseAdminClient | undefined;
}

function getSupabaseUrl(): string {
  const value = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!value || value.trim().length === 0) {
    throw new Error(
      "Supabase Admin Client configuration error: " +
        "SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL must be set.",
    );
  }

  return value;
}

function getServiceRoleKey(): string {
  const value = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!value || value.trim().length === 0) {
    throw new Error(
      "Supabase Admin Client configuration error: " +
        "SUPABASE_SERVICE_ROLE_KEY must be set.",
    );
  }

  return value;
}

export function getSupabaseAdmin(): SupabaseAdminClient {
  if (globalThis.__skillBridgeSupabaseAdmin) {
    return globalThis.__skillBridgeSupabaseAdmin;
  }

  const client = createClient<Database>(getSupabaseUrl(), getServiceRoleKey(), {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });

  globalThis.__skillBridgeSupabaseAdmin = client;

  return client;
}

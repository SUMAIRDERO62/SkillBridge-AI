"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

type SupabaseBrowserClient = SupabaseClient<Database>;

declare global {
  // eslint-disable-next-line no-var
  var __skillBridgeSupabaseBrowserClient: SupabaseBrowserClient | undefined;
}

function getRequiredEnvironmentVariable(name: string): string {
  const value = process.env[name];

  if (!value || value.trim().length === 0) {
    throw new Error(
      `Supabase browser client configuration error: ${name} must be set.`,
    );
  }

  return value;
}

export function getSupabaseClient(): SupabaseBrowserClient {
  if (globalThis.__skillBridgeSupabaseBrowserClient) {
    return globalThis.__skillBridgeSupabaseBrowserClient;
  }

  const client = createClient<Database>(
    getRequiredEnvironmentVariable("NEXT_PUBLIC_SUPABASE_URL"),
    getRequiredEnvironmentVariable("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
    {
      auth: {
        autoRefreshToken: true,
        detectSessionInUrl: true,
        persistSession: true,
      },
    },
  );

  globalThis.__skillBridgeSupabaseBrowserClient = client;

  return client;
}

import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export async function GET(): Promise<NextResponse> {
  try {
    const { error } = await getSupabaseAdmin()
      .from("careers")
      .select("id")
      .limit(1);

    if (error) {
      console.error("GET /api/health database check failed", error);
      return NextResponse.json({ success: false }, { status: 503 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("GET /api/health failed", error);
    return NextResponse.json({ success: false }, { status: 503 });
  }
}
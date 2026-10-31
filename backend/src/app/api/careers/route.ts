import { NextResponse } from "next/server";
import { careerService } from "@/services/career/career.service";

export async function GET() {
  try {
    return NextResponse.json({ data: await careerService.list() });
  } catch (error) {
    console.error("GET /api/careers failed", error);
    return NextResponse.json({ error: "Unable to load careers" }, { status: 500 });
  }
}

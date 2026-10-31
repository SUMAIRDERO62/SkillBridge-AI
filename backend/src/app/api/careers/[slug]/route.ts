import { NextResponse } from "next/server";
import { careerService } from "@/services/career/career.service";

export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await context.params;
    const career = await careerService.getBySlug(slug);
    return career ? NextResponse.json({ data: career }) : NextResponse.json({ error: "Career not found" }, { status: 404 });
  } catch (error) {
    console.error("GET /api/careers/[slug] failed", error);
    return NextResponse.json({ error: "Unable to load career" }, { status: 500 });
  }
}

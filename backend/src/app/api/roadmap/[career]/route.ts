import { NextResponse } from "next/server";
import { roadmapService } from "@/services/roadmap/roadmap.service";

export async function GET(_request: Request, context: { params: Promise<{ career: string }> }) {
  try {
    const { career } = await context.params;
    const roadmap = await roadmapService.getRoadmapByCareer(career);

    if (!roadmap) {
      return NextResponse.json(
        { error: "Roadmap not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(roadmap);
  } catch (error) {
    console.error("GET /api/roadmap/[career] failed", error);
    return NextResponse.json(
      { error: "Unable to load roadmap" },
      { status: 500 },
    );
  }
}

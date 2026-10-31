import { NextResponse } from "next/server";
import { progressService } from "@/services/progress/progress.service";
import { ValidationError, requiredString } from "@/validations/api";
import { validateProgressInput } from "@/validations/progress";

export async function GET(request: Request) {
  try {
    const query = new URL(request.url).searchParams;
    const userId = requiredString(query.get("userId"), "userId");
    const career = requiredString(query.get("career"), "career");
    const progress = await progressService.get(userId, career);
    return progress ? NextResponse.json({ data: progress }) : NextResponse.json({ error: "Career not found" }, { status: 404 });
  } catch (error) {
    if (error instanceof ValidationError) return NextResponse.json({ error: error.message }, { status: 400 });
    console.error("GET /api/progress failed", error);
    return NextResponse.json({ error: "Unable to load progress" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const progress = await progressService.update(validateProgressInput(await request.json()));
    return NextResponse.json({ data: progress }, { status: 200 });
  } catch (error) {
    if (error instanceof ValidationError || error instanceof SyntaxError) {
      return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid request" }, { status: 400 });
    }
    console.error("POST /api/progress failed", error);
    return NextResponse.json({ error: "Unable to save progress" }, { status: 500 });
  }
}

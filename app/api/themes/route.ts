import { getAllThemes } from "@/lib/theme";
import { NextResponse } from "next/server";

export async function GET() {
  const themes = await getAllThemes();

  return NextResponse.json(themes);
}

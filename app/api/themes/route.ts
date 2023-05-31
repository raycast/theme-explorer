import { NextResponse } from "next/server";

import { getAllThemes } from "@/lib/getAllThemes";

export async function GET() {
  const themes = await getAllThemes();

  return NextResponse.json(themes);
}

import { getThemesByAuthor } from "@/lib/theme";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { author: string } }
) {
  const themes = await getThemesByAuthor(params.author);
  return NextResponse.json(themes);
}

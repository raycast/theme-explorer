import { NextResponse } from "next/server";
import { getThemesByAuthor } from "@/lib/getThemesByAuthor";

export async function GET(
  request: Request,
  { params }: { params: { author: string } }
) {
  const themes = getThemesByAuthor(params.author);
  return NextResponse.json(themes);
}
import { NextResponse } from "next/server";
import { readFile } from "fs";
import { basename, join } from "path";
import { glob } from "glob";
import { promisify } from "util";

const themesDir = join(process.cwd(), "themes");

const readFileAsync = promisify(readFile);

export async function GET(
  request: Request,
  { params }: { params: { author: string } }
) {
  const { author } = params;
  const allThemePaths = await glob(`${themesDir}/${author}/*.json`);

  const themes = await Promise.all(
    allThemePaths.map(async (filePath) => {
      const fileName = basename(filePath);
      const data = await readFileAsync(filePath);
      const jsonData = JSON.parse(data.toString());
      return { ...jsonData, slug: fileName.replace(".json", "") };
    })
  );

  return NextResponse.json(themes);
}

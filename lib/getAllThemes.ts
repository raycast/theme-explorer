import { readFile } from "fs";
import { basename, join } from "path";
import { glob } from "glob";
import { promisify } from "util";
import { Theme } from "@/components/raycast";

const themesDir = join(process.cwd(), "themes");

const readFileAsync = promisify(readFile);

export async function getAllThemes(): Promise<Theme[]> {
  const allThemePaths = await glob(`${themesDir}/**/*.json`);

  const themes = await Promise.all(
    allThemePaths.map(async (filePath) => {
      const fileName = basename(filePath);
      const data = await readFileAsync(filePath);
      const jsonData = JSON.parse(data.toString());
      return { ...jsonData, slug: fileName.replace(".json", "") };
    })
  );

  return themes;
}

import { readFile } from "fs";
import { basename, join } from "path";
import { glob } from "glob";
import { promisify } from "util";

export type Theme = {
  author: string;
  version: string;
  name: string;
  slug: string;
  appearance: "light" | "dark";
  colors: {
    backgroundPrimary: string;
    backgroundSecondary: string;
    text: string;
    selection: string;
    loader: string;
    red: string;
    orange: string;
    yellow: string;
    green: string;
    blue: string;
    purple: string;
    pink: string;
  };
};

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

export async function getThemesByAuthor(author: string): Promise<Theme[]> {
  const allThemePaths = await glob(`${themesDir}/${author}/*.json`);

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
import { readFile } from "fs";
import { basename, join } from "path";
import { glob } from "glob";
import { promisify } from "util";

export const colorOrder = [
  "background",
  "backgroundSecondary",
  "text",
  "selection",
  "loader",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "magenta",
] as const;

export type Theme = {
  author: string;
  authorUsername: string;
  version: string;
  name: string;
  slug?: string;
  appearance: "light" | "dark";
  colors: {
    [K in (typeof colorOrder)[number]]?: string;
  };
};

const themesDir = join(process.cwd(), "themes");

const readFileAsync = promisify(readFile);

export async function getAllThemes(): Promise<Theme[]> {
  const allThemePaths = await glob(`${themesDir}/**/*.json`);
  const sortedThemePaths = allThemePaths.sort((a, b) => {
    const aFileName = basename(a);
    const bFileName = basename(b);
    return aFileName.localeCompare(bFileName);
  });

  const themes = await Promise.all(
    sortedThemePaths.map(async (filePath) => {
      const fileName = basename(filePath);
      const data = await readFileAsync(filePath);
      const themeData = JSON.parse(data.toString());

      const { colors: colorsArray, ...theme } = themeData;

      const parentDirName = basename(filePath.replace(fileName, ""));
      const slug = `${parentDirName}/${fileName.replace(
        ".json",
        ""
      )}`.toLowerCase();

      const colors = colorOrder.reduce((acc: any, color) => {
        acc[color] = colorsArray[colorOrder.indexOf(color)];
        return acc;
      }, {});

      return { ...theme, colors, slug };
    })
  );

  return themes;
}

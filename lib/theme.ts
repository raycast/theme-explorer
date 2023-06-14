import { readFile } from "fs";
import { basename, join } from "path";
import { glob } from "glob";
import { promisify } from "util";

const colorOrder = [
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

      const parentDirName = basename(filePath.replace(fileName, ""));
      const slug = `${parentDirName}/${fileName.replace(
        ".json",
        ""
      )}`.toLowerCase();

      return { ...themeData, slug };
    })
  );

  return themes;
}

// This function checks whether the query params generated from Raycast's Theme Studio
// can be converted into a Theme object that is used in this App
function canConvertParamsToTheme(params: any): boolean {
  const { appearance, name, version, colors } = params;
  return appearance && name && version && colors;
}

// This function converts the query params generated from Raycast's Theme Studio
// into a Theme object that is used in this App
export function makeThemeObjectFromParams(params: any): Theme | undefined {
  if (canConvertParamsToTheme(params)) {
    const {
      appearance,
      name,
      author,
      authorUsername,
      version,
      colors: colorString,
    } = params;
    const colorArray = colorString.split(",");
    const colorObject = colorOrder.reduce((acc: any, color) => {
      acc[color] = colorArray[colorOrder.indexOf(color)];
      return acc;
    }, {});

    return {
      appearance,
      name,
      version,
      author,
      authorUsername,
      colors: colorObject,
    };
  } else {
    return undefined;
  }
}

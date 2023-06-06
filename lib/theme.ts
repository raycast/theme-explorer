import { readFile } from "fs";
import { basename, join } from "path";
import { glob } from "glob";
import { promisify } from "util";
import { cache } from "react";

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

export const getAllThemes = cache(async () => {
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
});

// export async function getAllThemes(): Promise<Theme[]> {
//   const allThemePaths = await glob(`${themesDir}/**/*.json`);
//   const sortedThemePaths = allThemePaths.sort((a, b) => {
//     const aFileName = basename(a);
//     const bFileName = basename(b);
//     return aFileName.localeCompare(bFileName);
//   });

//   const themes = await Promise.all(
//     sortedThemePaths.map(async (filePath) => {
//       const fileName = basename(filePath);
//       const data = await readFileAsync(filePath);
//       const themeData = JSON.parse(data.toString());
//       const parentDirName = basename(filePath.replace(fileName, ""));
//       const slug = `${parentDirName}/${fileName.replace(
//         ".json",
//         ""
//       )}`.toLowerCase();
//       return { ...themeData, slug };
//     })
//   );

//   return themes;
// }

export async function getThemesByAuthor(author: string): Promise<Theme[]> {
  const allThemePaths = await glob(`${themesDir}/${author}/*.json`);

  const themes = await Promise.all(
    allThemePaths.map(async (filePath) => {
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

export async function getThemeBySlug(slug: string): Promise<Theme> {
  const filePath = join(themesDir, `${slug}.json`);
  const fileName = basename(filePath);
  const data = await readFileAsync(filePath);
  const themeData = JSON.parse(data.toString());
  const parentDirName = basename(filePath.replace(fileName, ""));
  const themeSlug = `${parentDirName}/${fileName.replace(
    ".json",
    ""
  )}`.toLowerCase();
  return { ...themeData, slug: themeSlug };
}

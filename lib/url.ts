import { Theme } from "@/lib/theme";

export const BASE_URL = {
  development: "http://localhost:3000",
  preview: `https://theme-explorer-git-v1-raycastapp.vercel.app`,
  production: "https://themes.ray.so",
}[process.env.NEXT_PUBLIC_VERCEL_ENV || "development"];

export type BuildTypes = "prod" | "internal" | "debug";

const PROTOCOL: Record<BuildTypes, string> = {
  prod: "raycast",
  internal: "raycastinternal",
  debug: "raycastdebug",
};

export function makeRaycastImportUrl(theme: Theme, build: BuildTypes = "prod") {
  const { slug, colors, ...restTheme } = theme;

  const queryParams = new URLSearchParams();

  Object.entries(restTheme).forEach(([key, value]) =>
    queryParams.set(key, value)
  );
  const colorString = String(Object.values(colors).join("|"));
  queryParams.set("colors", colorString);

  const formattedQueries = queryParams.toString().replace(/%7C/g, ",");

  return `${PROTOCOL[build]}://theme?${formattedQueries}`;
}

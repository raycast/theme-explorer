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

  const url = new URL(`${PROTOCOL[build]}://theme`);

  const encodedParams = Object.entries(restTheme).map(
    ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  );
  encodedParams.push(
    `colors=${Object.values(colors).map(encodeURIComponent).join(",")}`
  );
  url.search = encodedParams.join("&");

  return url.toString();
}

import React from "react";
import { Raycast } from "@/components/raycast";
import type { Theme } from "@/components/raycast";
import { Metadata } from "next";

const theme: Theme = {
  author: "peduarte",
  version: "1",
  name: "Atom One Light",
  appearance: "light",
  colors: {
    backgroundPrimary: "#FAFAFA",
    backgroundSecondary: "#E4E4E4",
    text: "#ff0000",
    selection: "#ff0000",
    loader: "#ff0000",
    red: "#E24343",
    orange: "#E2612A",
    yellow: "#CAC235",
    green: "#56A156",
    blue: "#1485BA",
    purple: "#642EA4",
    pink: "#A42EA2",
  },
};

const BASE_URL = {
  development: "http://localhost:3000",
  preview: `https://theme-explorer-git-v1-raycastapp.vercel.app`,
  production: "https://themes.ray.so",
}[process.env.NEXT_PUBLIC_VERCEL_ENV || "development"];

const title = `${theme.name} by ${theme.author}`;
const encodedTheme = encodeURIComponent(JSON.stringify(theme));
const image = `${BASE_URL}/og?theme=${encodedTheme}`;

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
    images: [
      {
        url: image,
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <Raycast theme={theme} />
      <div className="flex px-4 gap-4">
        {theme.name} by {theme.author}
      </div>
    </div>
  );
}

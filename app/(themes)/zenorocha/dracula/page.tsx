import React from "react";
import { Raycast } from "@/components/raycast";
import type { Theme } from "@/components/raycast";
import { Metadata } from "next";

const theme: Theme = {
  author: "zenorocha",
  version: "1",
  name: "Dracula",
  appearance: "dark",
  colors: {
    backgroundPrimary: "#282A36",
    backgroundSecondary: "#282A36",
    text: "#F8F8F2",
    selection: "#BD93F9",
    loader: "#BD93F9",
    red: "#FF5555",
    orange: "#FFB86C",
    yellow: "#F1FA8C",
    green: "#50FA7B",
    blue: "#8BE9FD",
    purple: "#BD93F9",
    pink: "#FF79C6",
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

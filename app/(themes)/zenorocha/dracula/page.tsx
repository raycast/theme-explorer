import React from "react";
import { Raycast } from "@/components/raycast";
import type { Theme } from "@/components/raycast";

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

export async function generateMetadata({
  params,
}: {
  params: { domain: string };
}) {
  const title = `${theme.name} by ${theme.author}`;
  const encodedTheme = encodeURIComponent(JSON.stringify(theme));
  const image = `http://${
    params.domain || "localhost:3000"
  }/og?theme=${encodedTheme}`;

  return {
    title,
    image,
    openGraph: {
      title,
      images: [
        {
          url: image,
        },
      ],
    },
  };
}

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

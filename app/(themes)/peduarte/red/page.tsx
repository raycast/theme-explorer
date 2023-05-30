import React from "react";
import { Raycast } from "@/components/raycast";
import type { Theme } from "@/components/raycast";

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

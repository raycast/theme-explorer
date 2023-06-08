import React from "react";
import { Raycast } from "@/components/raycast";
import { BASE_URL } from "@/lib/url";
import { getAllThemes } from "@/lib/theme";
import { Desktop } from "@/components/desktop";

export async function generateMetadata({
  params,
}: {
  params: { theme: [author: string, theme: string] };
}) {
  const [author, themeName] = params.theme;

  const slug = `${author}/${themeName}`;
  const themes = await getAllThemes();
  const theme = themes.find((theme) => theme.slug === slug);

  const encodedTheme = encodeURIComponent(JSON.stringify(theme));

  const title = `${themeName} by ${author}`;
  const image = `${BASE_URL}/og?theme=${encodedTheme}`;

  return {
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
}

export default function ThemePage() {
  return (
    <Desktop>
      <Raycast />
    </Desktop>
  );
}

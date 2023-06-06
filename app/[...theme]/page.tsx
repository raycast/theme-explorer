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

export async function generateStaticParams() {
  const themes = await getAllThemes();

  return themes.map((theme) => ({
    theme: theme.slug.split("/"),
  }));
}

export default async function ThemePage({
  params,
}: {
  params: { theme: [author: string, theme: string] };
}) {
  const [author, themeName] = params.theme;
  const slug = `${author}/${themeName}`;
  const themes = await getAllThemes();
  const theme = themes.find((theme) => theme.slug === slug);

  if (!theme) {
    return <h1>Theme not found</h1>;
  }

  return (
    <Desktop theme={theme}>
      <Raycast />
    </Desktop>
  );
}

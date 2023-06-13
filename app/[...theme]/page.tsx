import React from "react";
import { notFound } from "next/navigation";
import { Raycast } from "@/components/raycast";
import { BASE_URL } from "@/lib/url";
import { getAllThemes } from "@/lib/theme";
import { Desktop } from "@/components/desktop";
import { PageWithThemeMode } from "@/components/page-with-theme-mode";

export async function generateMetadata({
  params,
}: {
  params: { theme: [author: string, theme: string] };
}) {
  const [author, themeName] = params.theme;

  const slug = `${author}/${themeName}`;
  const themes = await getAllThemes();
  const theme = themes.find((theme) => theme.slug === slug);

  if (!theme) {
    return {};
  }

  const { colors, ...restTheme } = theme;

  const encodedColors = encodeURIComponent(JSON.stringify(colors));

  const queryParams = new URLSearchParams();
  Object.entries(restTheme).forEach(([key, value]) =>
    queryParams.set(key, value)
  );
  queryParams.set("colors", encodedColors);

  const title = `${themeName} by ${author}`;
  const image = `${BASE_URL}/og?${queryParams}`;

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
    notFound();
    return;
  }

  return (
    <PageWithThemeMode theme={theme}>
      <Desktop>
        <Raycast />
      </Desktop>
    </PageWithThemeMode>
  );
}

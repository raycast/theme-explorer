import React from "react";
import { Raycast } from "@/components/raycast";
import { BASE_URL } from "@/lib/url";
import { getThemeBySlug } from "@/lib/theme";
import { Desktop } from "@/components/desktop";

export async function generateMetadata({
  params,
}: {
  params: { theme: [author: string, theme: string] };
}) {
  const [author, themeName] = params.theme;

  const slug = `${author}/${themeName}`;
  const theme = await getThemeBySlug(slug);

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

export default async function ThemePage({
  params,
}: {
  params: { theme: [author: string, theme: string] };
}) {
  const [author, themeName] = params.theme;
  const slug = `${author}/${themeName}`;
  const theme = await getThemeBySlug(slug);

  if (!theme) {
    return <h1>Theme not found</h1>;
  }

  return (
    <Desktop theme={theme}>
      <Raycast />
    </Desktop>
  );
}

import React from "react";
import NextLink from "next/link";
import { Raycast } from "@/components/raycast";
import { BASE_URL } from "@/lib/url";
import { getThemesByAuthor } from "@/lib/theme";
import { Desktop } from "@/components/desktop";
import { RaycastThemeProvider } from "@/components/raycast-theme-provider";

export async function generateMetadata({
  params,
}: {
  params: { theme: [author: string, theme: string] };
}) {
  const [author, themeName] = params.theme;

  const title = `${themeName} by ${author}`;

  const themes = await getThemesByAuthor(author);
  const theme = themes.find((theme) => theme.slug === themeName);

  const encodedTheme = encodeURIComponent(JSON.stringify(theme));
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

  const themes = await getThemesByAuthor(author);
  const theme = themes.find((theme) => theme.slug === themeName);

  if (!theme) {
    return <h1>Theme not found</h1>;
  }

  return (
    <RaycastThemeProvider initialTheme={theme}>
      <Desktop>
        <Raycast />
      </Desktop>
      <div className="flex px-4 gap-4">
        {themeName} by {author}
      </div>
      <div className="flex px-4">
        <NextLink href="/">← See all themes</NextLink>
      </div>
    </RaycastThemeProvider>
  );
}

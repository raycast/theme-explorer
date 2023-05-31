import React from "react";
import { Raycast } from "@/components/raycast";
import { BASE_URL } from "@/lib/url";
import { getThemesByAuthor } from "@/lib/getThemesByAuthor";

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

  return (
    <div>
      {theme && <Raycast theme={theme} />}
      <div className="flex px-4 gap-4">
        {themeName} by {author}
      </div>
    </div>
  );
}
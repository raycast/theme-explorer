import { PageWithThemeMode } from "@/components/page-with-theme-mode";
import { getAllThemes, getThemeBySlug } from "@/lib/theme";

export default async function ThemePageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { theme: [author: string, theme: string] };
}) {
  const [author, themeName] = params.theme;
  const slug = `${author}/${themeName}`;
  const themes = await getAllThemes();
  const theme = themes.find((theme) => theme.slug === slug);

  if (!theme) {
    return <h1>Theme not found</h1>;
  }

  return <PageWithThemeMode theme={theme}>{children}</PageWithThemeMode>;
}

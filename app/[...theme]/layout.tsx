import { PageWithThemeMode } from "@/components/page-with-theme-mode";
import { getThemeBySlug } from "@/lib/theme";

export default async function ThemePageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { theme: [author: string, theme: string] };
}) {
  const [author, themeName] = params.theme;
  const slug = `${author}/${themeName}`;
  const theme = await getThemeBySlug(slug);

  if (!theme) {
    return <h1>Theme not found</h1>;
  }

  return <PageWithThemeMode theme={theme}>{children}</PageWithThemeMode>;
}

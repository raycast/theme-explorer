import { Desktop } from "@/components/desktop";
import { PageWithThemeMode } from "@/components/page-with-theme-mode";
import { Raycast } from "@/components/raycast";
import { getAllThemes } from "@/lib/theme";

export default async function Home() {
  const themes = await getAllThemes();
  const defaultTheme = themes.filter((theme) => theme.appearance === "dark")[0];

  return (
    <PageWithThemeMode theme={defaultTheme}>
      <Desktop>
        <Raycast />
      </Desktop>
    </PageWithThemeMode>
  );
}

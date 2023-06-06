import React from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Desktop } from "@/components/desktop";
import { Raycast } from "@/components/raycast";
import { ThemeFilter } from "@/components/theme-filter";
import { getAllThemes } from "@/lib/theme";
import { RaycastThemeProvider } from "@/components/raycast-theme-provider";

export default async function Home() {
  const themes = await getAllThemes();

  const darkThemes = themes.filter(
    (rayTheme) => rayTheme.appearance === "dark"
  );

  return (
    <RaycastThemeProvider initialTheme={darkThemes[0]}>
      <div className="flex flex-col h-screen">
        <Desktop>
          <Raycast />
        </Desktop>

        <div className="flex justify-between pt-5 bg-[--bg]">
          <ThemeFilter themes={themes} />
          <button className="rounded-2 border h-[30px] inline-flex px-3 items-center text-3">
            Add to Raycast
          </button>
          <div></div>
        </div>

        <ThemeSwitcher themes={themes} />
      </div>
    </RaycastThemeProvider>
  );
}

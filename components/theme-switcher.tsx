import React from "react";
import { ThemeCard } from "@/components/raycast/theme-card";
import { Theme } from "@/lib/theme";

export function ThemeSwitcher({ themes }: { themes: Theme[] }) {
  return (
    <>
      <div
        data-hide-on-theme="light"
        className="flex px-5 py-5 gap-5 items-center overflow-x-auto snap-x snap-mandatory h-[245px] shrink-0"
      >
        {themes
          .filter((rayTheme) => rayTheme.appearance === "dark")
          .map((rayTheme) => (
            <ThemeCard key={rayTheme.name} theme={rayTheme} />
          ))}
      </div>
      <div
        data-hide-on-theme="dark"
        className="flex px-5 py-5 gap-5 items-center overflow-x-auto snap-x snap-mandatory h-[245px] shrink-0"
      >
        {themes
          .filter((rayTheme) => rayTheme.appearance === "light")
          .map((rayTheme) => (
            <ThemeCard key={rayTheme.name} theme={rayTheme} />
          ))}
      </div>
    </>
  );
}

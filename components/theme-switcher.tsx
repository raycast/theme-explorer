import React from "react";
import { ThemeCard } from "@/components/raycast/theme-card";
import { getAllThemes } from "@/lib/theme";

export async function ThemeSwitcher() {
  const themes = await getAllThemes();

  return (
    <div className="flex px-6 py-5 gap-4 items-center overflow-auto h-[245px]">
      {themes.map((theme) => (
        <ThemeCard key={theme.name} theme={theme} />
      ))}
    </div>
  );
}

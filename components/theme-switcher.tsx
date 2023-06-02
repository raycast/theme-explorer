import React from "react";
import { ThemeCard } from "@/components/raycast/theme-card";
import { getAllThemes } from "@/lib/theme";

export async function ThemeSwitcher() {
  const themes = await getAllThemes();

  return (
    <div>
      <div className="flex p-6 gap-4 items-center overflow-auto h-[35vh] min-h-[240px]">
        {themes.map((theme) => (
          <ThemeCard key={theme.name} theme={theme} />
        ))}
      </div>
    </div>
  );
}

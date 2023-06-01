import React from "react";
import { ThemeCard } from "@/components/raycast/theme-card";
import { getAllThemes } from "@/lib/theme";

export async function ThemeSwitcher() {
  const themes = await getAllThemes();

  return (
    <div>
      <div className="flex px-[48px] gap-4 overflow-auto">
        {themes.map((theme) => (
          <ThemeCard key={theme.name} theme={theme} />
        ))}
      </div>
    </div>
  );
}

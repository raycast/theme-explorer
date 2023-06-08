"use client";
import React from "react";
import { ThemeCard } from "@/components/raycast/theme-card";
import { Theme } from "@/lib/theme";
import { useRaycastTheme } from "@/components/raycast-theme-provider";

export function ThemeSwitcher({ themes }: { themes: Theme[] }) {
  const { activeTheme } = useRaycastTheme();

  if (!activeTheme) {
    return (
      <div className="flex px-5 pb-5 gap-5 items-center overflow-x-auto snap-x snap-mandatory h-[245px] shrink-0"></div>
    );
  }

  return (
    <div className="flex px-5 pb-5 gap-5 items-center overflow-x-auto snap-x snap-mandatory h-[245px] shrink-0">
      {themes
        .filter((rayTheme) => rayTheme.appearance === activeTheme.appearance)
        .map((rayTheme) => (
          <ThemeCard key={rayTheme.name} theme={rayTheme} />
        ))}
    </div>
  );
}

"use client";
import React from "react";
import { ThemeCard } from "@/components/raycast/theme-card";
import { Theme } from "@/lib/theme";
import { useRaycastTheme } from "@/components/raycast-theme-provider";

export function ThemeSwitcher({ themes }: { themes: Theme[] }) {
  const { activeTheme } = useRaycastTheme();

  return (
    <div className="flex py-5 gap-5 box-content items-center overflow-x-auto snap-x snap-mandatory h-[214px] shrink-0">
      <div aria-hidden />
      {themes
        .filter((rayTheme) => rayTheme.appearance === activeTheme?.appearance)
        .map((rayTheme) => (
          <ThemeCard key={rayTheme.name} theme={rayTheme} />
        ))}
      <div aria-hidden />
    </div>
  );
}

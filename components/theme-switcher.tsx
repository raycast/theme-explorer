"use client";
import React from "react";
import { ThemeCard } from "@/components/raycast/theme-card";
import { Theme } from "@/lib/theme";
import { useRaycastTheme } from "@/components/raycast-theme-provider";

export function ThemeSwitcher({ themes }: { themes: Theme[] }) {
  const { activeTheme } = useRaycastTheme();

  return (
    <div className="flex items-center shrink-0 py-5 gap-5 box-content overflow-x-auto snap-x snap-mandatory h-[200px] w-full desktop:h-[214px]">
      <div aria-hidden className="shrink-0" />
      {!activeTheme?.slug && <ThemeCard theme={activeTheme} />}
      {themes
        .filter((rayTheme) => rayTheme.appearance === activeTheme?.appearance)
        .map((rayTheme) => (
          <ThemeCard key={rayTheme.name} theme={rayTheme} />
        ))}
      <div aria-hidden className="shrink-0" />
    </div>
  );
}

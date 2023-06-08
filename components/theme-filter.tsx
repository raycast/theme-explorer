"use client";
import React from "react";
import { Theme } from "@/lib/theme";
import { useLastVisitedTheme } from "@/components/navigation-history";
import { useRaycastTheme } from "@/components/raycast-theme-provider";

export function ThemeFilter({ themes }: { themes: Theme[] }) {
  const { setActiveTheme } = useRaycastTheme();
  const { light, dark } = useLastVisitedTheme();

  const lightThemes = themes.filter(
    (rayTheme) => rayTheme.appearance === "light"
  );
  const darkThemes = themes.filter(
    (rayTheme) => rayTheme.appearance === "dark"
  );

  return (
    <div>
      <button
        data-theme-toggle="dark"
        className={`rounded-2 rounded-tr-none rounded-br-none border border-black/20 dark:border-white/20 h-[30px] inline-flex px-3 items-center text-3`}
        onClick={() => {
          setActiveTheme(darkThemes[0]);
        }}
      >
        Dark
      </button>
      <button
        className={`rounded-2 rounded-tl-none rounded-bl-none border border-l-0 border-black/20 dark:border-white/20 h-[30px] inline-flex px-3 items-center text-3 `}
        data-theme-toggle="light"
        onClick={() => {
          setActiveTheme(lightThemes[0]);
        }}
      >
        Light
      </button>
    </div>
  );
}

"use client";
import { useRaycastTheme } from "@/components/raycast-theme-provider";
import { Theme } from "@/lib/theme";
import { useTheme } from "@wits/next-themes";
import React from "react";

export function ThemeFilter({ themes }: { themes: Theme[] }) {
  const { setTheme } = useTheme();
  const { setActiveTheme } = useRaycastTheme();

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
        className={`rounded-2 border h-[30px] inline-flex px-3 items-center text-3`}
        onClick={() => {
          setTheme("dark");
          setActiveTheme(darkThemes[0]);
        }}
      >
        Dark
      </button>
      <button
        className={`rounded-2 border h-[30px] inline-flex px-3 items-center text-3 `}
        data-theme-toggle="light"
        onClick={() => {
          setTheme("light");
          setActiveTheme(lightThemes[0]);
        }}
      >
        Light
      </button>
    </div>
  );
}

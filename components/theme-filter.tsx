"use client";
import React from "react";
import { Theme } from "@/lib/theme";
import { useRouter } from "next/navigation";
import { useNavigationHistory } from "@/components/navigation-events";

export function ThemeFilter({ themes }: { themes: Theme[] }) {
  const { push } = useRouter();
  const { light, dark } = useNavigationHistory();

  const lightThemes = themes.filter(
    (rayTheme) => rayTheme.appearance === "light"
  );
  const darkThemes = themes.filter(
    (rayTheme) => rayTheme.appearance === "dark"
  );

  const lastVisitedDarkTheme = dark[dark.length - 1];
  const lastVisitedLightTheme = light[light.length - 1];
  console.log(lastVisitedDarkTheme, lastVisitedLightTheme);
  return (
    <div>
      <button
        data-theme-toggle="dark"
        className={`rounded-2 rounded-tr-none rounded-br-none border border-black/20 dark:border-white/20 h-[30px] inline-flex px-3 items-center text-3`}
        onClick={() => {
          push(lastVisitedDarkTheme || darkThemes[0].slug);
        }}
      >
        Dark
      </button>
      <button
        className={`rounded-2 rounded-tl-none rounded-bl-none border border-l-0 border-black/20 dark:border-white/20 h-[30px] inline-flex px-3 items-center text-3 `}
        data-theme-toggle="light"
        onClick={() => {
          push(lastVisitedLightTheme || lightThemes[0].slug);
        }}
      >
        Light
      </button>
    </div>
  );
}

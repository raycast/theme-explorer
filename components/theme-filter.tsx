"use client";
import React from "react";
import { Theme } from "@/lib/theme";
import { useRouter } from "next/navigation";
import { useLastVisitedTheme } from "@/components/navigation-history";

export function ThemeFilter({ themes }: { themes: Theme[] }) {
  const { push } = useRouter();
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
          push(dark || darkThemes[0].slug);
        }}
      >
        Dark
      </button>
      <button
        className={`rounded-2 rounded-tl-none rounded-bl-none border border-l-0 border-black/20 dark:border-white/20 h-[30px] inline-flex px-3 items-center text-3 `}
        data-theme-toggle="light"
        onClick={() => {
          push(light || lightThemes[0].slug);
        }}
      >
        Light
      </button>
    </div>
  );
}

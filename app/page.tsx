import React from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Desktop } from "@/components/desktop";
import { Raycast } from "@/components/raycast";
import { ThemeFilter } from "@/components/theme-filter";
import { getAllThemes } from "@/lib/theme";

export default async function Home() {
  const themes = await getAllThemes();

  return (
    <>
      <Desktop>
        <Raycast />
      </Desktop>

      <div className="flex justify-between pt-5 bg-[--bg]">
        <ThemeFilter themes={themes} />
        <button className="rounded-2 border h-[30px] inline-flex px-3 items-center text-3">
          Add to Raycast
        </button>
        <div></div>
      </div>

      <ThemeSwitcher themes={themes} />
    </>
  );
}

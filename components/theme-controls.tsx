"use client";
import { useRaycastTheme } from "@/components/raycast-theme-provider";
import { ThemeFilter } from "@/components/theme-filter";
import { Theme } from "@/lib/theme";

export function ThemeControls({ themes }: { themes: Theme[] }) {
  const { activeTheme } = useRaycastTheme();

  return (
    <div className="flex justify-between px-4 w-full max-w-screen-2xl mx-auto h-[30px]">
      {activeTheme && (
        <>
          <ThemeFilter themes={themes} />
          <button className="rounded-2 border h-[30px] inline-flex px-3 items-center text-3">
            Add to Raycast
          </button>
          <ThemeFilter themes={themes} />
        </>
      )}
    </div>
  );
}

"use client";
import { useRaycastTheme } from "@/components/raycast-theme-provider";
import { Theme } from "@/lib/theme";
import { useTheme } from "@wits/next-themes";
import React from "react";

export function ThemeFilter({ themes }: { themes: Theme[] }) {
  const [mounted, setMounted] = React.useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const { setActiveTheme } = useRaycastTheme();

  const lightThemes = themes.filter(
    (rayTheme) => rayTheme.appearance === "light"
  );
  const darkThemes = themes.filter(
    (rayTheme) => rayTheme.appearance === "dark"
  );

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    if (resolvedTheme === "dark") {
      setActiveTheme(darkThemes[0]);
    } else {
      setActiveTheme(lightThemes[0]);
    }

    setMounted(true);
  }, [resolvedTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button
        className={`rounded-2 border h-[30px] inline-flex px-3 items-center text-3 ${
          resolvedTheme === "dark" ? "bg-white/40" : ""
        }`}
        onClick={() => {
          setTheme("dark");
          setActiveTheme(darkThemes[0]);
        }}
      >
        Dark
      </button>
      <button
        className={`rounded-2 border h-[30px] inline-flex px-3 items-center text-3 ${
          resolvedTheme === "light" ? "bg-black/40" : ""
        }`}
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

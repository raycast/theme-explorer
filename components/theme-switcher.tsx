"use client";
import React from "react";
import { ThemeCard } from "@/components/raycast/theme-card";
import { Theme } from "@/lib/theme";
import { useTheme } from "@wits/next-themes";

export function ThemeSwitcher({ themes }: { themes: Theme[] }) {
  const [mounted, setMounted] = React.useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex px-5 py-5 gap-5 items-center overflow-auto h-[245px] shrink-0">
      {themes
        .filter((rayTheme) => rayTheme.appearance === resolvedTheme)
        .map((rayTheme) => (
          <ThemeCard key={rayTheme.name} theme={rayTheme} />
        ))}
    </div>
  );
}

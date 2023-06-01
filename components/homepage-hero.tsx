"use client";
import { Desktop } from "@/components/desktop";
import { Raycast } from "@/components/raycast";
import { useTheme } from "@/components/raycast-theme-provider";

export function HomepageHero() {
  const { activeTheme } = useTheme();

  return (
    <Desktop theme={activeTheme}>
      <Raycast theme={activeTheme} />
    </Desktop>
  );
}

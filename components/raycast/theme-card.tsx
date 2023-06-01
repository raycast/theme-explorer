"use client";
import { Raycast } from "@/components/raycast";
import { useTheme } from "@/components/raycast-theme-provider";
import { Theme } from "@/lib/theme";

export function ThemeCard({ theme }: { theme: Theme }) {
  const { activeTheme, setActiveTheme } = useTheme();

  return (
    <button
      key={theme.name}
      className={`ring m-2 rounded-4 overflow-hidden ${
        activeTheme.slug === theme.slug ? "ring-white" : "ring-transparent"
      }`}
      style={{
        backgroundColor: theme.appearance === "dark" ? "black" : "white",
      }}
      onClick={() => setActiveTheme(theme)}
    >
      <Raycast theme={theme} size="small" disableLoadingAnimation />
    </button>
  );
}

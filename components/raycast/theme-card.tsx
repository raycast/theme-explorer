"use client";
import { Raycast } from "@/components/raycast";
import { useTheme } from "@/components/raycast-theme-provider";
import { Theme } from "@/lib/theme";

export function ThemeCard({ theme }: { theme: Theme }) {
  const { activeTheme, setActiveTheme } = useTheme();

  return (
    <button
      key={theme.name}
      className={`ring ring-inset p-2 rounded-3 ${
        activeTheme.slug === theme.slug ? "ring-white" : "ring-transparent"
      }`}
      onClick={() => setActiveTheme(theme)}
    >
      <Raycast theme={theme} height={200} />
    </button>
  );
}

"use client";
import { ThemeProvider } from "@wits/next-themes";
import { RaycastThemeProvider } from "@/components/raycast-theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <RaycastThemeProvider>{children}</RaycastThemeProvider>
    </ThemeProvider>
  );
}

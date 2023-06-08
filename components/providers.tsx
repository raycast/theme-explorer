"use client";
import { LastVisitedThemeProvider } from "@/components/navigation-history";
import { RaycastThemeProvider } from "@/components/raycast-theme-provider";
import { Theme } from "@/lib/theme";

export function Providers({
  children,
  themes,
}: {
  children: React.ReactNode;
  themes: Theme[];
}) {
  return (
    <RaycastThemeProvider themes={themes}>
      <LastVisitedThemeProvider themes={themes}>
        {children}
      </LastVisitedThemeProvider>
    </RaycastThemeProvider>
  );
}

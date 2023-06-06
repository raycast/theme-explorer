"use client";
import { LastVisitedThemeProvider } from "@/components/navigation-history";
import { Theme } from "@/lib/theme";
import { ThemeProvider } from "next-themes";

export function Providers({
  children,
  themes,
}: {
  children: React.ReactNode;
  themes: Theme[];
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <LastVisitedThemeProvider themes={themes}>
        {children}
      </LastVisitedThemeProvider>
    </ThemeProvider>
  );
}

"use client";
import { NavigationHistoryProvider } from "@/components/navigation-events";
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
      <NavigationHistoryProvider themes={themes}>
        {children}
      </NavigationHistoryProvider>
    </ThemeProvider>
  );
}

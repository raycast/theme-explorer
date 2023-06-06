"use client";

import { Theme } from "@/lib/theme";
import { useTheme } from "next-themes";
import React from "react";

export function PageWithThemeMode({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) {
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    if (resolvedTheme !== theme.appearance) {
      setTheme(theme.appearance);
    }
  }, [resolvedTheme]);

  return <>{children}</>;
}

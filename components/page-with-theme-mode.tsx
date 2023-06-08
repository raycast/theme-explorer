"use client";

import { useRaycastTheme } from "@/components/raycast-theme-provider";
import { Theme } from "@/lib/theme";
import React from "react";

export function PageWithThemeMode({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) {
  const { setActiveTheme } = useRaycastTheme();

  React.useEffect(() => {
    setTimeout(() => {
      setActiveTheme(theme);
    }, 1500);
  }, []);

  return <>{children}</>;
}

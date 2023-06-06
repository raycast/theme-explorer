"use client";

import React from "react";
import { Theme } from "@/lib/theme";
import { useParams } from "next/navigation";

type LastVisitedThemeContextType = {
  light: string;
  dark: string;
};

export const LastVisitedThemeContext =
  React.createContext<LastVisitedThemeContextType>({
    light: "",
    dark: "",
  });

export function LastVisitedThemeProvider({
  children,
  themes,
}: {
  children: React.ReactNode;
  themes: Theme[];
}) {
  const [lightHistory, setLightHistory] = React.useState<string>("");
  const [darkHistory, setDarkHistory] = React.useState<string>("");

  const params = useParams();
  const slug = params.theme;

  React.useEffect(() => {
    const isDark =
      themes.find((theme) => theme.slug === slug)?.appearance === "dark";

    if (isDark) {
      setDarkHistory(slug);
    } else {
      setLightHistory(slug);
    }
  }, [slug]);

  return (
    <LastVisitedThemeContext.Provider
      value={{ light: lightHistory, dark: darkHistory }}
    >
      {children}
    </LastVisitedThemeContext.Provider>
  );
}

export function useLastVisitedTheme() {
  const { light, dark } = React.useContext(LastVisitedThemeContext);
  return { light, dark };
}

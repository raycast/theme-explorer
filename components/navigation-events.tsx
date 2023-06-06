"use client";

import React from "react";
import { Theme } from "@/lib/theme";
import { useParams } from "next/navigation";

type NavigationHistoryContextType = {
  light: string[];
  dark: string[];
};

export const NavigationHistoryContext =
  React.createContext<NavigationHistoryContextType>({
    light: [],
    dark: [],
  });

export function NavigationHistoryProvider({
  children,
  themes,
}: {
  children: React.ReactNode;
  themes: Theme[];
}) {
  const [lightHistory, setLightHistory] = React.useState<string[]>([]);
  const [darkHistory, setDarkHistory] = React.useState<string[]>([]);

  const params = useParams();
  const slug = params.theme;

  React.useEffect(() => {
    const isDark =
      themes.find((theme) => theme.slug === slug)?.appearance === "dark";

    if (isDark) {
      setDarkHistory((history) => [...history, slug]);
    } else {
      setLightHistory((history) => [...history, slug]);
    }
  }, [slug]);

  return (
    <NavigationHistoryContext.Provider
      value={{ light: lightHistory, dark: darkHistory }}
    >
      {children}
    </NavigationHistoryContext.Provider>
  );
}

export function useNavigationHistory() {
  const { light, dark } = React.useContext(NavigationHistoryContext);
  return { light, dark };
}

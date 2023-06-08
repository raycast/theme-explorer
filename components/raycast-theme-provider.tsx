"use client";
import { Theme } from "@/lib/theme";
import React from "react";

type RaycastThemeContextType = {
  themes: Theme[];
  activeTheme: Theme | undefined;
  setActiveTheme: (theme: Theme) => void;
};

export const RaycastThemeContext = React.createContext<RaycastThemeContextType>(
  {
    themes: [],
    activeTheme: undefined,
    setActiveTheme: () => {},
  }
);

export function RaycastThemeProvider({
  themes,
  initialTheme,
  children,
}: {
  themes: Theme[];
  initialTheme?: Theme;
  children: React.ReactNode;
}) {
  const [allThemes, setAllThemes] = React.useState<Theme[]>(themes);
  const [activeTheme, setActiveTheme] = React.useState<Theme | undefined>(
    initialTheme
  );

  const handleSetActiveTheme = (theme: Theme) => {
    setActiveTheme(theme);
  };

  const handleURLChange = (slug: string) =>
    window.history.pushState({}, "", `/${slug}`);

  React.useEffect(() => {
    if (activeTheme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(activeTheme.appearance);
      document.documentElement.style.colorScheme = activeTheme.appearance;
      handleURLChange(activeTheme.slug);
    }
  }, [activeTheme]);

  const style = Object.fromEntries(
    Object.entries(activeTheme?.colors || {}).map(([key, value]) => [
      "--" + key,
      value,
    ])
  );

  return (
    <RaycastThemeContext.Provider
      value={{
        themes: allThemes,
        activeTheme,
        setActiveTheme: handleSetActiveTheme,
      }}
    >
      <div
        style={{
          ...style,
          transition:
            "--backgroundPrimary 2000ms linear 0s, --backgroundSecondary 2s",
        }}
      >
        {children}
      </div>
    </RaycastThemeContext.Provider>
  );
}

export function useRaycastTheme() {
  const { themes, activeTheme, setActiveTheme } =
    React.useContext(RaycastThemeContext);

  return { themes, activeTheme, setActiveTheme };
}

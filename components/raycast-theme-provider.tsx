"use client";
import { Theme } from "@/lib/theme";
import React from "react";

type RaycastThemeContextType = {
  activeTheme: Theme | undefined;
  setActiveTheme: (theme: Theme) => void;
};

export const RaycastThemeContext = React.createContext<RaycastThemeContextType>(
  {
    activeTheme: undefined,
    setActiveTheme: () => {},
  }
);

export function RaycastThemeProvider({
  initialTheme,
  children,
}: {
  initialTheme?: Theme;
  children: React.ReactNode;
}) {
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
        activeTheme,
        setActiveTheme: handleSetActiveTheme,
      }}
    >
      <div
        style={{
          ...style,
        }}
      >
        {children}
      </div>
    </RaycastThemeContext.Provider>
  );
}

export function useRaycastTheme() {
  const { activeTheme, setActiveTheme } = React.useContext(RaycastThemeContext);

  return { activeTheme, setActiveTheme };
}

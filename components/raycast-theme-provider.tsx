"use client";
import { Theme } from "@/lib/theme";
import React from "react";

type RaycastThemeContextType = {
  activeTheme: Theme | null;
  setActiveTheme: (theme: Theme) => void;
};

export const RaycastThemeContext = React.createContext<RaycastThemeContextType>(
  {
    activeTheme: null,
    setActiveTheme: () => {},
  }
);

export function RaycastThemeProvider({
  initialTheme,
  children,
}: {
  initialTheme: Theme;
  children: React.ReactNode;
}) {
  const [activeTheme, setActiveTheme] = React.useState<Theme>(initialTheme);

  const handleSetActiveTheme = (theme: Theme) => {
    setActiveTheme(theme);
  };

  const style = Object.fromEntries(
    Object.entries(activeTheme.colors).map(([key, value]) => [
      "--" + key,
      value,
    ])
  );

  return (
    <RaycastThemeContext.Provider
      value={{ activeTheme, setActiveTheme: handleSetActiveTheme }}
    >
      <div style={style}>{children}</div>
    </RaycastThemeContext.Provider>
  );
}

export function useRaycastTheme() {
  const { activeTheme, setActiveTheme } = React.useContext(RaycastThemeContext);

  return { activeTheme, setActiveTheme };
}

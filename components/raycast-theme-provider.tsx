"use client";
import { Theme } from "@/lib/theme";
import React from "react";

const defaultTheme: Theme = {
  author: "raycast",
  version: "1",
  name: "default",
  appearance: "dark",
  slug: "dracula",
  colors: {
    backgroundPrimary: "#282A36",
    backgroundSecondary: "#282A36",
    text: "#F8F8F2",
    selection: "#BD93F9",
    loader: "#BD93F9",
    red: "#FF5555",
    orange: "#FFB86C",
    yellow: "#F1FA8C",
    green: "#50FA7B",
    blue: "#8BE9FD",
    purple: "#BD93F9",
    pink: "#FF79C6",
  },
};

type ThemeContextType = {
  activeTheme: Theme;
  setActiveTheme: (theme: Theme) => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  activeTheme: defaultTheme,
  setActiveTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeTheme, setActiveTheme] = React.useState<Theme>(defaultTheme);

  const handleSetActiveTheme = (theme: Theme) => {
    setActiveTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{ activeTheme, setActiveTheme: handleSetActiveTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const { activeTheme, setActiveTheme } = React.useContext(ThemeContext);

  return { activeTheme, setActiveTheme };
}

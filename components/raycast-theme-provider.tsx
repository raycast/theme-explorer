"use client";
import { Theme } from "@/lib/theme";
import React from "react";

const defaultTheme: Theme = {
  author: "zenorocha",
  version: "1",
  name: "Dracula",
  slug: "dracula",
  appearance: "dark",
  colors: {
    backgroundPrimary: "40, 42, 54",
    backgroundSecondary: "40, 42, 54",
    text: "248, 248, 242",
    selection: "189, 147, 249",
    loader: "189, 147, 249",
    red: "255, 85, 85",
    orange: "255, 184, 108",
    yellow: "241, 250, 140",
    green: "80, 250, 123",
    blue: "139, 233, 253",
    purple: "189, 147, 249",
    pink: "255, 121, 198",
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

  const style = Object.fromEntries(
    Object.entries(activeTheme.colors).map(([key, value]) => [
      "--" + key,
      value,
    ])
  );

  return (
    <ThemeContext.Provider
      value={{ activeTheme, setActiveTheme: handleSetActiveTheme }}
    >
      <div style={style}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const { activeTheme, setActiveTheme } = React.useContext(ThemeContext);

  return { activeTheme, setActiveTheme };
}

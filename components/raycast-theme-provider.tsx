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

type RaycastThemeContextType = {
  activeTheme: Theme;
  setActiveTheme: (theme: Theme) => void;
};

export const RaycastThemeContext = React.createContext<RaycastThemeContextType>(
  {
    activeTheme: defaultTheme,
    setActiveTheme: () => {},
  }
);

export function RaycastThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <RaycastThemeContext.Provider
      value={{ activeTheme, setActiveTheme: handleSetActiveTheme }}
    >
      <div
        style={
          {
            ...style,
          } as React.CSSProperties
        }
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

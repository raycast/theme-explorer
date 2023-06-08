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
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTheme, setActiveTheme] = React.useState<Theme | undefined>(
    undefined
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

      // Object.entries(activeTheme?.colors || {}).map(([key, value]) => {
      //   try {
      //     CSS.registerProperty({
      //       name: "--" + key,
      //       syntax: "<color>",
      //       initialValue: "0",
      //       inherits: true,
      //     });
      //   } catch (e) {}
      //   return [];
      // });
    }
  }, [activeTheme]);

  const colorVariables = Object.entries(activeTheme?.colors || {}).reduce(
    (result, [key, value]) => {
      result[`--${key}`] = value;
      return result;
    },
    {} as Record<string, string>
  );

  // const colorTransitionValue = Object.entries(activeTheme?.colors || {})
  //   .map(([key, value]) => `--${key} 0.2s ease-in-out`)
  //   .join(", ");

  return (
    <RaycastThemeContext.Provider
      value={{
        activeTheme,
        setActiveTheme: handleSetActiveTheme,
      }}
    >
      <div
        style={{
          ...colorVariables,
          // transition: colorTransitionValue,
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

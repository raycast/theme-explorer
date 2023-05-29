"use client";
import { List } from "@/components/raycast/list";
import { Grid } from "@/components/raycast/grid";
import { RootFooter } from "@/components/raycast/root-footer";
import { RootHeader } from "@/components/raycast/root-header";
import chroma from "chroma-js";
import React from "react";
import Image from "next/image";

export type Theme = {
  author: string;
  version: string;
  name: string;
  appearance: "light" | "dark";
  colors: {
    backgroundPrimary: string;
    backgroundSecondary: string;
    text: string;
    selection: string;
    loader: string;
    red: string;
    orange: string;
    yellow: string;
    green: string;
    blue: string;
    purple: string;
    pink: string;
  };
};

export function Raycast({ theme }: { theme: Theme }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="aspect-[16/9] min-h-[600px] max-h-[675px] w-full flex items-center md:justify-center relative p-[48px] 2xl:w-[1280px] 2xl:mx-auto 2xl:rounded-4 2xl:my-[48px]">
        <div
          id="raycast"
          className={`w-[750px] h-[475px] rounded-4 backdrop-blur-[72px] border border-ray-border shadow flex flex-col relative overflow-hidden select-none shrink-0`}
          style={Object.assign(
            {
              zIndex: 2,
              backgroundColor: chroma(theme.colors.backgroundPrimary)
                .alpha(0.6)
                .css(),
            },
            ...Object.entries(theme.colors).map(([key, value]) => ({
              ["--" + key]: value,
            }))
          )}
        >
          <RootHeader />

          <main className="flex-1 overflow-hidden py-1">
            <List />
            <Grid />
          </main>

          <RootFooter />
        </div>
        <Image
          className="rounded-inherit"
          src={theme.appearance === "dark" ? "/bg-dark.jpg" : "/bg-light.jpg"}
          fill
          alt=""
          quality={100}
          style={{ objectFit: "cover", zIndex: 1 }}
        />
      </div>
    </ThemeProvider>
  );
}

const ThemeContext = React.createContext<Theme | null>(null);

function ThemeProvider({
  theme,
  children,
}: {
  theme: Theme;
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = React.useContext(ThemeContext);

  return theme as Theme;
}

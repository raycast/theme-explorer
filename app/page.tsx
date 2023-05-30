"use client";
import React from "react";
import { Raycast } from "@/components/raycast";
import NextLink from "next/link";
import type { Theme } from "@/components/raycast";

const themes: Theme[] = [
  {
    author: "peduarte",
    version: "1",
    name: "Dracula",
    appearance: "dark",
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
  },
  {
    author: "peduarte",
    version: "1",
    name: "Lilly",
    appearance: "dark",
    colors: {
      backgroundPrimary: "#622159",
      backgroundSecondary: "#282A36",
      text: "#F8F8F2",
      selection: "#93edf9",
      loader: "#faf20e",
      red: "#FF5555",
      orange: "#FFB86C",
      yellow: "#F1FA8C",
      green: "#50FA7B",
      blue: "#8BE9FD",
      purple: "#BD93F9",
      pink: "#FF79C6",
    },
  },
  {
    author: "ray",
    version: "1",
    name: "Spotify",
    appearance: "dark",
    colors: {
      backgroundPrimary: "#121212",
      backgroundSecondary: "#121212",
      text: "#FFFFFF",
      selection: "#00FF5A",
      loader: "#28FF74",
      red: "#F50A0A",
      orange: "#F5600A",
      yellow: "#E0A200",
      green: "#07BA65",
      blue: "#0A7FF5",
      purple: "#470AF5",
      pink: "#F50AA3",
    },
  },
  {
    author: "ray",
    version: "1",
    name: "One Dark Pro",
    appearance: "dark",
    colors: {
      backgroundPrimary: "#21252B",
      backgroundSecondary: "#21252B",
      text: "#FFFFFF",
      selection: "#808FA7",
      loader: "#61AFEF",
      red: "#E06C75",
      orange: "#E5C07B",
      yellow: "#E5D67B",
      green: "#95BE77",
      blue: "#61AFEF",
      purple: "#BF75D6",
      pink: "#D675A7",
    },
  },
  {
    author: "ray",
    version: "1",
    name: "Atom One Light",
    appearance: "light",
    colors: {
      backgroundPrimary: "#FAFAFA",
      backgroundSecondary: "#E4E4E4",
      // text: "#3E4047",
      text: "#ff0000",
      // selection: "#457CEF",
      selection: "#ff0000",
      // loader: "#457CEF",
      loader: "#ff0000",
      red: "#E24343",
      orange: "#E2612A",
      yellow: "#CAC235",
      green: "#56A156",
      blue: "#1485BA",
      purple: "#642EA4",
      pink: "#A42EA2",
    },
  },
];

export default function Home() {
  const [activeTheme, setActiveTheme] = React.useState(themes[0]);

  return (
    <div>
      <Raycast theme={activeTheme} />
      <div className="flex px-4 gap-4">
        Themes:{" "}
        {themes.map((theme) => (
          <button key={theme.name} onClick={() => setActiveTheme(theme)}>
            {theme.name}
          </button>
        ))}
      </div>

      <div className="flex px-4 gap-4">
        Pages:
        <NextLink href="/peduarte/red">Red by Peduarte</NextLink>
        <NextLink href="/peduarte/red">Dracula by Zenorocha</NextLink>
      </div>
    </div>
  );
}

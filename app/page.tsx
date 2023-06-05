import React from "react";
import { Desktop } from "@/components/desktop";
import { Raycast } from "@/components/raycast";

export default function Home() {
  return (
    <>
      <Desktop>
        <Raycast />
      </Desktop>

      {/* <ThemeSwitcher /> */}
    </>
  );
}

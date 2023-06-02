import React from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { HomepageHero } from "@/components/homepage-hero";

export default function Home() {
  return (
    <>
      <HomepageHero />

      {/* @ts-expect-error Async Server Component */}
      <ThemeSwitcher />
    </>
  );
}

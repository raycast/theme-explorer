import React from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { HomepageHero } from "@/components/homepage-hero";

export default function Home() {
  return (
    <div>
      <HomepageHero />

      {/* @ts-expect-error Async Server Component */}
      <ThemeSwitcher />
    </div>
  );
}

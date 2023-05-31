import React from "react";
import type { Theme } from "@/components/raycast";
import Playground from "@/app/playground";
import { BASE_URL } from "@/lib/url";

export default async function Home() {
  const res = await fetch(`${BASE_URL}/api/themes`, {
    cache: "no-cache",
  });

  const themes: Theme[] = await res.json();

  return (
    <div>
      <Playground themes={themes} />
    </div>
  );
}

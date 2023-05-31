import React from "react";
import Playground from "@/components/playground";

import { getAllThemes } from "@/lib/getAllThemes";

export default async function Home() {
  const themes = await getAllThemes();

  return <div>{themes && <Playground themes={themes} />}</div>;
}

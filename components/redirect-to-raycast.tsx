"use client";
import React from "react";
import { Theme } from "@/lib/theme";
import { BuildTypes, makeRaycastImportUrl } from "@/lib/url";

export function RedirectToRaycast({
  theme,
  build,
}: {
  theme: Theme;
  build?: BuildTypes;
}) {
  React.useEffect(() => {
    window.open(makeRaycastImportUrl(theme, build));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

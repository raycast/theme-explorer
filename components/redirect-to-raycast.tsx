"use client";
import { Theme } from "@/lib/theme";
import { makeRaycastImportUrl } from "@/lib/url";
import React from "react";

export function RedirectToRaycast({ theme }: { theme: Theme }) {
  React.useEffect(() => {
    console.log(makeRaycastImportUrl(theme));
  }, []);
  return null;
}

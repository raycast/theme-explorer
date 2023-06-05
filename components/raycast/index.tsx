import { List } from "@/components/raycast/list";
import { Grid } from "@/components/raycast/grid";
import { RootFooter } from "@/components/raycast/root-footer";
import { RootHeader } from "@/components/raycast/root-header";
import chroma from "chroma-js";
import React from "react";
import { Theme } from "@/lib/theme";

export function Raycast({
  disableLoadingAnimation,
  loadingAnimationType = "animated",
}: {
  disableLoadingAnimation?: boolean;
  loadingAnimationType?: "animated" | "static";
}) {
  return (
    <svg
      viewBox="0 0 750 475"
      xmlns="http://www.w3.org/2000/svg"
      className="block shrink-0 w-[750px] h-[475px]"
    >
      <foreignObject width="750" height="475" x="0" y="0" className="rounded-4">
        <div
          id="raycast"
          className={`w-full h-full rounded-4 backdrop-blur-[72px] shadow flex flex-col relative select-none shrink-0 text-left`}
          style={{
            zIndex: 2,
            backgroundColor: "rgba(var(--backgroundPrimary), 0.6)",
            backgroundImage: `linear-gradient(to bottom, rgba(var(--backgroundPrimary), 0.6) 0%, rgba(var(--backgroundSecondary), 0.6) 70%)`,
            boxShadow: `inset 0 0 0 1px rgba(var(--text), 0.2)`,
          }}
        >
          <RootHeader
            disableLoadingAnimation={disableLoadingAnimation}
            loadingAnimationType={loadingAnimationType}
          />

          <main className="flex-1 overflow-hidden py-1">
            <List />
            <Grid />
          </main>

          <RootFooter />
        </div>
      </foreignObject>
    </svg>
    // </div>
  );
}

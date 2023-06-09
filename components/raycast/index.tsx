"use client";
import { List } from "@/components/raycast/list";
import { Grid } from "@/components/raycast/grid";
import { RootFooter } from "@/components/raycast/root-footer";
import { RootHeader } from "@/components/raycast/root-header";
import { useRaycastTheme } from "@/components/raycast-theme-provider";

export function Raycast({
  disableLoadingAnimation,
  loadingAnimationType = "animated",
}: {
  disableLoadingAnimation?: boolean;
  loadingAnimationType?: "animated" | "static";
}) {
  const { activeTheme } = useRaycastTheme();

  if (!activeTheme) {
    return null;
  }

  return (
    <div
      data-raycast
      className={`w-[750px] h-[475px] rounded-4 backdrop-blur-[72px] shadow flex flex-col relative select-none shrink-0 text-left overflow-hidden`}
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

      <RootFooter mode={activeTheme.appearance} />
    </div>
  );
}

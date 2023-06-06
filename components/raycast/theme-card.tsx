"use client";
import { Raycast } from "@/components/raycast";
import { useRaycastTheme } from "@/components/raycast-theme-provider";
import { Theme } from "@/lib/theme";

export function ThemeCard({ theme: raycastTheme }: { theme: Theme }) {
  const { activeTheme, setActiveTheme } = useRaycastTheme();

  const style = Object.fromEntries(
    Object.entries(raycastTheme.colors).map(([key, value]) => [
      "--" + key,
      value,
    ])
  );

  return (
    <button
      key={raycastTheme.name}
      className={`flex flex-col ring-2 ring-inset p-3 gap-3 rounded-4 overflow-hidden h-full aspect-[16/9] shrink-0 ${
        activeTheme.slug === raycastTheme.slug
          ? "ring-[rgb(var(--selection))]"
          : "ring-[rgba(0,0,0,0.2)] dark:ring-[rgba(255,255,255,0.2)]"
      }`}
      onClick={() => {
        setActiveTheme(raycastTheme);
      }}
      style={style}
    >
      <div
        className="overflow-hidden rounded-3 flex-1 w-full"
        style={
          {
            // margin: "4px",
            // width: "calc(100% - 0px)",
            // height: "calc(100% - 0px)",
          }
        }
      >
        <div className="rounded-3">
          <Raycast
            disableLoadingAnimation={activeTheme.slug !== raycastTheme.slug}
            loadingAnimationType="static"
          />
        </div>
      </div>
      <div className="text-2">
        <span className="font-semibold">{raycastTheme.name} </span>
        <span className="opacity-50">by {raycastTheme.author}</span>
      </div>
    </button>
  );
}

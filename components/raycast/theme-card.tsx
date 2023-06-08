"use client";
import { Raycast } from "@/components/raycast";
import { useRaycastTheme } from "@/components/raycast-theme-provider";
import { Theme } from "@/lib/theme";
import React from "react";

export function ThemeCard({ theme: raycastTheme }: { theme?: Theme }) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { activeTheme, setActiveTheme } = useRaycastTheme();

  const style = Object.fromEntries(
    Object.entries(raycastTheme?.colors || {}).map(([key, value]) => [
      "--" + key,
      value,
    ])
  );

  const isActiveTheme = activeTheme && activeTheme?.slug === raycastTheme?.slug;

  React.useEffect(() => {
    if (isActiveTheme) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [isActiveTheme, activeTheme]);

  return (
    <button
      ref={ref}
      className={`snap-always snap-center flex flex-col ring-2 ring-inset p-3 gap-3 rounded-4 overflow-hidden h-full aspect-[16/9] shrink-0 ${
        isActiveTheme
          ? "ring-[rgb(var(--selection))]"
          : "ring-[rgba(0,0,0,0.2)] dark:ring-[rgba(255,255,255,0.2)]"
      }`}
      onClick={() => {
        raycastTheme ? setActiveTheme(raycastTheme) : {};
      }}
      style={style}
    >
      <div className="overflow-hidden rounded-3 flex-1 w-full">
        <div className="rounded-3">
          <Raycast
            disableLoadingAnimation={!isActiveTheme}
            loadingAnimationType="static"
          />
        </div>
      </div>
      <div className="text-2">
        {raycastTheme && (
          <>
            <span className="font-semibold">{raycastTheme?.name} </span>
            <span className="opacity-50">by {raycastTheme?.author}</span>
          </>
        )}
      </div>
    </button>
  );
}

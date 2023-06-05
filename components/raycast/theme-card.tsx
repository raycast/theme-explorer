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
      className={`ring-2 p-0 rounded-4 overflow-hidden aspect-[16/9] h-full shrink-0 ${
        activeTheme.slug === raycastTheme.slug
          ? "ring-[rgb(var(--selection))]"
          : "ring-white/0"
      }`}
      onClick={() => {
        setActiveTheme(raycastTheme);
      }}
      style={style}
    >
      <div
        className="overflow-hidden"
        style={{
          // margin: "5px",
          width: "calc(100%)",
          height: "calc(100%)",
        }}
      >
        <div
          className="rounded-4"
          style={{
            backgroundColor:
              raycastTheme.appearance === "dark" ? "black" : "white",
          }}
        >
          <Raycast
            text={`${raycastTheme.name} by ${raycastTheme.author}`}
            disableLoadingAnimation={activeTheme.slug !== raycastTheme.slug}
            loadingAnimationType="static"
          />
        </div>
      </div>
    </button>
  );
}

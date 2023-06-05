"use client";
import { Raycast } from "@/components/raycast";
import { useTheme } from "@/components/raycast-theme-provider";
import { Theme } from "@/lib/theme";

export function ThemeCard({ theme }: { theme: Theme }) {
  const { activeTheme, setActiveTheme } = useTheme();

  const style = Object.fromEntries(
    Object.entries(theme.colors).map(([key, value]) => ["--" + key, value])
  );

  return (
    <button
      key={theme.name}
      className={`ring-1 p-3 rounded-4 overflow-hidden aspect-[16/9] h-full shrink-0 ${
        activeTheme.slug === theme.slug
          ? "ring-[rgb(var(--selection))]"
          : "ring-white/20"
      }`}
      onClick={() => setActiveTheme(theme)}
      style={style}
    >
      <div
        className="overflow-hidden"
        style={{
          margin: "5px",
          width: "calc(100% - 10px)",
          height: "calc(100% - 10px)",
        }}
      >
        <div
          className="rounded-4"
          style={{
            backgroundColor: theme.appearance === "dark" ? "black" : "white",
          }}
        >
          <Raycast
            disableLoadingAnimation={activeTheme.slug !== theme.slug}
            loadingAnimationType="static"
          />
        </div>
      </div>
    </button>
  );
}

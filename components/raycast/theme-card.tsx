"use client";
import { Raycast } from "@/components/raycast";
import { useTheme } from "@/components/raycast-theme-provider";
import { Theme } from "@/lib/theme";

export function ThemeCard({ theme }: { theme: Theme }) {
  const { activeTheme, setActiveTheme } = useTheme();

  return (
    <button
      key={theme.name}
      className={`ring-1 m-2 p-3 rounded-4 overflow-hidden w-[342px] h-[214px] shrink-0 ${
        activeTheme.slug === theme.slug ? "ring-[#56c2dd]" : "ring-slate-800"
      }`}
      onClick={() => setActiveTheme(theme)}
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
          <Raycast theme={theme} size="normal" disableLoadingAnimation />
        </div>
      </div>
    </button>
  );
}

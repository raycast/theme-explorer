"use client";
import { List } from "@/components/raycast/list";
import { Grid } from "@/components/raycast/grid";
import { RootFooter } from "@/components/raycast/root-footer";
import { RootHeader } from "@/components/raycast/root-header";
import { useRaycastTheme } from "@/components/raycast-theme-provider";
import { Theme } from "@/lib/theme";
import { alpha } from "@/lib/alpha";

export function Raycast({
  theme: forcedTheme,
  disableLoadingAnimation,
  thumbnail,
}: {
  theme?: Theme;
  disableLoadingAnimation?: boolean;
  thumbnail?: boolean;
}) {
  const { activeTheme } = useRaycastTheme();

  const theme = forcedTheme || activeTheme;

  const style = {
    "--backgroundPrimary": `${theme?.colors.background}${alpha["40"]}`,
    "--backgroundSecondary": `${theme?.colors.backgroundSecondary}${alpha["40"]}`,
    "--border-100": `${theme?.colors.text}${alpha["10"]}`,
    "--border-200": `${theme?.colors.text}${alpha["20"]}`,
    "--text": `${theme?.colors.text}`,
    "--text-100": `${theme?.colors.text}${alpha["10"]}`,
    "--text-400": `${theme?.colors.text}${alpha["40"]}`,
    "--text-600": `${theme?.colors.text}${alpha["60"]}`,
    "--loader": `${theme?.colors.loader}`,
    "--selection": `${theme?.colors.selection}`,
    "--selection-100": `${theme?.colors.selection}${alpha["10"]}`,
    "--green": `${theme?.colors.green}`,
    "--green-100": `${theme?.colors.green}${alpha["15"]}`,
    "--yellow": `${theme?.colors.yellow}`,
    "--yellow-100": `${theme?.colors.yellow}${alpha["15"]}`,
    "--red": `${theme?.colors.red}`,
    "--red-100": `${theme?.colors.red}${alpha["15"]}`,
    "--orange": `${theme?.colors.orange}`,
    "--orange-100": `${theme?.colors.orange}${alpha["15"]}`,
    "--blue": `${theme?.colors.blue}`,
    "--blue-100": `${theme?.colors.blue}${alpha["15"]}`,
    "--purple": `${theme?.colors.purple}`,
    "--purple-100": `${theme?.colors.purple}${alpha["15"]}`,
    "--magenta": `${theme?.colors.magenta}`,
    "--magenta-100": `${theme?.colors.magenta}${alpha["15"]}`,
  };

  return (
    <div
      data-raycast
      className={`w-[750px] h-[475px] rounded-4 shadow flex flex-col relative select-none shrink-0 text-left overflow-hidden`}
      style={{
        ...style,
        zIndex: 2,
        backgroundColor:
          activeTheme?.appearance === "dark"
            ? "rgba(127, 127, 127, 0.2)"
            : "rgba(255, 255, 255, 0.2)",
        backgroundImage: `linear-gradient(to bottom, var(--backgroundPrimary) 0%, var(--backgroundSecondary) 70%)`,
        boxShadow: `inset 0 0 0 1px var(--border-200)`,
        backdropFilter: !thumbnail ? `blur(72px)` : undefined,
      }}
    >
      <RootHeader
        disableLoadingAnimation={disableLoadingAnimation}
        loadingAnimationType={thumbnail ? "static" : "animated"}
      />

      <main className="flex-1 overflow-hidden py-1">
        <List />
        <Grid />
      </main>

      <RootFooter mode={theme?.appearance} />
    </div>
  );
}

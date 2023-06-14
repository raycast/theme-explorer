"use client";
import { Dot } from "@/components/dot";
import { useRaycastTheme } from "@/components/raycast-theme-provider";

export function Dock() {
  const { activeTheme } = useRaycastTheme();

  return (
    <div
      className="hidden tallx2:flex gap-4 absolute z-10 bottom-5 left-1/2 
      backdrop-blur-[20px] rounded-5 
      bg-white/20
      dark:bg-black/20
      shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)]
      dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)]
      py-[12px] px-[16px] transition-all"
      style={{ transform: "translateX(-50%)" }}
    >
      <div className="text-black dark:text-white">
        <div className="text-4 font-medium">{activeTheme?.name}</div>

        {(activeTheme?.author || activeTheme?.authorUsername) && (
          <div className="text-2 opacity-50">by {activeTheme?.author}</div>
        )}
      </div>

      <div className="w-[1px] bg-white/30" />
      <div className="w-[45px]">
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <Dot
            size={18}
            color={activeTheme?.colors.background}
            colorSecondary={activeTheme?.colors.backgroundSecondary}
          />
          <Dot size={18} color={activeTheme?.colors.text} />
          <Dot size={18} color={activeTheme?.colors.selection} />
          <Dot size={18} color={activeTheme?.colors.loader} />
        </div>
      </div>
    </div>
  );
}

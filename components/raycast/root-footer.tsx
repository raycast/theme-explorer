import { RaycastIcon } from "@/components/icons";
import { useTheme } from "@/components/raycast";
import chroma from "chroma-js";

export function RootFooter() {
  const theme = useTheme();

  return (
    <footer
      className={`shrink-0 h-[40px] px-3 border-t flex items-center justify-between gap-2  z-10 ${
        theme.appearance === "dark" ? "bg-black/10" : "bg-white/10"
      }`}
      style={{
        borderColor: chroma(theme.colors.text).alpha(0.1).css(),
      }}
    >
      <div
        className="flex gap-3 items-center text-2"
        style={{
          color: chroma(theme.colors.text).alpha(0.6).css(),
        }}
      >
        <RaycastIcon mode={theme.appearance} size={20} />
        <div>Theme Explorer</div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="flex gap-3 items-center">
          <div
            className=" text-1 font-semibold"
            style={{
              color: theme.colors.text,
            }}
          >
            Open Command
          </div>
          <div
            className="w-[24px] h-[24px] rounded-2 flex items-center justify-center bg-white/10 white"
            style={{
              backgroundColor: chroma(theme.colors.text).alpha(0.1).css(),
              color: theme.colors.text,
            }}
          >
            <svg
              width="12"
              height="9"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13477 7.53906L0.564453 5L3.13477 2.46094V7.53906ZM2.32227 5.57812V4.42187H9.4082V5.57812H2.32227ZM8.28711 5.57812V0.5H9.43164V5.57812H8.28711Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="w-[2px] h-[12px] bg-white/10" />
        <div className="flex gap-3 items-center">
          <div
            className="text-1 font-semibold"
            style={{
              color: chroma(theme.colors.text).alpha(0.6).css(),
            }}
          >
            Actions
          </div>
          <div
            className="w-[24px] h-[24px] rounded-2 flex items-center justify-center bg-white/10 white text-1"
            style={{
              backgroundColor: chroma(theme.colors.text).alpha(0.1).css(),
              color: theme.colors.text,
            }}
          >
            ⌘
          </div>
          <div
            className="w-[24px] h-[24px] rounded-2 flex items-center justify-center bg-white/10 white text-1 -ml-2"
            style={{
              backgroundColor: chroma(theme.colors.text).alpha(0.1).css(),
              color: theme.colors.text,
            }}
          >
            K
          </div>
        </div>
      </div>
    </footer>
  );
}

import { RaycastIcon } from "@/components/icons";

export function RootFooter({ mode = "dark" }: { mode?: "dark" | "light" }) {
  return (
    <footer
      className="shrink-0 h-[40px] px-3 border-t flex items-center justify-between gap-2 z-10 bg-white/20 dark:bg-white/5"
      style={{
        borderColor: "rgba(var(--text), 0.1)",
      }}
    >
      <div
        className="flex gap-3 items-center text-2"
        style={{
          color: "rgba(var(--text), 0.6)",
        }}
      >
        <RaycastIcon mode={mode} size={20} />
        <div>Theme Explorer</div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="flex gap-3 items-center">
          <div
            className=" text-1 font-semibold"
            style={{ color: "rgb(var(--text))" }}
          >
            Open Command
          </div>
          <div
            className="w-[24px] h-[24px] rounded-2 flex items-center justify-center"
            style={{
              backgroundColor: "rgba(var(--text), 0.1)",
              color: "rgb(var(--text))",
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
        <div
          className="w-[2px] h-[12px]"
          style={{ backgroundColor: "rgba(var(--text), 0.1)" }}
        />
        <div className="flex gap-3 items-center">
          <div
            className="text-1 font-semibold"
            style={{ color: "rgba(var(--text), 0.6)" }}
          >
            Actions
          </div>
          <div
            className="w-[24px] h-[24px] rounded-2 flex items-center justify-center text-1"
            style={{
              backgroundColor: "rgba(var(--text), 0.1)",
              color: "rgb(var(--text))",
            }}
          >
            ⌘
          </div>
          <div
            className="w-[24px] h-[24px] rounded-2 flex items-center justify-center text-1 -ml-2"
            style={{
              backgroundColor: "rgba(var(--text), 0.1)",
              color: "rgb(var(--text))",
            }}
          >
            K
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Theme } from "@/lib/theme";
import chroma from "chroma-js";

export function RootHeader({
  theme,
  disableLoadingAnimation,
}: {
  theme: Theme;
  disableLoadingAnimation?: boolean;
}) {
  return (
    <header
      className="h-[56px] px-4 border-b flex items-center gap-2 shrink-0 relative"
      style={{
        borderColor: chroma(theme.colors.text).alpha(0.1).css(),
      }}
    >
      <div
        className="w-[24px] h-[24px] rounded-2 flex items-center justify-center"
        style={{
          backgroundColor: chroma(theme.colors.text).alpha(0.1).css(),
          color: theme.colors.text,
        }}
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
        >
          <path
            d="M6.25 4.75L2.75 8M2.75 8L6.25 11.25M2.75 8H13.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <input
        type="text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        placeholder="Search..."
        className="w-full leading-none bg-transparent border-none outline-none placeholder-[--placeholder-color] text-4"
        style={{
          // @ts-ignore
          "--placeholder-color": chroma(theme.colors.text).alpha(0.4).css(),
        }}
      />
      {!disableLoadingAnimation && (
        <div
          className="absolute top-full w-[200px] h-[1px] "
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.colors.loader}, rgba(255, 255, 255, 0))`,
            animation: "nightRider 2s ease-in-out infinite",
          }}
        />
      )}
    </header>
  );
}

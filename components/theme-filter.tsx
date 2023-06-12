"use client";
import React from "react";
import { Theme } from "@/lib/theme";
import { useLastVisitedTheme } from "@/components/navigation-history";
import { useRaycastTheme } from "@/components/raycast-theme-provider";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeFilter({ themes }: { themes: Theme[] }) {
  const { activeTheme, setActiveTheme } = useRaycastTheme();
  const { previousActiveTheme, setPreviousActiveTheme } = useLastVisitedTheme();

  const lightThemes = themes.filter(
    (rayTheme) => rayTheme.appearance === "light"
  );
  const darkThemes = themes.filter(
    (rayTheme) => rayTheme.appearance === "dark"
  );

  return (
    <span className="inline-flex items-center text-3 font-medium">
      <Button
        disabled={activeTheme?.appearance === "dark"}
        className={`rounded-tl-2 rounded-bl-2`}
        onClick={() => {
          setPreviousActiveTheme(activeTheme);
          setActiveTheme(previousActiveTheme || darkThemes[0]);
        }}
      >
        <MoonIcon size={16} />
      </Button>
      <Button
        disabled={activeTheme?.appearance === "light"}
        className="ml-[-1px] rounded-tr-2 rounded-br-2"
        onClick={() => {
          setPreviousActiveTheme(activeTheme);
          setActiveTheme(previousActiveTheme || lightThemes[0]);
        }}
      >
        <SunIcon size={16} />
      </Button>
    </span>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={`h-[30px] flex items-center gap-2 px-4 outline-none relative
      bg-black/5
      dark:bg-transparent
      disabled:bg-transparent
      disabled:dark:bg-white/10
      hover:bg-black/10 
      dark:hover:bg-white/5
      dark:text-white/60
      disabled:dark:text-white
        disabled:z-10
        shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.1)] 
        disabled:shadow-[inset_0px_0px_0px_1px_#797979] 
        focus:shadow-[inset_0px_0px_0px_1px_#737373,0px_0px_0px_1px_#737373] 
        dark:shadow-[inset_0px_0px_0px_1px_#252525] 
        dark:disabled:shadow-[inset_0px_0px_0px_1px_#3B3B3B] 
        dark:focus:shadow-[inset_0px_0px_0px_1px_#484848,0px_0px_0px_1px_#484848] 
        ${className}`}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

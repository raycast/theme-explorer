"use client";
import React from "react";
import { Theme } from "@/lib/theme";
import { useRaycastTheme } from "@/components/raycast-theme-provider";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export function ThemeNavigation({ themes }: { themes: Theme[] }) {
  const { activeTheme, setActiveTheme } = useRaycastTheme();

  const lightThemes = themes.filter((theme) => theme.appearance === "light");
  const activeLightThemeIndex = lightThemes.findIndex(
    (theme) => theme.slug === activeTheme?.slug
  );
  const previousLightTheme = lightThemes[activeLightThemeIndex - 1];
  const nextLightTheme = lightThemes[activeLightThemeIndex + 1];

  const darkThemes = themes.filter((theme) => theme.appearance === "dark");

  const isDarkThemeActive = activeTheme?.appearance === "dark";

  const activeDarkThemeIndex = darkThemes.findIndex(
    (theme) => theme.slug === activeTheme?.slug
  );
  const previousDarkTheme = darkThemes[activeDarkThemeIndex - 1];
  const nextDarkTheme = darkThemes[activeDarkThemeIndex + 1];

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActiveTheme(
          isDarkThemeActive
            ? previousDarkTheme || darkThemes[0]
            : previousLightTheme || lightThemes[0]
        );
      } else if (event.key === "ArrowRight") {
        setActiveTheme(
          isDarkThemeActive
            ? nextDarkTheme || darkThemes[darkThemes.length - 1]
            : nextLightTheme || lightThemes[lightThemes.length - 1]
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    isDarkThemeActive,
    setActiveTheme,
    previousDarkTheme,
    darkThemes,
    previousLightTheme,
    lightThemes,
    nextDarkTheme,
    nextLightTheme,
  ]);

  return (
    <span className="inline-flex items-center text-3 font-medium">
      <Button
        disabled={isDarkThemeActive ? !previousDarkTheme : !previousLightTheme}
        className={`rounded-tl-2 rounded-bl-2`}
        onClick={() => {
          if (activeTheme?.appearance === "dark") {
            setActiveTheme(previousDarkTheme || darkThemes[0]);
          } else {
            setActiveTheme(previousLightTheme || lightThemes[0]);
          }
        }}
      >
        <ChevronLeftIcon size={16} />
      </Button>
      <Button
        disabled={isDarkThemeActive ? !nextDarkTheme : !nextLightTheme}
        className="ml-[-1px] rounded-tr-2 rounded-br-2"
        onClick={() => {
          if (activeTheme?.appearance === "dark") {
            setActiveTheme(nextDarkTheme || darkThemes[darkThemes.length - 1]);
          } else {
            setActiveTheme(
              nextLightTheme || lightThemes[lightThemes.length - 1]
            );
          }
        }}
      >
        <ChevronRightIcon size={16} />
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

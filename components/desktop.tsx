"use client";
import { MenuBar } from "@/components/menu-bar";
import Image from "next/image";
import lightWallpaper from "@/public/bg-light.jpeg";
import darkWallpaper from "@/public/bg-dark.jpeg";
import { useRaycastTheme } from "@/components/raycast-theme-provider";

export function Desktop({ children }: { children?: React.ReactNode }) {
  const { activeTheme } = useRaycastTheme();

  if (!activeTheme) {
    return (
      <div className="flex flex-1 h-full w-full ">
        <div className="flex flex-col md:items-center desktop:justify-center flex-1 p-5 relative overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-1 h-full w-full max-w-screen-2xl 2xl:rounded-b-4 rounded-t-0 mx-auto border border-black/20 border-t-0 dark:border-white/20"
      data-desktop
    >
      <div className="flex flex-col md:items-center desktop:justify-center flex-1 p-5 relative overflow-hidden bg-white dark:bg-black rounded-inherit">
        <MenuBar />

        <div className="relative" style={{ zIndex: 1 }}>
          {children}
        </div>

        <Image
          className="object-cover select-none pointer-events-none"
          data-hide-on-theme="light"
          src={darkWallpaper}
          fill
          placeholder="blur"
          quality={100}
          alt=""
        />
        <Image
          className="object-cover select-none pointer-events-none"
          data-hide-on-theme="dark"
          src={lightWallpaper}
          fill
          placeholder="blur"
          quality={100}
          alt=""
        />
      </div>
    </div>
  );
}

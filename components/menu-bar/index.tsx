"use client";
import { RaycastIcon } from "@/components/icons";
import { useTheme } from "@/components/raycast-theme-provider";
import chroma from "chroma-js";

export function MenuBar() {
  const { activeTheme } = useTheme();

  return (
    <div
      className={`hidden desktop:flex items-center justify-between h-[37px] px-[16px] py-[4px] backdrop-blur-[72px] w-full absolute top-0 left-0 text-2 ${
        activeTheme.appearance === "dark"
          ? "bg-black/30 text-white"
          : "bg-white/30 text-black"
      }`}
    >
      <div className="flex items-center gap-4">
        <RaycastIcon size={16} />
        <div className="font-semibold">Raycast</div>
        <div>Social</div>
        <div>Help</div>
      </div>
      <div className="flex items-center gap-4">
        <div>{getCurrentDate()}</div>
      </div>
    </div>
  );
}

export function getCurrentDate(): string {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day} ${month} ${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
}

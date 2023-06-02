"use client";
import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import { RaycastIcon } from "@/components/icons";
import { useTheme } from "@/components/raycast-theme-provider";

export function MenuBar() {
  const { activeTheme } = useTheme();

  return (
    <Menubar.Root
      className={`hidden desktop:flex items-center justify-between h-[37px] px-[16px] py-[4px] backdrop-blur-[72px] w-full absolute top-0 left-0 text-2 ${
        activeTheme.appearance === "dark"
          ? "bg-black/30 text-white"
          : "bg-white/30 text-black"
      }`}
    >
      <div className="flex items-center gap-[8px]">
        <RaycastIcon size={16} />

        <Menubar.Menu>
          <Trigger bold>Raycast</Trigger>
          <Content>
            <Item>About</Item>
            <Item>Download</Item>
            <Item>Documentation</Item>
          </Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Trigger>Social</Trigger>
          <Content>
            <Item>Slack</Item>
            <Item>Twitter</Item>
            <Item>Mastodon</Item>
            <Item>GitHub</Item>
          </Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Trigger>Help</Trigger>
          <Content>
            <Item>Uploading a Theme</Item>
            <Item>Installing a Theme</Item>
          </Content>
        </Menubar.Menu>
      </div>
      <div className="flex items-center gap-4">
        <div>{getCurrentDate()}</div>
      </div>
    </Menubar.Root>
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

function Content({ children }: { children: React.ReactNode }) {
  const { activeTheme } = useTheme();

  return (
    <Menubar.Portal>
      <Menubar.Content
        sideOffset={8}
        className={`rounded-2 p-1 min-w-[200px] backdrop-blur-[6px] text-2 leading-[22px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] ${
          activeTheme.appearance === "dark"
            ? "bg-white/50 text-black"
            : "bg-black/50 text-white"
        }`}
      >
        {children}
      </Menubar.Content>
    </Menubar.Portal>
  );
}

function Trigger({
  children,
  bold,
}: {
  children: React.ReactNode;
  bold?: boolean;
}) {
  const { activeTheme } = useTheme();

  return (
    <Menubar.Trigger
      className={`outline-none data-[state=open]:bg-[--active-bg] rounded-1 px-2 h-[25px] ${
        bold ? "font-semibold" : undefined
      }`}
      style={
        {
          "--active-bg":
            activeTheme.appearance === "dark"
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)",
        } as React.CSSProperties
      }
    >
      {children}
    </Menubar.Trigger>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <Menubar.Item
      className={`rounded-1 px-2 outline-none data-[highlighted]:bg-[#4D79DA] data-[highlighted]:text-white`}
    >
      {children}
    </Menubar.Item>
  );
}

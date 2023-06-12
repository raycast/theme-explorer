"use client";
import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import * as Dialog from "@radix-ui/react-dialog";
import { AppleIcon, RaycastIcon } from "@/components/icons";
import { useRaycastTheme } from "@/components/raycast-theme-provider";

export function MenuBar() {
  const { activeTheme } = useRaycastTheme();

  if (!activeTheme) {
    return null;
  }

  return (
    <Dialog.Root modal={false}>
      <Menubar.Root className="hidden desktop:flex items-center justify-between h-[37px] px-[16px] py-[4px] backdrop-blur-[72px] w-full absolute z-10 top-0 left-0 text-2 text-black dark:text-white dark:bg-black/30 bg-white/30 select-none">
        <div className="flex items-center gap-[8px]">
          <AppleIcon />

          <Menubar.Menu>
            <Trigger bold>Theme Explorer</Trigger>
            <Content>
              <Dialog.Trigger asChild>
                <Item>About</Item>
              </Dialog.Trigger>
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
          <RaycastIcon mode={activeTheme.appearance} size={16} />
          <div>{getCurrentDate()}</div>
        </div>
      </Menubar.Root>
      <Dialog.Content
        className="absolute z-20 left-1/2 top-1/2 w-[300px] dark:bg-black/60 backdrop-blur-[72px] outline-none py-6 pb-5 px-5 rounded-2 text-black/60 dark:text-white/60"
        style={{ transform: "translate(-50%, -50%)" }}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <Dialog.Close
          aria-label="Close About"
          className="w-[12px] h-[12px] bg-[#DD7265] outline-none cursor-auto rounded-full absolute top-4 left-4"
        >
          <span aria-hidden hidden>
            Close
          </span>
        </Dialog.Close>
        <div className="text-center flex flex-col gap-1 mb-5">
          <p className="text-3 font-semibold">Theme Explorer</p>
          <p className="text-3">v1.0.0</p>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <div className="text-black dark:text-white flex justify-between">
            Add to Raycast <Shortcut keys={["⌘", "⏎"]} />
          </div>
          <div className="text-black dark:text-white flex justify-between">
            Add to Raycast <Shortcut keys={["⌘", "⏎"]} />
          </div>
          <div className="text-black dark:text-white flex justify-between">
            Add to Raycast <Shortcut keys={["⌘", "⏎"]} />
          </div>
          <div className="text-black dark:text-white flex justify-between">
            Add to Raycast <Shortcut keys={["⌘", "⏎"]} />
          </div>
        </div>
        <p className="text-4 my-3 font-semibold">Adding your own theme</p>
        <p className="text-3 mb-3">
          Export your theme as a JSON config from Theme Studio.
        </p>
        <p className="text-3 mb-3">Upload it to the theme explorer repo.</p>
      </Dialog.Content>
    </Dialog.Root>
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
  return (
    <Menubar.Portal>
      <Menubar.Content
        sideOffset={8}
        className={`rounded-2 z-20 p-1 min-w-[200px] backdrop-blur-[6px] text-2 leading-[22px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] text-black dark:text-white bg-white/50 dark:bg-black/50`}
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
  return (
    <Menubar.Trigger
      className={`outline-none cursor-default data-[state=open]:bg-black/10 dark:data-[state=open]:bg-white/10 rounded-1 px-2 h-[25px] ${
        bold ? "font-semibold" : undefined
      }`}
    >
      {children}
    </Menubar.Trigger>
  );
}

const Item = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children, ...props }, ref) => (
    <Menubar.Item
      {...props}
      ref={ref}
      className="rounded-1 px-2 outline-none data-[highlighted]:bg-[#4D79DA] data-[highlighted]:text-white cursor-default"
    >
      {children}
    </Menubar.Item>
  )
);

Item.displayName = "MenubarItem";

function Shortcut({ keys }: { keys: string[] }) {
  return (
    <div className="inline-flex gap-1">
      {keys.map((key) => (
        <kbd
          key={key}
          className="bg-black/10 dark:bg-white/10 text-2 text-black text-white/60 h-[20px] w-[24px] rounded-1 items-center justify-center flex"
        >
          {key}
        </kbd>
      ))}
    </div>
  );
}

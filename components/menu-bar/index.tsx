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
                <Item>About Theme Explorer</Item>
              </Dialog.Trigger>
              <Item
                onSelect={() =>
                  window.open("https://raycast.com/pro", "_blank")
                }
              >
                Raycast Pro...
              </Item>
              <Separator />
              <Label>© Raycast Technologies 2023</Label>
            </Content>
          </Menubar.Menu>
          <Menubar.Menu>
            <Trigger>Social</Trigger>
            <Content>
              <Item
                onSelect={() =>
                  window.open("https://raycast.com/community", "_blank")
                }
              >
                Slack...
              </Item>
              <Item
                onSelect={() =>
                  window.open("https://twitter.com/raycastapp", "_blank")
                }
              >
                Twitter...
              </Item>
              <Item
                onSelect={() =>
                  window.open("https://mastodon.social/@raycast", "_blank")
                }
              >
                Mastodon...
              </Item>
              <Item
                onSelect={() =>
                  window.open("https://github.com/raycast", "_blank")
                }
              >
                GitHub...
              </Item>
            </Content>
          </Menubar.Menu>
          <Menubar.Menu>
            <Trigger>Help</Trigger>
            <Content>
              <Item
                onSelect={() =>
                  window.open(
                    "https://github.com/raycast/theme-explorer",
                    "_blank"
                  )
                }
              >
                Uploading a Theme...
              </Item>
              <Item
                onSelect={() =>
                  window.open("https://manual.raycast.com/", "_blank")
                }
              >
                Raycast Manual...
              </Item>
            </Content>
          </Menubar.Menu>
        </div>
        <div className="flex items-center gap-2">
          <Menubar.Menu>
            <Trigger>
              <RaycastIcon mode={activeTheme.appearance} size={16} />
            </Trigger>
            <Content align="end">
              <Label>Raycast</Label>
              <Item
                onSelect={() => window.open("https://raycast.com", "_blank")}
              >
                Download...
              </Item>
              <Item
                onSelect={() =>
                  window.open("https://raycast.com/store", "_blank")
                }
              >
                Extension Store...
              </Item>
              <Item
                onSelect={() =>
                  window.open("https://manual.raycast.com/", "_blank")
                }
              >
                Manual...
              </Item>
              <Item
                onSelect={() =>
                  window.open("https://raycast.com/changelog", "_blank")
                }
              >
                Changelog...
              </Item>
              <Separator />
              <Label>More by Raycsast</Label>
              <Item
                onSelect={() =>
                  window.open("https://snippets.ray.so", "_blank")
                }
              >
                Snippets...
              </Item>
              <Item
                onSelect={() => window.open("https://prompts.ray.so", "_blank")}
              >
                Prompts...
              </Item>
              <Item onSelect={() => window.open("https://ray.so", "_blank")}>
                Code Snippets...
              </Item>
              <Item
                onSelect={() => window.open("https://icon.ray.so", "_blank")}
              >
                Icon Maker...
              </Item>
              <Item
                onSelect={() =>
                  window.open("https://raycast.com/wallpapers", "_blank")
                }
              >
                Wallpapers...
              </Item>
            </Content>
          </Menubar.Menu>
          <div>{getCurrentDate()}</div>
        </div>
      </Menubar.Root>

      <Dialog.Content
        className="absolute z-20 left-1/2 top-1/2 w-[300px] dark:bg-black/60 backdrop-blur-[72px] outline-none py-6 pb-5 px-5 rounded-2 text-black/60 dark:text-white/60 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] border-t border-black/20 dark:border-white/60"
        style={{ transform: "translate(-50%, -50%)" }}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <Dialog.Close
          aria-label="Close About"
          className="w-[12px] h-[12px] bg-[#DD7265] outline-none cursor-auto rounded-full absolute top-4 left-4 text-transparent hover:text-black/60 flex justify-center items-center text-1 leading-[12px]"
        >
          <span className="-mt-[1px]">×</span>
          <span aria-hidden hidden>
            Close
          </span>
        </Dialog.Close>
        <div className="text-center flex flex-col mb-5">
          <p className="text-3 font-semibold">Theme Explorer</p>
          <p className="text-3">v1.0.0</p>
        </div>
        <div className="flex flex-col gap-2 mb-5 font-semibold text-black dark:text-white text-2">
          <div className="flex justify-between">
            Add to Raycast <Shortcut keys={["⌘", "⏎"]} />
          </div>
          <div className="flex justify-between">
            Download JSON <Shortcut keys={["⌘", "D"]} />
          </div>
          <div className="flex justify-between">
            Copy JSON <Shortcut keys={["⌘", "⌥", "C"]} />
          </div>
          <div className="flex justify-between">
            Copy Share URL <Shortcut keys={["⌘", "⇧", "C"]} />
          </div>
          <div className="flex justify-between">
            Select Next <Shortcut keys={["→"]} />
          </div>
          <div className="flex justify-between">
            Select Previous <Shortcut keys={["←"]} />
          </div>
        </div>
        <div>
          <p className="text-4 my-3 font-semibold text-black dark:text-white">
            Adding your own theme
          </p>
          <p className="text-2 mb-3">
            Export your theme as JSON from Theme Studio and upload it to the{" "}
            <a
              href="https://github.com/raycast/theme-explorer/"
              title="Theme Explorer GitHub Repo"
              className="text-black dark:text-white underline"
            >
              Theme Explorer GitHub repo
            </a>
            .
          </p>
        </div>
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

function Content({
  children,
  align = "start",
}: {
  children: React.ReactNode;
  align?: "start" | "end";
}) {
  return (
    <Menubar.Portal>
      <Menubar.Content
        align={align}
        sideOffset={8}
        className={`rounded-2 z-20 p-1 min-w-[200px] backdrop-blur-[6px] text-2 leading-[22px] 
        text-black 
        dark:text-white 
        bg-white/50 
        dark:bg-neutral-700/40
        shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_10px_38px_-10px_rgba(22,23,24,0.35),_0px_10px_20px_-15px_rgba(22,23,24,0.2)] 
        dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.2),0px_10px_38px_-10px_rgba(22,23,24,0.35),_0px_10px_20px_-15px_rgba(22,23,24,0.2)] 
        `}
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

const Item = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; onSelect?: () => void }
>(({ children, ...props }, ref) => (
  <Menubar.Item
    {...props}
    ref={ref}
    className="rounded-1 px-2 outline-none data-[highlighted]:bg-[#4D79DA] data-[highlighted]:text-white cursor-default"
  >
    {children}
  </Menubar.Item>
));

function Separator() {
  return (
    <Menubar.Separator className="h-[1px] bg-black/10 dark:bg-white/10 my-1 mx-2" />
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <Menubar.Label className="text-black/60 dark:text-white/60 px-2">
      {children}
    </Menubar.Label>
  );
}

Item.displayName = "MenubarItem";

function Shortcut({ keys }: { keys: string[] }) {
  return (
    <div className="inline-flex gap-1">
      {keys.map((key) => (
        <kbd
          key={key}
          className="bg-black/10 dark:bg-white/10 text-2 text-black dark:text-white/60 h-[20px] w-[24px] rounded-1 items-center justify-center flex font-medium"
        >
          {key}
        </kbd>
      ))}
    </div>
  );
}

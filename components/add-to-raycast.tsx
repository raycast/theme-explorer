"use client";
import React from "react";
import { ChevronDownIcon, PlusIcon } from "@/components/icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { isTouchDevice } from "@/lib/isTouchDevice";
import { useRaycastTheme } from "@/components/raycast-theme-provider";
import copy from "copy-to-clipboard";
import { makeRaycastImportUrl } from "@/lib/url";

export function AddToRaycast() {
  const [isTouch, setIsTouch] = React.useState<boolean | null>(null);
  const [showActions, setShowActions] = React.useState(false);
  const { activeTheme } = useRaycastTheme();

  const handleCopyTheme = React.useCallback(() => {
    if (!activeTheme) return;
    const { slug, ...theme } = activeTheme;
    copy(JSON.stringify(theme, null, 2));
  }, [activeTheme]);

  const handleCopyUrl = React.useCallback(() => {
    if (!activeTheme) return;
    const { slug } = activeTheme;
    copy(`https://themes.ray.so/${slug}`);
  }, [activeTheme]);

  const handleDownload = React.useCallback(() => {
    if (!activeTheme) return;
    const { slug, ...theme } = activeTheme;
    const encodedThemeData = encodeURIComponent(JSON.stringify(theme, null, 2));
    const jsonString = `data:text/json;chatset=utf-8,${encodedThemeData}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `${theme.name}.json`;
    link.click();
  }, [activeTheme]);

  const handleAddToRaycast = React.useCallback(() => {
    if (!activeTheme) return;
    window.open(makeRaycastImportUrl(activeTheme));
  }, [activeTheme]);

  React.useEffect(() => {
    setIsTouch(isTouchDevice());
  }, [isTouch, setIsTouch]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === "k") {
        setShowActions((prev) => !prev);
      }

      // key === "c" doesn't work when using alt key, so we use keCode instead (67)
      if (event.keyCode === 67 && event.metaKey && event.altKey) {
        event.preventDefault();
        handleCopyTheme();
      }

      if (event.key === "c" && event.metaKey && event.shiftKey) {
        event.preventDefault();
        handleCopyUrl();
      }

      if (event.key === "d" && event.metaKey) {
        event.preventDefault();
        handleDownload();
      }

      if (event.key === "Enter" && event.metaKey) {
        event.preventDefault();
        handleAddToRaycast();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCopyTheme, handleCopyUrl, handleDownload, handleAddToRaycast]);

  return !isTouch ? (
    <span className="inline-flex items-center text-3 font-medium shadow-[0px_0px_29px_10px_rgba(0,0,0,0.03)] dark:shadow-[0px_0px_29px_10px_rgba(255,255,255,.06)] rounded-2">
      <Button
        className="flex-1 rounded-tl-2 rounded-bl-2"
        onClick={() => handleAddToRaycast()}
      >
        <PlusIcon size={16} /> Add to Raycast
      </Button>

      <DropdownMenu.Root open={showActions} onOpenChange={setShowActions}>
        <DropdownMenu.Trigger asChild>
          <Button className="ml-[-1px] rounded-tr-2 rounded-br-2">
            <ChevronDownIcon size={16} />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={8}
            className="rounded-2 z-20 p-1 min-w-[200px] backdrop-blur-[6px] text-2 leading-[22px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] text-black dark:text-white bg-white/50 dark:bg-black/50"
          >
            <Item onSelect={() => handleDownload()}>
              Download JSON
              <Shortcut keys={["⌘", "D"]} />
            </Item>
            <Item onSelect={() => handleCopyTheme()}>
              Copy JSON
              <Shortcut keys={["⌘", "⌥", "C"]} />
            </Item>
            <Item onSelect={() => handleCopyUrl()}>
              Copy URL to share
              <Shortcut keys={["⌘", "⇧", "C"]} />
            </Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </span>
  ) : null;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => (
    <button
      {...rest}
      ref={ref}
      className={`h-[30px] flex items-center gap-2 px-4 outline-none
        bg-white/10
        dark:bg-black/10
        hover:bg-white/50 
        dark:hover:bg-black/50 
        shadow-[inset_0px_0px_0px_1px_#737373,0px_0px_29px_10px_rgba(0,0,0,0.06)] 
        focus:shadow-[inset_0px_0px_0px_1px_#737373,0px_0px_0px_1px_#737373] 
        dark:shadow-[inset_0px_0px_0px_1px_#484848] 
        dark:focus:shadow-[inset_0px_0px_0px_1px_#484848,0px_0px_0px_1px_#484848] 
        ${className}`}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

function Item({
  children,
  onSelect,
}: {
  children: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <DropdownMenu.Item
      className="flex justify-between gap-3 rounded-1 pl-2 pr-1 py-1 outline-none 
      data-[highlighted]:bg-black/10 
      dark:data-[highlighted]:bg-white/10 
      
      cursor-default"
      onSelect={onSelect}
    >
      {children}
    </DropdownMenu.Item>
  );
}

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

"use client";
import React from "react";
import { ChevronDownIcon, PlusIcon } from "@/components/icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function AddToRaycast() {
  return (
    <span className="inline-flex items-center text-3 font-medium">
      <Button className="flex-1 rounded-tl-2 rounded-bl-2">
        <PlusIcon size={16} /> Add to Raycast
      </Button>

      <DropdownMenu.Root>
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
            <DropdownMenu.Item className="rounded-1 px-2 outline-none data-[highlighted]:bg-[black] dark:data-[highlighted]:bg-[white] data-[highlighted]:text-white dark:data-[highlighted]:text-black cursor-default">
              Copy JSON
            </DropdownMenu.Item>
            <DropdownMenu.Item className="rounded-1 px-2 outline-none data-[highlighted]:bg-[black] dark:data-[highlighted]:bg-[white] data-[highlighted]:text-white dark:data-[highlighted]:text-black cursor-default">
              Copy URL to share
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </span>
  );
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
        shadow-[inset_0px_0px_0px_1px_#737373] 
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

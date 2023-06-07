import { MenuBar } from "@/components/menu-bar";
import { Theme } from "@/lib/theme";
import Image from "next/image";

export function Desktop({
  children,
  theme,
}: {
  children?: React.ReactNode;
  theme: Theme;
}) {
  const style = Object.fromEntries(
    Object.entries(theme.colors).map(([key, value]) => ["--" + key, value])
  );

  return (
    <div
      className="flex flex-1 h-full w-full max-w-screen-2xl 2xl:rounded-b-4 rounded-t-0 mx-auto border border-black/20 border-t-0 dark:border-white/20"
      data-desktop
    >
      <div
        className="flex flex-col md:items-center md:justify-center flex-1 p-7 relative overflow-hidden bg-white dark:bg-black  rounded-inherit"
        style={{
          transition: "all 0.3s ease",
          ...style,
        }}
      >
        <MenuBar />
        <div className="relative" style={{ zIndex: 1 }}>
          {children}
        </div>
        <Image
          className="object-cover"
          data-hide-on-theme="light"
          src="/bg-dark.jpeg"
          fill
          quality={100}
          alt=""
        />
        <Image
          className="object-cover"
          data-hide-on-theme="dark"
          src="/bg-light.jpeg"
          fill
          quality={100}
          alt=""
        />
      </div>
    </div>
  );
}

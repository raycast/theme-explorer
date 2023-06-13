import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { getAllThemes } from "@/lib/theme";
import { ThemeControls } from "@/components/theme-controls";
import { Loader } from "@/components/loader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Theme Explorer",
  description: "By Raycast",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themes = await getAllThemes();

  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <Providers themes={themes}>
          <div className="flex flex-col h-[100dvh] items-center">
            <div className="flex flex-col flex-1 overflow-hidden shadow-[0px_0px_29px_10px_rgba(0,0,0,0.06)] dark:shadow-[0px_0px_29px_10px_rgba(255,255,255,.06)] max-w-screen-2xl w-full 2xl:rounded-b-4 rounded-t-0">
              {children}
            </div>
            <ThemeControls themes={themes} />
            <ThemeSwitcher themes={themes} />
          </div>
          <Loader />
        </Providers>
      </body>
    </html>
  );
}

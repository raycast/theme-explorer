import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { getAllThemes } from "@/lib/theme";
import { ThemeFilter } from "@/components/theme-filter";
import "./globals.css";
import { ThemeControls } from "@/components/theme-controls";
import { Loader } from "@/components/loader";

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
          <div className="flex flex-col gap-5 h-[100dvh]">
            <div className="flex flex-col flex-1 overflow-hidden">
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

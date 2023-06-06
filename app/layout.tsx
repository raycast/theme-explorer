import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { getAllThemes } from "@/lib/theme";
import { ThemeFilter } from "@/components/theme-filter";
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
      <body className={`${inter.className}`}>
        <Providers themes={themes}>
          <div className="flex flex-col h-screen">
            <div className="flex flex-col flex-1">{children}</div>
            <div className="flex justify-between pt-5 px-5 bg-[--bg]">
              <ThemeFilter themes={themes} />
              <button className="rounded-2 border h-[30px] inline-flex px-3 items-center text-3">
                Add to Raycast
              </button>
              <div></div>
            </div>
            <ThemeSwitcher themes={themes} />
          </div>
        </Providers>
      </body>
    </html>
  );
}

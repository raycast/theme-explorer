import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { ServerThemeProvider } from "@wits/next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Theme Explorer",
  description: "By Raycast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
        <body className={`${inter.className}`}>
          <Providers>
            <div className="flex flex-col h-screen">{children}</div>
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}

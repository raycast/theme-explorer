import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/raycast-theme-provider";
import "./globals.css";

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
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

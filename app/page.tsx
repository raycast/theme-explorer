import { getAllThemes } from "@/lib/theme";
import { redirect } from "next/navigation";

export default async function Home() {
  const themes = await getAllThemes();
  const darkThemes = themes.filter(
    (rayTheme) => rayTheme.appearance === "dark"
  );
  redirect(darkThemes[0].slug);
}

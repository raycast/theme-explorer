import { AddToRaycast } from "@/components/add-to-raycast";
import { ThemeFilter } from "@/components/theme-filter";
import { ThemeNavigation } from "@/components/theme-navigation";
import { Theme } from "@/lib/theme";

export function ThemeControls({ themes }: { themes: Theme[] }) {
  return (
    <div
      data-theme-controls
      className="flex justify-between mt-5 px-4 w-full max-w-screen-2xl mx-auto h-[30px]"
    >
      <ThemeFilter themes={themes} />
      <AddToRaycast />
      <ThemeNavigation themes={themes} />
    </div>
  );
}

import { CheckIcon } from "@/components/icons";
import { useTheme } from "@/components/raycast";
import chroma from "chroma-js";

export function List() {
  const theme = useTheme();

  return (
    <div
      className="py-1 px-2"
      style={{ color: chroma(theme.colors.text).css() }}
    >
      <div
        className="p-2 text-1 leading-none font-medium tracking-[0.1px]"
        style={{ color: chroma(theme.colors.text).alpha(0.6).css() }}
      >
        List
      </div>
      <div
        className="flex items-center gap-3 h-[40px] px-2 rounded-3"
        style={{
          backgroundColor: chroma(theme.colors.selection).alpha(0.1).css(),
        }}
      >
        <div>
          <CheckIcon />
        </div>
        <div className="text-2 leading-none">Primary Text</div>
      </div>
      <div className="flex items-center gap-3 h-[40px] px-2 rounded-3">
        <div>
          <CheckIcon />
        </div>
        <div className=" text-2 leading-none">Primary Text</div>
      </div>
    </div>
  );
}

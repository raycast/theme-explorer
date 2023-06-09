import { RaycastIcon } from "@/components/icons";

export function Loader() {
  return (
    <div
      data-loader
      className="flex items-center justify-center bg-neutral-900 text-white"
    >
      <div className="flex flex-col items-center gap-[82px]">
        <RaycastIcon size={96} />

        <div className="w-[193px] h-[4px] rounded-full bg-white/20 overflow-hidden">
          <div
            data-loader-progress
            className="w-full h-full rounded-full bg-white"
          ></div>
        </div>
      </div>
    </div>
  );
}

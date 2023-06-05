import { CheckIcon } from "@/components/icons";

export function List() {
  return (
    <div
      className="py-1 px-2"
      style={{
        color: "rgb(var(--text))",
      }}
    >
      <div
        className="p-2 text-1 leading-none font-medium tracking-[0.1px]"
        style={{
          color: "rgba(var(--text), 0.6)",
        }}
      >
        List
      </div>
      <div
        className="flex items-center gap-3 h-[40px] px-2 rounded-3"
        style={{
          backgroundColor: "rgba(var(--selection), 0.1)",
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

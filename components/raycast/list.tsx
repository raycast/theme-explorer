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
        <div className="ml-auto flex gap-2 h-[22px] text-2">
          <span
            className="inline-flex items-center px-2 rounded-1"
            style={{
              color: "rgb(var(--red))",
              backgroundColor: "rgba(var(--red), 0.15)",
            }}
          >
            Red
          </span>
          <span
            className="inline-flex items-center px-2 rounded-1"
            style={{
              color: "rgb(var(--orange))",
              backgroundColor: "rgba(var(--orange), 0.15)",
            }}
          >
            Orange
          </span>
          <span
            className="inline-flex items-center px-2 rounded-1"
            style={{
              color: "rgb(var(--blue))",
              backgroundColor: "rgba(var(--blue), 0.15)",
            }}
          >
            Blue
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 h-[40px] px-2 rounded-3">
        <div>
          <CheckIcon />
        </div>
        <div className=" text-2 leading-none">Primary Text</div>
        <div className="ml-auto flex gap-2 h-[22px] text-2">
          <span
            className="inline-flex items-center px-2 rounded-1"
            style={{
              color: "rgb(var(--green))",
              backgroundColor: "rgba(var(--green), 0.15)",
            }}
          >
            Green
          </span>
          <span
            className="inline-flex items-center px-2 rounded-1"
            style={{
              color: "rgb(var(--yellow))",
              backgroundColor: "rgba(var(--yellow), 0.15)",
            }}
          >
            Yellow
          </span>
          <span
            className="inline-flex items-center px-2 rounded-1"
            style={{
              color: "rgb(var(--purple))",
              backgroundColor: "rgba(var(--purple), 0.15)",
            }}
          >
            Purple
          </span>
          <span
            className="inline-flex items-center px-2 rounded-1"
            style={{
              color: "rgb(var(--pink))",
              backgroundColor: "rgba(var(--pink), 0.15)",
            }}
          >
            Pink
          </span>
        </div>
      </div>
    </div>
  );
}

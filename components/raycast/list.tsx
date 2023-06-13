import { CheckIcon } from "@/components/icons";

export function List() {
  return (
    <div className="py-1 px-2 text-[--text]">
      <div className="p-2 text-1 leading-none font-medium tracking-[0.1px] text-[--text-600]">
        List
      </div>
      <div className="flex items-center gap-3 h-[40px] px-2 rounded-3 bg-[--selection-100]">
        <div>
          <CheckIcon />
        </div>
        <div className="text-2 leading-none">Primary Text</div>
        <div className="ml-auto flex gap-2 h-[22px] text-2">
          <Tag color="var(--red)" bg="var(--red-100)">
            Red
          </Tag>
          <Tag color="var(--orange)" bg="var(--orange-100)">
            Orange
          </Tag>
          <Tag color="var(--blue)" bg="var(--blue-100)">
            Blue
          </Tag>
        </div>
      </div>

      <div className="flex items-center gap-3 h-[40px] px-2 rounded-3">
        <div>
          <CheckIcon />
        </div>
        <div className=" text-2 leading-none">Primary Text</div>
        <div className="ml-auto flex gap-2 h-[22px] text-2">
          <Tag color="var(--green)" bg="var(--green-100)">
            Green
          </Tag>
          <Tag color="var(--yellow)" bg="var(--yellow-100)">
            Yellow
          </Tag>
          <Tag color="var(--purple)" bg="var(--purple-100)">
            Purple
          </Tag>
          <Tag color="var(--pink)" bg="var(--pink-100)">
            Pink
          </Tag>
        </div>
      </div>
    </div>
  );
}

function Tag({
  color,
  bg,
  children,
}: {
  color: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className="inline-flex items-center px-2 rounded-1 text-[--color] bg-[--bg]"
      style={
        {
          "--color": color,
          "--bg": bg,
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}

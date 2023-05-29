export function RaycastIcon({
  mode = "dark",
  size = 20,
}: {
  mode?: "dark" | "light";
  size?: number;
}) {
  if (mode === "dark") {
    return (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.502 10.037v1.46L1 7.996l.734-.728 2.768 2.77Zm1.461 1.46h-1.46L8.004 15l.73-.73-2.772-2.772ZM14.27 8.73 15 8 8.002 1l-.73.73 2.765 2.77H8.365l-1.93-1.93-.73.73 1.201 1.202H6.07v5.431h5.43v-.84l1.203 1.203.73-.73-1.932-1.933V5.961l2.77 2.768ZM4.868 4.134l-.73.73.783.784.73-.73-.783-.784Zm6.215 6.215-.728.73.784.783.73-.73-.786-.783ZM3.3 5.701l-.73.73 1.931 1.933V6.902l-1.2-1.2Zm5.797 5.797H7.636l1.932 1.932.73-.731-1.2-1.201Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  } else {
    return (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m15 8-.73.73-2.77-2.77V4.5L15 8ZM8 1l-.73.73 2.77 2.769h1.46L8 1ZM6.433 2.57l-.73.73 1.201 1.203h1.46L6.434 2.57ZM11.5 7.636v1.461l1.202 1.202.73-.73L11.5 7.635Zm-.418 2.716.418-.418H6.068V4.5l-.418.418-.784-.784-.733.732.784.784-.418.418v.84L3.297 5.706l-.73.73L4.498 8.37v1.667L1.731 7.27 1 8l7 7 .73-.73-2.768-2.77h1.673l1.933 1.933.73-.73L9.098 11.5h.84l.418-.418.784.784.73-.73-.787-.784Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  }
}

export const CheckIcon = ({ size = 20 }: { size?: number }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      x="80"
      y="80"
      alignmentBaseline="middle"
    >
      <path
        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

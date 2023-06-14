export function RaycastIcon({
  mode = "dark",
  size = 20,
  ...props
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
        {...props}
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
        {...props}
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

export const AppleIcon = ({ size = 20 }: { size?: number }) => {
  return (
    <svg
      viewBox="0 0 14 44"
      height="44"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const PlusIcon = ({ size = 20 }: { size?: number }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        d="M8 14.25a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5ZM10.75 8H8M5.25 8H8m0 0V5.25M8 8v2.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const ChevronDownIcon = ({ size = 20 }: { size?: number }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        d="M12.25 5.75 8 10.25l-4.25-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const ChevronLeftIcon = ({ size = 20 }: { size?: number }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        d="M10.25 12.25 5.75 8l4.5-4.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const ChevronRightIcon = ({ size = 20 }: { size?: number }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        d="M5.75 3.75 10.25 8l-4.5 4.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const SunIcon = ({ size = 20 }: { size?: number }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        d="m3.58 3.58 1.944 1.945m4.95 4.95 1.945 1.944M1.749 8H4.5m7 0h2.75M3.58 12.42l1.945-1.945m4.95-4.95 1.944-1.944M8 14.25V11.5m0-7V1.75M11.25 8a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const MoonIcon = ({ size = 20 }: { size?: number }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        d="M14.25 8.665a5.06 5.06 0 0 1-2.374.585c-2.724 0-4.933-2.127-4.933-4.75a4.61 4.61 0 0 1 .909-2.748C4.467 1.84 1.75 4.604 1.75 8c0 3.452 2.806 6.25 6.268 6.25 3.236 0 5.9-2.446 6.232-5.585Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

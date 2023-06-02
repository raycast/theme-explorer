import chroma from "chroma-js";
import React from "react";
import { Theme } from "@/lib/theme";

export function Desktop({
  children,
  theme,
}: {
  children?: React.ReactNode;
  theme: Theme;
}) {
  const loader1 = chroma(theme.colors.loader).alpha(0.7).css();
  const loader2 = chroma(theme.colors.loader).alpha(0.5).css();
  const backgroundPrimary1 = chroma(theme.colors.backgroundPrimary)
    .alpha(0.7)
    .css();
  const backgroundPrimary2 = chroma(theme.colors.backgroundPrimary)
    .alpha(0.5)
    .css();
  const backgroundPrimary3 = chroma(theme.colors.backgroundPrimary)
    .alpha(0.25)
    .css();
  const selection1 = chroma(theme.colors.selection).alpha(0.7).css();
  const selection2 = chroma(theme.colors.selection).alpha(0.5).css();

  return (
    <div
      className="min-h-[65vh] max-h-[675px] w-full px-6 overflow-hidden flex items-center md:justify-center relative"
      style={{
        transition: "all 0.3s ease",
        backgroundColor: backgroundPrimary1,
        backgroundImage: `
        radial-gradient(at 40% 20%, ${backgroundPrimary1}, transparent 50%),
        radial-gradient(at 80% 0%, ${loader1} 0px, transparent 50%),
        radial-gradient(at 0% 50%, ${selection1} 0px, transparent 50%),
        radial-gradient(at 80% 50%, ${backgroundPrimary2} 0px, transparent 50%),
        radial-gradient(at 0% 100%, ${loader2} 0px, transparent 50%),
        radial-gradient(at 80% 100%, ${selection2} 0px, transparent 50%),
        radial-gradient(at 0% 0%, ${backgroundPrimary3} 0px, transparent 50%)
        `,
      }}
    >
      {children}
    </div>
  );
}

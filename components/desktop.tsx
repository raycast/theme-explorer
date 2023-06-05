import { MenuBar } from "@/components/menu-bar";

export function Desktop({ children }: { children?: React.ReactNode }) {
  const loader1 = "rgba(var(--loader), 0.7)";
  const loader2 = "rgba(var(--loader), 0.5)";

  const backgroundPrimary1 = "rgba(var(--backgroundPrimary), 0.7)";
  const backgroundPrimary2 = "rgba(var(--backgroundPrimary), 0.5)";
  const backgroundPrimary3 = "rgba(var(--backgroundPrimary), 0.25)";

  const selection1 = "rgba(var(--selection), 0.7)";
  const selection2 = "rgba(var(--selection), 0.5)";

  return (
    <div
      className="flex flex-col desktop:items-center md:justify-center flex-1 p-7 w-full relative overflow-hidden"
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
      <MenuBar />

      {children}
    </div>
  );
}

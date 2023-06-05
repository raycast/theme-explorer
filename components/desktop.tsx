import { MenuBar } from "@/components/menu-bar";
import { ThemeSwitcher } from "@/components/theme-switcher";

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
      className="flex flex-col tall:items-center md:justify-center flex-1 w-full h-full min-h-[800px] relative"
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

      <div className="flex-1 flex items-center p-6 tall:py-0 desktop:p-0">
        {children}
      </div>

      <div className="bg-white/10 backdrop-blur-[12px] overflow-auto w-full ">
        {/* @ts-expect-error Async Server Component */}
        <ThemeSwitcher />
      </div>
    </div>
  );
}

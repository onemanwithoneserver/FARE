import Section01Desktop from "./01_section/desktop";
import Section02Desktop from "./02_section/desktop";
import ComingSoonStickyBar from "./ComingSoonStickyBar";

export default function HomeDesktop() {
  return (
    <div className="w-full min-h-full flex flex-col font-['Outfit'] relative">
      <ComingSoonStickyBar isMobile={false} />
      <div className="w-full shrink-0">
        <Section01Desktop />
      </div>
      <div className="w-full shrink-0">
        <Section02Desktop />
      </div>
    </div>
  );
}

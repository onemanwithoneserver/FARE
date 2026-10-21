import Section01 from "./01_section";
import Section02 from "./02_section";
import ComingSoonStickyBar from "./ComingSoonStickyBar";

export default function Home02({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="w-full min-h-full flex flex-col font-['Outfit'] relative">
      <ComingSoonStickyBar isMobile={isMobile} />
      <div className="w-full shrink-0">
        <Section01 isMobile={isMobile} />
      </div>
      <div className="w-full shrink-0">
        <Section02 isMobile={isMobile} />
      </div>
    </div>
  );
}

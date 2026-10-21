import Section01Mobile from "./01_section/mobile";
import Section02Mobile from "./02_section/mobile";
import ComingSoonStickyBar from "./ComingSoonStickyBar";

export default function HomeMobile() {
  return (
    <div className="w-full min-h-full flex flex-col font-['Outfit'] relative">
      <ComingSoonStickyBar isMobile={true} />
      <div className="w-full shrink-0">
        <Section01Mobile />
      </div>
      <div className="w-full shrink-0">
        <Section02Mobile />
      </div>
    </div>
  );
}

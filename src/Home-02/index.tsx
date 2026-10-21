import Section01 from "./01_section";
import Section02 from "./02_section";
export default function Home02({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F8FAFD] font-['Outfit']">
      <Section01 isMobile={isMobile} />
      <Section02 isMobile={isMobile} />
    </div>
  );
}

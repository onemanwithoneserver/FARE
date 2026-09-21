import Header from "../Home/00_header";
import Section01 from "./01_section";
import Section02 from "./02_section";
import Section03 from "./03_section";
import Section04 from "./04_section";
import Section05 from "./05_section";
import Section06 from "./06_section";
import Section07 from "./07_section";
import Section08 from "./08_section";
import Section09 from "./09_section";
import CtaSection from "../Home/04_section";
import Footer from "../Home/05_section";

export default function RE_Trainers_and_Coaches({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F8FAFD] font-['Outfit']">
      <Header isMobile={isMobile} />
      <Section01 isMobile={isMobile} />
      <Section02 isMobile={isMobile} />
      <Section03 isMobile={isMobile} />
      <Section04 isMobile={isMobile} />
      <Section05 isMobile={isMobile} />
      <Section06 isMobile={isMobile} />
      <Section07 isMobile={isMobile} />
      <Section08 isMobile={isMobile} />
      <Section09 isMobile={isMobile} />
      <CtaSection isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}


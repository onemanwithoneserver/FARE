import Header from "../../Home/00_header";
import Footer from "../../Home/05_section";
import Section01Desktop from "./01_section/desktop";
import Section01Mobile from "./01_section/mobile";
import Section02Desktop from "./02_section/desktop";
import Section02Mobile from "./02_section/mobile";
import Section03Desktop from "./03_section/desktop";
import Section03Mobile from "./03_section/mobile";
import Section04Desktop from "./04_section/desktop";
import Section04Mobile from "./04_section/mobile";
import Section05Desktop from "./05_section/desktop";
import Section05Mobile from "./05_section/mobile";
import Section06Desktop from "./06_section/desktop";
import Section06Mobile from "./06_section/mobile";
import Section07Desktop from "./07_section/desktop";
import Section07Mobile from "./07_section/mobile";
import Section08Desktop from "./08_section/desktop";
import Section08Mobile from "./08_section/mobile";
import Section09Desktop from "./09_section/desktop";
import Section09Mobile from "./09_section/mobile";
import Section10Desktop from "./10_section/desktop";
import Section10Mobile from "./10_section/mobile";
import Section11Desktop from "./11_section/desktop";
import Section11Mobile from "./11_section/mobile";
import Section12Desktop from "./12_section/desktop";
import Section12Mobile from "./12_section/mobile";
import Section13Desktop from "./13_section/desktop";
import Section13Mobile from "./13_section/mobile";
import Section14Desktop from "./14_section/desktop";
import Section14Mobile from "./14_section/mobile";
import Section15Desktop from "./15_section/desktop";
import Section15Mobile from "./15_section/mobile";
import Section16Desktop from "./16_section/desktop";
import Section16Mobile from "./16_section/mobile";
import Section17Desktop from "./17_section/desktop";
import Section17Mobile from "./17_section/mobile";

interface Props {
  isMobile: boolean;
}

export default function LiveMocks({ isMobile }: Props) {
  return (
    <div className="w-full min-h-screen flex flex-col font-['Outfit'] bg-[#FAFAFA]">
      <Header isMobile={isMobile} />
      {isMobile ? <Section01Mobile /> : <Section01Desktop />}
      {isMobile ? <Section02Mobile /> : <Section02Desktop />}
      {isMobile ? <Section03Mobile /> : <Section03Desktop />}
      {isMobile ? <Section04Mobile /> : <Section04Desktop />}
      {isMobile ? <Section05Mobile /> : <Section05Desktop />}
      {isMobile ? <Section06Mobile /> : <Section06Desktop />}
      {isMobile ? <Section07Mobile /> : <Section07Desktop />}
      {isMobile ? <Section08Mobile /> : <Section08Desktop />}
      {isMobile ? <Section09Mobile /> : <Section09Desktop />}
      {isMobile ? <Section10Mobile /> : <Section10Desktop />}
      {isMobile ? <Section11Mobile /> : <Section11Desktop />}
      {isMobile ? <Section12Mobile /> : <Section12Desktop />}
      {isMobile ? <Section13Mobile /> : <Section13Desktop />}
      {isMobile ? <Section14Mobile /> : <Section14Desktop />}
      {isMobile ? <Section15Mobile /> : <Section15Desktop />}
      {isMobile ? <Section16Mobile /> : <Section16Desktop />}
      {isMobile ? <Section17Mobile /> : <Section17Desktop />}
      <Footer isMobile={isMobile} />
    </div>
  );
}

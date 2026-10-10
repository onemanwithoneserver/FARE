import Header from "../../Home/00_header";
import Footer from "../../Home/05_section";
import Section01 from "./section01";
import Section02 from "./section02";
import Section03 from "./section03";
import Section04 from "./section04";
import Section05 from "./section05";
import Section06 from "./section06";
import Section07 from "./section07";
import Section08 from "./section08";
import Section09 from "./section09";
import Section10 from "./section10";
import Section11 from "./section11";
import Section12 from "./section12";
import Section13 from "./section13";
import Section14 from "./section14";

interface Props {
  isMobile: boolean;
}

export default function ChooseYourExpert({ isMobile }: Props) {
  return (
    <div className="w-full min-h-screen flex flex-col font-['Outfit'] bg-[#FAFAFA]">
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
      <Section10 isMobile={isMobile} />
      <Section11 isMobile={isMobile} />
      <Section12 isMobile={isMobile} />
      <Section13 isMobile={isMobile} />
      <Section14 isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}

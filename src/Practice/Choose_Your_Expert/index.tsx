import Header from "../../Home/00_header";
import Footer from "../../Home/05_section";
import Section01 from "./section01";
import Section02 from "./section02";
import Section03 from "./section03";
import Section04 from "./section04";
import Section05 from "./section05";
import Section08 from "./section08";
import Section10 from "./section10";
import RecommendedFinalFlow from "./RecommendedFinalFlow";

interface Props {
  isMobile: boolean;
}

export default function ChooseYourExpert({ isMobile }: Props) {
  return (
    <div className="w-full min-h-screen flex flex-col font-['Outfit'] bg-[#FAFAFA]">
      <Header isMobile={isMobile} />
      <Section01 isMobile={isMobile} />
      <Section02 isMobile={isMobile} />
      {isMobile ? (
        <>
          <Section03 isMobile={isMobile} />
          <Section04 isMobile={isMobile} />
          <Section05 isMobile={isMobile} />
        </>
      ) : (
        <section className="bg-[#FAFAFA] w-full pt-10 pb-20">
          <div className="max-w-[1200px] mx-auto w-full flex items-start gap-8 px-4 xl:px-0">
            {/* Left Sidebar */}
            <aside className="w-[280px] shrink-0 sticky top-24">
              <Section03 isMobile={isMobile} />
            </aside>
            {/* Right Main Content */}
            <main className="flex-1 flex flex-col min-w-0 gap-6">
              <Section04 isMobile={isMobile} />
              <Section05 isMobile={isMobile} />
            </main>
          </div>
        </section>
      )}
      <Section08 isMobile={isMobile} />
      <Section10 isMobile={isMobile} />
      <RecommendedFinalFlow isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}

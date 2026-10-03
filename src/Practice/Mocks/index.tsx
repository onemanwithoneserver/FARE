import Section01HeroDesktop from "./section-01-hero/desktop";
import Section01HeroMobile from "./section-01-hero/mobile";
import Section02ChallengeDesktop from "./section-02-challenge/desktop";
import Section02ChallengeMobile from "./section-02-challenge/mobile";
import Section03SolutionDesktop from "./section-03-solution/desktop";
import Section03SolutionMobile from "./section-03-solution/mobile";
import Section04WhatYouCanPractiseDesktop from "./section-04-what-you-can-practise/desktop";
import Section04WhatYouCanPractiseMobile from "./section-04-what-you-can-practise/mobile";
import Section05MockTypesDesktop from "./section-05-mock-types/desktop";
import Section05MockTypesMobile from "./section-05-mock-types/mobile";
import Section06WhoCanUseDesktop from "./section-06-who-can-use/desktop";
import Section06WhoCanUseMobile from "./section-06-who-can-use/mobile";
import Section07SegmentsDesktop from "./section-07-segments/desktop";
import Section07SegmentsMobile from "./section-07-segments/mobile";
import Section08OutcomesDesktop from "./section-08-outcomes/desktop";
import Section08OutcomesMobile from "./section-08-outcomes/mobile";
import Section09CtaDesktop from "./section-09-cta/desktop";
import Section09CtaMobile from "./section-09-cta/mobile";
import Header from "../../Home/00_header";
import Footer from "../../Home/05_section";

interface Props {
  isMobile: boolean;
}

export default function Mocks({ isMobile }: Props) {
  return (
    <div className="w-full min-h-screen flex flex-col font-['Outfit'] bg-[#F8FAFC]">
      <Header isMobile={isMobile} />
      {isMobile ? <Section01HeroMobile /> : <Section01HeroDesktop />}
      {isMobile ? <Section02ChallengeMobile /> : <Section02ChallengeDesktop />}
      {isMobile ? <Section03SolutionMobile /> : <Section03SolutionDesktop />}
      {isMobile ? <Section04WhatYouCanPractiseMobile /> : <Section04WhatYouCanPractiseDesktop />}
      {isMobile ? <Section05MockTypesMobile /> : <Section05MockTypesDesktop />}
      {isMobile ? <Section06WhoCanUseMobile /> : <Section06WhoCanUseDesktop />}
      {isMobile ? <Section07SegmentsMobile /> : <Section07SegmentsDesktop />}
      {isMobile ? <Section08OutcomesMobile /> : <Section08OutcomesDesktop />}
      {isMobile ? <Section09CtaMobile /> : <Section09CtaDesktop />}
      <Footer isMobile={isMobile} />
    </div>
  );
}

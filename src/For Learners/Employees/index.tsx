import Section01 from './section-01-hero/index';
import Section02 from './section-02-career-progression-challenges/index';
import Section03 from './section-03-skills-you-can-build/index';
import Section04 from './section-04-learn-practise-improve/index';
import Section05 from './section-05-start-learning-for-free/index';
import Section06 from './section-06-career-fastrack/index';
import Section07 from './section-07-career-outcomes/index';
import Section08 from './section-08-registration/index';
import Header from '../../Home/00_header';
import Footer from '../../Home/05_section';

export default function FAREForEmployees({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="w-full min-h-screen flex flex-col font-['Outfit'] bg-[#F8FAFD]">
      <Header isMobile={isMobile} />
      <Section01 isMobile={isMobile} />
      <Section02 isMobile={isMobile} />
      <Section03 isMobile={isMobile} />
      <Section04 isMobile={isMobile} />
      <Section05 isMobile={isMobile} />
      <Section06 isMobile={isMobile} />
      <Section07 isMobile={isMobile} />
      <Section08 isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}
import Header from "./00_header";
import Section01 from "./01_section";
import Section02 from "./02_section";
import Section03 from "./03_section";
import Section04 from "./04_section";
import Section05 from "./05_section";
export default function Home({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F7F8FA] font-['Outfit']">
      <Header isMobile={isMobile} />
      <Section01 isMobile={isMobile} />
      <Section02 isMobile={isMobile} />
      <Section03 isMobile={isMobile} />
      <Section04 isMobile={isMobile} />
      <Section05 isMobile={isMobile} />
    </div>
  );
}

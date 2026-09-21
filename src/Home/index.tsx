import Header from "./00_header";
import Section01 from "./01_section";
import Section03 from "./03_section";
import Section04 from "./04_section";

export default function Home({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F8FAFD] font-['Outfit']">
      <Header isMobile={isMobile} />
      <Section01 isMobile={isMobile} />
      <Section03 isMobile={isMobile} />
      <Section04 isMobile={isMobile} />
    </div>
  );
}

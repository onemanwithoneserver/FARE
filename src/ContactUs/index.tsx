import Header from "../Home/00_header";
import Footer from "../Home/05_section";
import Desktop from "./desktop";
import Mobile from "./mobile";
export default function ContactUs({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F8FAFD] font-['Outfit']">
      <Header isMobile={isMobile} />
      {isMobile ? <Mobile /> : <Desktop />}
      <Footer isMobile={isMobile} />
    </div>
  );
}

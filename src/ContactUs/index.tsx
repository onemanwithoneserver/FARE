import Header from "../Home/00_header";
import Footer from "../Home/05_section";
import Hero from "./Hero";
import ContactForm from "./ContactForm";

export default function ContactUs({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F8FAFD] font-['Outfit']">
      <Header isMobile={isMobile} />
      <Hero isMobile={isMobile} />
      <ContactForm isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}

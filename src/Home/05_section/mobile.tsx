import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import { getData } from "./data";
import logo from "../../Components/FARE_Logo/SVG/Primary Logo.svg";
import Modal from "../../Components/Forms/Modal";

import RECompaniesForm from "../../Components/Forms/Mobile/RECompaniesForm";
import RETrainersForm from "../../Components/Forms/Mobile/RETrainersForm";
import ContactForm from "../../Components/Forms/Mobile/ContactForm";
export default function Mobile() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobileMode = location.pathname.startsWith("/mobile");
  const currentMode = isMobileMode ? "mobile" : "desktop";
  const { language } = useLanguage();
  const data = getData(language);
  const [activeForm, setActiveForm] = useState<string | null>(null);
  
  const getActiveNavPath = (pathname: string): string | null => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const currentRoute = pathSegments[1] || "home";
    if (currentRoute === "home" || currentRoute === "") return "home";
    return currentRoute;
  };
  const activeNavPath = getActiveNavPath(location.pathname);
  
  const handleNavigation = (path?: string) => {
    if (!path || path === "#") return;
    if (
      [
        "open-plots",
        "re-companies",
        "re-trainers-coaches",
        "contact-us",
      ].includes(path)
    ) {
      setActiveForm(path);
      return;
    }
    navigate(`/${currentMode}/${path}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      <footer
        className="w-full text-white pt-6 pb-6 px-6 font-['Outfit'] relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #040C1E 0%, #030816 100%)",
          borderTop: "1px solid rgba(255, 255, 255, 0.07)",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[100px] bg-[#C99A2E]/[0.03] rounded-full blur-[50px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-30" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="w-full mx-auto relative z-10 flex flex-col gap-8"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center sm:items-start w-full">
            <div
              onClick={() => handleNavigation("home")}
              className="cursor-pointer group inline-block -mt-10 -mb-8"
            >
              <motion.img
                src={logo}
                alt="FARE Logo"
                whileHover={{
                  scale: 1.05,
                  opacity: 1,
                  filter: "drop-shadow(0 0 12px rgba(201,154,46,0.3))",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="w-[150px] h-auto brightness-0 invert opacity-90 transition-all duration-300"
              />
            </div>


            
            
            <div className="w-full h-px bg-white/10 mb-5" />
            
            <h4 className="text-[16px] font-serif text-[#E2C068] mb-3">Contact FARE</h4>
            
            <div className="flex flex-col items-center sm:items-start gap-2.5 mb-5 w-full">
              <a href="#contact" className="text-[13.5px] font-bold text-white hover:text-[#E2C068] transition-colors flex items-center gap-1.5 w-fit">
                Contact us <span className="text-[11px] font-normal leading-none">↗</span>
              </a>
              
              <a href="mailto:hello@yardstack.in" className="text-[13px] text-white/60 hover:text-[#E2C068] transition-colors w-fit">
                hello@yardstack.in
              </a>
            </div>

            <div className="flex items-center gap-3">
              {data.socialLinks?.map((social, idx) => {
                const Icon = 
                  social.name === "Facebook" ? FacebookIcon :
                  social.name === "Twitter" ? TwitterIcon :
                  social.name === "Instagram" ? InstagramIcon :
                  social.name === "Linkedin" ? LinkedinIcon :
                  YoutubeIcon;
                
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#C99A2E]/20 transition-all duration-300"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-8">
            {data.footerGroups.map((group, gIdx) => (
              <motion.div key={gIdx} variants={itemVariants} className="flex flex-col min-w-[140px] flex-1">
                <h4 className="text-[16px] font-serif text-[#E2C068] mb-4 tracking-wide">
                  {group.title}
                </h4>
                <div className="flex flex-col gap-3">
                  {group.links.map((link, idx) => {
                    const isSelected = activeNavPath !== null && link.path === activeNavPath;
                    return (
                      <motion.button
                        key={idx}
                        onClick={() => handleNavigation(link.path)}
                        whileTap={{ scale: 0.98, x: 2 }}
                        className="relative group text-left text-[13.5px] font-medium cursor-pointer w-fit"
                      >
                        <span
                          className={`relative z-10 transition-all duration-300 ${
                            isSelected
                              ? "text-white font-semibold"
                              : "text-white/60 hover:text-white underline underline-offset-[5px] decoration-dotted decoration-white/40 group-hover:decoration-transparent"
                          }`}
                        >
                          {link.label}
                        </span>
                        {!isSelected && (
                          <span className="absolute left-0 -bottom-[1px] w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full relative z-10 mt-8 pt-5 border-t border-white/[0.06] flex flex-col items-center gap-2"
        >
          <span className="text-[12px] font-medium text-white/40 text-center">
            {data.copyright.replace("{year}", new Date().getFullYear().toString())}
          </span>
        </motion.div>
      </footer>
      <Modal isOpen={activeForm !== null} onClose={() => setActiveForm(null)}>
        {activeForm === "open-plots" && <RECompaniesForm />}
        {activeForm === "re-companies" && <RECompaniesForm />}
        {activeForm === "re-trainers-coaches" && <RETrainersForm />}
        {activeForm === "contact-us" && <ContactForm />}
      </Modal>
    </>
  );
}

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

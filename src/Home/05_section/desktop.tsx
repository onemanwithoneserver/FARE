import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import { getData } from "./data";
import logo from "../../Components/FARE_Logo/SVG/Primary Logo.svg";
import Modal from "../../Components/Forms/Modal";

import RECompaniesForm from "../../Components/Forms/Desktop/RECompaniesForm";
import RETrainersForm from "../../Components/Forms/Desktop/RETrainersForm";
import ContactForm from "../../Components/Forms/Desktop/ContactForm";
export default function Desktop() {
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
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      <footer
        className="w-full text-white pt-6 pb-6 px-8 lg:px-12 font-['Outfit'] relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #040C1E 0%, #030816 100%)",
          borderTop: "1px solid rgba(255, 255, 255, 0.07)",
        }}
      >
        <div className="absolute top-0 left-1/4 w-[400px] h-[100px] bg-[#C99A2E]/[0.03] rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[100px] bg-[#3B82F6]/[0.03] rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="max-w-[1200px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-start lg:col-span-4 xl:col-span-3">
            <div
              onClick={() => handleNavigation("home")}
              className="cursor-pointer group inline-block -mt-12 -mb-10"
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
                className="w-[180px] h-auto brightness-0 invert opacity-90 transition-all duration-300"
              />
            </div>

            <div className="w-full h-px bg-white/10 mb-5" />
            
            <h4 className="text-[17px] font-serif text-[#E2C068] mb-3">Contact FARE</h4>
            
            <div className="flex flex-col gap-2.5 mb-5">
              <a href="#contact" className="text-[14px] font-bold text-white hover:text-[#E2C068] transition-colors flex items-center gap-1.5 w-fit">
                Contact us <span className="text-[12px] font-normal leading-none">↗</span>
              </a>
              
              <a href="mailto:hello@yardstack.in" className="text-[13.5px] text-white/60 hover:text-[#E2C068] transition-colors w-fit">
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
                
                const hoverClassMap: Record<string, string> = {
                  Facebook: "hover:bg-[#1877F2] hover:text-white",
                  Twitter: "hover:bg-black hover:text-white",
                  Instagram: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white",
                  Linkedin: "hover:bg-gradient-to-tr hover:from-[#0077B5] hover:to-[#0A66C2] hover:text-white",
                  Youtube: "hover:bg-[#FF0000] hover:text-white"
                };
                const hoverClasses = hoverClassMap[social.name] || "hover:text-white hover:bg-[#C99A2E]/20";

                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 transition-all duration-300 ${hoverClasses}`}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.footerGroups.map((group, gIdx) => (
              <motion.div key={gIdx} variants={itemVariants} className="flex flex-col">
                <h4 className="text-[17px] font-serif text-[#E2C068] mb-6 tracking-wide">
                  {group.title}
                </h4>
                <div className="flex flex-col gap-3.5">
                  {group.links.map((link, idx) => {
                    const isSelected = activeNavPath !== null && link.path === activeNavPath;
                    return (
                      <motion.button
                        key={idx}
                        onClick={() => handleNavigation(link.path)}
                        whileHover={{ x: 3 }}
                        className="relative group text-left text-[14px] font-medium cursor-pointer w-fit"
                      >
                        <span
                          className={`relative z-10 transition-all duration-300 ${
                            isSelected
                              ? "text-white font-semibold"
                              : "text-white/60 group-hover:text-white underline underline-offset-[5px] decoration-dotted decoration-white/40 group-hover:decoration-transparent"
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
          transition={{ delay: 0.4 }}
          className="max-w-[1200px] w-full mx-auto relative z-10 mt-12 pt-5 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span className="text-[13px] font-medium text-white/40">
            {data.copyright.replace("{year}", new Date().getFullYear().toString())}
          </span>
          <div className="text-[13px] font-medium text-white/40 flex items-center gap-2">
            Designed for Real Estate Excellence
          </div>
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
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import { getData } from "./data";
import logo from "../../Components/FARE_Logo/SVG/Primary Logo.svg";
import Modal from "../../Forms/Modal";
import OpenPlotForm from "../../Forms/Mobile/OpenPlotForm";
import RECompaniesForm from "../../Forms/Mobile/RECompaniesForm";
import RETrainersForm from "../../Forms/Mobile/RETrainersForm";
import ContactForm from "../../Forms/Mobile/ContactForm";
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
    if (currentRoute === "re-trainers-coaches") return "re-trainers-coaches";
    if (currentRoute === "re-companies") return "re-companies";
    if (currentRoute === "open-plots") return "open-plots";
    if (currentRoute === "contact-us") return "contact-us";
    return currentRoute;
  };
  const activeNavPath = getActiveNavPath(location.pathname);
  const handleNavigation = (path?: string) => {
    if (!path) return;
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
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.03,
      },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <>
      <footer
        className="w-full text-white py-6 px-5 font-['Outfit'] relative overflow-hidden"
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
          viewport={{ once: false }}
          className="w-full mx-auto flex flex-col items-center relative z-10 gap-5"
        >
          <motion.div
            variants={itemVariants}
            onClick={() => handleNavigation("home")}
            className="flex flex-col items-center gap-2 cursor-pointer shrink-0 group"
          >
            <motion.img
              src={logo}
              alt="FARE Logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="h-[36px] w-auto brightness-0 invert opacity-90 transition-transform duration-300"
            />
            <span className="text-[11px] font-medium text-white/45 text-center select-none">
              {data.copyright.replace(
                "{year}",
                new Date().getFullYear().toString(),
              )}
            </span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-x-2 gap-y-2 w-full max-w-[340px]"
          >
            {data.navLinks.map((link, idx) => {
              const isSelected =
                activeNavPath !== null && link.path === activeNavPath;
              return (
                <motion.button
                  key={idx}
                  onClick={() => handleNavigation(link.path)}
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  className={`relative group text-[11.5px] font-medium transition-all duration-300 py-1.5 px-3 rounded-md cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "text-[#E2C068] font-bold bg-[#E2C068]/14 border border-[#E2C068]/30 shadow-[0_0_10px_rgba(226,192,104,0.14)]"
                      : "text-white/60 hover:text-[#E2C068] hover:bg-white/[0.06] active:bg-white/[0.08]"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeFooterLinkMobile"
                      className="w-1.5 h-1.5 rounded-full bg-[#E2C068] shadow-[0_0_6px_#E2C068]"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.4,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-all duration-300 ${
                      isSelected
                        ? "no-underline"
                        : "underline underline-offset-4 decoration-dotted decoration-white/40 group-hover:decoration-solid group-hover:decoration-[#E2C068]"
                    }`}
                  >
                    {link.label}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </footer>
      <Modal isOpen={activeForm !== null} onClose={() => setActiveForm(null)}>
        {activeForm === "open-plots" && <OpenPlotForm />}
        {activeForm === "re-companies" && <RECompaniesForm />}
        {activeForm === "re-trainers-coaches" && <RETrainersForm />}
        {activeForm === "contact-us" && <ContactForm />}
      </Modal>
    </>
  );
}

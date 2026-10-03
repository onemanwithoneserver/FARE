import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { getData } from "./data";
import reCompaniesHero from "../../../assets/re_companies_hero.png";
import Modal from "../../../Components/Forms/Modal";
import RECompaniesForm from "../../../Components/Forms/Desktop/RECompaniesForm";
import VideoModal from "../../../Components/Forms/VideoModal";
const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <>
    <section
      className="w-full -mt-8 lg:-mt-8 flex items-center justify-center overflow-x-clip relative font-['Outfit']"
      style={{
        background: `linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 30%, #F0F4FF 60%, #E6EEFF 100%)`,
      }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[15%] w-[700px] h-[700px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-[4px]-full blur-[140px] pointer-events-none z-0"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-[4px]-full blur-[120px] pointer-events-none z-0"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] right-[5%] w-[300px] h-[300px] bg-gradient-radial from-[#818CF8]/[0.06] to-transparent rounded-[4px]-full blur-[80px] pointer-events-none z-0"
      ></motion.div>
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="w-full flex flex-col lg:flex-row items-center justify-between relative z-10 pt-4 lg:pt-8 pb-8 lg:pb-12 pl-6 sm:pl-10 lg:pl-14 xl:pl-20 pr-0">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="w-full lg:w-[48%] xl:w-[46%] flex flex-col items-start text-left shrink-0 py-4 lg:py-6 pr-6 lg:pr-10"
        >
            <h1
              className={`font-black mb-3 flex flex-col items-start gap-1 md:gap-1.5 ${
                language === "te"
                  ? "text-[2.2rem] lg:text-[2.6rem] xl:text-[3.2rem] leading-[1.15] tracking-wider"
                  : "text-[2.2rem] lg:text-[2.6rem] xl:text-[3.2rem] leading-[1.05] tracking-[-0.03em]"
              }`}
            >
              <>
                <motion.span
                  variants={item}
                  className="inline-flex items-center self-start gap-2 px-4 py-1.5 rounded-[4px]-full border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.06] to-[#C99A2E]/[0.02] backdrop-blur-sm shadow-sm mb-2"
                >
                  <Sparkles
                    size={12}
                    className="text-[#C99A2E]"
                    strokeWidth={2.5}
                  />
                  <span className="font-bold text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-[#C99A2E] leading-none pt-0.5">
                    {language === "te" ? "FARE కోసం" : "FARE FOR"}
                  </span>
                </motion.span>
                <motion.span
                  variants={item}
                  className="block uppercase whitespace-nowrap"
                  style={{ color: NAVY }}
                >
                  {language === "te"
                    ? "రెసిడెన్షియల్ & కమర్షియల్"
                    : "RESIDENTIAL & COMMERCIAL"}
                </motion.span>
                <motion.span
                  variants={item}
                  className={`self-start inline-block text-[#C99A2E] gold-underline uppercase ${
                    language === "te" ? "pb-1" : ""
                  }`}
                >
                  {language === "te" ? "కంపెనీలు" : "COMPANIES"}
                </motion.span>
              </>
            </h1>
            <motion.div variants={item} className="mb-4 flex flex-col gap-1">
              <p
                className="text-[17px] font-medium leading-[1.5]"
                style={{ color: "#3A4A63" }}
              >
                {data.subheadline}
              </p>
              {data.subheadlineAccent && (
                <p
                  className="text-[17px] font-medium leading-[1.5]"
                  style={{ color: GOLD }}
                >
                  {data.subheadlineAccent}
                </p>
              )}
              <p
                className="text-[17px] font-medium leading-[1.5] mt-1.5"
                style={{ color: "#3A4A63" }}
              >
                {data.description}
              </p>
            </motion.div>
            <motion.div
              variants={item}
              className="flex items-center gap-4 mb-5"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-white text-[14px] font-semibold px-7 py-3.5 rounded-[4px]-[8px] hover:luxury-shadow-float active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ease-out group cursor-pointer"
                style={{
                  background: NAVY,
                  boxShadow: `0 4px 16px rgba(11,29,58,0.2), 0 2px 4px rgba(0,0,0,0.1)`,
                }}
              >
                {data.buttons.primary}{" "}
                <span className={`relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em] ${""}`} style={{ fontSize: `${15}px` }}>
      <ChevronRight size={15} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
      <ArrowRight size={15} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
    </span>
              </button>
              {data.buttons.secondary && (
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="text-[14px] font-semibold px-7 py-3.5 rounded-[4px]-[8px] hover:bg-[#F8FAFD] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 border border-[#0B1D3A]/15 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ease-out cursor-pointer group hover:shadow-[0_4px_12px_rgba(11,29,58,0.05)]"
                  style={{
                    color: NAVY,
                    background: "white",
                  }}
                >
                  {data.buttons.secondary}
                </button>
              )}
            </motion.div>
            <motion.div variants={item} className="flex flex-wrap gap-2 mb-2">
              {data.features.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-[4px]-full bg-white/70 backdrop-blur-sm border border-[#0B1D3A]/[0.08] shadow-[0_2px_6px_rgba(11,29,58,0.03)] text-[#0B1D3A]/80 text-[11.5px] font-semibold"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-[4px]-full"
                    style={{ background: GOLD }}
                  ></span>
                  <span>{cap}</span>
                </div>
              ))}
            </motion.div>
            <motion.p
              variants={item}
              className="text-[12px] italic text-[#0B1D3A]/45 font-medium mt-2"
            >
              {data.footerText}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[52%] xl:w-[54%] flex items-center justify-end pl-0"
          >
            <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[480px] xl:h-[510px] rounded-[4px]-tl-[120px] sm:rounded-[4px]-tl-[160px] lg:rounded-[4px]-tl-[220px] xl:rounded-[4px]-tl-[260px] rounded-[4px]-bl-[60px] sm:rounded-[4px]-bl-[70px] lg:rounded-[4px]-bl-[90px] xl:rounded-[4px]-bl-[100px] overflow-hidden border-l border-t border-b border-white/80 luxury-shadow-float group">
              <motion.img
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={reCompaniesHero}
                alt="Residential & Commercial Real Estate Buildings"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
      </div>
    </section>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <RECompaniesForm />
    </Modal>
    <VideoModal
      isOpen={isVideoModalOpen}
      onClose={() => setIsVideoModalOpen(false)}
    />
    </>
  );
}

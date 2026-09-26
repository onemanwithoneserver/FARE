import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
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
        background: `linear-gradient(165deg, #FFFFFF 0%, #F6F9FF 35%, #EDF2FF 60%, #F0F4FF 100%)`,
      }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[15%] w-[700px] h-[700px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-full blur-[140px] pointer-events-none z-0"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[120px] pointer-events-none z-0"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] right-[5%] w-[300px] h-[300px] bg-gradient-radial from-[#818CF8]/[0.06] to-transparent rounded-full blur-[80px] pointer-events-none z-0"
      ></motion.div>
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-[1480px] w-full px-6 sm:px-10 lg:px-12 xl:px-14 py-10 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="lg:col-span-6 flex flex-col items-start text-left w-full relative z-20"
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
                  className="inline-flex items-center self-start gap-2 px-4 py-1.5 rounded-full border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.06] to-[#C99A2E]/[0.02] backdrop-blur-sm shadow-sm mb-2"
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
                className="text-white text-[13.5px] font-semibold px-7 py-3 rounded hover:shadow-[0_12px_24px_rgba(11,29,58,0.2),0_0_0_1px_rgba(201,154,46,0.15)] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out"
                style={{
                  background: NAVY,
                  boxShadow: `0 2px 8px rgba(11,29,58,0.15), 0 8px 24px rgba(11,29,58,0.08)`,
                }}
              >
                {data.buttons.primary}{" "}
                <ArrowRight size={15} strokeWidth={2.5} />
              </button>
              {data.buttons.secondary && (
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="text-[13.5px] font-semibold px-7 py-3 rounded hover:bg-[#F8FAFD] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 border hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer"
                  style={{
                    color: NAVY,
                    borderColor: `${NAVY}15`,
                    background: "white",
                    boxShadow: "0 1px 3px rgba(11,29,58,0.03)",
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
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-[#0B1D3A]/[0.08] shadow-[0_2px_6px_rgba(11,29,58,0.03)] text-[#0B1D3A]/80 text-[11.5px] font-semibold"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
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
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[680px] aspect-[16/10.2] rounded-[4px] overflow-hidden border border-white/80 shadow-[0_25px_60px_-15px_rgba(11,29,58,0.22),0_10px_25px_-5px_rgba(0,0,0,0.06)] bg-slate-100 group lg:translate-x-2 xl:translate-x-4">
              <img
                src={reCompaniesHero}
                alt="Residential & Commercial Real Estate Buildings"
                className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out rounded-[4px]"
              />
            </div>
          </motion.div>
        </div>
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

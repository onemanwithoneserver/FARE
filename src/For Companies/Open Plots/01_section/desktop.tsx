import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { getData } from "./data";
import openplotHero from "../../../assets/openplot_hero.jpg";
import Modal from "../../../Components/Forms/Modal";
import RECompaniesForm from "../../../Components/Forms/Desktop/RECompaniesForm";
import VideoModal from "../../../Components/Forms/VideoModal";

const NAVY = "#0B1D3A";

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
      className="w-full -mt-8 lg:-mt-8 flex items-center justify-between overflow-x-clip relative font-['Outfit']"
      style={{
        background: `linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 40%, #EDF4FF 75%, #F0F4FF 100%)`,
      }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[10%] w-[750px] h-[750px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-full blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[120px] pointer-events-none z-0"
      />

      <svg
        className="absolute right-0 top-0 h-full w-[65%] pointer-events-none z-0 opacity-45 hidden lg:block"
        viewBox="0 0 800 800"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M260,0 C160,220 60,450 190,800 L800,800 L800,0 Z"
          fill="url(#waveGradOpenPlot)"
        />
        <defs>
          <linearGradient id="waveGradOpenPlot" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2ECFC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#CBE0FF" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none z-0"
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
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C99A2E]/35 bg-[#C99A2E]/[0.08] backdrop-blur-sm shadow-xs mb-4"
          >
            <Sparkles
              size={13}
              className="text-[#C99A2E]"
              strokeWidth={2.5}
            />
            <span className="font-bold text-[11px] md:text-[11.5px] tracking-[0.2em] uppercase text-[#C99A2E] leading-none pt-0.5">
              {language === "te" ? "FARE కోసం" : "FARE FOR"}
            </span>
          </motion.div>

          <h1 className="font-black mb-5 flex flex-col gap-0.5 text-[#0B1D3A] tracking-[-0.03em] leading-[0.95]">
            <motion.span
              variants={item}
              className="block text-[3.4rem] md:text-[4.2rem] xl:text-[4.6rem] font-black uppercase text-[#0B1D3A]"
            >
              {language === "te" ? "ఓపెన్ ప్లాట్" : "OPEN PLOT"}
            </motion.span>
            <motion.span
              variants={item}
              className="relative inline-block text-[3.4rem] md:text-[4.2rem] xl:text-[4.6rem] font-black uppercase text-[#C99A2E] pb-2.5"
            >
              {language === "te" ? "కంపెనీల కోసం" : "COMPANIES"}
              <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-[#C99A2E] rounded-full" />
            </motion.span>
          </h1>

          <motion.div variants={item} className="mb-6 flex flex-col gap-1.5 max-w-[540px]">
            <p className="text-[16.5px] xl:text-[17.5px] font-bold text-[#0B1D3A] leading-snug">
              {data.subheadline}
            </p>
            {data.subheadlineAccent && (
              <p className="text-[16.5px] xl:text-[17.5px] font-bold text-[#C99A2E] leading-snug">
                {data.subheadlineAccent}
              </p>
            )}
            <p className="text-[14.5px] xl:text-[15.5px] font-medium text-[#475569] leading-[1.65] mt-1.5">
              {data.description}
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center gap-4 mb-6"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#0B1D3A] hover:bg-[#102B63] text-white text-[14px] font-bold px-7 py-3.5 rounded-[4px] shadow-[0_4px_14px_rgba(11,29,58,0.25)] hover:shadow-[0_6px_20px_rgba(11,29,58,0.35)] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{data.buttons.primary}</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
            {data.buttons.secondary && (
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-white hover:bg-[#F8FAFD] text-[#0B1D3A] text-[14px] font-bold px-7 py-3.5 rounded-[4px] border border-[#0B1D3A]/15 shadow-xs hover:shadow-sm active:scale-[0.98] transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {data.buttons.secondary}
              </button>
            )}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-2.5 mb-5">
            {data.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B1D3A]/10 shadow-[0_2px_8px_rgba(11,29,58,0.04)] text-[#0B1D3A] text-[12px] font-bold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={item}
            className="text-[13px] italic font-medium text-[#64748B]"
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
          <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[480px] xl:h-[510px] rounded-tl-[120px] sm:rounded-tl-[160px] lg:rounded-tl-[220px] xl:rounded-tl-[260px] rounded-bl-[60px] sm:rounded-bl-[70px] lg:rounded-bl-[90px] xl:rounded-bl-[100px] overflow-hidden shadow-[0_25px_70px_-15px_rgba(11,29,58,0.22),0_10px_30px_-5px_rgba(0,0,0,0.06)] border-l border-t border-b border-white/80 group">
            <motion.img
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={openplotHero}
              alt="Open Plot Venture"
              className="w-full h-full object-cover object-[center_38%]"
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

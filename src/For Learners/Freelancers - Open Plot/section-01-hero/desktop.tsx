import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import freelancersHero from "../../../assets/freelancers_hero.jpg";

const NAVY = "#0B1D3A";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

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
    <section
      className="w-full flex items-center justify-between overflow-x-clip relative font-['Outfit']"
      style={{
        background: `linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 40%, #EDF4FF 75%, #F0F4FF 100%)`,
      }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[10%] w-[700px] h-[700px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-full blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[120px] pointer-events-none z-0"
      />
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.08] to-[#C99A2E]/[0.02] backdrop-blur-sm shadow-sm mb-5"
          >
            <Sparkles size={12} className="text-[#C99A2E]" strokeWidth={2.5} />
            <span className="font-bold text-[11px] tracking-[0.18em] uppercase text-[#C99A2E] leading-none pt-0.5">
              {data.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[2.6rem] lg:text-[3rem] xl:text-[3.4rem] font-black mb-6 tracking-tight leading-[1.08]"
            style={{ color: NAVY }}
          >
            {data.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[15px] xl:text-[16px] font-medium text-[#475569] leading-[1.65] whitespace-pre-wrap mb-8 max-w-[520px]"
          >
            {data.description}
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-4 mb-5">
            <button
              className="text-white text-[14px] font-semibold px-7 py-3.5 rounded-[4px] flex items-center gap-2.5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out"
              style={{
                background: NAVY,
                boxShadow: `0 4px 16px rgba(11,29,58,0.2), 0 2px 4px rgba(0,0,0,0.1)`,
              }}
            >
              {data.buttons.primary}
              <ArrowRight size={15} strokeWidth={2.5} />
            </button>
            <button
              className="text-[14px] font-semibold px-7 py-3.5 rounded-[4px] border border-[#0B1D3A]/15 bg-white hover:bg-[#F8FAFD] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out"
              style={{ color: NAVY }}
            >
              {data.buttons.secondary}
            </button>
          </motion.div>
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
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              src={freelancersHero}
              alt="Freelancer at real estate site"
              className="w-full h-full object-cover object-[center_38%]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/15 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
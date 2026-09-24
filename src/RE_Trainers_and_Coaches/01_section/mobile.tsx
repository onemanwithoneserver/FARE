import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { getData } from "./data";
import reTrainersHero from "../../assets/re_trainers_hero.jpg";
const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <section
      className="w-full -mt-8 flex flex-col items-center justify-start overflow-hidden relative font-['Outfit'] pb-16"
      style={{
        background: `linear-gradient(170deg, #FFFFFF 0%, #F6F9FF 30%, #EDF2FF 70%, #E6EDFF 100%)`,
      }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-[-100px] w-[350px] h-[350px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-full blur-[80px] pointer-events-none z-0"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[-50px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[70px] pointer-events-none z-0"
      ></motion.div>
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="w-full px-5 pt-8 pb-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="flex flex-col items-center w-full"
        >
          <h1
            className={`font-black mb-3.5 flex flex-col gap-1 sm:gap-1.5 ${
              language === "te"
                ? "text-[2.1rem] leading-[1.25] tracking-wide my-1.5"
                : "text-[2.65rem] leading-[1.08] tracking-[-0.02em]"
            }`}
          >
            <>
              <motion.span
                variants={item}
                className="inline-flex items-center self-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.06] to-[#C99A2E]/[0.02] backdrop-blur-sm shadow-sm mb-2"
              >
                <Sparkles
                  size={11}
                  className="text-[#C99A2E]"
                  strokeWidth={2.5}
                />
                <span className="font-bold text-[10px] tracking-[0.18em] uppercase text-[#C99A2E] leading-none pt-0.5">
                  {language === "te" ? "FARE కోసం" : "FARE FOR"}
                </span>
              </motion.span>
              <motion.span
                variants={item}
                className="block uppercase"
                style={{ color: NAVY }}
              >
                {language === "te" ? "రియల్ ఎస్టేట్" : "REAL ESTATE"}
              </motion.span>
              <motion.span
                variants={item}
                className={`inline-block text-[#C99A2E] gold-underline uppercase ${language === "te" ? "pb-1" : ""}`}
              >
                {language === "te"
                  ? "ట్రైనర్స్ & కోచెస్"
                  : "TRAINERS & COACHES"}
              </motion.span>
            </>
          </h1>
          <motion.div variants={item} className="mb-3 flex flex-col gap-1">
            <h2
              className={`font-bold ${
                language === "te"
                  ? "text-[15px] leading-normal tracking-wider py-0.5"
                  : "text-[16px] leading-snug"
              }`}
              style={{ color: NAVY }}
            >
              {data.subheadline}
            </h2>
            {data.subheadlineAccent && (
              <h2
                className={`font-bold ${
                  language === "te"
                    ? "text-[15px] leading-normal tracking-wider py-0.5"
                    : "text-[16px] leading-snug"
                }`}
                style={{ color: GOLD }}
              >
                {data.subheadlineAccent}
              </h2>
            )}
          </motion.div>
          <motion.p
            variants={item}
            className="text-[14.5px] font-medium leading-[1.7] mb-8 max-w-[420px] text-[#475569]"
          >
            {data.description}
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-col w-full gap-3 max-w-[280px] mb-4"
          >
            <button
              className="text-white font-semibold w-full py-3.5 rounded transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out"
              style={{
                background: NAVY,
                boxShadow: "0 2px 8px rgba(11,29,58,0.15)",
              }}
            >
              {data.buttons.primary} <ArrowRight size={14} strokeWidth={2.5} />
            </button>
            {data.buttons.secondary && (
              <button
                className="font-semibold w-full py-3.5 rounded transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] border hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out"
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
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-1.5 mb-5 max-w-[340px]"
          >
            {data.features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/80 border border-[#0B1D3A]/[0.08] text-[#0B1D3A]/80 text-[10px] font-semibold"
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: GOLD }}
                ></span>
                <span>{f}</span>
              </div>
            ))}
          </motion.div>
          <motion.p
            variants={item}
            className="text-[10.5px] italic text-[#0B1D3A]/45 font-medium"
          >
            {data.footerText}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full mt-10 relative z-20 flex items-center justify-center px-4"
        >
          <div className="relative w-full aspect-[4/5] max-w-[360px] flex items-center justify-center group">
            <motion.div
              className="w-full h-full absolute inset-0 z-0 rounded-[1.5rem] overflow-hidden border border-white/60 shadow-[0_15px_40px_-10px_rgba(11,29,58,0.15)]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
              }}
            >
              <motion.img
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={reTrainersHero}
                alt="RE Trainers Hero"
                className="w-full h-full object-cover object-[center_35%]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -left-2 sm:-left-6 bottom-12 z-20 bg-white/95 backdrop-blur-xl p-3 shadow-[0_12px_32px_-8px_rgba(11,29,58,0.2)] border border-white/80 rounded-[20px] rounded-tl-[6px] hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.08)] hover:-translate-y-1 transition-all duration-400 ease-out"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[10px] rounded-br-[4px] bg-gradient-to-br from-[#34D399] to-[#10B981] flex items-center justify-center shadow-md shadow-[#34D399]/30">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div className="pr-1.5">
                  <div className="text-[13px] font-black text-[#0B1D3A] tracking-tight">
                    {data.dashboard.floatingBadge.title}
                  </div>
                  <div className="text-[9.5px] font-bold text-[#64748B] uppercase tracking-wider mt-0.5">
                    {data.dashboard.floatingBadge.subtitle}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import { getData } from "./data";
import { ArrowRight, Check, Settings2, Sparkles } from "lucide-react";
import React from "react";
const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const headlineSentences = data.headline.includes(". ")
    ? data.headline.split(". ")
    : [data.headline];
  return (
    <section className="w-full py-16 bg-white relative font-['Outfit'] overflow-hidden">
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-[-10%] w-[800px] h-[800px] bg-gradient-radial from-[#F1F5FB]/80 to-transparent rounded-full blur-[120px] pointer-events-none -translate-y-1/2"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none"
      ></motion.div>
      <div className="max-w-[1280px] mx-auto px-12 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          <div className="w-full md:w-[48%] flex flex-col">
            <motion.div variants={item} className="mb-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-white shadow-sm shrink-0">
                  <Settings2 size={13} className="text-white" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C99A2E]">
                  {data.title === data.overline
                    ? data.title
                    : `${data.title} — ${data.overline}`}
                </span>
              </div>
            </motion.div>
            <motion.h2
              variants={item}
              className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-8"
              style={{ color: NAVY }}
            >
              {headlineSentences.map((sentence, i) => (
                <React.Fragment key={i}>
                  {i === 0 ? (
                    <span>
                      {sentence}
                      {headlineSentences.length > 1 ? ". " : ""}
                    </span>
                  ) : (
                    <span className="text-[#C99A2E]">{sentence}</span>
                  )}
                </React.Fragment>
              ))}
            </motion.h2>
            <motion.div variants={item} className="mb-10">
              <p className="text-[18px] font-bold mb-6" style={{ color: NAVY }}>
                {data.desc1}
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-3 mb-8">
                {data.highlights.split(" · ").map((highlight, idx) => (
                  <div
                    key={idx}
                    className="bg-white text-[#0B1D3A] border border-[#0B1D3A]/10 px-4 py-2 rounded text-[14px] font-bold shadow-[0_2px_8px_-2px_rgba(11,29,58,0.06)] hover:border-[#C99A2E]/30 hover:text-[#C99A2E] hover:shadow-[0_4px_12px_-2px_rgba(201,154,46,0.1)] transition-all cursor-default"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
              <div className="bg-[#F8FAFD] rounded p-5 border border-[#0B1D3A]/[0.06] flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#C99A2E]/10 flex items-center justify-center shrink-0">
                  <Sparkles size={16} className="text-[#C99A2E]" />
                </div>
                <p
                  className="text-[16px] font-medium leading-[1.65]"
                  style={{ color: "#475569" }}
                >
                  {data.desc2}
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="mt-4 bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] rounded p-10 shadow-[0_20px_40px_-10px_rgba(11,29,58,0.2)] relative overflow-hidden"
            >
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/20 rounded-full blur-[40px] pointer-events-none"
              ></motion.div>
              <h3 className="text-[22px] font-bold mb-3 text-white relative z-10">
                {data.ctaHeading}
              </h3>
              <p className="text-[15px] font-medium text-white/70 mb-8 relative z-10">
                {data.ctaDesc}
              </p>
              <button className="group relative overflow-hidden bg-white text-[#0B1D3A] px-8 py-4 rounded text-[14px] font-bold hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] active:scale-[0.98] transition-all flex items-center gap-3 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out">
                <span className="relative z-10">{data.ctaButton}</span>
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          </div>
          <div className="w-full md:w-[52%] flex flex-col justify-center">
            <motion.div
              variants={item}
              className="bg-white border border-[#0B1D3A]/[0.06] rounded p-12 shadow-[0_30px_60px_-15px_rgba(11,29,58,0.12)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#C99A2E]/10 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#60A5FA]/10 to-transparent rounded-tr-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
              <h3
                className="text-[24px] font-bold mb-10 relative z-10 flex items-center gap-4"
                style={{ color: NAVY }}
              >
                <div
                  className="w-2 h-8 rounded-full"
                  style={{ background: GOLD }}
                ></div>
                {data.featuresHeading}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 relative z-10">
                {data.features.map((feature, idx) => {
                  const featureColors = [
                    "text-[#10B981]",
                    "text-[#3B82F6]",
                    "text-[#8B5CF6]",
                    "text-[#F59E0B]",
                    "text-[#EC4899]",
                    "text-[#06B6D4]",
                  ];
                  const bgColors = [
                    "bg-[#10B981]/10",
                    "bg-[#3B82F6]/10",
                    "bg-[#8B5CF6]/10",
                    "bg-[#F59E0B]/10",
                    "bg-[#EC4899]/10",
                    "bg-[#06B6D4]/10",
                  ];
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-4 group/item"
                    >
                      <div
                        className={`w-10 h-10 rounded ${bgColors[idx % bgColors.length]} flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-3`}
                      >
                        <Check
                          size={16}
                          className={`${featureColors[idx % featureColors.length]}`}
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-[16px] font-semibold text-[#0B1D3A]/80 leading-snug group-hover/item:text-[#0B1D3A] transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

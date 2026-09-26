import { useState, useEffect } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { getData } from "./data";
const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const journeyContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };
  const journeyItem: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <section
      className="w-full py-12 relative font-['Outfit'] overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F8FAFD 0%, #EEF4FF 100%)",
      }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#3B82F6]/[0.04] to-transparent rounded-full blur-[60px] pointer-events-none"
      ></motion.div>
      <div className="w-full px-5 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          className="flex flex-col items-center text-center mb-8"
        >
          <motion.div variants={item} className="mb-4">
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]"
              style={{ color: GOLD }}
            >
              <Sparkles size={12} />
              {data.overline}
            </span>
          </motion.div>
          <motion.h2
            variants={item}
            className="text-[2rem] leading-[1.12] font-black tracking-[-0.02em] mb-4"
            style={{ color: NAVY }}
          >
            {data.headline}
          </motion.h2>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          className="flex flex-col gap-10 relative px-2"
        >
          <div className="absolute top-[25px] bottom-[15px] left-[33px] -translate-x-1/2 w-[28px] z-0 pointer-events-none flex flex-col items-center">
            <div className="flex-1 w-[22px] bg-gradient-to-b from-white/90 via-[#F1F5F9]/80 to-white/90 border-x border-[#C99A2E]/30 backdrop-blur-md relative overflow-hidden rounded-t-full shadow-[0_2px_8px_rgba(201,154,46,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.08)] hover:-translate-y-1 transition-all duration-400 ease-out">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C99A2E]/35 to-transparent h-1/3"
                animate={{ y: ["-100%", "350%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C99A2E]/40 to-transparent" />
            </div>
            <div className="shrink-0 w-0 h-0 border-x-[14px] border-x-transparent border-t-[16px] border-t-[#C99A2E]/50 drop-shadow-sm -mt-[1px]" />
          </div>
          {data.steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-start gap-5 relative z-10"
            >
              <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-white/80 backdrop-blur-sm border border-[#0B1D3A]/10 flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(11,29,58,0.1)] relative">
                <div className="absolute inset-0 rounded-full border border-[#C99A2E]/20 scale-[1.1]"></div>
                <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] flex items-center justify-center shadow-inner">
                  <span className="text-white text-[16px] font-bold font-serif">
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="flex flex-col pt-1 bg-white/40 backdrop-blur-sm border border-[#0B1D3A]/[0.04] p-4 rounded shadow-[0_2px_10px_-2px_rgba(11,29,58,0.03)] w-full">
                <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-2">
                  {step.title}
                </h3>
                <p className="text-[14.5px] text-[#475569] font-medium leading-[1.65]">
                  {step.desc}
                </p>
              </div>
              {index < data.steps.length - 1 && (
                <div className="absolute -bottom-6 left-[25px] -translate-x-1/2 z-10 pointer-events-none flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="w-5 h-5 rounded-full bg-white/95 border border-[#C99A2E]/40 flex items-center justify-center shadow-sm"
                  >
                    <ChevronDown
                      size={12}
                      strokeWidth={3}
                      className="text-[#C99A2E]"
                    />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 flex justify-center w-full">
          <motion.div
            variants={journeyContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-50px" }}
            className="w-full bg-white/90 backdrop-blur-xl px-3 py-5 rounded border border-[#0B1D3A]/[0.08] shadow-[0_10px_30px_-5px_rgba(11,29,58,0.08)] flex flex-wrap items-center justify-center gap-2 relative z-10"
          >
            {data.journeyLabel.split(" → ").map((label, idx, arr) => {
              const isActive = activeStep === idx;
              return (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                  <motion.div
                    variants={journeyItem}
                    animate={
                      isActive ? { scale: 1.05, y: -1 } : { scale: 1, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 cursor-default select-none ${
                      isActive
                        ? "bg-[#0B1D3A] text-white border-[#C99A2E]/60 shadow-[0_4px_14px_rgba(11,29,58,0.22)]"
                        : "bg-[#F8FAFD] text-[#475569] border-[#0B1D3A]/[0.06]"
                    }`}
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      {isActive && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C99A2E] opacity-75"></span>
                      )}
                      <span
                        className="relative inline-flex rounded-full h-1.5 w-1.5"
                        style={{
                          backgroundColor: isActive
                            ? GOLD
                            : idx === arr.length - 1
                              ? GOLD
                              : "#94A3B8",
                        }}
                      ></span>
                    </span>
                    <span
                      className={`font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.14em] ${isActive ? "text-white" : ""}`}
                    >
                      {label}
                    </span>
                  </motion.div>
                  {idx < arr.length - 1 && (
                    <motion.div
                      variants={journeyItem}
                      animate={isActive ? { x: [0, 3, 0] } : { x: 0 }}
                      transition={{
                        duration: 0.6,
                        repeat: isActive ? Infinity : 0,
                      }}
                    >
                      <ArrowRight
                        size={13}
                        className={`transition-colors duration-300 ${isActive ? "text-[#C99A2E]" : "text-[#CBD5E1]"}`}
                        strokeWidth={2.5}
                      />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

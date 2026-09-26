import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  BarChart2,
  GraduationCap,
  Building2,
  Target,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import bgImage from "../../assets/bg-04.jpg";
import Modal from "../../Forms/Modal";
import RETrainersForm from "../../Forms/Mobile/RETrainersForm";
import RECompaniesForm from "../../Forms/Mobile/RECompaniesForm";
export default function Mobile() {
  const location = useLocation();
  const { language } = useLanguage();
  const data = getData(language);
  const [activeForm, setActiveForm] = useState<
    "open-plots" | "re-trainers-coaches" | "re-companies" | null
  >(null);
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentRoute =
    pathSegments.find(
      (segment) =>
        segment === "open-plots" ||
        segment === "re-trainers-coaches" ||
        segment === "re-companies" ||
        segment === "home",
    ) ||
    pathSegments[1] ||
    pathSegments[0] ||
    "home";
  const isHomePage = currentRoute === "home";
  const activeBtnIndex =
    currentRoute === "open-plots"
      ? 0
      : currentRoute === "re-trainers-coaches"
        ? 1
        : currentRoute === "re-companies"
          ? 2
          : -1;
  const handleButtonClick = (idx: number) => {
    if (idx === 0) {
      setActiveForm("open-plots");
    } else if (idx === 1) {
      setActiveForm("re-trainers-coaches");
    } else if (idx === 2) {
      setActiveForm("re-companies");
    }
  };
  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const registrationOptions = [
    {
      title: data.buttons[0] || "Register as a Learner",
      subtitle:
        language === "te"
          ? "నిపుణులు & ఉద్యోగార్థుల కోసం"
          : "Upskill with scenario-based practice",
      accent: "#C99A2E",
      cardBg:
        "linear-gradient(135deg, rgba(201, 154, 46, 0.22) 0%, rgba(18, 22, 38, 0.98) 45%, rgba(201, 154, 46, 0.08) 100%)",
      cardBorder: "rgba(201, 154, 46, 0.50)",
      iconBg: "linear-gradient(135deg, #D5AA45 0%, #C99A2E 100%)",
      icon: (
        <GraduationCap size={21} strokeWidth={2.3} className="text-white" />
      ),
    },
    {
      title: data.buttons[1] || "Register as a Trainer",
      subtitle:
        language === "te"
          ? "ట్రైనర్లు & నిపుణుల కోసం"
          : "Author courses & mentor top talent",
      accent: "#3B82F6",
      cardBg:
        "linear-gradient(135deg, rgba(59, 130, 246, 0.22) 0%, rgba(15, 24, 44, 0.98) 45%, rgba(59, 130, 246, 0.08) 100%)",
      cardBorder: "rgba(59, 130, 246, 0.50)",
      iconBg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
      icon: <Users size={21} strokeWidth={2.3} className="text-white" />,
    },
    {
      title: data.buttons[2] || "Register as a Company",
      subtitle:
        language === "te"
          ? "సంస్థలు & డెవలపర్ల కోసం"
          : "Benchmark & train advisory teams",
      accent: "#10B981",
      cardBg:
        "linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(12, 28, 30, 0.98) 45%, rgba(16, 185, 129, 0.08) 100%)",
      cardBorder: "rgba(16, 185, 129, 0.50)",
      iconBg: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
      icon: <Building2 size={21} strokeWidth={2.3} className="text-white" />,
    },
  ];
  return (
    <>
    <section className="w-full py-12 px-4 flex flex-col items-center justify-center font-['Outfit'] relative overflow-hidden bg-[#020b1e]">
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020b1e]/75 via-[#041029]/55 to-[#020b1e]/85 z-0 pointer-events-none" />
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-[#0B2A6B]/50 to-transparent -rotate-45 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-gradient-to-tl from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[60px] pointer-events-none z-0"
      />
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-40px" }}
        className="w-full max-w-[480px] relative z-20"
      >
        <div
          className="w-full rounded-[4px] pt-9 pb-8 px-4.5 sm:px-6 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(8,22,48,0.96) 0%, rgba(4,12,30,0.98) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C99A2E] to-transparent opacity-80" />
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#C99A2E]/[0.08] rounded-full blur-[45px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-[#0B2A6B]/[0.25] rounded-full blur-[45px] pointer-events-none" />
          <motion.div variants={itemVariant} className="mb-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] border border-[#C99A2E]/30 bg-[#C99A2E]/[0.08] shadow-[0_2px_10px_rgba(201,154,46,0.1)] backdrop-blur-sm">
              <Sparkles
                size={11}
                className="text-[#C99A2E] animate-pulse"
                strokeWidth={2.5}
              />
              <span className="font-bold text-[10px] tracking-[0.25em] text-[#E2C068] uppercase">
                {data.academyText}
              </span>
            </div>
          </motion.div>
          <motion.h2
            variants={itemVariant}
            className={`font-black tracking-tight text-white uppercase mb-3 px-2 w-full relative z-10 ${
              language === "te"
                ? "text-[1.5rem] leading-[1.25]"
                : "text-[1.85rem] leading-[1.12]"
            }`}
          >
            <span className="block">{data.headline.line1}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D5AA45] via-[#F3E1A0] to-[#C99A2E]">
              {data.headline.line2}
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariant}
            className="text-[13px] font-medium max-w-[360px] leading-[1.6] mb-7 text-white/70 px-2 relative z-10"
          >
            {data.headline.subtitle}
          </motion.p>
          <motion.div
            variants={itemVariant}
            className="flex flex-col gap-3.5 w-full mb-8 relative z-10"
          >
            {registrationOptions.map((opt, idx) => {
              const isSelected = !isHomePage && activeBtnIndex === idx;
              const isUnselectedOnOtherPage =
                !isHomePage && activeBtnIndex !== -1 && activeBtnIndex !== idx;
              const isColored = isHomePage || isSelected;
              return (
                <div key={idx} className="w-full flex flex-col">
                  <motion.button
                    disabled={isUnselectedOnOtherPage}
                    onClick={() =>
                      !isUnselectedOnOtherPage && handleButtonClick(idx)
                    }
                    whileTap={
                      isUnselectedOnOtherPage ? undefined : { scale: 0.98 }
                    }
                    className={`w-full p-4 rounded-[4px] transition-all duration-300 flex items-center justify-between gap-3.5 text-left relative overflow-hidden group ${
                      isSelected
                        ? "shadow-[0_8px_24px_-6px_rgba(0,0,0,0.4)] cursor-pointer"
                        : isUnselectedOnOtherPage
                          ? "opacity-30 cursor-not-allowed pointer-events-none select-none shadow-none"
                          : isHomePage
                            ? "shadow-[0_8px_24px_-6px_rgba(0,0,0,0.4)] cursor-pointer"
                            : "shadow-none opacity-80 hover:opacity-100 cursor-pointer"
                    }`}
                    style={{
                      background: isColored
                        ? opt.cardBg
                        : isUnselectedOnOtherPage
                          ? "rgba(255, 255, 255, 0.02)"
                          : "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(10, 18, 36, 0.85) 100%)",
                      border: isColored
                        ? `1px solid ${opt.cardBorder}`
                        : isUnselectedOnOtherPage
                          ? "1px solid rgba(255, 255, 255, 0.04)"
                          : "1px solid rgba(255, 255, 255, 0.09)",
                    }}
                  >
                    <div
                      className="w-1.5 h-10 rounded-[4px] shrink-0 shadow-sm transition-colors duration-300"
                      style={{
                        background: isColored
                          ? opt.iconBg
                          : "rgba(255, 255, 255, 0.15)",
                      }}
                    />
                    <div
                      className={`w-11 h-11 rounded-[4px] flex items-center justify-center shrink-0 shadow-md transition-all duration-300 group-hover:scale-105 ${
                        isColored ? "" : "text-white/60"
                      }`}
                      style={{
                        background: isColored
                          ? opt.iconBg
                          : "rgba(255, 255, 255, 0.07)",
                        border: isColored
                          ? undefined
                          : "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <div className={isColored ? "opacity-100" : "opacity-50"}>
                        {opt.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 pr-1">
                      <div
                        className={`text-[14.5px] font-black tracking-tight leading-snug transition-colors duration-300 ${
                          isColored ? "text-white" : "text-white/70"
                        }`}
                      >
                        {opt.title}
                      </div>
                      <div
                        className={`text-[12px] font-medium leading-tight truncate mt-0.5 transition-colors duration-300 ${
                          isColored ? "text-white/80" : "text-white/40"
                        }`}
                      >
                        {opt.subtitle}
                      </div>
                    </div>
                    <div
                      className="w-9 h-9 rounded-[4px] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:translate-x-0.5"
                      style={{
                        background: isColored
                          ? opt.iconBg
                          : "rgba(255, 255, 255, 0.07)",
                        border: isColored
                          ? undefined
                          : "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <ArrowRight
                        size={15}
                        strokeWidth={2.8}
                        className={isColored ? "text-white" : "text-white/40"}
                      />
                    </div>
                  </motion.button>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            variants={itemVariant}
            className="w-full pt-6 border-t border-white/[0.08] relative z-10 flex flex-col items-center"
          >
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#C99A2E] uppercase mb-3.5">
              {language === "te"
                ? "ప్లాట్‌ఫారమ్ విశేషాలు"
                : "PLATFORM HIGHLIGHTS"}
            </span>
            <div className="grid grid-cols-1 gap-2.5 w-full">
              {data.trustBadges.map((badge, i) => {
                const badgeColors = [
                  {
                    bg: "rgba(16, 185, 129, 0.08)",
                    border: "rgba(16, 185, 129, 0.22)",
                    iconBg: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                    icon: (
                      <ShieldCheck
                        size={18}
                        strokeWidth={2.4}
                        className="text-white"
                      />
                    ),
                  },
                  {
                    bg: "rgba(59, 130, 246, 0.08)",
                    border: "rgba(59, 130, 246, 0.22)",
                    iconBg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
                    icon: (
                      <Target
                        size={18}
                        strokeWidth={2.4}
                        className="text-white"
                      />
                    ),
                  },
                  {
                    bg: "rgba(201, 154, 46, 0.08)",
                    border: "rgba(201, 154, 46, 0.22)",
                    iconBg: "linear-gradient(135deg, #D5AA45 0%, #C99A2E 100%)",
                    icon: (
                      <BarChart2
                        size={18}
                        strokeWidth={2.4}
                        className="text-white"
                      />
                    ),
                  },
                ][i];
                return (
                  <div
                    key={i}
                    className="w-full flex items-center gap-3.5 p-3 rounded-[4px] transition-all duration-300"
                    style={{
                      background: badgeColors.bg,
                      border: `1px solid ${badgeColors.border}`,
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-[4px] flex items-center justify-center shrink-0 shadow-sm"
                      style={{
                        background: badgeColors.iconBg,
                      }}
                    >
                      {badgeColors.icon}
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="text-[13px] font-bold text-white leading-tight">
                        {badge.title}
                      </div>
                      {badge.subtitle && (
                        <div className="text-[11px] text-white/70 font-medium leading-tight mt-0.5">
                          {badge.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
    <Modal isOpen={activeForm !== null} onClose={() => setActiveForm(null)}>
      {activeForm === "open-plots" && <RECompaniesForm />}
      {activeForm === "re-trainers-coaches" && <RETrainersForm />}
      {activeForm === "re-companies" && <RECompaniesForm />}
    </Modal>
    </>
  );
}

import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  ShieldCheck,
  BarChart2,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import bgImage from "../../assets/bg-04.jpg";
export default function Desktop() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobileMode = location.pathname.startsWith("/mobile");
  const currentMode = isMobileMode ? "mobile" : "desktop";
  const { language } = useLanguage();
  const data = getData(language);
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
  const personaButtonStyles = [
    {
      gradient: "linear-gradient(135deg, #D5AA45 0%, #C99A2E 100%)",
      border: "#E2C068",
      shadow: "0 8px 24px -4px rgba(201,154,46,0.45)",
    },
    {
      gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
      border: "#60A5FA",
      shadow: "0 8px 24px -4px rgba(59,130,246,0.45)",
    },
    {
      gradient: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
      border: "#34D399",
      shadow: "0 8px 24px -4px rgba(16,185,129,0.45)",
    },
  ];
  const handleButtonClick = (idx: number) => {
    if (idx === 0) {
      navigate(`/${currentMode}/open-plots`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (idx === 1) {
      navigate(`/${currentMode}/re-trainers-coaches`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (idx === 2) {
      navigate(`/${currentMode}/re-companies`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <section className="w-full min-h-screen py-16 px-12 flex items-center justify-center font-['Outfit'] relative overflow-hidden bg-[#020b1e]">
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
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0B2A6B]/50 to-transparent -rotate-45 transform -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-50px] right-[10%] w-[600px] h-[350px] border-b-[1.5px] border-[#C99A2E]/60 rounded-[100%] rotate-12 z-0 pointer-events-none blur-[0.5px] hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.08)] hover:-translate-y-1 transition-all duration-400 ease-out"
      />
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-100px] right-[-100px] w-[800px] h-[400px] bg-gradient-to-tl from-[#071A49] to-transparent -rotate-12 z-0 pointer-events-none"
      />
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="max-w-[1060px] xl:max-w-[1120px] w-full relative z-20"
      >
        <div
          className="w-full rounded-[4px] pt-16 pb-12 px-10 flex flex-col items-center text-center relative overflow-visible shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(8,22,51,0.96) 0%, rgba(5,15,38,0.98) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C99A2E] to-transparent opacity-80 rounded-t-[4px]" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div variants={itemVariant} className="mb-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[4px] border border-[#C99A2E]/30 bg-[#C99A2E]/[0.08] shadow-[0_2px_12px_rgba(201,154,46,0.12)] backdrop-blur-sm">
              <Sparkles
                size={13}
                className="text-[#C99A2E] animate-pulse"
                strokeWidth={2.5}
              />
              <span className="font-bold text-[11px] tracking-[0.28em] text-[#E2C068] uppercase">
                {data.academyText}
              </span>
            </div>
          </motion.div>
          <motion.h2
            variants={itemVariant}
            className="text-[3.2rem] lg:text-[3.8rem] leading-[1.05] font-black tracking-tight text-white uppercase mb-6 w-full relative z-10"
          >
            <span className="block">{data.headline.line1}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D5AA45] via-[#F3E1A0] to-[#C99A2E]">
              {data.headline.line2}
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariant}
            className="text-[16px] font-medium max-w-[720px] leading-[1.65] mb-12 text-white/75 px-6 relative z-10"
          >
            {data.headline.subtitle}
          </motion.p>
          <motion.div
            variants={itemVariant}
            className="flex flex-wrap items-center justify-center gap-4 mb-16 px-6 relative z-20"
          >
            {data.buttons.map((btn, idx) => {
              const isSelected = !isHomePage && activeBtnIndex === idx;
              const isUnselectedOnOtherPage =
                !isHomePage && activeBtnIndex !== -1 && activeBtnIndex !== idx;
              const persona = personaButtonStyles[idx];
              return (
                <div key={idx} className="relative">
                  <motion.button
                    disabled={isUnselectedOnOtherPage}
                    onClick={() =>
                      !isUnselectedOnOtherPage && handleButtonClick(idx)
                    }
                    whileHover={
                      isUnselectedOnOtherPage
                        ? undefined
                        : { scale: 1.03, y: -2 }
                    }
                    whileTap={
                      isUnselectedOnOtherPage ? undefined : { scale: 0.97 }
                    }
                    className={`group px-7 py-3.5 rounded-[4px] font-bold text-[15px] xl:text-[16px] transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${
                      isSelected
                        ? "text-white cursor-pointer"
                        : isUnselectedOnOtherPage
                          ? "text-white/30 border border-white/5 opacity-30 cursor-not-allowed pointer-events-none select-none"
                          : "text-white border border-[#1E3A6D] hover:border-[#C99A2E]/60 hover:shadow-[0_8px_24px_-4px_rgba(201,154,46,0.25)] cursor-pointer"
                    }`}
                    style={{
                      background: isSelected
                        ? persona.gradient
                        : isUnselectedOnOtherPage
                          ? "rgba(255, 255, 255, 0.02)"
                          : "linear-gradient(135deg, #071738 0%, #0B1D3A 100%)",
                      borderColor: isSelected ? persona.border : undefined,
                      boxShadow: isSelected ? persona.shadow : undefined,
                    }}
                  >
                    <span>{btn}</span>
                    <ArrowRight
                      size={16}
                      strokeWidth={2.5}
                      className={
                        isSelected
                          ? "w-4 opacity-100 translate-x-0 transition-all duration-300 text-white"
                          : isUnselectedOnOtherPage
                            ? "w-0 opacity-0 -translate-x-1 transition-all duration-300 text-white/20"
                            : "w-0 opacity-0 -translate-x-1 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#E2C068]"
                      }
                    />
                  </motion.button>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            variants={itemVariant}
            className="w-full pt-8 border-t border-white/[0.08] relative z-10 flex flex-col items-center"
          >
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#C99A2E] uppercase mb-5">
              {language === "te"
                ? "ప్లాట్‌ఫారమ్ విశేషాలు"
                : "PLATFORM HIGHLIGHTS"}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[960px] mx-auto">
              {data.trustBadges.map((badge, i) => {
                const badgeColors = [
                  {
                    bg: "rgba(16, 185, 129, 0.08)",
                    border: "rgba(16, 185, 129, 0.22)",
                    iconBg: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                    icon: (
                      <ShieldCheck
                        size={22}
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
                        size={22}
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
                        size={22}
                        strokeWidth={2.4}
                        className="text-white"
                      />
                    ),
                  },
                ][i];
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-center gap-4 p-4 rounded-[4px] transition-all duration-300 shadow-sm"
                    style={{
                      background: badgeColors.bg,
                      border: `1px solid ${badgeColors.border}`,
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-[4px] flex items-center justify-center shrink-0 shadow-md"
                      style={{
                        background: badgeColors.iconBg,
                      }}
                    >
                      {badgeColors.icon}
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="text-[14px] xl:text-[14.5px] font-bold text-white leading-tight">
                        {badge.title}
                      </div>
                      {badge.subtitle && (
                        <div className="text-[12px] text-white/70 font-medium leading-tight mt-1">
                          {badge.subtitle}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

import { ArrowRight, BookOpen, ChartNoAxesCombined, CheckCheck, GraduationCap, HelpCircle, Play, Target } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, type Variants } from "motion/react";
import type { PointerEvent } from "react";
import { useLanguage } from "../../context/LanguageContext";
import primaryLogo from "../../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";
import { getData } from "./data";

const capabilityIcons = [
  {
    icon: GraduationCap,
    bg: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    shadow: "0 4px 12px rgba(37, 99, 235, 0.28)",
  },
  {
    icon: BookOpen,
    bg: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
    shadow: "0 4px 12px rgba(2, 132, 199, 0.28)",
  },
  {
    icon: HelpCircle,
    bg: "linear-gradient(135deg, #FB923C 0%, #EA580C 100%)",
    shadow: "0 4px 12px rgba(234, 88, 12, 0.32)",
  },
  {
    icon: Target,
    bg: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    shadow: "0 4px 12px rgba(124, 58, 237, 0.28)",
  },
  {
    icon: CheckCheck,
    bg: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
    shadow: "0 4px 12px rgba(16, 185, 129, 0.28)",
  },
  {
    icon: ChartNoAxesCombined,
    bg: "linear-gradient(135deg, #F43F5E 0%, #BE123C 100%)",
    shadow: "0 4px 12px rgba(244, 63, 94, 0.28)",
  },
];

const sequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 22, mass: 0.8 },
  },
};

export default function HeroIntro({ mobile = false, onPlay }: { mobile?: boolean; onPlay: () => void }) {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 120, damping: 24 });
  const glowY = useSpring(pointerY, { stiffness: 120, damping: 24 });
  const glowOpacity = useSpring(0, { stiffness: 120, damping: 24 });
  const data = getData(language);

  const moveGlow = (event: PointerEvent<HTMLDivElement>) => {
    if (mobile || reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left - 140);
    pointerY.set(event.clientY - bounds.top - 140);
    glowOpacity.set(1);
  };

  const explore = () => {
    document.getElementById(mobile ? "section-02-coming-soon-mobile" : "section-02-coming-soon")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
  };

  return (
    <motion.div
      className="@container relative z-10 w-full min-w-0 font-['Outfit'] select-none"
      variants={sequence}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      onPointerMove={moveGlow}
      onPointerLeave={() => glowOpacity.set(0)}
    >
      {!mobile && !reduceMotion && (
        <motion.div
          className="absolute top-0 left-0 w-[300px] h-[300px] -z-10 pointer-events-none rounded-full bg-gradient-to-br from-[#BFD6F6]/30 via-[#B9DDDD]/15 to-transparent blur-2xl"
          aria-hidden="true"
          style={{ x: glowX, y: glowY, opacity: glowOpacity }}
        />
      )}

      <motion.div className="flex items-center mb-5 sm:mb-6" variants={reveal}>
        <motion.img
          src={primaryLogo}
          alt="FARE — Skill Enhancement for Real Estate"
          className="block w-[160px] sm:w-[196px] max-w-full h-auto cursor-pointer"
          whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        />
      </motion.div>

      <motion.div className="flex items-center gap-2 mb-3" variants={reveal}>
        <motion.span
          className="w-[19px] h-[2px] bg-[#B48A34] rounded-full shrink-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
        <span className="text-[10px] font-semibold tracking-[0.17em] uppercase text-[#6B737F]">
          {language === "te" ? "మీ ఎదుగుదలకు తదుపరి అడుగు" : "YOUR NEXT CHAPTER STARTS HERE"}
        </span>
      </motion.div>

      <motion.h1
        className="m-0 text-[#0B1D3A] font-extrabold text-[min(64px,11cqi)] tracking-[-0.045em] leading-[1.12]"
        style={language === "te" ? { fontSize: "min(58px, 9cqi)" } : undefined}
        variants={sequence}
      >
        <motion.span variants={reveal} className="block whitespace-nowrap">
          {data.headline.line1}
        </motion.span>
        <motion.span
          variants={reveal}
          className="relative block w-fit mt-1 whitespace-nowrap"
        >
          <span
            className="text-[#AA7A20] font-extrabold bg-gradient-to-r from-[#AA7A20] via-[#D7AD58] to-[#AA7A20] bg-clip-text text-transparent animate-gradient-x"
          >
            {data.headline.line2}
          </span>
          <motion.span
            className="absolute left-0 -bottom-1 h-[2px] w-[36%] rounded-full bg-gradient-to-r from-[#B58C3B]/80 to-transparent pointer-events-none"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            aria-hidden="true"
          />
        </motion.span>
      </motion.h1>

      <motion.p
        className="text-[#546175] text-[min(16px,3.3cqi)] leading-[1.7] mt-3.5 sm:mt-4 mb-5 sm:mb-6 font-medium whitespace-nowrap"
        style={language === "te" ? { fontSize: "min(16px, 3.15cqi)" } : undefined}
        variants={reveal}
      >
        {data.subtitle}
      </motion.p>

      <motion.div className="border-b border-[#0B1D3A]/[0.08] mb-4 pb-4" variants={sequence}>
        <motion.p
          className="m-0 mb-3 text-[9px] font-bold tracking-[0.13em] uppercase text-[#657185]"
          variants={reveal}
        >
          {language === "te" ? "మీ ఎదుగుదలకు కావలసినవన్నీ" : "ONE PLATFORM. EVERY STEP OF YOUR GROWTH."}
        </motion.p>
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 list-none p-0 m-0"
          variants={sequence}
        >
          {data.capabilities.map((capability, index) => {
            const { icon: Icon, bg, shadow } = capabilityIcons[index];
            return (
              <motion.li
                key={capability}
                variants={reveal}
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="group relative flex items-center gap-2.5 px-3 py-2 transition-all duration-200 cursor-default"
              >
                <motion.span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white shadow-xs transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ background: bg, boxShadow: shadow }}
                  aria-hidden="true"
                >
                  <Icon size={16} strokeWidth={2} />
                </motion.span>
                <span className="text-[11.5px] font-semibold text-[#1E293B] group-hover:text-[#0B1D3A] transition-colors leading-snug">
                  {capability}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>

      <motion.div className="flex items-center gap-3 sm:gap-5 pt-1.5" variants={reveal}>
        <motion.button
          type="button"
          onClick={explore}
          whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative overflow-hidden inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-[13px] text-white bg-[#0B1D3A] hover:bg-[#19385E] shadow-[0_6px_16px_rgba(11,29,58,0.16)] hover:shadow-[0_10px_24px_rgba(11,29,58,0.26)] transition-all cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
        >
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"
          />
          <span className="tracking-wide">{data.buttons.primary}</span>
          <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
        </motion.button>

        <motion.button
          type="button"
          onClick={onPlay}
          whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-xs sm:text-[13px] text-[#0B1D3A] bg-white/80 hover:bg-white backdrop-blur-md border border-[#0B1D3A]/10 hover:border-[#0B1D3A]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_8px_rgba(11,29,58,0.05)] hover:shadow-[0_8px_20px_rgba(11,29,58,0.08)] transition-all cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
        >
          <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#0B1D3A] text-white shrink-0 group-hover:scale-105 transition-transform">
            <span className="absolute -inset-1 rounded-full border border-[#0B1D3A]/30 animate-ping opacity-50 pointer-events-none" />
            <Play size={11} fill="currentColor" className="ml-0.5" />
          </span>
          <span>{data.buttons.secondary}</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

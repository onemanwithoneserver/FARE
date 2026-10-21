import { ArrowRight, BookOpen, ChartNoAxesCombined, CheckCheck, GraduationCap, HelpCircle, Play, Target } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, type Variants } from "motion/react";
import type { PointerEvent } from "react";
import { useLanguage } from "../../context/LanguageContext";
import primaryLogo from "../../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";
import { getData } from "./data";
import "./hero.css";

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

const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 24, mass: 0.8 },
  },
};

const sequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const iconInteraction: Variants = {
  visible: { y: 0, rotate: 0, scale: 1 },
  hover: { y: -3, rotate: -6, scale: 1.07 },
};

const buttonInteraction: Variants = {
  rest: { y: 0 },
  hover: { y: -2 },
};

export default function HeroIntro({ mobile = false, onPlay }: { mobile?: boolean; onPlay: () => void }) {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 110, damping: 25 });
  const glowY = useSpring(pointerY, { stiffness: 110, damping: 25 });
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
      className={`fare-hero-intro${language === "te" ? " fare-hero-telugu" : ""}`}
      variants={sequence}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      onPointerMove={moveGlow}
      onPointerLeave={() => glowOpacity.set(0)}
    >
      {!mobile && !reduceMotion && (
        <motion.div
          className="fare-hero-pointer-glow"
          aria-hidden="true"
          style={{ x: glowX, y: glowY, opacity: glowOpacity }}
        />
      )}
      <motion.div className="fare-hero-brand" variants={reveal}>
        <motion.img
          src={primaryLogo}
          alt="FARE — Skill Enhancement for Real Estate"
          whileHover={reduceMotion ? undefined : { y: -3, scale: 1.025, rotate: -1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
        />
      </motion.div>
      <motion.div className="fare-hero-eyebrow" variants={reveal}>
        <motion.span
          aria-hidden="true"
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5 } } }}
          style={{ transformOrigin: "left" }}
        />
        {language === "te" ? "మీ ఎదుగుదలకు తదుపరి అడుగు" : "YOUR NEXT CHAPTER STARTS HERE"}
      </motion.div>
      <motion.h1 className="fare-hero-title" variants={sequence}>
        <motion.span variants={reveal}>{data.headline.line1}</motion.span>{" "}
        <motion.span className="fare-hero-gold" variants={reveal}>
          {data.headline.line2}
          <motion.span
            className="fare-hero-title-accent"
            aria-hidden="true"
            variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { delay: 0.35, duration: 0.7, ease: "easeOut" } } }}
          />
        </motion.span>
      </motion.h1>
      <motion.p className="fare-hero-subtitle" variants={reveal}>{data.subtitle}</motion.p>
      <motion.div className="fare-hero-toolkit" variants={sequence}>
        <motion.p variants={reveal}>{language === "te" ? "మీ ఎదుగుదలకు కావలసినవన్నీ" : "ONE PLATFORM. EVERY STEP OF YOUR GROWTH."}</motion.p>
        <motion.ul className="fare-hero-capabilities" variants={sequence}>
          {data.capabilities.map((capability, index) => {
            const { icon: Icon, bg, shadow } = capabilityIcons[index];
            return (
              <motion.li key={capability} variants={reveal} whileHover={reduceMotion ? undefined : "hover"}>
                <motion.span
                  className="fare-hero-capability-icon"
                  style={{ background: bg, boxShadow: shadow }}
                  aria-hidden="true"
                  variants={iconInteraction}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                >
                  <Icon size={16} strokeWidth={2} />
                </motion.span>
                <span>{capability}</span>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
      <motion.div className="fare-hero-actions" variants={reveal}>
        <motion.button
          type="button"
          className="fare-hero-primary"
          onClick={explore}
          variants={buttonInteraction}
          initial="rest"
          animate="rest"
          whileHover={reduceMotion ? undefined : "hover"}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {data.buttons.primary}
          <motion.span className="fare-hero-button-arrow" variants={{ rest: { x: 0 }, hover: { x: 3 } }} aria-hidden="true">
            <ArrowRight size={18} />
          </motion.span>
        </motion.button>
        <button
          type="button"
          className="fare-hero-video"
          onClick={onPlay}
        >
          <span>
            <Play size={12} fill="currentColor" aria-hidden="true" />
          </span>
          {data.buttons.secondary}
        </button>
      </motion.div>
    </motion.div>
  );
}

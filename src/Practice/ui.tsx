/**
 * FARE Live Mocks — shared design system.
 *
 * Every section (desktop + mobile) is composed from these primitives so that
 * typography, spacing, radii, shadows, accent colours and motion stay
 * consistent across the whole page.
 */
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ChevronRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Tokens                                                              */
/* ------------------------------------------------------------------ */

export const NAVY = "#0B1D3A";
export const GOLD = "#C99A2E";
export const EASE = [0.16, 1, 0.3, 1] as const;

export type Accent = {
  name: string;
  from: string;
  to: string;
  /** rgba glow used for coloured shadows */
  glow: string;
  /** very light tint for chip / surface backgrounds */
  soft: string;
  /** readable text colour on the soft tint */
  ink: string;
};

/**
 * Cohesive jewel-tone palette anchored by FARE navy + gold.
 * Icons / text placed on these gradients are always white.
 */
export const ACCENTS: Accent[] = [
  { name: "navy", from: "#1E3A74", to: "#0B1D3A", glow: "rgba(11,29,58,0.38)", soft: "#EEF2F9", ink: "#0B1D3A" },
  { name: "gold", from: "#E0B550", to: "#B8871F", glow: "rgba(201,154,46,0.42)", soft: "#FBF5E7", ink: "#8A5A00" },
  { name: "indigo", from: "#818CF8", to: "#4F46E5", glow: "rgba(79,70,229,0.38)", soft: "#EEF0FF", ink: "#4338CA" },
  { name: "teal", from: "#22D3EE", to: "#0891B2", glow: "rgba(8,145,178,0.38)", soft: "#E8F8FC", ink: "#0E7490" },
  { name: "rose", from: "#FB7185", to: "#E11D48", glow: "rgba(225,29,72,0.34)", soft: "#FFF0F3", ink: "#BE123C" },
  { name: "emerald", from: "#34D399", to: "#059669", glow: "rgba(5,150,105,0.36)", soft: "#E9FBF3", ink: "#047857" },
  { name: "violet", from: "#A78BFA", to: "#7C3AED", glow: "rgba(124,58,237,0.36)", soft: "#F4EFFF", ink: "#6D28D9" },
  { name: "amber", from: "#FBBF24", to: "#D97706", glow: "rgba(217,119,6,0.38)", soft: "#FFF7E6", ink: "#B45309" },
  { name: "sky", from: "#38BDF8", to: "#0284C7", glow: "rgba(2,132,199,0.36)", soft: "#EAF6FE", ink: "#0369A1" },
];

export const accentAt = (i: number): Accent => ACCENTS[((i % ACCENTS.length) + ACCENTS.length) % ACCENTS.length];
export const accentGradient = (a: Accent, deg = 135) => `linear-gradient(${deg}deg, ${a.from} 0%, ${a.to} 100%)`;

export const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

/* ------------------------------------------------------------------ */
/* Motion                                                              */
/* ------------------------------------------------------------------ */

export const staggerContainer = (stagger = 0.08, delay = 0.05): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const VIEWPORT = { once: true, amount: 0.15 } as const;

/** Fades + lifts its children into view once. Respects reduced motion. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Icon badge                                                          */
/* ------------------------------------------------------------------ */

const BADGE_SIZES = {
  xs: { box: "w-8 h-8 rounded-[8px]", icon: 15 },
  sm: { box: "w-10 h-10 rounded-[10px]", icon: 18 },
  md: { box: "w-12 h-12 rounded-[12px]", icon: 22 },
  lg: { box: "w-14 h-14 rounded-[14px]", icon: 26 },
} as const;

/** Gradient accent tile with a white icon. Animates on parent `group` hover. */
export function IconBadge({
  icon: Icon,
  accent,
  size = "md",
  className = "",
  interactive = true,
}: {
  icon: LucideIcon;
  accent: Accent;
  size?: keyof typeof BADGE_SIZES;
  className?: string;
  interactive?: boolean;
}) {
  const s = BADGE_SIZES[size];
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex items-center justify-center shrink-0 text-white ${s.box} ${
        interactive
          ? "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-rotate-6"
          : ""
      } ${className}`}
      style={{
        background: accentGradient(accent),
        boxShadow: `0 10px 22px -8px ${accent.glow}, inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.08)`,
      }}
    >
      <Icon size={s.icon} strokeWidth={2.2} />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Section shell                                                       */
/* ------------------------------------------------------------------ */

type Tone = "white" | "soft" | "tint" | "navy";

const TONE_BG: Record<Tone, string> = {
  white: "#FFFFFF",
  soft: "#F8F9FC",
  tint: "linear-gradient(180deg, #FFFFFF 0%, #F3F6FD 100%)",
  navy:
    "radial-gradient(ellipse at 12% 18%, rgba(99,102,241,0.18) 0%, transparent 50%), radial-gradient(ellipse at 88% 82%, rgba(201,154,46,0.16) 0%, transparent 50%), linear-gradient(160deg, #0D2654 0%, #0B1D3A 45%, #071A49 100%)",
};

export function Section({
  children,
  tone = "white",
  mobile = false,
  orbs = false,
  width = "max-w-[1240px]",
  className = "",
  ariaLabel,
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  mobile?: boolean;
  orbs?: boolean;
  width?: string;
  className?: string;
  ariaLabel?: string;
  id?: string;
}) {
  const dark = tone === "navy";
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`w-full relative overflow-hidden font-['Outfit'] ${dark ? "text-white" : "text-[#0B1D3A]"} ${
        mobile ? "py-14 px-5" : "py-24 lg:py-28 fare-noise-overlay"
      } ${className}`}
      style={{ background: TONE_BG[tone] }}
    >
      {orbs && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className={`absolute -top-24 -left-24 ${mobile ? "w-64 h-64" : "w-[520px] h-[520px]"} rounded-full blur-[110px] animate-pulse-glow`}
            style={{ background: dark ? "rgba(99,102,241,0.22)" : "rgba(99,102,241,0.09)" }}
          />
          <div
            className={`absolute -bottom-24 -right-24 ${mobile ? "w-64 h-64" : "w-[460px] h-[460px]"} rounded-full blur-[110px] animate-pulse-glow`}
            style={{ background: dark ? "rgba(201,154,46,0.2)" : "rgba(201,154,46,0.09)", animationDelay: "1.5s" }}
          />
        </div>
      )}
      {dark && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: mobile ? "36px 36px" : "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      )}
      <div className={`relative z-10 w-full mx-auto ${mobile ? "" : `${width} px-6 lg:px-10`}`}>{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Headings                                                            */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  icon: Icon,
  accent = ACCENTS[1],
  dark = false,
  mobile = false,
}: {
  children: ReactNode;
  icon?: LucideIcon;
  accent?: Accent;
  dark?: boolean;
  mobile?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border ${mobile ? "pl-1 pr-3 py-1" : "pl-1.5 pr-4 py-1.5"} ${
        dark ? "bg-white/[0.06] border-white/15 backdrop-blur-md" : "bg-white border-[#E6EBF3] shadow-sm"
      }`}
    >
      {Icon ? (
        <span
          aria-hidden="true"
          className={`inline-flex items-center justify-center rounded-full text-white ${mobile ? "w-5 h-5" : "w-6 h-6"}`}
          style={{ background: accentGradient(accent), boxShadow: `0 4px 10px -3px ${accent.glow}` }}
        >
          <Icon size={mobile ? 11 : 12} strokeWidth={2.6} />
        </span>
      ) : (
        <span className="w-2 h-2 rounded-full ml-1.5" style={{ background: accent.to }} />
      )}
      <span
        className={`font-bold uppercase leading-none ${mobile ? "text-[10px] tracking-[0.14em]" : "text-[11px] tracking-[0.18em]"} ${
          dark ? "text-white/85" : "text-[#0B1D3A]/75"
        }`}
      >
        {children}
      </span>
    </span>
  );
}

export function GoldBar({ center = true, mobile = false }: { center?: boolean; mobile?: boolean }) {
  return (
    <motion.span
      aria-hidden="true"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
      className={`block h-[3px] rounded-full bg-gradient-to-r from-[#C99A2E] via-[#E4C46A] to-[#C99A2E] ${
        mobile ? "w-12" : "w-16"
      } ${center ? "mx-auto origin-center" : "origin-left"}`}
    />
  );
}

export function SectionHeader({
  eyebrow,
  icon,
  accent,
  title,
  description,
  align = "center",
  mobile = false,
  dark = false,
  className = "",
}: {
  eyebrow?: ReactNode;
  icon?: LucideIcon;
  accent?: Accent;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  mobile?: boolean;
  dark?: boolean;
  className?: string;
}) {
  const center = align === "center";
  return (
    <Reveal
      className={`flex flex-col ${center ? "items-center text-center mx-auto" : "items-start text-left"} ${
        mobile ? "mb-9" : "mb-14 max-w-[820px]"
      } ${className}`}
    >
      {eyebrow && (
        <div className={mobile ? "mb-4" : "mb-6"}>
          <Eyebrow icon={icon} accent={accent} dark={dark} mobile={mobile}>
            {eyebrow}
          </Eyebrow>
        </div>
      )}
      <h2
        className={`font-black tracking-[-0.02em] leading-[1.12] ${
          mobile ? "text-[26px] mb-4" : "text-[34px] md:text-[40px] lg:text-[46px] mb-5"
        } ${dark ? "text-white" : "text-[#0B1D3A]"}`}
      >
        {title}
      </h2>
      <GoldBar center={center} mobile={mobile} />
      {description && (
        <p
          className={`font-medium leading-[1.7] whitespace-pre-line ${
            mobile ? "text-[14.5px] mt-5" : "text-[17px] lg:text-[18px] mt-6 max-w-[680px]"
          } ${dark ? "text-white/70" : "text-[#475569]"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

type BtnProps = {
  children: ReactNode;
  icon?: LucideIcon;
  full?: boolean;
  mobile?: boolean;
  onClick?: () => void;
  className?: string;
};

export function PrimaryButton({ children, icon: Icon, full, mobile, onClick, className = "", variant = "navy" }: BtnProps & { variant?: "navy" | "gold" | "light" }) {
  const styles =
    variant === "gold"
      ? { background: "linear-gradient(135deg, #E0B550 0%, #C99A2E 55%, #B8871F 100%)", boxShadow: "0 10px 28px -8px rgba(201,154,46,0.55)", color: "#0B1D3A" }
      : variant === "light"
        ? { background: "#FFFFFF", boxShadow: "0 10px 28px -10px rgba(0,0,0,0.45)", color: "#0B1D3A" }
        : { background: "linear-gradient(135deg, #16316A 0%, #0B1D3A 100%)", boxShadow: "0 10px 28px -10px rgba(11,29,58,0.55), inset 0 1px 0 rgba(255,255,255,0.12)", color: "#FFFFFF" };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden inline-flex items-center justify-center gap-2.5 font-semibold rounded-[10px] cursor-pointer select-none transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.98] ${FOCUS_RING} ${
        mobile ? "text-[14px] px-6 py-3.5" : "text-[15px] px-7 py-4"
      } ${full ? "w-full" : ""} ${className}`}
      style={styles}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-shimmer pointer-events-none"
      />
      {Icon && <Icon size={17} strokeWidth={2.4} className="relative z-10 shrink-0" />}
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 inline-flex w-4 h-4 shrink-0">
        <ChevronRight size={16} strokeWidth={2.6} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-1" />
        <ArrowRight size={16} strokeWidth={2.6} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" />
      </span>
    </button>
  );
}

export function SecondaryButton({ children, icon: Icon, full, mobile, onClick, className = "", dark = false }: BtnProps & { dark?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2.5 font-semibold rounded-[10px] border cursor-pointer select-none transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${FOCUS_RING} ${
        dark
          ? "text-white border-white/25 bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/45 backdrop-blur-md"
          : "text-[#0B1D3A] border-[#0B1D3A]/15 bg-white/70 hover:border-[#C99A2E] hover:text-[#8A5A00] hover:shadow-[0_10px_24px_-12px_rgba(201,154,46,0.6)] backdrop-blur-md"
      } ${mobile ? "text-[14px] px-6 py-3.5" : "text-[15px] px-7 py-4"} ${full ? "w-full" : ""} ${className}`}
    >
      {Icon && <Icon size={17} strokeWidth={2.4} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />}
      <span>{children}</span>
      <ArrowRight size={15} strokeWidth={2.6} className="shrink-0 transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:translate-x-1" />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Flow strip  (e.g. "SCENARIO → EXPERT → BOOK")                        */
/* ------------------------------------------------------------------ */

export const splitFlow = (flow: string) =>
  flow
    .split("→")
    .map((x) => x.trim())
    .filter(Boolean);

export function FlowStrip({
  steps,
  highlight,
  dark = false,
  mobile = false,
  className = "",
}: {
  steps: string[];
  highlight?: string;
  dark?: boolean;
  mobile?: boolean;
  className?: string;
}) {
  return (
    <motion.ol
      variants={staggerContainer(0.09, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={`flex flex-wrap items-center justify-center ${mobile ? "gap-x-1.5 gap-y-2" : "gap-x-2.5 gap-y-3"} ${className}`}
      aria-label={steps.join(" then ")}
    >
      {steps.map((step, i) => {
        const a = accentAt(i);
        const isHi = highlight ? step === highlight : false;
        return (
          <motion.li key={`${step}-${i}`} variants={fadeScale} className="flex items-center gap-1.5 lg:gap-2.5">
            <span
              className={`inline-flex items-center gap-2 rounded-full font-bold uppercase tracking-[0.12em] transition-transform duration-300 hover:-translate-y-0.5 ${
                mobile ? "text-[10px] pl-1 pr-2.5 py-1" : "text-[12px] pl-1.5 pr-4 py-1.5"
              } ${
                isHi
                  ? "text-white"
                  : dark
                    ? "bg-white/[0.07] border border-white/15 text-white/85"
                    : "bg-white border border-[#E6EBF3] text-[#0B1D3A]/80 shadow-sm"
              }`}
              style={isHi ? { background: accentGradient(ACCENTS[1]), boxShadow: `0 8px 20px -8px ${ACCENTS[1].glow}` } : undefined}
            >
              <span
                aria-hidden="true"
                className={`inline-flex items-center justify-center rounded-full text-white font-black ${mobile ? "w-[18px] h-[18px] text-[9px]" : "w-6 h-6 text-[10px]"}`}
                style={{ background: isHi ? "rgba(255,255,255,0.25)" : accentGradient(a) }}
              >
                {i + 1}
              </span>
              {step}
            </span>
            {i < steps.length - 1 && (
              <ChevronRight aria-hidden="true" size={mobile ? 12 : 14} strokeWidth={3} className={dark ? "text-white/30" : "text-[#0B1D3A]/25"} />
            )}
          </motion.li>
        );
      })}
    </motion.ol>
  );
}

/* ------------------------------------------------------------------ */
/* Surfaces                                                            */
/* ------------------------------------------------------------------ */

/** Standard light card: lifts on hover, reveals an accent hairline on top. */
export const CARD_BASE =
  "group relative bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm transition-[translate,box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";
export const CARD_HOVER = "hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_24px_48px_-20px_rgba(11,29,58,0.22)]";

export function AccentHairline({ accent }: { accent: Accent }) {
  return (
    <span
      aria-hidden="true"
      className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ background: accentGradient(accent, 90) }}
    />
  );
}

/** Soft accent glow that fades in behind card content on hover. */
export function HoverGlow({ accent }: { accent: Accent }) {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
      style={{ background: accent.glow.replace(/0\.\d+\)$/, "0.16)") }}
    />
  );
}

export function Chip({ children, accent, mobile = false }: { children: ReactNode; accent: Accent; mobile?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[8px] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
        mobile ? "text-[12px] px-2.5 py-1.5" : "text-[13px] px-3 py-1.5"
      }`}
      style={{ background: accent.soft, color: accent.ink, boxShadow: `inset 0 0 0 1px ${accent.glow.replace(/0\.\d+\)$/, "0.14)")}` }}
    >
      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent.to }} />
      {children}
    </span>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAFBFF] backdrop-blur-md"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#C99A2E] to-[#E4C46A] blur-[10px]"
          />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="w-full h-full flex flex-col"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}


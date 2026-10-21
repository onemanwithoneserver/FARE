import { motion } from "motion/react";
import { ArrowRight, BellRing } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ComingSoonStickyBar({ isMobile = false }: { isMobile?: boolean }) {
  const { language } = useLanguage();
  const scrollToSection = () => {
    const targetId = isMobile ? "section-02-coming-soon-mobile" : "section-02-coming-soon";
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      el.classList.add("ring-4", "ring-[#C99A2E]", "ring-offset-4", "transition-all", "duration-500");
      setTimeout(() => {
        el.classList.remove("ring-4", "ring-[#C99A2E]", "ring-offset-4");
      }, 2500);
    }
  };

  if (isMobile) {
    return (
      <button
        type="button"
        onClick={scrollToSection}
        className="flex min-h-11 w-full shrink-0 items-center justify-center gap-2.5 border-b border-[#C99A2E]/20 bg-[#F5EEDC] px-4 py-2 text-[11px] font-semibold text-[#70531A] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#0B1D3A]"
      >
        <BellRing size={14} aria-hidden="true" />
        <span>{language === "te" ? "త్వరలో రాబోతోంది · వివరాలు తెలుసుకోండి" : "Coming soon · Discover what's next"}</span>
        <ArrowRight size={14} aria-hidden="true" />
      </button>
    );
  }

  return (
    <motion.aside
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-[100] font-['Outfit'] select-none ${
        isMobile ? "scale-90 origin-right" : ""
      }`}
      aria-label="Coming Soon Navigation"
    >
      <motion.button
        type="button"
        onClick={scrollToSection}
        whileHover={{ x: -6 }}
        whileTap={{ scale: 0.95 }}
        className="relative overflow-hidden flex flex-col items-center gap-3 py-6 px-3 rounded-l-[10px] text-white border-l border-y border-white/40 cursor-pointer group shadow-[-10px_10px_30px_rgba(11,29,58,0.3)] focus:outline-none"
        style={{
          background: "linear-gradient(180deg, #D4AF37 0%, #C99A2E 40%, #A87A18 100%)",
        }}
        aria-label="Scroll to Coming Soon section"
        title="Explore Coming Soon Section"
      >
        <motion.span
          aria-hidden
          animate={{ y: ["-120%", "320%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-x-0 h-1/4 bg-gradient-to-b from-transparent via-white/45 to-transparent pointer-events-none"
        />

        <div className="relative">
          <span className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-[#E11D48] rounded-full ring-2 ring-white animate-pulse" />
          <motion.div
            animate={{ rotate: [0, -14, 14, -8, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="relative text-white drop-shadow-sm"
          >
            <BellRing size={19} strokeWidth={2.4} />
          </motion.div>
        </div>

        <span
          className="relative text-[12px] font-extrabold tracking-[0.28em] uppercase text-white drop-shadow-sm text-center leading-none"
          style={{ writingMode: "vertical-rl" }}
        >
          COMING SOON
        </span>
      </motion.button>
    </motion.aside>
  );
}

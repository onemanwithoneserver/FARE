import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { CheckCircle, Search, Lightbulb, RotateCw, Clock } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";

const FEATURE_ICONS = [CheckCircle, Search, Lightbulb, RotateCw, Clock];
const ICON_COLORS = [
  "from-[#38BDF8] to-[#0284C7]", // Blue
  "from-[#34D399] to-[#059669]", // Emerald
  "from-[#F472B6] to-[#DB2777]", // Pink
  "from-[#A78BFA] to-[#7C3AED]", // Violet
  "from-[#FBBF24] to-[#D97706]", // Amber
];

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-[#F8FAFD] py-24 px-10 font-['Outfit'] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-[1200px] mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <motion.span
            variants={item}
            className="text-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block"
          >
            {data.badge}
          </motion.span>
          <motion.h2
            variants={item}
            className="text-4xl lg:text-[2.75rem] font-black mb-6 tracking-tight leading-tight"
            style={{ color: NAVY }}
          >
            {data.title}
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg text-[#64748B] font-medium max-w-3xl mx-auto whitespace-pre-wrap leading-relaxed"
          >
            {data.intro}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {data.features.map((f, i) => {
            const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
            const colorGradient = ICON_COLORS[i % ICON_COLORS.length];
            
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-white p-8 rounded-xl border border-[#E2E8F0]/80 hover:shadow-[0_8px_30px_rgba(11,29,58,0.06)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${colorGradient} shadow-sm`}
                >
                  <Icon size={20} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: NAVY }}>
                  {f.title}
                </h3>
                <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                  {f.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={item} className="text-center">
          <p className="text-2xl font-bold italic" style={{ color: GOLD }}>
            "{data.quote}"
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
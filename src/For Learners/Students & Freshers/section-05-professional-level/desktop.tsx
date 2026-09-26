import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { GraduationCap, Briefcase, Award, TrendingUp, Crown, Users, Rocket } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

const ICONS = [GraduationCap, Briefcase, Award, TrendingUp, Crown, Users, Rocket];
const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]", 
  "from-[#A78BFA] to-[#7C3AED]", "from-[#FBBF24] to-[#D97706]", "from-[#F87171] to-[#DC2626]",
  "from-[#60A5FA] to-[#2563EB]"
];

export default function Desktop() {
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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-white py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
            {data.badge}
          </span>
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {data.levels.map((level, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-[#F8FAFD] p-7 rounded-2xl border border-[#E2E8F0] hover:shadow-[0_12px_32px_rgba(11,29,58,0.06)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 leading-snug" style={{ color: NAVY }}>
                  {level.title}
                </h3>
                <p className="text-[15px] text-[#64748B] font-medium leading-relaxed">
                  {level.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
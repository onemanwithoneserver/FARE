import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { BookOpen, Map, Landmark, Ruler, Navigation, BarChart3, Building2, Home, Wallet, Hammer, CheckCircle2, FileText, Users, TrendingUp, Key } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

const ICONS = [
  BookOpen, Landmark, CheckCircle2, Map, Ruler, Navigation, BarChart3, Building2, 
  Home, Wallet, Hammer, Key, FileText, Users, TrendingUp
];

const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]", 
  "from-[#A78BFA] to-[#7C3AED]", "from-[#FBBF24] to-[#D97706]", "from-[#F87171] to-[#DC2626]",
  "from-[#60A5FA] to-[#2563EB]", "from-[#4ADE80] to-[#16A34A]", "from-[#FB923C] to-[#EA580C]",
  "from-[#C084FC] to-[#9333EA]", "from-[#2DD4BF] to-[#0D9488]", "from-[#818CF8] to-[#4F46E5]",
  "from-[#F43F5E] to-[#E11D48]", "from-[#34D399] to-[#047857]", "from-[#FBBF24] to-[#D97706]"
];

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
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
    <section className="w-full bg-[#F8FAFD] py-24 px-10 font-['Outfit']">
      <div className="max-w-[1300px] mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {data.categories.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-white p-6 rounded-2xl border border-[#E2E8F0]/80 shadow-[0_4px_16px_rgba(11,29,58,0.03)] hover:shadow-[0_12px_32px_rgba(11,29,58,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5 border-b border-[#F1F5F9] pb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                    <Icon size={22} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#64748B] tracking-wider uppercase block mb-0.5">
                      Category {cat.num}
                    </span>
                    <h3 className="text-[17px] font-bold leading-tight" style={{ color: NAVY }}>
                      {cat.name}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((itemStr, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] mt-1.5 shrink-0" />
                      <span className="text-[14px] text-[#475569] font-medium leading-snug">
                        {itemStr}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
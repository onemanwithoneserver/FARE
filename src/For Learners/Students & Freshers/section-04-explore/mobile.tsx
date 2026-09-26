import { motion } from "motion/react";
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

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#F8FAFD] py-16 px-6 font-['Outfit']">
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[#C99A2E] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
            {data.badge}
          </span>
          <h2 className="text-[1.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {data.categories.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="bg-white p-5 rounded-xl border border-[#E2E8F0]/80 shadow-[0_2px_12px_rgba(11,29,58,0.03)]"
              >
                <div className="flex items-center gap-3.5 mb-4 border-b border-[#F1F5F9] pb-3.5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                    <Icon size={18} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-[#64748B] tracking-wider uppercase block mb-0.5">
                      Category {cat.num}
                    </span>
                    <h3 className="text-[15px] font-bold leading-tight" style={{ color: NAVY }}>
                      {cat.name}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((itemStr, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] mt-1.5 shrink-0" />
                      <span className="text-[13px] text-[#475569] font-medium leading-snug">
                        {itemStr}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
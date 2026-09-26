import { motion } from "motion/react";
import { AlertCircle, Target, TrendingDown, Users, Briefcase, Zap, Search } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";


const ICONS = [AlertCircle, Target, TrendingDown, Users, Briefcase, Zap, Search];
const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", 
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
  "from-[#60A5FA] to-[#2563EB]"
];

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#FFF5F5] py-16 px-6 font-['Outfit']">
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-[1.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4 mb-10">
          {data.challenges.map((c, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white p-6 rounded-[4px] shadow-[0_2px_12px_rgba(11,29,58,0.03)] border border-[#E2E8F0]/80"
              >
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className={`w-10 h-10 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                    <Icon size={18} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0B1D3A] leading-tight">{c.title}</h3>
                </div>
                <p className="text-[14px] text-[#475569] font-medium leading-relaxed">{c.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white p-5 rounded-[4px] shadow-sm border border-[#E2E8F0]/80">
            <p className="text-[15px] font-bold text-[#0B1D3A] whitespace-pre-wrap leading-relaxed">
              {data.closing}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
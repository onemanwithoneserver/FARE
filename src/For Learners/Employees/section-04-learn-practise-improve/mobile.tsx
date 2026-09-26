import { motion } from "motion/react";
import { BookOpen, HelpCircle, MonitorPlay, Target, Users, Sparkles } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

const ICONS = [HelpCircle, BookOpen, MonitorPlay, Target, Users, Sparkles];
const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", "from-[#FBBF24] to-[#D97706]", "from-[#34D399] to-[#059669]", 
  "from-[#F472B6] to-[#DB2777]", "from-[#A78BFA] to-[#7C3AED]", "from-[#F87171] to-[#DC2626]"
];

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-white py-16 px-6 font-['Outfit']">
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

        <div className="flex flex-col gap-4">
          {data.experiences.map((exp, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-[#F8FAFD] p-6 rounded-xl shadow-[0_2px_8px_rgba(11,29,58,0.02)] border border-[#E2E8F0]/80 flex flex-col"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                    <Icon size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase block mb-0.5" style={{ color: "#C99A2E" }}>
                      {exp.label}
                    </span>
                    <h3 className="text-[16px] font-bold leading-tight" style={{ color: NAVY }}>
                      {exp.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-[14px] text-[#475569] font-medium leading-relaxed">
                  {exp.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
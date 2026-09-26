import { motion } from "motion/react";
import { Briefcase, HeartHandshake, Megaphone, Map, MessageSquare, MonitorSmartphone, Crown, Settings } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

const ICONS = [Briefcase, HeartHandshake, Megaphone, Map, MessageSquare, MonitorSmartphone, Crown, Settings];

const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]", 
  "from-[#A78BFA] to-[#7C3AED]", "from-[#FBBF24] to-[#D97706]", "from-[#F87171] to-[#DC2626]",
  "from-[#60A5FA] to-[#2563EB]", "from-[#4ADE80] to-[#16A34A]"
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
          className="text-center mb-10"
        >
          <h2 className="text-[1.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight mb-3">
            {data.title}
          </h2>
          <p className="text-[15px] text-[#64748B] font-medium leading-relaxed">
            {data.subtitle}
          </p>
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
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-[#F8FAFD] p-5 rounded-xl border border-[#E2E8F0] shadow-[0_2px_12px_rgba(11,29,58,0.02)]"
              >
                <div className="flex items-center gap-3.5 mb-4 border-b border-[#E2E8F0] pb-3.5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                    <Icon size={18} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold leading-tight" style={{ color: NAVY }}>
                      {cat.name}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {cat.skills.map((skill, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] mt-1.5 shrink-0" />
                      <span className="text-[13px] text-[#475569] font-medium leading-snug">
                        {skill}
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
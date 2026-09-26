import { motion } from "motion/react";
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

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#F8FAFD] py-16 px-6 font-['Outfit']">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <span className="text-[#C99A2E] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
            {data.badge}
          </span>
          <h2 className="text-[1.75rem] font-black mb-4 tracking-tight leading-tight" style={{ color: NAVY }}>
            {data.title}
          </h2>
          <p className="text-[15px] text-[#64748B] font-medium whitespace-pre-wrap leading-relaxed">
            {data.intro}
          </p>
        </div>

        <div className="flex flex-col gap-3.5 mb-10">
          {data.features.map((f, i) => {
            const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
            const colorGradient = ICON_COLORS[i % ICON_COLORS.length];
            
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-[#E2E8F0]/80 shadow-[0_2px_8px_rgba(11,29,58,0.03)]"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${colorGradient} shadow-sm`}
                >
                  <Icon size={18} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[17px] font-bold mb-2" style={{ color: NAVY }}>
                  {f.title}
                </h3>
                <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                  {f.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-xl font-bold italic" style={{ color: GOLD }}>
            "{data.quote}"
          </p>
        </div>
      </motion.div>
    </section>
  );
}
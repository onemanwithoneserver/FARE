import { motion } from "motion/react";
import { ArrowRight, Map, Home } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

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

        <div className="flex flex-col gap-5 mb-10">
          {data.paths.map((path, i) => {
            const isFirst = i === 0;
            const Icon = isFirst ? Map : Home;
            const gradient = isFirst 
              ? "from-[#38BDF8] to-[#0284C7]" 
              : "from-[#FBBF24] to-[#D97706]";
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-7 rounded-xl border border-[#E2E8F0]/80 shadow-[0_4px_16px_rgba(11,29,58,0.03)] flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm mb-6`}>
                  <Icon size={24} className="text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-xl font-black mb-3 tracking-tight uppercase" style={{ color: NAVY }}>
                  {path.title}
                </h3>
                
                <p className="text-[14.5px] text-[#475569] font-medium leading-relaxed mb-8">
                  {path.text}
                </p>
                
                <button 
                  className="mt-auto text-[13px] font-bold uppercase tracking-wider flex items-center gap-2"
                  style={{ color: isFirst ? "#0284C7" : "#D97706" }}
                >
                  {path.cta} 
                  <ArrowRight size={14} strokeWidth={2.5} />
                </button>
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
          <div className="bg-white px-5 py-4 rounded-xl border border-[#E2E8F0]/80 shadow-sm">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#64748B] mb-2.5">
              {data.more.title}
            </h4>
            <p className="text-[13px] font-semibold text-[#0B1D3A] leading-relaxed">
              {data.more.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
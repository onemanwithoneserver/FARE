import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { Sparkles } from "lucide-react";

const TAB_COLORS = [
  { active: "bg-[#0B1D3A] text-white", tag: "bg-[#0B1D3A]/10 text-[#0B1D3A]" },
  { active: "bg-rose-600 text-white", tag: "bg-rose-50 text-rose-700" },
  { active: "bg-amber-600 text-white", tag: "bg-amber-50 text-amber-700" },
  { active: "bg-sky-600 text-white", tag: "bg-sky-50 text-sky-700" },
  { active: "bg-purple-600 text-white", tag: "bg-purple-50 text-purple-700" },
  { active: "bg-emerald-600 text-white", tag: "bg-emerald-50 text-emerald-700" },
];

export default function Desktop() {
  const s = data.browseScenarios;
  const [activeTab, setActiveTab] = useState(0);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-24 lg:py-32 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-rose-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 w-full max-w-[800px] text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-white border border-slate-200 shadow-sm mb-8">
            <Sparkles size={16} className="text-[#C99A2E]" />
            <span className="text-[13px] font-bold tracking-wide text-slate-700 uppercase">Mock Scenarios</span>
          </div>
          <h2 className="text-[#0B1D3A] mb-4 text-[36px] font-black leading-tight tracking-tight md:text-[44px] lg:text-[52px]">
            {s.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {s.categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2.5 rounded-[8px] text-[14px] font-semibold transition-all duration-300 cursor-pointer border ${
                activeTab === index
                  ? `${TAB_COLORS[index % TAB_COLORS.length].active} border-transparent shadow-md`
                  : "bg-white text-[#64748B] border-slate-200 hover:border-[#C99A2E]/30 hover:text-[#0B1D3A]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="flex flex-wrap justify-center gap-3"
          >
            {s.categories[activeTab].items.map((item) => {
              const color = TAB_COLORS[activeTab % TAB_COLORS.length];
              return (
                <motion.div
                  key={item}
                  variants={itemVariant}
                  className={`px-5 py-3 rounded-[8px] ${color.tag} text-[14px] font-semibold border border-transparent hover:border-[#C99A2E]/30 hover:shadow-md transition-all duration-300 cursor-default`}
                >
                  {item}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

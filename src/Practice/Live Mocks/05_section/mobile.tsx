import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Compass } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Chip, Section, SectionHeader, VIEWPORT, accentAt, fadeUp, staggerContainer } from "../ui";

export default function Mobile() {
  const s = data.browseScenarios;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section tone="white" mobile ariaLabel="Browse Scenarios">
      <SectionHeader mobile eyebrow="Mock Scenarios" icon={Compass} accent={ACCENTS[8]} title={s.title} />

      <motion.div variants={staggerContainer(0.06)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-3">
        {s.categories.map((cat, i) => {
          const isOpen = openIndex === i;
          const a = accentAt(i);
          return (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              className={`rounded-[12px] border transition-all duration-300 overflow-hidden ${
                isOpen ? "bg-white border-[#E6EBF3] luxury-shadow-sm" : "bg-white/60 border-[#E6EBF3]/70"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between px-5 py-4 cursor-pointer select-none active:bg-slate-50/50"
              >
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full" style={{ background: a.to }} />
                  <span className={`text-[15px] font-bold transition-colors ${isOpen ? "text-[#0B1D3A]" : "text-[#475569]"}`}>
                    {cat.title}
                  </span>
                </div>
                <ChevronDown
                  size={18}
                  strokeWidth={2.5}
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[#C99A2E]" : "text-[#94A3B8]"}`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <Chip key={item} accent={a} mobile>{item}</Chip>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

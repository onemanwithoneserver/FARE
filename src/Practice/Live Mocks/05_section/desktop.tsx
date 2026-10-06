import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Chip, Section, SectionHeader, VIEWPORT, accentAt, fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const s = data.browseScenarios;
  const [activeTab, setActiveTab] = useState(0);
  const activeAccent = accentAt(activeTab);

  return (
    <Section tone="white" ariaLabel="Browse Scenarios">
      <SectionHeader eyebrow="Mock Scenarios" icon={Compass} accent={ACCENTS[8]} title={s.title} />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="w-full flex flex-wrap justify-center gap-2.5 mb-12"
      >
        {s.categories.map((cat, i) => {
          const a = accentAt(i);
          const active = activeTab === i;
          return (
            <button
              key={cat.title}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-[10px] text-[14px] font-bold transition-all duration-300 cursor-pointer border select-none active:scale-[0.97] ${
                active
                  ? "border-transparent text-white luxury-shadow-sm"
                  : "bg-white text-[#475569] border-[#E6EBF3] hover:border-[#C99A2E]/40 hover:text-[#0B1D3A]"
              }`}
              style={active ? { background: `linear-gradient(135deg, ${a.from}, ${a.to})`, boxShadow: `0 8px 16px -6px ${a.glow}` } : undefined}
            >
              {cat.title}
            </button>
          );
        })}
      </motion.div>

      <div className="w-full max-w-[900px] mx-auto min-h-[140px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={staggerContainer(0.04, 0)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15 } }}
            className="flex flex-wrap justify-center gap-3"
          >
            {s.categories[activeTab].items.map((item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 8 },
                  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <Chip accent={activeAccent}>{item}</Chip>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

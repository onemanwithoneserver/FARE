import { useState } from "react";
import { useProfileData, useProfileText } from "../profileData";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { Layers, Users, Globe, ChevronDown } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const SegmentAccordion = ({ segment, defaultOpen }: { segment: any; defaultOpen: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col bg-[#F8FAFD] border border-[#0B1D3A]/[0.04] rounded-[4px] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
      >
        <span className="font-bold text-[13px]" style={{ color: NAVY }}>{segment.name}</span>
        <ChevronDown
          size={16}
          strokeWidth={2.5}
          className={`text-[#7B8DAA] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-3.5 pb-3.5 pt-1">
              <div className="flex flex-wrap gap-1.5">
                {segment.items.map((it: string, i: number) => (
                  <span key={i} className="text-[11px] font-semibold px-2 py-0.5 rounded-[4px] bg-white border border-[#0B1D3A]/[0.06] text-[#5A6B82] shadow-sm">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Mobile() {
  const t = useProfileText();
  const data = useProfileData();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const sectionColors = [
    { accent: "#3B82F6", bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)", icon: <Layers size={16} strokeWidth={2.5} /> },
    { accent: GOLD, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`, icon: <Users size={16} strokeWidth={2.5} /> },
    { accent: "#10B981", bg: "linear-gradient(135deg, #10B981, #059669)", icon: <Globe size={16} strokeWidth={2.5} /> },
  ];

  return (
    <section
      className="w-full py-12 px-5 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, -15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-25"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.15) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full flex flex-col gap-6"
      >
        
        <motion.div variants={item} className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-[4px] p-5 luxury-shadow-float relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 opacity-80" style={{ background: sectionColors[0].bg }} />
          <div className="flex items-center gap-3 mb-5 mt-1">
            <div className="w-9 h-9 shrink-0 rounded-[4px] flex items-center justify-center text-white shadow-sm" style={{ background: sectionColors[0].bg }}>
              {sectionColors[0].icon}
            </div>
            <h2 className="text-[17px] font-black leading-tight" style={{ color: NAVY }}>
              {t("Real Estate Segment")}<br/>{t("Expertise")}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {data.segments.map((segment, idx) => (
              <SegmentAccordion key={idx} segment={segment} defaultOpen={idx === 0} />
            ))}
          </div>
        </motion.div>

        
        <motion.div variants={item} className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-[4px] p-5 luxury-shadow-float relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 opacity-80" style={{ background: sectionColors[1].bg }} />
          <div className="flex items-center gap-3 mb-5 mt-1">
            <div className="w-9 h-9 shrink-0 rounded-[4px] flex items-center justify-center text-white shadow-sm" style={{ background: sectionColors[1].bg }}>
              {sectionColors[1].icon}
            </div>
            <h2 className="text-[17px] font-black leading-tight" style={{ color: NAVY }}>
              {t("Learner")}<br/>{t("Audience")}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {data.learnerAudience.map((audience, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 p-3 rounded-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.04]">
                <span className="font-bold text-[13px]" style={{ color: NAVY }}>{audience.title}</span>
                {audience.description && (
                  <span className="text-[11.5px] font-medium text-[#5A6B82] leading-snug">{audience.description}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        
        <motion.div variants={item} className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-[4px] p-5 luxury-shadow-float relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 opacity-80" style={{ background: sectionColors[2].bg }} />
          <div className="flex items-center gap-3 mb-5 mt-1">
            <div className="w-9 h-9 shrink-0 rounded-[4px] flex items-center justify-center text-white shadow-sm" style={{ background: sectionColors[2].bg }}>
              {sectionColors[2].icon}
            </div>
            <h2 className="text-[17px] font-black leading-tight" style={{ color: NAVY }}>
              {t("Training")}<br/>{t("Language")}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5 p-3 rounded-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.04]">
              <span className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-wider">{t("Primary Language")}</span>
              <span className="text-[15px] font-black" style={{ color: NAVY }}>{t("English")}</span>
            </div>
            <div className="flex flex-col gap-1.5 p-3 rounded-[4px] bg-white border border-[#0B1D3A]/[0.06] shadow-sm">
              <span className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-wider">{t("Secondary Languages")}</span>
              <div className="flex flex-wrap gap-1.5 mt-0.5">
                {["Telugu", "Hindi"].map(lang => (
                  <span key={lang} className="text-[12px] font-bold px-2.5 py-1 rounded-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.04] text-[#5A6B82]">{lang}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

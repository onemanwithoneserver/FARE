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
    <div className="flex flex-col bg-[#F8FAFD] border border-[#0B1D3A]/[0.04] rounded-[4px]-[4px]-[4px] overflow-hidden group/accordion">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 group-hover/accordion:bg-black/[0.02] transition-colors"
      >
        <span className="font-bold text-[14px]" style={{ color: NAVY }}>{segment.name}</span>
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
                  <span key={i} className="text-[12px] font-semibold px-2.5 py-1 rounded-[4px]-[4px]-[4px] bg-white border border-[#0B1D3A]/[0.06] text-[#5A6B82] shadow-sm">
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

export default function Desktop() {
  const t = useProfileText();
  const data = useProfileData();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const sectionColors = [
    { accent: "#3B82F6", bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)", icon: <Layers size={18} strokeWidth={2.5} /> },
    { accent: GOLD, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`, icon: <Users size={18} strokeWidth={2.5} /> },
    { accent: "#10B981", bg: "linear-gradient(135deg, #10B981, #059669)", icon: <Globe size={18} strokeWidth={2.5} /> },
  ];

  return (
    <section
      className="w-full py-16 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative bg-white overflow-hidden"
    >
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 25, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-[4px]-[4px]-[4px]-full blur-[100px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[0%] w-[500px] h-[500px] rounded-[4px]-[4px]-[4px]-full blur-[120px] pointer-events-none z-0 opacity-25"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.1) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full grid grid-cols-3 gap-8 relative z-10"
      >
        
        <motion.div variants={item} className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.15] rounded-[4px]-[4px]-[4px] p-6 luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] transition-all duration-300 ease-out relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-[3px] opacity-70 group-hover:opacity-100 transition-opacity" style={{ background: sectionColors[0].bg }} />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 shrink-0 rounded-[4px]-[4px]-[4px] flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300 ease-out" style={{ background: sectionColors[0].bg }}>
              {sectionColors[0].icon}
            </div>
            <h2 className="text-[18px] font-black leading-tight" style={{ color: NAVY }}>
              {t("Real Estate")}<br/>{t("Segment Expertise")}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {data.segments.map((segment, idx) => (
              <SegmentAccordion key={idx} segment={segment} defaultOpen={idx === 0} />
            ))}
          </div>
        </motion.div>

        
        <motion.div variants={item} className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.15] rounded-[4px]-[4px]-[4px] p-6 luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] transition-all duration-300 ease-out relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-[3px] opacity-70 group-hover:opacity-100 transition-opacity" style={{ background: sectionColors[1].bg }} />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 shrink-0 rounded-[4px]-[4px]-[4px] flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300 ease-out" style={{ background: sectionColors[1].bg }}>
              {sectionColors[1].icon}
            </div>
            <h2 className="text-[18px] font-black leading-tight" style={{ color: NAVY }}>
              {t("Learner")}<br/>{t("Audience")}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {data.learnerAudience.map((audience, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 p-3.5 rounded-[4px]-[4px]-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.04]">
                <span className="font-bold text-[14px]" style={{ color: NAVY }}>{audience.title}</span>
                {audience.description && (
                  <span className="text-[12.5px] font-medium text-[#5A6B82] leading-snug">{audience.description}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        
        <motion.div variants={item} className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.15] rounded-[4px]-[4px]-[4px] p-6 luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] transition-all duration-300 ease-out relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-[3px] opacity-70 group-hover:opacity-100 transition-opacity" style={{ background: sectionColors[2].bg }} />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 shrink-0 rounded-[4px]-[4px]-[4px] flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300 ease-out" style={{ background: sectionColors[2].bg }}>
              {sectionColors[2].icon}
            </div>
            <h2 className="text-[18px] font-black leading-tight" style={{ color: NAVY }}>
              {t("Training")}<br/>{t("Language")}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5 p-3.5 rounded-[4px]-[4px]-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.04]">
              <span className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-wider">{t("Primary Language")}</span>
              <span className="text-[16px] font-black" style={{ color: NAVY }}>{t("English")}</span>
            </div>
            <div className="flex flex-col gap-1.5 p-3.5 rounded-[4px]-[4px]-[4px] bg-white border border-[#0B1D3A]/[0.06] shadow-sm">
              <span className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-wider">{t("Secondary Languages")}</span>
              <div className="flex flex-wrap gap-1.5 mt-0.5">
                {["Telugu", "Hindi"].map(lang => (
                  <span key={lang} className="text-[13px] font-bold px-3 py-1 rounded-[4px]-[4px]-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.04] text-[#5A6B82]">{lang}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

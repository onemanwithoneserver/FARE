import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Building2 } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const timelineColors = [
  { accent: "#3B82F6", bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
  { accent: GOLD, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
  { accent: "#10B981", bg: "linear-gradient(135deg, #10B981, #059669)" },
  { accent: "#8B5CF6", bg: "linear-gradient(135deg, #8B5CF6, #6D28D9)" },
];

const initialsOf = (name: string) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

export default function Mobile() {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="w-full py-10 px-5 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden"
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Experience & Track Record</h2>
        </motion.div>

        <motion.div variants={item} className="mb-4">
          <span className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em]">Selected Engagements</span>
        </motion.div>

        <div className="relative ml-[34px] pl-[18px] flex flex-col gap-4" style={{ borderLeft: `2px solid ${GOLD}20` }}>
          {data.experienceTimeline.map((timelineItem, idx) => {
            const colors = timelineColors[idx % timelineColors.length];
            return (
              <motion.div key={idx} variants={item} className="relative group">
                <div
                  className="absolute -left-[25px] top-4 w-2.5 h-2.5 rounded-full ring-4 ring-white shadow-sm"
                  style={{ background: colors.bg }}
                />
                <div
                  className="absolute -left-[76px] top-3.5 text-[11px] font-black w-9 text-right"
                  style={{ color: colors.accent }}
                >
                  {timelineItem.year}
                </div>

                <div className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-4 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 right-0 h-[2.5px] opacity-70"
                    style={{ background: colors.bg }}
                  />
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div
                      className="w-7 h-7 shrink-0 rounded-xl ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm text-[10px] font-black"
                      style={{ background: colors.bg }}
                    >
                      {initialsOf(timelineItem.company)}
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold leading-tight" style={{ color: NAVY }}>{timelineItem.company}</h4>
                      <p className="text-[10.5px] text-[#7B8DAA] font-medium flex items-center gap-1">
                        <Building2 size={10} strokeWidth={2.5} />
                        {timelineItem.team}
                      </p>
                    </div>
                  </div>
                  <span
                    className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${colors.accent}10`,
                      border: `1px solid ${colors.accent}25`,
                      color: `${NAVY}BB`,
                    }}
                  >
                    {timelineItem.program}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

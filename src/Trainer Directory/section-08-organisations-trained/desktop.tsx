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

export default function Desktop() {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
    >
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-gradient-radial from-[#DDEAFF]/30 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Experience & Track Record</h2>
        </motion.div>

        <div className="max-w-[680px]">
          <motion.div variants={item} className="mb-5">
            <span className="text-[10px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em]">Selected Engagements</span>
          </motion.div>

          <div className="relative ml-8 pl-8 flex flex-col gap-5" style={{ borderLeft: `2px solid ${GOLD}20` }}>
            {data.experienceTimeline.map((timelineItem, idx) => {
              const colors = timelineColors[idx % timelineColors.length];
              return (
                <motion.div key={idx} variants={item} className="relative group">
                  <div
                    className="absolute -left-[42px] top-4 w-3 h-3 rounded-full ring-4 ring-white shadow-sm"
                    style={{ background: colors.bg }}
                  />
                  <div
                    className="absolute -left-[100px] top-3 text-[13px] font-black w-12 text-right"
                    style={{ color: colors.accent }}
                  >
                    {timelineItem.year}
                  </div>

                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                    className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.20] rounded-2xl p-5 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-300 ease-out relative overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2.5px] opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ background: colors.bg }}
                    />
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-9 h-9 shrink-0 rounded-xl ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm text-[11px] font-black group-hover:scale-110 transition-all duration-300 ease-out"
                        style={{ background: colors.bg }}
                      >
                        {initialsOf(timelineItem.company)}
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold leading-tight" style={{ color: NAVY }}>{timelineItem.company}</h4>
                        <p className="text-[11.5px] text-[#7B8DAA] font-medium flex items-center gap-1.5">
                          <Building2 size={11} strokeWidth={2.5} />
                          {timelineItem.team}
                        </p>
                      </div>
                    </div>
                    <span
                      className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${colors.accent}10`,
                        border: `1px solid ${colors.accent}25`,
                        color: `${NAVY}CC`,
                      }}
                    >
                      {timelineItem.program}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

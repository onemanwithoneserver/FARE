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
      className="w-full py-12 px-6 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.1) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <div className="w-[3px] h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[1.75rem] font-black tracking-tight leading-tight" style={{ color: NAVY }}>Experience & Track Record</h2>
        </motion.div>

        <motion.div variants={item} className="mb-5">
          <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em]">Selected Engagements</span>
        </motion.div>

        <div className="relative ml-[36px] pl-[20px] flex flex-col gap-5" style={{ borderLeft: `2px solid ${GOLD}20` }}>
          {data.experienceTimeline.map((timelineItem, idx) => {
            const colors = timelineColors[idx % timelineColors.length];
            return (
              <motion.div key={idx} variants={item} className="relative group">
                <div
                  className="absolute -left-[27px] top-4 w-3 h-3 rounded-full ring-4 ring-white shadow-sm"
                  style={{ background: colors.bg }}
                />
                <div
                  className="absolute -left-[80px] top-3.5 text-[12px] font-black w-9 text-right"
                  style={{ color: colors.accent }}
                >
                  {timelineItem.year}
                </div>

                <div className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded p-5 luxury-shadow-float relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-70"
                    style={{ background: colors.bg }}
                  />
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 shrink-0 rounded flex items-center justify-center text-white shadow-md text-[11px] font-black"
                      style={{ background: colors.bg }}
                    >
                      {initialsOf(timelineItem.company)}
                    </div>
                    <div>
                      <h4 className="text-[14px] font-black leading-tight tracking-tight" style={{ color: NAVY }}>{timelineItem.company}</h4>
                      <p className="text-[12px] text-[#7B8DAA] font-medium flex items-center gap-1.5 mt-0.5">
                        <Building2 size={12} strokeWidth={2.5} />
                        {timelineItem.team}
                      </p>
                    </div>
                  </div>
                  <span
                    className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded"
                    style={{
                      background: `${colors.accent}0A`,
                      border: `1px solid ${colors.accent}20`,
                      color: `${NAVY}E6`,
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

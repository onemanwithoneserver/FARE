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
      className="w-full py-16 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[0%] w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.1) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-10">
          <div className="w-[4px] h-7 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Experience &amp; Track Record</h2>
        </motion.div>

        <div className="mx-auto w-full max-w-[1040px]">
          <motion.h3 variants={item} className="mb-6 text-[18px] font-black tracking-tight" style={{ color: NAVY }}>
            Selected Engagements
          </motion.h3>

          <div className="relative flex flex-col gap-7">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-8 left-[100px] top-8 w-[2px] origin-top"
              style={{
                background: "linear-gradient(to bottom, #3B82F6, #C99A2E, #10B981, #8B5CF6)",
                opacity: 0.35,
              }}
            />
            {data.experienceTimeline.map((timelineItem, idx) => {
              const colors = timelineColors[idx % timelineColors.length];
              return (
                <motion.div
                  key={`${timelineItem.company}-${timelineItem.year}`}
                  variants={item}
                  className="relative grid grid-cols-[88px_minmax(0,1fr)] items-start gap-6"
                >
                  <span className="pt-6 pr-2 text-right text-[14px] font-black" style={{ color: colors.accent }}>
                    {timelineItem.year}
                  </span>
                  <div
                    className="absolute left-[93px] top-[28px] z-10 h-[14px] w-[14px] rounded-full border-[3px] border-white shadow-sm"
                    style={{ background: colors.accent }}
                  />
                  <motion.div
                    whileHover={{ y: -2, transition: { duration: 0.25 } }}
                    className="relative w-3/4 min-h-[142px] overflow-hidden rounded border border-[#0B1D3A]/[0.08] bg-white p-5 shadow-[0_8px_24px_-16px_rgba(11,29,58,0.3)] transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(11,29,58,0.3)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: colors.bg }} />
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded text-[13px] font-black text-white shadow-sm"
                        style={{ background: colors.bg }}
                      >
                        {initialsOf(timelineItem.company)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="truncate text-[16px] font-black tracking-tight" style={{ color: NAVY }}>
                          {timelineItem.company}
                        </h4>
                        <p className="mt-1 flex items-center gap-1.5 text-[13px] font-medium text-[#7B8DAA]">
                          <Building2 size={13} strokeWidth={2.5} />
                          {timelineItem.team}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span
                        className="inline-block rounded border px-3 py-2 text-[12px] font-semibold"
                        style={{
                          background: `${colors.accent}08`,
                          borderColor: `${colors.accent}20`,
                          color: NAVY,
                        }}
                      >
                        {timelineItem.program}
                      </span>
                    </div>
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

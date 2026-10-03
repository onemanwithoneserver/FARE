import { useProfileData, useProfileText } from "../profileData";
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
  const t = useProfileText();
  const data = useProfileData();

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
        className="absolute top-[20%] right-[-10%] w-[250px] h-[250px] rounded-[4px]-[4px]-[4px]-full blur-[80px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-[4px]-[4px]-[4px]-full blur-[90px] pointer-events-none z-0 opacity-30"
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
          <div className="w-[3px] h-6 rounded-[4px]-[4px]-[4px]-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>{t("Experience \u0026 Track Record")}</h2>
        </motion.div>

        <motion.div variants={item} className="mb-5">
          <h3 className="text-[16px] font-black tracking-tight" style={{ color: NAVY }}>{t("Selected Engagements")}</h3>
        </motion.div>

        <div className="relative flex flex-col gap-5">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 left-[53px] top-6 w-[2px] origin-top"
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
                className="relative grid grid-cols-[42px_minmax(0,1fr)] items-start gap-[22px]"
              >
                <span className="pt-5 text-right text-[11px] font-black" style={{ color: colors.accent }}>
                  {timelineItem.year}
                </span>
                <div
                  className="absolute left-[47px] top-[23px] z-10 h-3 w-3 rounded-[4px]-[4px]-[4px]-full border-[2px] border-white shadow-sm"
                  style={{ background: colors.accent }}
                />
                <div className="relative w-3/4 overflow-hidden rounded-[4px]-[4px]-[4px] border border-[#0B1D3A]/[0.08] bg-white p-4 shadow-[0_6px_18px_-14px_rgba(11,29,58,0.35)]">
                  <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: colors.bg }} />
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px]-[4px]-[4px] text-[11px] font-black text-white"
                      style={{ background: colors.bg }}
                    >
                      {initialsOf(timelineItem.company)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="truncate text-[14px] font-black leading-tight tracking-tight" style={{ color: NAVY }}>
                        {timelineItem.company}
                      </h4>
                      <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-[#7B8DAA]">
                        <Building2 size={11} strokeWidth={2.5} />
                        {timelineItem.team}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span
                      className="inline-block rounded-[4px]-[4px]-[4px] border px-2.5 py-1.5 text-[11px] font-semibold"
                      style={{
                        background: `${colors.accent}08`,
                        borderColor: `${colors.accent}20`,
                        color: NAVY,
                      }}
                    >
                      {timelineItem.program}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

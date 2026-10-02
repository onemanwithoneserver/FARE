import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Building2, TrendingUp, Award, Users, Clock } from "lucide-react";

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

  const sideStats = [
    { icon: <TrendingUp size={18} strokeWidth={2.5} />, value: "30%", label: "Avg. Conversion Increase", color: "#10B981" },
    { icon: <Users size={18} strokeWidth={2.5} />, value: "500+", label: "Professionals Trained", color: "#3B82F6" },
    { icon: <Building2 size={18} strokeWidth={2.5} />, value: "25+", label: "Organisations Engaged", color: "#8B5CF6" },
    { icon: <Award size={18} strokeWidth={2.5} />, value: "120+", label: "Programs Delivered", color: GOLD },
    { icon: <Clock size={18} strokeWidth={2.5} />, value: "8+ Yrs", label: "Training Experience", color: "#F97316" },
  ];

  const segments = [
    { name: "Residential", pct: 50 },
    { name: "Plotted Development", pct: 30 },
    { name: "Commercial", pct: 20 },
  ];

  const segColors = ["#3B82F6", GOLD, "#10B981"];

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
        <motion.div variants={item} className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center shadow-lg text-white">
            <Building2 size={20} strokeWidth={2.5} />
          </div>
          <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Experience &amp; Track Record</h2>
        </motion.div>

        <div className="flex gap-8 items-start">
          {/* Left: Timeline */}
          <div className="flex-1 min-w-0">
            <motion.div variants={item} className="mb-6">
              <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-[0.15em]">Selected Engagements</span>
            </motion.div>

            <div className="relative ml-8 pl-8 flex flex-col gap-6" style={{ borderLeft: `2px solid ${GOLD}20` }}>
              {data.experienceTimeline.map((timelineItem, idx) => {
                const colors = timelineColors[idx % timelineColors.length];
                return (
                  <motion.div key={idx} variants={item} className="relative group">
                    <div
                      className="absolute -left-[43.5px] top-4 w-4 h-4 rounded-full ring-4 ring-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                      style={{ background: colors.bg }}
                    />
                    <div
                      className="absolute -left-[110px] top-3.5 text-[14px] font-black w-14 text-right transition-colors duration-300"
                      style={{ color: colors.accent }}
                    >
                      {timelineItem.year}
                    </div>

                    <motion.div
                      whileHover={{ x: 5, y: -2, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                      className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.15] rounded p-5 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.06)] hover:shadow-[0_12px_36px_-12px_rgba(11,29,58,0.12)] transition-all duration-400 ease-out relative overflow-hidden"
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: colors.bg }}
                      />
                      <div className="flex items-center gap-4 mb-3">
                        <div
                          className="w-10 h-10 shrink-0 rounded flex items-center justify-center text-white shadow-md text-[12px] font-black group-hover:scale-110 transition-transform duration-400 ease-out"
                          style={{ background: colors.bg }}
                        >
                          {initialsOf(timelineItem.company)}
                        </div>
                        <div>
                          <h4 className="text-[15px] font-black tracking-tight" style={{ color: NAVY }}>{timelineItem.company}</h4>
                          <p className="text-[12px] text-[#7B8DAA] font-medium flex items-center gap-1.5 mt-0.5">
                            <Building2 size={12} strokeWidth={2.5} />
                            {timelineItem.team}
                          </p>
                        </div>
                      </div>
                      <span
                        className="inline-block text-[12px] font-semibold px-3 py-1.5 rounded transition-colors hover:bg-white"
                        style={{
                          background: `${colors.accent}0A`,
                          border: `1px solid ${colors.accent}20`,
                          color: `${NAVY}E6`,
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

          {/* Right: Stats & Segment breakdown */}
          <motion.div variants={item} className="w-[300px] shrink-0 flex flex-col gap-4">
            {/* Key Stats */}
            <div className="bg-white border border-[#0B1D3A]/[0.06] rounded p-5 shadow-sm">
              <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-[0.1em]">Key Metrics</span>
              <div className="flex flex-col gap-4 mt-4">
                {sideStats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center text-white shrink-0"
                      style={{ background: stat.color }}
                    >
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-[17px] font-black leading-tight" style={{ color: NAVY }}>{stat.value}</p>
                      <p className="text-[11px] text-[#7B8DAA] font-medium leading-tight">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Segment Breakdown */}
            <div className="bg-white border border-[#0B1D3A]/[0.06] rounded p-5 shadow-sm">
              <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-[0.1em]">Segment Focus</span>
              <div className="flex flex-col gap-3 mt-4">
                {segments.map((seg, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[12px] font-bold" style={{ color: NAVY }}>{seg.name}</span>
                      <span className="text-[11px] font-bold" style={{ color: segColors[i] }}>{seg.pct}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${seg.pct}%` }}
                        transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ background: segColors[i] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="bg-[#F8FAFD] border border-[#0B1D3A]/[0.06] rounded p-5">
              <span className="text-[11px] font-bold text-[#7B8DAA] uppercase tracking-[0.1em]">Training Locations</span>
              <div className="flex flex-wrap gap-2 mt-3">
                {data.delivery.locations.map((loc, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-bold px-3 py-1 rounded-full border"
                    style={{ color: NAVY, borderColor: `${NAVY}20`, background: "white" }}
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

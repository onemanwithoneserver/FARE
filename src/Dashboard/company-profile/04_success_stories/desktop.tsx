import { MapPin, Clock, Target, Lightbulb, Quote } from "lucide-react";
import { motion, type Variants } from "motion/react";
import SectionHeader from "../SectionHeader";
import { successStoriesData } from "./data";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const cardAccents = [
  {
    orb: "rgba(201,154,46,0.15)",
    bar: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})`,
    metricBg: `${GOLD}10`,
    metricBorder: `${GOLD}25`,
  },
  {
    orb: "rgba(59,130,246,0.12)",
    bar: "linear-gradient(90deg, #3B82F6, #6366F1)",
    metricBg: "rgba(59,130,246,0.06)",
    metricBorder: "rgba(59,130,246,0.18)",
  },
  {
    orb: "rgba(16,185,129,0.12)",
    bar: "linear-gradient(90deg, #10B981, #059669)",
    metricBg: "rgba(16,185,129,0.06)",
    metricBorder: "rgba(16,185,129,0.18)",
  },
];

const visualBgs = [
  "linear-gradient(135deg, #0B1D3A 0%, #162E56 60%, #1E3A6B 100%)",
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
  "linear-gradient(135deg, #0B1D3A 0%, #1a3a2e 60%, #0d3520 100%)",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SuccessStoriesDesktop() {
  return (
    <section
      id="company-sec-success-stories"
      className="w-full py-16 px-10 bg-white border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden scroll-mt-[72px] fare-noise-overlay"
    >
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[0%] w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none z-0 opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(11,29,58,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <SectionHeader
          eyebrow="04 · Proven Track Record"
          title="Success Stories — Stores, Agents & Achievements"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col gap-8"
        >
          {successStoriesData.map((story, idx) => {
            const accent = cardAccents[idx % cardAccents.length];
            const visBg = visualBgs[idx % visualBgs.length];
            return (
              <motion.div
                key={story.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className="group flex flex-col md:flex-row rounded-[4px] overflow-hidden border border-[#0B1D3A]/[0.07] bg-white/90 backdrop-blur-xl luxury-shadow-float hover:luxury-shadow-sm hover:luxury-shadow-float transition-all duration-500 relative"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                  style={{ background: accent.bar }}
                />

                <div
                  className="w-full md:w-[240px] h-48 md:h-auto shrink-0 relative overflow-hidden"
                  style={{ background: visBg }}
                >
                  <img
                    src={story.image}
                    alt={story.entityName}
                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 40%, ${accent.orb} 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/95 via-[#0B1D3A]/35 to-transparent" />

                  <span
                    aria-hidden="true"
                    className="absolute top-4 left-4 text-[72px] font-black leading-none opacity-[0.07] text-white select-none pointer-events-none"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-[4px]"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.92)",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      {story.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <div className="text-xs font-black tracking-tight leading-snug">
                      {story.entityName}
                    </div>
                    <div className="text-[10px] text-[#D5AA45] font-bold mt-1 flex items-center gap-1">
                      <MapPin size={10} />
                      <span>{story.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-7 flex flex-col justify-between gap-5 min-w-0">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <h3
                        className="text-[19px] font-black leading-snug tracking-tight"
                        style={{ color: NAVY }}
                      >
                        {story.title}
                      </h3>
                      <span className="text-[11px] font-bold text-[#7B8DAA] flex items-center gap-1.5 bg-[#F8FAFD] px-3 py-1 rounded-[4px] border border-[#0B1D3A]/[0.04]">
                        <Clock size={12} strokeWidth={2.5} style={{ color: GOLD }} />
                        {story.duration}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-7 h-7 rounded-[4px] flex items-center justify-center text-white shrink-0 mt-0.5"
                          style={{ background: "#EF4444" }}
                        >
                          <Target size={14} strokeWidth={2.5} />
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-[0.14em] mb-1.5 text-[#EF4444]">
                            Challenge
                          </div>
                          <p className="text-[13px] text-[#5A6B82] leading-[1.65] font-medium">
                            {story.challenge}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div
                          className="w-7 h-7 rounded-[4px] flex items-center justify-center text-white shrink-0 mt-0.5"
                          style={{ background: GOLD }}
                        >
                          <Lightbulb size={14} strokeWidth={2.5} />
                        </div>
                        <div>
                          <div
                            className="text-[10px] font-black uppercase tracking-[0.14em] mb-1.5"
                            style={{ color: GOLD }}
                          >
                            Outcome & Execution
                          </div>
                          <p className="text-[13px] text-[#5A6B82] leading-[1.65] font-medium">
                            {story.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-start gap-2.5 text-[13px] italic text-[#5A6B82] font-medium bg-[#F8FAFD] px-4 py-3 rounded-[4px] border border-[#0B1D3A]/[0.04] border-l-2 border-l-[#C99A2E]">
                      <Quote size={14} className="text-[#C99A2E] shrink-0 mt-0.5" />
                      <span>“{story.quote}”</span>
                    </div>
                  </div>

                  {/* Achievement Metric Boxes matching Section-09 Case Studies */}
                  <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#0B1D3A]/[0.06]">
                    {story.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex flex-col items-center px-4 py-2.5 rounded-[4px] border text-center min-w-[90px]"
                        style={{
                          background: accent.metricBg,
                          borderColor: accent.metricBorder,
                        }}
                      >
                        <span
                          className="text-[20px] font-black leading-none tracking-tight"
                          style={{ color: NAVY }}
                        >
                          {m.value}
                        </span>
                        <span className="text-[10px] font-bold text-[#7B8DAA] mt-1 leading-tight">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

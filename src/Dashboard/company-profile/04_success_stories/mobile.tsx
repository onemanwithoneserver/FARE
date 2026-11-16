import { MapPin, Clock, Target, Lightbulb, Quote } from "lucide-react";
import { motion } from "motion/react";
import SectionHeader from "../SectionHeader";
import { successStoriesData } from "./data";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const cardAccents = [
  { bar: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})`, metricBg: `${GOLD}10`, metricBorder: `${GOLD}28` },
  { bar: "linear-gradient(90deg, #3B82F6, #6366F1)", metricBg: "rgba(59,130,246,0.06)", metricBorder: "rgba(59,130,246,0.2)" },
  { bar: "linear-gradient(90deg, #10B981, #059669)", metricBg: "rgba(16,185,129,0.06)", metricBorder: "rgba(16,185,129,0.2)" },
];

export default function SuccessStoriesMobile() {
  return (
    <section
      id="company-sec-success-stories"
      className="w-full py-12 px-5 bg-white border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden scroll-mt-[96px] fare-noise-overlay"
    >
      <div className="relative z-10">
        <SectionHeader
          compact
          eyebrow="04 · Proven Track Record"
          title="Success Stories — Stores & Agents"
        />

        <div className="flex flex-col gap-6">
          {successStoriesData.map((story, idx) => {
            const accent = cardAccents[idx % cardAccents.length];
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.65, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[4px] overflow-hidden border border-[#0B1D3A]/[0.07] bg-white/90 backdrop-blur-xl luxury-shadow-float flex flex-col relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] z-10" style={{ background: accent.bar }} />

                <div className="h-36 relative overflow-hidden bg-[#0B1D3A]">
                  <img
                    src={story.image}
                    alt={story.entityName}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/95 via-[#0B1D3A]/40 to-transparent" />

                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[60px] font-black leading-none opacity-[0.06] text-white select-none pointer-events-none"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.18em] px-2 py-0.5 rounded-[4px]"
                      style={{ background: "rgba(255,255,255,0.14)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
                    >
                      {story.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[13px] font-black leading-snug">{story.entityName}</div>
                    <div className="text-[10px] text-[#D5AA45] font-bold flex items-center gap-1 mt-0.5">
                      <MapPin size={10} />
                      <span>{story.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-3">
                  <div>
                    <h3 className="text-[16px] font-black leading-snug tracking-tight mb-2" style={{ color: NAVY }}>
                      {story.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#7B8DAA] bg-[#F8FAFD] px-2.5 py-0.5 rounded-[4px] border border-[#0B1D3A]/[0.04]">
                      <Clock size={10} strokeWidth={2.5} style={{ color: GOLD }} />
                      {story.duration}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-[4px] flex items-center justify-center text-white shrink-0 mt-0.5" style={{ background: "#EF4444" }}>
                      <Target size={12} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-[0.14em] mb-1 text-[#EF4444]">
                        Challenge
                      </div>
                      <p className="text-[12px] text-[#5A6B82] leading-[1.6] font-medium">
                        {story.challenge}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-[4px] flex items-center justify-center text-white shrink-0 mt-0.5" style={{ background: GOLD }}>
                      <Lightbulb size={12} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: GOLD }}>
                        Outcome & Execution
                      </div>
                      <p className="text-[12px] text-[#5A6B82] leading-[1.6] font-medium">
                        {story.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-[12px] italic text-[#5A6B82] font-medium bg-[#F8FAFD] px-3 py-2.5 rounded-[4px] border border-[#0B1D3A]/[0.04] border-l-2 border-l-[#C99A2E]">
                    <Quote size={12} className="text-[#C99A2E] shrink-0 mt-0.5" />
                    <span>“{story.quote}”</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#0B1D3A]/[0.06]">
                    {story.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex flex-col items-center py-2.5 px-1 rounded-[4px] border text-center"
                        style={{ background: accent.metricBg, borderColor: accent.metricBorder }}
                      >
                        <span className="text-[16px] font-black leading-none" style={{ color: NAVY }}>
                          {m.value}
                        </span>
                        <span className="text-[9px] font-bold text-[#7B8DAA] mt-1 leading-tight text-center">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

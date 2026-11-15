import { MapPin, Clock, Target, Lightbulb, Quote } from "lucide-react";
import { motion } from "motion/react";
import SectionHeader from "../SectionHeader";
import { successStoriesData } from "./data";

export default function SuccessStoriesMobile() {
  return (
    <section
      id="company-sec-success-stories"
      className="w-full py-10 px-4 bg-white border-b border-[#E2E8F0] scroll-mt-[96px]"
    >
      <SectionHeader
        compact
        eyebrow="04 · Proven Track Record"
        title="Success Stories — Stores & Agents"
      />

      <div className="flex flex-col gap-4">
        {successStoriesData.map((story, idx) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[8px] overflow-hidden border border-[#E2E8F0] bg-white shadow-2xs flex flex-col relative group"
          >
            <div className="h-36 relative overflow-hidden bg-[#0B1D3A]">
              <img
                src={story.image}
                alt={story.entityName}
                className="w-full h-full object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/95 via-[#0B1D3A]/40 to-transparent" />

              <span
                aria-hidden="true"
                className="absolute top-1.5 right-2.5 text-4xl font-black tracking-tighter text-white/15 select-none pointer-events-none leading-none"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              <div className="absolute top-2.5 left-2.5">
                <span className="text-[9px] font-extrabold uppercase tracking-wider bg-white/95 text-[#0B1D3A] px-2 py-0.5 rounded-[4px]">
                  {story.category}
                </span>
              </div>
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <div className="text-xs font-extrabold">{story.entityName}</div>
                <div className="text-[10px] text-[#E5C158] flex items-center gap-1 mt-0.5">
                  <MapPin size={10} />
                  <span>{story.location}</span>
                </div>
              </div>
            </div>

            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-extrabold text-[#0B1D3A] leading-snug">
                  {story.title}
                </h3>
              </div>

              <span className="inline-flex items-center gap-1 self-start text-[10px] font-bold text-[#64748B] bg-[#F8FAFD] px-2 py-0.5 rounded-[4px] border border-[#E2E8F0]">
                <Clock size={11} className="text-[#C99A2E]" />
                {story.duration}
              </span>

              <div className="bg-[#F8FAFD] rounded-[6px] p-2.5 border border-[#E2E8F0]">
                <div className="text-[9px] font-extrabold uppercase tracking-wider text-[#64748B] flex items-center gap-1 mb-0.5">
                  <Target size={11} className="text-[#0B1D3A]" />
                  Challenge
                </div>
                <p className="text-[11px] text-[#475569] leading-relaxed">
                  {story.challenge}
                </p>
              </div>

              <div className="bg-[#FFFDF7] rounded-[6px] p-2.5 border border-[#C99A2E]/25">
                <div className="text-[9px] font-extrabold uppercase tracking-wider text-[#A87A18] flex items-center gap-1 mb-0.5">
                  <Lightbulb size={11} className="text-[#C99A2E]" />
                  Outcome & Execution
                </div>
                <p className="text-[11px] text-[#475569] leading-relaxed">
                  {story.outcome}
                </p>
              </div>

              <div className="flex items-start gap-1.5 text-[11px] italic text-[#475569] bg-slate-50 px-3 py-2 rounded-[6px] border-l-2 border-[#C99A2E]">
                <Quote size={12} className="text-[#C99A2E] shrink-0 mt-0.5" />
                <span>“{story.quote}”</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-[#F1F5F9]">
                {story.metrics.map((m) => (
                  <motion.div
                    key={m.label}
                    whileTap={{ scale: 0.97 }}
                    className="p-2 rounded-[6px] bg-[#F0F4FF] border border-[#0B1D3A]/10 text-center"
                  >
                    <div className="text-xs font-black text-[#0B1D3A] leading-tight">
                      {m.value}
                    </div>
                    <div className="text-[9px] font-semibold text-[#64748B] mt-0.5">
                      {m.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

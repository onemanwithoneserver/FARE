import { MapPin, Clock, Target, Lightbulb, Quote } from "lucide-react";
import { motion, type Variants } from "motion/react";
import SectionHeader from "../SectionHeader";
import { successStoriesData } from "./data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SuccessStoriesDesktop() {
  return (
    <section
      id="company-sec-success-stories"
      className="w-full py-14 sm:py-16 px-8 lg:px-10 bg-white border-b border-[#E2E8F0] relative overflow-hidden scroll-mt-[72px]"
    >
      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[12%] right-[-6%] w-[420px] h-[420px] rounded-full blur-[130px] pointer-events-none z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.16) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1160px] mx-auto w-full relative z-10">
        <SectionHeader
          eyebrow="04 · Proven Track Record"
          title="Success Stories — Stores, Agents & Achievements"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-6"
        >
          {successStoriesData.map((story, idx) => (
            <motion.div
              key={story.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row rounded-[8px] overflow-hidden border border-[#E2E8F0] hover:border-[#C99A2E]/55 bg-white shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] transition-all duration-300 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C99A2E] via-[#E5C158] to-[#0B1D3A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

              <div
                className="w-full md:w-[250px] h-48 md:h-auto shrink-0 relative overflow-hidden"
                style={{
                  background:
                    idx % 2 === 0
                      ? "linear-gradient(135deg, #0B1D3A 0%, #162E56 100%)"
                      : "linear-gradient(135deg, #102548 0%, #1A3A2E 100%)",
                }}
              >
                <img
                  src={story.image}
                  alt={story.entityName}
                  className="w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/95 via-[#0B1D3A]/40 to-transparent" />

                <span
                  aria-hidden="true"
                  className="absolute top-2 right-3 text-5xl font-black tracking-tighter text-white/12 group-hover:text-[#E5C158]/22 transition-colors select-none pointer-events-none leading-none"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-[#0B1D3A] px-2.5 py-1 rounded-[4px] shadow-xs">
                    {story.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                  <div className="text-xs font-extrabold leading-snug">
                    {story.entityName}
                  </div>
                  <div className="text-[10px] text-[#E5C158] font-medium mt-0.5 flex items-center gap-1">
                    <MapPin size={10} />
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-extrabold text-[#0B1D3A] tracking-tight group-hover:text-[#C99A2E] transition-colors">
                      {story.title}
                    </h3>
                    <span className="text-[11px] font-bold text-[#64748B] flex items-center gap-1 bg-[#F8FAFD] px-2.5 py-1 rounded-[4px] border border-[#E2E8F0]">
                      <Clock size={12} className="text-[#C99A2E]" />
                      {story.duration}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                    <div className="bg-[#F8FAFD] rounded-[6px] p-3.5 border border-[#E2E8F0]">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#64748B] flex items-center gap-1.5 mb-1">
                        <Target size={12} className="text-[#0B1D3A]" />
                        Challenge
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        {story.challenge}
                      </p>
                    </div>

                    <div className="bg-[#FFFDF7] rounded-[6px] p-3.5 border border-[#C99A2E]/25">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#A87A18] flex items-center gap-1.5 mb-1">
                        <Lightbulb size={12} className="text-[#C99A2E]" />
                        Outcome & Execution
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        {story.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-start gap-2 text-xs italic text-[#475569] bg-slate-50 px-3.5 py-2.5 rounded-[6px] border-l-2 border-[#C99A2E]">
                    <Quote size={14} className="text-[#C99A2E] shrink-0 mt-0.5" />
                    <span>“{story.quote}”</span>
                  </div>
                </div>

                {/* Achievement Metric Pills */}
                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#F1F5F9]">
                  {story.metrics.map((m) => (
                    <motion.div
                      key={m.label}
                      whileHover={{ scale: 1.04, y: -1 }}
                      transition={{ duration: 0.2 }}
                      className="px-3 py-1.5 rounded-[6px] bg-[#F0F4FF] hover:bg-[#FFFDF7] border border-[#0B1D3A]/10 hover:border-[#C99A2E]/40 flex items-center gap-2 transition-colors"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                        {m.label}:
                      </span>
                      <span className="text-xs font-black text-[#0B1D3A]">
                        {m.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

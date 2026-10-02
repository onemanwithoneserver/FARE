import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Quote, Presentation, MessagesSquare, Clock3, UserCheck2, Sparkles, BookOpen } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const FORMAT_ICONS = [
  { icon: <Presentation size={22} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
  { icon: <MessagesSquare size={22} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #10B981, #059669)" },
  { icon: <Clock3 size={22} strokeWidth={2.2} />, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
  { icon: <UserCheck2 size={22} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #8B5CF6, #6D28D9)" },
  { icon: <Sparkles size={22} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #F97316, #EA580C)" },
];

export default function Desktop() {
  const data = profileData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="w-full py-20 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[5%] w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[0%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(11,29,58,0.06) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center shadow-lg text-white">
            <BookOpen size={20} strokeWidth={2.5} />
          </div>
          <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Methodology</h2>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
          {data.methodology.tags.map((tag, idx) => (
            <span
              key={idx}
              className="group text-[13px] font-bold px-4 py-2 rounded bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] text-[#0B1D3A]/80 hover:border-[#0B1D3A]/[0.25] hover:shadow-[0_4px_16px_-4px_rgba(11,29,58,0.08)] hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-default"
            >
              <span className="w-2 h-2 rounded-full inline-block mr-2 group-hover:scale-125 transition-transform duration-300 shadow-sm" style={{ background: GOLD }} />
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="relative rounded p-10 mb-10 shadow-[0_12px_40px_-12px_rgba(11,29,58,0.15)] overflow-hidden group" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)` }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[40px] pointer-events-none transition-transform duration-700 group-hover:scale-125 group-hover:translate-x-8" />
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <Quote size={60} className="absolute top-8 right-10 rotate-180 opacity-[0.1] group-hover:scale-110 transition-transform duration-500" style={{ color: GOLD }} />
          
          <div className="relative z-10 max-w-[850px]">
            <p className="text-[22px] italic font-medium leading-[1.7] mb-8 text-white/95">
              "{data.methodology.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-0.5 rounded-full" style={{ background: GOLD }} />
              <span className="text-[14px] font-black uppercase tracking-[0.15em] text-[#D5AA45]">{data.methodology.quoteAuthor}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-5 gap-6">
          {data.methodology.formats.map((format, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="group bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/[0.20] rounded p-6 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.06)] hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-400 ease-out flex flex-col relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }}
              />
              <div
                className="w-14 h-14 rounded flex items-center justify-center text-white shadow-md mb-6 group-hover:scale-110 transition-transform duration-400 ease-out"
                style={{ background: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }}
              >
                {FORMAT_ICONS[idx % FORMAT_ICONS.length].icon}
              </div>
              <h4 className="text-[16px] font-black mb-2 tracking-tight" style={{ color: NAVY }}>{format.name}</h4>
              <p className="text-[13px] text-[#5A6B82] leading-relaxed font-medium">{format.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

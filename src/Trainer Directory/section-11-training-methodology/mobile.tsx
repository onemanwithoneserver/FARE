import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Quote, Presentation, MessagesSquare, Clock3, UserCheck2, Sparkles, BookOpen } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const FORMAT_ICONS = [
  { icon: <Presentation size={18} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
  { icon: <MessagesSquare size={18} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #10B981, #059669)" },
  { icon: <Clock3 size={18} strokeWidth={2.2} />, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
  { icon: <UserCheck2 size={18} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #8B5CF6, #6D28D9)" },
  { icon: <Sparkles size={18} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #F97316, #EA580C)" },
];

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
        className="absolute top-[10%] right-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(11,29,58,0.06) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center shadow-lg text-white shrink-0">
            <BookOpen size={16} strokeWidth={2.5} />
          </div>
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Methodology</h2>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-2.5 mb-8">
          {data.methodology.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[12px] font-bold px-3 py-1.5 rounded bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] text-[#0B1D3A]/80 shadow-[0_2px_8px_-4px_rgba(11,29,58,0.06)]"
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block mr-2 shadow-sm" style={{ background: GOLD }} />
              {tag}
            </span>
          ))}
        </motion.div>

        <div className="flex flex-col gap-6">

          <motion.div
            variants={item}
            className="relative rounded p-6 shadow-[0_8px_32px_-8px_rgba(11,29,58,0.15)] overflow-hidden group"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #132A4D 100%)` }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[30px] pointer-events-none transition-transform duration-700 group-active:scale-125" />
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
            <Quote size={40} className="absolute top-4 right-4 rotate-180 opacity-[0.1] group-active:scale-110 transition-transform duration-500" style={{ color: GOLD }} />
            
            <p className="text-[16px] italic font-medium leading-[1.7] mb-6 relative z-10 text-white/95">
              "{data.methodology.quote}"
            </p>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-8 h-0.5 rounded-full" style={{ background: GOLD }} />
              <span className="text-[13px] font-black uppercase tracking-[0.15em] text-[#D5AA45]">{data.methodology.quoteAuthor}</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {data.methodology.formats.map((format, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-5 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.06)] relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-80"
                  style={{ background: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }}
                />
                <div
                  className="w-10 h-10 rounded flex items-center justify-center text-white shadow-md mb-4"
                  style={{ background: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }}
                >
                  {FORMAT_ICONS[idx % FORMAT_ICONS.length].icon}
                </div>
                <h4 className="text-[14px] font-black mb-1.5 tracking-tight" style={{ color: NAVY }}>{format.name}</h4>
                <p className="text-[12px] text-[#5A6B82] leading-[1.65] font-medium">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

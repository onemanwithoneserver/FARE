import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Quote, Presentation, MessagesSquare, Clock3, UserCheck2, Sparkles } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const FORMAT_ICONS = [
  { icon: <Presentation size={17} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
  { icon: <MessagesSquare size={17} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #10B981, #059669)" },
  { icon: <Clock3 size={17} strokeWidth={2.2} />, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
  { icon: <UserCheck2 size={17} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #8B5CF6, #6D28D9)" },
  { icon: <Sparkles size={17} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #F97316, #EA580C)" },
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
      className="w-full py-10 px-5 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden"
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Methodology</h2>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-2 mb-6">
          {data.methodology.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#0B1D3A]/[0.06] text-[#0B1D3A]/70"
            >
              <span className="w-1 h-1 rounded-full inline-block mr-1.5" style={{ background: GOLD }} />
              {tag}
            </span>
          ))}
        </motion.div>

        <div className="flex flex-col gap-5">

          <motion.div
            variants={item}
            className="relative rounded-2xl p-5 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #132A4D 100%)` }}
          >
            <div className="absolute -top-4 -right-3 w-28 h-28 rounded-full opacity-[0.06]" style={{ background: GOLD }} />
            <Quote size={26} className="absolute top-4 right-4 rotate-180 opacity-[0.12]" style={{ color: GOLD }} />
            <p className="text-[14px] italic font-medium leading-[1.65] mb-4 relative z-10 text-white">
              {data.methodology.quote}
            </p>
            <div className="flex items-center gap-2.5 relative z-10">
              <div className="w-6 h-0.5 rounded-full" style={{ background: GOLD }} />
              <span className="text-[12px] font-bold" style={{ color: GOLD_MID }}>{data.methodology.quoteAuthor}</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {data.methodology.formats.map((format, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-4 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] transition-all duration-300 ease-out relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2.5px] opacity-70"
                  style={{ background: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }}
                />
                <div
                  className="w-8 h-8 rounded-lg ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm mb-2.5"
                  style={{ background: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }}
                >
                  {FORMAT_ICONS[idx % FORMAT_ICONS.length].icon}
                </div>
                <h4 className="text-[12px] font-bold mb-1" style={{ color: NAVY }}>{format.name}</h4>
                <p className="text-[11px] text-[#5A6B82] leading-[1.6] font-medium">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Quote, Presentation, MessagesSquare, Clock3, UserCheck2, Sparkles } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const FORMAT_ICONS = [
  { icon: <Presentation size={19} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
  { icon: <MessagesSquare size={19} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #10B981, #059669)" },
  { icon: <Clock3 size={19} strokeWidth={2.2} />, bg: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` },
  { icon: <UserCheck2 size={19} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #8B5CF6, #6D28D9)" },
  { icon: <Sparkles size={19} strokeWidth={2.2} />, bg: "linear-gradient(135deg, #F97316, #EA580C)" },
];

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
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFD 100%)" }}
    >
      <div className="absolute top-[20%] right-[6%] w-[380px] h-[380px] bg-gradient-radial from-[#F4E4BE]/25 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Methodology</h2>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-2 mb-7">
          {data.methodology.tags.map((tag, idx) => (
            <span
              key={idx}
              className="group text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#0B1D3A]/[0.06] text-[#0B1D3A]/70 hover:border-[#0B1D3A]/[0.18] hover:bg-white transition-all duration-300 ease-out cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block mr-1.5 group-hover:scale-125 transition-transform duration-300" style={{ background: GOLD }} />
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="relative rounded-2xl p-8 mb-6 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] overflow-hidden" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #132A4D 100%)` }}>
          <div className="absolute -top-6 -right-4 w-40 h-40 rounded-full opacity-[0.06]" style={{ background: GOLD }} />
          <Quote size={40} className="absolute top-6 right-7 rotate-180 opacity-[0.12]" style={{ color: GOLD }} />
          <p className="text-[17px] italic font-medium leading-[1.75] mb-6 relative z-10 text-white max-w-[820px]">
            {data.methodology.quote}
          </p>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-8 h-0.5 rounded-full" style={{ background: GOLD }} />
            <span className="text-[13px] font-bold" style={{ color: GOLD_MID }}>{data.methodology.quoteAuthor}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-5 gap-5">
          {data.methodology.formats.map((format, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              className="group bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/[0.20] rounded-2xl p-5 shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] transition-all duration-300 ease-out flex flex-col relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2.5px] opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }}
              />
              <div
                className="w-10 h-10 rounded-xl ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm mb-3.5 group-hover:scale-110 transition-all duration-300 ease-out"
                style={{ background: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }}
              >
                {FORMAT_ICONS[idx % FORMAT_ICONS.length].icon}
              </div>
              <h4 className="text-[13.5px] font-bold mb-1.5" style={{ color: NAVY }}>{format.name}</h4>
              <p className="text-[11.5px] text-[#5A6B82] leading-relaxed font-medium">{format.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

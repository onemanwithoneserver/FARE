import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Quote } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

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
              className="text-[11px] font-semibold px-2.5 py-1 rounded bg-white/80 backdrop-blur-sm border border-[#0B1D3A]/[0.08] text-[#0B1D3A]/70"
            >
              <span className="w-1 h-1 rounded-full inline-block mr-1.5" style={{ background: GOLD }} />
              {tag}
            </span>
          ))}
        </motion.div>

        <div className="flex flex-col gap-5">

          <motion.div variants={item}>
            <div
              className="relative rounded-lg p-5 border-l-[3px]"
              style={{
                background: `linear-gradient(135deg, ${GOLD}08, ${GOLD}03)`,
                borderLeftColor: GOLD,
                border: `1px solid ${GOLD}18`,
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <Quote size={24} className="absolute top-3 right-3 rotate-180 opacity-[0.08]" style={{ color: GOLD }} />
              <p className="text-[14px] italic font-medium leading-[1.6] mb-4 relative z-10" style={{ color: NAVY }}>
                "{data.methodology.quote}"
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-0.5 rounded-full" style={{ background: GOLD }} />
                <span className="text-[12px] font-bold" style={{ color: GOLD }}>{data.methodology.quoteAuthor}</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-3">
            {data.methodology.formats.map((format, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-lg p-4 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)]"
              >
                <h4 className="text-[12px] font-bold mb-1" style={{ color: NAVY }}>{format.name}</h4>
                <p className="text-[11px] text-[#7B8DAA] leading-[1.6] font-medium">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

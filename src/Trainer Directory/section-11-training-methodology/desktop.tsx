import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Quote } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

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
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative"
      style={{ background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFD 100%)" }}
    >
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
              className="text-[12px] font-semibold px-3 py-1.5 rounded bg-white/80 backdrop-blur-sm border border-[#0B1D3A]/[0.08] text-[#0B1D3A]/70"
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block mr-1.5" style={{ background: GOLD }} />
              {tag}
            </span>
          ))}
        </motion.div>

        <div className="grid grid-cols-12 gap-7">
                    <motion.div variants={item} className="col-span-8">
            <div
              className="relative rounded p-7 border-l-[3px]"
              style={{
                background: `linear-gradient(135deg, ${GOLD}08, ${GOLD}03)`,
                borderLeftColor: GOLD,
                border: `1px solid ${GOLD}18`,
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <Quote size={32} className="absolute top-4 right-4 rotate-180 opacity-[0.08]" style={{ color: GOLD }} />
              <p className="text-[16px] italic font-medium leading-[1.7] mb-5 relative z-10" style={{ color: NAVY }}>
                {data.methodology.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 rounded-full" style={{ background: GOLD }} />
                <span className="text-[13px] font-bold" style={{ color: GOLD }}>{data.methodology.quoteAuthor}</span>
              </div>
            </div>
          </motion.div>

                    <div className="col-span-4 flex flex-col gap-3">
            {data.methodology.formats.map((format, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -2, x: 2, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-4 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.04)] hover:shadow-[0_6px_20px_-6px_rgba(11,29,58,0.08)] transition-all duration-400"
              >
                <h4 className="text-[13px] font-bold mb-1" style={{ color: NAVY }}>{format.name}</h4>
                <p className="text-[11px] text-[#7B8DAA] leading-relaxed font-medium">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

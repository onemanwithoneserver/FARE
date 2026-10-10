import { motion } from "motion/react";
import { Clock, Video, Award } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <section aria-label="Quick Summary" className="w-full relative bg-[#0B1D3A] py-5 px-5 border-y border-[#1A2E50] overflow-hidden shadow-inner">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-4"
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center gap-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1A2E50] border border-[#2E4A7D] text-[#C99A2E] shrink-0 shadow-lg mb-1">
            <Award size={22} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[16px] font-bold text-white mb-1 leading-tight">{s.title}</h2>
            <p className="text-[13px] font-medium text-white/70 leading-relaxed px-2">{s.description}</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-row justify-center flex-wrap gap-2.5 mt-2">
          <div className="flex items-center gap-2 bg-[#1A2E50] border border-[#2E4A7D] px-3 py-1.5 rounded-full shadow-md">
            <Clock size={12} className="text-[#C99A2E]" strokeWidth={2.5} />
            <span className="text-[12px] font-bold text-white">{s.tags[0]}</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1A2E50] border border-[#2E4A7D] px-3 py-1.5 rounded-full shadow-md">
            <Video size={12} className="text-[#06B6D4]" strokeWidth={2.5} />
            <span className="text-[12px] font-bold text-white">{s.tags[1]}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

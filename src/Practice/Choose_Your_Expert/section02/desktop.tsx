import { motion } from "motion/react";
import { Clock, Video, Award } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <section aria-label="Quick Summary" className="w-full relative bg-[#0B1D3A] py-4 border-y border-[#1A2E50] overflow-hidden shadow-inner">
      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10">
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex items-center justify-between gap-6"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1A2E50] border border-[#2E4A7D] text-[#C99A2E] shrink-0 shadow-lg">
              <Award size={22} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[17px] font-bold text-white mb-0.5 tracking-tight">{s.title}</h2>
              <p className="text-[13px] font-medium text-white/70">{s.description}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2.5 bg-[#1A2E50] border border-[#2E4A7D] px-4 py-2 rounded-full shadow-md">
              <Clock size={14} className="text-[#C99A2E]" strokeWidth={2.5} />
              <span className="text-[13px] font-bold text-white whitespace-nowrap">{s.tags[0]}</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#1A2E50] border border-[#2E4A7D] px-4 py-2 rounded-full shadow-md">
              <Video size={14} className="text-[#06B6D4]" strokeWidth={2.5} />
              <span className="text-[13px] font-bold text-white whitespace-nowrap">{s.tags[1]}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

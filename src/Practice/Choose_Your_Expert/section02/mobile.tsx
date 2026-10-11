import { motion } from "motion/react";
import { Clock, Video, Award } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <section aria-label="Quick Summary" className="w-full relative bg-[#0B1D3A] py-3 px-4 border-y border-[#1A2E50] overflow-hidden shadow-inner font-['Outfit']">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-2.5"
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center gap-1.5">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#C99A2E] text-white shrink-0 shadow-md">
            <Award size={18} strokeWidth={2.2} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[14.5px] font-medium text-white mb-0.5 leading-tight">{s.title}</h2>
            <p className="text-[12px] font-normal text-white/70 leading-relaxed px-2">{s.description}</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-row justify-center flex-wrap gap-2 mt-1">
          <div className="flex items-center gap-1.5 bg-[#1A2E50] border border-[#2E4A7D] px-2.5 py-1 rounded-full shadow-xs">
            <span className="w-4 h-4 rounded-full bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
              <Clock size={9.5} strokeWidth={2.5} />
            </span>
            <span className="text-[11.5px] font-medium text-white">{s.tags[0]}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#1A2E50] border border-[#2E4A7D] px-2.5 py-1 rounded-full shadow-xs">
            <span className="w-4 h-4 rounded-full bg-[#0891B2] text-white flex items-center justify-center shrink-0">
              <Video size={9.5} strokeWidth={2.5} />
            </span>
            <span className="text-[11.5px] font-medium text-white">{s.tags[1]}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

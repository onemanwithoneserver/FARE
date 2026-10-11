import { motion } from "motion/react";
import { Clock, Video, Award } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <section aria-label="Quick Summary" className="w-full relative bg-[#0B1D3A] py-2.5 border-y border-[#1A2E50] overflow-hidden shadow-inner font-['Outfit']">
      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10">
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex items-center justify-between gap-6"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8.5 h-8.5 rounded-full bg-[#C99A2E] text-white shrink-0 shadow-md">
              <Award size={17} strokeWidth={2.2} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[15px] font-medium text-white mb-0.5 tracking-tight">{s.title}</h2>
              <p className="text-[12.5px] font-normal text-white/70">{s.description}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-2.5 shrink-0">
            <div className="flex items-center gap-2 bg-[#1A2E50] border border-[#2E4A7D] px-3 py-1 rounded-full shadow-xs">
              <span className="w-4.5 h-4.5 rounded-full bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
                <Clock size={10} strokeWidth={2.5} />
              </span>
              <span className="text-[12px] font-medium text-white whitespace-nowrap">{s.tags[0]}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1A2E50] border border-[#2E4A7D] px-3 py-1 rounded-full shadow-xs">
              <span className="w-4.5 h-4.5 rounded-full bg-[#0891B2] text-white flex items-center justify-center shrink-0">
                <Video size={10} strokeWidth={2.5} />
              </span>
              <span className="text-[12px] font-medium text-white whitespace-nowrap">{s.tags[1]}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

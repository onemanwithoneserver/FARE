import { motion } from "motion/react";
import { Clock, Video, Award } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <section aria-label="Quick Summary" className="w-full relative bg-[#0B1D3A] py-8 px-5 overflow-hidden">
      {/* ambient animated lights */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-[70px] animate-pulse-glow" style={{ background: "rgba(201,154,46,0.15)" }} />
        <div className="absolute bottom-0 left-0 w-[150px] h-[150px] rounded-full blur-[60px] animate-pulse-glow" style={{ background: "rgba(129,140,248,0.15)", animationDelay: "1s" }} />
      </div>

      <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6"
        >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center gap-3">
          <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-[#C99A2E]/30 shadow-[0_0_15px_rgba(201,154,46,0.15)] text-[#C99A2E] shrink-0">
            <Award size={32} strokeWidth={2.5} className="mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#475569]">{s.expertLabel}</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[18px] font-bold text-white mb-1.5 leading-tight">{s.title}</h2>
            <p className="text-[13px] font-medium text-white/70 leading-relaxed px-2">{s.description}</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5 bg-white px-3 py-2.5 rounded-[10px] shadow-lg w-full">
            <div className="w-8 h-8 rounded-[6px] bg-[#C99A2E] flex items-center justify-center text-white shrink-0">
              <Clock size={16} strokeWidth={2.5} />
            </div>
            <span className="text-[13px] font-bold text-[#0B1D3A]">{s.tags[0]}</span>
          </div>
          <div className="flex items-center gap-2.5 bg-white px-3 py-2.5 rounded-[10px] shadow-lg w-full">
            <div className="w-8 h-8 rounded-[6px] bg-[#06B6D4] flex items-center justify-center text-white shrink-0">
              <Video size={16} strokeWidth={2.5} />
            </div>
            <span className="text-[13px] font-bold text-[#0B1D3A]">{s.tags[1]}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from "motion/react";
import { Clock, Video, Award } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <section aria-label="Quick Summary" className="w-full relative bg-[#0B1D3A] py-6 overflow-hidden">
      {/* ambient animated lights */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/2 left-[10%] w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse-glow" style={{ background: "rgba(201,154,46,0.15)" }} />
        <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] rounded-full blur-[90px] animate-pulse-glow" style={{ background: "rgba(129,140,248,0.15)", animationDelay: "1s" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-[1000px] mx-auto w-full px-6 relative z-10">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex items-center justify-between gap-6"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-6">
            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-[#C99A2E]/30 shadow-[0_0_15px_rgba(201,154,46,0.15)] text-[#C99A2E] shrink-0">
              <Award size={32} strokeWidth={2.5} className="mb-0.5" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#475569]">{s.expertLabel}</span>
            </div>
            <div className="flex flex-col max-w-[400px]">
              <h2 className="text-[20px] font-bold text-white mb-1 tracking-tight">{s.title}</h2>
              <p className="text-[14px] font-medium text-white/70 leading-snug">{s.description}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col xl:flex-row items-center gap-3 shrink-0">
            <div className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-[10px] shadow-lg">
              <div className="w-8 h-8 rounded-[6px] bg-[#C99A2E] flex items-center justify-center text-white shrink-0">
                <Clock size={16} strokeWidth={2.5} />
              </div>
              <span className="text-[14px] font-bold text-[#0B1D3A] whitespace-nowrap">{s.tags[0]}</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-[10px] shadow-lg">
              <div className="w-8 h-8 rounded-[6px] bg-[#06B6D4] flex items-center justify-center text-white shrink-0">
                <Video size={16} strokeWidth={2.5} />
              </div>
              <span className="text-[14px] font-bold text-[#0B1D3A] whitespace-nowrap">{s.tags[1]}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

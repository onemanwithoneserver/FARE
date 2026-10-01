import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { MessageSquare } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
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
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Company Feedback</h2>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] rounded-2xl p-16 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] transition-all duration-300 ease-out hover:border-[#0B1D3A]/20 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)]"
        >
          <div
            className="w-12 h-12 rounded-xl ring-1 ring-black/5 flex items-center justify-center text-white shadow-sm mb-4"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
          >
            <MessageSquare size={22} strokeWidth={2.2} />
          </div>
          <p className="text-[14px] text-[#5A6B82] font-medium max-w-[400px]">
            Verified company feedback will appear here as engagements are completed.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

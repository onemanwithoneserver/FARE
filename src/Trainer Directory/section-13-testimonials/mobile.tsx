import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { MessageSquare } from "lucide-react";

const NAVY = "#0B1D3A";

export default function Mobile() {
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
      className="w-full py-12 px-6 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center shadow-lg text-white shrink-0">
            <MessageSquare size={16} strokeWidth={2.5} />
          </div>
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Company Feedback</h2>
        </motion.div>

        <motion.div
          variants={item}
          className="group bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-10 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_-8px_rgba(11,29,58,0.06)] transition-all duration-300 ease-out hover:border-[#0B1D3A]/[0.15] hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(11,29,58,0.12)] relative overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "linear-gradient(90deg, #8B5CF6, #6D28D9)" }}
          />
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#8B5CF6]/10 to-transparent rounded-full blur-[20px] pointer-events-none group-active:scale-150 transition-transform duration-700" />

          <div
            className="w-12 h-12 rounded flex items-center justify-center text-white shadow-md mb-5 group-active:scale-110 transition-transform duration-300 ease-out"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
          >
            <MessageSquare size={20} strokeWidth={2.2} />
          </div>
          <p className="text-[14px] text-[#5A6B82] font-medium leading-[1.65]">
            Verified company feedback will appear here as engagements are completed.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

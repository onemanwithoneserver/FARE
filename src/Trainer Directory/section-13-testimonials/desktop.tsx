import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { MessageSquare } from "lucide-react";

const NAVY = "#0B1D3A";

export default function Desktop() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="w-full py-20 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[5%] w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center shadow-lg text-white">
            <MessageSquare size={20} strokeWidth={2.5} />
          </div>
          <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Company Feedback</h2>
        </motion.div>

        <motion.div
          variants={item}
          className="group bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-20 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_-8px_rgba(11,29,58,0.08)] transition-all duration-400 ease-out hover:border-[#0B1D3A]/[0.20] hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(11,29,58,0.18)] relative overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 right-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "linear-gradient(90deg, #8B5CF6, #6D28D9)" }}
          />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#8B5CF6]/10 to-transparent rounded-full blur-[30px] pointer-events-none group-hover:scale-150 transition-transform duration-700" />

          <div
            className="w-14 h-14 rounded flex items-center justify-center text-white shadow-md mb-6 group-hover:scale-110 transition-transform duration-400 ease-out"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
          >
            <MessageSquare size={24} strokeWidth={2.2} />
          </div>
          <p className="text-[16px] text-[#5A6B82] font-medium max-w-[420px] leading-[1.7]">
            Verified company feedback will appear here as engagements are completed.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

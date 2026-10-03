import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Quote, Star, ShieldCheck } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

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
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-40"
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
          <div className="w-[3px] h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Company Feedback</h2>
        </motion.div>

        <motion.div
          variants={item}
          className="w-full relative group"
        >
          
          <div className="bg-white/70 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-8 shadow-[0_8px_32px_-8px_rgba(11,29,58,0.08)] relative overflow-hidden flex flex-col items-center justify-center text-center">
            
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#8B5CF6]/10 to-transparent rounded-full blur-[20px] pointer-events-none" />
            <div
              className="absolute top-0 left-0 right-0 h-[3px] opacity-100"
              style={{ background: "linear-gradient(90deg, #8B5CF6, #6D28D9)" }}
            />
            
            <Quote size={60} className="absolute -top-3 -left-3 opacity-[0.03]" style={{ color: NAVY }} />

            
            <div className="flex gap-1 mb-5 opacity-40">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} fill={GOLD_MID} color={GOLD_MID} />
              ))}
            </div>

            <div className="w-14 h-14 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] mb-5 flex items-center justify-center relative shadow-sm">
               <ShieldCheck size={24} className="text-[#94A3B8]" strokeWidth={2} />
               <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 rounded-full" style={{ background: GOLD }} />
               </div>
            </div>

            <div className="space-y-2.5 mb-6 w-full max-w-[250px]">
              <div className="h-2 bg-[#F1F5F9] rounded-full w-full" />
              <div className="h-2 bg-[#F1F5F9] rounded-full w-[85%] mx-auto" />
              <div className="h-2 bg-[#F1F5F9] rounded-full w-[60%] mx-auto" />
            </div>

            <h3 className="text-[16px] font-black tracking-tight mb-2" style={{ color: NAVY }}>
              Feedback Pending
            </h3>
            <p className="text-[13px] text-[#5A6B82] font-medium leading-[1.65]">
              Verified company feedback and testimonials will automatically appear here once training engagements are completed and reviewed.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

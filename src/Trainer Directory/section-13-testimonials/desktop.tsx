import { useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Quote, Star, ShieldCheck } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const t = useProfileText();
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
        <motion.div variants={item} className="flex items-center gap-4 mb-12">
          <div className="w-[4px] h-7 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>{t("Company Feedback")}</h2>
        </motion.div>

        <motion.div
          variants={item}
          className="w-full max-w-[800px] mx-auto relative group"
        >
          
          <div className="bg-white/60 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded p-12 luxury-shadow-float transition-all duration-400 ease-out hover:border-[#0B1D3A]/[0.15] hover:luxury-shadow-float hover:-translate-y-1 relative overflow-hidden flex flex-col items-center justify-center text-center">
            
            
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-[#8B5CF6]/10 to-transparent rounded-full blur-[30px] pointer-events-none transition-transform duration-700 group-hover:scale-125" />
            <div
              className="absolute top-0 left-0 right-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "linear-gradient(90deg, #8B5CF6, #6D28D9)" }}
            />
            
            <Quote size={80} className="absolute -top-4 -left-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-500" style={{ color: NAVY }} />

            
            <div className="flex gap-1.5 mb-6 opacity-40">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} fill={GOLD_MID} color={GOLD_MID} />
              ))}
            </div>

            <div className="w-16 h-16 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] mb-6 flex items-center justify-center relative shadow-sm">
               <ShieldCheck size={28} className="text-[#94A3B8]" strokeWidth={2} />
               <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: GOLD }} />
               </div>
            </div>

            <div className="space-y-3 mb-8 w-full max-w-[400px]">
              <div className="h-2.5 bg-[#F1F5F9] rounded-full w-full" />
              <div className="h-2.5 bg-[#F1F5F9] rounded-full w-[85%] mx-auto" />
              <div className="h-2.5 bg-[#F1F5F9] rounded-full w-[60%] mx-auto" />
            </div>

            <h3 className="text-[18px] font-black tracking-tight mb-2" style={{ color: NAVY }}>
              {t("Feedback Pending")}
            </h3>
            <p className="text-[14px] text-[#5A6B82] font-medium max-w-[420px] leading-[1.7]">
              {t("Verified company feedback and testimonials will automatically appear here once training engagements are completed and reviewed.")}
            </p>
          </div>

          
          <div className="absolute top-[10%] bottom-[10%] -left-8 w-16 bg-white/40 backdrop-blur-md border border-[#0B1D3A]/[0.04] rounded-l opacity-50 pointer-events-none -z-10 shadow-sm" />
          <div className="absolute top-[10%] bottom-[10%] -right-8 w-16 bg-white/40 backdrop-blur-md border border-[#0B1D3A]/[0.04] rounded-r opacity-50 pointer-events-none -z-10 shadow-sm" />
        </motion.div>
      </motion.div>
    </section>
  );
}

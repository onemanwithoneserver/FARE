import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Play } from "lucide-react";

const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Mobile() {
  const t = useProfileText();
  const data = useProfileData();
  const video = data.videos[0];

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
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
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
          <h2 className="text-white text-[24px] font-black tracking-[-0.02em]">{t("Introductory Video")}</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
        </motion.div>

        <motion.div
          variants={item}
          className="relative w-full max-w-[360px] mx-auto aspect-video rounded-[4px] overflow-hidden flex items-center justify-center border border-[#0B1D3A]/[0.08] luxury-shadow-float cursor-pointer group"
        >
          <div className="absolute inset-0 bg-[#0B1D3A]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at center, rgba(201,154,46,0.2) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
                style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
              />
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center luxury-shadow-float group-active:scale-95 transition-transform duration-300 relative z-10"
                style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
              >
              <Play size={20} className="ml-1 text-white fill-white" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-2.5 right-2.5 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] z-10">
            {video.duration}
          </div>
          
          <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/50 to-transparent">
             <h3 className="text-white font-bold text-[13px]">{video.title}</h3>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

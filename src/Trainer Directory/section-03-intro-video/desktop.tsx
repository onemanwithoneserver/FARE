import { useProfileText } from "../profileData";
import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Play } from "lucide-react";
import VideoModal from "../../Components/Forms/VideoModal";

const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";


export default function Desktop() {
  const t = useProfileText();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);


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
      className="w-full py-16 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative overflow-hidden bg-white fare-noise-overlay"
    >
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(11,29,58,0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-10">
          <div className="w-[4px] h-7 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className=" text-[#0B1D3A] text-[28px] font-black tracking-[-0.02em]">{t("Introduction Video")}</h2>
        </motion.div>

        <div className="flex justify-center">
          
          <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[900px] aspect-video relative rounded-[4px] overflow-hidden group cursor-pointer border border-[#0B1D3A]/[0.08] luxury-shadow-float hover:luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400"
            onClick={() => setIsVideoModalOpen(true)}
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
                backgroundSize: "32px 32px",
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
                  className="w-20 h-20 rounded-full flex items-center justify-center luxury-shadow-float group-hover:scale-110 transition-all duration-400 relative z-10"
                  style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
                >
                  <Play fill="white" className="text-white ml-1 w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-[4px]">
              01:30
            </div>
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 rounded-tl opacity-20" style={{ borderColor: GOLD }} />
            <div className="absolute bottom-3 right-12 w-6 h-6 border-b-2 border-r-2 rounded-br opacity-20" style={{ borderColor: GOLD }} />
          </motion.div>

          
        </div>
      </motion.div>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  );
}

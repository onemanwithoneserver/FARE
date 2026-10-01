import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Play } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Mobile() {
  const data = profileData;
  const video = data.videos[0]; // Featured intro video

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
      className="w-full py-10 px-5 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden"
      style={{ background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFD 100%)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Introductory Video</h2>
        </motion.div>

        <motion.div
          variants={item}
          className="relative w-full aspect-video rounded-lg overflow-hidden flex items-center justify-center border border-[#0B1D3A]/[0.08] shadow-[0_8px_24px_-8px_rgba(11,29,58,0.12)] cursor-pointer group"
          style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)`
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-active:scale-95 transition-transform duration-300 relative z-10"
            style={{
              background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`,
              boxShadow: `0 8px 24px rgba(201,154,46,0.4)`,
            }}
          >
            <Play size={20} className="ml-1 text-white fill-white" />
          </div>

          <div className="absolute bottom-2.5 right-2.5 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
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

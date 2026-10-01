import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Play } from "lucide-react";
import VideoModal from "../../Components/Forms/VideoModal";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
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
      className="w-full py-14 px-10 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] flex justify-center relative"
      style={{ background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFD 100%)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-[1200px] w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-[22px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Introduction Video</h2>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ scale: 1.005, y: -3 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[800px] aspect-video relative rounded overflow-hidden group cursor-pointer border border-[#0B1D3A]/[0.08] shadow-[0_8px_30px_-4px_rgba(11,29,58,0.08)]"
          onClick={() => setIsVideoModalOpen(true)}
          style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)` }}
        >
                    <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(201,154,46,0.4)] group-hover:scale-110 group-hover:shadow-[0_12px_32px_rgba(201,154,46,0.5)] transition-all duration-400"
              style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
            >
              <Play fill="white" className="text-white ml-1 w-6 h-6" />
            </div>
          </div>

          <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded">
            01:30
          </div>

                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 rounded-tl opacity-20" style={{ borderColor: GOLD }} />
          <div className="absolute bottom-3 right-12 w-6 h-6 border-b-2 border-r-2 rounded-br opacity-20" style={{ borderColor: GOLD }} />
        </motion.div>
      </motion.div>
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  );
}

import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Play } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Mobile() {
  const data = profileData;

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
      style={{ background: "linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)" }}
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
          <h2 className="text-[20px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>See the Trainer in Action</h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {data.videos.map((video, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="flex flex-col gap-2.5 cursor-pointer"
            >
              <div
                className={`relative aspect-video rounded-2xl overflow-hidden flex items-center justify-center border border-[#0B1D3A]/[0.06] shadow-[0_4px_20px_-8px_rgba(11,29,58,0.1)] transition-all duration-300 ease-out hover:border-[#0B1D3A]/20 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,29,58,0.18)] ${
                  video.thumbnail === 'navy' ? '' : ''
                }`}
                style={{
                  background: video.thumbnail === 'navy'
                    ? `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)`
                    : "linear-gradient(135deg, #EEF4FF 0%, #E2E8F0 100%)",
                }}
              >

                {video.thumbnail === 'navy' && (
                  <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                )}

                <div
                  className="w-10 h-10 rounded-full ring-1 ring-black/5 flex items-center justify-center shadow-lg active:scale-95 transition-transform duration-300"
                  style={{
                    background: video.thumbnail === 'navy'
                      ? `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`
                      : "rgba(255,255,255,0.9)",
                    boxShadow: video.thumbnail === 'navy'
                      ? `0 4px 16px rgba(201,154,46,0.4)`
                      : "0 4px 12px rgba(11,29,58,0.1)",
                  }}
                >
                  <Play
                    size={16}
                    className={`ml-0.5 ${video.thumbnail === 'navy' ? 'text-white fill-white' : 'text-[#3B82F6] fill-[#3B82F6]'}`}
                  />
                </div>

                <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                  {video.duration}
                </div>

                {video.thumbnail === 'navy' && (
                  <div
                    className="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: GOLD, color: NAVY }}
                  >
                    NEW
                  </div>
                )}
              </div>

              <h4 className="text-[13px] font-bold" style={{ color: NAVY }}>
                {video.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Play, Film } from "lucide-react";

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
      className="w-full py-12 px-6 border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden bg-white"
    >
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[-10%] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(11,29,58,0.06) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-lg text-white shrink-0">
            <Film size={16} strokeWidth={2.5} />
          </div>
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>See the Trainer in Action</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {data.videos.map((video, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div
                className={`relative aspect-video rounded overflow-hidden flex items-center justify-center border ${video.thumbnail === 'navy' ? 'border-[#0B1D3A]/20' : 'border-[#0B1D3A]/[0.08]'} shadow-[0_8px_32px_-8px_rgba(11,29,58,0.08)] bg-white/90 backdrop-blur-xl`}
                style={{
                  background: video.thumbnail === 'navy'
                    ? `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)`
                    : "linear-gradient(135deg, #EEF4FF 0%, #E2E8F0 100%)",
                }}
              >

                {video.thumbnail === 'navy' && (
                  <>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[20px] pointer-events-none group-active:scale-150 transition-transform duration-700" />
                    <div
                      className="absolute inset-0 opacity-[0.05] pointer-events-none"
                      style={{
                        backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    />
                  </>
                )}

                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform duration-300 z-10 relative"
                  style={{
                    background: video.thumbnail === 'navy'
                      ? `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`
                      : "white",
                    boxShadow: video.thumbnail === 'navy'
                      ? `0 4px 16px rgba(201,154,46,0.4)`
                      : "0 4px 12px rgba(11,29,58,0.1)",
                  }}
                >
                  <Play
                    size={20}
                    className={`ml-1 ${video.thumbnail === 'navy' ? 'text-white fill-white' : 'text-[#3B82F6] fill-[#3B82F6]'}`}
                  />
                </div>

                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded z-10 border border-white/10">
                  {video.duration}
                </div>

                {video.thumbnail === 'navy' && (
                  <div
                    className="absolute top-3 left-3 text-[10px] font-black px-2 py-0.5 rounded z-10 shadow-lg tracking-wider"
                    style={{ background: GOLD, color: NAVY }}
                  >
                    NEW
                  </div>
                )}
              </div>

              <h4 className="text-[14px] font-bold tracking-tight leading-[1.4]" style={{ color: NAVY }}>
                {video.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}

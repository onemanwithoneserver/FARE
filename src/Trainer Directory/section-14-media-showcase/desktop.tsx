import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Play } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const data = profileData;

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
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[5%] w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(11,29,58,0.06) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-[1200px] w-full relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-10">
          <div className="w-[4px] h-10 lg:h-12 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_MID})` }} />
          <h2 className="text-4xl lg:text-[2.75rem] font-black tracking-tight leading-tight" style={{ color: NAVY }}>See the Trainer in Action</h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-6">
          {data.videos.map((video, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div
                className={`relative aspect-video rounded overflow-hidden flex items-center justify-center border ${video.thumbnail === 'navy' ? 'border-[#0B1D3A]/20' : 'border-[#0B1D3A]/[0.08]'} luxury-shadow-float group-hover:luxury-shadow-float transition-all duration-400 ease-out bg-white/90 backdrop-blur-xl`}
                style={{
                  background: video.thumbnail === 'navy'
                    ? `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)`
                    : "linear-gradient(135deg, #EEF4FF 0%, #E2E8F0 100%)",
                }}
              >
                {video.thumbnail === 'navy' && (
                  <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[20px] pointer-events-none group-hover:scale-150 transition-transform duration-700" />
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
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-400 ease-out z-10 relative"
                  style={{
                    background: video.thumbnail === 'navy'
                      ? `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`
                      : "white",
                    boxShadow: video.thumbnail === 'navy'
                      ? `0 8px 24px rgba(201,154,46,0.4)`
                      : "0 8px 24px rgba(11,29,58,0.1)",
                  }}
                >
                  <Play
                    size={22}
                    className={`ml-1 ${video.thumbnail === 'navy' ? 'text-white fill-white' : 'text-[#3B82F6] fill-[#3B82F6]'}`}
                  />
                </div>

                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded z-10 border border-white/10">
                  {video.duration}
                </div>

                {video.thumbnail === 'navy' && (
                  <div
                    className="absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded z-10 shadow-lg tracking-wider"
                    style={{ background: GOLD, color: NAVY }}
                  >
                    NEW
                  </div>
                )}
              </div>

              <h4 className="text-[15px] font-bold transition-colors duration-200 tracking-tight leading-[1.4]" style={{ color: NAVY }}>
                {video.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

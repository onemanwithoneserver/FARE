import { profileData } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Quote, Presentation, MessagesSquare, Clock3, UserCheck2, Sparkles } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";

const FORMAT_ICONS = [
  { icon: <Presentation size={18} strokeWidth={2.5} />, bg: "#3B82F6" },
  { icon: <MessagesSquare size={18} strokeWidth={2.5} />, bg: "#10B981" },
  { icon: <Clock3 size={18} strokeWidth={2.5} />, bg: GOLD },
  { icon: <UserCheck2 size={18} strokeWidth={2.5} />, bg: "#8B5CF6" },
  { icon: <Sparkles size={18} strokeWidth={2.5} />, bg: "#F97316" },
];

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
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[5%] w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[0%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
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
          <div className="w-[4px] h-7 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, #D5AA45)` }} />
          <h2 className="text-[28px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>Training Methodology</h2>
        </motion.div>

        <div className="flex gap-10">
          
          <div className="w-[450px] shrink-0 flex flex-col gap-6">
            <motion.div variants={item} className="relative rounded p-10 shadow-[0_12px_40px_-12px_rgba(11,29,58,0.15)] overflow-hidden group border border-[#0B1D3A]/[0.08]" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)` }}>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[40px] pointer-events-none" 
              />
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />
              <Quote size={80} className="absolute -top-4 -right-4 rotate-180 opacity-[0.08] group-hover:scale-110 transition-transform duration-500" style={{ color: GOLD }} />
              
              <div className="relative z-10">
                <Quote size={24} className="mb-6 opacity-80" style={{ color: GOLD }} />
                <p className="text-[20px] italic font-medium leading-[1.7] mb-8 text-white/95">
                  "{data.methodology.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-0.5 rounded-full" style={{ background: GOLD }} />
                  <span className="text-[13px] font-black uppercase tracking-[0.15em] text-[#D5AA45]">{data.methodology.quoteAuthor}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-2.5">
              {data.methodology.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="group text-[12px] font-bold px-3.5 py-1.5 rounded bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] text-[#0B1D3A]/80 hover:border-[#0B1D3A]/[0.25] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-default shadow-[0_2px_8px_rgba(11,29,58,0.04)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block mr-2 group-hover:scale-125 transition-transform duration-300 shadow-sm" style={{ background: GOLD }} />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          
          <div className="flex-1 flex flex-col gap-0 py-2 relative">
            <div className="absolute top-8 bottom-8 left-[23px] w-[2px] bg-gradient-to-b from-[#0B1D3A]/10 via-[#0B1D3A]/5 to-transparent z-0" />
            
            {data.methodology.formats.map((format, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="group flex items-start gap-6 relative z-10 pb-8 last:pb-0"
              >
                
                <div className="w-12 h-12 rounded bg-white border border-[#0B1D3A]/[0.08] shadow-[0_4px_16px_rgba(11,29,58,0.06)] flex items-center justify-center shrink-0 group-hover:-translate-y-1 group-hover:border-[#0B1D3A]/[0.15] group-hover:shadow-[0_8px_24px_rgba(11,29,58,0.12)] transition-all duration-400 ease-out relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ background: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }} />
                  <div className="text-white relative z-10 w-8 h-8 rounded flex items-center justify-center shadow-sm" style={{ background: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }}>
                    {FORMAT_ICONS[idx % FORMAT_ICONS.length].icon}
                  </div>
                </div>

                
                <div className="flex-1 pt-1 bg-white/50 backdrop-blur-sm p-4 rounded border border-transparent group-hover:border-[#0B1D3A]/[0.06] transition-colors duration-300 -mt-3">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-[12px] font-black opacity-30" style={{ color: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }}>
                      0{idx + 1}
                    </span>
                    <h4 className="text-[18px] font-black tracking-tight" style={{ color: NAVY }}>{format.name}</h4>
                  </div>
                  <p className="text-[14px] text-[#5A6B82] leading-relaxed font-medium max-w-[550px]">{format.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

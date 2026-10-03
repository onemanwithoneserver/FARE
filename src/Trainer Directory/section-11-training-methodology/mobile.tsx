import { useProfileData, useProfileText } from "../profileData";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Quote, Presentation, MessagesSquare, Clock3, UserCheck2, Sparkles } from "lucide-react";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";

const FORMAT_ICONS = [
  { icon: <Presentation size={16} strokeWidth={2.5} />, bg: "#3B82F6" },
  { icon: <MessagesSquare size={16} strokeWidth={2.5} />, bg: "#10B981" },
  { icon: <Clock3 size={16} strokeWidth={2.5} />, bg: GOLD },
  { icon: <UserCheck2 size={16} strokeWidth={2.5} />, bg: "#8B5CF6" },
  { icon: <Sparkles size={16} strokeWidth={2.5} />, bg: "#F97316" },
];

export default function Mobile() {
  const t = useProfileText();
  const data = useProfileData();

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
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-40"
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
          <div className="w-[3px] h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, #D5AA45)` }} />
          <h2 className="text-[24px] font-black tracking-[-0.02em]" style={{ color: NAVY }}>{t("Training Methodology")}</h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          
          <div className="flex flex-col gap-5">
            <motion.div variants={item} className="relative rounded-[4px] p-8 luxury-shadow-float overflow-hidden group border border-[#0B1D3A]/[0.08]" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)` }}>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-[#C99A2E]/20 to-transparent rounded-full blur-[30px] pointer-events-none" 
              />
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />
              <Quote size={60} className="absolute -top-3 -right-3 rotate-180 opacity-[0.08]" style={{ color: GOLD }} />
              
              <div className="relative z-10">
                <Quote size={20} className="mb-4 opacity-80" style={{ color: GOLD }} />
                <p className="text-[17px] italic font-medium leading-[1.6] mb-6 text-white/95">
                  "{data.methodology.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-0.5 rounded-full" style={{ background: GOLD }} />
                  <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#D5AA45]">{data.methodology.quoteAuthor}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-2">
              {data.methodology.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-[4px] bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.06] text-[#0B1D3A]/80 shadow-[0_2px_8px_rgba(11,29,58,0.04)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block mr-1.5 shadow-sm" style={{ background: GOLD }} />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          
          <div className="flex flex-col gap-0 py-2 relative">
            <div className="absolute top-6 bottom-6 left-[20px] w-[2px] bg-gradient-to-b from-[#0B1D3A]/10 via-[#0B1D3A]/5 to-transparent z-0" />
            
            {data.methodology.formats.map((format, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="flex items-start gap-4 relative z-10 pb-8 last:pb-0"
              >
                
                <div className="w-10 h-10 rounded-[4px] bg-white border border-[#0B1D3A]/[0.08] shadow-sm flex items-center justify-center shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ background: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }} />
                  <div className="text-white relative z-10 w-7 h-7 rounded-[4px] flex items-center justify-center shadow-sm" style={{ background: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }}>
                    {FORMAT_ICONS[idx % FORMAT_ICONS.length].icon}
                  </div>
                </div>

                
                <div className="flex-1 pt-0 -mt-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[10px] font-black opacity-40" style={{ color: FORMAT_ICONS[idx % FORMAT_ICONS.length].bg }}>
                      0{idx + 1}
                    </span>
                    <h4 className="text-[16px] font-black tracking-tight" style={{ color: NAVY }}>{format.name}</h4>
                  </div>
                  <p className="text-[13px] text-[#5A6B82] leading-relaxed font-medium">{format.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

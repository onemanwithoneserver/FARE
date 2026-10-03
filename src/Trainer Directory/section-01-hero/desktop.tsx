import { useProfileText } from "../profileData";
import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ShieldCheck, MapPin, Briefcase, GraduationCap, Users } from "lucide-react";
import trainerImg from "../../assets/re_trainers_hero.jpg";

const NAVY = "#0B1D3A";

export default function Desktop() {
  const t = useProfileText();
  const { language } = useLanguage();
  const data = getData(language);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="w-full relative overflow-hidden font-['Outfit'] flex items-center min-h-[600px] py-20 px-10" style={{ background: NAVY }}>
      
      
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[5%] w-[500px] h-[500px] rounded-[4px]-[4px]-[4px]-full blur-[120px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[0%] w-[600px] h-[600px] rounded-[4px]-[4px]-[4px]-full blur-[130px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.2) 0%, transparent 70%)" }}
      />
      
      
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="flex items-center gap-16">
          
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-[380px] shrink-0 relative group"
          >
            
            <div className="absolute -inset-1 bg-gradient-to-br from-[#6366F1]/40 via-[#C99A2E]/40 to-[#06B6D4]/40 rounded-[4px]-[4px]-[4px] blur-lg group-hover:blur-xl transition-all duration-500 opacity-60" />
            
            <div className="relative w-full aspect-square rounded-[4px]-[4px]-[4px] overflow-hidden luxury-shadow-float">
              <img src={trainerImg} alt={data.trainerName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/80 via-transparent to-transparent opacity-80" />
            </div>
            
            {data.isVerified && (
              <div 
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 rounded-[4px]-[4px]-[4px]-full luxury-shadow-float transition-transform duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <div className="w-6 h-6 rounded-[4px]-[4px]-[4px]-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
                  <ShieldCheck size={14} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-bold tracking-wide">{t("FARE Verified")}</span>
              </div>
            )}
          </motion.div>

          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1"
          >
            <motion.h1 variants={item} className="text-[52px] leading-tight font-black text-white mb-2 tracking-[-0.02em]">
              {data.trainerName}
            </motion.h1>
            <motion.h2 variants={item} className="text-[22px] font-semibold text-[#94A3B8] mb-6">
              {data.professionalTitle}
            </motion.h2>
            
            <motion.p variants={item} className="text-[#CBD5E1] text-[16px] leading-relaxed mb-10 max-w-[650px] font-light">
              {data.positioningStatement}
            </motion.p>

            
            <motion.div variants={item} className="flex gap-4 mb-10">
              <div className="flex-1 rounded-[4px]-[4px]-[4px] p-5 relative overflow-hidden group/stat transition-all duration-300 hover:bg-white/[0.08]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6366F1] to-[#4F46E5] opacity-50 group-hover/stat:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">{t("Industry Exp.")}</div>
                  <div className="w-8 h-8 rounded-[4px]-[4px]-[4px] bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center shadow-lg group-hover/stat:scale-110 transition-transform duration-300">
                    <Briefcase size={14} className="text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="text-[32px] font-black text-white leading-none tracking-tight">{data.experience.industry}</div>
              </div>

              <div className="flex-1 rounded-[4px]-[4px]-[4px] p-5 relative overflow-hidden group/stat transition-all duration-300 hover:bg-white/[0.08]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C99A2E] to-[#B88A22] opacity-50 group-hover/stat:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">{t("Training Exp.")}</div>
                  <div className="w-8 h-8 rounded-[4px]-[4px]-[4px] bg-gradient-to-br from-[#C99A2E] to-[#B88A22] flex items-center justify-center shadow-lg group-hover/stat:scale-110 transition-transform duration-300">
                    <GraduationCap size={16} className="text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="text-[32px] font-black text-white leading-none tracking-tight">{data.experience.training}</div>
              </div>

              <div className="flex-1 rounded-[4px]-[4px]-[4px] p-5 relative overflow-hidden group/stat transition-all duration-300 hover:bg-white/[0.08]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#06B6D4] to-[#0891B2] opacity-50 group-hover/stat:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">{t("Trained")}</div>
                  <div className="w-8 h-8 rounded-[4px]-[4px]-[4px] bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center shadow-lg group-hover/stat:scale-110 transition-transform duration-300">
                    <Users size={16} className="text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="text-[32px] font-black text-white leading-none tracking-tight">{data.experience.professionalsTrained}</div>
              </div>
            </motion.div>

            
            <motion.div variants={item} className="flex items-center gap-10">
              <div className="flex items-center gap-3 text-white/90 font-medium text-[15px]">
                <div className="w-8 h-8 rounded-[4px]-[4px]-[4px]-full bg-white/10 flex items-center justify-center border border-white/5">
                  <MapPin size={16} className="text-[#F59E0B]" strokeWidth={2.5} />
                </div>
                <span>{data.location}</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

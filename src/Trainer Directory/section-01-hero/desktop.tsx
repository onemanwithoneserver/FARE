import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ShieldCheck, MapPin, Globe, Briefcase, GraduationCap, Users, ArrowRight } from "lucide-react";
import trainerImg from "../../assets/re_trainers_hero.jpg";

const NAVY = "#0B1D3A";

export default function Desktop() {
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
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="flex items-center gap-16">
          
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-[380px] shrink-0 relative"
          >
            {/* Soft glow behind the image */}
            <div className="absolute -inset-4 bg-[#C99A2E]/20 rounded-2xl blur-2xl pointer-events-none" />
            
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <img src={trainerImg} alt={data.trainerName} className="w-full h-full object-cover" />
            </div>
            
            {data.isVerified && (
              <div className="absolute bottom-6 left-6 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
                <ShieldCheck size={18} className="text-[#059669]" strokeWidth={2.5} />
                <span className="text-[#0B1D3A] text-sm font-bold tracking-wide">FARE Verified</span>
              </div>
            )}
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1"
          >
            <motion.h1 variants={item} className="text-[44px] leading-tight font-black text-white mb-2">
              {data.trainerName}
            </motion.h1>
            <motion.h2 variants={item} className="text-[22px] font-semibold text-[#C99A2E] mb-6">
              {data.professionalTitle}
            </motion.h2>
            
            <motion.p variants={item} className="text-[#94A3B8] text-[16px] leading-relaxed mb-10 max-w-[650px]">
              {data.positioningStatement}
            </motion.p>

            {/* Stats Cards */}
            <motion.div variants={item} className="flex gap-5 mb-10">
              <div className="flex-1 bg-[#132544] rounded-xl p-6 flex flex-col justify-center">
                <Briefcase size={20} className="text-[#C99A2E] mb-4" strokeWidth={2} />
                <div className="text-[28px] font-bold text-white mb-1 leading-none">{data.experience.industry}</div>
                <div className="text-[#94A3B8] text-[11px] font-bold uppercase tracking-widest mt-1">Industry Exp.</div>
              </div>
              <div className="flex-1 bg-[#132544] rounded-xl p-6 flex flex-col justify-center">
                <GraduationCap size={22} className="text-[#C99A2E] mb-4" strokeWidth={2} />
                <div className="text-[28px] font-bold text-white mb-1 leading-none">{data.experience.training}</div>
                <div className="text-[#94A3B8] text-[11px] font-bold uppercase tracking-widest mt-1">Training Exp.</div>
              </div>
              <div className="flex-1 bg-[#132544] rounded-xl p-6 flex flex-col justify-center">
                <Users size={20} className="text-[#C99A2E] mb-4" strokeWidth={2} />
                <div className="text-[28px] font-bold text-white mb-1 leading-none">{data.experience.professionalsTrained}</div>
                <div className="text-[#94A3B8] text-[11px] font-bold uppercase tracking-widest mt-1">Trained</div>
              </div>
            </motion.div>

            {/* Location & Languages */}
            <motion.div variants={item} className="flex items-center gap-10 mb-10">
              <div className="flex items-center gap-2.5 text-white/90 font-medium text-[15px]">
                <MapPin size={18} className="text-[#C99A2E]" strokeWidth={2.5} />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-[#C99A2E]" strokeWidth={2.5} />
                <div className="flex gap-2">
                  {data.languages.map((lang, idx) => (
                    <span key={idx} className="bg-white/10 text-white/90 text-[13px] px-4 py-1.5 rounded-full font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={item}>
              <button className="bg-[#C99A2E] text-[#0B1D3A] px-7 py-3.5 rounded font-bold text-[15px] hover:bg-[#D5AA45] transition-all flex items-center justify-center gap-2.5 hover:-translate-y-1 hover:shadow-[0_8px_20px_-8px_rgba(201,154,46,0.6)] active:translate-y-0">
                {data.cta} <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

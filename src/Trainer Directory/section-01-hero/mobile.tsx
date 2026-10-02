import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { MapPin, Globe2, Briefcase, GraduationCap, Users, ShieldCheck, ArrowRight } from "lucide-react";
import trainerImg from "../../assets/re_trainers_hero.jpg";

const NAVY = "#0B1D3A";
const CARD_BG = "#132544";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  
  return (
    <section className="w-full relative overflow-hidden font-['Outfit'] pt-16 pb-12 px-6" style={{ background: NAVY }}>
      <div className="absolute top-0 left-0 w-full h-full bg-[#112340]/50 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Image */}
        <div className="w-[240px] aspect-[3/4] relative mb-10">
          <div className="absolute -inset-4 bg-[#C99A2E]/20 rounded-2xl blur-xl pointer-events-none" />
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <img src={trainerImg} alt={data.trainerName} className="w-full h-full object-cover" />
          </div>
          {data.isVerified && (
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full flex items-center gap-1.5 shadow-[0_8px_16px_rgba(0,0,0,0.2)] whitespace-nowrap">
              <ShieldCheck size={16} className="text-[#059669]" strokeWidth={2.5} />
              <span className="text-[#0B1D3A] text-xs font-bold tracking-wide">FARE Verified</span>
            </div>
          )}
        </div>

        {/* Content */}
        <h1 className="text-4xl font-black text-white mb-2 leading-tight">{data.trainerName}</h1>
        <h2 className="text-xl font-semibold text-[#C99A2E] mb-6">{data.professionalTitle}</h2>
        
        <p className="text-[16px] text-[#94A3B8] leading-relaxed mb-10 max-w-[340px]">
          {data.positioningStatement}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 w-full mb-10">
          <div className="bg-[#132544] p-5 rounded-xl flex flex-col items-center">
            <Briefcase size={20} className="text-[#C99A2E] mb-3" strokeWidth={2} />
            <div className="text-[26px] font-bold text-white mb-1 leading-none">{data.experience.industry}</div>
            <div className="text-[#94A3B8] text-[10px] font-bold uppercase tracking-widest mt-1">Industry Exp.</div>
          </div>
          <div className="bg-[#132544] p-5 rounded-xl flex flex-col items-center">
            <GraduationCap size={22} className="text-[#C99A2E] mb-3" strokeWidth={2} />
            <div className="text-[26px] font-bold text-white mb-1 leading-none">{data.experience.training}</div>
            <div className="text-[#94A3B8] text-[10px] font-bold uppercase tracking-widest mt-1">Training Exp.</div>
          </div>
          <div className="col-span-2 bg-[#132544] p-5 rounded-xl flex flex-col items-center">
            <Users size={20} className="text-[#C99A2E] mb-3" strokeWidth={2} />
            <div className="text-[26px] font-bold text-white mb-1 leading-none">{data.experience.professionalsTrained}</div>
            <div className="text-[#94A3B8] text-[10px] font-bold uppercase tracking-widest mt-1">Trained</div>
          </div>
        </div>

        {/* Location & Languages */}
        <div className="flex flex-col gap-5 mb-10 w-full">
          <div className="flex items-center justify-center gap-2 text-white/90 font-medium">
            <MapPin size={18} className="text-[#C99A2E]" strokeWidth={2.5} />
            <span className="text-[15px]">{data.location}</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Globe2 size={18} className="text-[#C99A2E]" strokeWidth={2.5} />
            <div className="flex flex-wrap justify-center gap-2">
              {data.languages.map((lang, idx) => (
                <span key={idx} className="bg-white/10 text-white/90 text-[13px] px-4 py-1.5 rounded-full font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-[#C99A2E] text-[#0B1D3A] px-6 py-4 rounded-lg font-bold text-[16px] hover:bg-[#D5AA45] transition-all flex items-center justify-center gap-2 shadow-[0_8px_20px_-8px_rgba(201,154,46,0.6)]">
          {data.cta} <ArrowRight size={18} strokeWidth={2.5} />
        </button>
        
      </div>
    </section>
  );
}

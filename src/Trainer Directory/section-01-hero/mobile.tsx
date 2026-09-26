import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { MapPin, Globe2, Briefcase, GraduationCap, Users, ShieldCheck, ArrowRight } from "lucide-react";
import trainerImg from "../../assets/re_trainers_hero.jpg";

const NAVY = "#0B1D3A";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  
  return (
    <section className="w-full relative overflow-hidden font-['Outfit'] pt-16 pb-12 px-6" style={{ background: NAVY }}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#071A49] to-transparent opacity-80 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Profile Image */}
        <div className="w-[220px] aspect-square relative mb-8">
          <div className="absolute -inset-3 bg-gradient-to-br from-[#C99A2E]/20 to-transparent rounded-full blur-lg" />
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/10">
            <img src={trainerImg} alt={data.trainerName} className="w-full h-full object-cover" />
          </div>
          {data.isVerified && (
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg whitespace-nowrap">
              <ShieldCheck size={16} className="text-[#059669]" strokeWidth={2.5} />
              <span className="text-[#0F172A] text-xs font-bold tracking-wide">FARE Verified</span>
            </div>
          )}
        </div>

        {/* Content */}
        <h1 className="text-4xl font-black text-white mb-2">{data.trainerName}</h1>
        <h2 className="text-lg font-medium text-[#C99A2E] mb-5">{data.professionalTitle}</h2>
        
        <p className="text-[15px] text-white/80 leading-relaxed mb-8 max-w-[320px]">
          {data.positioningStatement}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 w-full mb-8">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col items-center">
            <Briefcase size={20} className="text-[#C99A2E] mb-2" />
            <div className="text-2xl font-bold text-white mb-0.5">{data.experience.industry}</div>
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Industry</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col items-center">
            <GraduationCap size={20} className="text-[#C99A2E] mb-2" />
            <div className="text-2xl font-bold text-white mb-0.5">{data.experience.training}</div>
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Training</div>
          </div>
          <div className="col-span-2 bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col items-center">
            <Users size={20} className="text-[#C99A2E] mb-2" />
            <div className="text-2xl font-bold text-white mb-0.5">{data.experience.professionalsTrained}</div>
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Professionals Trained</div>
          </div>
        </div>

        {/* Info tags */}
        <div className="flex flex-col gap-4 mb-8 w-full">
          <div className="flex items-center justify-center gap-2 text-white/80 font-medium">
            <MapPin size={16} className="text-[#C99A2E]" />
            <span className="text-sm">{data.location}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/80 font-medium flex-wrap">
            <Globe2 size={16} className="text-[#C99A2E]" />
            <div className="flex flex-wrap justify-center gap-2">
              {data.languages.map((lang, idx) => (
                <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-xs">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-[#C99A2E] text-[#0B1D3A] px-6 py-4 rounded font-bold text-base hover:bg-[#D5AA45] transition-all flex items-center justify-center gap-2 shadow-lg">
          {data.cta} <ArrowRight size={18} strokeWidth={2.5} />
        </button>
        
      </div>
    </section>
  );
}

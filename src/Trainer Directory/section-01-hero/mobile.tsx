import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { ChevronRight, MapPin, Globe2, Briefcase, GraduationCap, Users, ShieldCheck, ArrowRight } from "lucide-react";
import trainerImg from "../../assets/re_trainers_hero.jpg";

const NAVY = "#0B1D3A";


export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  
  return (
    <section className="w-full relative overflow-hidden font-['Outfit'] pt-16 pb-12 px-6" style={{ background: NAVY }}>
      
      
      <div className="absolute top-[-5%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-0 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none z-0 opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,154,46,0.25) 0%, transparent 70%)" }}
      />
      
      
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        
        
        <div className="w-[260px] aspect-[3/4] relative mb-12 group">
          
          <div className="absolute -inset-1 bg-gradient-to-br from-[#6366F1]/40 via-[#C99A2E]/40 to-[#06B6D4]/40 rounded blur-lg transition-all duration-500 opacity-70" />
          
          <div className="relative w-full h-full rounded overflow-hidden luxury-shadow-float border border-white/5">
            <img src={trainerImg} alt={data.trainerName} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/80 via-transparent to-transparent opacity-80" />
          </div>
          
          {data.isVerified && (
            <div 
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 rounded-full luxury-shadow-float whitespace-nowrap"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
                <ShieldCheck size={12} className="text-white" strokeWidth={3} />
              </div>
              <span className="text-white text-[13px] font-bold tracking-wide">FARE Verified</span>
            </div>
          )}
        </div>

        
        <h1 className="text-[40px] font-black text-white mb-2 leading-tight tracking-[-0.02em]">{data.trainerName}</h1>
        <h2 className="text-[18px] font-semibold text-[#94A3B8] mb-6">{data.professionalTitle}</h2>
        
        <p className="text-[15px] text-[#CBD5E1] leading-relaxed mb-10 max-w-[340px] font-medium">
          {data.positioningStatement}
        </p>

        
        <div className="grid grid-cols-2 gap-3 w-full mb-10">
          <div className="rounded p-4 relative overflow-hidden flex flex-col items-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6366F1] to-[#4F46E5] opacity-80" />
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center shadow-lg mb-3">
              <Briefcase size={14} className="text-white" strokeWidth={2.5} />
            </div>
            <div className="text-[26px] font-black text-white mb-1 leading-none tracking-tight">{data.experience.industry}</div>
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">Industry Exp.</div>
          </div>

          <div className="rounded p-4 relative overflow-hidden flex flex-col items-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C99A2E] to-[#B88A22] opacity-80" />
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#C99A2E] to-[#B88A22] flex items-center justify-center shadow-lg mb-3">
              <GraduationCap size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <div className="text-[26px] font-black text-white mb-1 leading-none tracking-tight">{data.experience.training}</div>
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">Training Exp.</div>
          </div>

          <div className="col-span-2 rounded p-4 relative overflow-hidden flex flex-col items-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#06B6D4] to-[#0891B2] opacity-80" />
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center shadow-lg mb-3">
              <Users size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <div className="text-[28px] font-black text-white mb-1 leading-none tracking-tight">{data.experience.professionalsTrained}</div>
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">Professionals Trained</div>
          </div>
        </div>

        
        <div className="flex flex-col gap-5 mb-10 w-full">
          <div className="flex items-center justify-center gap-3 text-white/90 font-medium">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
              <MapPin size={16} className="text-[#F59E0B]" strokeWidth={2.5} />
            </div>
            <span className="text-[15px]">{data.location}</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5 shrink-0">
              <Globe2 size={16} className="text-[#10B981]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {data.languages.map((lang, idx) => (
                <span key={idx} className="bg-white/5 border border-white/10 text-white/90 text-[13px] px-4 py-1.5 rounded-full font-medium shadow-sm">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        
        <button className="w-full bg-gradient-to-r from-[#C99A2E] to-[#D5AA45] text-[#0B1D3A] px-6 py-4 rounded font-black text-[16px] luxury-shadow-float transition-all flex items-center justify-center gap-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
          <span>{data.cta}</span>
          <span className={`relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em] ${""}`} style={{ fontSize: `${18}px` }}>
      <ChevronRight size={18} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
      <ArrowRight size={18} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
    </span>
        </button>
        
      </div>
    </section>
  );
}

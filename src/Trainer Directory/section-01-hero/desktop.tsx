import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { MapPin, Globe2, Briefcase, GraduationCap, Users, ShieldCheck, ArrowRight } from "lucide-react";
import trainerImg from "../../assets/re_trainers_hero.jpg"; // Placeholder image

const NAVY = "#0B1D3A";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  
  return (
    <section className="w-full relative overflow-hidden font-['Outfit'] pt-24 pb-16 px-10" style={{ background: NAVY }}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#071A49] to-transparent opacity-80 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#C99A2E]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10 flex items-center gap-16">
        
        {/* Profile Image Column */}
        <div className="w-[380px] shrink-0 relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-[#C99A2E]/30 to-transparent rounded-2xl blur-xl" />
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
            <img src={trainerImg} alt={data.trainerName} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-transparent to-transparent opacity-60" />
            
            {data.isVerified && (
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-black/20">
                <ShieldCheck size={18} className="text-[#059669]" strokeWidth={2.5} />
                <span className="text-[#0F172A] text-sm font-bold tracking-wide">FARE Verified</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-1 text-white py-4">
          <h1 className="text-5xl font-black mb-3 tracking-tight">{data.trainerName}</h1>
          <h2 className="text-2xl font-medium text-[#C99A2E] mb-6 flex items-center gap-3">
            {data.professionalTitle}
          </h2>
          
          <p className="text-[17px] text-white/80 leading-relaxed max-w-2xl mb-10">
            {data.positioningStatement}
          </p>

          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
              <Briefcase size={22} className="text-[#C99A2E] mb-3" />
              <div className="text-3xl font-bold mb-1">{data.experience.industry}</div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider">Industry Exp.</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
              <GraduationCap size={22} className="text-[#C99A2E] mb-3" />
              <div className="text-3xl font-bold mb-1">{data.experience.training}</div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider">Training Exp.</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
              <Users size={22} className="text-[#C99A2E] mb-3" />
              <div className="text-3xl font-bold mb-1">{data.experience.professionalsTrained}</div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider">Trained</div>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-10 text-white/80 font-medium">
            <div className="flex items-center gap-2.5">
              <MapPin size={18} className="text-[#C99A2E]" />
              <span>{data.location}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe2 size={18} className="text-[#C99A2E]" />
              <div className="flex gap-2">
                {data.languages.map((lang, idx) => (
                  <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button className="bg-[#C99A2E] text-[#0B1D3A] px-8 py-4 rounded font-bold text-lg hover:bg-[#D5AA45] transition-all flex items-center gap-3 shadow-[0_8px_20px_rgba(201,154,46,0.25)] hover:shadow-[0_12px_25px_rgba(201,154,46,0.35)] hover:-translate-y-0.5">
            {data.cta} <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>
        
      </div>
    </section>
  );
}

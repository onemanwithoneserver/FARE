import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { Building, Users, Clock, Target, Lightbulb, Trophy } from "lucide-react";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);
  
  return (
    <section className="w-full bg-[#f8fafc] text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-1 bg-[#C99A2E] rounded-full"></div>
          <h2 className="text-3xl font-black text-[#0B1D3A] tracking-tight">{data.title}</h2>
        </div>
        
        <div className="flex flex-col gap-8">
          {data.studies.map((study, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e2e8f0] flex">
              
              {/* Left Column - Metadata */}
              <div className="w-[300px] bg-[#0B1D3A] text-white p-8 shrink-0 flex flex-col justify-between">
                <div>
                  <div className="text-[#C99A2E] font-bold text-sm uppercase tracking-wider mb-2">{study.client}</div>
                  <h3 className="text-2xl font-bold mb-8 leading-tight">{study.title}</h3>
                  
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-3">
                      <Building size={18} className="text-[#C99A2E] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[11px] text-white/60 uppercase tracking-wider font-semibold mb-0.5">Segment</div>
                        <div className="text-sm font-medium">{study.segment}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users size={18} className="text-[#C99A2E] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[11px] text-white/60 uppercase tracking-wider font-semibold mb-0.5">Audience</div>
                        <div className="text-sm font-medium">{study.audience}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-[#C99A2E] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[11px] text-white/60 uppercase tracking-wider font-semibold mb-0.5">Duration</div>
                        <div className="text-sm font-medium">{study.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Content */}
              <div className="flex-1 p-8 grid grid-rows-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center shrink-0">
                    <Target size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1D3A] uppercase tracking-wider mb-1.5">The Challenge</h4>
                    <p className="text-[#475569] leading-relaxed text-[15px]">{study.challenge}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FEF9C3] text-[#EAB308] flex items-center justify-center shrink-0">
                    <Lightbulb size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1D3A] uppercase tracking-wider mb-1.5">The Approach</h4>
                    <p className="text-[#475569] leading-relaxed text-[15px]">{study.approach}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D1FAE5] text-[#10B981] flex items-center justify-center shrink-0">
                    <Trophy size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1D3A] uppercase tracking-wider mb-1.5">The Outcome</h4>
                    <p className="text-[#475569] leading-relaxed text-[15px] font-medium">{study.outcome}</p>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

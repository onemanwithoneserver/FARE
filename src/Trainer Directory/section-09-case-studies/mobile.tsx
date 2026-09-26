import { getData } from "./data";
import { useLanguage } from "../../context/LanguageContext";
import { Building, Users, Clock, Target, Lightbulb, Trophy } from "lucide-react";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);
  
  return (
    <section className="w-full bg-[#f8fafc] text-[#0F172A] py-12 px-5 border-b border-[#e2e8f0] font-['Outfit']">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-6 h-1 bg-[#C99A2E] rounded-full"></div>
        <h2 className="text-2xl font-black text-[#0B1D3A] tracking-tight">{data.title}</h2>
      </div>
      
      <div className="flex flex-col gap-6">
        {data.studies.map((study, idx) => (
          <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e2e8f0] flex flex-col">
            
            {/* Top - Metadata */}
            <div className="bg-[#0B1D3A] text-white p-6">
              <div className="text-[#C99A2E] font-bold text-[11px] uppercase tracking-wider mb-1.5">{study.client}</div>
              <h3 className="text-xl font-bold mb-6 leading-tight">{study.title}</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-2.5">
                  <Building size={16} className="text-[#C99A2E] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider font-semibold mb-0.5">Segment</div>
                    <div className="text-[13px] font-medium">{study.segment}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Users size={16} className="text-[#C99A2E] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider font-semibold mb-0.5">Audience</div>
                    <div className="text-[13px] font-medium">{study.audience}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock size={16} className="text-[#C99A2E] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider font-semibold mb-0.5">Duration</div>
                    <div className="text-[13px] font-medium">{study.duration}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom - Content */}
            <div className="p-6 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Target size={16} className="text-[#EF4444]" />
                  <h4 className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider">The Challenge</h4>
                </div>
                <p className="text-[#475569] leading-relaxed text-[14px] pl-6 border-l-2 border-[#EF4444]/20 ml-1.5">{study.challenge}</p>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Lightbulb size={16} className="text-[#EAB308]" />
                  <h4 className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider">The Approach</h4>
                </div>
                <p className="text-[#475569] leading-relaxed text-[14px] pl-6 border-l-2 border-[#EAB308]/20 ml-1.5">{study.approach}</p>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Trophy size={16} className="text-[#10B981]" />
                  <h4 className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-wider">The Outcome</h4>
                </div>
                <p className="text-[#475569] leading-relaxed text-[14px] font-medium pl-6 border-l-2 border-[#10B981]/20 ml-1.5">{study.outcome}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}

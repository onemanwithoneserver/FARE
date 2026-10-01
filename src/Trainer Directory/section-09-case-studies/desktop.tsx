import { profileData } from "../profileData";
import { Target, Lightbulb, Trophy } from "lucide-react";

export default function Desktop() {
  const data = profileData;
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Case Studies</h2>
        
        <div className="flex flex-col gap-8">
          {data.caseStudies.map((study, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 flex flex-col md:flex-row">
              
              <div className="w-full md:w-[280px] bg-[#f8fafc] border-r border-gray-200 p-6 shrink-0 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#C99A2E] uppercase tracking-wider mb-2">{study.client}</div>
                  <h3 className="text-lg font-bold text-[#0B1D3A] mb-6 leading-tight">{study.title}</h3>
                  
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">Segment</div>
                      <div className="text-sm font-medium text-gray-800">{study.segment}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">Audience</div>
                      <div className="text-sm font-medium text-gray-800">{study.audience}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">Duration</div>
                      <div className="text-sm font-medium text-gray-800">{study.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-6 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <Target size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1D3A] uppercase tracking-wider mb-1">The Challenge</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                    <Lightbulb size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1D3A] uppercase tracking-wider mb-1">The Approach</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{study.approach}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                    <Trophy size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1D3A] uppercase tracking-wider mb-1">The Outcome</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{study.outcome}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.metrics.map((metric, mIdx) => (
                        <span key={mIdx} className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold px-2 py-1 rounded">
                          {metric}
                        </span>
                      ))}
                    </div>
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

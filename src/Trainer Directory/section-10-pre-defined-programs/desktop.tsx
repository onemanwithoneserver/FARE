import { profileData } from "../profileData";
import { ArrowRight, Users, Clock, MonitorPlay } from "lucide-react";

export default function Desktop() {
  const data = profileData;
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Training Programs</h2>
        
        <div className="grid grid-cols-2 gap-6">
          {data.programs.map((prog, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm flex flex-col hover:border-[#0B1D3A] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C99A2E]">{prog.format}</span>
                <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded">{prog.skillLevel}</span>
              </div>
              <h3 className="text-lg font-bold text-[#0B1D3A] mb-2">{prog.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{prog.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-gray-400" />
                  <span className="text-xs font-medium text-gray-700">{prog.audience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-gray-400" />
                  <span className="text-xs font-medium text-gray-700">{prog.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MonitorPlay size={14} className="text-gray-400" />
                  <span className="text-xs font-medium text-gray-700">{prog.mode}</span>
                </div>
              </div>
              
              <div className="mb-6 border-t border-gray-100 pt-4">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-2">Key Topics</div>
                <div className="flex flex-wrap gap-2">
                  {prog.topics.map((topic, tIdx) => (
                    <span key={tIdx} className="bg-gray-50 text-gray-600 text-[11px] font-medium px-2 py-1 rounded border border-gray-200">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <a href={prog.link} className="text-sm font-bold text-[#0B1D3A] flex items-center gap-1 hover:text-[#C99A2E] transition-colors mt-auto">
                View Full Program <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

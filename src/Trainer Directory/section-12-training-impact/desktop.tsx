import { profileData } from "../profileData";

export default function Desktop() {
  const data = profileData;
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Training Impact</h2>
        
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-6">
            {data.trainingImpact.metrics.map((metric, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-gray-200 rounded-lg p-6 flex flex-col shadow-sm">
                <div className="text-4xl font-black text-[#0B1D3A] mb-2">{metric.value}</div>
                <p className="text-sm text-gray-700 font-bold mb-3">{metric.name}</p>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mt-auto pt-4 border-t border-gray-200">
                  Source: {metric.source}
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {data.trainingImpact.counts.map((count, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between shadow-sm">
                <div className="text-sm font-bold text-gray-600 uppercase tracking-widest">{count.label}</div>
                <div className="text-2xl font-black text-[#C99A2E]">{count.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

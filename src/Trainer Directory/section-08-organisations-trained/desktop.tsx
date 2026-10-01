import { profileData } from "../profileData";

export default function Desktop() {
  const data = profileData;
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Experience & Track Record</h2>
        
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-3 flex flex-col gap-4">
            {data.about.stats.slice(0, 2).map((stat, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 flex flex-col justify-center shadow-sm">
                <div className="text-xl font-bold text-[#0B1D3A] mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="col-span-9">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Selected Engagements</h3>
            
            <div className="relative border-l border-gray-200 ml-8 pl-8 flex flex-col gap-6">
              {data.experienceTimeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[54px] top-4 w-2 h-2 bg-[#0B1D3A] rounded-full ring-4 ring-white" />
                  <div className="absolute -left-[100px] top-2.5 text-sm font-bold text-[#C99A2E] w-10 text-right">
                    {item.year}
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h4 className="text-sm font-bold text-[#0B1D3A] mb-1">{item.company}</h4>
                    <p className="text-xs text-gray-500 mb-4">{item.team}</p>
                    <span className="bg-white text-[11px] font-medium text-gray-600 px-3 py-1.5 rounded border border-gray-300">
                      {item.program}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

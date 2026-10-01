import { profileData } from "../profileData";

export default function Desktop() {
  const data = profileData;
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Areas of Expertise</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {data.expertise.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-sm font-bold text-[#0B1D3A] uppercase tracking-wide mb-4">{item.category}</h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="bg-white text-xs font-medium text-gray-600 px-3 py-1.5 rounded border border-gray-300 flex items-center gap-1.5">
                    {skill.name}
                    <span className="text-[10px] uppercase text-gray-400 font-bold bg-gray-50 px-1.5 py-0.5 rounded">{skill.level}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

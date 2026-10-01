import { profileData } from "../profileData";

export default function Desktop() {
  const data = profileData;
  
  const getBorderColor = (idx: number) => {
    const colors = ["border-blue-200", "border-emerald-200", "border-purple-200", "border-amber-200"];
    return colors[idx % colors.length];
  };

  const getTextColor = (idx: number) => {
    const colors = ["text-blue-600", "text-emerald-600", "text-purple-600", "text-amber-600"];
    return colors[idx % colors.length];
  };

  const getBgColor = (idx: number) => {
    const colors = ["bg-blue-500", "bg-emerald-500", "bg-purple-500", "bg-amber-500"];
    return colors[idx % colors.length];
  };
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full grid grid-cols-2 gap-16">
        
        <div>
          <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Real Estate Segment Expertise</h2>
          <div className="grid grid-cols-2 gap-6">
            {data.segments.map((item, idx) => (
              <div key={idx} className={`bg-white rounded-lg p-6 border ${getBorderColor(idx)} shadow-sm`}>
                <h3 className={`text-xs font-bold uppercase tracking-wide mb-4 ${getTextColor(idx)}`}>{item.name}</h3>
                <ul className="flex flex-col gap-2">
                  {item.items.map((sub, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <span className={`w-1.5 h-1.5 rounded-sm ${getBgColor(idx)}`}></span>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Learner Audience</h2>
          <div className="flex flex-col gap-4">
            {data.learnerAudience.map((audience, idx) => (
              <div key={idx} className="bg-[#f8fafc] rounded-lg p-5 border border-gray-200 shadow-sm flex flex-col justify-center">
                <h3 className="text-sm font-bold text-[#0B1D3A] mb-1">{audience.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

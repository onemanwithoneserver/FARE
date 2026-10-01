import { profileData } from "../profileData";

export default function Desktop() {
  const data = profileData;
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">About the Trainer</h2>
        
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-8">
            <p className="text-gray-600 mb-8 leading-relaxed">
              {data.about.text}
            </p>
            <div className="italic text-gray-500">
              {data.about.quote}
            </div>
          </div>

          <div className="col-span-4 grid grid-cols-2 gap-4">
            {data.about.stats.map((stat, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-center shadow-sm">
                <div className="text-xl font-bold text-[#0B1D3A] mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

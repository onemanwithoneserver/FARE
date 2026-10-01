import { profileData } from "../profileData";

export default function Desktop() {
  const data = profileData;
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Learner Audience</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {data.learnerAudience.map((audience, idx) => (
            <div key={idx} className="bg-[#f8fafc] rounded-lg p-6 border border-gray-200">
              <h3 className="text-sm font-bold text-[#0B1D3A] mb-2">{audience.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

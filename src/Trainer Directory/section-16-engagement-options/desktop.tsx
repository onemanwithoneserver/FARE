import { profileData } from "../profileData";
import { ArrowRight } from "lucide-react";

export default function Desktop() {
  const data = profileData;
  
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Training Investment</h2>
        
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-6">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Pricing</h4>
            <h3 className="text-xl font-bold text-[#0B1D3A] mb-2">{data.investment.pricing.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{data.investment.pricing.subtitle}</p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-6">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Minimum Engagement</h4>
            <h3 className="text-xl font-bold text-[#0B1D3A] mb-4">{data.investment.minimumEngagement.title}</h3>
            <div className="flex gap-2">
              {data.investment.minimumEngagement.options.map((opt, idx) => (
                <span key={idx} className={`text-[11px] font-medium px-3 py-1.5 rounded border ${opt === data.investment.minimumEngagement.selected ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-white border-gray-300 text-gray-600'}`}>
                  {opt}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-6">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Pricing Basis</h4>
            <ul className="flex flex-col gap-2">
              {data.investment.pricingBasis.map((basis, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                  {basis}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 flex items-center justify-between">
          <p className="text-sm text-gray-600">{data.investment.footerNote}</p>
          <button className="bg-[#0B1D3A] text-white px-5 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-[#152c54] transition-colors">
            Request Pricing <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}

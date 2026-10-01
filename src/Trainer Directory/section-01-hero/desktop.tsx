import { profileData } from "../profileData";
import { ShieldCheck, Share2, Heart } from "lucide-react";

export default function Desktop() {
  const data = profileData;
  
  return (
    <section className="w-full bg-white font-['Outfit'] pt-8 pb-0 px-10 border-b border-[#e2e8f0]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start gap-6">
            <div className="w-[100px] h-[100px] bg-[#0B1D3A] text-white rounded-xl flex items-center justify-center text-4xl font-bold">
              {data.initials}
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold text-[#0B1D3A]">{data.name}</h1>
                {data.isVerified && (
                  <span className="flex items-center gap-1 text-xs font-semibold text-[#D97706] bg-[#FEF3C7] px-2 py-1 rounded-full border border-[#FDE68A]">
                    <ShieldCheck size={14} />
                    FARE Verified
                  </span>
                )}
              </div>
              <p className="text-gray-600 font-medium mb-1">{data.title}</p>
              <p className="text-sm text-gray-500 mb-4 max-w-[600px] leading-relaxed">{data.positioningStatement}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                {data.badges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="text-gray-400">
                      {badge.icon === 'industry' && <i className="fa-solid fa-briefcase"></i>}
                      {badge.icon === 'training' && <i className="fa-solid fa-graduation-cap"></i>}
                      {badge.icon === 'users' && <i className="fa-solid fa-users"></i>}
                      {badge.icon === 'location' && <i className="fa-solid fa-location-dot"></i>}
                      {badge.icon === 'language' && <i className="fa-solid fa-language"></i>}
                    </span>
                    {badge.text}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-medium border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  {data.status.label}
                </span>
                <span className="text-gray-500">{data.status.notice}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-end">
            <button className="w-48 bg-[#0B1D3A] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#152c54] transition-colors shadow-sm text-sm">
              Request This Trainer
            </button>
            <button className="w-48 bg-white text-[#0B1D3A] px-6 py-2.5 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm text-sm flex items-center justify-center gap-2">
              <Heart size={16} /> Shortlist
            </button>
            <button className="text-gray-500 hover:text-[#0B1D3A] text-sm flex items-center gap-2 mt-2 transition-colors">
              <Share2 size={14} /> Share Profile
            </button>
          </div>
        </div>

        <div className="flex items-center gap-8 text-sm font-semibold text-gray-500">
          {["Overview", "Expertise", "RE Segments", "Programs", "Methodology", "Experience", "Delivery", "Pricing"].map((tab, idx) => (
            <div key={idx} className={`pb-4 cursor-pointer relative ${idx === 0 ? 'text-[#0B1D3A]' : 'hover:text-[#0B1D3A]'}`}>
              {tab}
              {idx === 0 && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C99A2E] rounded-t-sm" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

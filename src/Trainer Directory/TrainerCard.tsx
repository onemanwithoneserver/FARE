import React from "react";
import type { Trainer } from "./listing_data";
import { ShieldCheck, MapPin, Globe, ArrowRight } from "lucide-react";

interface TrainerCardProps {
  trainer: Trainer;
  onViewProfile: () => void;
}

export default function TrainerCard({ trainer, onViewProfile }: TrainerCardProps) {
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").substring(0, 2);
  };

  const Pill = ({ children, outline = false }: { children: React.ReactNode, outline?: boolean }) => (
    <div className={`text-[11px] font-medium px-2 py-0.5 rounded ${outline ? 'border border-[#cbd5e1] text-[#475569]' : 'bg-[#f1f5f9] text-[#334155]'}`}>
      {children}
    </div>
  );

  return (
    <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(11,29,58,0.06)] transition-all duration-300 flex flex-col h-full font-['Outfit'] group">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center font-bold text-lg shrink-0">
            {getInitials(trainer.name)}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-[17px] font-bold text-[#0B1D3A] leading-tight">{trainer.name}</h3>
              {trainer.verified && (
                <div className="flex items-center gap-1 bg-[#FEF3C7] text-[#B45309] text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                  <ShieldCheck size={10} strokeWidth={3} />
                  <span>Verified</span>
                </div>
              )}
            </div>
            <p className="text-[12.5px] text-[#475569] leading-tight font-medium max-w-[200px]">{trainer.title}</p>
          </div>
        </div>
        <button className="text-[11px] font-semibold text-[#94a3b8] hover:text-[#0B1D3A] transition-colors bg-[#f8fafc] hover:bg-[#f1f5f9] px-2 py-1 rounded border border-[#e2e8f0]">
          + Shortlist
        </button>
      </div>

      {/* Experience Stats */}
      <div className="flex items-center gap-4 text-[12px] font-medium text-[#64748b] mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C99A2E]"></div>
          <span>{trainer.industryExperience} Years Industry</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#34D399]"></div>
          <span>{trainer.trainingExperience} Years training</span>
        </div>
      </div>

      {/* Positioning Statement */}
      <p className="text-[13px] text-[#334155] leading-relaxed mb-5 italic border-l-2 border-[#e2e8f0] pl-3">
        "{trainer.positioning}"
      </p>

      {/* Expertise & Segments */}
      <div className="flex flex-col gap-3 mb-5">
        <div>
          <div className="text-[9px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1.5">Expertise</div>
          <div className="flex flex-wrap gap-1.5">
            {trainer.expertise.map(e => <Pill key={e} outline>{e}</Pill>)}
          </div>
        </div>
        <div>
          <div className="text-[9px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1.5">RE Segment</div>
          <div className="flex flex-wrap gap-1.5">
            {trainer.segments.map(e => (
              <div key={e} className="text-[11px] font-medium px-2 py-0.5 rounded border border-[#34D399]/30 bg-[#34D399]/10 text-[#059669]">
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Format & Delivery */}
      <div className="grid grid-cols-2 gap-4 mb-5 border-t border-[#f1f5f9] pt-4">
        <div>
          <div className="text-[9px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1.5">Format</div>
          <div className="flex flex-wrap gap-1.5">
            {trainer.formats.map(e => <Pill key={e}>{e}</Pill>)}
          </div>
        </div>
        <div>
          <div className="text-[9px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1.5">Delivery</div>
          <div className="flex flex-wrap gap-1.5">
            {trainer.delivery.map(e => (
              <div key={e} className="text-[11px] font-medium px-2 py-0.5 rounded border border-[#818CF8]/30 bg-[#818CF8]/10 text-[#4F46E5]">
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location & Languages */}
      <div className="grid grid-cols-2 gap-4 mb-5 text-[12px] text-[#64748b]">
        <div className="flex items-start gap-1.5">
          <MapPin size={14} className="mt-0.5 shrink-0" />
          <span className="leading-tight">{trainer.location}</span>
        </div>
        <div className="flex items-start gap-1.5">
          <Globe size={14} className="mt-0.5 shrink-0" />
          <span className="leading-tight">{trainer.languages.join(" · ")}</span>
        </div>
      </div>

      {/* Spacer to push footer down */}
      <div className="flex-1"></div>

      {/* Footer / CTA */}
      <div className="border-t border-[#e2e8f0] pt-4 mt-2">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[13px] font-bold text-[#0B1D3A]">{trainer.pricing}</div>
          <div className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
            trainer.availability === 'Available' ? 'bg-[#D1FAE5] text-[#059669]' : 
            trainer.availability === 'Limited Availability' ? 'bg-[#FEF3C7] text-[#B45309]' : 'bg-[#F1F5F9] text-[#64748b]'
          }`}>
            {trainer.availability}
          </div>
        </div>
        
        <div className="flex gap-3">
          <button onClick={onViewProfile} className="flex-1 border border-[#0B1D3A] text-[#0B1D3A] hover:bg-[#F8FAFD] font-semibold text-[13px] py-2.5 rounded transition-colors flex items-center justify-center gap-1.5">
            View Profile <ArrowRight size={14} />
          </button>
          <button className="flex-1 bg-[#0B1D3A] text-white hover:bg-[#102B63] font-semibold text-[13px] py-2.5 rounded transition-colors shadow-sm">
            Request Trainer
          </button>
        </div>
      </div>

    </div>
  );
}

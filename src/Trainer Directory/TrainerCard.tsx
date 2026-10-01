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

  return (
    <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full font-['Outfit']">
      
      {/* Header (Image, Name, Title) */}
      <div className="flex gap-4 items-start mb-6 border-b border-gray-100 pb-5">
        {trainer.image ? (
          <img src={trainer.image} alt={trainer.name} className="w-16 h-16 rounded-xl object-cover shrink-0 bg-gray-100" />
        ) : (
          <div className="w-16 h-16 rounded-xl bg-[#0B1D3A] text-white flex items-center justify-center font-bold text-xl shrink-0">
            {getInitials(trainer.name)}
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className="text-lg font-bold text-[#0B1D3A] leading-tight">{trainer.name}</h3>
            {trainer.verified && (
              <div className="flex items-center gap-1 bg-[#FEF3C7] text-[#B45309] text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                <ShieldCheck size={10} strokeWidth={3} />
                <span>Verified</span>
              </div>
            )}
          </div>
          <p className="text-sm text-[#475569] leading-tight font-medium mb-3">{trainer.title}</p>
          <div className="inline-block bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-md">
            {trainer.pricing}
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="flex flex-col gap-4 flex-1">
        
        {/* RE Segment */}
        <div>
          <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest mb-2">RE Segment</div>
          <div className="flex flex-wrap gap-2">
            {trainer.segments.map(e => (
              <div key={e} className="text-xs font-medium px-2.5 py-1 rounded bg-[#f8fafc] border border-gray-200 text-gray-700">
                {e}
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Modes */}
        <div>
          <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest mb-2">Delivery Mode</div>
          <div className="flex flex-wrap gap-2">
            {trainer.delivery.map(e => (
              <div key={e} className="text-xs font-medium px-2.5 py-1 rounded bg-blue-50 border border-blue-100 text-blue-700">
                {e}
              </div>
            ))}
          </div>
        </div>

        {/* Location & Languages */}
        <div className="grid grid-cols-2 gap-4 mt-auto pt-4 text-sm text-[#64748b]">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#C99A2E]" />
            <span className="font-medium truncate">{trainer.location.split(',')[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-[#C99A2E]" />
            <span className="font-medium truncate">{trainer.languages.slice(0,2).join(", ")}</span>
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="border-t border-[#e2e8f0] pt-5 mt-5">
        <div className="flex gap-3">
          <button onClick={onViewProfile} className="flex-1 border border-[#0B1D3A] text-[#0B1D3A] hover:bg-[#F8FAFD] font-semibold text-[13px] py-2.5 rounded transition-colors flex items-center justify-center gap-1.5">
            View Profile <ArrowRight size={14} />
          </button>
          <button className="flex-1 bg-[#0B1D3A] text-white hover:bg-[#102B63] font-semibold text-[13px] py-2.5 rounded transition-colors shadow-sm">
            Request
          </button>
        </div>
      </div>

    </div>
  );
}

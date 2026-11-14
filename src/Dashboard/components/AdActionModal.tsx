import { useState } from "react";
import { X, CheckCircle2, Send, ShieldCheck } from "lucide-react";

export interface AdActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  actionType: "apply" | "join";
  mandateTitle?: string;
}

export default function AdActionModal({
  isOpen,
  onClose,
  actionType,
  mandateTitle = "FARE Partner Network & Career Opportunities",
}: AdActionModalProps) {
  const [name, setName] = useState("K. Venkatesh");
  const [phone, setPhone] = useState("+91 98480 12345");
  const [corridor, setCorridor] = useState("Medchal - Shamirpet Corridor");
  const [reraId, setReraId] = useState("A02400018942");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Auto close after showing success
    }, 2000);
  };

  const isApply = actionType === "apply";

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-[12px] border border-[#E2E8F0] shadow-[0_24px_60px_rgba(11,29,58,0.25)] max-w-lg w-full p-6 flex flex-col gap-5 animate-in fade-in zoom-in-95 relative max-h-[90vh] overflow-y-auto">
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#0B1D3A] p-1 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 flex flex-col items-center justify-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-black text-[#0B1D3A]">
              {isApply ? "Application Submitted Successfully!" : "Welcome to the Partner Network!"}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Your registration for <span className="font-bold text-[#0B1D3A]">{mandateTitle}</span> has been confirmed. Our team will contact you shortly with next steps.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2 rounded-[8px] bg-[#0B1D3A] text-white text-xs font-bold hover:bg-[#1A3463] transition-colors"
            >
              Back to Courses
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-[4px] bg-[#FFFDF5] text-[#A16207] border border-[#FDE68A]">
                  SPONSORED
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-[4px]">
                  Priority Placement
                </span>
              </div>
              <h2 className="text-lg font-black text-[#0B1D3A] tracking-tight leading-snug">
                {isApply ? "Apply for Role / Program" : "Join Partner Network"}
              </h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {mandateTitle}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#0B1D3A] mb-1">
                  Broker / Agent Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full text-xs bg-[#F8FAFD] border border-[#CBD5E1] rounded-[8px] px-3 py-2 text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E] focus:bg-white transition-all font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#0B1D3A] mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full text-xs bg-[#F8FAFD] border border-[#CBD5E1] rounded-[8px] px-3 py-2 text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E] focus:bg-white transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#0B1D3A] mb-1">
                    TG-RERA Registration ID
                  </label>
                  <input
                    type="text"
                    value={reraId}
                    onChange={(e) => setReraId(e.target.value)}
                    className="w-full text-xs bg-[#F8FAFD] border border-[#CBD5E1] rounded-[8px] px-3 py-2 text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E] focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#0B1D3A] mb-1">
                  Preferred Corridors & Plot Sizes
                </label>
                <select
                  value={corridor}
                  onChange={(e) => setCorridor(e.target.value)}
                  className="w-full text-xs bg-[#F8FAFD] border border-[#CBD5E1] rounded-[8px] px-3 py-2 text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E] focus:bg-white transition-all font-medium cursor-pointer"
                >
                  <option value="Medchal - Shamirpet Corridor">Medchal & Shamirpet Corridors (Open Plots 150-500 Sq Yds)</option>
                  <option value="ORR North Corridor">ORR Exit 6 to 9 (Gundlapochampally & Kandlakoya)</option>
                  <option value="Pharma City & South Corridor">Pharma City & Srisailam Highway Corridors</option>
                  <option value="Mokila - Shankarpally Corridor">Mokila, Shankarpally & Western Residential Plots</option>
                </select>
              </div>

              {/* Verified Perks Banner */}
              <div className="bg-[#FEF9EE] border border-[#FDE68A] rounded-[8px] p-3 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C99A2E] shrink-0 mt-0.5" />
                <div className="text-[11px] text-[#A16207] leading-relaxed">
                  <span className="font-bold">Verified Partner Benefits:</span> Priority allocation and direct partner support desk.
                </div>
              </div>

              {/* Form Action Controls */}
              <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[#E2E8F0] mt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-[8px] border border-[#CBD5E1] text-xs font-semibold text-[#0B1D3A] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="relative overflow-hidden group/btn px-5 py-2 rounded-[8px] text-white text-xs font-bold flex items-center gap-2 shadow-[0_8px_18px_-8px_rgba(201,154,46,0.55)] transition-all cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
                >
                  <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
                  <Send className="w-3.5 h-3.5 relative" />
                  <span className="relative">
                    {isApply ? "Submit Application" : "Complete Registration"}
                  </span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

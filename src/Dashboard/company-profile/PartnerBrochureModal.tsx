import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  FileText,
  Download,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Sparkles,
  ExternalLink,
  Percent,
  Clock,
  Award,
} from "lucide-react";

export interface PartnerBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName?: string;
  onApplyCode?: () => void;
}

export default function PartnerBrochureModal({
  isOpen,
  onClose,
  companyName = "Horizon Plots & Realty",
  onApplyCode,
}: PartnerBrochureModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-['Outfit'] select-text">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B1D3A]/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-[4px] luxury-shadow-float border border-[#0B1D3A]/[0.08] overflow-hidden flex flex-col max-h-[90vh] z-10"
          >
            {/* Modal Header */}
            <div
              className="relative text-white p-6 sm:p-7 overflow-hidden"
              style={{
                background: "linear-gradient(170deg, #0B1D3A 0%, #071A49 50%, #0D2240 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-30"
                style={{
                  background: "radial-gradient(circle, #C99A2E 0%, transparent 70%)",
                }}
              />

              <div className="flex items-start justify-between gap-4 relative z-10">
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-12 h-12 rounded-[4px] flex items-center justify-center text-white luxury-shadow-md shrink-0"
                    style={{ background: "linear-gradient(135deg, #D5AA45 0%, #C99A2E 100%)" }}
                  >
                    <FileText size={22} />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C99A2E]/20 border border-[#C99A2E]/40 text-[#D5AA45] text-[10px] font-bold uppercase tracking-[0.15em] mb-1">
                      <Sparkles size={10} />
                      <span>Official Developer Dossier</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black tracking-[-0.02em] text-white">
                      Priority Channel Partner Brochure
                    </h2>
                    <p className="text-xs text-[#CBD5E1] mt-0.5 font-light">
                      {companyName} · 2026 Mandate & Commercial Allocation Guide
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-8 h-8 rounded-[8px] bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.1] text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
              {/* Partner Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.06] flex flex-col justify-between relative overflow-hidden">
                  <div className="w-8 h-8 rounded-[4px] bg-[#0B1D3A] text-[#D5AA45] flex items-center justify-center mb-2.5 luxury-shadow-sm">
                    <Percent size={16} />
                  </div>
                  <div className="text-[18px] font-black text-[#0B1D3A] tracking-tight">3.0% Closer Bonus</div>
                  <div className="text-[11px] text-[#5A6B82] font-medium mt-0.5">
                    Accelerated tier payouts on milestone bookings
                  </div>
                </div>

                <div className="p-4 rounded-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.06] flex flex-col justify-between relative overflow-hidden">
                  <div
                    className="w-8 h-8 rounded-[4px] text-white flex items-center justify-center mb-2.5 luxury-shadow-sm"
                    style={{ background: "linear-gradient(135deg, #10B981 0%, #059669 100%)" }}
                  >
                    <Clock size={16} />
                  </div>
                  <div className="text-[18px] font-black text-[#0B1D3A] tracking-tight">48-Hour Settlement</div>
                  <div className="text-[11px] text-[#5A6B82] font-medium mt-0.5">
                    Direct automated RTGS brokerage disbursement
                  </div>
                </div>

                <div className="p-4 rounded-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.06] flex flex-col justify-between relative overflow-hidden">
                  <div
                    className="w-8 h-8 rounded-[4px] text-white flex items-center justify-center mb-2.5 luxury-shadow-sm"
                    style={{ background: "linear-gradient(135deg, #D5AA45 0%, #C99A2E 100%)" }}
                  >
                    <ShieldCheck size={16} />
                  </div>
                  <div className="text-[18px] font-black text-[#0B1D3A] tracking-tight">100% Clear-Title</div>
                  <div className="text-[11px] text-[#5A6B82] font-medium mt-0.5">
                    TG-RERA & 30-year link doc certification
                  </div>
                </div>
              </div>

              {/* Dossier Contents Overview */}
              <div className="rounded-[4px] border border-[#0B1D3A]/[0.08] p-5 bg-white/90">
                <h3 className="text-xs font-black uppercase tracking-[0.12em] text-[#0B1D3A] mb-3 flex items-center gap-2">
                  <Award size={14} className="text-[#C99A2E]" />
                  What is Included in This 28-Page Partner Kit
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#5A6B82] font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span>Master layout maps for ORR Exit 6 & 8 corridors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span>RERA sanction orders, LP numbers & survey coordinates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span>SBI & HDFC home/plot loan clearance certificate copies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span>Direct Developer Token Desk priority allotment rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span>Co-branded buyer pitch decks & walkthrough videos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span>Experience store site-visit booking & AC van protocol</span>
                  </li>
                </ul>
              </div>

              {/* Developer Verification Badge */}
              <div className="flex items-center justify-between p-3.5 rounded-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.08] text-xs">
                <div className="flex items-center gap-2.5">
                  <Building2 size={16} className="text-[#0B1D3A]" />
                  <span className="font-bold text-[#0B1D3A]">
                    Master RERA: <span className="font-mono text-[#C99A2E]">TG/RERA/2022/HZ-8821</span>
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#059669] bg-[#10B981]/[0.08] border border-[#10B981]/20 px-2.5 py-0.5 rounded-[4px]">
                  FARE Verified
                </span>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-6 bg-[#F8FAFD] border-t border-[#0B1D3A]/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-[8px] border border-[#0B1D3A]/[0.08] hover:bg-white text-xs font-bold text-[#7B8DAA] hover:text-[#0B1D3A] transition-colors cursor-pointer"
              >
                Close
              </button>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={downloading}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-[8px] bg-white border border-[#0B1D3A]/20 hover:border-[#0B1D3A] text-[#0B1D3A] hover:bg-[#0B1D3A] hover:text-white text-xs font-bold flex items-center justify-center gap-2 luxury-shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <Download size={14} className={downloading ? "animate-bounce" : ""} />
                  <span>
                    {downloading
                      ? "Generating Dossier..."
                      : downloaded
                      ? "Downloaded (24.2 MB) ✓"
                      : "Download PDF Brochure"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onApplyCode) {
                      onApplyCode();
                    }
                  }}
                  className="flex-1 sm:flex-initial relative overflow-hidden group/btn px-5 py-2.5 rounded-[8px] text-white text-xs font-bold flex items-center justify-center gap-2 luxury-shadow-float hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #D5AA45 0%, #C99A2E 100%)" }}
                >
                  <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
                  <span className="relative">Request Partner Code</span>
                  <ExternalLink size={13} className="relative" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import { ChevronRight, ArrowRight } from "lucide-react";

interface EnrollButtonProps {
  free: boolean;
  title: string;
  className?: string;
}

/** Matches the "For Learners" start-learning CTA: green for free, gold + navy text for paid. */
export default function EnrollButton({ free, title, className = "" }: EnrollButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Enroll in ${title}`}
      className={`group/btn inline-flex items-center justify-center gap-1 rounded-[8px] px-4 py-2 text-[12.5px] font-bold shadow-[0_8px_18px_-8px_rgba(11,29,58,0.55)] transition-all duration-300 hover:shadow-[0_12px_24px_-8px_rgba(11,29,58,0.6)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 ${
        free ? "bg-[#22C55E] text-white hover:bg-[#16A34A]" : "text-white"
      } ${className}`}
      style={free ? undefined : { background: "linear-gradient(135deg, #0B1D3A 0%, #1A3463 100%)" }}
    >
      <span>{free ? "Start Free" : "Enroll"}</span>
      <span className="relative inline-flex h-[14px] w-[14px] shrink-0 items-center justify-center">
        <ChevronRight size={14} strokeWidth={2.6} className="absolute inset-0 translate-x-0 opacity-100 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:opacity-0" />
        <ArrowRight size={14} strokeWidth={2.6} className="absolute inset-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:opacity-100" />
      </span>
    </button>
  );
}

import { motion } from "motion/react";
import { Clock, PlayCircle, Globe } from "lucide-react";
import EnrollButton from "./EnrollButton";
import { formatPrice, discountPct, type Course } from "./data";

const badgeStyle: Record<string, string> = {
  Bestseller: "bg-[#C99A2E] text-[#0B1D3A]",
  New: "bg-[#22C55E] text-white",
  "Top Rated": "bg-[#0B1D3A] text-white",
};


export default function CourseCard({ c, compact = false }: { c: Course; compact?: boolean }) {
  const Icon = c.icon;
  const off = discountPct(c);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#E2E8F0] bg-white shadow-[0_4px_16px_rgba(11,29,58,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C99A2E]/50 hover:shadow-[0_18px_40px_rgba(11,29,58,0.14)]"
    >
      <div className={`relative ${compact ? "h-[130px]" : "h-[160px]"} overflow-hidden bg-gradient-to-br ${c.gradient}`}>
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-125" />
        <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-125" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-[8px] border border-white/30 bg-white/15 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
            <Icon size={32} className="text-white" strokeWidth={1.8} />
          </div>
        </div>
        <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
        {c.badge && <span className={`absolute left-3 top-3 rounded-[4px] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] shadow ${badgeStyle[c.badge]}`}>{c.badge}</span>}
        {off > 0 && <span className="absolute right-3 top-3 rounded-[4px] bg-white px-2 py-1 text-[11px] font-bold text-[#0B1D3A] shadow">{off}% OFF</span>}
      </div>

      <div className="flex flex-grow flex-col p-4">
        <span className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C99A2E]">{c.category}</span>
        <h3 className="mb-1 line-clamp-2 min-h-[42px] text-[15.5px] font-bold leading-snug text-[#0B1D3A]">{c.title}</h3>
        <p className="mb-2 text-[12.5px] font-medium text-[#64748B]">{c.instructor}</p>

        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] font-medium text-[#475569]">
          <span className="flex items-center gap-1"><Clock size={12} />{c.hours}h</span>
          <span className="flex items-center gap-1"><PlayCircle size={12} />{c.lessons} lessons</span>
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          <span className="rounded-[4px] bg-[#F0F4FF] px-2.5 py-1 text-[11px] font-semibold text-[#0B1D3A]">{c.level}</span>
          <span className="flex items-center gap-1 rounded-[4px] bg-[#F0F4FF] px-2.5 py-1 text-[11px] font-semibold text-[#0B1D3A]"><Globe size={10} />{c.language}</span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#E2E8F0] pt-4">
          <div className="flex items-baseline gap-2">
            <span className={`text-[20px] font-black ${c.price === 0 ? "text-[#16A34A]" : "text-[#0B1D3A]"}`}>{formatPrice(c.price)}</span>
            {c.price > 0 && <span className="text-[12.5px] font-medium text-[#94A3B8] line-through">{formatPrice(c.originalPrice)}</span>}
          </div>
          <EnrollButton free={c.price === 0} title={c.title} />
        </div>
      </div>
    </motion.article>
  );
}

import { useState } from "react";
import { motion } from "motion/react";
import { Search, Clock, PlayCircle, SlidersHorizontal, Sparkles, ArrowRight, SearchX, X } from "lucide-react";
import heroImg from "../../assets/courses_hero.jpg";
import Dropdown from "../../Components/Dropdown";
import CategoryMultiSelect from "./CategoryMultiSelect";
import {
  heroData, categories, levels, priceFilters, sortOptions,
  formatPrice, discountPct, useCourseFilters, type Course, type SortKey,
} from "./data";

const NAVY = "#0B1D3A";

const badgeStyle: Record<string, string> = {
  Bestseller: "bg-[#C99A2E] text-white",
  New: "bg-[#2563EB] text-white",
  "Top Rated": "bg-[#0B1D3A] text-white",
};

function Card({ c }: { c: Course }) {
  const Icon = c.icon;
  const off = discountPct(c);
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[4px] border border-[#E2E8F0]/80 shadow-[0_4px_16px_rgba(11,29,58,0.04)] overflow-hidden"
    >
      <div className={`relative h-[110px] bg-gradient-to-br ${c.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10" />
        <Icon size={42} className="text-white/95" strokeWidth={1.6} />
        {c.badge && <span className={`absolute top-2.5 left-2.5 text-[9px] font-bold tracking-[0.12em] uppercase px-2 py-1 rounded-[4px] ${badgeStyle[c.badge]}`}>{c.badge}</span>}
        {off > 0 && <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-1 rounded-[4px] bg-white text-[#0B1D3A]">{off}% OFF</span>}
      </div>
      <div className="p-4">
        <span className="text-[#C99A2E] text-[10px] font-bold tracking-[0.16em] uppercase">{c.category}</span>
        <h3 className="text-[15px] font-bold text-[#0B1D3A] leading-snug mt-1 mb-1">{c.title}</h3>
        <p className="text-[12px] text-[#64748B] font-medium mb-2">by {c.instructor}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] text-[#475569] font-medium mb-3">
          <span className="flex items-center gap-1"><Clock size={12} />{c.hours}h</span>
          <span className="flex items-center gap-1"><PlayCircle size={12} />{c.lessons} lessons</span>
        </div>
        <span className="inline-block text-[10.5px] font-semibold px-2.5 py-1 rounded-full bg-[#F0F4FF] text-[#0B1D3A] mb-3">{c.level} · {c.language}</span>
        <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className={`text-[18px] font-black ${c.price === 0 ? "text-[#0F766E]" : "text-[#0B1D3A]"}`}>{formatPrice(c.price)}</span>
            {c.price > 0 && <span className="text-[12px] text-[#94A3B8] line-through">{formatPrice(c.originalPrice)}</span>}
          </div>
          <button className="text-white text-[13px] font-semibold px-4 py-2.5 rounded-[8px] flex items-center gap-1.5 active:scale-[0.98] transition-all duration-300" style={{ background: NAVY, boxShadow: "0 4px 16px rgba(11,29,58,0.2)" }} aria-label={`Enroll in ${c.title}`}>
            {c.price === 0 ? "Start Free" : "Enroll"} <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Mobile() {
  const f = useCourseFilters();
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-full font-['Outfit'] overflow-x-hidden">
      {/* Hero */}
      <section className="relative px-5 pt-6 pb-8 overflow-hidden" style={{ background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 30%, #F0F4FF 60%, #E6EEFF 100%)" }}>
        <div className="absolute -top-20 -right-20 w-[260px] h-[260px] rounded-full bg-[#C5D9FF]/50 blur-[80px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C99A2E]/25 bg-[#C99A2E]/[0.06] mb-4">
            <Sparkles size={11} className="text-[#C99A2E]" strokeWidth={2.5} />
            <span className="font-bold text-[10px] tracking-[0.18em] uppercase text-[#C99A2E]">{heroData.badge}</span>
          </div>
          <h1 className="text-[2.1rem] font-black tracking-tight leading-[1.1] mb-3" style={{ color: NAVY }}>{heroData.headline}</h1>
          <p className="text-[14.5px] font-medium text-[#475569] leading-relaxed mb-5">{heroData.description}</p>
          <form role="search" onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white rounded-[8px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(11,29,58,0.08)] p-1.5 mb-5">
            <Search size={17} className="text-[#94A3B8] mx-2.5 shrink-0" />
            <input aria-label="Search courses" value={f.query} onChange={(e) => f.setQuery(e.target.value)} placeholder="Search courses..." className="flex-1 min-w-0 bg-transparent outline-none text-[14px] text-[#0B1D3A] font-medium placeholder:text-[#94A3B8]" />
          </form>
          <div className="flex items-center justify-between mb-6">
            {heroData.stats.map((s) => (
              <div key={s.label}>
                <div className="text-[1.3rem] font-black" style={{ color: NAVY }}>{s.value}</div>
                <div className="text-[11px] font-semibold text-[#64748B]">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="relative h-[240px] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[8px] rounded-bl-[8px] overflow-hidden luxury-shadow-float border border-white/80">
          <img src={heroImg} alt="Two real estate professionals learning together on a laptop" className="w-full h-full object-cover object-[center_40%]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/15 via-transparent to-transparent" />
        </div>
      </section>

      {/* Listing */}
      <section id="course-listing" className="bg-gradient-to-br from-[#F8FAFD] via-[#F0F4FF] to-[#FAFBFF] py-10">
        <div className="px-5 text-center mb-6">
          <span className="text-[#C99A2E] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Explore</span>
          <h2 className="text-[#0B1D3A] text-[1.9rem] font-black tracking-tight leading-tight">Find Your Next Course</h2>
          <div className="w-14 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mt-3 rounded-full" />
        </div>

        <div className="mb-6">
        <div className="px-5 flex items-center justify-between mb-4">
          <button onClick={() => setShowFilters((v) => !v)} aria-expanded={showFilters} className="text-[13px] font-semibold px-4 py-2.5 rounded-[8px] border border-[#0B1D3A]/15 bg-white text-[#0B1D3A] flex items-center gap-2">
            {showFilters ? <X size={14} /> : <SlidersHorizontal size={14} />}Filters & Sort
          </button>
        </div>

        {showFilters && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mx-5 mb-5 border-t border-[#DCE5F2] pt-4">
            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
              <div className="col-span-2">
                <span className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[#64748B] mb-2">Category</span>
                <CategoryMultiSelect
                  size="sm"
                  options={categories}
                  selected={f.selectedCategories}
                  onToggle={f.toggleCategory}
                />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[#64748B] mb-2">Level</span>
                <Dropdown className="w-full max-w-[155px]" size="sm" value={f.level} onChange={(value) => f.setLevel(value as typeof f.level)} options={levels.map((level) => ({ value: level, label: level }))} />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[#64748B] mb-2">Price</span>
                <Dropdown className="w-full max-w-[155px]" size="sm" value={f.price} onChange={(value) => f.setPrice(value as typeof f.price)} options={priceFilters.map((price) => ({ value: price, label: price }))} />
              </div>
              <div className="col-span-2 justify-self-end w-[155px] max-w-full">
                <span className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[#64748B] mb-2">Sort by</span>
                <Dropdown className="w-full max-w-[155px]" size="sm" value={f.sort} onChange={(value) => f.setSort(value as SortKey)} options={sortOptions.map(({ value, label }) => ({ value, label }))} />
              </div>
            </div>
          </motion.div>
        )}
        </div>

        <div className="px-5">
          {f.results.length ? (
            <div className="flex flex-col gap-5">{f.results.map((c) => <Card key={c.id} c={c} />)}</div>
          ) : (
            <div className="bg-white rounded-[4px] border border-[#E2E8F0] py-12 px-5 flex flex-col items-center text-center">
              <SearchX size={36} className="text-[#94A3B8] mb-3" />
              <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-1">No courses match</h3>
              <p className="text-[13px] text-[#64748B] mb-4">Try a different keyword or clear the filters.</p>
              <button onClick={f.reset} className="text-white text-[14px] font-semibold px-6 py-3 rounded-[8px]" style={{ background: NAVY }}>Clear filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

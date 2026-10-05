import { motion } from "motion/react";
import { Search, Star, Clock, Users, PlayCircle, SlidersHorizontal, Sparkles, ArrowRight, Tag, RotateCcw, SearchX } from "lucide-react";
import heroImg from "../../assets/courses_hero.jpg";
import {
  heroData, categories, levels, priceFilters, ratingFilters, sortOptions, promos,
  formatPrice, discountPct, formatCount, useCourseFilters, type Course, type SortKey,
} from "./data";

const NAVY = "#0B1D3A";

const badgeStyle: Record<string, string> = {
  Bestseller: "bg-[#C99A2E] text-white",
  New: "bg-[#2563EB] text-white",
  "Top Rated": "bg-[#0B1D3A] text-white",
};

function Stars({ value }: { value: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={13} strokeWidth={0} className={i <= Math.round(value) ? "fill-[#C99A2E]" : "fill-[#E2E8F0]"} />
      ))}
    </span>
  );
}

function CourseCard({ c }: { c: Course }) {
  const Icon = c.icon;
  const off = discountPct(c);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[4px] border border-[#E2E8F0]/80 shadow-[0_4px_16px_rgba(11,29,58,0.03)] hover:luxury-shadow-float hover:-translate-y-2 transition-all duration-300 flex flex-col group overflow-hidden"
    >
      <div className={`relative h-[150px] bg-gradient-to-br ${c.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute -left-6 -bottom-10 w-28 h-28 rounded-full bg-white/10" />
        <Icon size={54} className="text-white/95 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.6} />
        {c.badge && (
          <span className={`absolute top-3 left-3 text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-[4px] ${badgeStyle[c.badge]}`}>{c.badge}</span>
        )}
        {off > 0 && (
          <span className="absolute top-3 right-3 text-[11px] font-bold px-2 py-1 rounded-[4px] bg-white text-[#0B1D3A]">{off}% OFF</span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[#C99A2E] text-[10px] font-bold tracking-[0.18em] uppercase mb-2">{c.category}</span>
        <h3 className="text-[16px] font-bold text-[#0B1D3A] leading-snug mb-1.5 line-clamp-2 min-h-[44px]">{c.title}</h3>
        <p className="text-[13px] text-[#64748B] font-medium mb-3">by {c.instructor}</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[14px] font-bold text-[#0B1D3A]">{c.rating.toFixed(1)}</span>
          <Stars value={c.rating} />
          <span className="text-[12px] text-[#64748B] font-medium">({c.reviews.toLocaleString("en-IN")})</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-[#475569] font-medium mb-4">
          <span className="flex items-center gap-1"><Clock size={13} />{c.hours}h</span>
          <span className="flex items-center gap-1"><PlayCircle size={13} />{c.lessons} lessons</span>
          <span className="flex items-center gap-1"><Users size={13} />{formatCount(c.students)}</span>
        </div>
        <span className="self-start text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F0F4FF] text-[#0B1D3A] mb-4">{c.level} · {c.language}</span>
        <div className="mt-auto pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className={`text-[20px] font-black ${c.price === 0 ? "text-[#0F766E]" : "text-[#0B1D3A]"}`}>{formatPrice(c.price)}</span>
            {c.price > 0 && <span className="text-[13px] text-[#94A3B8] line-through font-medium">{formatPrice(c.originalPrice)}</span>}
          </div>
          <button className="text-white text-[13px] font-semibold px-4 py-2.5 rounded-[8px] flex items-center gap-1.5 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 ease-out" style={{ background: NAVY, boxShadow: "0 4px 16px rgba(11,29,58,0.2)" }} aria-label={`Enroll in ${c.title}`}>
            {c.price === 0 ? "Start Free" : "Enroll"} <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`text-[13px] font-semibold px-4 py-2 rounded-full border transition-all duration-300 ${active ? "text-white border-transparent shadow-md" : "bg-white text-[#475569] border-[#E2E8F0] hover:border-[#0B1D3A]/30 hover:text-[#0B1D3A]"}`}
      style={active ? { background: NAVY } : undefined}
    >
      {children}
    </button>
  );
}

export default function Desktop() {
  const f = useCourseFilters();
  return (
    <div className="w-full font-['Outfit']">
      {/* Hero */}
      <section className="w-full relative overflow-x-clip" style={{ background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 30%, #F0F4FF 60%, #E6EEFF 100%)" }}>
        <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[5%] right-[10%] w-[700px] h-[700px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="w-full flex items-center justify-between relative z-10 pt-8 pb-12 pl-14 xl:pl-20">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="w-[48%] pr-10 shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.08] to-[#C99A2E]/[0.02] shadow-sm mb-5">
              <Sparkles size={12} className="text-[#C99A2E]" strokeWidth={2.5} />
              <span className="font-bold text-[11px] tracking-[0.18em] uppercase text-[#C99A2E] pt-0.5">{heroData.badge}</span>
            </div>
            <h1 className="text-[3rem] xl:text-[3.4rem] font-black mb-4 tracking-tight leading-[1.08]" style={{ color: NAVY }}>{heroData.headline}</h1>
            <p className="text-[16px] font-medium text-[#475569] leading-[1.65] mb-7 max-w-[520px]">{heroData.description}</p>
            <form role="search" onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white rounded-[8px] border border-[#E2E8F0] shadow-[0_8px_30px_rgba(11,29,58,0.08)] p-1.5 max-w-[520px] mb-7 focus-within:border-[#0B1D3A]/40 transition-colors">
              <Search size={18} className="text-[#94A3B8] mx-3 shrink-0" />
              <input aria-label="Search courses" value={f.query} onChange={(e) => f.setQuery(e.target.value)} placeholder="Search courses, instructors, topics..." className="flex-1 bg-transparent outline-none text-[15px] text-[#0B1D3A] font-medium placeholder:text-[#94A3B8] min-w-0" />
              <button type="submit" className="text-white text-[14px] font-semibold px-6 py-3 rounded-[8px] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300" style={{ background: NAVY }}>Search</button>
            </form>
            <div className="flex items-center gap-8">
              {heroData.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[1.6rem] font-black" style={{ color: NAVY }}>{s.value}</div>
                  <div className="text-[12px] font-semibold text-[#64748B]">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="w-[52%] xl:w-[54%] flex justify-end">
            <div className="relative w-full h-[480px] xl:h-[510px] rounded-tl-[220px] xl:rounded-tl-[260px] rounded-bl-[90px] xl:rounded-bl-[100px] overflow-hidden luxury-shadow-float border-l border-t border-b border-white/80">
              <motion.img animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} src={heroImg} alt="Two real estate professionals learning together on a laptop" className="w-full h-full object-cover object-[center_40%]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="w-full px-10 pt-14 bg-[#F8FAFD]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-6">
          <div className="col-span-2 relative overflow-hidden rounded-[4px] p-9 text-white flex items-center justify-between" style={{ background: "linear-gradient(120deg, #0B1D3A 0%, #1E3A6B 70%, #2B4F8F 100%)", boxShadow: "0 12px 40px rgba(11,29,58,0.25)" }}>
            <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-[#C99A2E]/20 blur-2xl" />
            <div className="relative z-10 max-w-[480px]">
              <span className="inline-flex items-center gap-1.5 text-[#E2C068] text-[11px] font-bold tracking-[0.2em] uppercase mb-3"><Tag size={13} />{promos.banner.tag}</span>
              <h2 className="text-[1.9rem] font-black leading-tight mb-2">{promos.banner.title}</h2>
              <p className="text-[14px] text-white/75 font-medium">{promos.banner.text}</p>
            </div>
            <button className="relative z-10 shrink-0 text-[14px] font-semibold px-7 py-3.5 rounded-[8px] bg-gradient-to-r from-[#C99A2E] to-[#E2C068] text-[#0B1D3A] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300">{promos.banner.cta}</button>
          </div>
          <div className="flex flex-col gap-6">
            {promos.cards.map((p) => (
              <div key={p.title} className="flex-1 bg-white rounded-[4px] border border-[#E2E8F0]/80 shadow-[0_4px_16px_rgba(11,29,58,0.03)] hover:luxury-shadow-float hover:-translate-y-1 transition-all duration-300 p-5">
                <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-1">{p.title}</h3>
                <p className="text-[13px] text-[#64748B] font-medium mb-2">{p.text}</p>
                <button className="text-[13px] font-bold flex items-center gap-1.5" style={{ color: NAVY }}>{p.cta} <ArrowRight size={14} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listing */}
      <section id="course-listing" className="w-full bg-gradient-to-br from-[#F8FAFD] via-[#F0F4FF] to-[#FAFBFF] py-16 px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-3 block">Explore</span>
            <h2 className="text-[#0B1D3A] text-[2.5rem] font-black tracking-tight leading-tight">Find Your Next Course</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mt-4 rounded-full" />
          </div>

          <div className="flex flex-wrap gap-2.5 justify-center mb-8" role="group" aria-label="Course categories">
            {categories.map(({ name, icon: I }) => (
              <Pill key={name} active={f.category === name} onClick={() => f.setCategory(name)}>
                <span className="inline-flex items-center gap-2"><I size={14} />{name}</span>
              </Pill>
            ))}
          </div>

          <div className="bg-white rounded-[4px] border border-[#E2E8F0]/80 shadow-[0_4px_16px_rgba(11,29,58,0.03)] p-5 mb-8 flex flex-wrap items-end gap-5">
            <div className="flex items-center gap-2 text-[#0B1D3A] font-bold text-[14px] self-center"><SlidersHorizontal size={16} />Filters</div>
            {[
              { label: "Level", value: f.level, set: (v: string) => f.setLevel(v as typeof f.level), opts: levels.map((l) => ({ v: l, l })) },
              { label: "Price", value: f.price, set: (v: string) => f.setPrice(v as typeof f.price), opts: priceFilters.map((p) => ({ v: p, l: p })) },
              { label: "Rating", value: String(f.minRating), set: (v: string) => f.setMinRating(Number(v)), opts: ratingFilters.map((r) => ({ v: String(r), l: r === 0 ? "All" : `${r}+ stars` })) },
            ].map((s) => (
              <label key={s.label} className="flex flex-col gap-1.5 text-[11px] font-bold tracking-widest uppercase text-[#94A3B8]">
                {s.label}
                <select value={s.value} onChange={(e) => s.set(e.target.value)} className="text-[14px] normal-case tracking-normal font-semibold text-[#0B1D3A] bg-[#F8FAFD] border border-[#E2E8F0] rounded-[8px] px-3 py-2.5 min-w-[140px] outline-none focus:border-[#0B1D3A]/40 cursor-pointer">
                  {s.opts.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
                </select>
              </label>
            ))}
            <label className="flex flex-col gap-1.5 text-[11px] font-bold tracking-widest uppercase text-[#94A3B8] ml-auto">
              Sort by
              <select value={f.sort} onChange={(e) => f.setSort(e.target.value as SortKey)} className="text-[14px] normal-case tracking-normal font-semibold text-[#0B1D3A] bg-[#F8FAFD] border border-[#E2E8F0] rounded-[8px] px-3 py-2.5 min-w-[180px] outline-none focus:border-[#0B1D3A]/40 cursor-pointer">
                {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </label>
            <button onClick={f.reset} className="text-[13px] font-semibold px-4 py-2.5 rounded-[8px] border border-[#0B1D3A]/15 bg-white text-[#0B1D3A] hover:bg-[#F8FAFD] flex items-center gap-2 transition-all duration-300"><RotateCcw size={14} />Reset</button>
          </div>

          <p className="text-[14px] text-[#64748B] font-medium mb-5" aria-live="polite"><strong className="text-[#0B1D3A]">{f.results.length}</strong> courses found</p>

          {f.results.length ? (
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-6">
              {f.results.map((c) => <CourseCard key={c.id} c={c} />)}
            </div>
          ) : (
            <div className="bg-white rounded-[4px] border border-[#E2E8F0] py-16 flex flex-col items-center text-center">
              <SearchX size={40} className="text-[#94A3B8] mb-4" />
              <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-1">No courses match your filters</h3>
              <p className="text-[14px] text-[#64748B] mb-5">Try a different keyword or clear the filters.</p>
              <button onClick={f.reset} className="text-white text-[14px] font-semibold px-6 py-3 rounded-[8px]" style={{ background: NAVY }}>Clear filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

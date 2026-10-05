import { motion } from "motion/react";
import { Search, Clock, PlayCircle, Sparkles, ArrowRight, SearchX } from "lucide-react";
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
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-[#475569] font-medium mb-4">
          <span className="flex items-center gap-1"><Clock size={13} />{c.hours}h</span>
          <span className="flex items-center gap-1"><PlayCircle size={13} />{c.lessons} lessons</span>
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

      {/* Listing */}
      <section id="course-listing" className="w-full bg-gradient-to-br from-[#F8FAFD] via-[#F0F4FF] to-[#FAFBFF] py-16 px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-3 block">Explore</span>
            <h2 className="text-[#0B1D3A] text-[2.5rem] font-black tracking-tight leading-tight">Find Your Next Course</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mt-4 rounded-full" />
          </div>

          <div className="mb-8">
          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-wrap items-end gap-4">
              <div className="w-[220px] max-w-full">
                <span className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#64748B] mb-2">Category</span>
                <CategoryMultiSelect
                  className="max-w-[220px]"
                  options={categories}
                  selected={f.selectedCategories}
                  onToggle={f.toggleCategory}
                />
              </div>
              <div className="w-[220px] max-w-full">
                <span className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#64748B] mb-2">Level</span>
                <Dropdown
                  className="w-full max-w-[220px]"
                  value={f.level}
                  onChange={(value) => f.setLevel(value as typeof f.level)}
                  options={levels.map((level) => ({ value: level, label: level }))}
                />
              </div>
              <div className="w-[220px] max-w-full">
                <span className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#64748B] mb-2">Price</span>
                <Dropdown
                  className="w-full max-w-[220px]"
                  value={f.price}
                  onChange={(value) => f.setPrice(value as typeof f.price)}
                  options={priceFilters.map((price) => ({ value: price, label: price }))}
                />
              </div>
              </div>
              <div className="w-[220px] max-w-full ml-auto">
                <span className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#64748B] mb-2">Sort by</span>
                <Dropdown
                  className="w-full max-w-[220px]"
                  value={f.sort}
                  onChange={(value) => f.setSort(value as SortKey)}
                  options={sortOptions.map(({ value, label }) => ({ value, label }))}
                />
              </div>
            </div>
          </div>
          </div>

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

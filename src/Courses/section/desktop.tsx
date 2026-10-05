import { motion, AnimatePresence } from "motion/react";
import { Search, Sparkles, ArrowRight, SearchX, Rocket, Gift, BellRing, SlidersHorizontal, RotateCcw } from "lucide-react";
import heroImg from "../../assets/courses_hero.jpg";
import CourseCard from "./CourseCard";
import FiltersPanel, { activeFilterCount } from "./FiltersPanel";
import { CountBadge } from "../../Trainer Directory/SidebarFilters/desktop";
import CategoryChips from "./CategoryChips";
import { heroData, useCourseFilters } from "./data";

const NAVY = "#0B1D3A";

export default function Desktop() {
  const f = useCourseFilters();
  return (
    <div className="w-full font-['Outfit']">
      <motion.div initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }} className="fixed right-0 top-1/2 -translate-y-1/2 z-[100]">
        <motion.div animate={{ x: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative overflow-hidden flex flex-col items-center gap-3 py-6 px-3 rounded-l-[8px] text-white border-l border-y border-white/30" style={{ background: "linear-gradient(180deg, #C99A2E, #A87A18)", boxShadow: "-10px 10px 30px rgba(11,29,58,0.3)" }}>
          <motion.span aria-hidden animate={{ y: ["-120%", "320%"] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }} className="absolute inset-x-0 h-1/4 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          <motion.div animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.5 }} className="relative"><BellRing size={18} /></motion.div>
          <span className="relative text-[12px] font-extrabold tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>Coming Soon</span>
        </motion.div>
      </motion.div>


      <section className="w-full relative overflow-x-clip" style={{ background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 30%, #F0F4FF 60%, #E6EEFF 100%)" }}>
        <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[5%] right-[10%] w-[700px] h-[700px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="w-full flex items-center justify-between relative z-10 pt-8 pb-12 pl-14 xl:pl-20">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="w-[52%] pr-8 shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[4px] border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.08] to-[#C99A2E]/[0.02] shadow-sm mb-5">
              <Sparkles size={12} className="text-[#C99A2E]" strokeWidth={2.5} />
              <span className="font-bold text-[11px] tracking-[0.18em] uppercase text-[#C99A2E] pt-0.5">{heroData.badge}</span>
            </div>
            <h1 className="text-[3rem] xl:text-[3.4rem] font-black mb-4 tracking-tight leading-[1.08]" style={{ color: NAVY }}>{heroData.headline}</h1>
            <p className="text-[16px] font-medium text-[#475569] leading-[1.65] mb-6 max-w-[600px]">{heroData.description}</p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="relative max-w-[600px] mb-7 rounded-[8px] p-[1.5px] overflow-hidden">
              <motion.div aria-hidden animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute -inset-[200%]" style={{ background: "conic-gradient(from 0deg, transparent 0 60%, #C99A2E 80%, #E2C068 90%, transparent 100%)" }} />
              <div className="relative rounded-[8px] bg-white/95 backdrop-blur-xl px-4 py-3.5 flex items-center gap-4">
                <div className="relative shrink-0">
                  <motion.span aria-hidden animate={{ scale: [1, 1.7], opacity: [0.5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }} className="absolute inset-0 rounded-full bg-[#C99A2E]" />
                  <div className="relative w-11 h-11 rounded-full flex items-center justify-center text-white" style={{ background: `linear-gradient(135deg, ${NAVY}, #1E3A6E)` }}>
                    <motion.div animate={{ y: [0, -3, 0], rotate: [0, -6, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}><Rocket size={20} /></motion.div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#C99A2E]">Coming Soon</span>
                    <motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.4, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-[#C99A2E]" />
                  </div>
                  <p className="text-[13px] font-semibold text-[#0B1D3A] leading-snug flex items-center gap-1.5"><Gift size={13} className="text-[#C99A2E] shrink-0" />Exclusive early launch offers for first learners</p>
                </div>
                <motion.button type="button" whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.96 }} className="relative overflow-hidden shrink-0 text-white text-[13px] font-bold px-4 py-3 rounded-[8px] flex items-center gap-1.5" style={{ background: `linear-gradient(135deg, ${NAVY}, #1E3A6E)`, boxShadow: "0 8px 22px rgba(11,29,58,0.3)" }}>
                  <motion.span aria-hidden animate={{ x: ["-150%", "250%"] }} transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }} className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" />
                  <span className="relative">Register for Early Launch</span>
                  <ArrowRight size={14} strokeWidth={2.5} className="relative" />
                </motion.button>
              </div>
            </motion.div>
            <form role="search" onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white rounded-[8px] border border-[#E2E8F0] shadow-[0_8px_30px_rgba(11,29,58,0.08)] p-1.5 max-w-[600px] focus-within:border-[#0B1D3A]/40 transition-colors">
              <Search size={18} className="text-[#94A3B8] mx-3 shrink-0" />
              <input aria-label="Search courses" value={f.query} onChange={(e) => f.setQuery(e.target.value)} placeholder="Search courses, instructors, topics..." className="flex-1 bg-transparent outline-none text-[15px] text-[#0B1D3A] font-medium placeholder:text-[#94A3B8] min-w-0" />
              <button type="submit" className="text-white text-[14px] font-semibold px-6 py-3 rounded-[8px] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300" style={{ background: NAVY }}>Search</button>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="w-[48%] flex justify-end">
            <div className="relative w-full h-[480px] xl:h-[510px] rounded-tl-[220px] xl:rounded-tl-[260px] rounded-bl-[90px] xl:rounded-bl-[100px] overflow-hidden luxury-shadow-float border-l border-t border-b border-white/80">
              <motion.img animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} src={heroImg} alt="Two real estate professionals learning together on a laptop" className="w-full h-full object-cover object-[center_40%]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/15 via-transparent to-transparent pointer-events-none" />

              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: [0, -6, 0] }} transition={{ opacity: { delay: 1, duration: 0.6 }, y: { delay: 1, duration: 4, repeat: Infinity, ease: "easeInOut" } }} className="absolute left-16 bottom-8 bg-white/80 backdrop-blur-xl rounded-[8px] px-4 py-3 border border-white shadow-[0_12px_30px_rgba(11,29,58,0.2)] flex items-center gap-3">
                <Gift size={18} className="text-[#C99A2E]" />
                <div>
                  <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#64748B]">Early Launch</div>
                  <div className="text-[13px] font-extrabold text-[#0B1D3A]">Special offers await</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      <section id="course-listing" className="relative w-full overflow-hidden bg-gradient-to-br from-[#F8FAFD] via-[#F0F4FF] to-[#FAFBFF] px-10 py-20">
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C99A2E]/[0.07] blur-[100px]" />
        <div className="relative mx-auto max-w-[1280px]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8 text-center">
            <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#C99A2E]">Explore</span>
            <h2 className="text-[2.5rem] font-black leading-tight tracking-tight text-[#0B1D3A]">Find Your Next Course</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-[2px] bg-gradient-to-r from-[#C99A2E] to-[#E2C068]" />
          </motion.div>

          <div className="mb-10"><CategoryChips idPrefix="desktop" selected={f.selectedCategories} onToggle={f.toggleCategory} /></div>

          <div className="flex items-start gap-8">
            <aside className="sticky top-[96px] w-[272px] shrink-0 self-start overflow-hidden rounded-[8px] border border-[#0B1D3A]/[0.07] bg-white shadow-[0_2px_6px_-2px_rgba(11,29,58,0.06),0_10px_30px_-12px_rgba(11,29,58,0.12)]">
              <div className="relative flex items-center justify-between overflow-hidden px-5 py-4" style={{ background: `linear-gradient(120deg, ${NAVY} 0%, #15315C 100%)` }}>
                <div className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-[#C99A2E]/30 blur-2xl" />
                <div className="relative flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-white/15 bg-white/10"><SlidersHorizontal size={14} strokeWidth={2.5} style={{ color: "#D5AA45" }} /></div>
                  <span className="text-[15px] font-black text-white">Filters</span>
                  {activeFilterCount(f) > 0 && <CountBadge count={activeFilterCount(f)} size={20} />}
                </div>
                {activeFilterCount(f) > 0 && (
                  <button onClick={f.reset} className="relative flex items-center gap-1.5 rounded-[8px] bg-white/10 px-2.5 py-1.5 text-[11px] font-bold text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"><RotateCcw size={12} strokeWidth={2.5} />Clear</button>
                )}
              </div>
              <div className="px-5 py-1"><FiltersPanel f={f} /></div>
            </aside>

            <div className="min-w-0 flex-1">
              {f.results.length ? (
                <motion.div layout className="grid grid-cols-2 gap-6 xl:grid-cols-3">
                  <AnimatePresence mode="popLayout">
                    {f.results.map((c) => <CourseCard key={c.id} c={c} />)}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center rounded-[8px] border border-[#E2E8F0] bg-white py-20 text-center">
                  <SearchX size={44} className="mb-4 text-[#94A3B8]" />
                  <h3 className="mb-1 text-[18px] font-bold text-[#0B1D3A]">No courses match your filters</h3>
                  <p className="mb-5 text-[14px] text-[#64748B]">Try a different keyword or clear the filters.</p>
                  <button onClick={f.reset} className="rounded-[8px] bg-[#C99A2E] px-6 py-3 text-[14px] font-bold text-[#0B1D3A] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#B8892A]">Clear filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

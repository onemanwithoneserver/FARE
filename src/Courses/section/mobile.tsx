import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Sparkles, SearchX, X, Rocket, Gift, BellRing, ArrowRight, SlidersHorizontal, RotateCcw } from "lucide-react";
import heroImg from "../../assets/courses_hero.jpg";
import CourseCard from "./CourseCard";
import { FiltersChips, activeFilterCount } from "./FiltersPanel";
import { CountBadge } from "../../Trainer Directory/SidebarFilters/desktop";
import CategoryChips from "./CategoryChips";
import { heroData, useCourseFilters } from "./data";
const NAVY = "#0B1D3A";
export default function Mobile() {
  const f = useCourseFilters();
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="w-full overflow-x-hidden font-['Outfit']">
      <section className="relative overflow-hidden px-5 pb-8 pt-6" style={{ background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFD 30%, #F0F4FF 60%, #E6EEFF 100%)" }}>
        <motion.div animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }} transition={{ duration: 7, repeat: Infinity }} className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-[#C5D9FF]/60 blur-[80px]" />
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-[4px] border border-[#C99A2E]/25 bg-[#C99A2E]/[0.06] px-3.5 py-1.5">
            <Sparkles size={11} className="text-[#C99A2E]" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C99A2E]">{heroData.badge}</span>
          </div>
          <h1 className="mb-3 text-[2.1rem] font-black leading-[1.1] tracking-tight" style={{ color: NAVY }}>{heroData.headline}</h1>
          <p className="mb-5 text-[14.5px] font-medium leading-relaxed text-[#475569]">{heroData.description}</p>
          <div className="relative overflow-hidden rounded-[8px] p-[1.5px]">
            <motion.div aria-hidden animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute -inset-[200%]" style={{ background: "conic-gradient(from 0deg, transparent 0 60%, #C99A2E 80%, #E2C068 90%, transparent 100%)" }} />
            <div className="relative rounded-[8px] bg-white/95 p-4 backdrop-blur-xl">
              <div className="mb-3 flex items-center gap-3">
                <div className="relative shrink-0">
                  <motion.span aria-hidden animate={{ scale: [1, 1.7], opacity: [0.5, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="absolute inset-0 rounded-full bg-[#C99A2E]" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ background: `linear-gradient(135deg, ${NAVY}, #1E3A6E)` }}>
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2.4, repeat: Infinity }}><Rocket size={18} /></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2"><span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#C99A2E]">Coming Soon</span><motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.4, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-[#C99A2E]" /></div>
                  <p className="flex items-center gap-1.5 text-[12.5px] font-semibold leading-snug text-[#0B1D3A]"><Gift size={12} className="shrink-0 text-[#C99A2E]" />Exclusive early launch offers</p>
                </div>
              </div>
              <motion.button type="button" whileTap={{ scale: 0.97 }} className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-[8px] py-3 text-[13.5px] font-bold text-[#0B1D3A]" style={{ background: "#C99A2E", boxShadow: "0 8px 22px rgba(201,154,46,0.35)" }}>
                <motion.span aria-hidden animate={{ x: ["-150%", "300%"] }} transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2 }} className="absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <span className="relative">Register for Early Launch</span><ArrowRight size={15} strokeWidth={2.5} className="relative" />
              </motion.button>
            </div>
          </div>
        </motion.div>
        <div className="relative h-[240px] overflow-hidden rounded-bl-[8px] rounded-br-[80px] rounded-tl-[80px] rounded-tr-[8px] border border-white/80 luxury-shadow-float">
          <motion.img animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} src={heroImg} alt="Two real estate professionals learning together on a laptop" className="h-full w-full object-cover object-[center_40%]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A]/15 via-transparent to-transparent" />

        </div>
      </section>
      <section id="course-listing" className="bg-gradient-to-br from-[#F8FAFD] via-[#F0F4FF] to-[#FAFBFF] py-10">
        <div className="mb-6 px-5 text-center">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#C99A2E]">Explore</span>
          <h2 className="text-[1.9rem] font-black leading-tight tracking-tight text-[#0B1D3A]">Find Your Next Course</h2>
          <div className="mx-auto mt-3 h-1 w-14 rounded-[2px] bg-gradient-to-r from-[#C99A2E] to-[#E2C068]" />
        </div>

        <div className="relative">
          {/* Mobile Overlay */}
          <div className="absolute -inset-x-2 -inset-y-4 z-50 flex items-start justify-center pt-10 rounded-[20px] bg-white/40 backdrop-blur-[8px]">
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 10 }} whileInView={{ scale: 1, opacity: 1, y: 0 }} transition={{ duration: 0.6, type: "spring", bounce: 0.4 }} className="relative mx-4 flex flex-col items-center overflow-hidden rounded-[16px] border border-white/80 bg-white/75 px-6 py-8 shadow-[0_12px_40px_rgba(11,29,58,0.12)] backdrop-blur-xl">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_60%,#C99A2E_80%,#E2C068_90%,transparent_100%)] opacity-20 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0B1D3A] to-[#15315C] text-white shadow-[0_8px_20px_rgba(11,29,58,0.25)] border border-white/20">
                  <motion.div animate={{ rotate: [0, -15, 15, -15, 15, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}><BellRing size={28} strokeWidth={2.5} /></motion.div>
                </motion.div>
                <h3 className="mb-2 text-[26px] font-black tracking-tight text-[#0B1D3A]">Coming Soon</h3>
                <p className="mb-6 max-w-[260px] text-center text-[13.5px] font-medium leading-[1.6] text-[#475569]">Our curated selection of courses is being finalized. Register now for early launch offers!</p>
                <motion.button whileTap={{ scale: 0.95 }} className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-[8px] px-5 py-3 text-[13px] font-bold text-white shadow-[0_6px_16px_rgba(201,154,46,0.3)]" style={{ background: "linear-gradient(135deg, #C99A2E 0%, #B8892A 100%)" }}>
                  <motion.span aria-hidden animate={{ x: ["-150%", "250%"] }} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }} className="absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <span className="relative">Register for Early Launch</span>
                  <ArrowRight size={14} strokeWidth={2.5} className="relative transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="pointer-events-none select-none opacity-40 blur-[2px]">
        <form role="search" onSubmit={(e) => e.preventDefault()} className="mx-5 mb-5 flex items-center gap-2 rounded-[8px] border border-[#E2E8F0] bg-white p-1.5 shadow-[0_4px_16px_rgba(11,29,58,0.05)] transition-colors focus-within:border-[#C99A2E]">
          <Search size={16} className="mx-2.5 shrink-0 text-[#94A3B8]" />
          <input aria-label="Search courses" value={f.query} onChange={(e) => f.setQuery(e.target.value)} placeholder="Search courses..." className="min-w-0 flex-1 bg-transparent text-[14px] font-medium text-[#0B1D3A] outline-none placeholder:text-[#94A3B8]" />
        </form>
        <div className="px-5"><CategoryChips idPrefix="mobile" selected={f.selectedCategories} onToggle={f.toggleCategory} /></div>
        <div className="mb-5 mt-4 px-5"><button onClick={() => setShowFilters(true)} className="flex w-full items-center justify-center gap-2 rounded-[8px] border border-[#0B1D3A]/15 bg-white px-4 py-2.5 text-[13px] font-semibold text-[#0B1D3A] transition-colors active:bg-[#F0F4FF]"><SlidersHorizontal size={14} className="text-[#C99A2E]" />Filters</button></div>
        <div className="px-5">
          {f.results.length ? (
            <motion.div layout className="flex flex-col gap-5">
              <AnimatePresence mode="popLayout">{f.results.map((c) => <CourseCard key={c.id} c={c} compact />)}</AnimatePresence>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center rounded-[8px] border border-[#E2E8F0] bg-white px-5 py-12 text-center">
              <SearchX size={36} className="mb-3 text-[#94A3B8]" />
              <h3 className="mb-1 text-[17px] font-bold text-[#0B1D3A]">No courses match</h3>
              <p className="mb-4 text-[13px] text-[#64748B]">Try a different keyword or clear the filters.</p>
              <button onClick={f.reset} className="rounded-[8px] bg-[#C99A2E] px-6 py-3 text-[14px] font-bold text-[#0B1D3A]">Clear filters</button>
            </div>
          )}
        </div>
        </div>
        </div>
      </section>
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div key="bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowFilters(false)} className="fixed inset-0 z-[90] bg-[#0B1D3A]/50 backdrop-blur-sm" />
            <motion.div key="sheet" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 240 }} className="fixed inset-x-0 bottom-0 z-[100] flex max-h-[88vh] flex-col overflow-hidden rounded-t-[8px] bg-white shadow-[0_-24px_80px_-12px_rgba(11,29,58,0.35)]">
              <div className="flex justify-center pb-1 pt-3"><div className="h-1.5 w-11 rounded-[2px] bg-[#0B1D3A]/10" /></div>
              <div className="flex shrink-0 items-center justify-between border-b border-[#0B1D3A]/[0.07] px-5 pb-4 pt-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[8px]" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1A3463 100%)` }}><SlidersHorizontal size={15} strokeWidth={2.5} style={{ color: "#D5AA45" }} /></div>
                  <span className="text-[18px] font-black" style={{ color: NAVY }}>Filters</span>
                  {activeFilterCount(f) > 0 && <CountBadge count={activeFilterCount(f)} size={22} />}
                </div>
                <button onClick={() => setShowFilters(false)} aria-label="Close filters" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F7FB] text-[#5A6B82] transition-colors active:bg-[#EEF2F8]"><X size={18} strokeWidth={2.5} /></button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 pb-[110px] pt-2"><FiltersChips f={f} /></div>
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 border-t border-[#0B1D3A]/[0.07] bg-white/90 p-4 backdrop-blur-xl">
                <button onClick={f.reset} className="flex h-12 flex-1 items-center justify-center gap-2 rounded-[8px] border border-[#0B1D3A]/[0.06] bg-[#F5F7FB] text-[14px] font-bold text-[#0B1D3A] transition-colors active:bg-[#EEF2F8]"><RotateCcw size={15} strokeWidth={2.5} />Clear</button>
                <button onClick={() => setShowFilters(false)} className="flex h-12 flex-[1.6] items-center justify-center gap-1.5 rounded-[8px] text-[14px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(11,29,58,0.6)] transition-all active:scale-[0.98]" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1A3463 100%)` }}>Show {f.results.length} Courses</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

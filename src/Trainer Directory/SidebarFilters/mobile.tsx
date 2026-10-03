import { motion, AnimatePresence } from "motion/react";
import { RotateCcw, X, SlidersHorizontal, Check } from "lucide-react";
import { filterSections, CountBadge } from "./desktop";
import type { SidebarFiltersProps } from "./desktop";
import { useLanguage } from "../../context/LanguageContext";
import { translateDirectoryText } from "../translations";

const NAVY = "#0B1D3A";
const GOLD_MID = "#D5AA45";

export default function Mobile({ isOpen, onClose, selected, onToggle, onClear, resultCount }: SidebarFiltersProps) {
  const { language } = useLanguage();
  const t = (text: string) => translateDirectoryText(text, language);
  const totalActive = Object.values(selected).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col justify-end bg-[#0B1D3A]/45 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="w-full bg-white rounded-t-3xl flex flex-col max-h-[88vh] font-['Outfit'] shadow-[0_-24px_80px_-12px_rgba(11,29,58,0.35)] relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-center pt-3 pb-1">
              <div className="w-11 h-1.5 bg-[#0B1D3A]/10 rounded-full" />
            </div>

            <div className="flex items-center justify-between px-5 pb-4 pt-2 border-b border-[#0B1D3A]/[0.07] shrink-0">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1A3463 100%)` }}
                >
                  <SlidersHorizontal size={15} strokeWidth={2.5} style={{ color: GOLD_MID }} />
                </div>
                <span className="text-[18px] font-black" style={{ color: NAVY }}>{t("Filters")}</span>
                {totalActive > 0 && <CountBadge count={totalActive} size={22} />}
              </div>
              <button
                onClick={onClose}
                aria-label={t("Close filters")}
                className="w-9 h-9 rounded-full bg-[#F5F7FB] flex items-center justify-center text-[#5A6B82] active:bg-[#EEF2F8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pt-2 pb-[110px]">
              {filterSections.map((section) => (
                <div key={section.key} className="py-4 border-b border-[#0B1D3A]/[0.06] last:border-b-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-black tracking-[0.14em] text-[#0B1D3A]/80 uppercase">{t(section.title)}</span>
                    {selected[section.key].length > 0 && <CountBadge count={selected[section.key].length} size={16} />}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.options.map((option) => {
                      const active = selected[section.key].includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => onToggle(section.key, option)}
                          aria-pressed={active}
                          className={`inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full text-[12.5px] font-semibold border transition-all duration-200 ${
                            active
                              ? "text-white border-transparent shadow-[0_6px_14px_-6px_rgba(11,29,58,0.5)]"
                              : "bg-white text-[#0B1D3A]/75 border-[#0B1D3A]/10 active:bg-[#F5F7FB]"
                          }`}
                          style={active ? { background: `linear-gradient(135deg, ${NAVY} 0%, #1A3463 100%)` } : undefined}
                        >
                          {active && <Check size={13} strokeWidth={3} style={{ color: GOLD_MID }} />}
                          {t(option)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-[#0B1D3A]/[0.07] flex items-center gap-3">
              <button
                onClick={onClear}
                className="flex-1 h-12 rounded-xl text-[#0B1D3A] font-bold text-[14px] flex items-center justify-center gap-2 bg-[#F5F7FB] border border-[#0B1D3A]/[0.06] active:bg-[#EEF2F8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
              >
                <RotateCcw size={15} strokeWidth={2.5} />
                {t("Clear")}
              </button>
              <button
                onClick={onClose}
                className="flex-[1.6] h-12 rounded-xl text-white font-bold text-[14px] flex items-center justify-center gap-1.5 shadow-[0_10px_24px_-10px_rgba(11,29,58,0.6)] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1A3463 100%)` }}
              >
                {language === "te"
                  ? `${typeof resultCount === "number" ? resultCount : ""} మంది ట్రైనర్‌లను చూపించండి`
                  : `Show ${typeof resultCount === "number" ? resultCount : ""} Trainers`}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

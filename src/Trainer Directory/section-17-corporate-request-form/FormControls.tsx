import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Check, Calendar as CalendarIcon } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function CustomSelect({ options, placeholder, value, onChange }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/50 backdrop-blur-sm border border-[#0B1D3A]/[0.12] rounded px-4 py-2.5 text-[13px] font-medium text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E] focus:ring-1 focus:ring-[#C99A2E]/30 transition-all flex items-center justify-between gap-2"
      >
        <span className={`leading-snug ${value ? "text-[#0B1D3A]" : "text-[#7B8DAA]"}`}>
          {value || placeholder}
        </span>
        <ChevronDown size={14} className={`shrink-0 text-[#7B8DAA] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full mt-1.5 bg-white rounded shadow-lg border border-[#0B1D3A]/[0.08] overflow-hidden z-50 max-h-60 overflow-y-auto"
          >
            {options.map((opt: string, idx: number) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-[#F8FAFD] flex items-center justify-between gap-2 ${
                  value === opt ? "text-[#C99A2E] bg-[#C99A2E]/5" : "text-[#0B1D3A]"
                }`}
              >
                <span className="leading-snug">{opt}</span>
                {value === opt && <Check size={14} strokeWidth={2.5} className="shrink-0" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CustomCheckbox({ label, checked, onChange }: any) {
  return (
    <label className="flex items-start gap-2.5 cursor-pointer group select-none" onClick={onChange}>
      <div
        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors shrink-0 mt-[1.5px] ${
          checked
            ? "bg-[#C99A2E] border-[#C99A2E]"
            : "bg-white/50 border-[#0B1D3A]/[0.12] group-hover:border-[#C99A2E]/50"
        }`}
      >
        <AnimatePresence>
          {checked && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <Check size={10} strokeWidth={3} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="text-[13px] font-medium text-[#0B1D3A] leading-snug">{label}</span>
    </label>
  );
}

export function CustomRadio({ label, name, checked, onChange }: any) {
  return (
    <label className="flex items-start gap-2.5 cursor-pointer group select-none" onClick={onChange}>
      <input type="radio" name={name} className="hidden" readOnly />
      <div
        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors shrink-0 mt-[1.5px] ${
          checked
            ? "border-[#C99A2E]"
            : "bg-white/50 border-[#0B1D3A]/[0.12] group-hover:border-[#C99A2E]/50"
        }`}
      >
        <AnimatePresence>
          {checked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="w-2 h-2 rounded-full bg-[#C99A2E]"
            />
          )}
        </AnimatePresence>
      </div>
      <span className="text-[13px] font-medium text-[#0B1D3A] leading-snug">{label}</span>
    </label>
  );
}

export function CustomDatePicker({ selected, onChange, placeholderText }: any) {
  return (
    <div className="relative w-full custom-datepicker-wrapper">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
        <CalendarIcon size={14} className="text-[#7B8DAA]" />
      </div>
      <DatePicker
        selected={selected}
        onChange={onChange}
        placeholderText={placeholderText}
        className="w-full bg-white/50 backdrop-blur-sm border border-[#0B1D3A]/[0.12] rounded pl-9 pr-4 py-2.5 text-[13px] font-medium text-[#0B1D3A] focus:outline-none focus:border-[#C99A2E] focus:ring-1 focus:ring-[#C99A2E]/30 transition-all placeholder:text-[#7B8DAA]"
        dateFormat="dd MMM yyyy"
      />
      <style>{`
        .custom-datepicker-wrapper .react-datepicker-wrapper {
          width: 100%;
        }
        .react-datepicker {
          font-family: 'Outfit', sans-serif !important;
          border: 1px solid rgba(11,29,58,0.08) !important;
          border-radius: 8px !important;
          box-shadow: 0 10px 25px -5px rgba(11,29,58,0.1) !important;
        }
        .react-datepicker__header {
          background-color: #F8FAFD !important;
          border-bottom: 1px solid rgba(11,29,58,0.06) !important;
          border-top-left-radius: 8px !important;
          border-top-right-radius: 8px !important;
        }
        .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
          background-color: #C99A2E !important;
          color: white !important;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

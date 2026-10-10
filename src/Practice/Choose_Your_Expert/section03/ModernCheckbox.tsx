import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

interface ModernCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  count?: number;
  className?: string;
}

export function ModernCheckbox({
  checked,
  onChange,
  label,
  count,
  className = "",
}: ModernCheckboxProps) {
  return (
    <label
      onClick={(e) => {
        e.preventDefault();
        onChange(!checked);
      }}
      className={`group flex items-center justify-between py-1.5 px-2 -mx-2 rounded-[10px] hover:bg-[#F8FAFD] cursor-pointer transition-all duration-200 select-none ${className}`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={`relative flex items-center justify-center w-5 h-5 rounded-[6px] shrink-0 transition-all duration-200 ${
            checked
              ? "bg-gradient-to-br from-[#E0B550] via-[#C99A2E] to-[#B8871F] border border-[#B8871F] shadow-[0_2px_8px_rgba(201,154,46,0.35)]"
              : "bg-white border-2 border-[#D1D5DB] group-hover:border-[#C99A2E] group-hover:shadow-[0_0_0_3px_rgba(201,154,46,0.12)]"
          }`}
        >
          <AnimatePresence initial={false}>
            {checked && (
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.4, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="flex items-center justify-center text-white"
              >
                <Check size={13} strokeWidth={3.2} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span
          className={`text-[13.5px] truncate transition-colors ${
            checked
              ? "font-bold text-[#0B1D3A]"
              : "font-medium text-[#475569] group-hover:text-[#0B1D3A]"
          }`}
        >
          {label}
        </span>
      </div>

      {count !== undefined && (
        <span
          className={`text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0 transition-colors ${
            checked
              ? "bg-[#C99A2E]/15 text-[#8A5A00]"
              : "bg-[#F1F5F9] text-[#7B8DAA] group-hover:bg-[#E2E8F0] group-hover:text-[#475569]"
          }`}
        >
          {count}
        </span>
      )}
    </label>
  );
}

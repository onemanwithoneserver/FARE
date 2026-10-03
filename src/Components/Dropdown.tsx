import { Check, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useId,
  type HTMLAttributes,
} from "react";
export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}
export interface DropdownProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  id?: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}
const sizeClasses = {
  sm: "px-2.5 py-1.5 text-xs",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-2.5 text-base",
};
const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      id,
      options,
      value,
      onChange,
      size = "md",
      className = "",
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const internalId = useId();
    const dropdownId = id || internalId;
    const selectedOption = options.find((o) => o.value === value);
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      const handleCloseOthers = (e: Event) => {
        const customEvent = e as CustomEvent;
        if (customEvent.detail.id !== dropdownId) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside, {
          passive: true,
        });
        window.addEventListener("fare-dropdown-open", handleCloseOthers);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
        window.removeEventListener("fare-dropdown-open", handleCloseOthers);
      };
    }, [isOpen, dropdownId]);
    const toggleOpen = (e: React.MouseEvent | React.TouchEvent) => {
      if (disabled) return;
      e.stopPropagation();
      const nextState = !isOpen;
      setIsOpen(nextState);
      if (nextState) {
        window.dispatchEvent(
          new CustomEvent("fare-dropdown-open", {
            detail: { id: dropdownId },
          }),
        );
      }
    };
    return (
      <div
        className={`relative inline-block ${className}`}
        ref={(node) => {
          (
            containerRef as React.MutableRefObject<HTMLDivElement | null>
          ).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        {...props}
      >
        <button
          type="button"
          id={dropdownId}
          disabled={disabled}
          onClick={toggleOpen}
          className={`
            w-full flex items-center justify-between gap-2
            ${sizeClasses[size]}
            bg-white/90 backdrop-blur-md
            border border-[#0B1D3A]/[0.08] rounded-[4px]-[8px]-[4px]-[8px]-[4px]-[8px]-[4px] font-semibold text-[#0B1D3A]
            luxury-shadow-sm hover:luxury-shadow transition-all duration-300 cursor-pointer
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1D3A]/50 focus-visible:border-[#0B1D3A]
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:luxury-shadow-sm
            ${isOpen ? "border-[#0B1D3A]/50 luxury-shadow ring-1 ring-[#0B1D3A]/20" : "hover:border-[#0B1D3A]/30"}
          `}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="truncate">
            {selectedOption?.label || "Select..."}
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-[#0B1D3A]" : "text-[#64748B]"}`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              key="dropdown-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute z-[99999] w-full min-w-max mt-2 py-1.5 bg-white/95 backdrop-blur-xl backdrop-saturate-150 border border-white/40 rounded-[4px]-[4px]-[4px]-[4px] luxury-shadow-float overflow-y-auto overflow-x-hidden max-h-[60vh] scrollbar-thin"
              role="listbox"
            >
              {options.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      if (!opt.disabled) {
                        onChange(opt.value);
                        setIsOpen(false);
                      }
                    }}
                    className={`
                      flex items-center justify-between px-3 py-2.5 mx-1.5 rounded-[4px]-[4px]-[4px]-[4px] text-[14px] font-medium cursor-pointer transition-all duration-200
                      ${opt.disabled ? "opacity-50 cursor-not-allowed" : ""}
                      ${
                        isSelected
                          ? "text-[#0B1D3A] bg-[#0B1D3A]/10 font-bold"
                          : "text-[#475569] hover:text-[#0B1D3A] hover:bg-[#F8FAFD]"
                      }
                    `}
                  >
                    <span className="truncate pr-6">{opt.label}</span>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        <Check
                          size={16}
                          className="shrink-0 text-[#0B1D3A]"
                        />
                      </motion.div>
                    )}
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  },
);
Dropdown.displayName = "Dropdown";
export default Dropdown;

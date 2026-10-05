import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, type LucideIcon } from "lucide-react";

interface CategoryOption {
  name: string;
  icon: LucideIcon;
}

interface CategoryMultiSelectProps {
  options: CategoryOption[];
  selected: string[];
  onToggle: (category: string) => void;
  className?: string;
  size?: "sm" | "md";
}

export default function CategoryMultiSelect({
  options,
  selected,
  onToggle,
  className = "",
  size = "md",
}: CategoryMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selectedLabel =
    selected.length === 0
      ? "All categories"
      : selected.length === 1
        ? selected[0]
        : `${selected.length} categories selected`;

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, {
      passive: true,
    });
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={listId}
        className={`flex w-full items-center justify-between gap-2 rounded-[8px] border border-[#E2E8F0] bg-white font-semibold text-[#0B1D3A] shadow-sm transition hover:border-[#0B1D3A]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1D3A]/20 ${
          size === "sm" ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-sm"
        }`}
      >
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-[#64748B] transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div
          id={listId}
          role="group"
          aria-label="Course categories"
          className="absolute left-0 top-full z-[100] mt-2 max-h-[min(60vh,360px)] w-full min-w-[220px] overflow-y-auto rounded-xl border border-[#E2E8F0] bg-white p-1.5 shadow-[0_12px_32px_rgba(11,29,58,0.16)]"
        >
          {options.map(({ name, icon: Icon }) => {
            const isAll = name === "All";
            const checked = isAll
              ? selected.length === 0
              : selected.includes(name);

            return (
              <button
                key={name}
                type="button"
                role="checkbox"
                aria-checked={checked}
                onClick={() => onToggle(name)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] transition ${
                  checked
                    ? "bg-[#F0F4FF] font-semibold text-[#0B1D3A]"
                    : "text-[#475569] hover:bg-[#F8FAFD]"
                }`}
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                    checked
                      ? "border-[#0B1D3A] bg-[#0B1D3A] text-white"
                      : "border-[#CBD5E1] bg-white"
                  }`}
                >
                  {checked && <Check size={11} strokeWidth={3} />}
                </span>
                <Icon size={14} className="shrink-0" />
                <span className="truncate">{isAll ? "All categories" : name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

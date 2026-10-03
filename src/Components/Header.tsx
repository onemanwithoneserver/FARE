import { Monitor, Smartphone, X } from "lucide-react";
import Dropdown from "./Dropdown";
export type ViewMode = "desktop" | "mobile";
interface HeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  view: string;
  onViewChange: (view: string) => void;
  onClose?: () => void;
}
export default function Header({
  viewMode,
  onViewModeChange,
  view,
  onViewChange,
  onClose,
}: HeaderProps) {
  const isMobile = viewMode === "mobile";
  const dropdownOptions = [
    { value: "home", label: "Home" },
    { value: "re-companies", label: "Residential & Commercial" },
    { value: "open-plots", label: "Open Plots" },
    { value: "re-trainers-coaches", label: "For Trainers" },
    { value: "fare-knowledge-bank", label: "Knowledge Bank" },
    { value: "fare-for-students-freshers", label: "Students & Freshers" },
    { value: "fare-for-employees", label: "Employees" },
    { value: "fare-for-freelancers-open-plot", label: "Freelancers - Open Plot" },
    { value: "fare-for-freelancers-residential", label: "Freelancers - Residential" },
    { value: "fare-for-career-switchers", label: "Career Switchers" },
    { value: "trainer-directory", label: "Trainer Directory" },
    { value: "contact-us", label: "Contact Us" },
  ];
  return (
    <header className="h-[60px] fare-glass-nav border-b border-[#0B1D3A]/[0.08] px-3 sm:px-4 md:px-6 flex items-center justify-between shrink-0 luxury-shadow-sm relative z-[100] gap-2 sm:gap-4 pointer-events-auto">
      <div className="flex items-center gap-3 md:gap-6 shrink-0">
        <div className="text-[#0B1D3A] font-black text-lg md:text-xl tracking-wide">
          FARE
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <div className="flex bg-white/50 p-0.5 md:p-1 rounded-[4px]-[4px]-[4px]-[4px] border border-[#0B1D3A]/[0.08] luxury-shadow-sm">
          <button
            onClick={() => onViewModeChange("desktop")}
            title="Desktop View"
            className={`flex items-center gap-1.5 px-2.5 sm:px-4 md:px-5 py-1 md:py-1.5 rounded-[4px]-[4px]-[4px]-[4px] text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              !isMobile
                ? "bg-[#0B1D3A] text-white shadow-md"
                : "text-[#475569] hover:text-[#0B1D3A] hover:bg-white"
            }`}
          >
            <Monitor className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            onClick={() => onViewModeChange("mobile")}
            title="Mobile View"
            className={`flex items-center gap-1.5 px-2.5 sm:px-4 md:px-5 py-1 md:py-1.5 rounded-[4px]-[4px]-[4px]-[4px] text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              isMobile
                ? "bg-[#0B1D3A] text-white shadow-md"
                : "text-[#475569] hover:text-[#0B1D3A] hover:bg-white"
            }`}
          >
            <Smartphone className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#94a3b8] uppercase hidden md:block">
            View
          </span>
          <div className="w-[120px] sm:w-[145px] md:w-[160px]">
            <Dropdown
              options={dropdownOptions}
              value={view}
              onChange={onViewChange}
              size="sm"
            />
          </div>
        </div>
        <button
          onClick={onClose}
          title="Close header (Press Ctrl+M to reopen)"
          aria-label="Close header"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-[4px]-[8px]-[4px]-[8px]-[4px]-[8px]-[4px] border border-[#0B1D3A]/[0.08] text-[#64748b] hover:text-[#0B1D3A] hover:bg-white transition-all flex items-center justify-center luxury-shadow-sm cursor-pointer shrink-0 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] duration-300 ease-out"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </header>
  );
}

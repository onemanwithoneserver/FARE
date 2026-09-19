import { Monitor, Smartphone, Moon, X } from 'lucide-react'
import Dropdown from './Dropdown'

export type ViewMode = 'desktop' | 'mobile';

interface HeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  view: string;
  onViewChange: (view: string) => void;
  onClose?: () => void;
}

export default function Header({ viewMode, onViewModeChange, view, onViewChange, onClose }: HeaderProps) {
  const isMobile = viewMode === 'mobile';
  
  const dropdownOptions = [
    { value: 'Home', label: 'Home' },
    { value: 'Forms', label: 'Forms' }
  ];

  return (
    <header className="h-[60px] bg-white border-b border-[#e2e8f0] px-4 md:px-6 flex items-center justify-between shrink-0 shadow-sm z-50">
      <div className="flex items-center gap-6">
        <div className="text-[#1e293b] font-black text-xl tracking-wide">
          FARE
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center flex-1">
        <div className="flex bg-[#f8fafc] p-1 rounded-xl border border-[#e2e8f0] shadow-sm">
          <button
            onClick={() => onViewModeChange('desktop')}
            className={`flex items-center gap-2 px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              !isMobile 
                ? 'bg-[#1e293b] text-white shadow-md' 
                : 'text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9]'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Desktop</span>
          </button>
          <button
            onClick={() => onViewModeChange('mobile')}
            className={`flex items-center gap-2 px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              isMobile 
                ? 'bg-[#1e293b] text-white shadow-md' 
                : 'text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9]'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold tracking-widest text-[#94a3b8] uppercase hidden sm:block">
            View
          </span>
          <div className="w-[140px]">
            <Dropdown 
              options={dropdownOptions} 
              value={view} 
              onChange={onViewChange} 
              size="md"
            />
          </div>
        </div>
        
        <div className="w-px h-8 bg-[#e2e8f0] hidden sm:block"></div>
        
        <button className="text-[#64748b] hover:text-[#0f172a] transition-colors p-2 rounded-lg hover:bg-[#f8fafc]">
          <Moon className="w-5 h-5" />
        </button>
        <button 
          onClick={onClose}
          title="Close header (Press Ctrl+M to reopen)"
          aria-label="Close header"
          className="w-9 h-9 rounded-lg border border-[#e2e8f0] text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc] transition-all flex items-center justify-center shadow-sm cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}

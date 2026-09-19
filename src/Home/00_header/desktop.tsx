import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { data } from './data';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { Search, ArrowRight, X, ChevronDown, Building2, MapPin } from 'lucide-react';

export default function Desktop() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isSearchExpanded && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchExpanded]);

    const LogoElement = (
        <div className="flex items-center cursor-pointer group py-0 shrink-0">
            <img
                src={logo}
                alt="FARE"
                className={`w-auto max-w-none transition-all duration-300 group-hover:scale-[1.02] ${
                    isScrolled ? 'h-[68px] my-[-6px]' : 'h-[90px] my-[-10px]'
                }`}
            />
        </div>
    );

    const NavElement = (
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {data.navLinks.map((link, idx) => {
                const hasSubItems = link.subItems && link.subItems.length > 0;
                const isDropdownOpen = activeDropdown === link.title;

                if (hasSubItems) {
                    return (
                        <div
                            key={idx}
                            className="relative"
                            onMouseEnter={() => setActiveDropdown(link.title)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                onClick={() => setActiveDropdown(isDropdownOpen ? null : link.title)}
                                className="flex items-center gap-1 text-[14px] font-medium text-[#0B1D3A]/90 hover:text-[#C99A2E] transition-colors duration-300 cursor-pointer py-1.5 group"
                            >
                                <span>{link.title}</span>
                                <ChevronDown
                                    size={14}
                                    strokeWidth={2.5}
                                    className={`text-[#0B1D3A]/60 group-hover:text-[#C99A2E] transition-transform duration-300 ${
                                        isDropdownOpen ? 'rotate-180 text-[#C99A2E]' : ''
                                    }`}
                                />
                            </button>

                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute top-full left-0 mt-1.5 w-[290px] bg-white/98 backdrop-blur-xl border border-[#0B1D3A]/15 shadow-[0_16px_40px_-8px_rgba(11,29,58,0.2)] rounded-xl p-2 z-50 pointer-events-auto"
                                    >
                                        <div className="flex flex-col gap-1">
                                            {link.subItems?.map((sub, sIdx) => (
                                                <a
                                                    key={sIdx}
                                                    href={sub.href}
                                                    onClick={() => setActiveDropdown(null)}
                                                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F0F4FA] transition-all group/sub cursor-pointer"
                                                >
                                                    <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 transition-all duration-300 shadow-sm group-hover/sub:scale-105 group-hover/sub:shadow-md ${
                                                        sIdx === 0 
                                                            ? 'bg-gradient-to-br from-[#0B1D3A] to-[#102B63] text-[#E2C068] group-hover/sub:from-[#C99A2E] group-hover/sub:to-[#E2C068] group-hover/sub:text-[#0B1D3A]' 
                                                            : 'bg-gradient-to-br from-[#071A49] to-[#0F2D6B] text-[#34D399] group-hover/sub:from-[#34D399] group-hover/sub:to-[#059669] group-hover/sub:text-white'
                                                    }`}>
                                                        {sIdx === 0 ? <Building2 size={18} strokeWidth={2} /> : <MapPin size={18} strokeWidth={2} />}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[13.5px] font-bold text-[#0B1D3A] group-hover/sub:text-[#C99A2E] transition-colors">
                                                            {sub.title}
                                                        </span>
                                                        <span className="text-[11.5px] font-medium text-[#0B1D3A]/60 leading-snug mt-0.5">
                                                            {sub.desc}
                                                        </span>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                }

                return (
                    <a
                        key={idx}
                        href={link.href}
                        className="relative text-[14px] font-medium text-[#0B1D3A]/90 hover:text-[#C99A2E] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C99A2E] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {link.title}
                    </a>
                );
            })}
        </nav>
    );

    return (
        <div className="w-full relative z-50">
            <div className="w-full h-[68px] pointer-events-none opacity-0" aria-hidden="true" />

            <div 
                className={`w-full transition-all duration-300 ease-out fixed left-0 right-0 z-50 ${
                    isScrolled 
                        ? 'top-2.5 flex justify-center px-6 pointer-events-none' 
                        : 'top-0 w-full pointer-events-auto'
                }`}
            >
                <header 
                    className={`transition-all duration-300 pointer-events-auto flex items-center justify-between relative ${
                        isScrolled
                            ? 'w-full max-w-[1240px] h-[56px] px-6 lg:px-8 bg-white/92 backdrop-blur-xl border border-white/90 shadow-[0_12px_32px_-10px_rgba(11,29,58,0.12),0_1px_3px_rgba(11,29,58,0.05)] rounded-full mx-auto'
                            : 'w-full h-[68px] px-8 lg:px-14 bg-white/85 backdrop-blur-md border-b border-[#0B1D3A]/[0.07] shadow-[0_2px_10px_-4px_rgba(11,29,58,0.04)] rounded-[4px]'
                    }`}
                >
                    <div className="flex items-center">
                        {isScrolled ? NavElement : LogoElement}
                    </div>
                    
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                        {isScrolled ? LogoElement : NavElement}
                    </div>

                    <div className="flex items-center gap-3 lg:gap-4">
                        <button
                            onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                            aria-label="Toggle search dialog"
                            className={`flex items-center justify-center w-9 h-9 transition-all duration-200 cursor-pointer ${
                                isSearchExpanded 
                                    ? 'bg-[#0B1D3A] text-white shadow-md rounded-full' 
                                    : `text-[#0B1D3A]/75 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.06] ${isScrolled ? 'rounded-full' : 'rounded-[4px]'}`
                            }`}
                            title="Search platform"
                        >
                            {isSearchExpanded ? <X size={18} strokeWidth={2.5} /> : <Search size={19} strokeWidth={2} />}
                        </button>

                        <div className="w-[1px] h-4 bg-[#0B1D3A]/10 shrink-0"></div>

                        <a
                            href="#login"
                            className="text-[13.5px] font-medium text-[#0B1D3A] hover:text-[#C99A2E] px-2 py-1 transition-colors duration-300 shrink-0 hidden sm:inline-block"
                        >
                            Login
                        </a>

                        <button className={`bg-[#0B1D3A] text-white text-[13.5px] font-semibold px-5 lg:px-6 py-2 hover:bg-[#102B63] hover:shadow-[0_8px_24px_rgba(11,29,58,0.25),0_0_0_1px_rgba(201,154,46,0.2)] active:scale-[0.98] transition-all duration-300 shadow-[0_2px_8px_rgba(11,29,58,0.15)] flex items-center gap-2 shrink-0 cursor-pointer ${isScrolled ? 'rounded-full' : 'rounded-[4px]'}`}>
                            <span>Get Started</span>
                            <ArrowRight size={14} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Floating Search Dialog Below Header */}
                    <AnimatePresence>
                        {isSearchExpanded && (
                            <motion.div
                                initial={{ opacity: 0, y: -12, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className={`absolute top-[calc(100%+10px)] right-4 lg:right-10 w-[420px] max-w-[90vw] bg-white/98 backdrop-blur-2xl border border-[#0B1D3A]/15 shadow-[0_20px_50px_-10px_rgba(11,29,58,0.22)] p-4 z-50 pointer-events-auto ${
                                    isScrolled ? 'rounded-2xl' : 'rounded-xl'
                                }`}
                            >
                                <div className="flex items-center gap-3 bg-[#F8FAFD] border border-[#0B1D3A]/15 focus-within:border-[#C99A2E] focus-within:ring-2 focus-within:ring-[#C99A2E]/20 px-3.5 py-2.5 rounded-xl transition-all shadow-inner">
                                    <Search size={18} className="text-[#C99A2E] shrink-0" />
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Escape') setIsSearchExpanded(false);
                                        }}
                                        placeholder="Search courses, skills, benchmarks..."
                                        className="bg-transparent text-[14px] text-[#0B1D3A] placeholder-[#0B1D3A]/40 outline-none w-full font-medium"
                                    />
                                    <button
                                        onClick={() => {
                                            if (searchQuery) setSearchQuery('');
                                            else setIsSearchExpanded(false);
                                        }}
                                        aria-label="Close search"
                                        className="text-[#0B1D3A]/40 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/10 p-1 rounded-full transition-colors cursor-pointer shrink-0"
                                    >
                                        <X size={15} strokeWidth={2.5} />
                                    </button>
                                </div>

                                <div className="mt-3.5 pt-3 border-t border-[#0B1D3A]/[0.07]">
                                    <div className="text-[11px] font-bold text-[#0B1D3A]/50 uppercase tracking-wider mb-2">Popular Searches</div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {['RERA Compliance', 'Negotiation Labs', 'Capability Diagnostic', 'Peer Benchmarks'].map((tag, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSearchQuery(tag)}
                                                className="text-[11.5px] font-medium text-[#0B1D3A]/75 bg-[#0B1D3A]/[0.04] hover:bg-[#C99A2E]/15 hover:text-[#0B1D3A] px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </header>
            </div>
        </div>
    );
}

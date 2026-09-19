import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { data } from './data';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { Search, ArrowRight, X } from 'lucide-react';

export default function Desktop() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
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
        <div className="flex items-center cursor-pointer group py-1">
            <img
                src={logo}
                alt="FARE"
                className={`w-auto transition-all duration-300 group-hover:scale-[1.02] ${
                    isScrolled ? 'h-[60px]' : 'h-[80px]'
                }`}
            />
        </div>
    );

    const NavElement = (
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {data.navLinks.map((link, idx) => (
                <a
                    key={idx}
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="relative text-[14px] font-medium text-[#0B1D3A]/90 hover:text-[#C99A2E] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C99A2E] after:transition-all after:duration-300 hover:after:w-full"
                >
                    {link}
                </a>
            ))}
        </nav>
    );

    return (
        <div className="w-full relative z-50">
            <div className="w-full h-[96px] pointer-events-none opacity-0" aria-hidden="true" />

            <div 
                className={`w-full transition-all duration-300 ease-out fixed left-0 right-0 z-50 ${
                    isScrolled 
                        ? 'top-3 flex justify-center px-6 pointer-events-none' 
                        : 'top-0 w-full pointer-events-auto'
                }`}
            >
                <header 
                    className={`transition-all duration-300 pointer-events-auto flex items-center justify-between relative ${
                        isScrolled
                            ? 'w-full max-w-[1240px] h-[72px] px-6 lg:px-8 bg-white/92 backdrop-blur-xl border border-white/90 shadow-[0_12px_32px_-10px_rgba(11,29,58,0.12),0_1px_3px_rgba(11,29,58,0.05)] rounded-full mx-auto'
                            : 'w-full h-[96px] px-8 lg:px-14 bg-white/85 backdrop-blur-md border-b border-[#0B1D3A]/[0.07] shadow-[0_2px_10px_-4px_rgba(11,29,58,0.04)] rounded-[4px]'
                    }`}
                >
                    <div className="flex items-center">
                        {isScrolled ? NavElement : LogoElement}
                    </div>
                    
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                        {isScrolled ? LogoElement : NavElement}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative flex items-center">
                            <AnimatePresence initial={false}>
                                {isSearchExpanded ? (
                                    <motion.div
                                        initial={{ width: 40, opacity: 0 }}
                                        animate={{ width: isScrolled ? 230 : 280, opacity: 1 }}
                                        exit={{ width: 40, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                        className={`flex items-center bg-[#F8FAFD] border border-[#0B1D3A]/15 focus-within:border-[#C99A2E] focus-within:ring-1 focus-within:ring-[#C99A2E]/30 px-3 py-1.5 shadow-inner ${isScrolled ? 'rounded-full' : 'rounded-[4px]'}`}
                                    >
                                        <Search size={16} className="text-[#0B1D3A]/50 shrink-0 mr-2" />
                                        <input
                                            ref={searchInputRef}
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Escape') setIsSearchExpanded(false);
                                            }}
                                            placeholder="Search courses, skills..."
                                            className="bg-transparent text-[13px] text-[#0B1D3A] placeholder-[#0B1D3A]/40 outline-none w-full"
                                        />
                                        <button
                                            onClick={() => {
                                                if (searchQuery) {
                                                    setSearchQuery('');
                                                } else {
                                                    setIsSearchExpanded(false);
                                                }
                                            }}
                                            aria-label="Close search"
                                            className="text-[#0B1D3A]/40 hover:text-[#0B1D3A] p-0.5 rounded-[2px] ml-1 transition-colors"
                                        >
                                            <X size={14} />
                                        </button>
                                    </motion.div>
                                ) : (
                                    <button
                                        onClick={() => setIsSearchExpanded(true)}
                                        aria-label="Expand search"
                                        className={`flex items-center gap-2 text-[#0B1D3A]/70 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.04] px-2.5 py-1.5 transition-all duration-200 ${isScrolled ? 'rounded-full' : 'rounded-[4px]'}`}
                                        title="Search platform"
                                    >
                                        <Search size={18} strokeWidth={2} />
                                        <span className="text-[13px] font-medium text-[#0B1D3A]/60 hidden lg:inline">Search</span>
                                    </button>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="w-[1px] h-4 bg-[#0B1D3A]/10"></div>

                        <a
                            href="#login"
                            className="text-[13.5px] font-medium text-[#0B1D3A] hover:text-[#C99A2E] px-2 py-1 transition-colors duration-300"
                        >
                            Login
                        </a>

                        <button className={`bg-[#0B1D3A] text-white text-[13.5px] font-semibold px-6 py-2.5 hover:bg-[#102B63] hover:shadow-[0_8px_24px_rgba(11,29,58,0.25),0_0_0_1px_rgba(201,154,46,0.2)] active:scale-[0.98] transition-all duration-300 shadow-[0_2px_8px_rgba(11,29,58,0.15)] flex items-center gap-2 ${isScrolled ? 'rounded-full' : 'rounded-[4px]'}`}>
                            <span>Get Started</span>
                            <ArrowRight size={14} strokeWidth={2.5} />
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
}

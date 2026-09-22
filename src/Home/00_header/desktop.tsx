import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { Search, ArrowRight, X, ChevronDown, Building2, MapPin, Globe, Check } from 'lucide-react';

export default function Desktop() {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobileMode = location.pathname.startsWith('/mobile');
    const currentMode = isMobileMode ? 'mobile' : 'desktop';
    const { language, setLanguage } = useLanguage();
    const data = getData(language);

    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const langDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = (e?: Event) => {
            let scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
            if (e && e.target && (e.target as HTMLElement).scrollTop !== undefined) {
                scrollTop = (e.target as HTMLElement).scrollTop;
            }
            if (scrollTop > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
                setIsLangDropdownOpen(false);
            }
        };

        document.addEventListener('scroll', handleScroll, { capture: true, passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('mousedown', handleClickOutside);
        handleScroll();
        return () => {
            document.removeEventListener('scroll', handleScroll, { capture: true });
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isSearchExpanded && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchExpanded]);

    const LogoElement = (
        <div
            onClick={() => navigate(`/${currentMode}/home`)}
            className="flex items-center justify-center cursor-pointer group py-0 shrink-0"
        >
            <img
                src={logo}
                alt="FARE"
                className={`w-auto max-w-none transition-all duration-300 group-hover:scale-[1.04] ${isScrolled ? 'brightness-0 invert' : ''} ${
                    isScrolled ? 'h-[70px] my-[-8px] scale-[1.25] origin-center' : 'h-[74px] my-[-8px]'
                }`}
            />
        </div>
    );

    const renderNavLink = (link: typeof data.navLinks[0], idx: number) => {
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
                        className={`flex items-center gap-1 text-[13px] lg:text-[13.5px] xl:text-[14px] font-medium transition-colors duration-300 cursor-pointer py-1.5 group whitespace-nowrap ${isScrolled ? 'text-white/90 hover:text-[#C99A2E]' : 'text-[#0B1D3A]/90 hover:text-[#C99A2E]'}`}
                    >
                        <span className="relative inline-block py-0.5">
                            <span className={`transition-colors duration-300 ${isDropdownOpen ? 'text-[#C99A2E]' : ''}`}>
                                {link.title}
                            </span>
                            <span className={`absolute -bottom-[2px] left-0 h-[2px] bg-[#C99A2E] rounded-full transition-all duration-300 ease-out ${
                                isDropdownOpen ? 'w-full' : 'w-0 group-hover:w-full'
                            }`} />
                        </span>
                        <ChevronDown
                            size={13}
                            strokeWidth={2.5}
                            className={`transition-transform duration-300 ${isScrolled ? 'text-white/60 group-hover:text-[#C99A2E]' : 'text-[#0B1D3A]/60 group-hover:text-[#C99A2E]'} ${
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
                                className="absolute top-full left-0 mt-1.5 w-[290px] bg-[#0B1D3A]/95 backdrop-blur-xl border border-white/10 shadow-[0_16px_40px_-8px_rgba(11,29,58,0.2)] rounded p-2 z-50 pointer-events-auto"
                            >
                                <div className="flex flex-col gap-1">
                                    {link.subItems?.map((sub, sIdx) => (
                                        <a
                                            key={sIdx}
                                            href={sub.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveDropdown(null);
                                                if (sub.title === 'Open Plots' || sub.href === '#open-plots') {
                                                    navigate(`/${currentMode}/open-plots`);
                                                } else {
                                                    navigate(`/${currentMode}/home`);
                                                }
                                            }}
                                            className="flex items-start gap-3 p-2.5 rounded hover:bg-white/10 transition-all group/sub cursor-pointer"
                                        >
                                            <div className={`p-2.5 rounded shrink-0 mt-0.5 transition-all duration-300 shadow-sm group-hover/sub:scale-105 group-hover/sub:shadow-md ${
                                                sIdx === 0
                                                    ? 'bg-gradient-to-br from-[#0B1D3A] to-[#102B63] text-[#E2C068] group-hover/sub:from-[#C99A2E] group-hover/sub:to-[#E2C068] group-hover/sub:text-white'
                                                    : 'bg-gradient-to-br from-[#071A49] to-[#0F2D6B] text-[#34D399] group-hover/sub:from-[#34D399] group-hover/sub:to-[#059669] group-hover/sub:text-white'
                                            }`}>
                                                {sIdx === 0 ? <Building2 size={18} strokeWidth={2} /> : <MapPin size={18} strokeWidth={2} />}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[13.5px] font-bold text-white group-hover/sub:text-[#C99A2E] transition-colors">
                                                    {sub.title}
                                                </span>
                                                <span className="text-[11.5px] font-medium text-white/60 leading-snug mt-0.5">
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
                onClick={(e) => {
                    if (link.title === 'Contact Us' || link.title === 'సంప్రదించండి' || link.href === '#contact') {
                        e.preventDefault();
                        navigate(`/${currentMode}/contact-us`);
                    }
                }}
                className={`relative inline-flex items-center text-[13px] lg:text-[13.5px] xl:text-[14px] font-medium transition-colors duration-300 whitespace-nowrap py-1.5 group cursor-pointer ${
                    isScrolled ? 'text-white/90 hover:text-[#C99A2E]' : 'text-[#0B1D3A]/90 hover:text-[#C99A2E]'
                }`}
            >
                <span className="relative inline-block py-0.5">
                    {link.title}
                    <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-[#C99A2E] rounded-full transition-all duration-300 ease-out group-hover:w-full" />
                </span>
            </a>
        );
    };

    const RightControls = (
        <div className="flex items-center gap-2.5 lg:gap-3.5 shrink-0">
            <button
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                aria-label="Toggle search dialog"
                className={`flex items-center justify-center w-9 h-9 transition-all duration-200 cursor-pointer ${
                    isSearchExpanded
                        ? (isScrolled ? 'bg-white text-[#0B1D3A]' : 'bg-[#0B1D3A] text-white') + ' shadow-md rounded-full'
                        : (isScrolled ? 'text-white/75 hover:text-white hover:bg-white/10' : 'text-[#0B1D3A]/75 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.06]') + ` ${isScrolled ? 'rounded-full' : 'rounded'}`
                }`}
                title="Search platform"
            >
                {isSearchExpanded ? <X size={18} strokeWidth={2.5} /> : <Search size={19} strokeWidth={2} />}
            </button>

            <div className="relative" ref={langDropdownRef}>
                <button
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 text-[12.5px] font-semibold transition-all duration-200 cursor-pointer ${
                        isLangDropdownOpen
                            ? (isScrolled ? 'bg-white text-[#0B1D3A]' : 'bg-[#0B1D3A] text-white') + ' shadow-sm'
                            : (isScrolled ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-[#0B1D3A]/80 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.06]')
                    } ${isScrolled ? 'rounded-full' : 'rounded'}`}
                    title="Change language / భాషను మార్చండి"
                    aria-label="Change language"
                >
                    <Globe size={16} className={isLangDropdownOpen ? 'text-[#E2C068]' : (isScrolled ? 'text-white/70' : 'text-[#0B1D3A]/70')} />
                    <span className="text-[11.5px] font-bold uppercase tracking-wider">{language === 'te' ? 'తెలుగు' : 'EN'}</span>
                    <ChevronDown size={12} className={`transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180 text-[#E2C068]' : (isScrolled ? 'text-white/50' : 'text-[#0B1D3A]/50')}`} />
                </button>

                <AnimatePresence>
                    {isLangDropdownOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.96 }}
                            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className={`absolute top-[calc(100%+8px)] right-0 w-[170px] ${isScrolled ? 'bg-[#0B1D3A]/95 border-white/10' : 'bg-white/98 border-[#0B1D3A]/15'} backdrop-blur-xl border shadow-[0_14px_36px_-6px_rgba(11,29,58,0.2)] rounded p-1.5 z-50 pointer-events-auto`}
                        >
                            <div className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 ${isScrolled ? 'text-white/45' : 'text-[#0B1D3A]/45'}`}>
                                {language === 'te' ? 'భాషను ఎంచుకోండి' : 'Select Language'}
                            </div>
                            <button
                                onClick={() => { setLanguage('en'); setIsLangDropdownOpen(false); }}
                                className={`w-full flex items-center justify-between px-2.5 py-2 rounded text-[13px] transition-all cursor-pointer ${
                                    language === 'en'
                                        ? (isScrolled ? 'bg-white text-[#0B1D3A] font-bold' : 'bg-[#0B1D3A] text-white font-bold')
                                        : (isScrolled ? 'text-white hover:bg-white/10 font-medium' : 'text-[#0B1D3A] hover:bg-[#F0F4FA] font-medium')
                                }`}
                            >
                                <span className="flex items-center gap-2">
                                    <span className={`text-[10.5px] font-extrabold px-1.5 py-0.5 rounded ${language === 'en' ? (isScrolled ? 'bg-white/20 text-white' : 'bg-white/20 text-white') : (isScrolled ? 'bg-[#0B1D3A]/10 text-white' : 'bg-[#0B1D3A]/10 text-[#0B1D3A]')}`}>EN</span>
                                    <span>English</span>
                                </span>
                                {language === 'en' && <Check size={14} className="text-[#E2C068]" />}
                            </button>
                            <button
                                onClick={() => { setLanguage('te'); setIsLangDropdownOpen(false); }}
                                className={`w-full flex items-center justify-between px-2.5 py-2 rounded text-[13px] transition-all cursor-pointer mt-1 ${
                                    language === 'te'
                                        ? (isScrolled ? 'bg-white text-[#0B1D3A] font-bold' : 'bg-[#0B1D3A] text-white font-bold')
                                        : (isScrolled ? 'text-white hover:bg-white/10 font-medium' : 'text-[#0B1D3A] hover:bg-[#F0F4FA] font-medium')
                                }`}
                            >
                                <span className="flex items-center gap-2">
                                    <span className={`text-[10.5px] font-extrabold px-1.5 py-0.5 rounded ${language === 'te' ? 'bg-[#C99A2E]/30 text-[#E2C068]' : (isScrolled ? 'bg-[#0B1D3A]/10 text-white' : 'bg-[#0B1D3A]/10 text-[#0B1D3A]')}`}>TE</span>
                                    <span>తెలుగు</span>
                                </span>
                                {language === 'te' && <Check size={14} className="text-[#E2C068]" />}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className={`w-[1px] h-4 shrink-0 hidden sm:block ${isScrolled ? 'bg-white/20' : 'bg-[#0B1D3A]/10'}`}></div>

            <a
                href="#login"
                className={`text-[13.5px] font-medium px-1.5 py-1 transition-colors duration-300 shrink-0 hidden xl:inline-block ${isScrolled ? 'text-white hover:text-[#C99A2E]' : 'text-[#0B1D3A] hover:text-[#C99A2E]'}`}
            >
                Login
            </a>

            <button className={`text-[13px] lg:text-[13.5px] font-semibold px-4 lg:px-5 py-2 hover:shadow-[0_8px_24px_rgba(11,29,58,0.25),0_0_0_1px_rgba(201,154,46,0.2)] active:scale-[0.98] transition-all duration-300 shadow-[0_2px_8px_rgba(11,29,58,0.15)] flex items-center gap-1.5 shrink-0 cursor-pointer ${isScrolled ? 'bg-white text-[#0B1D3A] hover:bg-[#E2C068] rounded-full' : 'bg-[#0B1D3A] text-white hover:bg-[#102B63] rounded'}`}>
                <span>Get Started</span>
                <ArrowRight size={14} strokeWidth={2.5} />
            </button>
        </div>
    );

    return (
        <div className="w-full sticky top-0 z-50 pointer-events-auto">
            <div
                className={`w-full transition-all duration-300 ease-out ${
                    isScrolled
                        ? 'pt-2.5 pb-1 flex justify-center px-4 lg:px-6'
                        : 'py-0 w-full'
                }`}
            >
                <header
                    className={`transition-all duration-300 pointer-events-auto flex items-center justify-between relative ${
                        isScrolled
                            ? 'w-full max-w-[1320px] h-[58px] px-5 lg:px-7 bg-[#0B1D3A]/95 backdrop-blur-xl border border-white/10 shadow-[0_12px_32px_-10px_rgba(11,29,58,0.12),0_1px_3px_rgba(11,29,58,0.05)] rounded-full mx-auto'
                            : 'w-full h-[68px] px-8 lg:px-14 bg-white/90 backdrop-blur-md border-b border-[#0B1D3A]/[0.07] shadow-[0_2px_10px_-4px_rgba(11,29,58,0.04)] rounded-none'
                    }`}
                >
                    {isScrolled ? (
                        <>
                            <div className="hidden md:flex flex-1 items-center justify-start gap-3 lg:gap-4 xl:gap-6">
                                {data.navLinks.slice(0, 4).map((link, idx) => renderNavLink(link, idx))}
                            </div>

                            <div className="flex items-center justify-center shrink-0 px-2 lg:px-5">
                                {LogoElement}
                            </div>

                            <div className="flex-1 flex items-center justify-end gap-2.5 lg:gap-3.5 xl:gap-5">
                                <div className="hidden lg:flex items-center gap-3 lg:gap-4 xl:gap-6 mr-1">
                                    {data.navLinks.slice(4).map((link, idx) => renderNavLink(link, idx + 4))}
                                </div>
                                {RightControls}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center shrink-0">
                                {LogoElement}
                            </div>

                            <nav className="hidden md:flex items-center justify-center flex-1 mx-3 lg:mx-6 gap-5 lg:gap-7 xl:gap-8">
                                {data.navLinks.map((link, idx) => renderNavLink(link, idx))}
                            </nav>

                            {RightControls}
                        </>
                    )}

                    <AnimatePresence>
                        {isSearchExpanded && (
                            <motion.div
                                initial={{ opacity: 0, y: -12, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className={`absolute top-[calc(100%+10px)] right-4 lg:right-10 w-[420px] max-w-[90vw] ${isScrolled ? 'bg-[#0B1D3A]/95 border-white/10' : 'bg-white/98 border-[#0B1D3A]/15'} backdrop-blur-2xl border shadow-[0_20px_50px_-10px_rgba(11,29,58,0.22)] p-4 z-50 pointer-events-auto rounded`}
                            >
                                <div className={`flex items-center gap-3 ${isScrolled ? 'bg-[#040C1E] border-white/10' : 'bg-[#F8FAFD] border-[#0B1D3A]/15'} border focus-within:border-[#C99A2E] focus-within:ring-2 focus-within:ring-[#C99A2E]/20 px-3.5 py-2.5 rounded transition-all shadow-inner`}>
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
                                        className={`bg-transparent text-[14px] ${isScrolled ? 'text-white' : 'text-[#0B1D3A]'} placeholder-[#0B1D3A]/40 outline-none w-full font-medium`}
                                    />
                                    <button
                                        onClick={() => {
                                            if (searchQuery) setSearchQuery('');
                                            else setIsSearchExpanded(false);
                                        }}
                                        aria-label="Close search"
                                        className={`${isScrolled ? 'text-white/40 hover:text-white hover:bg-white/10' : 'text-[#0B1D3A]/40 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/10'} p-1 rounded-full transition-colors cursor-pointer shrink-0`}
                                    >
                                        <X size={15} strokeWidth={2.5} />
                                    </button>
                                </div>

                                <div className={`mt-3.5 pt-3 border-t ${isScrolled ? 'border-white/10' : 'border-[#0B1D3A]/[0.07]'}`}>
                                    <div className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${isScrolled ? 'text-white/50' : 'text-[#0B1D3A]/50'}`}>Popular Searches</div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {['RERA Compliance', 'Negotiation Labs', 'Capability Diagnostic', 'Peer Benchmarks'].map((tag, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSearchQuery(tag)}
                                                className={`text-[11.5px] font-medium bg-[#0B1D3A]/[0.04] px-2.5 py-1 rounded transition-colors cursor-pointer ${isScrolled ? 'text-white/75 hover:bg-[#C99A2E]/15 hover:text-white' : 'text-[#0B1D3A]/75 hover:bg-[#C99A2E]/15 hover:text-[#0B1D3A]'}`}
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

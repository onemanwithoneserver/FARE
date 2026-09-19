import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Search, ArrowRight, Plus, Building2, MapPin, Globe, Check } from 'lucide-react';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { getData } from './data';

export default function Mobile() {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobileMode = location.pathname.startsWith('/mobile');
    const currentMode = isMobileMode ? 'mobile' : 'desktop';
    const { language, setLanguage } = useLanguage();
    const data = getData(language);

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

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

        document.addEventListener('scroll', handleScroll, { capture: true, passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            document.removeEventListener('scroll', handleScroll, { capture: true });
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-full sticky top-0 z-40 pointer-events-auto">
            <div 
                className={`w-full transition-all duration-300 ${
                    isScrolled 
                        ? 'pt-2 pb-1 flex justify-center px-3.5' 
                        : 'py-0 w-full'
                }`}
            >
                <header 
                    className={`transition-all duration-300 pointer-events-auto flex items-center justify-between relative ${
                        isScrolled
                            ? 'w-full h-[48px] px-5 bg-white/95 backdrop-blur-xl border border-white/90 shadow-[0_8px_24px_-8px_rgba(11,29,58,0.14)] rounded-full'
                            : 'w-full h-[60px] px-5 bg-white/90 backdrop-blur-md border-b border-[#0B1D3A]/[0.06] shadow-[0_2px_10px_-4px_rgba(11,29,58,0.04)] rounded-none'
                    }`}
                >
                    <div 
                        onClick={() => navigate(`/${currentMode}/home`)}
                        className="flex items-center cursor-pointer py-0 shrink-0"
                    >
                        <img
                            src={logo}
                            alt="FARE — Skill Enhancement for Real Estate"
                            className={`w-auto max-w-none transition-all duration-300 ${
                                isScrolled ? 'h-[56px] my-[-4px]' : 'h-[72px] my-[-6px]'
                            }`}
                        />
                    </div>

                    <div className="flex items-center gap-1.5">
                        {/* Globe Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setIsLangDropdownOpen(!isLangDropdownOpen);
                                    if (isSearchExpanded) setIsSearchExpanded(false);
                                }}
                                aria-label="Change language"
                                title="Change language / భాషను మార్చండి"
                                className={`px-2 py-1.5 text-[#0B1D3A]/80 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.05] transition-colors flex items-center gap-1 cursor-pointer ${
                                    isLangDropdownOpen 
                                        ? 'bg-[#0B1D3A] text-white shadow-xs rounded-[4px]' 
                                        : (isScrolled ? 'rounded-full' : 'rounded-[4px]')
                                }`}
                            >
                                <Globe size={16} className={isLangDropdownOpen ? 'text-[#E2C068]' : 'text-[#0B1D3A]/70'} />
                                <span className="text-[11px] font-bold uppercase">{language === 'te' ? 'తెలుగు' : 'EN'}</span>
                            </button>

                            <AnimatePresence>
                                {isLangDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-[calc(100%+8px)] right-0 w-[155px] bg-white/98 backdrop-blur-xl border border-[#0B1D3A]/15 shadow-[0_14px_36px_-6px_rgba(11,29,58,0.2)] rounded-xl p-1.5 z-50 pointer-events-auto"
                                    >
                                        <div className="text-[9.5px] font-bold uppercase tracking-wider text-[#0B1D3A]/45 px-2 py-1">
                                            {language === 'te' ? 'భాషను ఎంచుకోండి' : 'Select Language'}
                                        </div>
                                        <button
                                            onClick={() => { setLanguage('en'); setIsLangDropdownOpen(false); }}
                                            className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-[12.5px] transition-all cursor-pointer ${
                                                language === 'en' 
                                                    ? 'bg-[#0B1D3A] text-white font-bold' 
                                                    : 'text-[#0B1D3A] hover:bg-[#F0F4FA] font-medium'
                                            }`}
                                        >
                                            <span className="flex items-center gap-2">
                                                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${language === 'en' ? 'bg-white/20 text-white' : 'bg-[#0B1D3A]/10 text-[#0B1D3A]'}`}>EN</span>
                                                <span>English</span>
                                            </span>
                                            {language === 'en' && <Check size={13} className="text-[#E2C068]" />}
                                        </button>
                                        <button
                                            onClick={() => { setLanguage('te'); setIsLangDropdownOpen(false); }}
                                            className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-[12.5px] transition-all cursor-pointer mt-1 ${
                                                language === 'te' 
                                                    ? 'bg-[#0B1D3A] text-white font-bold' 
                                                    : 'text-[#0B1D3A] hover:bg-[#F0F4FA] font-medium'
                                            }`}
                                        >
                                            <span className="flex items-center gap-2">
                                                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${language === 'te' ? 'bg-[#C99A2E]/30 text-[#E2C068]' : 'bg-[#0B1D3A]/10 text-[#0B1D3A]'}`}>TE</span>
                                                <span>తెలుగు</span>
                                            </span>
                                            {language === 'te' && <Check size={13} className="text-[#E2C068]" />}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={() => {
                                setIsSearchExpanded(!isSearchExpanded);
                                if (isOpen) setIsOpen(false);
                            }}
                            aria-label="Search"
                            className={`p-1.5 text-[#0B1D3A]/75 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.04] transition-colors ${isScrolled ? 'rounded-full' : 'rounded-[4px]'}`}
                        >
                            <Search size={18} strokeWidth={2} />
                        </button>

                        <button
                            onClick={() => {
                                setIsOpen(!isOpen);
                                if (isSearchExpanded) setIsSearchExpanded(false);
                            }}
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            className={`p-2 text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.04] transition-colors duration-200 cursor-pointer ${isScrolled ? 'rounded-full' : 'rounded-[4px]'}`}
                        >
                            {isOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
                        </button>
                    </div>

                    <AnimatePresence>
                        {isSearchExpanded && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-[70px] left-3 right-3 bg-white/98 backdrop-blur-xl border border-white/80 shadow-[0_16px_36px_-10px_rgba(11,29,58,0.18)] rounded-[4px] p-3 z-50 pointer-events-auto flex items-center gap-2"
                            >
                                <Search size={16} className="text-[#0B1D3A]/50 shrink-0" />
                                <input
                                    type="text"
                                    autoFocus
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search courses, skills..."
                                    className="bg-transparent text-[13.5px] text-[#0B1D3A] placeholder-[#0B1D3A]/40 outline-none w-full"
                                />
                                <button
                                    onClick={() => {
                                        setIsSearchExpanded(false);
                                        setSearchQuery('');
                                    }}
                                    className="p-1 text-[#0B1D3A]/50 hover:text-[#0B1D3A] rounded-[2px]"
                                >
                                    <X size={16} />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-[70px] left-3 right-3 bg-white/98 backdrop-blur-xl border border-white/80 shadow-[0_20px_40px_-10px_rgba(11,29,58,0.16)] rounded-[4px] flex flex-col p-6 gap-5 z-50 pointer-events-auto"
                            >
                                <nav className="flex flex-col gap-3">
                                    {data.navLinks.map((link, idx) => {
                                        const hasSubItems = link.subItems && link.subItems.length > 0;
                                        const isSubOpen = openSubMenu === link.title;

                                        if (hasSubItems) {
                                            return (
                                                <div key={idx} className="flex flex-col border-b border-[#0B1D3A]/[0.06] pb-2">
                                                    <button
                                                        onClick={() => setOpenSubMenu(isSubOpen ? null : link.title)}
                                                        className="flex items-center justify-between text-[15px] font-bold text-[#0B1D3A] hover:text-[#C99A2E] transition-colors py-2 w-full text-left cursor-pointer"
                                                    >
                                                        <span>{link.title}</span>
                                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                            isSubOpen ? 'bg-[#0B1D3A] text-[#E2C068]' : 'bg-[#0B1D3A]/[0.06] text-[#0B1D3A]'
                                                        }`}>
                                                            <Plus
                                                                size={16}
                                                                strokeWidth={2.5}
                                                                className={`transition-transform duration-300 ${isSubOpen ? 'rotate-45' : ''}`}
                                                            />
                                                        </div>
                                                    </button>

                                                    <AnimatePresence>
                                                        {isSubOpen && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: 'auto' }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                                                className="overflow-hidden flex flex-col gap-2 pt-2 pb-1"
                                                            >
                                                                {link.subItems?.map((sub, sIdx) => (
                                                                    <a
                                                                        key={sIdx}
                                                                        href={sub.href}
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            setIsOpen(false);
                                                                            if (sub.title === 'Open Plots' || sub.href === '#open-plots') {
                                                                                navigate(`/${currentMode}/open-plots`);
                                                                            } else {
                                                                                navigate(`/${currentMode}/home`);
                                                                            }
                                                                        }}
                                                                        className="flex items-start gap-3 p-3 rounded-lg bg-[#F8FAFD] border border-[#0B1D3A]/[0.08] hover:border-[#C99A2E]/50 hover:bg-[#F0F4FA] transition-all cursor-pointer group"
                                                                    >
                                                                        <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 shadow-sm ${
                                                                            sIdx === 0 
                                                                                ? 'bg-gradient-to-br from-[#0B1D3A] to-[#102B63] text-[#E2C068]' 
                                                                                : 'bg-gradient-to-br from-[#071A49] to-[#0F2D6B] text-[#34D399]'
                                                                        }`}>
                                                                            {sIdx === 0 ? <Building2 size={18} strokeWidth={2} /> : <MapPin size={18} strokeWidth={2} />}
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <span className="text-[14px] font-bold text-[#0B1D3A] group-hover:text-[#C99A2E] transition-colors">
                                                                                {sub.title}
                                                                            </span>
                                                                            <span className="text-[12px] text-[#0B1D3A]/60 font-medium leading-relaxed mt-0.5">
                                                                                {sub.desc}
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                ))}
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
                                                onClick={() => setIsOpen(false)}
                                                className="text-[15px] font-semibold text-[#0B1D3A] hover:text-[#C99A2E] transition-colors py-2 border-b border-[#0B1D3A]/[0.06]"
                                            >
                                                {link.title}
                                            </a>
                                        );
                                    })}
                                </nav>

                                <div className="h-[1px] w-full bg-[#0B1D3A]/[0.06]"></div>

                                <div className="flex flex-col gap-3.5">
                                    <div className="flex items-center gap-2 bg-[#F8FAFD] border border-[#0B1D3A]/[0.08] rounded-[4px] px-3 py-2 text-[#0B1D3A]">
                                        <Search size={16} className="text-[#0B1D3A]/50" />
                                        <input
                                            type="text"
                                            placeholder="Search platform..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="bg-transparent text-[13px] text-[#0B1D3A] placeholder-[#0B1D3A]/40 outline-none w-full"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between pt-1">
                                        <a
                                            href="#login"
                                            onClick={() => setIsOpen(false)}
                                            className="text-[14px] font-semibold text-[#0B1D3A] hover:text-[#C99A2E]"
                                        >
                                            Login
                                        </a>
                                        <button 
                                            onClick={() => setIsOpen(false)}
                                            className="bg-[#0B1D3A] text-white text-[13px] font-semibold px-5 py-2 rounded-[4px] shadow-sm flex items-center gap-1.5"
                                        >
                                            Get Started <ArrowRight size={13} />
                                        </button>
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

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

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentRoute = pathSegments[1] || 'home';

    const getRouteForHref = (href: string, title?: string): string => {
        if (href === '#') return '#';
        if (href === 'home' || href === '#platform') return 'home';
        if (href === 'open-plots' || href === '#open-plots') return 'open-plots';
        if (href === 're-companies' || href === '#for-companies' || href === '#residential-commercial') return 're-companies';
        if (href === 're-trainers-coaches' || href === '#for-trainers') return 're-trainers-coaches';
        if (href === 'contact-us' || href === '#contact') return 'contact-us';
        
        if (title === 'Trainer Directory' || title === 'ట్రైనర్ డైరెక్టరీ') return '#';
        if (title === 'About' || title === 'మా గురించి') return '#';
        if (title === 'Contact Us' || title === 'సంప్రదించండి') return 'contact-us';
        if (title === 'For Trainers' || title === 'ట్రైనర్ల కోసం') return 're-trainers-coaches';
        if (title === 'For Companies' || title === 'కంపెనీల కోసం' || title === 'Residential & Commercial' || title === 'రెసిడెన్షియల్ & కమర్షియల్') return 're-companies';
        if (title === 'Open Plots' || title === 'ఓపెన్ ప్లాట్స్') return 'open-plots';
        if (title === 'Platform' || title === 'ప్లాట్‌ఫారమ్') return 'home';

        return href.replace('#', '') || 'home';
    };

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
        <div className="w-full sticky top-0 z-50 pointer-events-auto">
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
                            ? 'w-full h-[48px] px-5 bg-[#0B1D3A]/95 backdrop-blur-xl border border-white/10 shadow-[0_8px_24px_-8px_rgba(11,29,58,0.14)] rounded-full'
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
                            className={`w-auto max-w-none transition-all duration-300 ${isScrolled ? 'brightness-0 invert' : ''} ${
                                isScrolled ? 'h-[56px] my-[-4px]' : 'h-[72px] my-[-6px]'
                            }`}
                        />
                    </div>

                    <div className="flex items-center gap-1.5">
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setIsLangDropdownOpen(!isLangDropdownOpen);
                                    if (isSearchExpanded) setIsSearchExpanded(false);
                                }}
                                aria-label="Change language"
                                title="Change language / భాషను మార్చండి"
                                className={`px-2 py-1.5 transition-colors flex items-center gap-1 cursor-pointer ${isScrolled ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-[#0B1D3A]/80 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.05]'} ${
                                    isLangDropdownOpen
                                        ? (isScrolled ? 'bg-white text-[#0B1D3A]' : 'bg-[#0B1D3A] text-white') + ' shadow-xs rounded'
                                        : (isScrolled ? 'rounded-full' : 'rounded')
                                }`}
                            >
                                <Globe size={16} className={isLangDropdownOpen ? 'text-[#E2C068]' : (isScrolled ? 'text-white/70' : 'text-[#0B1D3A]/70')} />
                                <span className="text-[11px] font-bold uppercase">{language === 'te' ? 'తెలుగు' : 'EN'}</span>
                            </button>

                            <AnimatePresence>
                                {isLangDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        className={`absolute top-[calc(100%+8px)] right-0 w-[155px] ${isScrolled ? 'bg-[#0B1D3A]/95 border-white/10' : 'bg-white/98 border-[#0B1D3A]/15'} backdrop-blur-xl border shadow-[0_14px_36px_-6px_rgba(11,29,58,0.2)] rounded p-1.5 z-50 pointer-events-auto`}
                                    >
                                        <div className={`text-[9.5px] font-bold uppercase tracking-wider px-2 py-1 ${isScrolled ? 'text-white/70' : 'text-[#0B1D3A]/70'}`}>
                                            {language === 'te' ? 'భాషను ఎంచుకోండి' : 'Select Language'}
                                        </div>
                                        <button
                                            onClick={() => { setLanguage('en'); setIsLangDropdownOpen(false); }}
                                            className={`w-full flex items-center justify-between px-2.5 py-2 rounded text-[12.5px] transition-all cursor-pointer ${
                                                language === 'en'
                                                    ? (isScrolled ? 'bg-white text-[#0B1D3A] font-bold shadow-xs' : 'bg-[#0B1D3A] text-white font-bold shadow-xs')
                                                    : (isScrolled ? 'text-white/90 hover:bg-white/10 font-medium' : 'text-[#0B1D3A] hover:bg-[#F0F4FA] font-medium')
                                            }`}
                                        >
                                            <span className="flex items-center gap-2">
                                                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                                                    language === 'en'
                                                        ? (isScrolled ? 'bg-[#0B1D3A] text-white' : 'bg-white/20 text-white')
                                                        : (isScrolled ? 'bg-white/15 text-white' : 'bg-[#0B1D3A]/10 text-[#0B1D3A]')
                                                }`}>
                                                    EN
                                                </span>
                                                <span>English</span>
                                            </span>
                                            {language === 'en' && (
                                                <Check size={13} strokeWidth={2.5} className={isScrolled ? 'text-[#0B1D3A]' : 'text-[#E2C068]'} />
                                            )}
                                        </button>
                                        <button
                                            onClick={() => { setLanguage('te'); setIsLangDropdownOpen(false); }}
                                            className={`w-full flex items-center justify-between px-2.5 py-2 rounded text-[12.5px] transition-all cursor-pointer mt-1 ${
                                                language === 'te'
                                                    ? (isScrolled ? 'bg-white text-[#0B1D3A] font-bold shadow-xs' : 'bg-[#0B1D3A] text-white font-bold shadow-xs')
                                                    : (isScrolled ? 'text-white/90 hover:bg-white/10 font-medium' : 'text-[#0B1D3A] hover:bg-[#F0F4FA] font-medium')
                                            }`}
                                        >
                                            <span className="flex items-center gap-2">
                                                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                                                    language === 'te'
                                                        ? (isScrolled ? 'bg-[#0B1D3A] text-white' : 'bg-white/20 text-white')
                                                        : (isScrolled ? 'bg-white/15 text-white' : 'bg-[#0B1D3A]/10 text-[#0B1D3A]')
                                                }`}>
                                                    TE
                                                </span>
                                                <span>తెలుగు</span>
                                            </span>
                                            {language === 'te' && (
                                                <Check size={13} strokeWidth={2.5} className={isScrolled ? 'text-[#0B1D3A]' : 'text-[#E2C068]'} />
                                            )}
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
                            className={`p-1.5 transition-colors ${isScrolled ? 'text-white/75 hover:text-white hover:bg-white/10 rounded-full' : 'text-[#0B1D3A]/75 hover:text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.04] rounded'}`}
                        >
                            <Search size={18} strokeWidth={2} />
                        </button>

                        <button
                            onClick={() => {
                                setIsOpen(!isOpen);
                                if (isSearchExpanded) setIsSearchExpanded(false);
                            }}
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            className={`p-2 transition-colors duration-200 cursor-pointer ${isScrolled ? 'text-white hover:bg-white/10 rounded-full' : 'text-[#0B1D3A] hover:bg-[#0B1D3A]/[0.04] rounded'}`}
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
                                className={`absolute top-[70px] left-3 right-3 ${isScrolled ? 'bg-[#0B1D3A]/95 border-white/80' : 'bg-white/98 border-[#0B1D3A]/15'} backdrop-blur-xl border shadow-[0_16px_36px_-10px_rgba(11,29,58,0.18)] rounded p-3 z-50 pointer-events-auto flex items-center gap-2`}
                            >
                                <Search size={16} className={`${isScrolled ? 'text-white/50' : 'text-[#0B1D3A]/50'} shrink-0`} />
                                <input
                                    type="text"
                                    autoFocus
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search courses, skills..."
                                    className={`bg-transparent text-[13.5px] ${isScrolled ? 'text-white' : 'text-[#0B1D3A]'} placeholder-[#0B1D3A]/40 outline-none w-full`}
                                />
                                <button
                                    onClick={() => {
                                        setIsSearchExpanded(false);
                                        setSearchQuery('');
                                    }}
                                    className={`p-1 rounded-sm ${isScrolled ? 'text-white/50 hover:text-white' : 'text-[#0B1D3A]/50 hover:text-[#0B1D3A]'}`}
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
                                className={`absolute top-[70px] left-3 right-3 ${isScrolled ? 'bg-[#0B1D3A]/95 border-white/80' : 'bg-white/98 border-[#0B1D3A]/15'} backdrop-blur-xl border shadow-[0_20px_40px_-10px_rgba(11,29,58,0.16)] rounded flex flex-col p-6 gap-5 z-50 pointer-events-auto`}
                            >
                                <nav className="flex flex-col gap-3">
                                    {data.navLinks.map((link, idx) => {
                                        const hasSubItems = link.subItems && link.subItems.length > 0;
                                        const isSubOpen = openSubMenu === link.title;
                                        const targetRoute = getRouteForHref(link.href, link.title);
                                        const isActive = !hasSubItems 
                                            ? currentRoute === targetRoute
                                            : (currentRoute === 're-companies' || currentRoute === 'open-plots');

                                        if (hasSubItems) {
                                            return (
                                                <div key={idx} className="flex flex-col border-b border-[#0B1D3A]/[0.06] pb-2">
                                                    <button
                                                        onClick={() => setOpenSubMenu(isSubOpen ? null : link.title)}
                                                        className={`flex items-center justify-between text-[15px] font-bold py-2 w-full text-left cursor-pointer transition-colors ${
                                                            isActive
                                                                ? 'text-[#C99A2E]'
                                                                : (isScrolled ? 'text-white hover:text-[#C99A2E]' : 'text-[#0B1D3A] hover:text-[#C99A2E]')
                                                        }`}
                                                    >
                                                        <span>{link.title}</span>
                                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                            isSubOpen ? 'bg-[#0B1D3A] text-[#E2C068]' : (isScrolled ? 'bg-[#0B1D3A]/[0.06] text-white' : 'bg-[#0B1D3A]/[0.06] text-[#0B1D3A]')
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
                                                                {link.subItems?.map((sub, sIdx) => {
                                                                    const subRoute = getRouteForHref(sub.href, sub.title);
                                                                    const isSubActive = currentRoute === subRoute;
                                                                    return (
                                                                        <a
                                                                            key={sIdx}
                                                                            href={`#${subRoute}`}
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                setIsOpen(false);
                                                                                navigate(`/${currentMode}/${subRoute}`);
                                                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                                                            }}
                                                                            className={`flex items-start gap-3 p-3 rounded ${
                                                                                isSubActive
                                                                                    ? (isScrolled ? 'bg-white/15 border-[#C99A2E]' : 'bg-[#C99A2E]/10 border-[#C99A2E]')
                                                                                    : (isScrolled ? 'bg-[#040C1E] border-[#0B1D3A]/[0.08] hover:bg-white/10' : 'bg-[#F8FAFD] border-[#0B1D3A]/[0.08] hover:bg-[#F0F4FA]')
                                                                            } border transition-all cursor-pointer group`}
                                                                        >
                                                                            <div className={`p-2.5 rounded shrink-0 mt-0.5 shadow-sm ${
                                                                                sIdx === 0
                                                                                    ? 'bg-gradient-to-br from-[#0B1D3A] to-[#102B63] text-[#E2C068]'
                                                                                    : 'bg-gradient-to-br from-[#071A49] to-[#0F2D6B] text-[#34D399]'
                                                                            }`}>
                                                                                {sIdx === 0 ? <Building2 size={18} strokeWidth={2} /> : <MapPin size={18} strokeWidth={2} />}
                                                                            </div>
                                                                            <div className="flex flex-col">
                                                                                <span className={`text-[14px] font-bold transition-colors ${
                                                                                    isSubActive ? 'text-[#C99A2E]' : (isScrolled ? 'text-white' : 'text-[#0B1D3A]')
                                                                                }`}>
                                                                                    {sub.title}
                                                                                </span>
                                                                                <span className={`text-[12px] font-medium leading-relaxed mt-0.5 ${isScrolled ? 'text-white/60' : 'text-[#0B1D3A]/60'}`}>
                                                                                    {sub.desc}
                                                                                </span>
                                                                            </div>
                                                                        </a>
                                                                    );
                                                                })}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        }

                                        return (
                                            <a
                                                key={idx}
                                                href={`#${targetRoute}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIsOpen(false);
                                                    navigate(`/${currentMode}/${targetRoute}`);
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className={`text-[15px] font-semibold transition-colors py-2 border-b border-[#0B1D3A]/[0.06] ${
                                                    isActive 
                                                        ? 'text-[#C99A2E] font-bold' 
                                                        : (isScrolled ? 'text-white hover:text-[#C99A2E]' : 'text-[#0B1D3A] hover:text-[#C99A2E]')
                                                }`}
                                            >
                                                {link.title}
                                            </a>
                                        );
                                    })}
                                </nav>

                                <div className="h-[1px] w-full bg-[#0B1D3A]/[0.06]"></div>

                                <div className="flex flex-col gap-3.5">
                                    <div className={`flex items-center gap-2 ${isScrolled ? 'bg-[#040C1E] border-[#0B1D3A]/[0.08]' : 'bg-[#F8FAFD] border-[#0B1D3A]/[0.15]'} border rounded px-3 py-2`}>
                                        <Search size={16} className={isScrolled ? 'text-white/50' : 'text-[#0B1D3A]/50'} />
                                        <input
                                            type="text"
                                            placeholder="Search platform..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className={`bg-transparent text-[13px] ${isScrolled ? 'text-white placeholder-[#0B1D3A]/40' : 'text-[#0B1D3A] placeholder-[#0B1D3A]/40'} outline-none w-full`}
                                        />
                                    </div>

                                    <div className="flex items-center justify-between pt-1">
                                        <a
                                            href="#login"
                                            onClick={() => setIsOpen(false)}
                                            className={`text-[14px] font-semibold hover:text-[#C99A2E] ${isScrolled ? 'text-white' : 'text-[#0B1D3A]'}`}
                                        >
                                            Login
                                        </a>
                                        <button
                                            onClick={() => {
                                                setIsOpen(false);
                                                navigate(`/${currentMode}/contact-us`);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className={`${isScrolled ? 'bg-white text-[#0B1D3A]' : 'bg-[#0B1D3A] text-white'} text-[13px] font-semibold px-5 py-2 rounded shadow-sm flex items-center gap-1.5 cursor-pointer`}
                                        >
                                            <span>{language === 'te' ? 'ప్రారంభించండి' : 'Get Started'}</span>
                                            <ArrowRight size={13} />
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

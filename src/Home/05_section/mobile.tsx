import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Mobile() {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobileMode = location.pathname.startsWith('/mobile');
    const currentMode = isMobileMode ? 'mobile' : 'desktop';
    const { language } = useLanguage();
    const data = getData(language);

    // Logic: Identify active selected path. For 'home', no control is selected (returns null).
    const getActiveNavPath = (pathname: string): string | null => {
        const pathSegments = pathname.split('/').filter(Boolean);
        const currentRoute = pathSegments[1] || 'home';

        if (currentRoute === 'home' || currentRoute === '') {
            return null; // In Home, NO control should be selected
        }
        if (currentRoute === 're-trainers-coaches') return 're-trainers-coaches';
        if (currentRoute === 're-companies') return 're-companies';
        if (currentRoute === 'open-plots') return 'open-plots';
        return currentRoute;
    };

    const activeNavPath = getActiveNavPath(location.pathname);

    const handleNavigation = (path?: string) => {
        if (!path) return;
        navigate(`/${currentMode}/${path}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 12 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.03 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 6 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <footer 
            className="w-full text-white py-6 px-5 font-['Outfit'] relative overflow-hidden" 
            style={{ 
                background: 'linear-gradient(180deg, #040C1E 0%, #030816 100%)', 
                borderTop: '1px solid rgba(255, 255, 255, 0.07)' 
            }}
        >
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[100px] bg-[#C99A2E]/[0.03] rounded-full blur-[50px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-30" />

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="w-full mx-auto flex flex-col items-center relative z-10 gap-5"
            >
                {/* Logo & Copyright */}
                <motion.div 
                    variants={itemVariants}
                    onClick={() => handleNavigation('home')}
                    className="flex flex-col items-center gap-2 cursor-pointer shrink-0 group"
                >
                    <motion.img 
                        src={logo} 
                        alt="FARE Logo" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="h-[36px] w-auto brightness-0 invert opacity-90 transition-transform duration-300" 
                    />
                    <span className="text-[11px] font-medium text-white/45 text-center select-none">
                        {data.copyright.replace('{year}', new Date().getFullYear().toString())}
                    </span>
                </motion.div>

                {/* Nav Links with active route highlighting and tap/hover feedback */}
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-x-2 gap-y-2 w-full max-w-[340px]"
                >
                    {data.navLinks.map((link, idx) => {
                        const isSelected = activeNavPath !== null && link.path === activeNavPath;

                        return (
                            <motion.button 
                                key={idx}
                                onClick={() => handleNavigation(link.path)}
                                whileHover={{ scale: 1.04, y: -1 }}
                                whileTap={{ scale: 0.94 }}
                                className={`relative group text-[11.5px] font-medium transition-all duration-300 py-1.5 px-3 rounded-md cursor-pointer flex items-center gap-1.5 ${
                                    isSelected
                                        ? 'text-[#E2C068] font-bold bg-[#E2C068]/14 border border-[#E2C068]/30 shadow-[0_0_10px_rgba(226,192,104,0.14)]'
                                        : 'text-white/60 hover:text-[#E2C068] hover:bg-white/[0.06] active:bg-white/[0.08]'
                                }`}
                            >
                                {isSelected ? (
                                    <motion.span
                                        layoutId="activeFooterLinkMobile"
                                        className="w-1.5 h-1.5 rounded-full bg-[#E2C068] shadow-[0_0_6px_#E2C068]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                    />
                                ) : (
                                    <span className="absolute bottom-1 left-2.5 right-2.5 h-[1px] bg-[#E2C068] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center opacity-70" />
                                )}
                                <span className="relative z-10 transition-colors duration-200">
                                    {link.label}
                                </span>
                            </motion.button>
                        );
                    })}
                </motion.div>
            </motion.div>
        </footer>
    );
}

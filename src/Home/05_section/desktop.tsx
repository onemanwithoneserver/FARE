import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';

export default function Desktop() {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobileMode = location.pathname.startsWith('/mobile');
    const currentMode = isMobileMode ? 'mobile' : 'desktop';
    const { language } = useLanguage();
    const data = getData(language);

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentPath = pathSegments[1] || 'home';

    const handleNavigation = (path?: string) => {
        if (!path) return;
        navigate(`/${currentMode}/${path}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.04 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 8 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <footer 
            className="w-full text-white py-3.5 px-8 lg:px-12 font-['Outfit'] relative overflow-hidden" 
            style={{ 
                background: 'linear-gradient(180deg, #040C1E 0%, #030816 100%)', 
                borderTop: '1px solid rgba(255, 255, 255, 0.07)' 
            }}
        >
            {/* Subtle ambient lighting */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[100px] bg-[#C99A2E]/[0.03] rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[100px] bg-[#3B82F6]/[0.03] rounded-full blur-[60px] pointer-events-none" />

            {/* Grid background texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="max-w-[1320px] w-full mx-auto flex justify-between items-center relative z-10 gap-4 min-h-[52px]"
            >
                {/* Logo & Copyright */}
                <motion.div 
                    variants={itemVariants}
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-6 cursor-pointer shrink-0 group"
                >
                    <motion.img 
                        src={logo} 
                        alt="FARE Logo" 
                        whileHover={{ scale: 1.04, opacity: 1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="h-[42px] w-auto brightness-0 invert opacity-90 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(255,255,255,0.05)]" 
                    />
                    <span className="text-[12px] font-medium text-white/45 hidden sm:inline-block border-l border-white/10 pl-6 select-none">
                        {data.copyright.replace('{year}', new Date().getFullYear().toString())}
                    </span>
                </motion.div>

                {/* Nav Links with active page detection */}
                <motion.div 
                    variants={itemVariants}
                    className="flex items-center gap-4 lg:gap-6 flex-wrap justify-end"
                >
                    {data.navLinks.map((link, idx) => {
                        const isActive = link.path === currentPath;

                        return (
                            <motion.button 
                                key={idx}
                                onClick={() => handleNavigation(link.path)}
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.96 }}
                                className={`relative text-[12.5px] font-medium transition-all duration-300 py-1 px-2 rounded-md cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                                    isActive
                                        ? 'text-[#E2C068] font-semibold bg-[#E2C068]/10 shadow-[0_0_12px_rgba(226,192,104,0.15)] border border-[#E2C068]/25'
                                        : 'text-white/60 hover:text-[#E2C068] hover:bg-white/[0.04]'
                                }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="activeFooterLinkDesktop"
                                        className="w-1.5 h-1.5 rounded-full bg-[#E2C068] shadow-[0_0_6px_#E2C068]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                                <span>{link.label}</span>
                                {!isActive && (
                                    <span className="absolute bottom-0.5 left-2 right-2 h-[1px] bg-[#E2C068] scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
                                )}
                            </motion.button>
                        );
                    })}
                </motion.div>
            </motion.div>
        </footer>
    );
}

import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { getData } from './data';

export default function Desktop() {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobileMode = location.pathname.startsWith('/mobile');
    const currentMode = isMobileMode ? 'mobile' : 'desktop';
    const { language } = useLanguage();
    const data = getData(language);

    const handleNavigation = (path?: string) => {
        if (!path) return;
        navigate(`/${currentMode}/${path}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.footer
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-white py-2.5 px-8 lg:px-12 font-['Outfit'] relative overflow-hidden"
            style={{ 
                background: 'linear-gradient(180deg, #071A49 0%, #030D26 100%)', 
                borderTop: '1px solid rgba(255, 255, 255, 0.08)' 
            }}
        >
            <div className="max-w-[1300px] w-full mx-auto flex justify-between items-center relative z-10 min-h-[50px] gap-4">
                <motion.div 
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center gap-4 cursor-pointer shrink-0"
                    onClick={() => handleNavigation('home')}
                >
                    <img src={logo} alt="FARE Logo" className="h-[44px] w-auto brightness-0 invert opacity-95 transition-transform duration-300 hover:scale-[1.02]" />
                    <span className="text-[12px] font-medium text-white/80 hidden sm:inline-block">
                        {data.copyright.replace('{year}', new Date().getFullYear().toString())}
                    </span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex items-center gap-3.5 lg:gap-6 flex-wrap justify-end"
                >
                    {data.links.map((link, i) => (
                        <motion.button
                            key={i}
                            onClick={() => handleNavigation(link.path)}
                            whileHover={{ y: -1 }}
                            className="text-[12px] font-medium text-white/85 hover:text-[#E2C068] transition-all duration-200 border-b border-dotted border-white/30 hover:border-[#E2C068] pb-[1px] cursor-pointer whitespace-nowrap"
                        >
                            {link.label}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </motion.footer>
    );
}

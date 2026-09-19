import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { getData } from './data';

export default function Mobile() {
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
            transition={{ duration: 0.5 }}
            className="w-full text-white py-3.5 px-4 font-['Outfit'] relative overflow-hidden"
            style={{ 
                background: 'linear-gradient(180deg, #071A49 0%, #030D26 100%)', 
                borderTop: '1px solid rgba(255, 255, 255, 0.08)' 
            }}
        >
            <div className="w-full max-w-[460px] mx-auto flex flex-col gap-3 relative z-10 text-left">
                <div 
                    className="flex flex-wrap items-center gap-2.5 cursor-pointer"
                    onClick={() => handleNavigation('home')}
                >
                    <img src={logo} alt="FARE Logo" className="h-[38px] w-auto brightness-0 invert opacity-95 transition-transform active:scale-95" />
                    <span className="text-[11px] font-medium text-white/80">
                        {data.copyright.replace('{year}', new Date().getFullYear().toString())}
                    </span>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] pt-2 border-t border-white/[0.08]">
                    {data.links.map((link, i) => (
                        <button
                            key={i}
                            onClick={() => handleNavigation(link.path)}
                            className="transition-all duration-200 text-white/85 hover:text-[#E2C068] border-b border-dotted border-white/30 hover:border-[#E2C068] pb-[1px] cursor-pointer text-left font-medium"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </motion.footer>
    );
}

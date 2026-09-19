import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../Components/FARE_Logo/SVG/Primary Logo.svg';
import { getData } from './data';

const NAVY_DEEP = '#071A49';
const MUTED_BLUE = '#7B8DAA';

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
            className="w-full text-white py-2 px-12 font-['Outfit'] relative overflow-hidden"
            style={{ background: NAVY_DEEP, borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
            <div className="max-w-[1300px] w-full mx-auto flex justify-between items-center relative z-10 min-h-[50px]">
                <motion.div 
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => handleNavigation('home')}
                >
                    <img src={logo} alt="FARE Logo" className="h-[46px] w-auto brightness-0 invert opacity-95 transition-transform duration-300 hover:scale-[1.02]" />
                    <span className="text-[11.5px] font-normal" style={{ color: 'rgba(123, 141, 170, 0.7)' }}>
                        {data.copyright.replace('{year}', new Date().getFullYear().toString())}
                    </span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex items-center gap-5"
                >
                    {data.links.map((link, i) => (
                        <motion.button
                            key={i}
                            onClick={() => handleNavigation(link.path)}
                            whileHover={{ y: -1 }}
                            className="text-[11.5px] font-normal transition-all duration-200 hover:text-white border-b border-dotted border-[#7B8DAA]/60 hover:border-white pb-[1px] cursor-pointer"
                            style={{ color: MUTED_BLUE }}
                        >
                            {link.label}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </motion.footer>
    );
}

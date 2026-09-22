import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Users, BarChart2 } from 'lucide-react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';
import bgImage from '../../assets/bg-04.jpg';

export default function Mobile() {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobileMode = location.pathname.startsWith('/mobile');
    const currentMode = isMobileMode ? 'mobile' : 'desktop';
    const { language } = useLanguage();
    const data = getData(language);

    const getActiveButtonIndex = (pathname: string): number => {
        const pathSegments = pathname.split('/').filter(Boolean);
        const currentRoute = pathSegments[1] || 'home';

        if (currentRoute === 'open-plots') return 0;
        if (currentRoute === 're-trainers-coaches') return 1;
        if (currentRoute === 're-companies') return 2;
        return -1;
    };

    const activeBtnIndex = getActiveButtonIndex(location.pathname);

    const handleButtonClick = (idx: number) => {
        if (idx === 0) {
            navigate(`/${currentMode}/open-plots`);
        } else if (idx === 1) {
            navigate(`/${currentMode}/re-trainers-coaches`);
        } else if (idx === 2) {
            navigate(`/${currentMode}/re-companies`);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const containerVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
    };

    return (
        <section
            className="w-full py-12 px-4 flex flex-col items-center justify-center font-['Outfit'] relative overflow-hidden bg-[#020b1e]"
        >
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            <div className="absolute inset-0 bg-[#041029]/60 z-0"></div>

            <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-[#0B2A6B]/40 to-transparent -rotate-45 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
            ></motion.div>

            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="w-full max-w-[460px] relative z-20"
            >
                <div
                    className="w-full rounded-xl pt-10 pb-8 flex flex-col items-center text-center relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(6,18,36,0.95) 0%, rgba(4,12,29,0.98) 100%)',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[80px] pointer-events-none"
                    ></motion.div>

                    <motion.div variants={itemVariant} className="flex items-center gap-3 mb-5 relative z-10">
                        <div className="h-[1px] w-8 bg-gradient-to-l from-[#C99A2E] to-transparent opacity-60"></div>
                        <span className="text-[11px] font-bold tracking-[0.25em] text-[#E2C068] uppercase">{data.academyText}</span>
                        <div className="h-[1px] w-8 bg-gradient-to-r from-[#C99A2E] to-transparent opacity-60"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariant} className="text-[1.8rem] leading-[1.1] font-black tracking-tight text-white uppercase mb-4 px-2 w-full relative z-10">
                        <span className="block">{data.headline.line1}</span>
                        <span className="block text-[#C99A2E]">{data.headline.line2}</span>
                    </motion.h2>

                    <motion.p variants={itemVariant} className="text-[13px] font-medium max-w-[340px] leading-[1.5] mb-8 text-white/70 px-4 relative z-10">
                        {data.headline.subtitle}
                    </motion.p>

                    <motion.div variants={itemVariant} className="flex flex-col items-center gap-2.5 mb-10 w-full px-5 relative z-10">
                        {data.buttons.map((btn, idx) => {
                            const isSelected = activeBtnIndex === idx;

                            return (
                                <motion.button
                                    key={idx}
                                    onClick={() => handleButtonClick(idx)}
                                    whileTap={{ scale: 0.97 }}
                                    className={`w-full py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                                            isSelected 
                                                ? 'font-bold text-[12.5px] text-[#071A49] uppercase tracking-[0.05em] shadow-[0_8px_20px_-4px_rgba(213,170,69,0.3)]'
                                                : 'bg-[#071A49]/60 text-white font-semibold text-[13px] border border-white/10 active:bg-white/10'
                                    }`}
                                    style={isSelected ? { 
                                        background: 'linear-gradient(90deg, #D5AA45 0%, #E2C068 50%, #D5AA45 100%)' 
                                    } : {}}
                                >
                                    <span>{btn}</span>
                                    {isSelected && <ArrowRight size={15} strokeWidth={2.5} />}
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    <motion.div variants={itemVariant} className="flex flex-col items-center w-full max-w-[340px] mx-auto gap-2.5 px-2 relative z-10">
                        {data.trustBadges.map((badge, i) => (
                            <motion.div
                                key={i}
                                className="w-full flex items-center gap-3.5 p-3 rounded-lg bg-[#0B1D3A]/[0.04] border border-[#0B1D3A]/[0.08]"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <motion.div
                                    className="shrink-0 flex items-center justify-center"
                                    whileHover={{ rotate: 8, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {i === 0 && <ShieldCheck size={22} strokeWidth={2} className="text-[#34D399]" />}
                                    {i === 1 && <Users size={22} strokeWidth={2} className="text-[#6B8AFF]" />}
                                    {i === 2 && <BarChart2 size={22} strokeWidth={2} className="text-[#D5AA45]" />}
                                </motion.div>
                                <div className="text-left flex-1">
                                    <div className="text-[13px] font-bold text-[#0B1D3A] leading-tight">{badge.title}</div>
                                    {badge.subtitle && (
                                        <div className="text-[11px] text-[#7B8DAA] font-medium leading-tight mt-0.5">{badge.subtitle}</div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

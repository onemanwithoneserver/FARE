import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Users, BarChart2 } from 'lucide-react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';
import bgImage from '../../assets/bg-04.jpg';

export default function Desktop() {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobileMode = location.pathname.startsWith('/mobile');
    const currentMode = isMobileMode ? 'mobile' : 'desktop';
    const { language } = useLanguage();
    const data = getData(language);

    // Logic: Determine which CTA button is selected based on the active folder/page.
    // For 'home', no control is selected (-1), keeping all 3 with identical clean styling.
    const getActiveButtonIndex = (pathname: string): number => {
        const pathSegments = pathname.split('/').filter(Boolean);
        const currentRoute = pathSegments[1] || 'home';

        if (currentRoute === 'open-plots') return 0;           // "Register as a Learner"
        if (currentRoute === 're-trainers-coaches') return 1; // "Register as a Trainer"
        if (currentRoute === 're-companies') return 2;        // "Register as a Company"
        return -1; // Home: no control is selected by default
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
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
    };

    return (
        <section
            className="w-full min-h-screen py-16 px-12 flex items-center justify-center font-['Outfit'] relative overflow-hidden bg-[#020b1e]"
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 100%)',
                    WebkitMaskImage: '-webkit-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 100%)'
                }}
            ></div>

            <div className="absolute inset-0 bg-[#041029]/60 z-0"></div>

            <motion.div
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0B2A6B]/50 to-transparent -rotate-45 transform -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none"
            ></motion.div>
            <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-50px] right-[10%] w-[600px] h-[350px] border-b-[1.5px] border-[#C99A2E]/60 rounded-[100%] rotate-12 z-0 pointer-events-none blur-[0.5px]"
            ></motion.div>
            <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-100px] right-[-100px] w-[800px] h-[400px] bg-gradient-to-tl from-[#071A49] to-transparent -rotate-12 z-0 pointer-events-none"
            ></motion.div>

            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                className="max-w-[1060px] xl:max-w-[1120px] w-full relative z-20"
            >
                <div
                    className="w-full rounded pt-16 pb-12 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_50px_rgba(4,16,41,0.5)]"
                    style={{
                        background: 'linear-gradient(135deg, rgba(8, 22, 51, 0.95) 0%, rgba(5, 15, 38, 0.98) 100%)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)'
                    }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/5 to-transparent rounded-full blur-[100px] pointer-events-none"
                    ></motion.div>

                    <motion.div variants={itemVariant} className="flex items-center gap-5 mb-7 relative z-10">
                        <div className="h-[1px] w-14 bg-gradient-to-l from-[#C99A2E] to-transparent opacity-60"></div>
                        <span className="text-[13px] font-bold tracking-[0.3em] text-[#E2C068] uppercase">{data.academyText}</span>
                        <div className="h-[1px] w-14 bg-gradient-to-r from-[#C99A2E] to-transparent opacity-60"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariant} className="text-[3.2rem] lg:text-[3.8rem] leading-[1.05] font-black tracking-tight text-white uppercase mb-6 w-full relative z-10">
                        <span className="block">{data.headline.line1}</span>
                        <span className="block text-[#C99A2E]">{data.headline.line2}</span>
                    </motion.h2>

                    <motion.p variants={itemVariant} className="text-[15px] font-medium max-w-[700px] leading-[1.6] mb-12 text-white/70 px-10 relative z-10">
                        {data.headline.subtitle}
                    </motion.p>

                    {/* 3 CTA Buttons with active selection logic & hover animations */}
                    <motion.div variants={itemVariant} className="flex flex-wrap items-center justify-center gap-4 mb-16 px-10 relative z-10">
                        {data.buttons.map((btn, idx) => {
                            const isSelected = activeBtnIndex === idx;

                            return (
                                <motion.button
                                    key={idx}
                                    onClick={() => handleButtonClick(idx)}
                                    whileHover={{ 
                                        scale: 1.04, 
                                        y: -2,
                                        boxShadow: isSelected 
                                            ? '0 0 32px rgba(213,170,69,0.5)' 
                                            : '0 0 24px rgba(213,170,69,0.25)',
                                        borderColor: isSelected ? undefined : 'rgba(226,192,104,0.6)',
                                        backgroundColor: isSelected ? undefined : 'rgba(255,255,255,0.08)'
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`group relative font-semibold text-[14px] px-8 py-3.5 rounded transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                                        isSelected 
                                            ? 'text-[#071A49] font-bold uppercase tracking-[0.05em] shadow-[0_10px_20px_-5px_rgba(213,170,69,0.3)]' 
                                            : 'bg-transparent text-white border border-white/20 hover:text-[#E2C068]'
                                    }`}
                                    style={isSelected ? { 
                                        background: 'linear-gradient(90deg, #D5AA45 0%, #E2C068 50%, #D5AA45 100%)' 
                                    } : {}}
                                >
                                    <span>{btn}</span>
                                    {isSelected ? (
                                        <ArrowRight size={16} strokeWidth={2.5} />
                                    ) : (
                                        <ArrowRight 
                                            size={16} 
                                            strokeWidth={2.5} 
                                            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#E2C068]" 
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    <motion.div variants={itemVariant} className="flex items-center justify-center w-full px-8 relative z-10">
                        {data.trustBadges.map((badge, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center"
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <div className="flex items-start gap-4 px-8">
                                    <motion.div
                                        className="mt-0.5"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {i === 0 && <ShieldCheck size={26} strokeWidth={2} className="text-[#34D399]" />}
                                        {i === 1 && <Users size={26} strokeWidth={2} className="text-[#6B8AFF]" />}
                                        {i === 2 && <BarChart2 size={26} strokeWidth={2} className="text-[#D5AA45]" />}
                                    </motion.div>
                                    <div className="text-left">
                                        <div className="text-[13px] font-bold text-white mb-1.5 leading-[1.3]">{badge.title}</div>
                                        {badge.subtitle && (
                                            <div className="text-[12px] text-white/50 font-medium">{badge.subtitle}</div>
                                        )}
                                    </div>
                                </div>
                                {i !== 2 && (
                                    <div className="h-12 w-[1px] bg-white/10 mx-2"></div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

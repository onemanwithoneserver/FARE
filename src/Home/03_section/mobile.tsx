import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import {
    Building2, GraduationCap, UserCheck, ArrowRight, Sparkles, ChevronRight
} from 'lucide-react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Mobile() {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobileMode = location.pathname.startsWith('/mobile');
    const currentMode = isMobileMode ? 'mobile' : 'desktop';

    const { language } = useLanguage();
    const data = getData(language);

    const handleRedirect = (path: string) => {
        navigate(`/${currentMode}/${path}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getIcon = (id: string, size: number = 20) => {
        if (id === 'companies') return <Building2 size={size} strokeWidth={2.2} />;
        if (id === 'trainers') return <GraduationCap size={size} strokeWidth={2.2} />;
        return <UserCheck size={size} strokeWidth={2.2} />;
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 18 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            className="w-full py-14 px-4 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)' }}
        >
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[260px] h-[260px] bg-gradient-radial from-[#DDEAFF]/50 to-transparent rounded-full blur-[70px] pointer-events-none z-0"
            />
            <motion.div
                animate={{ opacity: [0.25, 0.5, 0.25], scale: [1.06, 1, 1.06] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-[240px] h-[240px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[60px] pointer-events-none z-0"
            />

            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
                    backgroundSize: '36px 36px'
                }}
            />

            <div className="w-full max-w-[500px] mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-40px" }}
                    className="flex flex-col items-center text-center mb-10"
                >
                    <motion.div variants={itemVariants} className="mb-3.5">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C99A2E]/30 bg-[#C99A2E]/[0.08] shadow-[0_2px_10px_rgba(201,154,46,0.1)] backdrop-blur-sm">
                            <Sparkles size={11} className="text-[#C99A2E] animate-pulse" strokeWidth={2.5} />
                            <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-[#C99A2E]">
                                {data.eyebrow}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className={`font-black mb-2.5 ${
                            language === 'te'
                                ? 'text-[1.55rem] leading-[1.25] tracking-wider py-0.5'
                                : 'text-[1.85rem] leading-[1.1] tracking-[-0.03em] uppercase'
                        }`}
                        style={{ color: NAVY }}
                    >
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-[13.5px] font-medium leading-relaxed text-[#5A6B82] max-w-[380px]"
                    >
                        {data.headline.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-40px" }}
                    className="flex flex-col gap-6"
                >
                    {data.personas.map((persona) => {
                        const accent = persona.accent || GOLD;

                        return (
                            <motion.div
                                key={persona.id}
                                variants={itemVariants}
                                className="bg-white/95 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-xl p-6 relative overflow-hidden shadow-[0_8px_24px_-8px_rgba(11,29,58,0.08)] flex flex-col justify-between"
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-[3px]"
                                    style={{
                                        background: `linear-gradient(90deg, ${accent}, ${accent}90)`
                                    }}
                                />

                                <div
                                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[35px] opacity-[0.08] pointer-events-none"
                                    style={{ background: accent }}
                                />

                                <div>
                                    <div className="flex items-center gap-3.5 mb-5">
                                        <div
                                            className="w-11 h-11 rounded-lg flex items-center justify-center text-white shadow-sm shrink-0"
                                            style={{
                                                background: `linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%)`
                                            }}
                                        >
                                            {getIcon(persona.id, 20)}
                                        </div>

                                        <h3 className="text-[17px] sm:text-[18px] font-black tracking-tight text-[#0B1D3A] leading-tight">
                                            {persona.tag}
                                        </h3>
                                    </div>

                                    <div className="flex flex-col gap-2 pt-3.5 border-t border-[#0B1D3A]/[0.06] mb-5">
                                        {persona.items.map((it, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg"
                                                style={{
                                                    background: `linear-gradient(135deg, ${accent}0A, ${accent}03)`,
                                                    border: `1px solid ${accent}18`
                                                }}
                                            >
                                                <div
                                                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                                                    style={{ background: `${accent}18` }}
                                                >
                                                    <ChevronRight size={13} strokeWidth={2.5} style={{ color: accent }} />
                                                </div>
                                                <span className="text-[13px] font-semibold text-[#0B1D3A] leading-snug">
                                                    {it}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={() => handleRedirect(persona.path)}
                                        className="w-full py-3 px-5 rounded-lg font-bold text-[13.5px] text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_14px_-2px_rgba(11,29,58,0.2)] active:scale-[0.98] cursor-pointer"
                                        style={{
                                            background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)`
                                        }}
                                    >
                                        <span>{persona.cta}</span>
                                        <ArrowRight
                                            size={15}
                                            strokeWidth={2.5}
                                            style={{ color: accent }}
                                        />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

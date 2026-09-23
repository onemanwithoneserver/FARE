import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import {
    Building2, GraduationCap, UserCheck, ArrowRight, Sparkles, Check, ChevronDown, MapPin
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
    const exploreLabel = language === 'te' ? 'అన్వేషించండి' : 'Explore';

    const [openCardId, setOpenCardId] = useState<string | null>(data.personas[0]?.id || null);
    const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

    const toggleCard = (id: string) => {
        setOpenCardId(prev => (prev === id ? null : id));
    };

    const handleRedirect = (path: string) => {
        setIsCompanyDropdownOpen(false);
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
                    className="flex flex-col gap-4"
                >
                    {data.personas.map((persona) => {
                        const accent = persona.accent || GOLD;
                        const isOpen = openCardId === persona.id;

                        return (
                            <motion.div
                                key={persona.id}
                                variants={itemVariants}
                                className="bg-white/95 backdrop-blur-xl border border-[#0B1D3A]/[0.08] rounded-xl relative overflow-hidden shadow-[0_8px_24px_-8px_rgba(11,29,58,0.08)] transition-all duration-300"
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

                                <button
                                    onClick={() => toggleCard(persona.id)}
                                    className="w-full p-4.5 sm:p-5 flex items-center justify-between gap-3 text-left cursor-pointer"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-center gap-3.5">
                                        <div
                                            className="w-11 h-11 rounded-lg flex items-center justify-center text-white shadow-sm shrink-0"
                                            style={{
                                                background: `linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%)`
                                            }}
                                        >
                                            {getIcon(persona.id, 20)}
                                        </div>

                                        <h3 className="text-[16px] sm:text-[17px] font-black tracking-tight text-[#0B1D3A] leading-tight">
                                            {persona.tag}
                                        </h3>
                                    </div>

                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[#0B1D3A]/10 bg-[#0B1D3A]/[0.03] transition-all duration-300"
                                        style={isOpen ? { background: `${accent}15`, borderColor: `${accent}40` } : {}}
                                    >
                                        <ChevronDown
                                            size={16}
                                            strokeWidth={2.5}
                                            className="transition-transform duration-300"
                                            style={{
                                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                color: isOpen ? accent : NAVY
                                            }}
                                        />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-5 pt-0">
                                                <div className="flex flex-col gap-2 pt-3.5 border-t border-[#0B1D3A]/[0.06] mb-4">
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
                                                                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 shadow-xs"
                                                                style={{ background: `${accent}18` }}
                                                            >
                                                                <Check size={13} strokeWidth={2.5} style={{ color: accent }} />
                                                            </div>
                                                            <span className="text-[13px] font-semibold text-[#0B1D3A] leading-snug">
                                                                {it}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex flex-col items-end pt-1 relative">
                                                    {persona.id === 'companies' ? (
                                                        <>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
                                                                }}
                                                                aria-label={persona.cta}
                                                                className="h-10 px-4 rounded-[4px] flex items-center gap-1.5 transition-all duration-300 shadow-[0_4px_14px_-2px_rgba(11,29,58,0.25)] active:scale-95 cursor-pointer"
                                                                style={{
                                                                    background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)`
                                                                }}
                                                            >
                                                                <span className="text-[12.5px] font-bold text-white">
                                                                    {exploreLabel}
                                                                </span>
                                                                <ChevronDown
                                                                    size={14}
                                                                    strokeWidth={2.5}
                                                                    className={`transition-transform duration-300 ${
                                                                        isCompanyDropdownOpen ? 'rotate-180 text-[#34D399]' : 'text-[#10B981]'
                                                                    }`}
                                                                />
                                                            </button>

                                                            <AnimatePresence>
                                                                {isCompanyDropdownOpen && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, y: 6, scale: 0.96 }}
                                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                        exit={{ opacity: 0, y: 4, scale: 0.96 }}
                                                                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                                                                        className="w-full mt-2.5 bg-[#071738]/95 backdrop-blur-xl border border-white/15 rounded-[4px] p-1.5 shadow-lg z-20"
                                                                    >
                                                                        <div className="flex flex-col gap-1">
                                                                            {data.companyDropdown?.map((item, idx) => (
                                                                                <button
                                                                                    key={idx}
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation();
                                                                                        handleRedirect(item.path);
                                                                                    }}
                                                                                    className="w-full p-2.5 rounded-[4px] border border-transparent active:border-white/10 active:bg-white/[0.12] transition-all flex items-center justify-between gap-2.5 text-left cursor-pointer"
                                                                                >
                                                                                    <div className="flex items-center gap-2.5 min-w-0">
                                                                                        <div className={`w-7 h-7 rounded-[4px] flex items-center justify-center shrink-0 ${
                                                                                            idx === 0 ? 'bg-[#10B981]/20 text-[#34D399]' : 'bg-[#C99A2E]/20 text-[#E2C068]'
                                                                                        }`}>
                                                                                            {idx === 0 ? <Building2 size={15} strokeWidth={2.2} /> : <MapPin size={15} strokeWidth={2.2} />}
                                                                                        </div>
                                                                                        <span className="text-[13px] font-bold text-white leading-tight">
                                                                                            {item.title}
                                                                                        </span>
                                                                                    </div>
                                                                                    <ArrowRight size={14} strokeWidth={2.5} className="text-[#10B981] shrink-0 ml-1" />
                                                                                </button>
                                                                            ))}
                                                                        </div>
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </>
                                                    ) : (
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleRedirect(persona.path);
                                                            }}
                                                            aria-label={persona.cta}
                                                            className="h-10 px-4 rounded-[4px] flex items-center gap-1.5 transition-all duration-300 shadow-[0_4px_14px_-2px_rgba(11,29,58,0.25)] active:scale-95 cursor-pointer"
                                                            style={{
                                                                background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)`
                                                            }}
                                                        >
                                                            <span className="text-[12.5px] font-bold text-white">
                                                                {exploreLabel}
                                                            </span>
                                                            <ArrowRight
                                                                size={15}
                                                                strokeWidth={2.5}
                                                                style={{ color: accent }}
                                                            />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

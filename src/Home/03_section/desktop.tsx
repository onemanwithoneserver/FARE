import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import {
    Building2, GraduationCap, UserCheck, ArrowRight, Sparkles, Check, MapPin, ChevronDown
} from 'lucide-react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Desktop() {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobileMode = location.pathname.startsWith('/mobile');
    const currentMode = isMobileMode ? 'mobile' : 'desktop';

    const { language } = useLanguage();
    const data = getData(language);
    const exploreLabel = language === 'te' ? 'అన్వేషించండి' : 'Explore';

    const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsCompanyDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleRedirect = (path: string) => {
        setIsCompanyDropdownOpen(false);
        navigate(`/${currentMode}/${path}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getIcon = (id: string, size: number = 24) => {
        if (id === 'companies') return <Building2 size={size} strokeWidth={2.2} />;
        if (id === 'trainers') return <GraduationCap size={size} strokeWidth={2.2} />;
        return <UserCheck size={size} strokeWidth={2.2} />;
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 24 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            className="w-full py-24 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(175deg, #F8FAFD 0%, #FFFFFF 45%, #EEF4FA 100%)' }}
        >
            <motion.div
                animate={{ opacity: [0.3, 0.65, 0.3], scale: [1, 1.08, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[5%] right-[10%] w-[650px] h-[650px] bg-gradient-radial from-[#DDEAFF]/50 to-transparent rounded-full blur-[130px] pointer-events-none z-0"
            />
            <motion.div
                animate={{ opacity: [0.25, 0.55, 0.25], scale: [1.06, 1, 1.06] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[5%] left-[5%] w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[120px] pointer-events-none z-0"
            />

            <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.03, 0.08, 0.03] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#0B1D3A]/20 pointer-events-none z-0"
            />

            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
                    backgroundSize: '48px 48px'
                }}
            />

            <div className="max-w-[1360px] mx-auto px-8 lg:px-12 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-60px" }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <motion.div variants={itemVariants} className="mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C99A2E]/30 bg-[#C99A2E]/[0.08] shadow-[0_2px_12px_rgba(201,154,46,0.12)] backdrop-blur-md">
                            <Sparkles size={13} className="text-[#C99A2E] animate-pulse" strokeWidth={2.5} />
                            <span className="font-bold text-[11px] tracking-[0.2em] uppercase text-[#C99A2E]">
                                {data.eyebrow}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className={`font-black mb-4 ${
                            language === 'te'
                                ? 'text-[2.4rem] xl:text-[2.85rem] leading-[1.2] tracking-wider py-1'
                                : 'text-[3rem] xl:text-[3.5rem] leading-[1.08] tracking-[-0.03em] uppercase'
                        }`}
                        style={{ color: NAVY }}
                    >
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-[17px] font-medium leading-[1.65] max-w-[720px] text-[#5A6B82]"
                    >
                        {data.headline.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-60px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-9 items-stretch"
                >
                    {data.personas.map((persona) => {
                        const accent = persona.accent || GOLD;
                        const isCompany = persona.id === 'companies';

                        return (
                            <motion.div
                                key={persona.id}
                                variants={itemVariants}
                                whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                                className={`group bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/20 rounded-xl p-8 xl:p-9 flex flex-col justify-between shadow-[0_12px_36px_-12px_rgba(11,29,58,0.08)] hover:shadow-[0_24px_50px_-15px_rgba(11,29,58,0.16)] transition-all duration-400 relative h-full cursor-default ${
                                    isCompany ? 'overflow-visible z-30' : 'overflow-hidden'
                                }`}
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-[3.5px] transition-all duration-500 opacity-80 group-hover:opacity-100 rounded-t-xl"
                                    style={{
                                        background: `linear-gradient(90deg, ${accent}, ${accent}90)`
                                    }}
                                />

                                <div
                                    className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-[45px] opacity-[0.06] group-hover:opacity-[0.14] transition-all duration-500 pointer-events-none"
                                    style={{ background: accent }}
                                />

                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div
                                            className="w-13 h-13 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 relative overflow-hidden shrink-0"
                                            style={{
                                                background: `linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%)`
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-700" />
                                            {getIcon(persona.id, 24)}
                                        </div>

                                        <h3 className="text-[19px] xl:text-[21px] font-black tracking-tight text-[#0B1D3A] transition-colors leading-tight">
                                            {persona.tag}
                                        </h3>
                                    </div>

                                    <div className="flex flex-col gap-2.5 pt-4 border-t border-[#0B1D3A]/[0.06] mb-8">
                                        {persona.items.map((it, idx) => (
                                            <div
                                                key={idx}
                                                className="group/item flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-300 hover:translate-x-1"
                                                style={{
                                                    background: `linear-gradient(135deg, ${accent}0A, ${accent}03)`,
                                                    border: `1px solid ${accent}20`
                                                }}
                                            >
                                                <div
                                                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:scale-110 shadow-xs"
                                                    style={{ background: `${accent}18` }}
                                                >
                                                    <Check size={14} strokeWidth={2.5} style={{ color: accent }} />
                                                </div>
                                                <span className="text-[14px] font-semibold text-[#0B1D3A] leading-snug">
                                                    {it}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-end pt-2 mt-auto relative" ref={isCompany ? dropdownRef : undefined}>
                                    {isCompany ? (
                                        <>
                                            <button
                                                onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                                                aria-label={persona.cta}
                                                className="h-11 px-5 rounded-[4px] flex items-center justify-center gap-2 transition-all duration-300 ease-out relative overflow-hidden shadow-[0_4px_16px_-4px_rgba(11,29,58,0.25)] hover:shadow-[0_8px_24px_-4px_rgba(11,29,58,0.35)] hover:scale-105 active:scale-95 group/btn cursor-pointer"
                                                style={{
                                                    background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)`
                                                }}
                                            >
                                                <span className="text-[13.5px] font-bold text-white transition-all duration-300">
                                                    {exploreLabel}
                                                </span>
                                                <ChevronDown
                                                    size={16}
                                                    strokeWidth={2.5}
                                                    className={`shrink-0 relative z-10 transition-transform duration-300 ${
                                                        isCompanyDropdownOpen ? 'rotate-180 text-[#34D399]' : 'group-hover/btn:translate-y-0.5 text-[#10B981]'
                                                    }`}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                                            </button>

                                            <AnimatePresence>
                                                {isCompanyDropdownOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -6, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: -4, scale: 0.95 }}
                                                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                                                        className="absolute top-[calc(100%+8px)] right-0 w-[260px] bg-[#071738]/95 backdrop-blur-xl border border-white/15 rounded-[4px] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 pointer-events-auto"
                                                    >
                                                        <div className="flex flex-col gap-1">
                                                            {data.companyDropdown?.map((item, idx) => (
                                                                <button
                                                                    key={idx}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleRedirect(item.path);
                                                                    }}
                                                                    className="w-full p-2.5 rounded-[4px] border border-transparent hover:border-white/10 hover:bg-white/[0.08] transition-all duration-200 flex items-center justify-between gap-2.5 text-left cursor-pointer group/item"
                                                                >
                                                                    <div className="flex items-center gap-2.5 min-w-0">
                                                                        <div className={`w-8 h-8 rounded-[4px] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-105 ${
                                                                            idx === 0
                                                                                ? 'bg-[#10B981]/20 text-[#34D399] group-hover/item:bg-[#10B981] group-hover/item:text-white'
                                                                                : 'bg-[#C99A2E]/20 text-[#E2C068] group-hover/item:bg-[#C99A2E] group-hover/item:text-white'
                                                                        }`}>
                                                                            {idx === 0 ? <Building2 size={16} strokeWidth={2.2} /> : <MapPin size={16} strokeWidth={2.2} />}
                                                                        </div>
                                                                        <span className="text-[13px] font-bold text-white group-hover/item:text-[#E2C068] transition-colors leading-tight whitespace-nowrap">
                                                                            {item.title}
                                                                        </span>
                                                                    </div>
                                                                    <ArrowRight size={14} strokeWidth={2.5} className="text-[#10B981] group-hover/item:text-[#E2C068] group-hover/item:translate-x-0.5 transition-all shrink-0 ml-1" />
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => handleRedirect(persona.path)}
                                            aria-label={persona.cta}
                                            className="h-11 px-5 rounded-[4px] flex items-center justify-center gap-2 transition-all duration-300 ease-out relative overflow-hidden shadow-[0_4px_16px_-4px_rgba(11,29,58,0.25)] hover:shadow-[0_8px_24px_-4px_rgba(11,29,58,0.35)] hover:scale-105 active:scale-95 group/btn cursor-pointer"
                                            style={{
                                                background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)`
                                            }}
                                        >
                                            <span className="text-[13.5px] font-bold text-white transition-all duration-300">
                                                {exploreLabel}
                                            </span>
                                            <ArrowRight
                                                size={16}
                                                strokeWidth={2.5}
                                                className="shrink-0 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
                                                style={{ color: accent }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

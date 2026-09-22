import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 5);
        }, 1800);
        return () => clearInterval(interval);
    }, []);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    };

    const journeyContainer: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.18,
                delayChildren: 0.2
            }
        }
    };

    const journeyItem: Variants = {
        hidden: { opacity: 0, y: 15, scale: 0.9 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="w-full py-16 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F8FAFD 0%, #EEF4FF 100%)' }}
        >
            
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-gradient-radial from-[#3B82F6]/[0.03] to-transparent rounded-full blur-[100px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[80px] pointer-events-none z-0"></motion.div>

            <div className="max-w-[1320px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-5">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]" style={{ color: GOLD }}>
                            <Sparkles size={14} />
                            {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-6 max-w-[850px]" style={{ color: NAVY }}>
                        {data.headline}
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="relative flex items-start justify-between gap-6"
                >
                    
                    <div className="absolute top-[45px] -translate-y-1/2 left-8 right-2 h-[44px] z-0 pointer-events-none flex items-center">
                        <div className="flex-1 h-[40px] bg-gradient-to-r from-white/90 via-[#F1F5F9]/80 to-white/90 border-y border-[#C99A2E]/30 backdrop-blur-md relative overflow-hidden rounded-l-full shadow-[0_4px_16px_rgba(201,154,46,0.08)]">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C99A2E]/35 to-transparent w-1/3"
                                animate={{ x: ['-100%', '350%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <div className="absolute top-1/2 left-0 right-0 h-[1.5px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#C99A2E]/40 to-transparent" />
                        </div>
                        <div className="shrink-0 w-0 h-0 border-y-[22px] border-y-transparent border-l-[26px] border-l-[#C99A2E]/50 drop-shadow-sm -ml-[1px]" />
                    </div>

                    {[20, 40, 60, 80].map((leftPos, i) => (
                        <div
                            key={i}
                            className="absolute top-[45px] -translate-y-1/2 -translate-x-1/2 z-[5] pointer-events-none flex items-center justify-center bg-white/95 border border-[#C99A2E]/40 rounded-full py-1.5 px-3 shadow-[0_4px_12px_rgba(201,154,46,0.18)]"
                            style={{ left: `${leftPos}%` }}
                        >
                            <motion.div
                                className="flex items-center text-[#C99A2E]"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                            >
                                <ChevronRight size={16} strokeWidth={3} className="text-[#C99A2E]/50 -mr-2" />
                                <ChevronRight size={16} strokeWidth={3} className="text-[#C99A2E]/80 -mr-2" />
                                <ChevronRight size={16} strokeWidth={3} className="text-[#0B1D3A]" />
                            </motion.div>
                        </div>
                    ))}

                    {data.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="flex-1 flex flex-col items-center text-center relative z-10 group"
                        >
                            <div className="w-[90px] h-[90px] rounded-full bg-white/60 backdrop-blur-sm border border-[#0B1D3A]/5 flex items-center justify-center mb-8 shadow-[0_8px_20px_-8px_rgba(11,29,58,0.1)] group-hover:shadow-[0_15px_30px_-10px_rgba(11,29,58,0.15)] group-hover:-translate-y-2 transition-all duration-400 relative">
                                <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#C99A2E]/30 transition-colors duration-400 scale-[1.1]"></div>
                                <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] flex items-center justify-center shadow-inner relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                                    <span className="text-white text-[28px] font-bold font-serif relative z-10">{step.number}</span>
                                </div>
                            </div>
                            <h3 className="text-[22px] font-bold text-[#0B1D3A] mb-4">{step.title}</h3>
                            <p className="text-[15px] text-[#475569] font-medium leading-[1.65] px-4">{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-32 flex justify-center">
                    <div className="group relative">
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C99A2E]/20 to-transparent blur-[20px] group-hover:blur-[30px] transition-all duration-500 opacity-0 group-hover:opacity-100"></motion.div>
                        <motion.div
                            variants={journeyContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, margin: "-100px" }}
                            className="bg-white/90 backdrop-blur-xl px-8 py-5 rounded border border-[#0B1D3A]/[0.08] shadow-[0_15px_40px_-10px_rgba(11,29,58,0.1)] flex flex-wrap items-center justify-center gap-3 md:gap-4 relative z-10"
                        >
                            {data.journeyLabel.split(' → ').map((label, idx, arr) => {
                                const isActive = activeStep === idx;
                                return (
                                    <div key={idx} className="flex items-center gap-3 md:gap-4">
                                        <motion.div
                                            variants={journeyItem}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            animate={isActive ? { scale: 1.06, y: -2 } : { scale: 1, y: 0 }}
                                            transition={{ duration: 0.35, ease: "easeOut" }}
                                            className={`flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-300 cursor-default select-none ${
                                                isActive
                                                    ? 'bg-[#0B1D3A] text-white border-[#C99A2E]/60 shadow-[0_6px_20px_rgba(11,29,58,0.22)]'
                                                    : 'bg-[#F8FAFD] text-[#475569] border-[#0B1D3A]/[0.06] hover:border-[#C99A2E]/40 hover:text-[#0B1D3A]'
                                            }`}
                                        >
                                            <span className="relative flex h-2 w-2">
                                                {isActive && (
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C99A2E] opacity-75"></span>
                                                )}
                                                <span
                                                    className="relative inline-flex rounded-full h-2 w-2"
                                                    style={{ backgroundColor: isActive ? GOLD : (idx === arr.length - 1 ? GOLD : '#94A3B8') }}
                                                ></span>
                                            </span>
                                            <span className={`font-bold text-[13px] uppercase tracking-[0.16em] ${isActive ? 'text-white' : ''}`}>
                                                {label}
                                            </span>
                                        </motion.div>
                                        {idx < arr.length - 1 && (
                                            <motion.div
                                                variants={journeyItem}
                                                animate={isActive ? { x: [0, 4, 0], scale: 1.2 } : { x: 0, scale: 1 }}
                                                transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}
                                            >
                                                <ArrowRight
                                                    size={16}
                                                    className={`transition-colors duration-300 ${isActive ? 'text-[#C99A2E]' : 'text-[#CBD5E1]'}`}
                                                    strokeWidth={2.5}
                                                />
                                            </motion.div>
                                        )}
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

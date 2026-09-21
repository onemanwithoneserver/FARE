import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { ArrowRight, Check, Settings2, Sparkles } from 'lucide-react';
import React from 'react';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    };

    const headlineSentences = data.headline.includes('. ') ? data.headline.split('. ') : [data.headline];

    return (
        <section className="w-full py-10 bg-white relative font-['Outfit'] overflow-hidden">
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#F1F5FB] to-transparent rounded-full blur-[60px] pointer-events-none"></motion.div>

            <div className="w-full px-5 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col gap-10"
                >
                    <div className="flex flex-col">
                        <motion.div variants={item} className="mb-4">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]" style={{ color: GOLD }}>
                                <div className="w-5 h-5 rounded bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-white shadow-sm shrink-0">
                                    <Settings2 size={11} className="text-white" />
                                </div>
                                {data.title === data.overline ? data.title : `${data.title} — ${data.overline}`}
                            </span>
                        </motion.div>
                        
                        <motion.h2 variants={item} className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-6" style={{ color: NAVY }}>
                            {headlineSentences.map((sentence, i) => (
                                <React.Fragment key={i}>
                                    {i === 0 ? <span>{sentence}{headlineSentences.length > 1 ? '. ' : ''}</span> : <span className="text-[#C99A2E] block mt-1">{sentence}</span>}
                                </React.Fragment>
                            ))}
                        </motion.h2>

                        <motion.div variants={item} className="mb-6">
                            <p className="text-[16px] font-bold mb-4" style={{ color: NAVY }}>{data.desc1}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {data.highlights.split(' · ').map((highlight, idx) => (
                                    <div key={idx} className="bg-[#F8FAFD] text-[#0B1D3A] border border-[#0B1D3A]/10 px-3 py-1.5 rounded text-[12px] font-semibold">
                                        {highlight}
                                    </div>
                                ))}
                            </div>
                            
                            <div className="bg-[#F8FAFD] rounded p-4 border border-[#0B1D3A]/[0.06] flex items-start gap-3">
                                <div className="mt-0.5 w-6 h-6 rounded-full bg-[#C99A2E]/10 flex items-center justify-center shrink-0">
                                    <Sparkles size={12} className="text-[#C99A2E]" />
                                </div>
                                <p className="text-[14.5px] font-medium leading-[1.6]" style={{ color: '#475569' }}>
                                    {data.desc2}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={item}
                        className="bg-white border border-[#0B1D3A]/[0.06] rounded p-7 shadow-[0_15px_40px_-10px_rgba(11,29,58,0.1)] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#C99A2E]/10 to-transparent rounded-bl-full pointer-events-none opacity-60"></div>

                        <h3 className="text-[18px] font-bold mb-6 relative z-10 flex items-center gap-3" style={{ color: NAVY }}>
                            <div className="w-1.5 h-6 rounded-full" style={{ background: GOLD }}></div>
                            {data.featuresHeading}
                        </h3>

                        <div className="flex flex-col gap-4 relative z-10">
                            {data.features.map((feature, idx) => {
                                const featureColors = ['text-[#10B981]', 'text-[#3B82F6]', 'text-[#8B5CF6]', 'text-[#F59E0B]', 'text-[#EC4899]', 'text-[#06B6D4]'];
                                const bgColors = ['bg-[#10B981]/10', 'bg-[#3B82F6]/10', 'bg-[#8B5CF6]/10', 'bg-[#F59E0B]/10', 'bg-[#EC4899]/10', 'bg-[#06B6D4]/10'];
                                return (
                                    <div key={idx} className="flex items-center gap-3.5">
                                        <div className={`w-8 h-8 rounded ${bgColors[idx % bgColors.length]} flex items-center justify-center shrink-0 shadow-sm`}>
                                            <Check size={14} className={`${featureColors[idx % featureColors.length]}`} strokeWidth={3} />
                                        </div>
                                        <span className="text-[14.5px] font-semibold text-[#0B1D3A]/80 leading-snug">
                                            {feature}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] rounded p-8 shadow-[0_15px_30px_-10px_rgba(11,29,58,0.2)] flex flex-col items-center text-center relative overflow-hidden">
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-24 h-24 bg-[#C99A2E]/20 rounded-full blur-[30px] pointer-events-none"></motion.div>
                        
                        <h3 className="text-[18px] font-bold mb-3 text-white relative z-10">{data.ctaHeading}</h3>
                        <p className="text-[13.5px] font-medium text-white/70 mb-6 relative z-10">{data.ctaDesc}</p>
                        
                        <div className="flex flex-col w-full gap-3 relative z-10">
                            <button className="group w-full bg-white text-[#0B1D3A] py-4 rounded text-[14px] font-bold flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all">
                                {data.ctaButton} <ArrowRight size={15} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            {data.secondaryCtaButton && (
                                <button className="w-full bg-white/10 border border-white/20 text-white py-4 rounded text-[14px] font-bold active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                    {data.secondaryCtaButton}
                                </button>
                            )}
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}

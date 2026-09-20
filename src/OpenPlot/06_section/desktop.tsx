import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { ArrowRight, Check, Settings2, Sparkles } from 'lucide-react';
import React from 'react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    const sectionSubtitle = data.title.includes(' - ') ? data.title.split(' - ')[1] : data.title.includes(' — ') ? data.title.split(' — ')[1] : data.title;
    const headlineSentences = data.headline.includes('. ') ? data.headline.split('. ') : [data.headline];

    return (
        <section className="w-full py-32 bg-white relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#F8FAFD] to-transparent rounded-full blur-[80px] pointer-events-none -translate-y-1/2"></div>

            <div className="max-w-[1240px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col md:flex-row gap-20"
                >
                    <div className="w-full md:w-[45%] flex flex-col">
                        <motion.div variants={item} className="mb-4 flex items-center gap-2.5 text-[#C99A2E]">
                            <div className="w-6 h-6 rounded-md bg-[#D97706] flex items-center justify-center text-white shadow-sm shrink-0">
                                <Settings2 size={13} className="text-white" />
                            </div>
                            <span className="text-[12px] font-bold tracking-[0.2em] uppercase">
                                {sectionSubtitle}
                            </span>
                        </motion.div>

                        <motion.h2 variants={item} className="text-[2.75rem] lg:text-[3rem] leading-[1.08] font-black tracking-[-0.02em] mb-8" style={{ color: NAVY }}>
                            {headlineSentences.map((sentence, i) => (
                                <React.Fragment key={i}>
                                    {i === 0 ? <span>{sentence}{headlineSentences.length > 1 ? '. ' : ''}</span> : <span className="text-[#C99A2E]">{sentence}</span>}
                                </React.Fragment>
                            ))}
                        </motion.h2>

                        <motion.div variants={item} className="mb-8">
                            <p className="text-[16px] font-semibold mb-4" style={{ color: NAVY }}>{data.desc1}</p>
                            <div className="flex flex-wrap gap-x-3 gap-y-2 mb-6">
                                {data.highlights.split(' · ').map((highlight, idx) => (
                                    <div key={idx} className="bg-[#F8FAFD] text-[#0B1D3A] border border-[#0B1D3A]/10 px-3 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap">
                                        {highlight}
                                    </div>
                                ))}
                            </div>
                            <p className="text-[16px] font-medium leading-[1.6]" style={{ color: '#596780' }}>
                                <Sparkles size={16} className="inline text-[#C99A2E] mr-2 -mt-1" />
                                {data.desc2}
                            </p>
                        </motion.div>

                        <motion.div variants={item} className="mt-auto bg-gradient-to-br from-[#F8FAFD] to-[#EEF4FF] border border-[#0B1D3A]/5 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-[18px] font-bold mb-2" style={{ color: NAVY_DEEP }}>{data.ctaHeading}</h3>
                            <p className="text-[14px] font-medium text-[#596780] mb-6">{data.ctaDesc}</p>
                            <button className="bg-[#0B1D3A] text-white px-7 py-3.5 rounded-[4px] text-[13.5px] font-semibold hover:shadow-[0_8px_24px_rgba(11,29,58,0.2)] hover:bg-[#102B63] transition-all flex items-center gap-2">
                                {data.ctaButton} <ArrowRight size={15} />
                            </button>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-[55%] flex flex-col justify-center">
                        <motion.div
                            variants={item}
                            className="bg-white border border-[#0B1D3A]/10 rounded-3xl p-10 shadow-[0_20px_40px_-12px_rgba(11,29,58,0.08)] relative"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C99A2E]/5 rounded-bl-full rounded-tr-3xl"></div>

                            <h3 className="text-[20px] font-bold mb-8 relative z-10" style={{ color: NAVY_DEEP }}>
                                {data.featuresHeading}
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
                                {data.features.map((feature, idx) => {
                                    const featureColors = ['bg-[#10B981]', 'bg-[#3B82F6]', 'bg-[#8B5CF6]', 'bg-[#F59E0B]', 'bg-[#EC4899]', 'bg-[#06B6D4]'];
                                    return (
                                        <div key={idx} className="flex items-start gap-3 group">
                                            <div className={`w-6 h-6 rounded-full ${featureColors[idx % featureColors.length]} flex items-center justify-center shrink-0 text-white shadow-sm transition-transform duration-200 group-hover:scale-110 mt-0.5`}>
                                                <Check size={12} className="text-white" strokeWidth={3} />
                                            </div>
                                            <span className="text-[15px] font-semibold text-[#0B1D3A]/80 leading-snug group-hover:text-[#0B1D3A] transition-colors">
                                                {feature}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}

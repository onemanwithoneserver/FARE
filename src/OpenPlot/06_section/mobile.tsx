import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { ArrowRight, Check, Settings2, Sparkles } from 'lucide-react';
import React from 'react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';

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

    const sectionSubtitle = data.title.includes(' - ') ? data.title.split(' - ')[1] : data.title.includes(' — ') ? data.title.split(' — ')[1] : data.title;
    const headlineSentences = data.headline.includes('. ') ? data.headline.split('. ') : [data.headline];

    return (
        <section className="w-full py-20 bg-white relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#F8FAFD] to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <div className="w-full px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col gap-10"
                >
                    <div className="flex flex-col">
                        <motion.div variants={item} className="mb-3 flex items-center gap-2 text-[#C99A2E]">
                            <div className="w-5 h-5 rounded-md bg-[#D97706] flex items-center justify-center text-white shadow-sm shrink-0">
                                <Settings2 size={11} className="text-white" />
                            </div>
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                                {sectionSubtitle}
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
                            <p className="text-[15px] font-semibold mb-3" style={{ color: NAVY }}>{data.desc1}</p>
                            <div className="flex flex-wrap gap-2 mb-5">
                                {data.highlights.split(' · ').map((highlight, idx) => (
                                    <div key={idx} className="bg-[#F8FAFD] text-[#0B1D3A] border border-[#0B1D3A]/10 px-2.5 py-1 rounded-md text-[12px] font-semibold">
                                        {highlight}
                                    </div>
                                ))}
                            </div>
                            <p className="text-[14.5px] font-medium leading-[1.6]" style={{ color: '#596780' }}>
                                <Sparkles size={14} className="inline text-[#C99A2E] mr-1.5 -mt-1" />
                                {data.desc2}
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={item}
                        className="bg-white border border-[#0B1D3A]/10 rounded-2xl p-6 shadow-[0_10px_30px_-10px_rgba(11,29,58,0.08)] relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/5 rounded-bl-full rounded-tr-2xl"></div>

                        <h3 className="text-[18px] font-bold mb-6 relative z-10" style={{ color: NAVY_DEEP }}>
                            {data.featuresHeading}
                        </h3>

                        <div className="flex flex-col gap-4 relative z-10">
                            {data.features.map((feature, idx) => {
                                const featureColors = ['bg-[#10B981]', 'bg-[#3B82F6]', 'bg-[#8B5CF6]', 'bg-[#F59E0B]', 'bg-[#EC4899]', 'bg-[#06B6D4]'];
                                return (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className={`w-5 h-5 rounded-full ${featureColors[idx % featureColors.length]} flex items-center justify-center shrink-0 text-white shadow-sm mt-0.5`}>
                                            <Check size={10} className="text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-[14px] font-semibold text-[#0B1D3A]/80 leading-snug">
                                            {feature}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="bg-gradient-to-br from-[#F8FAFD] to-[#EEF4FF] border border-[#0B1D3A]/5 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                        <h3 className="text-[16px] font-bold mb-2" style={{ color: NAVY_DEEP }}>{data.ctaHeading}</h3>
                        <p className="text-[13px] font-medium text-[#596780] mb-5">{data.ctaDesc}</p>
                        <button className="w-full bg-[#0B1D3A] text-white px-6 py-3.5 rounded-[4px] text-[13.5px] font-semibold flex items-center justify-center gap-2 shadow-sm">
                            {data.ctaButton} <ArrowRight size={15} />
                        </button>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}

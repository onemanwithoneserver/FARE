import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { ArrowRight, CheckCircle, ClipboardList } from 'lucide-react';
import React from 'react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
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

    const sectionSubtitle = data.title.includes(' - ') ? data.title.split(' - ')[1] : data.title.includes(' — ') ? data.title.split(' — ')[1] : data.title;

    return (
        <section className="w-full py-20 bg-[#F8FAFD] relative font-['Outfit'] overflow-hidden">
            <div className="w-full px-6 relative z-10 flex flex-col gap-12">
                
                {/* Content */}
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col w-full"
                >
                    <motion.div variants={item} className="mb-3">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                            {sectionSubtitle}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-5" style={{ color: NAVY }}>
                        {data.headline.split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                                {word === 'Open' || word === 'Plot' || word.includes('Open') || word.includes('Plot') ? <span className="text-[#C99A2E]">{word} </span> : <span>{word} </span>}
                            </React.Fragment>
                        ))}
                    </motion.h2>

                    <motion.div variants={item} className="mb-6 flex flex-col gap-2.5">
                        <p className="text-[15px] font-bold" style={{ color: NAVY_DEEP }}>{data.desc1}</p>
                        <p className="text-[14.5px] font-medium leading-[1.6]" style={{ color: '#596780' }}>{data.desc2}</p>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-col gap-3 mb-8">
                        {data.testAreas.map((area, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                                <div className="w-4 h-4 rounded-full bg-[#10B981] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                                    <CheckCircle size={10} strokeWidth={3} className="text-white" />
                                </div>
                                <span className="text-[14px] font-semibold" style={{ color: NAVY }}>{area}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={item} className="flex flex-col gap-3 mb-6 w-full">
                        <button className="w-full bg-[#0B1D3A] text-white px-6 py-3.5 rounded-[4px] text-[13.5px] font-semibold flex items-center justify-center gap-2 shadow-sm">
                            {data.primaryButton} <ArrowRight size={15} />
                        </button>
                        <button className="w-full bg-white border border-[#0B1D3A]/15 text-[#0B1D3A] px-6 py-3.5 rounded-[4px] text-[13.5px] font-semibold flex items-center justify-center gap-2 shadow-sm">
                            {data.secondaryButton}
                        </button>
                    </motion.div>

                    <motion.p variants={item} className="text-[12px] font-medium italic text-center" style={{ color: '#7B8DAA' }}>
                        {data.footerText}
                    </motion.p>
                </motion.div>

                {/* Visual */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full relative"
                >
                    <div className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_-10px_rgba(11,29,58,0.1)] border border-[#0B1D3A]/5 relative z-10 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-2xl"></div>
                        
                        <div className="flex items-center justify-between mb-6 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-white shadow-sm">
                                    <ClipboardList size={18} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-[16px] font-bold text-[#0B1D3A]">{data.illustrationData.title}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 relative z-10">
                            {data.evaluationFlow.split(' → ').map((step, i) => {
                                const stepColors = ['bg-[#3B82F6]', 'bg-[#10B981]', 'bg-[#8B5CF6]', 'bg-[#F59E0B]'];
                                return (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className={`w-7 h-7 rounded-lg ${stepColors[i % stepColors.length]} flex items-center justify-center text-white font-bold text-[12px] shrink-0 shadow-sm`}>
                                            {i + 1}
                                        </div>
                                        <div className="flex-1 bg-white border border-[#0B1D3A]/5 shadow-sm rounded-lg p-3">
                                            <span className="text-[14px] font-semibold text-[#0B1D3A]">{step}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

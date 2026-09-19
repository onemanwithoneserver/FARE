import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { ArrowRight, CheckCircle, ClipboardList } from 'lucide-react';
import React from 'react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const GOLD = '#C99A2E';

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

    return (
        <section className="w-full py-32 bg-[#F8FAFD] relative font-['Outfit'] overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-12 relative z-10 flex items-center justify-between gap-16">
                
                {/* Left Side: Content */}
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex-1 max-w-[560px]"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="text-[12px] font-bold tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                            {sectionSubtitle}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-6" style={{ color: NAVY }}>
                        {data.headline.split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                                {word === 'Open' || word === 'Plot' || word.includes('Open') || word.includes('Plot') ? <span className="text-[#C99A2E]">{word} </span> : <span>{word} </span>}
                            </React.Fragment>
                        ))}
                    </motion.h2>

                    <motion.div variants={item} className="mb-8 flex flex-col gap-3">
                        <p className="text-[17px] font-bold" style={{ color: NAVY_DEEP }}>{data.desc1}</p>
                        <p className="text-[16px] font-medium leading-[1.6]" style={{ color: '#596780' }}>{data.desc2}</p>
                    </motion.div>

                    <motion.div variants={item} className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
                        {data.testAreas.map((area, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                                <CheckCircle size={18} className="text-[#34D399] shrink-0 mt-0.5" />
                                <span className="text-[15px] font-semibold" style={{ color: NAVY }}>{area}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={item} className="flex items-center gap-4 mb-8">
                        <button className="bg-[#0B1D3A] text-white px-7 py-3.5 rounded-[4px] text-[13.5px] font-semibold hover:shadow-[0_8px_24px_rgba(11,29,58,0.2)] hover:bg-[#102B63] transition-all flex items-center gap-2">
                            {data.primaryButton} <ArrowRight size={15} />
                        </button>
                        <button className="bg-white border border-[#0B1D3A]/15 text-[#0B1D3A] px-7 py-3.5 rounded-[4px] text-[13.5px] font-semibold hover:bg-[#0B1D3A]/5 transition-all flex items-center gap-2 shadow-sm">
                            {data.secondaryButton}
                        </button>
                    </motion.div>

                    <motion.p variants={item} className="text-[13px] font-medium italic" style={{ color: '#7B8DAA' }}>
                        {data.footerText}
                    </motion.p>
                </motion.div>

                {/* Right Side: Visual */}
                <motion.div 
                    initial={{ opacity: 0, x: 40, rotateY: 10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1 max-w-[500px] relative perspective-1000"
                >
                    <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_-12px_rgba(11,29,58,0.15)] border border-[#0B1D3A]/5 relative z-10 overflow-hidden transform-gpu">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#C99A2E]/10 rounded-full blur-3xl"></div>
                        
                        <div className="flex items-center justify-between mb-8 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#0B1D3A] flex items-center justify-center text-white shadow-lg">
                                    <ClipboardList size={24} />
                                </div>
                                <div>
                                    <h3 className="text-[18px] font-bold text-[#0B1D3A]">{data.illustrationData.title}</h3>
                                    <p className="text-[13px] font-medium text-[#7B8DAA]">{data.illustrationData.subtitle}</p>
                                </div>
                            </div>
                            <div className="px-3 py-1 bg-[#C99A2E]/10 text-[#C99A2E] text-[11px] font-bold uppercase tracking-wider rounded-full border border-[#C99A2E]/20">
                                Free
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 relative z-10">
                            {data.evaluationFlow.split(' → ').map((step, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-[#F8FAFD] border border-[#0B1D3A]/10 flex items-center justify-center text-[#0B1D3A] font-bold text-[14px] group-hover:bg-[#0B1D3A] group-hover:text-white transition-colors">
                                        {i + 1}
                                    </div>
                                    <div className="flex-1 bg-white border border-[#0B1D3A]/5 shadow-sm rounded-xl p-4 group-hover:shadow-md group-hover:border-[#C99A2E]/30 transition-all">
                                        <span className="text-[15px] font-semibold text-[#0B1D3A]">{step}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative Chart snippet */}
                        <div className="mt-8 pt-6 border-t border-[#0B1D3A]/5 flex items-end gap-2 h-20 opacity-40">
                            {[40, 70, 45, 90, 65, 80].map((h, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-[#0B1D3A]/20 to-transparent rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Background decorative blob */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#0B1D3A]/5 to-[#C99A2E]/10 rounded-[2rem] -z-10 blur-xl"></div>
                </motion.div>
            </div>
        </section>
    );
}

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { ArrowRight, CheckCircle2, ClipboardList, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

import Modal from '../../Forms/Modal';
import OpenPlotForm from '../../Forms/Mobile/OpenPlotForm';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const GOLD = '#C99A2E';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);
    
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    return (
        <section className="w-full py-10 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #F8FAFD 0%, #EEF4FF 100%)' }}
        >
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-[-50px] w-[300px] h-[300px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-full blur-[60px] pointer-events-none z-0"></motion.div>

            <div className="w-full px-5 relative z-10 flex flex-col gap-12">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col w-full"
                >

                    <motion.div variants={item} className="mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]" style={{ color: GOLD }}>
                            <Sparkles size={11} className="text-[#C99A2E]" strokeWidth={2.5} />
                            {data.overline}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-5" style={{ color: NAVY }}>
                        {data.headline.split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                                {word === 'Open' || word === 'Plot' || word.includes('Open') || word.includes('Plot') ? <span className="text-[#C99A2E] relative inline-block">
                                    {word} 
                                    <svg className="absolute w-full h-[4px] -bottom-0.5 left-0 text-[#C99A2E]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
                                </span> : <span>{word} </span>}
                            </React.Fragment>
                        ))}
                    </motion.h2>

                    <motion.div variants={item} className="mb-6 flex flex-col gap-3">
                        <p className="text-[16px] font-bold" style={{ color: NAVY }}>{data.desc1}</p>
                        <p className="text-[15px] font-medium leading-[1.65]" style={{ color: '#475569' }}>{data.desc2}</p>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-col gap-3.5 mb-8">
                        {data.testAreas.map((area, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <div className="w-4 h-4 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center shrink-0 mt-[3px]">
                                    <CheckCircle2 size={11} strokeWidth={3} className="text-[#10B981]" />
                                </div>
                                <span className="text-[14.5px] font-semibold text-[#0B1D3A]/90">{area}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={item} className="flex flex-col gap-3 mb-6 w-full">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="group relative overflow-hidden w-full text-white px-6 py-4 rounded text-[14px] font-bold active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_8px_20px_-8px_rgba(11,29,58,0.25)]"
                            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)` }}
                        >
                            <span className="relative z-10">{data.primaryButton}</span> 
                            <ArrowRight size={15} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </button>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-white border border-[#0B1D3A]/15 text-[#0B1D3A] px-6 py-4 rounded text-[14px] font-bold flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform"
                        >
                            {data.secondaryButton}
                        </button>
                    </motion.div>

                    <motion.p variants={item} className="text-[12px] font-medium italic text-center text-[#64748B] px-4">
                        {data.footerText}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full relative"
                >
                    <div className="bg-white/90 backdrop-blur-xl rounded p-7 shadow-[0_15px_40px_-10px_rgba(11,29,58,0.12)] border border-white relative z-10 overflow-hidden">
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-[30px] pointer-events-none"></motion.div>

                        <div className="flex items-center justify-between mb-8 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-white shadow-md">
                                    <ClipboardList size={22} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-0.5">{data.illustrationData.title}</h3>
                                    <p className="text-[12px] font-medium text-[#64748B]">{data.illustrationData.subtitle}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3.5 relative z-10">
                            {data.evaluationFlow.split(' → ').map((step, i) => {
                                const stepColors = [
                                    { bg: 'bg-[#3B82F6]' },
                                    { bg: 'bg-[#10B981]' },
                                    { bg: 'bg-[#8B5CF6]' },
                                    { bg: 'bg-[#F59E0B]' }
                                ];
                                const color = stepColors[i % stepColors.length];
                                
                                return (
                                    <div key={i} className="flex items-center gap-3.5">
                                        <div className={`w-10 h-10 rounded ${color.bg} flex items-center justify-center text-white font-black text-[14px] shadow-sm shrink-0`}>
                                            {i + 1}
                                        </div>
                                        <div className="flex-1 bg-white border border-[#0B1D3A]/[0.06] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] rounded p-3.5">
                                            <span className="text-[14.5px] font-bold text-[#0B1D3A]">{step}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {isModalOpen && <OpenPlotForm />}
            </Modal>
        </section>
    );
}

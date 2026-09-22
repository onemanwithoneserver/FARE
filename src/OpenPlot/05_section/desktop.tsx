import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import { ArrowRight, CheckCircle2, ClipboardList, Sparkles } from 'lucide-react';
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
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="w-full py-16 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #F8FAFD 0%, #EEF4FF 100%)' }}
        >
            
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-gradient-radial from-[#C5D9FF]/50 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[80px] pointer-events-none z-0"></motion.div>

            
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-[1280px] mx-auto px-12 relative z-10 flex items-center justify-between gap-20">

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex-1 max-w-[600px]"
                >

                    <motion.div variants={item} className="mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]" style={{ color: GOLD }}>
                            <Sparkles size={13} className="text-[#C99A2E]" strokeWidth={2.5} />
                            {data.overline}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-6" style={{ color: NAVY }}>
                        {data.headline.split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                                {word === 'Open' || word === 'Plot' || word.includes('Open') || word.includes('Plot') ? <span className="text-[#C99A2E] relative inline-block">
                                    {word} 
                                    <svg className="absolute w-full h-[6px] -bottom-1 left-0 text-[#C99A2E]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
                                </span> : <span>{word} </span>}
                            </React.Fragment>
                        ))}
                    </motion.h2>

                    <motion.div variants={item} className="mb-10 flex flex-col gap-4">
                        <p className="text-[18px] font-bold" style={{ color: NAVY }}>{data.desc1}</p>
                        <p className="text-[17px] font-medium leading-[1.65]" style={{ color: '#475569' }}>{data.desc2}</p>
                    </motion.div>

                    <motion.div variants={item} className="grid grid-cols-2 gap-y-5 gap-x-8 mb-12">
                        {data.testAreas.map((area, idx) => (
                            <div key={idx} className="flex items-start gap-3 group">
                                <div className="w-5 h-5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#10B981] group-hover:border-[#10B981] transition-colors duration-300">
                                    <CheckCircle2 size={13} strokeWidth={3} className="text-[#10B981] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-[16px] font-semibold text-[#0B1D3A]/80 group-hover:text-[#0B1D3A] transition-colors duration-300">{area}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-8">
                        <button className="group relative overflow-hidden text-white px-8 py-4 rounded text-[14px] font-bold hover:shadow-[0_15px_30px_-10px_rgba(11,29,58,0.3)] active:scale-[0.98] transition-all duration-300 flex items-center gap-3"
                            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)` }}
                        >
                            <span className="relative z-10">{data.primaryButton}</span> 
                            <ArrowRight size={16} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </button>
                        <button className="bg-white border border-[#0B1D3A]/15 text-[#0B1D3A] px-8 py-4 rounded text-[14px] font-bold hover:bg-[#F8FAFD] hover:border-[#0B1D3A]/30 transition-all flex items-center gap-2 shadow-sm hover:shadow-[0_8px_20px_-8px_rgba(11,29,58,0.1)] active:scale-[0.98]">
                            {data.secondaryButton}
                        </button>
                    </motion.div>

                    <motion.p variants={item} className="text-[13px] font-medium italic text-[#64748B]">
                        {data.footerText}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40, rotateY: 5 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 max-w-[500px] relative perspective-1000"
                >
                    
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#60A5FA]/10 to-[#C99A2E]/10 rounded-[3rem] -z-10 blur-xl"></div>

                    <div className="bg-white/80 backdrop-blur-xl rounded p-10 shadow-[0_30px_60px_-15px_rgba(11,29,58,0.15)] border border-white relative z-10 overflow-hidden transform-gpu">
                        
                        <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-[#C99A2E]/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="flex items-center justify-between mb-10 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(245,158,11,0.25)] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] transition-transform duration-500 hover:translate-y-0"></div>
                                    <ClipboardList size={26} className="text-white relative z-10" />
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-bold text-[#0B1D3A] leading-tight mb-1">{data.illustrationData.title}</h3>
                                    <p className="text-[13.5px] font-medium text-[#64748B]">{data.illustrationData.subtitle}</p>
                                </div>
                            </div>
                            <div className="px-4 py-1.5 bg-[#C99A2E]/10 text-[#C99A2E] text-[12px] font-bold uppercase tracking-wider rounded-full border border-[#C99A2E]/20">
                                Free
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 relative z-10">
                            {data.evaluationFlow.split(' → ').map((step, i) => {
                                const stepColors = [
                                    { bg: 'bg-[#3B82F6]', text: 'text-[#3B82F6]', light: 'bg-[#3B82F6]/10' },
                                    { bg: 'bg-[#10B981]', text: 'text-[#10B981]', light: 'bg-[#10B981]/10' },
                                    { bg: 'bg-[#8B5CF6]', text: 'text-[#8B5CF6]', light: 'bg-[#8B5CF6]/10' },
                                    { bg: 'bg-[#F59E0B]', text: 'text-[#F59E0B]', light: 'bg-[#F59E0B]/10' }
                                ];
                                const color = stepColors[i % stepColors.length];
                                
                                return (
                                    <div key={i} className="flex items-center gap-4 group cursor-default">
                                        <div className={`w-12 h-12 rounded ${color.bg} flex items-center justify-center text-white font-black text-[16px] shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
                                            <span className="relative z-10">{i + 1}</span>
                                        </div>
                                        <div className={`flex-1 bg-white border border-[#0B1D3A]/[0.06] shadow-sm rounded p-4 group-hover:shadow-[0_8px_20px_-8px_rgba(11,29,58,0.1)] group-hover:border-[#C99A2E]/30 transition-all duration-300 relative overflow-hidden`}>
                                            <div className={`absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${color.bg}`}></div>
                                            <span className="text-[16px] font-bold text-[#0B1D3A] ml-1">{step}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        
                        <div className="mt-10 pt-8 border-t border-[#0B1D3A]/[0.06] flex items-end justify-between h-24 relative overflow-hidden">
                            {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
                                <motion.div 
                                    key={i} 
                                    animate={{ 
                                        height: [`${Math.max(20, h * 0.3)}%`, `${h}%`, `${Math.max(25, h * 0.45)}%`, `${h}%`],
                                        opacity: [0.55, 1, 0.6, 1]
                                    }}
                                    transition={{ 
                                        duration: 2.4, 
                                        repeat: Infinity, 
                                        ease: "easeInOut", 
                                        delay: i * 0.18 
                                    }}
                                    className="w-[10%] bg-gradient-to-t from-[#C99A2E]/45 via-[#E2C068]/30 to-[#C99A2E]/15 rounded-t shadow-[0_0_10px_rgba(201,154,46,0.12)]" 
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, BookOpen, Target, BarChart2 } from 'lucide-react';
import { data } from './data';
import React from 'react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const GOLD = '#C99A2E';
const GOLD_MID = '#D5AA45';
const MUTED_BLUE = '#7B8DAA';

export default function Mobile() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="w-full pt-[90px] pb-16 flex flex-col items-center justify-start overflow-hidden relative font-['Outfit']"
            style={{ background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)` }}
        >
            <div className="absolute top-20 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#DDEAFF]/60 to-transparent rounded-full blur-[60px] pointer-events-none z-0"></div>
            <div className="absolute bottom-20 left-[-50px] w-[250px] h-[250px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[50px] pointer-events-none z-0"></div>

            <div className="w-full px-6 flex flex-col relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="flex flex-col items-start w-full relative z-40"
                >
                    <motion.div variants={item} className="flex items-center gap-2.5 mb-4">
                        <div className="w-8 h-[1.5px]" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}></div>
                        <span className="font-semibold text-[9.5px] tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                            Skill Enhancement For Real Estate
                        </span>
                    </motion.div>

                    <h1 className="text-[3.25rem] leading-[0.95] font-black tracking-[-0.03em] mb-5">
                        <motion.span variants={item} className="block" style={{ color: NAVY }}>{data.headline.line1}</motion.span>
                        <motion.span variants={item} className="block gold-gradient-text">{data.headline.line2}</motion.span>
                        <motion.span variants={item} className="block" style={{ color: NAVY }}>{data.headline.line3}</motion.span>
                    </h1>

                    <motion.div variants={item} className="mb-4">
                        <h2 className="text-[18px] font-bold leading-tight" style={{ color: NAVY_DEEP }}>
                            {data.subheadline.split('. ')[0]}.
                            <span className="block text-[#C99A2E] mt-1">{data.subheadline.split('. ')[1]}</span>
                        </h2>
                    </motion.div>

                    <motion.div variants={item} className="mb-8">
                        <p className="text-[15px] font-medium leading-[1.6]" style={{ color: '#3A4A63' }}>
                            {data.description}
                        </p>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-col w-full gap-3 mb-8">
                        <button
                            className="w-full text-white text-[13.5px] font-semibold px-6 py-3.5 rounded-[4px] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
                            style={{
                                background: NAVY,
                                boxShadow: `0 2px 8px rgba(11,29,58,0.15)`
                            }}
                        >
                            {data.buttons.primary} <ArrowRight size={15} strokeWidth={2.5} />
                        </button>
                        <button
                            className="w-full text-[13.5px] font-semibold px-6 py-3.5 rounded-[4px] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 border"
                            style={{
                                color: NAVY,
                                borderColor: `${NAVY}25`,
                                background: 'white'
                            }}
                        >
                            {data.buttons.secondary} <ArrowRight size={14} strokeWidth={2.5} />
                        </button>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-col gap-2 w-full">
                        <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-[11px] font-medium" style={{ color: MUTED_BLUE }}>
                            {data.features.split(' · ').map((f, i) => (
                                <React.Fragment key={i}>
                                    <span>{f}</span>
                                    {i < data.features.split(' · ').length - 1 && <span className="text-[#C99A2E]">·</span>}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="text-[10.5px] italic text-[#0B1D3A]/60 mt-2 border-t border-[#0B1D3A]/10 pt-2">
                            {data.footerText}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Mobile Illustration */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full mt-12 relative z-20"
                >
                    <div className="w-full bg-gradient-to-br from-[#0B1D3A] to-[#071A49] rounded-2xl p-6 shadow-2xl flex flex-col gap-4 overflow-hidden border border-[#C99A2E]/20 relative">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C99A2E]/20 rounded-full blur-2xl"></div>
                        
                        <h3 className="text-white text-lg font-bold mb-2 flex items-center gap-2 relative z-10">
                            <Target className="text-[#C99A2E]" size={20} /> Open Plot Mastery
                        </h3>

                        <div className="flex flex-col gap-2.5 relative z-10">
                            {[
                                { title: "Custom Onboarding", icon: <BookOpen size={14} />, progress: "100%", color: "#34D399" },
                                { title: "Knowledge Bank", icon: <BarChart2 size={14} />, progress: "85%", color: "#60A5FA" },
                                { title: "Skill Practice", icon: <Target size={14} />, progress: "70%", color: "#C99A2E" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between backdrop-blur-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white" style={{ color: stat.color }}>
                                            {stat.icon}
                                        </div>
                                        <span className="text-white/90 font-medium text-[13px]">{stat.title}</span>
                                    </div>
                                    <span className="text-white/50 text-[11px]">{stat.progress}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, BookOpen, Target, CheckCircle, BarChart2 } from 'lucide-react';
import { data } from './data';
import React from 'react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const GOLD = '#C99A2E';
const GOLD_MID = '#D5AA45';
const MUTED_BLUE = '#7B8DAA';

export default function Desktop() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.15 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 18 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden relative font-['Outfit']"
            style={{ background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)` }}
        >
            <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-[#DDEAFF]/60 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[90px] pointer-events-none z-0"></div>

            <svg className="absolute top-20 left-[10%] w-[400px] h-[400px] opacity-[0.05] pointer-events-none z-0" viewBox="0 0 400 400" fill="none">
                <path d="M50 350 Q200 50 350 350" stroke={GOLD} strokeWidth="1.5" fill="none" />
            </svg>

            <div className="max-w-[1440px] w-full px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="flex flex-col items-start w-full md:w-1/2 relative z-40"
                >
                    <motion.div variants={item} className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-[1.5px]" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}></div>
                        <span className="font-semibold text-[10.5px] tracking-[0.22em] uppercase" style={{ color: GOLD }}>
                            Skill Enhancement For Real Estate
                        </span>
                    </motion.div>

                    <h1 className="text-[5rem] leading-[0.92] font-black tracking-[-0.03em] mb-7">
                        <motion.span variants={item} className="block" style={{ color: NAVY }}>{data.headline.line1}</motion.span>
                        <motion.span variants={item} className="block gold-gradient-text">{data.headline.line2}</motion.span>
                        <motion.span variants={item} className="block" style={{ color: NAVY }}>{data.headline.line3}</motion.span>
                    </h1>

                    <motion.div variants={item} className="mb-4">
                        <h2 className="text-[22px] font-bold leading-tight" style={{ color: NAVY_DEEP }}>
                            {data.subheadline.split('. ')[0]}.
                            <span className="block text-[#C99A2E] mt-1">{data.subheadline.split('. ')[1]}</span>
                        </h2>
                    </motion.div>

                    <motion.div variants={item} className="mb-8">
                        <p className="text-[16px] font-medium leading-[1.6] max-w-[480px]" style={{ color: '#3A4A63' }}>
                            {data.description}
                        </p>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-10">
                        <button
                            className="text-white text-[13.5px] font-semibold px-7 py-3.5 rounded-[4px] hover:shadow-[0_12px_24px_rgba(11,29,58,0.2),0_0_0_1px_rgba(201,154,46,0.15)] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5"
                            style={{
                                background: NAVY,
                                boxShadow: `0 2px 8px rgba(11,29,58,0.15), 0 8px 24px rgba(11,29,58,0.08)`
                            }}
                        >
                            {data.buttons.primary} <ArrowRight size={15} strokeWidth={2.5} />
                        </button>
                        <button
                            className="text-[13.5px] font-semibold px-7 py-3.5 rounded-[4px] hover:bg-[#F8FAFD] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 border"
                            style={{
                                color: NAVY,
                                borderColor: `${NAVY}15`,
                                background: 'white',
                                boxShadow: '0 1px 3px rgba(11,29,58,0.03)'
                            }}
                        >
                            {data.buttons.secondary} <ArrowRight size={14} strokeWidth={2.5} />
                        </button>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-x-2 gap-y-1 text-[12px] font-medium" style={{ color: MUTED_BLUE }}>
                            {data.features.split(' · ').map((f, i) => (
                                <React.Fragment key={i}>
                                    <span>{f}</span>
                                    {i < data.features.split(' · ').length - 1 && <span className="text-[#C99A2E]">·</span>}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="text-[11.5px] italic text-[#0B1D3A]/60 mt-1">
                            {data.footerText}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right side illustration tailored for Open Plot Companies */}
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full md:w-1/2 flex justify-end relative z-20"
                >
                    <div className="relative w-full max-w-[550px] aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D3A] to-[#071A49] rounded-2xl p-8 shadow-2xl flex flex-col gap-4 overflow-hidden border border-[#C99A2E]/20">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C99A2E]/20 rounded-full blur-2xl"></div>
                            
                            <h3 className="text-white text-xl font-bold mb-4 z-10 flex items-center gap-2">
                                <Target className="text-[#C99A2E]" /> Open Plot Mastery
                            </h3>

                            <div className="flex-1 flex flex-col gap-3 z-10">
                                {[
                                    { title: "Custom Onboarding", icon: <BookOpen size={16} />, progress: "100%", color: "#34D399" },
                                    { title: "Knowledge Bank", icon: <BarChart2 size={16} />, progress: "85%", color: "#60A5FA" },
                                    { title: "Skill Practice", icon: <Target size={16} />, progress: "70%", color: "#C99A2E" },
                                    { title: "Daily Habits", icon: <CheckCircle size={16} />, progress: "92%", color: "#F472B6" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between backdrop-blur-sm hover:bg-white/10 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white" style={{ color: stat.color }}>
                                                {stat.icon}
                                            </div>
                                            <span className="text-white/90 font-medium text-sm">{stat.title}</span>
                                        </div>
                                        <div className="flex items-center gap-3 w-1/3">
                                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: stat.progress }}
                                                    transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                                                    className="h-full rounded-full"
                                                    style={{ backgroundColor: stat.color }}
                                                />
                                            </div>
                                            <span className="text-white/50 text-xs">{stat.progress}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating decorative elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-8 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-[#0B1D3A]/5 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#E2F5E9] flex items-center justify-center text-[#059669]">
                                <CheckCircle size={20} />
                            </div>
                            <div>
                                <p className="text-[#0B1D3A] font-bold text-sm">Team Ready</p>
                                <p className="text-[#0B1D3A]/50 text-xs">For next project</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

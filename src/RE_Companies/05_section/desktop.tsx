import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);

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

    return (
        <section className="w-full py-32 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F8FAFD 0%, #EEF4FF 100%)' }}
        >
            {/* Soft decorative background orbs */}
            <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-gradient-radial from-[#3B82F6]/[0.03] to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
            <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[80px] pointer-events-none z-0"></div>

            <div className="max-w-[1320px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-24"
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
                    {/* Animated connecting line */}
                    <div className="absolute top-[45px] left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#0B1D3A]/10 to-transparent">
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C99A2E]/40 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

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

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-32 flex justify-center"
                >
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C99A2E]/20 to-transparent blur-[20px] group-hover:blur-[30px] transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                        <div className="bg-white/80 backdrop-blur-xl px-10 py-5 rounded-2xl border border-[#0B1D3A]/[0.06] shadow-[0_15px_40px_-10px_rgba(11,29,58,0.1)] flex flex-wrap items-center justify-center gap-4 relative z-10">
                            {data.journeyLabel.split(' → ').map((label, idx, arr) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: idx === arr.length - 1 ? GOLD : '#94A3B8' }}></div>
                                        <span className={`font-bold text-[14px] uppercase tracking-[0.15em] ${idx === arr.length - 1 ? 'text-[#0B1D3A]' : 'text-[#64748B]'}`}>{label}</span>
                                    </div>
                                    {idx < arr.length - 1 && <ArrowRight size={16} className="text-[#CBD5E1]" strokeWidth={2.5} />}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

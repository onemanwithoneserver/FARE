import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { User, Server, Plus, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

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
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="w-full py-10 relative font-['Outfit'] overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)' }}>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[60px] pointer-events-none"></motion.div>

            <div className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(#0B1D3A 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="px-5 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-8"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/30 bg-[#C99A2E]/10 shadow-[0_0_15px_rgba(201,154,46,0.15)] backdrop-blur-sm" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-1 bg-clip-text text-transparent bg-gradient-to-b from-[#0B1D3A] to-[#0B1D3A]/70">
                        {data.headline}
                    </motion.h2>
                    <motion.h2 variants={item} className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] drop-shadow-[0_0_20px_rgba(201,154,46,0.3)]" style={{ color: GOLD }}>
                        {data.headlineAccent}
                    </motion.h2>
                </motion.div>

                <div className="flex flex-col gap-6 mb-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/80 backdrop-blur-xl border border-[#0B1D3A]/10 rounded p-6 relative overflow-hidden shadow-[0_10px_20px_-5px_rgba(11,29,58,0.12)]"
                    >
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-bl-full blur-[30px] pointer-events-none"></motion.div>
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C99A2E] to-transparent opacity-70"></div>
                        
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-14 h-14 rounded bg-gradient-to-br from-[#C99A2E] to-[#B88A22] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(201,154,46,0.4)]">
                                <User size={24} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-[22px] font-bold text-[#0B1D3A]">
                                {data.youBring.title}
                            </h3>
                        </div>

                        <ul className="flex flex-col gap-4 relative z-10">
                            {data.youBring.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-[15px] font-medium text-[#475569]">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C99A2E] shrink-0 shadow-[0_0_5px_rgba(201,154,46,0.8)]"></div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="flex items-center justify-center py-2">
                        <div className="w-12 h-12 rounded-full bg-[#0B1D3A]/5 border border-[#0B1D3A]/10 flex items-center justify-center text-[#0B1D3A]/40 shadow-inner backdrop-blur-md relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#0B1D3A]/5 rotate-45"></div>
                            <Plus size={24} strokeWidth={2.5} className="relative z-10" />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/80 backdrop-blur-xl border border-[#0B1D3A]/10 rounded p-6 relative overflow-hidden shadow-[0_10px_20px_-5px_rgba(11,29,58,0.12)]"
                    >
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 bg-[#60A5FA]/10 rounded-bl-full blur-[30px] pointer-events-none"></motion.div>
                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#60A5FA] to-transparent opacity-70"></div>
                        
                        <div className="flex items-center gap-4 mb-6 relative z-10 flex-row-reverse">
                            <div className="w-14 h-14 rounded bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(59,130,246,0.4)]">
                                <Server size={24} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-[22px] font-bold text-[#0B1D3A] text-right flex-grow">
                                {data.fareBrings.title}
                            </h3>
                        </div>

                        <ul className="flex flex-col gap-4 relative z-10">
                            {data.fareBrings.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-[15px] font-medium text-[#475569] flex-row-reverse text-right">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#60A5FA] shrink-0 shadow-[0_0_5px_rgba(96,165,250,0.8)]"></div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-white/90 to-[#F8FAFD]/70 backdrop-blur-2xl border border-[#0B1D3A]/10 rounded p-8 flex flex-col items-center relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(11,29,58,0.15)]"
                >
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-40 h-40 bg-[#C99A2E]/10 rounded-full blur-[40px] pointer-events-none"></motion.div>

                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#0B1D3A]/10 bg-[#0B1D3A]/5 backdrop-blur-md mb-8">
                        <Zap size={14} className="text-[#C99A2E]" />
                        <h3 className="text-[12px] font-bold text-[#0B1D3A] uppercase tracking-[0.2em] text-center">
                            {data.together.title}
                        </h3>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4 w-full relative z-10">
                        {data.together.flow.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-4 w-full">
                                <span className="text-[16px] font-bold text-[#0B1D3A] bg-[#0B1D3A]/[0.04] px-6 py-4 rounded border border-[#0B1D3A]/10 shadow-[0_4px_10px_-2px_rgba(11,29,58,0.08)] w-full text-center">
                                    {step}
                                </span>
                                {idx < data.together.flow.length - 1 && (
                                    <div className="w-8 h-8 rounded-full bg-[#0B1D3A]/5 border border-[#0B1D3A]/10 flex items-center justify-center shrink-0">
                                        <ArrowRight size={16} className="text-[#C99A2E] rotate-90" strokeWidth={2.5} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 text-center flex flex-col items-center gap-5"
                >
                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/50 to-transparent"></div>
                    <p className="text-[18px] font-bold text-[#0B1D3A] tracking-wide px-4">
                        {data.footerText}
                    </p>
                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/50 to-transparent"></div>
                </motion.div>
            </div>
        </section>
    );
}

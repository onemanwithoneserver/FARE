import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { User, Server, Plus, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

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
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="w-full py-20 bg-[#0B1D3A] relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1240px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-24"
                >

                    <motion.div variants={item} className="mb-4">
                        <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#C99A2E]">
                            {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-4 text-white">
                        {data.headline}
                    </motion.h2>
                    <motion.div variants={item} className="mb-4">
                        <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#C99A2E]">
                            {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em]" style={{ color: GOLD }}>
                        {data.headlineAccent}
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-stretch max-w-[1000px] mx-auto mb-20 relative">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 hover:bg-white/[0.06] transition-colors relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-32 h-32 bg-[#C99A2E]/10 rounded-br-full blur-2xl transition-all duration-500 group-hover:bg-[#C99A2E]/20 group-hover:blur-3xl"></div>
                        
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#C99A2E] flex items-center justify-center text-white shadow-[0_4px_15px_rgba(201,154,46,0.3)]">
                                <User size={24} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-[24px] font-bold text-white">
                                {data.youBring.title}
                            </h3>
                        </div>

                        <ul className="flex flex-col gap-4 relative z-10">
                            {data.youBring.items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-[16px] font-medium text-white/70">
                                    <div className="w-2 h-2 rounded-full bg-[#C99A2E]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/30">
                            <Plus size={24} strokeWidth={3} />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 hover:bg-white/[0.06] transition-colors relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#60A5FA]/10 rounded-bl-full blur-3xl transition-all duration-500 group-hover:bg-[#60A5FA]/20 group-hover:blur-[60px]"></div>
                        
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#60A5FA] flex items-center justify-center text-white shadow-[0_4px_15px_rgba(96,165,250,0.3)]">
                                <Server size={24} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-[24px] font-bold text-white">
                                {data.fareBrings.title}
                            </h3>
                        </div>

                        <ul className="flex flex-col gap-4 relative z-10">
                            {data.fareBrings.items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-[16px] font-medium text-white/70">
                                    <div className="w-2 h-2 rounded-full bg-[#60A5FA]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[1000px] mx-auto bg-white/[0.02] border border-white/10 rounded-3xl p-10 flex flex-col items-center relative overflow-hidden"
                >
                    <h3 className="text-[20px] font-bold text-white mb-8 uppercase tracking-widest text-center">
                        {data.together.title}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-6 flex-wrap">
                        {data.together.flow.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-6">
                                <span className="text-[18px] font-bold text-white bg-white/5 px-6 py-3 rounded-xl border border-white/10 shadow-sm">
                                    {step}
                                </span>
                                {idx < data.together.flow.length - 1 && (
                                    <ArrowRight size={20} className="text-[#C99A2E]" strokeWidth={2.5} />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <p className="text-[18px] font-medium text-white/50 italic">
                        "{data.footerText}"
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

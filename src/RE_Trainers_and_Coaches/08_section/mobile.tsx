import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { User, Server, Plus, ArrowRight } from 'lucide-react';
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
        <section className="w-full py-12 bg-[#0B1D3A] relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <div className="px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-16"
                >

                    <motion.div variants={item} className="mb-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C99A2E]">
                            {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[2.25rem] leading-[1.15] font-black tracking-[-0.02em] mb-2 text-white">
                        {data.headline}
                    </motion.h2>
                    <motion.div variants={item} className="mb-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C99A2E]">
                            {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[2.25rem] leading-[1.15] font-black tracking-[-0.02em]" style={{ color: GOLD }}>
                        {data.headlineAccent}
                    </motion.h2>
                </motion.div>

                <div className="flex flex-col gap-6 mb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#C99A2E]/10 rounded-bl-full blur-[20px]"></div>
                        
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-[#C99A2E] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(201,154,46,0.3)]">
                                <User size={20} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-[20px] font-bold text-white">
                                {data.youBring.title}
                            </h3>
                        </div>

                        <ul className="flex flex-col gap-3 relative z-10">
                            {data.youBring.items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-[14.5px] font-medium text-white/70">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] shrink-0"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/30">
                            <Plus size={20} strokeWidth={3} />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#60A5FA]/10 rounded-bl-full blur-[30px]"></div>
                        
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-[#60A5FA] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(96,165,250,0.3)]">
                                <Server size={20} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-[20px] font-bold text-white">
                                {data.fareBrings.title}
                            </h3>
                        </div>

                        <ul className="flex flex-col gap-3 relative z-10">
                            {data.fareBrings.items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-[14.5px] font-medium text-white/70">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shrink-0"></div>
                                    {item}
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
                    className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col items-center relative overflow-hidden"
                >
                    <h3 className="text-[16px] font-bold text-white mb-5 uppercase tracking-widest text-center">
                        {data.together.title}
                    </h3>
                    
                    <div className="flex flex-col items-center gap-3 w-full">
                        {data.together.flow.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3 w-full">
                                <span className="text-[15px] font-bold text-white bg-white/5 px-5 py-3 rounded-xl border border-white/10 shadow-sm w-full text-center">
                                    {step}
                                </span>
                                {idx < data.together.flow.length - 1 && (
                                    <ArrowRight size={18} className="text-[#C99A2E] rotate-90" strokeWidth={2.5} />
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
                    className="mt-12 text-center"
                >
                    <p className="text-[14px] font-medium text-white/50 italic">
                        "{data.footerText}"
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

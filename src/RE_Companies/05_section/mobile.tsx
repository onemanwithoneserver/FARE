import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="w-full py-12 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F8FAFD 0%, #EEF4FF 100%)' }}
        >
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#3B82F6]/[0.04] to-transparent rounded-full blur-[60px] pointer-events-none"></motion.div>

            <div className="w-full px-5 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-8"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]" style={{ color: GOLD }}>
                            <Sparkles size={12} />
                            {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[2rem] leading-[1.12] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {data.headline}
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col gap-10 relative px-2"
                >
                    
                    <div className="absolute top-[25px] bottom-[25px] left-[32px] w-[2px] bg-gradient-to-b from-transparent via-[#0B1D3A]/10 to-transparent">
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C99A2E]/40 to-transparent"
                            animate={{ y: ['-100%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    {data.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="flex items-start gap-5 relative z-10"
                        >
                            <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-white/80 backdrop-blur-sm border border-[#0B1D3A]/10 flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(11,29,58,0.1)] relative">
                                <div className="absolute inset-0 rounded-full border border-[#C99A2E]/20 scale-[1.1]"></div>
                                <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] flex items-center justify-center shadow-inner">
                                    <span className="text-white text-[16px] font-bold font-serif">{step.number}</span>
                                </div>
                            </div>
                            <div className="flex flex-col pt-1 bg-white/40 backdrop-blur-sm border border-[#0B1D3A]/[0.04] p-4 rounded shadow-[0_2px_10px_-2px_rgba(11,29,58,0.03)] w-full">
                                <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-2">{step.title}</h3>
                                <p className="text-[14.5px] text-[#475569] font-medium leading-[1.65]">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-10 flex justify-center w-full"
                >
                    <div className="w-full bg-white/80 backdrop-blur-xl px-5 py-6 rounded border border-[#0B1D3A]/[0.06] shadow-[0_10px_30px_-5px_rgba(11,29,58,0.08)] flex flex-col items-center justify-center gap-3 text-center">
                        {data.journeyLabel.split(' → ').map((label, idx, arr) => (
                            <div key={idx} className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: idx === arr.length - 1 ? GOLD : '#94A3B8' }}></div>
                                    <span className={`font-bold text-[12px] uppercase tracking-[0.15em] ${idx === arr.length - 1 ? 'text-[#0B1D3A]' : 'text-[#64748B]'}`}>{label}</span>
                                </div>
                                {idx < arr.length - 1 && <ArrowDown size={14} className="text-[#CBD5E1]" strokeWidth={2.5} />}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

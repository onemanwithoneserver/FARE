import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';

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
        <section className="w-full py-20 bg-[#F8FAFD] relative font-['Outfit'] overflow-hidden">
            <div className="w-full px-6 relative z-10">
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
                    <motion.h2 variants={item} className="text-[2rem] leading-[1.12] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {data.headline}
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col gap-8 relative px-4"
                >
                    <div className="absolute top-0 bottom-0 left-[34px] w-[2px] bg-gradient-to-b from-transparent via-[#C99A2E]/30 to-transparent"></div>

                    {data.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="flex items-start gap-6 relative z-10"
                        >
                            <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-white border border-[#C99A2E]/30 flex items-center justify-center shadow-sm mt-1">
                                <div className="w-[36px] h-[36px] rounded-full bg-gradient-to-br from-[#0B1D3A] to-[#071A49] flex items-center justify-center">
                                    <span className="text-white text-[16px] font-bold font-serif">{step.number}</span>
                                </div>
                            </div>
                            <div className="flex flex-col pt-1">
                                <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-2">{step.title}</h3>
                                <p className="text-[14px] text-[#596780] font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex justify-center"
                >
                    <div className="bg-white px-5 py-4 rounded-xl border border-[#0B1D3A]/10 shadow-sm flex flex-col items-center justify-center gap-2 text-center">
                        {data.journeyLabel.split(' → ').map((label, idx, arr) => (
                            <div key={idx} className="flex flex-col items-center gap-2">
                                <span className="text-[#0B1D3A] font-bold text-[12px] uppercase tracking-wider">{label}</span>
                                {idx < arr.length - 1 && <ArrowDown size={12} className="text-[#C99A2E]" strokeWidth={3} />}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';

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
        <section className="w-full py-32 bg-[#F8FAFD] relative font-['Outfit'] overflow-hidden">
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
                    <motion.h2 variants={item} className="text-[2.5rem] lg:text-[3rem] leading-[1.1] font-black tracking-[-0.02em] mb-6 max-w-[800px]" style={{ color: NAVY }}>
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
                    <div className="absolute top-[35px] left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C99A2E]/30 to-transparent"></div>

                    {data.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="flex-1 flex flex-col items-center text-center relative z-10 group"
                        >
                            <div className="w-[70px] h-[70px] rounded-full bg-white border border-[#C99A2E]/30 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative">
                                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#0B1D3A] to-[#071A49] flex items-center justify-center">
                                    <span className="text-white text-[20px] font-bold font-serif">{step.number}</span>
                                </div>
                            </div>
                            <h3 className="text-[20px] font-bold text-[#0B1D3A] mb-3">{step.title}</h3>
                            <p className="text-[14px] text-[#596780] font-medium leading-relaxed px-2">{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ delay: 0.8 }}
                    className="mt-24 flex justify-center"
                >
                    <div className="bg-white px-8 py-4 rounded-full border border-[#0B1D3A]/10 shadow-sm flex flex-wrap items-center justify-center gap-3">
                        {data.journeyLabel.split(' → ').map((label, idx, arr) => (
                            <div key={idx} className="flex items-center gap-3">
                                <span className="text-[#0B1D3A] font-bold text-[14px] uppercase tracking-wider">{label}</span>
                                {idx < arr.length - 1 && <ArrowRight size={14} className="text-[#C99A2E]" strokeWidth={3} />}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

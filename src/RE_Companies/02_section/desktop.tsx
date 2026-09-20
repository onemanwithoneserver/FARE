import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { AlertCircle } from 'lucide-react';
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
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="w-full py-32 bg-white relative font-['Outfit'] overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-20"
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
                >
                    {data.challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-[#F8FAFD] border border-[#0B1D3A]/5 rounded-2xl p-6 flex items-start gap-4 hover:shadow-[0_10px_30px_-10px_rgba(11,29,58,0.1)] transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#EF4444] text-white shadow-sm flex items-center justify-center shrink-0">
                                <AlertCircle size={20} strokeWidth={2.5} />
                            </div>
                            <p className="text-[16px] font-semibold text-[#0B1D3A] leading-snug pt-1.5">
                                {challenge}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-[#0B1D3A] to-[#071A49] rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #C99A2E 0%, transparent 70%)' }}></div>
                    <h3 className="text-white text-[24px] md:text-[28px] font-medium leading-snug max-w-[800px] mx-auto mb-6 relative z-10">
                        {data.transitionTitle}
                    </h3>
                    <h4 className="text-[#C99A2E] text-[32px] md:text-[40px] font-black tracking-tight relative z-10">
                        {data.transitionSubtitle}
                    </h4>
                </motion.div>
            </div>
        </section>
    );
}

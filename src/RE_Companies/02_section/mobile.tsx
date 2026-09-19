import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { AlertCircle } from 'lucide-react';
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
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    const sectionSubtitle = data.title.includes(' - ') ? data.title.split(' - ')[1] : data.title.includes(' — ') ? data.title.split(' — ')[1] : data.title;

    return (
        <section className="w-full py-20 bg-white relative font-['Outfit'] overflow-hidden">
            <div className="w-full px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-3">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                            {sectionSubtitle}
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
                    className="flex flex-col gap-4 mb-16"
                >
                    {data.challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-[#F8FAFD] border border-[#0B1D3A]/5 rounded-xl p-5 flex items-start gap-4"
                        >
                            <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                                <AlertCircle size={16} strokeWidth={2.5} />
                            </div>
                            <p className="text-[15px] font-semibold text-[#0B1D3A] leading-snug">
                                {challenge}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-[#0B1D3A] to-[#071A49] rounded-2xl p-8 text-center shadow-xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #C99A2E 0%, transparent 70%)' }}></div>
                    <h3 className="text-white text-[18px] font-medium leading-snug mb-5 relative z-10">
                        {data.transitionTitle}
                    </h3>
                    <h4 className="text-[#C99A2E] text-[24px] font-black tracking-tight relative z-10">
                        {data.transitionSubtitle}
                    </h4>
                </motion.div>
            </div>
        </section>
    );
}

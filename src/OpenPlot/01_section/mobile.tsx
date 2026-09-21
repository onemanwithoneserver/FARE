import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import openplotHero from '../../assets/openplot_hero.jpg';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';
const GOLD_MID = '#D5AA45';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="w-full pt-[50px] -mt-6 pb-14 flex flex-col items-center justify-start overflow-hidden relative font-['Outfit']"
            style={{ background: `linear-gradient(160deg, #FFFFFF 0%, #F8FAFD 40%, #EEF4FF 100%)` }}
        >
            <div className="absolute top-20 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#DDEAFF]/60 to-transparent rounded-full blur-[60px] pointer-events-none z-0"></div>
            <div className="absolute bottom-20 left-[-50px] w-[250px] h-[250px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[50px] pointer-events-none z-0"></div>

            <div className="w-full px-5 flex flex-col items-center relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="flex flex-col items-center text-center w-full relative z-40"
                >
                    <motion.div variants={item} className="flex items-center gap-2 mb-5">
                        <div className="w-6 h-[1.5px]" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}></div>
                        <span className="font-semibold text-[9px] tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                            {data.tagline}
                        </span>
                        <div className="w-6 h-[1.5px]" style={{ background: `linear-gradient(90deg, ${GOLD_MID}, ${GOLD})` }}></div>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className={`font-black mb-4 ${
                            language === 'te'
                                ? 'text-[1.85rem] sm:text-[2.1rem] leading-[1.15] tracking-wider py-1'
                                : 'text-[2.25rem] sm:text-[2.5rem] leading-[1.08] tracking-[-0.03em]'
                        }`}
                        style={{ color: NAVY }}
                    >
                        {data.headline}
                    </motion.h1>

                    <motion.div variants={item} className="mb-1.5">
                        <h2 className={`font-bold ${
                            language === 'te' ? 'text-[15px] leading-normal tracking-wider py-0.5' : 'text-[16px] leading-snug'
                        }`} style={{ color: NAVY }}>
                            {data.subheadline}
                        </h2>
                    </motion.div>
                    <motion.div variants={item} className="mb-5">
                        <h2 className={`font-bold ${
                            language === 'te' ? 'text-[15px] leading-normal tracking-wider py-0.5' : 'text-[16px] leading-snug'
                        }`} style={{ color: GOLD }}>
                            {data.subheadlineAccent}
                        </h2>
                    </motion.div>

                    <motion.p variants={item} className="text-[14.5px] font-medium leading-[1.65] mb-8 max-w-[420px]" style={{ color: '#3A4A63' }}>
                        {data.description}
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col gap-3 mb-8 w-full max-w-[280px] mx-auto">
                        <button
                            className="text-white text-[13px] font-semibold w-full py-3.5 rounded-[6px] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(11,29,58,0.18)]"
                            style={{ background: NAVY }}
                        >
                            {data.buttons.primary} <ArrowRight size={14} strokeWidth={2.5} />
                        </button>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-4">
                        {data.features.map((f, i) => (
                            <span key={i} className="px-3 py-1 rounded-full text-[11px] font-semibold border border-[#0B1D3A]/10 bg-white text-[#3A4A63] shadow-[0_1px_2px_rgba(11,29,58,0.04)]">
                                {f}
                            </span>
                        ))}
                    </motion.div>

                    <motion.p variants={item} className="text-[10.5px] italic text-[#0B1D3A]/50">
                        {data.footerText}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full mt-10 relative z-20 flex items-center justify-center px-4"
                >
                    <div className="relative w-full aspect-square max-w-[400px] rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(11,29,58,0.3)] border border-[#C99A2E]/15">
                        <img src={openplotHero} alt="Open Plot Hero" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

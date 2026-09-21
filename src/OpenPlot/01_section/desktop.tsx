import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';
import openplotHero from '../../assets/openplot_hero.jpg';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';
const GOLD_MID = '#D5AA45';

export default function Desktop() {
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
        hidden: { opacity: 0, y: 18 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            className="w-full -mt-8 lg:-mt-16 flex items-center justify-center overflow-x-clip relative font-['Outfit']"
            style={{ background: `linear-gradient(160deg, #FFFFFF 0%, #F8FAFD 40%, #EEF4FF 100%)` }}
        >
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#DDEAFF]/60 to-transparent rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="max-w-[1280px] w-full px-8 lg:px-12 py-16 lg:py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        className="lg:col-span-7 flex flex-col items-start text-left"
                    >
                        <motion.div variants={item} className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-[2px]" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}></div>
                            <span className="font-bold text-[11px] tracking-[0.22em] uppercase" style={{ color: GOLD }}>
                                {data.tagline}
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={item}
                            className={`font-black mb-5 text-[#0B1D3A] ${
                                language === 'te'
                                    ? 'text-[2.35rem] xl:text-[2.9rem] leading-[1.15] tracking-wider py-1'
                                    : 'text-[2.75rem] xl:text-[3.5rem] leading-[1.1] tracking-[-0.03em]'
                            }`}
                        >
                            {data.headline}
                        </motion.h1>

                        <motion.div variants={item} className="mb-4">
                            <h2 className={`font-bold text-[#0B1D3A] ${
                                language === 'te' ? 'text-[17px] xl:text-[19px] leading-normal tracking-wider py-1' : 'text-[19px] xl:text-[21px] leading-snug'
                            }`}>
                                {data.subheadline}
                            </h2>
                            <h2 className={`font-bold ${
                                language === 'te' ? 'text-[17px] xl:text-[19px] leading-normal tracking-wider py-1' : 'text-[19px] xl:text-[21px] leading-snug'
                            }`} style={{ color: GOLD }}>
                                {data.subheadlineAccent}
                            </h2>
                        </motion.div>

                        <motion.p
                            variants={item}
                            className="text-[15.5px] font-medium leading-[1.7] text-[#3A4A63] mb-8 max-w-[580px]"
                        >
                            {data.description}
                        </motion.p>

                        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-8">
                            <button
                                className="text-white text-[14px] font-semibold px-7 py-3.5 rounded-[6px] hover:shadow-[0_12px_24px_rgba(11,29,58,0.22),0_0_0_1px_rgba(201,154,46,0.2)] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 shadow-[0_4px_14px_rgba(11,29,58,0.18)]"
                                style={{ background: NAVY }}
                            >
                                {data.buttons.primary} <ArrowRight size={15} strokeWidth={2.5} />
                            </button>
                        </motion.div>

                        <motion.div variants={item} className="flex flex-wrap gap-2 mb-4">
                            {data.features.map((f, i) => (
                                <span
                                    key={i}
                                    className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold border border-[#0B1D3A]/10 bg-white/80 backdrop-blur-sm text-[#3A4A63] shadow-[0_1px_3px_rgba(11,29,58,0.04)] hover:border-[#C99A2E]/40 hover:text-[#C99A2E] transition-colors cursor-default"
                                >
                                    {f}
                                </span>
                            ))}
                        </motion.div>

                        <motion.p variants={item} className="text-[12px] italic text-[#0B1D3A]/55">
                            {data.footerText}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative w-full flex items-center justify-center"
                    >
                        <div className="relative w-full aspect-square max-w-[500px] rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(11,29,58,0.4)] border border-white/40">
                            <img src={openplotHero} alt="Open Plot Hero" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

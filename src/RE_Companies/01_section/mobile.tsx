import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, BookOpen, Target, BarChart2, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

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
        <section className="w-full pt-[90px] pb-14 flex flex-col items-center justify-start overflow-hidden relative font-['Outfit']"
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

                    <motion.div variants={item} className="flex flex-col w-full gap-3 mb-8 max-w-[380px]">
                        <button
                            className="w-full text-white text-[13.5px] font-semibold px-6 py-3.5 rounded-[4px] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
                            style={{
                                background: NAVY,
                                boxShadow: `0 2px 8px rgba(11,29,58,0.15)`
                            }}
                        >
                            {data.buttons.primary} <ArrowRight size={15} strokeWidth={2.5} />
                        </button>
                        <button
                            className="w-full text-[13.5px] font-semibold px-6 py-3.5 rounded-[4px] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 border"
                            style={{
                                color: NAVY,
                                borderColor: `${NAVY}25`,
                                background: 'white'
                            }}
                        >
                            {data.buttons.secondary} <ArrowRight size={14} strokeWidth={2.5} />
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
                    className="w-full mt-10 relative z-20"
                >
                    <div className="w-full bg-gradient-to-br from-[#0B1D3A] to-[#071A49] rounded-2xl p-5 shadow-[0_20px_50px_-15px_rgba(11,29,58,0.3)] border border-[#C99A2E]/15 overflow-hidden relative">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C99A2E]/15 rounded-full blur-2xl"></div>

                        <div className="flex items-center justify-between mb-4 relative z-10">
                            <h3 className="text-white text-[15px] font-bold flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-[#C99A2E] flex items-center justify-center text-white shadow-sm">
                                    <Target className="text-white" size={15} strokeWidth={2.5} />
                                </div>
                                {data.dashboard.title}
                            </h3>
                            <div className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse"></div>
                                <span className="text-white/70 text-[10px] font-medium">{data.dashboard.floatingBadge.title}</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 relative z-10">
                            {data.dashboard.stats.map((stat, i) => {
                                const icons = [
                                    <BookOpen size={14} key="bo" className="text-white" />,
                                    <BarChart2 size={14} key="ba" className="text-white" />,
                                    <Target size={14} key="ta" className="text-white" />,
                                    <CheckCircle size={14} key="cc" className="text-white" />
                                ];
                                return (
                                    <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-3.5 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm text-white" style={{ backgroundColor: stat.color }}>
                                            {icons[i]}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-white/90 font-medium text-[13px] block truncate">{stat.title}</span>
                                            <div className="flex items-center gap-2 mt-1.5">
                                                <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: stat.progress }}
                                                        transition={{ duration: 1.2, delay: 0.3 + (i * 0.12), ease: [0.16, 1, 0.3, 1] }}
                                                        className="h-full rounded-full"
                                                        style={{ backgroundColor: stat.color }}
                                                    />
                                                </div>
                                                <span className="text-white/50 text-[10px] font-semibold">{stat.progress}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

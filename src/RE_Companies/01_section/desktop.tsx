import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, BookOpen, Target, CheckCircle, BarChart2, Sparkles, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

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
            className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-x-clip relative font-['Outfit']"
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
                            <button
                                className="text-[14px] font-semibold px-7 py-3.5 rounded-[6px] hover:bg-[#F8FAFD] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 border bg-white shadow-[0_2px_8px_rgba(11,29,58,0.04)]"
                                style={{
                                    color: NAVY,
                                    borderColor: `${NAVY}25`
                                }}
                            >
                                {data.buttons.secondary} <ArrowRight size={14} strokeWidth={2.5} />
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
                        className="lg:col-span-5 relative w-full"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#C99A2E]/20 to-[#60A5FA]/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative bg-gradient-to-br from-[#0B1D3A] via-[#0F2751] to-[#071A49] rounded-2xl p-7 xl:p-8 shadow-[0_25px_60px_-15px_rgba(11,29,58,0.4)] border border-[#C99A2E]/20 overflow-hidden">
                            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#C99A2E]/15 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#60A5FA]/12 rounded-full blur-2xl pointer-events-none"></div>

                            <div className="flex items-center justify-between mb-6 relative z-10 border-b border-white/[0.08] pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C99A2E] to-[#D5AA45] flex items-center justify-center shadow-[0_4px_12px_rgba(201,154,46,0.3)]">
                                        <Target className="text-white" size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-[16px] font-bold tracking-tight">
                                            {data.dashboard.title}
                                        </h3>
                                        <p className="text-white/50 text-[11px] font-medium flex items-center gap-1.5 mt-0.5">
                                            <Sparkles size={11} className="text-[#C99A2E]" /> Open Plot Training Matrix
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                                    <div className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse"></div>
                                    <span className="text-white/80 text-[11px] font-semibold tracking-wide">
                                        {data.dashboard.floatingBadge.title}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3.5 relative z-10 mb-6">
                                {data.dashboard.stats.map((stat, i) => {
                                    const icons = [
                                        <BookOpen size={16} key="bo" className="text-white" />,
                                        <BarChart2 size={16} key="ba" className="text-white" />,
                                        <Target size={16} key="ta" className="text-white" />,
                                        <CheckCircle size={16} key="cc" className="text-white" />
                                    ];
                                    return (
                                        <div
                                            key={i}
                                            className="bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.18] rounded-xl p-3.5 xl:p-4 hover:bg-white/[0.07] transition-all duration-300"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2.5">
                                                    <div
                                                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow-sm text-white"
                                                        style={{ backgroundColor: stat.color }}
                                                    >
                                                        {icons[i]}
                                                    </div>
                                                    <span className="text-white/90 font-semibold text-[13.5px]">
                                                        {stat.title}
                                                    </span>
                                                </div>
                                                <span
                                                    className="font-bold text-[13px] tracking-tight"
                                                    style={{ color: stat.color }}
                                                >
                                                    {stat.progress}
                                                </span>
                                            </div>

                                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: stat.progress }}
                                                    transition={{ duration: 1.2, delay: 0.3 + (i * 0.15), ease: [0.16, 1, 0.3, 1] }}
                                                    className="h-full rounded-full"
                                                    style={{ backgroundColor: stat.color }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="relative z-10 bg-white/[0.05] border border-white/[0.08] rounded-xl p-3 flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-6 h-6 rounded-md bg-[#C99A2E] flex items-center justify-center text-white shadow-sm">
                                        <Award size={13} className="text-white" />
                                    </div>
                                    <span className="text-white/70 text-[11.5px] font-medium">
                                        {data.dashboard.floatingBadge.subtitle}
                                    </span>
                                </div>
                                <span className="text-[#34D399] text-[11px] font-bold uppercase tracking-wider bg-[#34D399]/15 px-2 py-0.5 rounded">
                                    Active
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

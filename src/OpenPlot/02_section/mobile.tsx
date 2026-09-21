import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { TrendingDown, RefreshCcw, AlertCircle, BarChart2, Users, Target, HelpCircle, Clock, Award, ArrowRight } from 'lucide-react';
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
            transition: { staggerChildren: 0.06, delayChildren: 0.1 }
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

    const icons = [
        { icon: <TrendingDown size={18} />, color: "#EF4444" },
        { icon: <RefreshCcw size={18} />, color: "#F59E0B" },
        { icon: <AlertCircle size={18} />, color: "#3B82F6" },
        { icon: <BarChart2 size={18} />, color: "#8B5CF6" },
        { icon: <Users size={18} />, color: "#EC4899" },
        { icon: <Target size={18} />, color: "#10B981" },
        { icon: <HelpCircle size={18} />, color: "#6366F1" },
        { icon: <Clock size={18} />, color: "#F97316" },
        { icon: <Award size={18} />, color: "#06B6D4" }
    ];

    return (
        <section className="w-full py-20 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F8FAFD 0%, #F1F5FB 100%)' }}
        >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#DBEAFE]/30 to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <div className="px-5 relative z-10">
                {/* Section Header */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {data.title}
                    </motion.h2>

                    <motion.p variants={item} className="text-[15px] font-medium leading-[1.6] text-[#475569]">
                        {data.subtitle}
                    </motion.p>
                </motion.div>

                {/* Challenge Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col gap-3 mb-14"
                >
                    {data.challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-white/70 backdrop-blur-sm border border-[#0B1D3A]/[0.06] rounded-xl p-4 shadow-[0_2px_8px_-2px_rgba(11,29,58,0.05)] flex items-center gap-4"
                        >
                            <div className="p-2.5 rounded-xl text-white shadow-sm shrink-0" style={{ backgroundColor: icons[index].color }}>
                                {icons[index].icon}
                            </div>
                            <h3 className="text-[14px] font-bold leading-snug text-left" style={{ color: NAVY }}>
                                {challenge}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Transition CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="w-full rounded-2xl p-8 shadow-[0_15px_40px_-10px_rgba(11,29,58,0.25)] relative overflow-hidden text-center"
                    style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0F2751 100%)` }}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-[40px]"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#60A5FA]/10 rounded-full blur-[40px]"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/40 to-transparent"></div>

                    <h3 className="text-[20px] font-bold text-white mb-3 relative z-10 leading-snug">
                        {data.transitionTitle}
                    </h3>
                    <p className="text-[16px] font-semibold text-[#C99A2E] flex items-center justify-center gap-2 relative z-10 mt-4">
                        {data.transitionSubtitle}
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowRight size={16} />
                        </motion.span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

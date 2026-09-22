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
        { Icon: TrendingDown, color: "#EF4444" },
        { Icon: RefreshCcw, color: "#F59E0B" },
        { Icon: AlertCircle, color: "#3B82F6" },
        { Icon: BarChart2, color: "#8B5CF6" },
        { Icon: Users, color: "#EC4899" },
        { Icon: Target, color: "#10B981" },
        { Icon: HelpCircle, color: "#6366F1" },
        { Icon: Clock, color: "#F97316" },
        { Icon: Award, color: "#06B6D4" }
    ];

    return (
        <section className="w-full py-10 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F8FAFD 0%, #F1F5FB 100%)' }}
        >
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#DBEAFE]/30 to-transparent rounded-full blur-[60px] pointer-events-none"></motion.div>

            <div className="px-5 relative z-10">
                
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

                
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col gap-3 mb-14"
                >
                    {data.challenges.map((challenge, index) => {
                        const { Icon, color } = icons[index];
                        return (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-red-50/40 backdrop-blur-sm border border-red-100 rounded p-4 shadow-[0_2px_8px_-2px_rgba(220,38,38,0.1)] flex items-center gap-4 relative overflow-hidden"
                        >
                            <motion.div animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#EF4444]/15 to-transparent rounded-bl-full blur-[20px] pointer-events-none"></motion.div>

                            <div 
                                className="w-10 h-10 rounded-xl shadow-inner flex items-center justify-center shrink-0 relative overflow-hidden"
                                style={{ backgroundColor: color }}
                            >
                                <Icon size={20} className="text-white relative z-10" />
                            </div>
                            <h3 className="text-[14px] font-bold leading-snug text-left relative z-10" style={{ color: NAVY }}>
                                {challenge}
                            </h3>
                        </motion.div>
                        );
                    })}
                </motion.div>

                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="w-full rounded p-8 shadow-[0_15px_40px_-10px_rgba(11,29,58,0.25)] relative overflow-hidden text-center"
                    style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0F2751 100%)` }}
                >
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-[40px]"></motion.div>
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-32 h-32 bg-[#60A5FA]/10 rounded-full blur-[40px]"></motion.div>
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

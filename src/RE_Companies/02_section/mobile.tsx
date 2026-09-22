import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { PhoneOff, UserMinus, ShieldAlert, Users, TrendingDown, Repeat, HelpCircle, Clock, UserCog, ArrowRight } from 'lucide-react';
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
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    };

    const colors = ["#EF4444", "#F59E0B", "#3B82F6", "#8B5CF6", "#EC4899", "#10B981", "#6366F1", "#F97316", "#06B6D4"];
    const icons = [PhoneOff, UserMinus, ShieldAlert, Users, TrendingDown, Repeat, HelpCircle, Clock, UserCog];

    return (
        <section className="w-full py-10 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #EEF4FF 0%, #FFFFFF 100%)' }}
        >
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#DBEAFE]/40 to-transparent rounded-full blur-[60px] pointer-events-none"></motion.div>

            <div className="w-full px-5 relative z-10">
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
                    <motion.h2 variants={item} className="text-[2rem] leading-[1.12] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {data.headline}
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col gap-3.5 mb-14"
                >
                    {data.challenges.map((challenge, index) => {
                        const color = colors[index % colors.length];
                        const Icon = icons[index % icons.length];
                        return (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-red-50/40 backdrop-blur-sm border border-red-100 rounded p-5 shadow-[0_2px_12px_-4px_rgba(220,38,38,0.1)] flex items-start gap-4 relative overflow-hidden"
                        >
                            <motion.div animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-20 h-20 bg-gradient-radial from-[#EF4444]/15 to-transparent rounded-bl-full blur-[20px] pointer-events-none"></motion.div>
                            <div 
                                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 relative overflow-hidden"
                                style={{ backgroundColor: color }}
                            >
                                <Icon size={22} strokeWidth={2.5} className="text-white relative z-10" />
                            </div>
                            <p className="text-[15px] font-bold text-[#0B1D3A] leading-snug pt-1 relative z-10">
                                {challenge}
                            </p>
                        </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full rounded p-8 shadow-[0_15px_40px_-10px_rgba(11,29,58,0.25)] relative overflow-hidden text-center"
                    style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0F2751 100%)` }}
                >
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-[40px]"></motion.div>
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-32 h-32 bg-[#60A5FA]/10 rounded-full blur-[40px]"></motion.div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/40 to-transparent"></div>

                    <h3 className="text-white text-[18px] font-medium leading-[1.4] mb-5 relative z-10">
                        {data.transitionTitle}
                    </h3>
                    <h4 className="text-[#C99A2E] text-[24px] font-black tracking-[-0.02em] relative z-10 flex items-center justify-center gap-3">
                        {data.transitionSubtitle}
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowRight size={20} />
                        </motion.span>
                    </h4>
                </motion.div>
            </div>
        </section>
    );
}

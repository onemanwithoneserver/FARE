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
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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
        <TrendingDown size={20} className="text-[#EF4444]" />,
        <RefreshCcw size={20} className="text-[#F59E0B]" />,
        <AlertCircle size={20} className="text-[#3B82F6]" />,
        <BarChart2 size={20} className="text-[#8B5CF6]" />,
        <Users size={20} className="text-[#EC4899]" />,
        <Target size={20} className="text-[#10B981]" />,
        <HelpCircle size={20} className="text-[#6366F1]" />,
        <Clock size={20} className="text-[#F97316]" />,
        <Award size={20} className="text-[#06B6D4]" />
    ];

    const sectionTitle = data.title.includes(' — ') ? data.title.split(' — ')[1] : data.title;
    const sectionPrefix = data.title.includes(' — ') ? data.title.split(' — ')[0] : 'Section 2';

    return (
        <section className="w-full py-20 bg-[#F8FAFD] relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#E0E7FF]/40 to-transparent rounded-full blur-[60px] pointer-events-none"></div>
            
            <div className="px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                            {sectionPrefix}
                        </span>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[2.25rem] leading-[1.15] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {sectionTitle}
                    </motion.h2>

                    <motion.p variants={item} className="text-[16px] font-medium leading-[1.6]" style={{ color: '#596780' }}>
                        {data.subtitle}
                    </motion.p>
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
                            className="bg-white border border-[#0B1D3A]/5 rounded-xl p-5 shadow-[0_2px_10px_-2px_rgba(11,29,58,0.03)] flex items-center gap-4"
                        >
                            <div className="p-2.5 rounded-full bg-[#F8FAFD] shrink-0">
                                {icons[index]}
                            </div>
                            <h3 className="text-[15px] font-bold leading-snug text-left" style={{ color: NAVY }}>
                                {challenge}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="w-full bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] rounded-2xl p-8 shadow-xl relative overflow-hidden text-center"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#60A5FA]/10 rounded-full blur-2xl"></div>
                    
                    <h3 className="text-[22px] font-bold text-white mb-3 relative z-10">
                        {data.transitionTitle}
                    </h3>
                    <p className="text-[16px] font-medium text-[#C99A2E] flex items-center justify-center gap-2 relative z-10 mt-4">
                        {data.transitionSubtitle} <ArrowRight size={16} className="animate-pulse" />
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

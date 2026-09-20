import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { TrendingDown, RefreshCcw, AlertCircle, BarChart2, Users, Target, HelpCircle, Clock, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

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
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const icons = [
        <TrendingDown size={24} className="text-[#EF4444]" />,
        <RefreshCcw size={24} className="text-[#F59E0B]" />,
        <AlertCircle size={24} className="text-[#3B82F6]" />,
        <BarChart2 size={24} className="text-[#8B5CF6]" />,
        <Users size={24} className="text-[#EC4899]" />,
        <Target size={24} className="text-[#10B981]" />,
        <HelpCircle size={24} className="text-[#6366F1]" />,
        <Clock size={24} className="text-[#F97316]" />,
        <Award size={24} className="text-[#06B6D4]" />
    ];

    const sectionTitle = data.title.includes(' — ') ? data.title.split(' — ')[1] : data.title;
    const sectionPrefix = data.title.includes(' — ') ? data.title.split(' — ')[0] : 'Section 2';

    return (
        <section className="w-full py-32 bg-[#F8FAFD] relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#E0E7FF]/40 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="max-w-[1240px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="text-[12px] font-bold tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                            {sectionPrefix}
                        </span>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.25rem] leading-[1.1] font-black tracking-[-0.02em] mb-6 max-w-[850px]" style={{ color: NAVY }}>
                        {sectionTitle}
                    </motion.h2>

                    <motion.p variants={item} className="text-[18px] font-medium leading-[1.6] max-w-[680px]" style={{ color: '#596780' }}>
                        {data.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="grid grid-cols-3 gap-6 relative mb-20"
                >
                    {data.challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="bg-white border border-[#0B1D3A]/5 rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(11,29,58,0.03)] hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.08)] transition-all duration-300 group relative overflow-hidden flex flex-col justify-center items-center text-center h-[180px]"
                        >
                            <div className="mb-4 p-3 rounded-full bg-[#F8FAFD] group-hover:scale-110 transition-transform duration-300">
                                {icons[index]}
                            </div>
                            <h3 className="text-[17px] font-bold leading-tight" style={{ color: NAVY }}>
                                {challenge}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[800px] mx-auto text-center bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] rounded-3xl p-12 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A2E]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#60A5FA]/10 rounded-full blur-3xl"></div>
                    
                    <h3 className="text-[28px] font-bold text-white mb-4 relative z-10">
                        {data.transitionTitle}
                    </h3>
                    <p className="text-[20px] font-medium text-[#C99A2E] flex items-center justify-center gap-3 relative z-10">
                        {data.transitionSubtitle} <ArrowRight size={20} className="animate-pulse" />
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

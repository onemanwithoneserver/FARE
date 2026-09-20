import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Unlink, UserX, ListChecks, Clock, MonitorX, Globe, Building2, FileEdit, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

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

    const iconData = [
        { Icon: Unlink, color: "#EF4444" },
        { Icon: UserX, color: "#F59E0B" },
        { Icon: ListChecks, color: "#3B82F6" },
        { Icon: Clock, color: "#8B5CF6" },
        { Icon: MonitorX, color: "#EC4899" },
        { Icon: Globe, color: "#10B981" },
        { Icon: Building2, color: "#6366F1" },
        { Icon: FileEdit, color: "#F97316" }
    ];

    const sectionTitle = data.title.includes(' — ') ? data.title.split(' — ')[1] : data.title;

    return (
        <section className="w-full py-12 bg-[#0B1D3A] relative font-['Outfit'] overflow-hidden">
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
                            Common Challenges
                        </span>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[2rem] leading-[1.15] font-black tracking-[-0.02em] mb-4 text-white">
                        {sectionTitle}
                    </motion.h2>

                    <motion.p variants={item} className="text-[15px] font-medium leading-[1.6] text-white/70">
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
                    {data.challenges.map((challenge, index) => {
                        const { Icon, color } = iconData[index];
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-white/[0.03] border border-white/10 rounded-xl p-5 flex items-center gap-4"
                            >
                                <div 
                                    className="p-2.5 rounded-xl shrink-0 shadow-md"
                                    style={{ backgroundColor: color }}
                                >
                                    <Icon size={20} className="text-white" />
                                </div>
                                <h3 className="text-[14px] font-bold leading-snug text-left text-white">
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
                    className="w-full bg-white/[0.05] border border-white/10 rounded-2xl p-8 relative overflow-hidden text-center"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-2xl"></div>

                    <h3 className="text-[20px] font-bold text-white mb-3 relative z-10 leading-snug">
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

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Unlink, UserX, ListChecks, Clock, MonitorX, Globe, Building2, FileEdit, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

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
        <section className="w-full py-32 bg-[#0B1D3A] relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

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
                            Common Challenges
                        </span>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.25rem] leading-[1.1] font-black tracking-[-0.02em] mb-6 max-w-[850px] text-white">
                        {sectionTitle}
                    </motion.h2>

                    <motion.p variants={item} className="text-[18px] font-medium leading-[1.6] max-w-[680px] text-white/70">
                        {data.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-5 relative mb-20"
                >
                    {data.challenges.map((challenge, index) => {
                        const { Icon, color } = iconData[index];
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:bg-white/[0.06] transition-all duration-300 group relative overflow-hidden flex flex-col items-center text-center"
                            >
                                <div 
                                    className="mb-5 p-3.5 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-md"
                                    style={{ backgroundColor: color }}
                                >
                                    <Icon size={24} className="text-white" />
                                </div>
                                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/20 mb-2">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-[15px] font-bold leading-snug text-white">
                                    {challenge}
                                </h3>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[800px] mx-auto text-center bg-white/[0.05] border border-white/10 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A2E]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#60A5FA]/10 rounded-full blur-3xl"></div>

                    <h3 className="text-[26px] font-bold text-white mb-4 relative z-10 leading-snug">
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

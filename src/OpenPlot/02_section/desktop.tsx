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
            transition: { staggerChildren: 0.06, delayChildren: 0.15 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 24 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const icons = [
        { icon: <TrendingDown size={22} />, color: "#EF4444", bg: "#FEF2F2" },
        { icon: <RefreshCcw size={22} />, color: "#F59E0B", bg: "#FFFBEB" },
        { icon: <AlertCircle size={22} />, color: "#3B82F6", bg: "#EFF6FF" },
        { icon: <BarChart2 size={22} />, color: "#8B5CF6", bg: "#F5F3FF" },
        { icon: <Users size={22} />, color: "#EC4899", bg: "#FDF2F8" },
        { icon: <Target size={22} />, color: "#10B981", bg: "#ECFDF5" },
        { icon: <HelpCircle size={22} />, color: "#6366F1", bg: "#EEF2FF" },
        { icon: <Clock size={22} />, color: "#F97316", bg: "#FFF7ED" },
        { icon: <Award size={22} />, color: "#06B6D4", bg: "#ECFEFF" }
    ];

    return (
        <section className="w-full py-16 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F8FAFD 0%, #F1F5FB 50%, #EDF2FF 100%)' }}
        >
            
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#DBEAFE]/30 to-transparent rounded-full blur-[100px] pointer-events-none"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none"></motion.div>

            
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(${NAVY} 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="max-w-[1280px] mx-auto px-12 relative z-10">
                
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-10"
                >
                    <motion.div variants={item} className="mb-5">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-6 max-w-[850px]" style={{ color: NAVY }}>
                        {data.title}
                    </motion.h2>

                    <motion.p variants={item} className="text-[18px] font-medium leading-[1.65] max-w-[650px] text-[#475569]">
                        {data.subtitle}
                    </motion.p>
                </motion.div>

                
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-80px" }}
                    className="grid grid-cols-3 gap-5 relative mb-10"
                >
                    {data.challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                            className="group bg-white/70 backdrop-blur-sm border border-[#0B1D3A]/[0.06] rounded p-7 shadow-[0_1px_3px_rgba(11,29,58,0.04),0_8px_24px_-8px_rgba(11,29,58,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(11,29,58,0.12),0_0_0_1px_rgba(11,29,58,0.04)] transition-all duration-400 relative overflow-hidden flex flex-col items-center text-center h-[200px] justify-center cursor-default"
                        >
                            
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-[${icons[index].bg}] group-hover:to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100 rounded" style={{ background: `linear-gradient(135deg, ${icons[index].bg} 0%, transparent 60%)`, opacity: 0 }}></div>

                            <div className="mb-5 w-14 h-14 rounded flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(0,0,0,0.1)] group-hover:scale-110 group-hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 relative z-10" style={{ backgroundColor: icons[index].color, color: 'white' }}>
                                {icons[index].icon}
                            </div>
                            <h3 className="text-[16px] font-bold leading-tight relative z-10" style={{ color: NAVY }}>
                                {challenge}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[850px] mx-auto text-center rounded p-14 shadow-[0_20px_60px_-15px_rgba(11,29,58,0.3)] relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0F2751 50%, #132D5F 100%)` }}
                >
                    
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-72 h-72 bg-[#C99A2E]/10 rounded-full blur-[60px] pointer-events-none"></motion.div>
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-72 h-72 bg-[#60A5FA]/10 rounded-full blur-[60px] pointer-events-none"></motion.div>
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#C99A2E]/5 rounded-full blur-[80px] pointer-events-none"></motion.div>

                    
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/40 to-transparent"></div>

                    <h3 className="text-[28px] lg:text-[32px] font-bold text-white mb-5 relative z-10 leading-snug">
                        {data.transitionTitle}
                    </h3>
                    <p className="text-[20px] font-semibold text-[#C99A2E] flex items-center justify-center gap-3 relative z-10">
                        {data.transitionSubtitle}
                        <motion.span
                            animate={{ x: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowRight size={22} />
                        </motion.span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

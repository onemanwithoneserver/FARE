import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { PhoneOff, UserMinus, ShieldAlert, Users, TrendingDown, Repeat, HelpCircle, Clock, UserCog, ArrowRight } from 'lucide-react';
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
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
    };

    const colors = ["#EF4444", "#F59E0B", "#3B82F6", "#8B5CF6", "#EC4899", "#10B981", "#6366F1", "#F97316", "#06B6D4"];
    const icons = [PhoneOff, UserMinus, ShieldAlert, Users, TrendingDown, Repeat, HelpCircle, Clock, UserCog];

    return (
        <section className="w-full py-16 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #EEF4FF 0%, #FFFFFF 50%, #F8FAFD 100%)' }}
        >
            
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#DBEAFE]/40 to-transparent rounded-full blur-[100px] pointer-events-none"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none"></motion.div>
            
            
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
                        {data.headline}
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-wrap justify-center gap-4 relative mb-10"
                >
                    {data.challenges.map((challenge, index) => {
                        const color = colors[index % colors.length];
                        const Icon = icons[index % icons.length];
                        return (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                            className="w-[calc(20%-13px)] min-w-[200px] group bg-red-50/40 backdrop-blur-sm border border-red-100 rounded p-4 shadow-[0_4px_20px_-4px_rgba(220,38,38,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(220,38,38,0.15)] hover:bg-red-50/80 transition-all duration-400 relative overflow-hidden flex flex-col items-center text-center h-[170px] justify-center cursor-default"
                        >
                            <motion.div animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#EF4444]/15 to-transparent rounded-bl-full blur-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></motion.div>
                            
                            <div 
                                className="mb-3 w-10 h-10 rounded-xl shadow-inner flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 relative overflow-hidden"
                                style={{ backgroundColor: color }}
                            >
                                <Icon size={20} strokeWidth={2.5} className="text-white relative z-10" />
                            </div>
                            <h3 className="text-[14px] font-bold leading-tight relative z-10 px-1" style={{ color: NAVY }}>
                                {challenge}
                            </h3>
                        </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[1000px] mx-auto bg-gradient-to-br from-[#0B1D3A] to-[#0F2751] rounded p-16 text-center shadow-[0_20px_60px_-15px_rgba(11,29,58,0.3)] relative overflow-hidden"
                >
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-72 h-72 bg-[#C99A2E]/10 rounded-full blur-[60px] pointer-events-none"></motion.div>
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-72 h-72 bg-[#60A5FA]/10 rounded-full blur-[60px] pointer-events-none"></motion.div>
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#C99A2E]/5 rounded-full blur-[80px] pointer-events-none"></motion.div>
                    
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/40 to-transparent"></div>

                    <h3 className="text-white text-[26px] md:text-[30px] font-medium leading-[1.4] max-w-[850px] mx-auto mb-8 relative z-10">
                        {data.transitionTitle}
                    </h3>
                    <h4 className="text-[#C99A2E] text-[36px] md:text-[44px] font-black tracking-[-0.02em] relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        {data.transitionSubtitle}
                        <motion.div
                            animate={{ x: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="hidden sm:block"
                        >
                            <ArrowRight size={32} />
                        </motion.div>
                    </h4>
                </motion.div>
            </div>
        </section>
    );
}

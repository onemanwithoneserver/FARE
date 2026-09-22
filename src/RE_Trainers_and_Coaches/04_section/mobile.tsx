import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Home, Map, Building2, Layers, GraduationCap, Briefcase, RefreshCcw, Crown, Handshake } from 'lucide-react';
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

    const segmentIcons = {
        Home: <Home size={18} className="text-white relative z-10" />,
        Map: <Map size={18} className="text-white relative z-10" />,
        Building2: <Building2 size={18} className="text-white relative z-10" />,
        Layers: <Layers size={18} className="text-white relative z-10" />
    };

    const learnerIcons = {
        GraduationCap: <GraduationCap size={20} className="text-white relative z-10" />,
        Briefcase: <Briefcase size={20} className="text-white relative z-10" />,
        RefreshCcw: <RefreshCcw size={20} className="text-white relative z-10" />,
        Crown: <Crown size={20} className="text-white relative z-10" />,
        Handshake: <Handshake size={20} className="text-white relative z-10" />
    };

    return (
        <section className="w-full py-10 relative font-['Outfit'] overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFD 50%, #EEF4FF 100%)' }}>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[60px] pointer-events-none"></motion.div>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(#0B1D3A 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="px-5 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-8"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/30 bg-[#C99A2E]/10 shadow-[0_0_15px_rgba(201,154,46,0.15)] backdrop-blur-sm" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-4 text-[#0B1D3A]">
                        {data.headline}
                    </motion.h2>
                </motion.div>

                <div className="mb-8">
                    <motion.h3 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-[20px] font-bold mb-8 text-center text-[#0B1D3A] flex items-center justify-center gap-3"
                    >
                        <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#C99A2E]/50"></div>
                        {data.segmentsHeading}
                        <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#C99A2E]/50"></div>
                    </motion.h3>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-50px" }}
                        className="flex flex-col gap-5"
                    >
                        {data.segments.map((segment, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-white/80 backdrop-blur-xl border border-[#0B1D3A]/10 rounded p-6 shadow-[0_10px_20px_-5px_rgba(11,29,58,0.12)] relative overflow-hidden"
                            >
                                <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-24 h-24 opacity-10 blur-[20px] rounded-bl-full pointer-events-none" style={{ background: segment.color }}></motion.div>

                                <div className="flex items-center gap-4 mb-5 relative z-10">
                                    <div className="w-12 h-12 rounded flex items-center justify-center shadow-lg shrink-0" style={{ backgroundColor: segment.color }}>
                                        {segmentIcons[segment.icon as keyof typeof segmentIcons]}
                                    </div>
                                    <h4 className="text-[18px] font-bold text-[#0B1D3A] leading-snug">
                                        {segment.title}
                                    </h4>
                                </div>
                                <div className="flex flex-wrap gap-2.5 relative z-10">
                                    {segment.items.map((it, idx) => (
                                        <div key={idx} className="bg-[#0B1D3A]/[0.04] border border-[#0B1D3A]/10 px-3 py-1.5 rounded text-[13px] font-medium text-[#475569]">
                                            {it}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="relative">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="rounded p-6 relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(11,29,58,0.35)] border border-[#C99A2E]/30"
                        style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #0F2751 50%, #132D5F 100%)' }}
                    >
                        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-48 h-48 bg-[#C99A2E]/10 rounded-full blur-[40px]"></motion.div>
                        
                        <motion.h3 
                            className="text-[22px] font-bold mb-6 text-center text-white relative z-10"
                        >
                            {data.learnersHeading}
                        </motion.h3>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, margin: "-50px" }}
                            className="flex flex-col gap-4 relative z-10"
                        >
                            {data.learners.map((learner, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded p-5 flex flex-col gap-4 shadow-sm hover:border-[#C99A2E]/40 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded flex items-center justify-center shrink-0 shadow-md" style={{ backgroundColor: learner.color }}>
                                            {learnerIcons[learner.icon as keyof typeof learnerIcons]}
                                        </div>
                                        <h4 className="text-[17px] font-bold text-white leading-tight">
                                            {learner.title}
                                        </h4>
                                    </div>
                                    <p className="text-[14px] font-medium text-white/70 leading-relaxed">
                                        {learner.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

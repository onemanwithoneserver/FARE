import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Home, Map, Building2, Layers, GraduationCap, Briefcase, RefreshCcw, Crown, Handshake } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';


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

    const segmentIcons = {
        Home: <Home size={22} className="text-white" />,
        Map: <Map size={22} className="text-white" />,
        Building2: <Building2 size={22} className="text-white" />,
        Layers: <Layers size={22} className="text-white" />
    };

    const learnerIcons = {
        GraduationCap: <GraduationCap size={24} className="text-white" />,
        Briefcase: <Briefcase size={24} className="text-white" />,
        RefreshCcw: <RefreshCcw size={24} className="text-white" />,
        Crown: <Crown size={24} className="text-white" />,
        Handshake: <Handshake size={24} className="text-white" />
    };


    return (
        <section className="w-full py-20 bg-[#0B1D3A] relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-1/4 -right-[200px] w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-[1240px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-24"
                >

                    <motion.div variants={item} className="mb-4">
                        <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#C99A2E]">
                            {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-6 max-w-[900px] text-white">
                        {data.headline}
                    </motion.h2>
                </motion.div>

                {/* Segments Section */}
                <div className="mb-24">
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-[24px] font-bold mb-10 text-center text-white"
                    >
                        {data.segmentsHeading}
                    </motion.h3>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-100px" }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {data.segments.map((segment, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md mb-5" style={{ backgroundColor: segment.color }}>
                                    {segmentIcons[segment.icon as keyof typeof segmentIcons]}
                                </div>
                                <h4 className="text-[18px] font-bold mb-4 text-white">
                                    {segment.title}
                                </h4>
                                <div className="flex flex-col gap-2.5">
                                    {segment.items.map((it, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-[14px] font-medium text-white/70">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: segment.color }}></div>
                                            {it}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Learners Section */}
                <div className="relative">
                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C99A2E]/10 rounded-full blur-[80px]"></div>
                        
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="text-[28px] font-bold mb-12 text-center text-white"
                        >
                            {data.learnersHeading}
                        </motion.h3>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, margin: "-100px" }}
                            className="grid grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {data.learners.map((learner, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-sm group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-lg" style={{ backgroundColor: learner.color }}>
                                            {learnerIcons[learner.icon as keyof typeof learnerIcons]}
                                        </div>
                                        <div>
                                            <h4 className="text-[17px] font-bold text-white mb-2 leading-tight">
                                                {learner.title}
                                            </h4>
                                            <p className="text-[14px] font-medium text-white/70 leading-relaxed">
                                                {learner.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}

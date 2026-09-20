import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Home, Map, Building2, Layers, GraduationCap, Briefcase, RefreshCcw, Crown, Handshake } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';


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
        Home: <Home size={18} className="text-white" />,
        Map: <Map size={18} className="text-white" />,
        Building2: <Building2 size={18} className="text-white" />,
        Layers: <Layers size={18} className="text-white" />
    };

    const learnerIcons = {
        GraduationCap: <GraduationCap size={20} className="text-white" />,
        Briefcase: <Briefcase size={20} className="text-white" />,
        RefreshCcw: <RefreshCcw size={20} className="text-white" />,
        Crown: <Crown size={20} className="text-white" />,
        Handshake: <Handshake size={20} className="text-white" />
    };


    return (
        <section className="w-full py-20 bg-[#0B1D3A] relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <div className="px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-16"
                >

                    <motion.h2 variants={item} className="text-[2.25rem] leading-[1.15] font-black tracking-[-0.02em] mb-4 text-white">
                        {data.headline}
                    </motion.h2>
                </motion.div>

                {/* Segments Section */}
                <div className="mb-16">
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-[20px] font-bold mb-8 text-center text-white"
                    >
                        {data.segmentsHeading}
                    </motion.h3>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, margin: "-50px" }}
                        className="flex flex-col gap-4"
                    >
                        {data.segments.map((segment, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md shrink-0" style={{ backgroundColor: segment.color }}>
                                        {segmentIcons[segment.icon as keyof typeof segmentIcons]}
                                    </div>
                                    <h4 className="text-[17px] font-bold text-white">
                                        {segment.title}
                                    </h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {segment.items.map((it, idx) => (
                                        <div key={idx} className="bg-white/5 border border-white/5 px-2.5 py-1 rounded-md text-[12px] font-medium text-white/70">
                                            {it}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Learners Section */}
                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A2E]/10 rounded-full blur-[50px]"></div>
                    
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-[20px] font-bold mb-8 text-center text-white relative z-10"
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
                                className="bg-white/[0.04] border border-white/10 rounded-xl p-4 flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-md" style={{ backgroundColor: learner.color }}>
                                    {learnerIcons[learner.icon as keyof typeof learnerIcons]}
                                </div>
                                <div>
                                    <h4 className="text-[15px] font-bold text-white mb-1.5 leading-tight">
                                        {learner.title}
                                    </h4>
                                    <p className="text-[13px] font-medium text-white/70 leading-relaxed">
                                        {learner.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { TrendingUp, MessageCircle, Monitor, Shield, Heart, Megaphone, Database, Settings, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';

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

    const categoryIcons = {
        TrendingUp: <TrendingUp size={20} className="text-white" />,
        MessageCircle: <MessageCircle size={20} className="text-white" />,
        Monitor: <Monitor size={20} className="text-white" />,
        Shield: <Shield size={20} className="text-white" />,
        Heart: <Heart size={20} className="text-white" />,
        Megaphone: <Megaphone size={20} className="text-white" />,
        Database: <Database size={20} className="text-white" />,
        Settings: <Settings size={20} className="text-white" />
    };


    return (
        <section className="w-full py-32 bg-white relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-1/4 -left-[200px] w-[500px] h-[500px] bg-gradient-radial from-[#F8FAFD] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-[1240px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-20"
                >

                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.25rem] leading-[1.1] font-black tracking-[-0.02em] mb-6 max-w-[900px]" style={{ color: NAVY }}>
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={item} className="text-[18px] font-medium leading-[1.6] max-w-[720px]" style={{ color: '#596780' }}>
                        {data.subtitle}
                    </motion.p>
                </motion.div>

                <div className="columns-1 md:columns-2 gap-6 space-y-6">
                    {data.categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-[#0B1D3A]/10 rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(11,29,58,0.03)] hover:shadow-[0_15px_30px_-10px_rgba(11,29,58,0.08)] transition-all duration-300 break-inside-avoid relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 opacity-5 blur-[30px] rounded-bl-full" style={{ background: category.color }}></div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md shrink-0" style={{ backgroundColor: category.color }}>
                                    {categoryIcons[category.icon as keyof typeof categoryIcons]}
                                </div>
                                <h3 className="text-[20px] font-bold" style={{ color: NAVY }}>
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-col gap-5 relative z-10">
                                {category.subcategories.map((sub, idx) => (
                                    <div key={idx}>
                                        {sub.label && (
                                            <h4 className="text-[13px] font-bold uppercase tracking-wider mb-3" style={{ color: category.color }}>
                                                {sub.label}
                                            </h4>
                                        )}
                                        <div className="flex flex-wrap gap-2">
                                            {sub.skills.map((skill, sIdx) => (
                                                <span key={sIdx} className="bg-[#F8FAFD] border border-[#0B1D3A]/5 px-3 py-1.5 rounded-lg text-[13.5px] font-medium text-[#3A4A63] hover:bg-white hover:border-[#C99A2E]/40 hover:text-[#C99A2E] transition-colors cursor-default shadow-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 p-12 bg-[#F8FAFD] border border-[#0B1D3A]/10 rounded-3xl text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A2E]/5 rounded-full blur-3xl"></div>
                    
                    <h3 className="text-[24px] font-bold text-[#0B1D3A] mb-2 relative z-10 flex items-center justify-center gap-3">
                        {data.footerLine1} <Sparkles size={20} className="text-[#C99A2E]" />
                    </h3>
                    <p className="text-[16px] font-semibold text-[#596780] mb-8 uppercase tracking-widest relative z-10">
                        {data.footerLine2}
                    </p>
                    <p className="text-[18px] font-medium text-[#3A4A63] max-w-[700px] mx-auto relative z-10 bg-white py-4 px-8 rounded-full border border-[#0B1D3A]/10 shadow-sm">
                        {data.footerCta}
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

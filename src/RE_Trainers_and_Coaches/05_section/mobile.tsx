import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { TrendingUp, MessageCircle, Monitor, Shield, Heart, Megaphone, Database, Settings, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';

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

    const categoryIcons = {
        TrendingUp: <TrendingUp size={18} className="text-white" />,
        MessageCircle: <MessageCircle size={18} className="text-white" />,
        Monitor: <Monitor size={18} className="text-white" />,
        Shield: <Shield size={18} className="text-white" />,
        Heart: <Heart size={18} className="text-white" />,
        Megaphone: <Megaphone size={18} className="text-white" />,
        Database: <Database size={18} className="text-white" />,
        Settings: <Settings size={18} className="text-white" />
    };


    return (
        <section className="w-full py-12 bg-white relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#E0E7FF]/40 to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <div className="px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-12"
                >

                    <motion.h2 variants={item} className="text-[2.25rem] leading-[1.15] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={item} className="text-[15px] font-medium leading-[1.6]" style={{ color: '#596780' }}>
                        {data.subtitle}
                    </motion.p>
                </motion.div>

                <div className="flex flex-col gap-5 mb-16">
                    {data.categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className="bg-white border border-[#0B1D3A]/10 rounded-2xl p-5 shadow-[0_2px_10px_-2px_rgba(11,29,58,0.03)] relative overflow-hidden"
                        >
                            <div className="flex items-center gap-3 mb-5 relative z-10">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md shrink-0" style={{ backgroundColor: category.color }}>
                                    {categoryIcons[category.icon as keyof typeof categoryIcons]}
                                </div>
                                <h3 className="text-[17px] font-bold" style={{ color: NAVY }}>
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                {category.subcategories.map((sub, idx) => (
                                    <div key={idx}>
                                        {sub.label && (
                                            <h4 className="text-[11px] font-bold uppercase tracking-wider mb-2.5" style={{ color: category.color }}>
                                                {sub.label}
                                            </h4>
                                        )}
                                        <div className="flex flex-wrap gap-2">
                                            {sub.skills.map((skill, sIdx) => (
                                                <span key={sIdx} className="bg-[#F8FAFD] border border-[#0B1D3A]/5 px-2.5 py-1 rounded-lg text-[12.5px] font-medium text-[#3A4A63]">
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
                    className="p-6 bg-[#F8FAFD] border border-[#0B1D3A]/10 rounded-2xl text-center relative overflow-hidden"
                >
                    <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-2 relative z-10 flex items-center justify-center gap-2">
                        {data.footerLine1} <Sparkles size={16} className="text-[#C99A2E]" />
                    </h3>
                    <p className="text-[12px] font-semibold text-[#596780] mb-6 uppercase tracking-widest relative z-10">
                        {data.footerLine2}
                    </p>
                    <p className="text-[14px] font-medium text-[#3A4A63] bg-white py-3 px-4 rounded-xl border border-[#0B1D3A]/10 shadow-sm relative z-10">
                        {data.footerCta}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { BookOpen, BarChart2, Target, Users, ArrowDown } from 'lucide-react';
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

    const icons = {
        BookOpen: <BookOpen size={24} strokeWidth={2.2} className="text-white" />,
        BarChart2: <BarChart2 size={24} strokeWidth={2.2} className="text-white" />,
        Target: <Target size={24} strokeWidth={2.2} className="text-white" />,
        Users: <Users size={24} strokeWidth={2.2} className="text-white" />
    };


    return (
        <section className="w-full py-32 bg-white relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#F8FAFD] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-[1240px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-20"
                >

                    <motion.div variants={item} className="mb-4">
                        <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#C99A2E]">
                            {data.title} — {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-6 max-w-[800px]" style={{ color: NAVY }}>
                        {data.headline.line1} <span className="text-[#C99A2E]">{data.headline.line2}</span> {data.headline.line3} {data.headline.line4}
                    </motion.h2>

                    <motion.p variants={item} className="text-[17px] font-medium leading-[1.6] max-w-[680px]" style={{ color: '#596780' }}>
                        {data.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="grid grid-cols-2 gap-6 relative"
                >
                    {data.cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="bg-white border border-[#0B1D3A]/10 rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(11,29,58,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.12)] transition-all duration-300 group cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-[40px] transition-opacity duration-500 group-hover:opacity-30 rounded-bl-full" style={{ background: card.color }}></div>

                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md text-white" style={{ backgroundColor: card.color }}>
                                    {icons[card.icon as keyof typeof icons]}
                                </div>
                                <div className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border" style={{ color: card.color, backgroundColor: `${card.color}10`, borderColor: `${card.color}25` }}>
                                    {card.tag}
                                </div>
                            </div>

                            <h3 className="text-[22px] font-bold mb-3" style={{ color: NAVY }}>
                                {card.title}
                            </h3>

                            <p className="text-[15px] font-medium leading-relaxed" style={{ color: '#596780' }}>
                                {card.desc}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-[13px] font-semibold opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" style={{ color: card.color }}>
                                {data.learnMore} <ArrowDown size={14} className="-rotate-90" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 flex justify-center"
                >
                    <button className="text-[14px] font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300" style={{ color: NAVY }}>
                        {data.cta.replace(' ↓', '')} <ArrowDown size={16} strokeWidth={2.5} className="animate-bounce" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { BookOpen, BarChart2, Target, Users, ArrowDown } from 'lucide-react';
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
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const icons = {
        BookOpen: <BookOpen size={20} strokeWidth={2.2} className="text-white" />,
        BarChart2: <BarChart2 size={20} strokeWidth={2.2} className="text-white" />,
        Target: <Target size={20} strokeWidth={2.2} className="text-white" />,
        Users: <Users size={20} strokeWidth={2.2} className="text-white" />
    };


    return (
        <section className="w-full py-20 bg-white relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-gradient-radial from-[#F8FAFD] to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <div className="w-full px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-12"
                >

                    <motion.div variants={item} className="mb-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C99A2E]">
                            {data.title} — {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[2rem] sm:text-[2.25rem] leading-[1.12] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {data.headline.line1} <span className="text-[#C99A2E]">{data.headline.line2}</span><br /> {data.headline.line3} {data.headline.line4}
                    </motion.h2>

                    <motion.p variants={item} className="text-[15px] font-medium leading-[1.6]" style={{ color: '#596780' }}>
                        {data.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col gap-4 relative"
                >
                    {data.cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-white border border-[#0B1D3A]/10 rounded-2xl p-6 shadow-[0_4px_15px_-4px_rgba(11,29,58,0.05)] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.08] blur-[30px] rounded-bl-full" style={{ background: card.color }}></div>

                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md text-white" style={{ backgroundColor: card.color }}>
                                    {icons[card.icon as keyof typeof icons]}
                                </div>
                                <div className="px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase border" style={{ color: card.color, backgroundColor: `${card.color}10`, borderColor: `${card.color}25` }}>
                                    {card.tag}
                                </div>
                            </div>

                            <h3 className="text-[18px] font-bold mb-2" style={{ color: NAVY }}>
                                {card.title}
                            </h3>

                            <p className="text-[14px] font-medium leading-relaxed" style={{ color: '#596780' }}>
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex justify-center"
                >
                    <button className="text-[14px] font-semibold flex items-center gap-2" style={{ color: NAVY }}>
                        {data.cta.replace(' ↓', '')} <ArrowDown size={16} strokeWidth={2.5} className="animate-bounce" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

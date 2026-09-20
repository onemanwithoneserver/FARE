import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Rocket, Link2, Target, PenTool, ArrowDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getData } from './data';

const NAVY = '#0B1D3A';
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

    const icons = {
        Rocket: <Rocket size={20} strokeWidth={2.2} className="text-white" />,
        Link2: <Link2 size={20} strokeWidth={2.2} className="text-white" />,
        Target: <Target size={20} strokeWidth={2.2} className="text-white" />,
        PenTool: <PenTool size={20} strokeWidth={2.2} className="text-white" />
    };

    const sectionTitle = data.title.includes(' — ') ? data.title.split(' — ')[1] : data.title;
    const sectionPrefix = data.title.includes(' — ') ? data.title.split(' — ')[0] : 'Section 3';

    return (
        <section className="w-full py-20 bg-white relative font-['Outfit'] overflow-hidden">
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-[#F8FAFD] to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <div className="px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                            {sectionPrefix}
                        </span>
                    </motion.div>

                    <motion.h2 variants={item} className="text-[2.25rem] leading-[1.15] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {data.headline}
                    </motion.h2>

                    <motion.p variants={item} className="text-[15px] font-medium leading-[1.6]" style={{ color: '#596780' }}>
                        {sectionTitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col gap-4"
                >
                    {data.cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-white border border-[#0B1D3A]/10 rounded-xl p-6 shadow-[0_2px_10px_-2px_rgba(11,29,58,0.05)] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 opacity-10 blur-[30px] rounded-bl-full" style={{ background: card.color }}></div>

                            <div className="flex items-center justify-between mb-5 relative z-10">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm text-white" style={{ backgroundColor: card.color }}>
                                    {icons[card.icon as keyof typeof icons]}
                                </div>
                                <div className="px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase border" style={{ color: card.color, backgroundColor: `${card.color}10`, borderColor: `${card.color}25` }}>
                                    {card.tag}
                                </div>
                            </div>

                            <h3 className="text-[18px] font-bold mb-2.5 relative z-10" style={{ color: NAVY }}>
                                {card.title}
                            </h3>

                            <p className="text-[14px] font-medium leading-[1.6] relative z-10" style={{ color: '#596780' }}>
                                {card.desc}
                            </p>

                            <div className="mt-6 flex items-center gap-1.5 text-[12px] font-semibold relative z-10" style={{ color: card.color }}>
                                {data.learnMore} <ArrowDown size={14} className="-rotate-90" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

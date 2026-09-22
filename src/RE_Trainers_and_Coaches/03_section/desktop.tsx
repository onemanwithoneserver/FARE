import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Rocket, Link2, Target, PenTool } from 'lucide-react';
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
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const icons = {
        Rocket: <Rocket size={24} strokeWidth={2.2} className="text-white relative z-10" />,
        Link2: <Link2 size={24} strokeWidth={2.2} className="text-white relative z-10" />,
        Target: <Target size={24} strokeWidth={2.2} className="text-white relative z-10" />,
        PenTool: <PenTool size={24} strokeWidth={2.2} className="text-white relative z-10" />
    };

    const sectionTitle = data.title;

    return (
        <section className="w-full py-16 relative font-['Outfit'] overflow-hidden"
            style={{ background: '#FFFFFF' }}
        >
            
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 left-[-10%] w-[800px] h-[800px] bg-gradient-radial from-[#F1F5FB]/80 to-transparent rounded-full blur-[100px] pointer-events-none"></motion.div>
            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[100px] pointer-events-none"></motion.div>

            <div className="max-w-[1320px] mx-auto px-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div variants={item} className="mb-5">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-[#C99A2E]/20 bg-[#C99A2E]/[0.05]" style={{ color: GOLD }}>
                            {data.overline}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={item} className="text-[3rem] lg:text-[3.5rem] leading-[1.08] font-black tracking-[-0.02em] mb-6 max-w-[850px]" style={{ color: NAVY }}>
                        {data.headline.split(' ').map((word, i, arr) => (
                            <span key={i} className={i >= arr.length - 2 ? "text-[#C99A2E]" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </motion.h2>

                    <motion.p variants={item} className="text-[18px] font-medium leading-[1.65] max-w-[700px] text-[#475569]">
                        {sectionTitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="grid grid-cols-2 gap-8 relative"
                >
                    {data.cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                            className="group bg-white border border-[#0B1D3A]/[0.06] rounded p-10 shadow-[0_4px_20px_-4px_rgba(11,29,58,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(11,29,58,0.12)] transition-all duration-400 relative overflow-hidden flex flex-col cursor-default"
                        >
                            
                            <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-48 h-48 opacity-[0.04] blur-[40px] transition-opacity duration-500 group-hover:opacity-[0.08] rounded-bl-full pointer-events-none" style={{ background: card.color }}></motion.div>
                            <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: card.color }}></div>

                            <div className="flex items-start justify-between mb-8 relative z-10">
                                <div className="w-16 h-16 rounded flex items-center justify-center shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative overflow-hidden" style={{ backgroundColor: card.color }}>
                                    <div className="absolute inset-0 bg-white/0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
                                    {icons[card.icon as keyof typeof icons]}
                                </div>
                                <div className="px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase border flex items-center gap-2" style={{ color: card.color, backgroundColor: `${card.color}10`, borderColor: `${card.color}25` }}>
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.color }}></span>
                                    {card.tag}
                                </div>
                            </div>

                            <h3 className="text-[24px] font-bold mb-4 relative z-10" style={{ color: NAVY }}>
                                {card.title}
                            </h3>

                            <p className="text-[16px] font-medium leading-[1.7] text-[#475569] mb-6 flex-grow relative z-10">
                                {card.desc}
                            </p>
                            
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}


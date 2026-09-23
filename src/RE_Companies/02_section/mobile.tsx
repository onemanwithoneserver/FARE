import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { PhoneOff, UserMinus, ShieldAlert, Users, TrendingDown, Repeat, HelpCircle, Clock, UserCog, ArrowRight } from 'lucide-react';
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
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    };

    const colors = ["#EF4444", "#F59E0B", "#3B82F6", "#8B5CF6", "#EC4899", "#10B981", "#6366F1", "#F97316", "#06B6D4"];
    const icons = [PhoneOff, UserMinus, ShieldAlert, Users, TrendingDown, Repeat, HelpCircle, Clock, UserCog];

    const challengeEmojis = ['📉', '🔍', '🚧', '❓', '🧩', '⏳', '🕳️', '⏹️', '⚠️'];

    const bgFloatingElements = [
        { emoji: '⚠️', top: '5%', left: '4%', size: 'text-xl', duration: 7 },
        { emoji: '📉', top: '18%', right: '5%', size: 'text-2xl', duration: 8 },
        { emoji: '⏳', top: '45%', left: '3%', size: 'text-xl', duration: 6 },
        { emoji: '❓', top: '68%', right: '4%', size: 'text-xl', duration: 7.5 },
    ];

    return (
        <section className="w-full py-12 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #FFF1F2 0%, #FFE4E6 30%, #FDF2F4 70%, #FFF5F7 100%)' }}
        >
            <motion.div animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-10 right-0 w-[350px] h-[350px] bg-gradient-radial from-rose-500/25 via-red-500/10 to-transparent rounded-full blur-[80px] pointer-events-none z-0"></motion.div>
            <motion.div animate={{ opacity: [0.15, 0.35, 0.15], scale: [1.05, 1, 1.05] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 left-0 w-[300px] h-[300px] bg-gradient-radial from-red-600/20 via-rose-500/10 to-transparent rounded-full blur-[70px] pointer-events-none z-0"></motion.div>

            <div className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(#EF4444 1.5px, transparent 1.5px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            {bgFloatingElements.map((item, idx) => (
                <motion.div
                    key={idx}
                    animate={{
                        y: [0, -12, 0],
                        rotate: [-5, 5, -5],
                        opacity: [0.15, 0.3, 0.15]
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute pointer-events-none select-none z-0 ${item.size} filter drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]`}
                    style={{ top: item.top, left: item.left, right: item.right }}
                >
                    {item.emoji}
                </motion.div>
            ))}

            <div className="w-full px-5 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col items-center text-center mb-10"
                >
                    <motion.div variants={item} className="mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-red-300/80 bg-red-100/70 text-red-700 shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            {data.overline}
                        </span>
                    </motion.div>
                    <motion.h2 variants={item} className="text-[2rem] leading-[1.12] font-black tracking-[-0.02em] mb-4" style={{ color: NAVY }}>
                        {data.headline}
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex flex-col gap-3.5 mb-14"
                >
                    {data.challenges.map((challenge, index) => {
                        const color = colors[index % colors.length];
                        const Icon = icons[index % icons.length];
                        const emoji = challengeEmojis[index] || '⚠️';
                        return (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-gradient-to-r from-white/95 via-red-50/70 to-red-100/40 backdrop-blur-sm border border-red-200/90 rounded p-4 shadow-[0_2px_10px_-2px_rgba(220,38,38,0.08)] flex items-center gap-4 relative overflow-hidden"
                        >
                            <span className="absolute -bottom-1 -right-1 text-[32px] opacity-[0.08] select-none pointer-events-none filter blur-[0.2px]">
                                {emoji}
                            </span>
                            <div 
                                className="w-10 h-10 rounded-xl shadow-md flex items-center justify-center shrink-0 relative overflow-hidden ring-2 ring-red-100/60"
                                style={{ backgroundColor: color }}
                            >
                                <Icon size={20} strokeWidth={2.5} className="text-white relative z-10" />
                            </div>

                            <p className="text-[14px] font-bold text-[#0B1D3A] leading-snug relative z-10 flex-1">
                                {challenge}
                            </p>
                        </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full rounded p-8 shadow-[0_15px_40px_-10px_rgba(11,29,58,0.25)] relative overflow-hidden text-center"
                    style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0F2751 100%)` }}
                >
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-[40px]"></motion.div>
                    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-32 h-32 bg-[#60A5FA]/10 rounded-full blur-[40px]"></motion.div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C99A2E]/40 to-transparent"></div>

                    <h3 className="text-white text-[18px] font-medium leading-[1.4] mb-5 relative z-10">
                        {data.transitionTitle}
                    </h3>
                    <h4 className="text-[#C99A2E] text-[24px] font-black tracking-[-0.02em] relative z-10 flex items-center justify-center gap-3">
                        {data.transitionSubtitle}
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowRight size={20} />
                        </motion.span>
                    </h4>
                </motion.div>
            </div>
        </section>
    );
}

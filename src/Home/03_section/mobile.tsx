import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { data } from './data';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const GOLD = '#C99A2E';
const GOLD_MID = '#D5AA45';
const MUTED_BLUE = '#7B8DAA';

export default function Mobile() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section
            className="w-full py-14 px-5 flex flex-col font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: '#F8F9FC' }}
        >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-radial from-[#EEF4FF]/60 to-transparent rounded-full blur-[60px] pointer-events-none"></div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false }} className="w-full mb-10 flex flex-col items-start relative z-10">
                <motion.div variants={item} className="flex items-center gap-2.5 mb-4">
                    <div className="w-6 h-[1.5px]" style={{ background: GOLD }}></div>
                    <span className="font-semibold text-[9px] tracking-[0.25em] uppercase" style={{ color: GOLD }}>
                        {data.headline.eyebrow}
                    </span>
                </motion.div>
                <motion.h2 variants={item} className="text-[2.5rem] leading-[0.95] font-black tracking-[-0.02em] uppercase" style={{ color: NAVY }}>
                    {data.headline.line1}<br />{data.headline.line2}
                </motion.h2>
            </motion.div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false }} className="w-full flex flex-col gap-4 relative z-10">
                
                <motion.div variants={item} className="rounded-[4px] p-6 flex flex-col relative overflow-hidden luxury-shadow"
                    style={{ background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}>
                    
                    <div className="inline-block text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-[2px] mb-6 w-max"
                         style={{ color: GOLD_MID, background: `${GOLD}15`, border: `1px solid ${GOLD}30` }}>
                        {data.cards[0].tag}
                    </div>

                    <div className="w-full rounded-[2px] p-4 mb-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-[8.5px] font-bold tracking-[0.15em] text-white/40">{data.cards[0].stats!.label}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            {data.cards[0].stats!.items.slice(0, 2).map((stat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-[10px] text-white/90 mb-1.5 font-medium">
                                        <span>{stat.label}</span>
                                        <span style={{ color: GOLD_MID }}>{stat.val}%</span>
                                    </div>
                                    <div className="w-full h-[2.5px] bg-white/[0.06] rounded-full overflow-hidden">
                                        <div className="h-full rounded-full" style={{ width: `${stat.val}%`, background: `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto">
                        <h3 className="text-[1.5rem] font-black text-white mb-2 leading-[1.05] whitespace-pre-line">{data.cards[0].headline}</h3>
                        <p className="text-[11.5px] font-medium mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                            {data.cards[0].desc}
                        </p>
                        <div className="font-bold text-[12px] flex items-center gap-2" style={{ color: GOLD_MID }}>
                            {data.cards[0].cta} <span>→</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={item} className="bg-white rounded-[4px] p-6 flex flex-col luxury-shadow-sm" style={{ border: '1px solid rgba(11,29,58,0.06)' }}>
                    <div className="inline-block text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-[2px] mb-5 w-max"
                         style={{ color: '#2563EB', background: '#2563EB10', border: '1px solid #2563EB20' }}>
                        {data.cards[1].tag}
                    </div>

                    <div className="mt-auto pt-2">
                        <h3 className="text-[1.35rem] font-black mb-2 leading-[1.05] whitespace-pre-line" style={{ color: NAVY }}>{data.cards[1].headline}</h3>
                        <p className="text-[11.5px] font-medium mb-5 leading-relaxed" style={{ color: '#3A4A63' }}>
                            {data.cards[1].desc}
                        </p>
                        <div className="font-bold text-[12px] flex items-center gap-2" style={{ color: NAVY }}>
                            {data.cards[1].cta} <span>→</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={item} className="rounded-[4px] p-6 flex flex-col" style={{ background: '#F0F2F7', border: '1px solid rgba(11,29,58,0.04)' }}>
                    <div className="flex justify-between items-start mb-5">
                        <div className="inline-block text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-[2px] bg-white"
                             style={{ color: MUTED_BLUE, border: '1px solid rgba(11,29,58,0.06)' }}>
                            {data.cards[2].tag}
                        </div>
                        <div className="text-[9px] font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-[0.1em]"
                             style={{ color: '#D97706', background: '#FEF3C7', border: '1px solid #FDE68A' }}>
                            {data.cards[2].badge}
                        </div>
                    </div>

                    <div className="mt-auto">
                        <h3 className="text-[1.35rem] font-black mb-2 leading-[1.05] whitespace-pre-line" style={{ color: MUTED_BLUE }}>{data.cards[2].headline}</h3>
                        <p className="text-[11.5px] font-medium mb-5 leading-relaxed" style={{ color: '#64748B' }}>
                            {data.cards[2].desc}
                        </p>
                        <div className="font-bold text-[12px] flex items-center gap-2" style={{ color: MUTED_BLUE }}>
                            {data.cards[2].cta} <span>→</span>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}

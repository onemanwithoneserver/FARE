import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { data } from './data';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';
const MUTED_BLUE = '#7B8DAA';

export default function Mobile() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 14 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            className="w-full min-h-[calc(100vh-64px)] px-6 py-12 flex flex-col items-center justify-center overflow-hidden text-center relative font-['Outfit',sans-serif]"
            style={{ background: 'linear-gradient(180deg, #F8F9FC 0%, #EEF4FF 100%)' }}
        >
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-gradient-radial from-[#C99A2E]/[0.04] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false }} className="w-full flex flex-col items-center">
                <motion.div variants={item} className="flex items-center gap-2.5 mb-5 justify-center">
                    <div className="w-5 h-[1.5px]" style={{ background: GOLD }}></div>
                    <span className="font-semibold text-[9px] tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                        Skill Enhancement For Real Estate
                    </span>
                    <div className="w-5 h-[1.5px]" style={{ background: GOLD }}></div>
                </motion.div>

                <h1 className="text-[2.75rem] leading-[0.94] font-black tracking-[-0.02em] mb-5">
                    <motion.span variants={item} className="block" style={{ color: NAVY }}>{data.headline.line1}</motion.span>
                    <motion.span variants={item} className="block gold-gradient-text">{data.headline.line2}</motion.span>
                    <motion.span variants={item} className="block" style={{ color: NAVY }}>{data.headline.line3}</motion.span>
                    <motion.span variants={item} className="block" style={{ color: MUTED_BLUE }}>{data.headline.line4}</motion.span>
                </h1>

                <motion.div variants={item} className="mb-4">
                    <p className="text-[15px] font-medium leading-[1.6]" style={{ color: '#3A4A63' }}>
                        {data.subtitle}
                    </p>
                </motion.div>

                <motion.div variants={item} className="text-[10.5px] font-medium mb-8" style={{ color: GOLD }}>
                    {data.capabilities[0]} <span className="text-[#CBD5E1] mx-1">·</span>
                    {data.capabilities[1]} <span className="text-[#CBD5E1] mx-1">·</span>
                    {data.capabilities[2]} <span className="text-[#CBD5E1] mx-1">·</span>
                    {data.capabilities[3]}
                </motion.div>

                <motion.div variants={item} className="flex flex-col w-full gap-3 max-w-[280px] mb-10">
                    <button
                        className="text-white font-semibold w-full py-3.5 rounded-[2px] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
                        style={{
                            background: `linear-gradient(135deg, ${NAVY} 0%, #071A49 100%)`,
                            boxShadow: '0 2px 8px rgba(11,29,58,0.2)'
                        }}
                    >
                        {data.buttons.primary} <ArrowRight size={14} strokeWidth={2.5} />
                    </button>
                    <button
                        className="font-semibold w-full py-3.5 rounded-[2px] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] border"
                        style={{ color: NAVY, borderColor: `${NAVY}15`, background: 'white' }}
                    >
                        <Play size={13} strokeWidth={2.5} fill={NAVY} /> {data.buttons.secondary}
                    </button>
                </motion.div>

                <motion.div
                    variants={item}
                    className="w-full max-w-[340px] rounded-[4px] overflow-hidden safari-shadow"
                    style={{ border: '1px solid rgba(11,29,58,0.08)' }}
                >
                    <div className="h-7 glass-safari flex items-center px-3 gap-1.5 border-b border-black/[0.04]">
                        <div className="w-[7px] h-[7px] rounded-full bg-[#FF5F56]"></div>
                        <div className="w-[7px] h-[7px] rounded-full bg-[#FEBC2E]"></div>
                        <div className="w-[7px] h-[7px] rounded-full bg-[#27C840]"></div>
                        <div className="flex-1 text-center text-[7px] font-medium text-[#999]">{data.dashboard.url}</div>
                    </div>
                    <div className="p-4 flex flex-col gap-3" style={{ background: '#0D2654' }}>
                        <div className="text-white text-[13px] font-bold">{data.dashboard.greeting}</div>
                        <div className="grid grid-cols-2 gap-2">
                            {data.dashboard.stats.map(c => (
                                <div key={c.id} className="rounded-[2px] p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                                    <div className="flex items-center gap-1.5 mb-2" style={{ color: c.color }}>
                                        {c.icon}
                                        <span className="text-[9px] font-semibold text-white/70">{c.label.split(' ')[0]}</span>
                                    </div>
                                    <div className="text-[14px] font-bold" style={{ color: c.color }}>{c.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={item} className="mt-8 text-[9.5px] font-medium tracking-[0.04em]" style={{ color: MUTED_BLUE }}>
                    {data.footerLinks[0]} <span className="mx-1 text-[#CBD5E1]">·</span> {data.footerLinks[1]} <span className="mx-1 text-[#CBD5E1]">·</span> {data.footerLinks[2]}
                </motion.div>
            </motion.div>
        </section>
    );
}

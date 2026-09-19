import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Target, BarChart2 } from 'lucide-react';
import { data } from './data';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const MUTED_BLUE = '#7B8DAA';

export default function Mobile() {
    return (
        <section
            className="w-full py-14 px-4 flex justify-center font-['Outfit'] relative overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-radial from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-[460px] relative z-10"
            >
                <div
                    className="w-full rounded-[4px] p-5 flex flex-col items-center text-center relative overflow-hidden luxury-shadow-dark"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                    <h2 className="text-[1.85rem] leading-[1.05] font-black tracking-[-0.02em] text-white uppercase mb-2.5">
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </h2>

                    <p className="text-[11.5px] font-medium leading-relaxed mb-5" style={{ color: MUTED_BLUE }}>
                        {data.headline.subtitle}
                    </p>

                    <div className="flex flex-col gap-2 w-full mb-5">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-full py-3 px-4 rounded-[4px] font-black text-[11.5px] flex items-center justify-center gap-1.5 text-[#071A49] uppercase tracking-wider shadow-md"
                            style={{ background: 'linear-gradient(90deg, #C99A2E, #E2C068)' }}
                        >
                            <span>{data.buttons.primary}</span>
                            <ArrowRight size={13} strokeWidth={2.5} />
                        </button>
                        <button
                            className="w-full py-2.5 px-4 rounded-[4px] font-bold text-[11.5px] text-white bg-white/[0.04] border border-white/10"
                        >
                            {data.buttons.secondary}
                        </button>
                    </div>

                    <div className="flex flex-col gap-2 w-full pt-3.5 border-t border-white/[0.08] text-left">
                        {data.trustBadges.map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 text-[10.5px] font-medium text-white/80">
                                {i === 0 && <ShieldCheck size={13} className="text-[#34D399] shrink-0" />}
                                {i === 1 && <Target size={13} className="text-[#6B8AFF] shrink-0" />}
                                {i === 2 && <BarChart2 size={13} className="text-[#A78BFA] shrink-0" />}
                                <span>{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

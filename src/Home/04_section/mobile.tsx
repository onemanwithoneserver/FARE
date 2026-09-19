import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Target, BarChart2, Sparkles } from 'lucide-react';
import { data } from './data';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const MUTED_BLUE = '#7B8DAA';

export default function Mobile() {
    return (
        <section
            className="w-full py-16 px-4 flex justify-center font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-radial from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-[460px] relative z-10"
            >
                <div
                    className="w-full rounded-[8px] p-6 flex flex-col items-center text-center relative overflow-hidden luxury-shadow-dark"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                    <div className="flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                        <Sparkles size={11} className="text-[#D5AA45]" />
                        <span className="font-bold text-[9px] tracking-[0.2em] uppercase text-[#F3D887]">
                            {data.headline.eyebrow}
                        </span>
                    </div>

                    <h2 className="text-[2rem] leading-[1.05] font-black tracking-[-0.02em] text-white uppercase mb-3">
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </h2>

                    <p className="text-[12px] font-medium leading-relaxed mb-6" style={{ color: MUTED_BLUE }}>
                        {data.headline.subtitle}
                    </p>

                    <div className="flex flex-col gap-2.5 w-full mb-6">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-full py-3.5 px-5 rounded-[5px] font-black text-[12px] flex items-center justify-center gap-2 text-[#071A49] uppercase tracking-wider shadow-lg"
                            style={{ background: 'linear-gradient(90deg, #C99A2E, #E2C068)' }}
                        >
                            <span>{data.buttons.primary}</span>
                            <ArrowRight size={14} strokeWidth={2.5} />
                        </button>
                        <button
                            className="w-full py-3 px-5 rounded-[5px] font-bold text-[12px] text-white bg-white/[0.04] border border-white/10"
                        >
                            {data.buttons.secondary}
                        </button>
                    </div>

                    <div className="flex flex-col gap-2 w-full pt-4 border-t border-white/[0.08] text-left">
                        {data.trustBadges.map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-white/80">
                                {i === 0 && <ShieldCheck size={14} className="text-[#34D399] shrink-0" />}
                                {i === 1 && <Target size={14} className="text-[#6B8AFF] shrink-0" />}
                                {i === 2 && <BarChart2 size={14} className="text-[#A78BFA] shrink-0" />}
                                <span>{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

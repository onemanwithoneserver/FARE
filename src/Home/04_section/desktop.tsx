import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Target, BarChart2 } from 'lucide-react';
import { data } from './data';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const MUTED_BLUE = '#7B8DAA';

export default function Desktop() {
    return (
        <section
            className="w-full py-24 px-12 flex justify-center font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-radial from-[#C99A2E]/[0.08] via-[#6B8AFF]/[0.03] to-transparent rounded-full blur-[140px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[1240px] w-full relative z-10"
            >
                <div
                    className="w-full rounded-[10px] p-16 flex flex-col items-center text-center relative overflow-hidden luxury-shadow-dark"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-[#D5AA45]/15 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

                    <h2 className="text-[3.75rem] leading-[1.05] font-black tracking-[-0.02em] text-white uppercase mb-6 relative z-10 max-w-[950px]">
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </h2>

                    <p className="text-[15.5px] font-medium max-w-[640px] leading-relaxed mb-10 relative z-10" style={{ color: MUTED_BLUE }}>
                        {data.headline.subtitle}
                    </p>

                    <div className="flex items-center gap-4 mb-12 relative z-10">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="font-black text-[13px] px-8 py-4 rounded-[6px] transition-all duration-300 flex items-center gap-2.5 cursor-pointer hover:brightness-110 shadow-[0_0_25px_rgba(213,170,69,0.35)] text-[#071A49] uppercase tracking-wider"
                            style={{ background: 'linear-gradient(90deg, #C99A2E 0%, #D5AA45 50%, #E2C068 100%)' }}
                        >
                            <span>{data.buttons.primary}</span>
                            <ArrowRight size={16} strokeWidth={2.5} />
                        </button>
                        <button
                            className="bg-white/[0.04] text-white font-bold text-[13px] px-8 py-4 rounded-[6px] border border-white/15 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30 cursor-pointer"
                        >
                            {data.buttons.secondary}
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-6 w-full max-w-[900px] pt-8 border-t border-white/[0.08] relative z-10">
                        {data.trustBadges.map((badge, i) => (
                            <div key={i} className="flex items-center justify-center gap-2.5 text-[12px] font-semibold text-white/80">
                                {i === 0 && <ShieldCheck size={16} className="text-[#34D399] shrink-0" />}
                                {i === 1 && <Target size={16} className="text-[#6B8AFF] shrink-0" />}
                                {i === 2 && <BarChart2 size={16} className="text-[#A78BFA] shrink-0" />}
                                <span>{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

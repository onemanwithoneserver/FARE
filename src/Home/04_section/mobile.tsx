import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const GOLD = '#C99A2E';
const GOLD_MID = '#D5AA45';
const MUTED_BLUE = '#7B8DAA';

export default function Mobile() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    
    const item: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section
            className="w-full flex flex-col items-center justify-center font-['Inter',sans-serif] relative overflow-hidden py-16 px-6 text-center"
            style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[80px]"></div>
            </div>

            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.02]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14rem] font-black text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>04</div>
            </div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="z-10 flex flex-col items-center w-full">

                <motion.div variants={item} className="flex items-center gap-2 mb-5 justify-center">
                    <div className="w-4 h-[1.5px]" style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }}></div>
                    <span className="font-bold text-[9px] tracking-[0.25em] uppercase" style={{ color: GOLD_MID }}>
                        Take The Next Step
                    </span>
                    <div className="w-4 h-[1.5px]" style={{ background: `linear-gradient(270deg, transparent, ${GOLD})` }}></div>
                </motion.div>

                <motion.h2 variants={item} className="text-[2.75rem] leading-[0.98] font-black tracking-[-0.02em] uppercase mb-6">
                    <span className="block text-white">Build</span>
                    <span className="block text-white">Better</span>
                    <span className="block" style={{ color: GOLD_MID }}>Capability</span>
                    <span className="block text-white">In Real<br />Estate.</span>
                </motion.h2>

                <motion.p variants={item} className="font-medium text-[12px] mb-8 max-w-[300px] leading-relaxed" style={{ color: MUTED_BLUE }}>
                    FARE brings real-estate-specific learning, practical skill development and continuous improvement together in one platform.
                </motion.p>

                <motion.div variants={item} className="flex flex-col gap-3.5 w-full max-w-[300px] mb-8">
                    <button
                        className="font-bold py-3.5 rounded-[2px] transition-all duration-300 shadow-[0_4px_16px_rgba(201,154,46,0.2)] w-full flex items-center justify-center gap-2 active:scale-[0.98]"
                        style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)`, color: NAVY_DEEP }}
                    >
                        FOR COMPANIES <span>→</span>
                    </button>
                    <button
                        className="bg-transparent text-white font-bold py-3.5 rounded-[2px] transition-all duration-300 w-full flex items-center justify-center gap-2 active:scale-[0.98]"
                        style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                        FOR TRAINERS <span>→</span>
                    </button>
                </motion.div>

                <motion.button variants={item} className="transition-all duration-300 text-[11px] font-medium" style={{ color: MUTED_BLUE }}>
                    Professional? <span className="text-white">Join the waitlist <span>→</span></span>
                </motion.button>
            </motion.div>

        </section>
    );
}

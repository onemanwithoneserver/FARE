import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const GOLD = '#C99A2E';
const GOLD_MID = '#D5AA45';
const MUTED_BLUE = '#7B8DAA';

export default function Desktop() {
    return (
        <section
            className="w-full py-24 px-12 flex justify-center font-['Inter',sans-serif] relative overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C99A2E]/[0.08] to-transparent rounded-full blur-[100px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[1200px] w-full relative z-10"
            >
                <div
                    className="w-full rounded-[4px] p-16 flex flex-col items-center text-center relative overflow-hidden luxury-shadow-dark"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                >

                    {/* Inner glowing core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="flex items-center gap-3 mb-8 relative z-10">
                        <div className="w-10 h-[1.5px]" style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }}></div>
                        <span className="font-bold text-[10.5px] tracking-[0.25em] uppercase" style={{ color: GOLD_MID }}>
                            Ready to Transform?
                        </span>
                        <div className="w-10 h-[1.5px]" style={{ background: `linear-gradient(270deg, transparent, ${GOLD})` }}></div>
                    </div>

                    <h2 className="text-[4.5rem] leading-[0.95] font-black tracking-[-0.02em] text-white uppercase mb-6 relative z-10">
                        The Standard<br />For Excellence.
                    </h2>

                    <p className="text-[16px] font-medium max-w-[600px] leading-relaxed mb-10 relative z-10" style={{ color: MUTED_BLUE }}>
                        Join top real estate companies, trainers, and professionals who use FARE to build, practise, and benchmark capabilities.
                    </p>

                    <div className="flex items-center gap-5 relative z-10">
                        <button
                            className="text-[#071A49] font-bold px-8 py-4 rounded-[2px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-3"
                            style={{
                                background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)`,
                                boxShadow: `0 4px 16px rgba(201,154,46,0.3)`
                            }}
                        >
                            Start Free Trial
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                        <button
                            className="bg-transparent text-white font-bold px-8 py-4 rounded-[2px] transition-all duration-300 hover:bg-white/5 hover:border-white/40"
                            style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                        >
                            Book a Demo
                        </button>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Desktop() {
    return (
        <section className="w-full bg-[#fdfdfd] py-24 px-12 flex justify-center font-['Inter',sans-serif] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#D4AF37]/[0.03] to-transparent rounded-full blur-[100px]"></div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[1200px] w-full relative z-10"
            >
                <div className="w-full bg-[#111] rounded-lg p-16 flex flex-col items-center text-center relative overflow-hidden luxury-shadow-dark border border-[#333]">
                    
                    {/* Inner glowing core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-[#D4AF37]/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="flex items-center gap-4 mb-8 relative z-10">
                        <div className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                        <span className="text-[#D4AF37] font-bold text-[12px] tracking-[0.25em] uppercase">
                            Ready to Transform?
                        </span>
                        <div className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                    </div>

                    <h2 className="text-[4.5rem] leading-[0.95] font-black tracking-[-0.02em] text-white uppercase mb-8 relative z-10">
                        The Standard<br/>For Excellence.
                    </h2>

                    <p className="text-[#999] text-[16px] font-medium max-w-[600px] leading-relaxed mb-10 relative z-10">
                        Join top real estate companies, trainers, and professionals who use FARE to build, practise, and benchmark capabilities.
                    </p>

                    <div className="flex items-center gap-5 relative z-10">
                        <button className="bg-[#D4AF37] text-[#111] font-bold px-8 py-4 rounded-md hover:bg-[#F5D76E] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-3">
                            Start Free Trial
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                        <button className="bg-transparent border border-[#333] text-white font-bold px-8 py-4 rounded-md hover:bg-white/[0.05] hover:border-[#555] transition-all duration-300">
                            Book a Demo
                        </button>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}

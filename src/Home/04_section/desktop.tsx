export default function Desktop() {
    return (
        <section className="w-full bg-[#0A1128] flex flex-col items-center justify-center font-['Inter',sans-serif] relative overflow-hidden py-24 px-6">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-radial from-[#D4AF37]/[0.04] to-transparent rounded-full blur-[100px]"></div>
            </div>

            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
                <div className="absolute top-10 left-32 text-[18rem] font-black text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>02</div>
                <div className="absolute bottom-10 right-32 text-[18rem] font-black text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>04</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28rem] font-black text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>03</div>
            </div>

            <div className="z-10 flex flex-col items-center text-center max-w-[850px] animate-fade-in-up">

                <div className="flex items-center gap-4 mb-7">
                    <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                    <span className="text-[#D4AF37] font-bold text-[11px] tracking-[0.25em] uppercase">
                        Take The Next Step
                    </span>
                    <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                </div>

                <h2 className="text-[5rem] leading-[0.98] font-black tracking-[-0.02em] uppercase mb-7">
                    <span className="block text-white">Build Better</span>
                    <span className="block text-[#D4AF37]">Capability</span>
                    <span className="block text-white">In Real Estate.</span>
                </h2>

                <p className="text-slate-400 font-medium text-[16px] max-w-[560px] mb-10 leading-relaxed">
                    FARE brings real-estate-specific learning, practical skill development and continuous improvement together in one platform.
                </p>

                <div className="flex items-center gap-5 mb-10">
                    <button className="bg-[#D4AF37] text-[#0A1128] font-bold px-9 py-3.5 rounded-xl hover:bg-[#D4AF37]/90 hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(212,175,55,0.3)] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_16px_rgba(212,175,55,0.2)] flex items-center gap-2.5">
                        FOR COMPANIES <span>→</span>
                    </button>
                    <button className="bg-transparent border border-white/15 text-white font-bold px-9 py-3.5 rounded-xl hover:bg-white/[0.04] hover:border-white/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5">
                        FOR TRAINERS <span>→</span>
                    </button>
                </div>

                <button className="text-slate-400 hover:text-white transition-all duration-300 text-[13px] font-medium hover:translate-x-1">
                    Professional? Join the waitlist <span>→</span>
                </button>
            </div>

        </section>
    );
}

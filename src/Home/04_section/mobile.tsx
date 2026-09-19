export default function Mobile() {
    return (
        <section className="w-full bg-[#0A1128] flex flex-col items-center justify-center font-['Inter',sans-serif] relative overflow-hidden py-16 px-6 text-center">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-gradient-radial from-[#D4AF37]/[0.04] to-transparent rounded-full blur-[80px]"></div>
            </div>

            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14rem] font-black text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>04</div>
            </div>

            <div className="z-10 flex flex-col items-center w-full animate-fade-in-up">

                <div className="flex items-center gap-3 mb-6 justify-center">
                    <div className="w-4 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                    <span className="text-[#D4AF37] font-bold text-[10px] tracking-[0.25em] uppercase">
                        Take The Next Step
                    </span>
                    <div className="w-4 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                </div>

                <h2 className="text-[3rem] leading-[0.98] font-black tracking-[-0.02em] uppercase mb-6">
                    <span className="block text-white">Build</span>
                    <span className="block text-white">Better</span>
                    <span className="block text-[#D4AF37]">Capability</span>
                    <span className="block text-white">In Real<br/>Estate.</span>
                </h2>

                <p className="text-slate-400 font-medium text-[13px] mb-8 max-w-[300px] leading-relaxed">
                    FARE brings real-estate-specific learning, practical skill development and continuous improvement together in one platform.
                </p>

                <div className="flex flex-col gap-3.5 w-full max-w-[300px] mb-8">
                    <button className="bg-[#D4AF37] text-[#0A1128] font-bold py-3.5 rounded-xl hover:bg-[#D4AF37]/90 transition-all duration-300 shadow-[0_4px_16px_rgba(212,175,55,0.2)] w-full flex items-center justify-center gap-2 active:scale-[0.98]">
                        FOR COMPANIES <span>→</span>
                    </button>
                    <button className="bg-transparent border border-white/15 text-white font-bold py-3.5 rounded-xl hover:bg-white/[0.04] transition-all duration-300 w-full flex items-center justify-center gap-2 active:scale-[0.98]">
                        FOR TRAINERS <span>→</span>
                    </button>
                </div>

                <button className="text-slate-400 hover:text-white transition-all duration-300 text-[12px] font-medium">
                    Professional? Join the waitlist <span>→</span>
                </button>
            </div>

        </section>
    );
}

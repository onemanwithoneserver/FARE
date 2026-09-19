

export default function Desktop() {
    return (
        <section className="w-full bg-[#0A1128] min-h-[80vh] flex flex-col items-center justify-center font-sans relative overflow-hidden py-32 px-6">
            
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
                <div className="absolute top-10 left-32 text-[20rem] font-black text-transparent" style={{ WebkitTextStroke: '2px white' }}>02</div>
                <div className="absolute bottom-10 right-32 text-[20rem] font-black text-transparent" style={{ WebkitTextStroke: '2px white' }}>04</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-transparent" style={{ WebkitTextStroke: '2px white' }}>03</div>
            </div>

            <div className="z-10 flex flex-col items-center text-center max-w-[900px]">
                
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
                    <span className="text-[#D4AF37] font-bold text-xs tracking-[0.2em] uppercase">
                        Take The Next Step
                    </span>
                    <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
                </div>

                <h2 className="text-[5.5rem] leading-[1] font-black tracking-tight uppercase mb-8">
                    <span className="block text-white">Build Better</span>
                    <span className="block text-[#D4AF37]">Capability</span>
                    <span className="block text-white">In Real Estate.</span>
                </h2>

                <p className="text-slate-400 font-medium text-lg max-w-[600px] mb-12">
                    FARE brings real-estate-specific learning, practical skill development and continuous improvement together in one platform.
                </p>

                <div className="flex items-center gap-6 mb-12">
                    <button className="bg-[#D4AF37] text-[#0A1128] font-bold px-10 py-4 rounded-xl hover:bg-[#D4AF37]/90 transition-colors shadow-lg flex items-center gap-3">
                        FOR COMPANIES <span>→</span>
                    </button>
                    <button className="bg-transparent border border-white/20 text-white font-bold px-10 py-4 rounded-xl hover:bg-white/5 transition-colors flex items-center gap-3">
                        FOR TRAINERS <span>→</span>
                    </button>
                </div>

                <button className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                    Professional? Join the waitlist <span>→</span>
                </button>
            </div>
            
        </section>
    );
}

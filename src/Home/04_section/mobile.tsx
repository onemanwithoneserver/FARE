

export default function Mobile() {
    return (
        <section className="w-full bg-[#0A1128] min-h-[70vh] flex flex-col items-center justify-center font-sans relative overflow-hidden py-24 px-6 text-center">
            
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-transparent" style={{ WebkitTextStroke: '2px white' }}>04</div>
            </div>

            <div className="z-10 flex flex-col items-center w-full">
                
                <div className="flex items-center gap-3 mb-6 justify-center">
                    <div className="w-4 h-[1px] bg-[#D4AF37]"></div>
                    <span className="text-[#D4AF37] font-bold text-[10px] tracking-[0.2em] uppercase">
                        Take The Next Step
                    </span>
                    <div className="w-4 h-[1px] bg-[#D4AF37]"></div>
                </div>

                <h2 className="text-5xl leading-[1] font-black tracking-tight uppercase mb-6">
                    <span className="block text-white">Build</span>
                    <span className="block text-white">Better</span>
                    <span className="block text-[#D4AF37]">Capability</span>
                    <span className="block text-white">In Real<br/>Estate.</span>
                </h2>

                <p className="text-slate-400 font-medium text-sm mb-10 max-w-[300px]">
                    FARE brings real-estate-specific learning, practical skill development and continuous improvement together in one platform.
                </p>

                <div className="flex flex-col gap-4 w-full max-w-[300px] mb-10">
                    <button className="bg-[#D4AF37] text-[#0A1128] font-bold py-4 rounded-xl hover:bg-[#D4AF37]/90 transition-colors shadow-lg w-full flex items-center justify-center gap-2">
                        FOR COMPANIES <span>→</span>
                    </button>
                    <button className="bg-transparent border border-white/20 text-white font-bold py-4 rounded-xl hover:bg-white/5 transition-colors w-full flex items-center justify-center gap-2">
                        FOR TRAINERS <span>→</span>
                    </button>
                </div>

                <button className="text-slate-400 hover:text-white transition-colors text-xs font-medium">
                    Professional? Join the waitlist <span>→</span>
                </button>
            </div>
            
        </section>
    );
}

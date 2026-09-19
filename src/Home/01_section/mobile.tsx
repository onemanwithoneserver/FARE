export default function Mobile() {
    return (
        <section className="w-full bg-gradient-to-b from-[#FAFBFD] to-[#F1F3F7] min-h-[calc(100vh-64px)] px-6 py-12 flex flex-col items-center justify-center overflow-hidden text-center relative">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#D4AF37]/[0.04] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6 justify-center animate-fade-in-up">
                <div className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                <span className="text-[#D4AF37] font-bold text-[10px] tracking-[0.25em] uppercase">
                    Finishing Academy for Real Estate
                </span>
                <div className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
            </div>

            <h1 className="text-[2.75rem] leading-[0.95] font-black tracking-[-0.02em] mb-6">
                <span className="block text-[#0A1128] animate-fade-in-up">LEARN.</span>
                <span className="block text-[#D4AF37] animate-fade-in-up delay-100">PRACTISE.</span>
                <span className="block text-[#0A1128] animate-fade-in-up delay-200">BENCHMARK.</span>
                <span className="block text-[#94A3B8] animate-fade-in-up delay-300">BUILD HABITS.</span>
            </h1>

            <div className="mb-10 animate-fade-in-up delay-400">
                <p className="text-lg text-[#0A1128] font-medium mb-2.5 leading-relaxed">
                    A custom learning platform built specifically for real estate.
                </p>
                <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                    Knowledge • Skills • Capability • Habits
                </p>
            </div>

            <div className="flex flex-col w-full gap-3.5 max-w-[300px] mb-10 animate-fade-in-up delay-500">
                <button className="bg-[#0A1128] text-white font-semibold w-full py-3.5 rounded-lg hover:bg-[#0A1128]/90 transition-all duration-300 shadow-[0_4px_16px_rgba(10,17,40,0.2)] flex items-center justify-center gap-2.5 active:scale-[0.98]">
                    Explore FARE
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
                <button className="bg-white border border-[#0A1128]/15 text-[#0A1128] font-semibold w-full py-3.5 rounded-lg hover:bg-[#0A1128]/[0.03] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-[0.98]">
                    How It Works
                </button>
            </div>

            <div className="w-full relative h-[280px] bg-[#0A1128] rounded-2xl overflow-hidden mt-4 animate-fade-in-up delay-600 shadow-[0_20px_50px_rgba(10,17,40,0.3),0_0_0_1px_rgba(255,255,255,0.06)]">
                <div className="h-7 bg-gradient-to-b from-[#1A2340] to-[#0F172A] w-full flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F57]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FEBC2E]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#28C840]"></div>
                </div>
                <div className="p-4 h-full flex flex-col gap-4 opacity-50">
                    <div className="w-3/4 h-6 bg-white/[0.04] rounded-lg"></div>
                    <div className="w-full h-20 bg-white/[0.04] rounded-lg"></div>
                    <div className="w-full h-24 bg-white/[0.04] rounded-lg"></div>
                </div>
            </div>

            <div className="mt-8 text-[10px] font-semibold text-slate-400 uppercase tracking-[0.15em] animate-fade-in-up delay-700">
                For Real Estate Companies • Trainers • Professionals
            </div>

        </section>
    );
}



export default function Mobile() {
    return (
        <section className="w-full bg-[#FAFAFA] min-h-[calc(100vh-60px)] px-6 py-12 flex flex-col items-center justify-center overflow-hidden text-center">
            
            <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="w-6 h-[1px] bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] font-bold text-[10px] tracking-[0.2em] uppercase">
                    Finishing Academy for Real Estate
                </span>
                <div className="w-6 h-[1px] bg-[#D4AF37]"></div>
            </div>

            <h1 className="text-4xl leading-[1] font-black tracking-tight mb-6">
                <span className="block text-[#0A1128]">LEARN.</span>
                <span className="block text-[#D4AF37]">PRACTISE.</span>
                <span className="block text-[#0A1128]">BENCHMARK.</span>
                <span className="block text-[#94A3B8]">BUILD HABITS.</span>
            </h1>

            <div className="mb-10">
                <p className="text-lg text-[#0A1128] font-medium mb-3">
                    A custom learning platform built specifically for real estate.
                </p>
                <p className="text-xs text-slate-400 font-medium">
                    Knowledge • Skills • Capability • Habits
                </p>
            </div>

            <div className="flex flex-col w-full gap-4 max-w-[300px] mb-12">
                <button className="bg-[#0A1128] text-white font-semibold w-full py-3.5 rounded hover:bg-[#0A1128]/90 transition-colors shadow-lg flex items-center justify-center gap-2">
                    Explore FARE 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
                <button className="bg-white border-2 border-[#0A1128] text-[#0A1128] font-semibold w-full py-3.5 rounded hover:bg-gray-50 transition-colors">
                    How It Works
                </button>
            </div>

            <div className="w-full relative h-[300px] bg-[#0A1128] rounded-xl shadow-2xl border border-white/10 overflow-hidden mt-8">
                <div className="h-6 bg-[#0F172A] w-full flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="p-4 h-full flex flex-col gap-4 opacity-70">
                    <div className="w-3/4 h-6 bg-white/5 rounded"></div>
                    <div className="w-full h-20 bg-white/5 rounded"></div>
                    <div className="w-full h-24 bg-white/5 rounded"></div>
                </div>
            </div>

            <div className="mt-10 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                For Real Estate Companies • Trainers • Professionals
            </div>
            
        </section>
    );
}

export default function Desktop() {
    return (
        <section className="w-full bg-gradient-to-b from-[#FAFBFD] via-[#F7F8FA] to-[#F1F3F7] min-h-[calc(100vh-76px)] flex items-center justify-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#D4AF37]/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#3b82f6]/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-[1400px] w-full px-12 py-14 flex items-center justify-between gap-12">

                <div className="flex-1 flex flex-col items-start z-10 max-w-[650px]">
                    <div className="flex items-center gap-4 mb-7 animate-fade-in-up">
                        <div className="w-10 h-[1px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/30"></div>
                        <span className="text-[#D4AF37] font-bold text-[11px] tracking-[0.25em] uppercase">
                            Finishing Academy for Real Estate
                        </span>
                    </div>

                    <h1 className="text-[5rem] leading-[0.93] font-black tracking-[-0.02em] mb-8">
                        <span className="block text-[#0A1128] animate-fade-in-up">LEARN.</span>
                        <span className="block text-[#D4AF37] animate-fade-in-up delay-100">PRACTISE.</span>
                        <span className="block text-[#0A1128] animate-fade-in-up delay-200">BENCHMARK.</span>
                        <span className="block text-[#94A3B8] animate-fade-in-up delay-300">BUILD HABITS.</span>
                    </h1>

                    <div className="mb-10 animate-fade-in-up delay-400">
                        <p className="text-xl text-[#0A1128] font-medium mb-2 leading-relaxed">
                            A custom learning platform built specifically for real estate.
                        </p>
                        <p className="text-sm text-slate-400 font-medium tracking-wide">
                            Knowledge • Skills • Capability • Habits
                        </p>
                    </div>

                    <div className="flex items-center gap-4 animate-fade-in-up delay-500">
                        <button className="bg-[#0A1128] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#0A1128]/90 hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(10,17,40,0.3)] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_16px_rgba(10,17,40,0.2)] flex items-center gap-2.5">
                            Explore FARE
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                        <button className="bg-white border border-[#0A1128]/15 text-[#0A1128] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#0A1128]/[0.03] hover:border-[#0A1128]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                            How It Works
                        </button>
                    </div>

                    <div className="mt-12 text-[11px] font-semibold text-slate-400 uppercase tracking-[0.15em] animate-fade-in-up delay-700">
                        For Real Estate Companies • Trainers • Professionals
                    </div>
                </div>

                <div className="flex-1 relative h-[560px] w-full flex items-center justify-end animate-slide-in-right">
                    <div className="relative w-[88%] h-[480px] bg-[#0A1128] rounded-2xl overflow-hidden transform translate-x-4 shadow-[0_25px_60px_rgba(10,17,40,0.35),0_0_0_1px_rgba(255,255,255,0.06),0_0_80px_rgba(59,130,246,0.06)]">
                        <div className="h-9 bg-gradient-to-b from-[#1A2340] to-[#0F172A] w-full flex items-center px-4 gap-2">
                            <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]"></div>
                            <div className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]"></div>
                            <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]"></div>
                        </div>
                        <div className="p-8 h-full flex flex-col gap-6 opacity-60">
                            <div className="w-3/4 h-8 bg-white/[0.04] rounded-lg"></div>
                            <div className="w-full flex gap-4">
                                <div className="flex-1 h-32 bg-white/[0.04] rounded-lg"></div>
                                <div className="flex-1 h-32 bg-white/[0.04] rounded-lg"></div>
                            </div>
                            <div className="w-full h-48 bg-white/[0.04] rounded-lg"></div>
                        </div>
                    </div>

                    <div className="absolute top-8 left-6 bg-white p-5 rounded-xl premium-shadow-float animate-gentle-float border border-black/[0.04] flex items-center gap-4 hover:scale-[1.03] transition-transform duration-500">
                        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">📚</div>
                        <div>
                            <div className="font-bold text-[#0A1128] text-sm">Knowledge Bank</div>
                            <div className="text-[11px] text-slate-400 font-medium">Quizzes</div>
                        </div>
                    </div>

                    <div className="absolute top-28 -right-4 bg-white p-5 rounded-xl premium-shadow-float animate-gentle-float-delayed border border-black/[0.04] flex items-center gap-4 z-20 hover:scale-[1.03] transition-transform duration-500">
                        <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">🎯</div>
                        <div>
                            <div className="font-bold text-[#0A1128] text-sm">Skill Practice</div>
                            <div className="text-[11px] text-slate-400 font-medium">Mocks w/ Trainers</div>
                        </div>
                    </div>

                    <div className="absolute bottom-28 left-0 bg-white p-5 rounded-xl premium-shadow-float animate-gentle-float-slow border border-black/[0.04] flex items-center gap-4 z-20 hover:scale-[1.03] transition-transform duration-500">
                        <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">📊</div>
                        <div>
                            <div className="font-bold text-[#0A1128] text-sm">Functional Skills</div>
                            <div className="text-[11px] text-slate-400 font-medium">Questionnaires</div>
                        </div>
                    </div>

                    <div className="absolute -bottom-4 right-8 bg-white p-5 rounded-xl premium-shadow-float animate-gentle-float-slower border border-black/[0.04] flex items-center gap-4 z-20 hover:scale-[1.03] transition-transform duration-500">
                        <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">✅</div>
                        <div>
                            <div className="font-bold text-[#0A1128] text-sm">Daily Habits</div>
                            <div className="text-[11px] text-slate-400 font-medium">Habit Tracker</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

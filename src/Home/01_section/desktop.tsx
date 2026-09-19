

export default function Desktop() {
    return (
        <section className="w-full bg-[#FAFAFA] min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
            <div className="max-w-[1400px] w-full px-12 py-16 flex items-center justify-between gap-12">
                
                <div className="flex-1 flex flex-col items-start z-10 max-w-[650px]">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
                        <span className="text-[#D4AF37] font-bold text-xs tracking-[0.2em] uppercase">
                            Finishing Academy for Real Estate
                        </span>
                    </div>

                    <h1 className="text-[5rem] leading-[0.95] font-black tracking-tight mb-8">
                        <span className="block text-[#0A1128]">LEARN.</span>
                        <span className="block text-[#D4AF37]">PRACTISE.</span>
                        <span className="block text-[#0A1128]">BENCHMARK.</span>
                        <span className="block text-[#94A3B8]">BUILD HABITS.</span>
                    </h1>

                    <div className="mb-10">
                        <p className="text-xl text-[#0A1128] font-medium mb-2">
                            A custom learning platform built specifically for real estate.
                        </p>
                        <p className="text-sm text-slate-400 font-medium">
                            Knowledge • Skills • Capability • Habits
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="bg-[#0A1128] text-white font-semibold px-8 py-3.5 rounded hover:bg-[#0A1128]/90 transition-colors shadow-lg flex items-center gap-2">
                            Explore FARE 
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                        <button className="bg-white border-2 border-[#0A1128] text-[#0A1128] font-semibold px-8 py-3.5 rounded hover:bg-gray-50 transition-colors">
                            How It Works
                        </button>
                    </div>

                    <div className="mt-12 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        For Real Estate Companies • Trainers • Professionals
                    </div>
                </div>

                <div className="flex-1 relative h-[600px] w-full flex items-center justify-end">
                    <div className="relative w-[85%] h-[500px] bg-[#0A1128] rounded-xl shadow-2xl border border-white/10 overflow-hidden transform translate-x-4">
                        <div className="h-8 bg-[#0F172A] w-full flex items-center px-4 gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="p-8 h-full flex flex-col gap-6 opacity-70">
                            <div className="w-3/4 h-8 bg-white/5 rounded"></div>
                            <div className="w-full flex gap-4">
                                <div className="flex-1 h-32 bg-white/5 rounded"></div>
                                <div className="flex-1 h-32 bg-white/5 rounded"></div>
                            </div>
                            <div className="w-full h-48 bg-white/5 rounded"></div>
                        </div>
                    </div>

                    <div className="absolute top-10 left-10 bg-white p-5 rounded-xl shadow-xl animate-[bounce_6s_infinite] border border-gray-100 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-xl">📚</div>
                        <div>
                            <div className="font-bold text-[#0A1128] text-sm">Knowledge Bank</div>
                            <div className="text-xs text-slate-400">Quizzes</div>
                        </div>
                    </div>

                    <div className="absolute top-32 -right-6 bg-white p-5 rounded-xl shadow-xl animate-[bounce_7s_infinite_1s] border border-gray-100 flex items-center gap-4 z-20">
                        <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-xl">🎯</div>
                        <div>
                            <div className="font-bold text-[#0A1128] text-sm">Skill Practice</div>
                            <div className="text-xs text-slate-400">Mocks w/ Trainers</div>
                        </div>
                    </div>

                    <div className="absolute bottom-32 left-0 bg-white p-5 rounded-xl shadow-xl animate-[bounce_5s_infinite_0.5s] border border-gray-100 flex items-center gap-4 z-20">
                        <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-xl">📊</div>
                        <div>
                            <div className="font-bold text-[#0A1128] text-sm">Functional Skills</div>
                            <div className="text-xs text-slate-400">Questionnaires</div>
                        </div>
                    </div>

                    <div className="absolute -bottom-6 right-10 bg-white p-5 rounded-xl shadow-xl animate-[bounce_8s_infinite_2s] border border-gray-100 flex items-center gap-4 z-20">
                        <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-xl">✅</div>
                        <div>
                            <div className="font-bold text-[#0A1128] text-sm">Daily Habits</div>
                            <div className="text-xs text-slate-400">Habit Tracker</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

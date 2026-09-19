

export default function Desktop() {
    return (
        <section className="w-full bg-white min-h-[calc(100vh-72px)] py-24 px-12 flex justify-center font-sans">
            <div className="max-w-[1400px] w-full flex flex-col items-center">
                
                <div className="w-full mb-16 flex flex-col items-start max-w-[1200px]">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
                        <span className="text-[#D4AF37] font-bold text-xs tracking-[0.2em] uppercase">
                            Your Journey
                        </span>
                    </div>
                    <h2 className="text-[4rem] leading-[0.95] font-black tracking-tight text-[#0A1128] uppercase">
                        What brings<br/>you to FARE?
                    </h2>
                </div>

                <div className="w-full max-w-[1200px] grid grid-cols-2 gap-6">
                    
                    <div className="bg-[#0A1128] rounded-2xl p-10 flex flex-col relative overflow-hidden group cursor-pointer shadow-xl border border-transparent hover:border-blue-500/30 transition-all">
                        <div className="inline-block border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-10 w-max bg-[#D4AF37]/5">
                            For Real Estate Companies
                        </div>

                        <div className="w-full bg-[#151f38] rounded-xl p-6 border border-white/5 mb-10 shadow-lg">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xs font-bold text-slate-400 tracking-wider">TEAM CAPABILITY</span>
                                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                                    ↑ +12%
                                </span>
                            </div>
                            <div className="flex flex-col gap-5">
                                {[
                                    { label: 'Sales Team A', val: 84 },
                                    { label: 'Channel Partners', val: 67 },
                                    { label: 'New Associates', val: 43 }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-xs text-white mb-2">
                                            <span>{stat.label}</span>
                                            <span>{stat.val}%</span>
                                        </div>
                                        <div className="w-full h-1 bg-[#1E293B] rounded-full overflow-hidden">
                                            <div className="h-full bg-[#D4AF37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]" style={{ width: `${stat.val}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-3xl font-black text-white mb-4">BUILD A<br/>STRONGER TEAM.</h3>
                            <p className="text-slate-400 text-sm font-medium mb-8">
                                Train, develop and benchmark your people with a platform built specifically for real estate.
                            </p>
                            <div className="text-[#D4AF37] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                Explore for Companies <span>→</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        
                        <div className="bg-white rounded-2xl p-10 flex flex-col flex-1 border-2 border-gray-100 shadow-xl group cursor-pointer hover:border-blue-500/30 transition-all">
                            <div className="inline-block border border-blue-200 text-blue-900 bg-blue-50 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8 w-max">
                                For Real Estate Trainers
                            </div>

                            <div className="w-full bg-white rounded-xl p-5 border-2 border-gray-100 mb-8 shadow-sm">
                                <div className="text-[10px] font-bold text-slate-400 tracking-wider mb-4">COURSE BUILDER</div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <div className="text-sm">📚</div>
                                            <span className="text-xs font-bold text-[#0A1128]">RERA Essentials · Module 1</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-green-500">Active</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <div className="text-sm">🎯</div>
                                            <span className="text-xs font-bold text-[#0A1128]">Objection Handling Mock</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-green-500">Active</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-2xl font-black text-[#0A1128] mb-3">TURN EXPERTISE<br/>INTO LEARNING.</h3>
                                <p className="text-slate-500 text-sm font-medium mb-6">
                                    Create courses, quizzes and practical mock-based learning experiences.
                                </p>
                                <div className="text-[#0A1128] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Explore for Trainers <span>→</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#f8f9fa] rounded-2xl p-10 flex flex-col border border-gray-100 relative overflow-hidden group cursor-pointer opacity-90 hover:opacity-100 transition-all">
                            <div className="flex justify-between items-start mb-8">
                                <div className="inline-block border border-gray-300 text-gray-400 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-white">
                                    For Real Estate Professionals
                                </div>
                                <div className="bg-[#fff7ed] text-[#ea580c] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#fdba74]/50">
                                    Coming Soon
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-2xl font-black text-gray-300 mb-3">BUILD THE SKILLS<br/>THAT MATTER.</h3>
                                <p className="text-gray-400 text-sm font-medium mb-6">
                                    Learn, practise and benchmark your capabilities.
                                </p>
                                <div className="text-gray-300 font-bold text-sm flex items-center gap-2">
                                    Join the Waitlist <span>→</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

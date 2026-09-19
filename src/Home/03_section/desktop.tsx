export default function Desktop() {
    return (
        <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#F7F8FA] py-20 px-12 flex justify-center font-['Inter',sans-serif]">
            <div className="max-w-[1400px] w-full flex flex-col items-center">

                <div className="w-full mb-14 flex flex-col items-start max-w-[1200px] animate-fade-in-up">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-[1px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/30"></div>
                        <span className="text-[#D4AF37] font-bold text-[11px] tracking-[0.25em] uppercase">
                            Your Journey
                        </span>
                    </div>
                    <h2 className="text-[3.75rem] leading-[0.95] font-black tracking-[-0.02em] text-[#0A1128] uppercase">
                        What brings<br/>you to FARE?
                    </h2>
                </div>

                <div className="w-full max-w-[1200px] grid grid-cols-2 gap-5">

                    <div className="bg-[#0A1128] rounded-2xl p-9 flex flex-col relative overflow-hidden group cursor-pointer border border-white/[0.04] hover:border-[#D4AF37]/20 transition-all duration-500 hover:-translate-y-1 shadow-[0_4px_16px_rgba(10,17,40,0.2),0_16px_48px_rgba(10,17,40,0.15)]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-gradient-radial from-blue-900/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="inline-block border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-9 w-max bg-[#D4AF37]/[0.05] relative z-10">
                            For Real Estate Companies
                        </div>

                        <div className="w-full bg-[#111B33] rounded-xl p-5 border border-white/[0.04] mb-9 shadow-[0_4px_16px_rgba(0,0,0,0.15)] relative z-10">
                            <div className="flex justify-between items-center mb-5">
                                <span className="text-[10px] font-bold text-slate-400 tracking-[0.15em]">TEAM CAPABILITY</span>
                                <span className="bg-green-500/15 text-green-400 text-[10px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 border border-green-500/10">
                                    ↑ +12%
                                </span>
                            </div>
                            <div className="flex flex-col gap-4">
                                {[
                                    { label: 'Sales Team A', val: 84 },
                                    { label: 'Channel Partners', val: 67 },
                                    { label: 'New Associates', val: 43 }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-[11px] text-white mb-2 font-medium">
                                            <span>{stat.label}</span>
                                            <span>{stat.val}%</span>
                                        </div>
                                        <div className="w-full h-[3px] bg-[#1E293B] rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" style={{ width: `${stat.val}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto relative z-10">
                            <h3 className="text-[1.75rem] font-black text-white mb-3 leading-[1.1]">BUILD A<br/>STRONGER TEAM.</h3>
                            <p className="text-slate-400 text-[13px] font-medium mb-7 leading-relaxed">
                                Train, develop and benchmark your people with a platform built specifically for real estate.
                            </p>
                            <div className="text-[#D4AF37] font-bold text-[13px] flex items-center gap-2 group-hover:gap-3.5 transition-all duration-400">
                                Explore for Companies <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">

                        <div className="bg-white rounded-2xl p-9 flex flex-col flex-1 border border-[#E8ECF1] group cursor-pointer hover:border-[#0A1128]/15 transition-all duration-500 hover:-translate-y-1 shadow-[0_2px_8px_rgba(0,0,0,0.03),0_8px_32px_rgba(0,0,0,0.04)]">
                            <div className="inline-block border border-blue-200/60 text-blue-800 bg-blue-50/80 text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-7 w-max">
                                For Real Estate Trainers
                            </div>

                            <div className="w-full bg-white rounded-xl p-4 border border-[#E8ECF1] mb-7 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                                <div className="text-[10px] font-bold text-slate-400 tracking-[0.15em] mb-3.5">COURSE BUILDER</div>
                                <div className="flex flex-col gap-2.5">
                                    <div className="flex justify-between items-center bg-[#F8FAFB] p-3 rounded-lg border border-[#E8ECF1]/60 hover:bg-[#F1F5F9] transition-colors duration-200">
                                        <div className="flex items-center gap-3">
                                            <div className="text-sm">📚</div>
                                            <span className="text-[11px] font-bold text-[#0A1128]">RERA Essentials · Module 1</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-green-500">Active</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-[#F8FAFB] p-3 rounded-lg border border-[#E8ECF1]/60 hover:bg-[#F1F5F9] transition-colors duration-200">
                                        <div className="flex items-center gap-3">
                                            <div className="text-sm">🎯</div>
                                            <span className="text-[11px] font-bold text-[#0A1128]">Objection Handling Mock</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-green-500">Active</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-[1.5rem] font-black text-[#0A1128] mb-2.5 leading-[1.1]">TURN EXPERTISE<br/>INTO LEARNING.</h3>
                                <p className="text-slate-500 text-[13px] font-medium mb-5 leading-relaxed">
                                    Create courses, quizzes and practical mock-based learning experiences.
                                </p>
                                <div className="text-[#0A1128] font-bold text-[13px] flex items-center gap-2 group-hover:gap-3.5 transition-all duration-400">
                                    Explore for Trainers <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#F8FAFB] rounded-2xl p-9 flex flex-col border border-[#E8ECF1] relative overflow-hidden group cursor-pointer opacity-85 hover:opacity-100 hover:-translate-y-1 transition-all duration-500 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                            <div className="flex justify-between items-start mb-7">
                                <div className="inline-block border border-gray-200 text-gray-400 text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full bg-white">
                                    For Real Estate Professionals
                                </div>
                                <div className="bg-[#FFF7ED] text-[#EA580C] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.1em] border border-[#FDBA74]/40">
                                    Coming Soon
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-[1.5rem] font-black text-gray-300 mb-2.5 leading-[1.1]">BUILD THE SKILLS<br/>THAT MATTER.</h3>
                                <p className="text-gray-400 text-[13px] font-medium mb-5 leading-relaxed">
                                    Learn, practise and benchmark your capabilities.
                                </p>
                                <div className="text-gray-300 font-bold text-[13px] flex items-center gap-2">
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

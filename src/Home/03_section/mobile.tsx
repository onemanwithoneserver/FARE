export default function Mobile() {
    return (
        <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#F7F8FA] py-14 px-5 flex flex-col font-['Inter',sans-serif]">

            <div className="w-full mb-10 flex flex-col items-start animate-fade-in-up">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-[1px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/30"></div>
                    <span className="text-[#D4AF37] font-bold text-[10px] tracking-[0.25em] uppercase">
                        Your Journey
                    </span>
                </div>
                <h2 className="text-[2.5rem] leading-[0.95] font-black tracking-[-0.02em] text-[#0A1128] uppercase">
                    What brings<br/>you to FARE?
                </h2>
            </div>

            <div className="w-full flex flex-col gap-5">

                <div className="bg-[#0A1128] rounded-2xl p-6 flex flex-col relative overflow-hidden border border-white/[0.04] shadow-[0_4px_16px_rgba(10,17,40,0.2),0_16px_48px_rgba(10,17,40,0.15)]">
                    <div className="inline-block border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-7 w-max bg-[#D4AF37]/[0.05]">
                        For Real Estate Companies
                    </div>

                    <div className="w-full bg-[#111B33] rounded-xl p-4 border border-white/[0.04] mb-7 shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
                        <div className="flex justify-between items-center mb-3.5">
                            <span className="text-[9px] font-bold text-slate-400 tracking-[0.15em]">TEAM CAPABILITY</span>
                        </div>
                        <div className="flex flex-col gap-3.5">
                            {[
                                { label: 'Sales Team A', val: 84 },
                                { label: 'Channel Partners', val: 67 }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-[10px] text-white mb-1.5 font-medium">
                                        <span>{stat.label}</span>
                                        <span>{stat.val}%</span>
                                    </div>
                                    <div className="w-full h-[3px] bg-[#1E293B] rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.4)]" style={{ width: `${stat.val}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto">
                        <h3 className="text-[1.5rem] font-black text-white mb-2.5 leading-[1.1]">BUILD A<br/>STRONGER TEAM.</h3>
                        <p className="text-slate-400 text-[12px] font-medium mb-5 leading-relaxed">
                            Train, develop and benchmark your people with a platform built specifically for real estate.
                        </p>
                        <div className="text-[#D4AF37] font-bold text-[12px] flex items-center gap-2">
                            Explore for Companies <span>→</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 flex flex-col border border-[#E8ECF1] shadow-[0_2px_8px_rgba(0,0,0,0.03),0_8px_32px_rgba(0,0,0,0.04)]">
                    <div className="inline-block border border-blue-200/60 text-blue-800 bg-blue-50/80 text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-5 w-max">
                        For Real Estate Trainers
                    </div>

                    <div className="mt-auto pt-4">
                        <h3 className="text-[1.25rem] font-black text-[#0A1128] mb-2 leading-[1.1]">TURN EXPERTISE<br/>INTO LEARNING.</h3>
                        <p className="text-slate-500 text-[12px] font-medium mb-5 leading-relaxed">
                            Create courses, quizzes and practical mock-based learning experiences.
                        </p>
                        <div className="text-[#0A1128] font-bold text-[12px] flex items-center gap-2">
                            Explore for Trainers <span>→</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F8FAFB] rounded-2xl p-6 flex flex-col border border-[#E8ECF1] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <div className="flex justify-between items-start mb-5">
                        <div className="inline-block border border-gray-200 text-gray-400 text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-white">
                            For Professionals
                        </div>
                        <div className="bg-[#FFF7ED] text-[#EA580C] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-[0.1em] border border-[#FDBA74]/40">
                            Soon
                        </div>
                    </div>

                    <div className="mt-auto">
                        <h3 className="text-[1.25rem] font-black text-gray-300 mb-2 leading-[1.1]">BUILD THE SKILLS<br/>THAT MATTER.</h3>
                        <p className="text-gray-400 text-[12px] font-medium mb-5 leading-relaxed">
                            Learn, practise and benchmark your capabilities.
                        </p>
                        <div className="text-gray-300 font-bold text-[12px] flex items-center gap-2">
                            Join the Waitlist <span>→</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

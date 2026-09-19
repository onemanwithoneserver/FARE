

export default function Mobile() {
    return (
        <section className="w-full bg-white min-h-[calc(100vh-60px)] py-16 px-6 flex flex-col font-sans">
            
            <div className="w-full mb-10 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-[1px] bg-[#D4AF37]"></div>
                    <span className="text-[#D4AF37] font-bold text-[10px] tracking-[0.2em] uppercase">
                        Your Journey
                    </span>
                </div>
                <h2 className="text-4xl leading-[1] font-black tracking-tight text-[#0A1128] uppercase">
                    What brings<br/>you to FARE?
                </h2>
            </div>

            <div className="w-full flex flex-col gap-6">
                
                <div className="bg-[#0A1128] rounded-2xl p-6 flex flex-col relative overflow-hidden shadow-xl border border-transparent">
                    <div className="inline-block border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-8 w-max bg-[#D4AF37]/5">
                        For Real Estate Companies
                    </div>

                    <div className="w-full bg-[#151f38] rounded-xl p-4 border border-white/5 mb-8 shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-bold text-slate-400 tracking-wider">TEAM CAPABILITY</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[
                                { label: 'Sales Team A', val: 84 },
                                { label: 'Channel Partners', val: 67 }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-[10px] text-white mb-1.5">
                                        <span>{stat.label}</span>
                                        <span>{stat.val}%</span>
                                    </div>
                                    <div className="w-full h-1 bg-[#1E293B] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#D4AF37] rounded-full" style={{ width: `${stat.val}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto">
                        <h3 className="text-2xl font-black text-white mb-3">BUILD A<br/>STRONGER TEAM.</h3>
                        <p className="text-slate-400 text-xs font-medium mb-6">
                            Train, develop and benchmark your people with a platform built specifically for real estate.
                        </p>
                        <div className="text-[#D4AF37] font-bold text-xs flex items-center gap-2">
                            Explore for Companies <span>→</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 flex flex-col border-2 border-gray-100 shadow-xl">
                    <div className="inline-block border border-blue-200 text-blue-900 bg-blue-50 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 w-max">
                        For Real Estate Trainers
                    </div>

                    <div className="mt-auto pt-6">
                        <h3 className="text-xl font-black text-[#0A1128] mb-2">TURN EXPERTISE<br/>INTO LEARNING.</h3>
                        <p className="text-slate-500 text-xs font-medium mb-6">
                            Create courses, quizzes and practical mock-based learning experiences.
                        </p>
                        <div className="text-[#0A1128] font-bold text-xs flex items-center gap-2">
                            Explore for Trainers <span>→</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#f8f9fa] rounded-2xl p-6 flex flex-col border border-gray-100">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-block border border-gray-300 text-gray-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white">
                            For Professionals
                        </div>
                        <div className="bg-[#fff7ed] text-[#ea580c] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-[#fdba74]/50">
                            Soon
                        </div>
                    </div>

                    <div className="mt-auto">
                        <h3 className="text-xl font-black text-gray-300 mb-2">BUILD THE SKILLS<br/>THAT MATTER.</h3>
                        <p className="text-gray-400 text-xs font-medium mb-6">
                            Learn, practise and benchmark your capabilities.
                        </p>
                        <div className="text-gray-300 font-bold text-xs flex items-center gap-2">
                            Join the Waitlist <span>→</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

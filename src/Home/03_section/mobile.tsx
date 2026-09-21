import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Building2, GraduationCap, UserCheck, CheckCircle, ShieldCheck } from 'lucide-react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';

const GOLD = '#C99A2E';

export default function Mobile() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activePersonaId, setActivePersonaId] = useState('companies');
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [waitlistJoined, setWaitlistJoined] = useState(false);

    const activePersona = data.personas.find(p => p.id === activePersonaId) || data.personas[0];

    const getIcon = (id: string, size: number = 20) => {
        if (id === 'companies') return <Building2 size={size} strokeWidth={2.2} />;
        if (id === 'trainers') return <GraduationCap size={size} strokeWidth={2.2} />;
        return <UserCheck size={size} strokeWidth={2.2} />;
    };

    const getPersonaColor = (id: string) => {
        if (id === 'companies') return '#34D399';
        if (id === 'trainers') return '#60A5FA';
        return '#C99A2E';
    };

    const handleJoinWaitlist = (e: React.FormEvent) => {
        e.preventDefault();
        if (!waitlistEmail.trim()) return;
        setWaitlistJoined(true);
    };

    const activeColor = getPersonaColor(activePersonaId);

    return (
        <section
            className="w-full py-14 px-4 flex flex-col items-center font-['Outfit'] relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #040C1E 0%, #071A49 50%, #040C1E 100%)' }}
        >
            <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#6B8AFF]/[0.08] to-transparent rounded-full blur-[80px] pointer-events-none"
            />

            <div className="w-full max-w-[460px] flex flex-col relative z-10">
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="mb-4">
                        <span
                            className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border"
                            style={{ color: GOLD, borderColor: `${GOLD}30`, background: `${GOLD}0A` }}
                        >
                            {data.eyebrow}
                        </span>
                    </div>

                    <h2 className={`font-black mb-3 text-white ${
                        language === 'te'
                            ? 'text-[1.45rem] leading-[1.25] tracking-wider py-0.5'
                            : 'text-[1.85rem] leading-[1.05] tracking-[-0.02em] uppercase'
                    }`}>
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </h2>
                    <p className="text-[13px] font-medium leading-relaxed text-white/60">
                        {data.headline.subtitle}
                    </p>
                </div>

                <div className="flex gap-2 w-full mb-8 overflow-x-auto pb-2 snap-x hide-scrollbar">
                    {data.personas.map((persona) => {
                        const isActive = activePersonaId === persona.id;
                        const color = getPersonaColor(persona.id);

                        return (
                            <button
                                key={persona.id}
                                onClick={() => setActivePersonaId(persona.id)}
                                className={`flex-shrink-0 snap-start px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 border ${
                                    isActive
                                        ? 'bg-white/10 border-white/20 text-white shadow-lg'
                                        : 'bg-white/[0.02] border-white/[0.05] text-white/50'
                                }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0 ${isActive ? 'scale-110' : ''}`}
                                    style={{ backgroundColor: color }}
                                >
                                    {getIcon(persona.id, 16)}
                                </div>
                                <span className={`font-bold text-[13px] whitespace-nowrap ${isActive ? 'text-white' : 'text-white/60'}`}>
                                    {persona.tag}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePersona.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full flex flex-col gap-4 text-left"
                    >
                        <div
                            className="p-6 rounded-xl bg-[#0A1630]/80 backdrop-blur-md border border-white/[0.08] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] relative overflow-hidden"
                        >
                            <div 
                                className="absolute top-0 left-0 right-0 h-[2px] opacity-70" 
                                style={{ background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)` }} 
                            />
                            <motion.div
                                animate={{ opacity: [0.1, 0.2, 0.1] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 w-[150px] h-[150px] rounded-bl-full blur-[60px] pointer-events-none"
                                style={{ background: activeColor }}
                            />

                            <div className="relative z-10 flex flex-col h-full">
                                <div
                                    className="inline-flex self-start items-center text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full mb-4 border"
                                    style={{
                                        color: activeColor,
                                        background: `${activeColor}15`,
                                        borderColor: `${activeColor}30`
                                    }}
                                >
                                    {activePersona.badge}
                                </div>

                                <h3 className="text-[24px] font-black text-white leading-[1.1] mb-3">
                                    {activePersona.titleLine1} <span style={{ color: activeColor }}>{activePersona.titleLine2}</span>
                                </h3>

                                <p className="text-[13px] font-medium leading-relaxed mb-6 text-white/60">
                                    {activePersona.desc}
                                </p>

                                <div className="flex flex-col gap-3 mb-8 bg-white/[0.02] p-4 rounded-lg border border-white/[0.05]">
                                    {activePersona.features.map((feat, i) => (
                                        <div key={i} className="flex items-start gap-3 text-[12px] text-white/80 font-medium">
                                            <div
                                                className="w-5 h-5 rounded-full text-white shadow-sm flex items-center justify-center shrink-0 mt-0.5"
                                                style={{ background: activeColor }}
                                            >
                                                <CheckCircle size={12} strokeWidth={2.5} />
                                            </div>
                                            <span className="leading-snug">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4">
                                    {activePersona.id === 'professionals' ? (
                                        waitlistJoined ? (
                                            <div className="p-3 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 flex items-center gap-2 text-[#34D399] text-[12px] font-bold">
                                                <ShieldCheck size={18} />
                                                <span>Registered for Priority Access!</span>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleJoinWaitlist} className="flex flex-col gap-3">
                                                <input
                                                    type="email"
                                                    required
                                                    value={waitlistEmail}
                                                    onChange={(e) => setWaitlistEmail(e.target.value)}
                                                    placeholder="Enter work email"
                                                    className="bg-[#040C1E] border border-white/[0.12] rounded-lg px-4 py-3 text-[13px] text-white outline-none placeholder-white/30 focus:border-[#C99A2E] transition-colors"
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-full py-3 rounded-lg font-bold text-[13px] text-[#040C1E] cursor-pointer shadow-lg"
                                                    style={{ background: `linear-gradient(90deg, ${GOLD}, #E2C068)` }}
                                                >
                                                    Join Now
                                                </button>
                                            </form>
                                        )
                                    ) : (
                                        <button
                                            className="w-full py-3 px-5 rounded-lg font-bold text-[13px] text-white flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]"
                                            style={{ background: activeColor }}
                                        >
                                            <span>{activePersona.cta}</span>
                                            <ArrowRight size={15} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

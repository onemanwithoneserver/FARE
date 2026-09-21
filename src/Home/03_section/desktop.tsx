import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    ArrowRight, Building2, GraduationCap, UserCheck, CheckCircle,
    ShieldCheck
} from 'lucide-react';
import { getData } from './data';
import { useLanguage } from '../../context/LanguageContext';

const GOLD = '#C99A2E';

export default function Desktop() {
    const { language } = useLanguage();
    const data = getData(language);
    const [activePersonaId, setActivePersonaId] = useState('companies');
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [waitlistJoined, setWaitlistJoined] = useState(false);

    const activePersona = data.personas.find(p => p.id === activePersonaId) || data.personas[0];

    const getIcon = (id: string, size: number = 24) => {
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
            className="w-full py-16 relative font-['Outfit'] overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #040C1E 0%, #071A49 50%, #040C1E 100%)' }}
        >
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.08, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-[20%] w-[700px] h-[700px] bg-gradient-radial from-[#6B8AFF]/[0.08] to-transparent rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[120px] pointer-events-none"
            />

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-[1320px] mx-auto px-12 relative z-10">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="mb-5">
                        <span
                            className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border"
                            style={{ color: GOLD, borderColor: `${GOLD}30`, background: `${GOLD}0A` }}
                        >
                            {data.eyebrow}
                        </span>
                    </div>

                    <h2
                        className={`font-black mb-4 text-white ${
                            language === 'te'
                                ? 'text-[2.25rem] xl:text-[2.65rem] leading-[1.25] tracking-wider py-1'
                                : 'text-[3.25rem] leading-[1.05] tracking-[-0.02em] uppercase'
                        }`}
                    >
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span>
                    </h2>

                    <p className="text-[16px] font-medium leading-[1.65] max-w-[700px] text-white/60">
                        {data.headline.subtitle}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Side: Tab Controls */}
                    <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-3">
                        {data.personas.map((persona) => {
                            const isActive = activePersonaId === persona.id;
                            const color = getPersonaColor(persona.id);

                            return (
                                <button
                                    key={persona.id}
                                    onClick={() => setActivePersonaId(persona.id)}
                                    className={`group flex items-start gap-4 p-5 rounded-lg text-left transition-all duration-400 border relative overflow-hidden ${
                                        isActive
                                            ? 'bg-white/10 border-white/20 text-white shadow-[0_0_30px_rgba(255,255,255,0.05)] scale-[1.02]'
                                            : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activeTabIndicator"
                                            className="absolute inset-0 opacity-20 pointer-events-none"
                                            style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                                        />
                                    )}
                                    <div
                                        className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shrink-0 shadow-md transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                                        style={{ backgroundColor: color }}
                                    >
                                        {getIcon(persona.id, 24)}
                                    </div>
                                    <div className="flex flex-col relative z-10 pt-1">
                                        <span className={`font-bold text-[18px] leading-tight mb-1 ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                                            {persona.tag}
                                        </span>
                                        <span className={`text-[13px] font-medium leading-snug ${isActive ? 'text-white/80' : 'text-white/50 group-hover:text-white/70'}`}>
                                            {persona.subTag}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Side: Content Area */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePersona.id}
                            initial={{ opacity: 0, x: 20, scale: 0.98 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -20, scale: 0.98 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="flex-1 bg-[#0A1630]/60 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] relative flex flex-col"
                        >
                            <div 
                                className="absolute top-0 left-1/4 w-1/2 h-[2px] opacity-70 transition-colors duration-500" 
                                style={{ background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)` }} 
                            />
                            <div 
                                className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10 blur-[80px] pointer-events-none transition-colors duration-500 rounded-bl-full" 
                                style={{ background: activeColor }} 
                            />

                            <div className="p-10 lg:p-12 flex flex-col flex-1 relative z-10">
                                <div className="mb-8">
                                    <div
                                        className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-6 border"
                                        style={{
                                            color: activeColor,
                                            background: `${activeColor}15`,
                                            borderColor: `${activeColor}30`
                                        }}
                                    >
                                        <span>{activePersona.badge}</span>
                                    </div>

                                    <h3 className="text-[36px] font-black text-white leading-[1.1] mb-4 tracking-tight">
                                        {activePersona.titleLine1} <span style={{ color: activeColor }}>{activePersona.titleLine2}</span>
                                    </h3>

                                    <p className="text-[16px] font-medium leading-relaxed text-white/70 max-w-[600px]">
                                        {activePersona.desc}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-4 mb-10">
                                    {activePersona.features.map((feat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * i }}
                                            className="flex items-start gap-4 text-[15px] text-white/80 font-medium bg-white/[0.02] p-4 rounded-lg border border-white/[0.05]"
                                        >
                                            <div
                                                className="w-6 h-6 rounded-full text-white shadow-sm flex items-center justify-center shrink-0 mt-0.5"
                                                style={{ background: activeColor }}
                                            >
                                                <CheckCircle size={14} strokeWidth={2.5} />
                                            </div>
                                            <span className="leading-snug">{feat}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-8 border-t border-white/[0.06] flex items-center justify-between gap-4">
                                    {activePersona.id === 'professionals' ? (
                                        waitlistJoined ? (
                                            <div className="p-4 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 flex items-center gap-3 text-[#34D399] text-[15px] font-bold">
                                                <ShieldCheck size={20} />
                                                <span>Registered for Priority Access!</span>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleJoinWaitlist} className="flex gap-3 w-full max-w-[400px]">
                                                <input
                                                    type="email"
                                                    required
                                                    value={waitlistEmail}
                                                    onChange={(e) => setWaitlistEmail(e.target.value)}
                                                    placeholder="Enter work email"
                                                    className="flex-1 bg-[#040C1E] border border-white/[0.12] rounded-lg px-4 py-3 text-[14px] text-white outline-none focus:border-[#C99A2E] placeholder-white/30 transition-colors"
                                                />
                                                <button
                                                    type="submit"
                                                    className="px-6 py-3 rounded-lg font-bold text-[14px] text-[#040C1E] transition-all cursor-pointer whitespace-nowrap hover:opacity-90 shadow-lg"
                                                    style={{ background: `linear-gradient(90deg, ${GOLD}, #E2C068)` }}
                                                >
                                                    Join Now
                                                </button>
                                            </form>
                                        )
                                    ) : (
                                        <button
                                            className="text-white text-[15px] font-bold px-8 py-4 rounded-lg shadow-lg flex items-center gap-2 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-xl"
                                            style={{ background: activeColor }}
                                        >
                                            <span>{activePersona.cta}</span>
                                            <ArrowRight size={18} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

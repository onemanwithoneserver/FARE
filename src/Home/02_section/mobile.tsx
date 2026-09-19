import { useState } from 'react';
import { data } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { 
    BookOpen, Target, BarChart2, CheckCircle, ArrowRight, Menu, Lock, 
    ChevronLeft, ChevronRight, Award, RotateCcw, Eye, Sparkles, Flame, Check, RefreshCw 
} from 'lucide-react';

const NAVY = '#0B1D3A';
const NAVY_DEEP = '#071A49';
const MUTED_BLUE = '#7B8DAA';

export default function Mobile() {
    const [activeTab, setActiveTab] = useState('01');

    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showReview, setShowReview] = useState(false);

    const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
    const [selectedMockOption, setSelectedMockOption] = useState<string | null>(null);

    const [skillValues, setSkillValues] = useState<Record<string, number>>({
        comm: 88,
        market: 82,
        nego: 78,
        lead: 94
    });

    const [activeHabitId, setActiveHabitId] = useState('h1');
    const [habitsData, setHabitsData] = useState(data.browser.content['04'].habits);

    const quizQuestions = data.browser.content['01'].questions;
    const totalQuestions = quizQuestions.length;
    const answeredCount = Object.keys(userAnswers).length;

    const calculateScore = () => {
        return quizQuestions.reduce((acc, q, idx) => {
            return acc + (userAnswers[idx] === q.correctIndex ? 1 : 0);
        }, 0);
    };

    const score = calculateScore();
    const accuracy = Math.round((score / totalQuestions) * 100);

    const handleSelectOption = (optionIndex: number) => {
        if (isSubmitted && !showReview) return;
        setUserAnswers(prev => ({
            ...prev,
            [currentQIndex]: optionIndex
        }));
    };

    const handleRestartQuiz = () => {
        setUserAnswers({});
        setCurrentQIndex(0);
        setIsSubmitted(false);
        setShowReview(false);
    };

    const currentQuestion = quizQuestions[currentQIndex];
    const currentScenario = data.browser.content['02'].scenarios[activeScenarioIdx];
    const selectedResponseData = currentScenario.options.find(o => o.id === selectedMockOption);

    const handleSkillChange = (id: string, val: number) => {
        setSkillValues(prev => ({ ...prev, [id]: val }));
    };

    const overallUserSkill = Math.round(Object.values(skillValues).reduce((a, b) => a + b, 0) / Object.values(skillValues).length);
    const computedPercentile = Math.min(99, Math.max(50, Math.round(overallUserSkill * 0.95 + 4)));

    const activeHabit = habitsData.find(h => h.id === activeHabitId) || habitsData[0];

    const toggleDayCompletion = (dayNumber: number) => {
        setHabitsData(prev => prev.map(h => {
            if (h.id !== activeHabitId) return h;
            const exists = h.completedDays.includes(dayNumber);
            const newDays = exists 
                ? h.completedDays.filter(d => d !== dayNumber)
                : [...h.completedDays, dayNumber].sort((a, b) => a - b);
            return { ...h, completedDays: newDays };
        }));
    };

    return (
        <section
            className="w-full flex flex-col items-center justify-center py-16 px-4 font-['Outfit'] relative overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
        >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[100px] pointer-events-none"></div>

            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                 style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
            </div>

            <div className="w-full max-w-[460px] flex flex-col z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 flex flex-col items-center"
                >
                    <h2 className="text-[2rem] font-black tracking-[-0.02em] uppercase leading-[1.05] text-white">
                        {data.headline.line1} <span className="gold-gradient-text">{data.headline.line2}</span> {data.headline.line3} {data.headline.line4}
                    </h2>
                    <p className="mt-3 font-medium text-[12.5px] leading-relaxed mx-auto max-w-[320px]" style={{ color: MUTED_BLUE }}>
                        {data.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-2 w-full mb-6 relative z-20"
                >
                    {data.tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full text-left p-3.5 rounded-[4px] transition-all duration-300 flex flex-col gap-1.5 relative overflow-hidden group cursor-pointer ${
                                    isActive
                                    ? 'bg-white/[0.05] border border-white/[0.12] shadow-lg scale-[1.01]'
                                    : 'bg-transparent border border-transparent hover:bg-white/[0.02]'
                                }`}
                            >
                                {isActive && (
                                    <motion.div 
                                        layoutId="activeTabIndicatorMobile" 
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C99A2E] via-[#D5AA45] to-[#E2C068]"
                                    />
                                )}
                                <div className="flex items-center gap-3 relative z-10 w-full justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <span className={`text-xs font-black transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/30'}`}>
                                            {tab.id}
                                        </span>
                                        <span className={`font-bold text-[11.5px] tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60'}`}>
                                            {tab.title}
                                        </span>
                                    </div>
                                    {isActive && <ArrowRight size={12} className="text-[#D5AA45] opacity-80 animate-pulse" />}
                                </div>
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden relative z-10 pl-6"
                                        >
                                            <p className="text-[11px] leading-relaxed mt-1" style={{ color: MUTED_BLUE }}>
                                                {tab.desc}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#D5AA45]/20 rounded-full blur-[40px] pointer-events-none"></div>

                    <div className="rounded-[4px] overflow-hidden safari-shadow border border-white/[0.12] flex flex-col bg-[#0D2654] text-left relative luxury-shadow-dark z-10">
                        <div className="h-10 glass-safari-dark flex items-center px-4 relative border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                            <div className="flex items-center gap-[6px]">
                                <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></div>
                                <div className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E] border border-[#D89E24]/50"></div>
                                <div className="w-[10px] h-[10px] rounded-full bg-[#27C840] border border-[#1AAB29]/50"></div>
                            </div>
                            <div className="flex-1 flex justify-center mx-3">
                                <div className="bg-[#1C1C1E]/80 backdrop-blur-md px-3 py-1 rounded-[4px] flex items-center justify-center gap-1.5 border border-white/[0.05]">
                                    <Lock size={10} className="text-[#34D399]" />
                                    <div className="text-[9px] text-white/70 font-medium tracking-wide">
                                        {data.browser.url}
                                    </div>
                                </div>
                            </div>
                            <Menu size={14} className="text-white/40" />
                        </div>

                        <div className="flex-1 p-4 relative min-h-[440px] flex items-center justify-center overflow-hidden" style={{ background: 'radial-gradient(circle at top right, #112D60, #0D2654)' }}>
                            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                            
                            <AnimatePresence mode="wait">
                                {activeTab === '01' && (
                                    <motion.div
                                        key="01"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col w-full relative z-10"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#6B8AFF] to-[#3B63E1] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(107,138,255,0.3)]">
                                                    <BookOpen size={17} strokeWidth={2.5} />
                                                </div>
                                                <div>
                                                    <div className="text-[#6B8AFF] text-[8px] font-black tracking-[0.15em] mb-0.5">{data.browser.content['01'].tag}</div>
                                                    <div className="text-[13px] font-bold text-white leading-tight">{data.browser.content['01'].title}</div>
                                                </div>
                                            </div>
                                            {!isSubmitted ? (
                                                <span className="bg-[#D5AA45]/15 px-2 py-0.5 rounded-[4px] text-[10px] font-bold text-[#F3D887] border border-[#D5AA45]/35">
                                                    {answeredCount}/{totalQuestions}
                                                </span>
                                            ) : (
                                                <button
                                                    onClick={handleRestartQuiz}
                                                    className="p-1.5 rounded-[4px] bg-white/[0.05] text-white/70 hover:text-white"
                                                >
                                                    <RotateCcw size={13} />
                                                </button>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-6 gap-1 mb-3.5 p-1 rounded-[4px] bg-white/[0.02] border border-white/[0.05]">
                                            {quizQuestions.map((_, i) => {
                                                const isAnswered = userAnswers[i] !== undefined;
                                                const isCurrent = currentQIndex === i;
                                                let pillBg = 'bg-white/[0.04] text-white/70 border-white/[0.08]';

                                                if (isSubmitted) {
                                                    const isCorrect = userAnswers[i] === quizQuestions[i].correctIndex;
                                                    pillBg = isCorrect 
                                                        ? 'bg-[#10B981]/25 text-[#10B981] border-[#10B981]/50 font-black' 
                                                        : 'bg-[#EF4444]/25 text-[#EF4444] border-[#EF4444]/50 font-black';
                                                } else if (isCurrent) {
                                                    pillBg = 'bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#E4C46A] text-[#071A49] font-black border-[#E4C46A] shadow-[0_1px_8px_rgba(213,170,69,0.45)]';
                                                } else if (isAnswered) {
                                                    pillBg = 'bg-[#D5AA45]/15 text-[#F3D887] border-[#D5AA45]/40 font-bold';
                                                }

                                                return (
                                                    <button
                                                        key={i}
                                                        onClick={() => setCurrentQIndex(i)}
                                                        className={`h-6 rounded-[3px] text-[10px] border transition-all flex items-center justify-center cursor-pointer ${pillBg}`}
                                                    >
                                                        {i + 1}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {isSubmitted && !showReview ? (
                                            <div className="bg-white/[0.02] backdrop-blur-md p-5 rounded-[4px] border border-white/[0.1] shadow-lg flex flex-col items-center text-center">
                                                <div className="w-12 h-12 rounded-full bg-[#C99A2E]/20 border border-[#D5AA45]/40 flex items-center justify-center text-[#D5AA45] mb-3">
                                                    <Award size={24} />
                                                </div>
                                                <div className="text-[9px] font-black tracking-widest text-[#D5AA45] uppercase mb-0.5">Assessment Completed</div>
                                                <div className="text-[22px] font-black text-white tracking-tight mb-1">
                                                    {score} / {totalQuestions} <span className="text-[14px] font-bold text-white/50">({accuracy}%)</span>
                                                </div>
                                                <div className="text-[10.5px] font-medium text-[#F3D887] bg-[#D5AA45]/15 border border-[#D5AA45]/30 px-3 py-1 rounded-full mb-4">
                                                    {accuracy >= 80 ? 'Master Real Estate Strategist' : accuracy >= 50 ? 'Certified Practitioner' : 'Developing Associate'}
                                                </div>
                                                <div className="grid grid-cols-3 gap-2 w-full mb-4 text-center">
                                                    <div className="bg-white/[0.03] p-2.5 rounded-[4px] border border-white/[0.05]">
                                                        <div className="text-[14px] font-black text-[#10B981]">{score}</div>
                                                        <div className="text-[9px] text-white/50">Correct</div>
                                                    </div>
                                                    <div className="bg-white/[0.03] p-2.5 rounded-[4px] border border-white/[0.05]">
                                                        <div className="text-[14px] font-black text-[#EF4444]">{totalQuestions - score}</div>
                                                        <div className="text-[9px] text-white/50">Wrong</div>
                                                    </div>
                                                    <div className="bg-white/[0.03] p-2.5 rounded-[4px] border border-white/[0.05]">
                                                        <div className="text-[14px] font-black text-[#6B8AFF]">{answeredCount}</div>
                                                        <div className="text-[9px] text-white/50">Answered</div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full mt-1">
                                                    <button
                                                        onClick={() => setShowReview(true)}
                                                        className="w-full sm:w-auto px-4 py-2.5 rounded-[4px] bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#E4C46A] hover:brightness-110 text-[#071A49] font-bold text-[11.5px] transition-all flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(201,154,46,0.25)] cursor-pointer active:scale-[0.98]"
                                                    >
                                                        <Eye size={13} />
                                                        <span>Review Answers & Explanations</span>
                                                    </button>
                                                    <button
                                                        onClick={handleRestartQuiz}
                                                        className="w-full sm:w-auto px-3.5 py-2 rounded-[4px] bg-white/[0.06] hover:bg-white/[0.12] text-white/90 hover:text-white font-semibold text-[11px] border border-white/15 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
                                                    >
                                                        <RotateCcw size={12} />
                                                        <span>Retake Quiz</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col">
                                                <div className="w-full h-[4px] bg-white/[0.06] rounded-full mb-3.5 border border-white/[0.08] overflow-hidden">
                                                    <motion.div 
                                                        initial={false}
                                                        animate={{ width: `${((currentQIndex + 1) / totalQuestions) * 100}%` }} 
                                                        transition={{ duration: 0.3 }}
                                                        className="h-full bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#E4C46A] rounded-full shadow-[0_0_8px_rgba(213,170,69,0.5)]" 
                                                    />
                                                </div>

                                                <div className="bg-white/[0.02] backdrop-blur-sm p-4 rounded-[4px] mb-3.5 border border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                                                    <div className="flex items-center justify-between mb-1.5">
                                                        <span className="text-[9px] font-black text-[#D5AA45] tracking-wider uppercase">Q {currentQIndex + 1} of {totalQuestions}</span>
                                                        {isSubmitted && (
                                                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-[3px] ${userAnswers[currentQIndex] === currentQuestion.correctIndex ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#EF4444]/20 text-[#EF4444]'}`}>
                                                                {userAnswers[currentQIndex] === currentQuestion.correctIndex ? 'Correct' : 'Incorrect'}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-[12px] font-medium leading-[1.5] text-white/90">{currentQuestion.question}</p>
                                                </div>

                                                <div className="flex flex-col gap-2 mb-3.5">
                                                    {currentQuestion.options.map((opt, i) => {
                                                        const isSelected = userAnswers[currentQIndex] === i;
                                                        const isCorrect = i === currentQuestion.correctIndex;
                                                        const letter = String.fromCharCode(65 + i);

                                                        let btnStyle = 'bg-white/[0.03] border-white/[0.06] text-white/80';

                                                        if (isSubmitted) {
                                                            if (isCorrect) {
                                                                btnStyle = 'bg-[#10B981]/25 border-[#10B981]/60 text-white';
                                                            } else if (isSelected && !isCorrect) {
                                                                btnStyle = 'bg-[#EF4444]/25 border-[#EF4444]/60 text-white';
                                                            } else {
                                                                btnStyle = 'bg-white/[0.02] border-white/[0.04] text-white/40';
                                                            }
                                                        } else if (isSelected) {
                                                            btnStyle = 'bg-[#D5AA45]/20 border-[#D5AA45] text-white';
                                                        }

                                                        return (
                                                            <button 
                                                                key={i} 
                                                                onClick={() => handleSelectOption(i)}
                                                                className={`border p-2.5 rounded-[4px] text-left text-[11px] font-medium flex items-start gap-2 transition-all cursor-pointer ${btnStyle}`}
                                                            >
                                                                <span className={`w-4 h-4 rounded-[3px] flex items-center justify-center text-[9px] font-black shrink-0 ${isSelected ? 'bg-[#D5AA45] text-[#071A49]' : 'bg-white/10 text-white/60'}`}>
                                                                    {letter}
                                                                </span>
                                                                <span className="leading-tight">{opt}</span>
                                                            </button>
                                                        );
                                                    })}
                                                </div>

                                                {isSubmitted && currentQuestion.explanation && (
                                                    <div className="bg-[#D5AA45]/10 border border-[#D5AA45]/30 p-3 rounded-[4px] mb-3 text-[10.5px] leading-relaxed text-white/90">
                                                        <span className="font-bold text-[#F3D887] mr-1">Explanation:</span>
                                                        {currentQuestion.explanation}
                                                    </div>
                                                )}

                                                <div className="flex items-center justify-between pt-1">
                                                    <button
                                                        onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                                                        disabled={currentQIndex === 0}
                                                        className={`flex items-center gap-1 px-3 py-1.5 rounded-[4px] text-[11px] font-semibold border ${
                                                            currentQIndex === 0
                                                            ? 'opacity-30 border-transparent text-white/30'
                                                            : 'border-white/10 text-white/80'
                                                        }`}
                                                    >
                                                        <ChevronLeft size={12} />
                                                        <span>Prev</span>
                                                    </button>

                                                    {currentQIndex < totalQuestions - 1 ? (
                                                        <button
                                                            onClick={() => setCurrentQIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
                                                            className="flex items-center gap-1 px-4 py-1.5 rounded-[4px] text-[11px] font-bold bg-gradient-to-r from-[#C99A2E] to-[#D5AA45] text-[#071A49] shadow-sm"
                                                        >
                                                            <span>Next</span>
                                                            <ChevronRight size={12} />
                                                        </button>
                                                    ) : !isSubmitted ? (
                                                        <button
                                                            onClick={() => setIsSubmitted(true)}
                                                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-[4px] text-[11px] font-black bg-gradient-to-r from-[#C99A2E] via-[#D5AA45] to-[#E2C068] text-[#071A49] shadow-md uppercase tracking-wider"
                                                        >
                                                            <span>Submit</span>
                                                            <ArrowRight size={12} strokeWidth={3} />
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => setShowReview(false)}
                                                            className="px-3 py-1.5 rounded-[4px] text-[11px] font-bold bg-gradient-to-r from-[#C99A2E] to-[#D5AA45] text-[#071A49]"
                                                        >
                                                            Scorecard
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                )}

                                {activeTab === '02' && (
                                    <motion.div
                                        key="02"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col w-full relative z-10"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#34D399] to-[#059669] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(52,211,153,0.3)]">
                                                    <Target size={17} strokeWidth={2.5} />
                                                </div>
                                                <div>
                                                    <div className="text-[#34D399] text-[8px] font-black tracking-[0.15em] mb-0.5">{data.browser.content['02'].tag}</div>
                                                    <div className="text-[13px] font-bold text-white leading-tight">{data.browser.content['02'].title}</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-1">
                                                {data.browser.content['02'].scenarios.map((sc, i) => (
                                                    <button
                                                        key={sc.id}
                                                        onClick={() => {
                                                            setActiveScenarioIdx(i);
                                                            setSelectedMockOption(null);
                                                        }}
                                                        className={`px-2 py-0.5 rounded-[3px] text-[9.5px] font-bold border ${
                                                            activeScenarioIdx === i 
                                                            ? 'bg-[#34D399]/20 text-[#34D399] border-[#34D399]/40' 
                                                            : 'bg-white/[0.04] text-white/50 border-white/[0.08]'
                                                        }`}
                                                    >
                                                        S{i + 1}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-[#0A1630] p-3.5 rounded-[4px] border border-[#34D399]/25 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] mb-3">
                                            <div className="text-[#34D399] text-[8.5px] font-black tracking-wider uppercase mb-1">OBJECTION: {currentScenario.title}</div>
                                            <p className="text-[11.5px] text-white/90 leading-relaxed font-medium italic">{currentScenario.buyerPrompt}</p>
                                        </div>

                                        <div className="flex flex-col gap-2 mb-3">
                                            {currentScenario.options.map((opt) => {
                                                const isSelected = selectedMockOption === opt.id;
                                                return (
                                                    <button
                                                        key={opt.id}
                                                        onClick={() => setSelectedMockOption(opt.id)}
                                                        className={`p-2.5 rounded-[4px] border text-left transition-all ${
                                                            isSelected
                                                            ? 'bg-[#34D399]/15 border-[#34D399]'
                                                            : 'bg-white/[0.03] border-white/[0.06]'
                                                        }`}
                                                    >
                                                        <div className="flex justify-between items-center mb-0.5">
                                                            <span className="text-[10.5px] font-bold text-[#34D399]">{opt.label}</span>
                                                            {isSelected && (
                                                                <span className="text-[9.5px] font-black text-white bg-[#34D399]/30 px-1.5 py-0.5 rounded-[2px]">
                                                                    {opt.score}/100
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-[10.5px] text-white/80 leading-snug">{opt.text}</p>
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {selectedResponseData && (
                                            <div className="bg-[#0D2654] border border-[#34D399]/30 p-3 rounded-[4px]">
                                                <div className="flex items-center gap-1.5 text-[#34D399] text-[10px] font-bold mb-1">
                                                    <Sparkles size={12} />
                                                    <span>Feedback:</span>
                                                </div>
                                                <p className="text-[10.5px] text-white/90 leading-snug">{selectedResponseData.feedback}</p>
                                            </div>
                                        )}
                                    </motion.div>
                                )}

                                {activeTab === '03' && (
                                    <motion.div
                                        key="03"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col w-full relative z-10"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(167,139,250,0.3)]">
                                                    <BarChart2 size={17} strokeWidth={2.5} />
                                                </div>
                                                <div>
                                                    <div className="text-[#A78BFA] text-[8px] font-black tracking-[0.15em] mb-0.5">{data.browser.content['03'].tag}</div>
                                                    <div className="text-[13px] font-bold text-white leading-tight">{data.browser.content['03'].title}</div>
                                                </div>
                                            </div>
                                            <div className="bg-[#A78BFA]/15 border border-[#A78BFA]/30 px-2.5 py-1 rounded-[4px] text-[10px] font-black text-[#A78BFA]">
                                                {computedPercentile}th %ile
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3.5 bg-white/[0.02] backdrop-blur-sm p-4 rounded-[4px] border border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.15)] mb-3">
                                            {data.browser.content['03'].skills.map((skill) => {
                                                const currentVal = skillValues[skill.id] || skill.val;
                                                return (
                                                    <div key={skill.id} className="w-full">
                                                        <div className="flex justify-between items-center mb-1">
                                                            <span className="text-[11px] font-bold text-white/90">{skill.label}</span>
                                                            <div className="flex gap-2">
                                                                <span className="text-[9px] text-white/40">P: {skill.peer}%</span>
                                                                <span className="text-[9.5px] font-black text-[#A78BFA]">You: {currentVal}%</span>
                                                            </div>
                                                        </div>
                                                        <input
                                                            type="range"
                                                            min="30"
                                                            max="100"
                                                            value={currentVal}
                                                            onChange={(e) => handleSkillChange(skill.id, parseInt(e.target.value))}
                                                            className="w-full accent-[#A78BFA] h-1.5 bg-[#0A1630] rounded appearance-none"
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="flex items-center justify-between text-[10.5px] text-white/70 bg-white/[0.03] p-2.5 rounded-[4px] border border-white/[0.05]">
                                            <span>Average: <strong className="text-white">{overallUserSkill}%</strong></span>
                                            <button
                                                onClick={() => setSkillValues({ comm: 88, market: 82, nego: 78, lead: 94 })}
                                                className="flex items-center gap-1 text-[#A78BFA] font-bold"
                                            >
                                                <RefreshCw size={10} />
                                                <span>Reset</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === '04' && (
                                    <motion.div
                                        key="04"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col w-full relative z-10"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-9 h-9 rounded-[4px] flex items-center justify-center shadow-[0_0_10px_rgba(213,170,69,0.25)] border border-[#D5AA45]/30" style={{ background: 'rgba(213,170,69,0.15)', color: '#D5AA45' }}>
                                                    <CheckCircle size={17} strokeWidth={2.5} />
                                                </div>
                                                <div>
                                                    <div className="text-[8px] font-black tracking-[0.15em] mb-0.5" style={{ color: '#D5AA45' }}>{data.browser.content['04'].tag}</div>
                                                    <div className="text-[13px] font-bold text-white leading-tight">{data.browser.content['04'].title}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-[4px] border border-[#D5AA45]/30 bg-[#D5AA45]/10 text-[10px] font-black" style={{ color: '#D5AA45' }}>
                                                <Flame size={12} />
                                                <span>{activeHabit.completedDays.length}/30 D</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-1.5 mb-3 overflow-x-auto pb-1">
                                            {habitsData.map((h) => {
                                                const isSelected = h.id === activeHabitId;
                                                return (
                                                    <button
                                                        key={h.id}
                                                        onClick={() => setActiveHabitId(h.id)}
                                                        className={`px-2.5 py-1 rounded-[4px] text-[10px] font-bold border whitespace-nowrap ${
                                                            isSelected
                                                            ? 'bg-[#D5AA45]/20 text-[#F3D887] border-[#D5AA45]/60'
                                                            : 'bg-white/[0.03] text-white/50 border-white/[0.06]'
                                                        }`}
                                                    >
                                                        {h.label.split(' ')[0]}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        <div className="bg-white/[0.02] p-3.5 rounded-[4px] border border-white/[0.08] mb-3">
                                            <div className="flex justify-between items-center mb-2.5">
                                                <div className="text-[11.5px] font-bold text-white leading-tight">{activeHabit.label}</div>
                                                <span className="text-[9.5px] text-[#D5AA45] font-semibold">{Math.round((activeHabit.completedDays.length / 30) * 100)}%</span>
                                            </div>

                                            <div className="grid grid-cols-6 gap-1.5">
                                                {Array.from({ length: 30 }, (_, i) => i + 1).map((dayNum) => {
                                                    const isDone = activeHabit.completedDays.includes(dayNum);
                                                    return (
                                                        <button
                                                            key={dayNum}
                                                            onClick={() => toggleDayCompletion(dayNum)}
                                                            className={`h-8 rounded-[4px] border flex flex-col items-center justify-center transition-all ${
                                                                isDone
                                                                ? 'bg-[#D5AA45] border-[#D5AA45] text-[#071A49] shadow-sm'
                                                                : 'bg-white/[0.03] border-white/[0.06] text-white/40'
                                                            }`}
                                                        >
                                                            <span className="text-[8px] font-bold leading-none">D{dayNum}</span>
                                                            {isDone && <Check size={8} strokeWidth={3} className="text-[#071A49]" />}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

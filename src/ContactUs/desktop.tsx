import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import { 
  Clock, 
  MapPin, 
  Building2, 
  Mail, 
  Sparkles, 
  GraduationCap, 
  TrendingUp, 
  Megaphone, 
  Briefcase, 
  CheckCircle2,
  ShieldCheck,
  Copy,
  Check,
  User,
  MessageSquare,
  Send
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getData } from './data';
import contactHero from '../assets/contact_us_hero.jpg';

const NAVY = '#0B1D3A';
const GOLD = '#C99A2E';

type ReasonId = 'platform' | 'growth' | 'business' | 'careers';

const reasonIcons: Record<ReasonId, typeof GraduationCap> = {
  platform: GraduationCap,
  growth: TrendingUp,
  business: Megaphone,
  careers: Briefcase
};

export default function ContactUsDesktop() {
  const { language } = useLanguage();
  const fullData = getData(language);
  const heroData = fullData.hero;
  const formData = fullData.form;
  const sidebarData = fullData.sidebar;

  const [selectedReason, setSelectedReason] = useState<ReasonId>('careers');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const currentReasonData = formData.reasons.find(r => r.id === selectedReason) || formData.reasons[0];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(sidebarData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleAddTag = (tag: string) => {
    setMessage(prev => {
      if (prev.includes(tag)) return prev;
      return prev ? `${prev} | ${tag}` : tag;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setReferenceId(`FARE-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 700);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
  };

  return (
    <div className="w-full flex flex-col font-['Outfit']">
      <section
        className="w-full -mt-8 lg:-mt-8 flex items-center justify-center overflow-x-clip relative"
        style={{ background: `linear-gradient(165deg, #FFFFFF 0%, #F6F9FF 35%, #EDF2FF 60%, #F0F4FF 100%)` }}
      >
        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] right-[15%] w-[700px] h-[700px] bg-gradient-radial from-[#C5D9FF]/40 to-transparent rounded-full blur-[140px] pointer-events-none z-0"></motion.div>
        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[120px] pointer-events-none z-0"></motion.div>
        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[60%] right-[5%] w-[300px] h-[300px] bg-gradient-radial from-[#818CF8]/[0.06] to-transparent rounded-full blur-[80px] pointer-events-none z-0"></motion.div>

        <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
            style={{
                backgroundImage: `linear-gradient(${NAVY} 1px, transparent 1px), linear-gradient(90deg, ${NAVY} 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }}
        />

        <div className="max-w-[1320px] w-full px-8 lg:px-14 py-10 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 xl:gap-20 items-center">
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="lg:col-span-8 flex flex-col items-start text-left w-full relative z-40"
            >
              <motion.div variants={item} className="flex items-center gap-3 mb-3">
                <div className="w-10 h-[1.5px]" style={{ background: `linear-gradient(90deg, ${GOLD}, #E2C068)` }}></div>
                <span className="font-semibold text-[10.5px] tracking-[0.22em] uppercase" style={{ color: GOLD }}>
                  {heroData.tagline}
                </span>
              </motion.div>

              <h1 className={`font-black mb-3 flex flex-col gap-1 md:gap-1.5 ${
                language === 'te'
                  ? 'text-[2.4rem] xl:text-[3rem] leading-[1.15] tracking-wider'
                  : 'text-[2.85rem] xl:text-[3.6rem] leading-[1.05] tracking-[-0.03em]'
              }`}>
                {language === 'te' ? (
                  <>
                    <motion.span variants={item} className={`block ${language === 'te' ? 'py-1' : ''}`} style={{ color: NAVY }}>సంప్రదింపులు & సలహాల కోసం</motion.span>
                    <motion.span variants={item} className={`inline-block text-[#C99A2E] gold-underline ${language === 'te' ? 'py-1' : ''}`}>
                      FARE
                    </motion.span>
                  </>
                ) : (
                  <>
                    <motion.span variants={item} className="inline-flex items-center self-start gap-2 px-4 py-1.5 rounded-full border border-[#C99A2E]/25 bg-gradient-to-r from-[#C99A2E]/[0.06] to-[#C99A2E]/[0.02] backdrop-blur-sm shadow-sm mb-2">
                        <Sparkles size={12} className="text-[#C99A2E]" strokeWidth={2.5} />
                        <span className="font-bold text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-[#C99A2E] leading-none pt-0.5">FARE FOR</span>
                    </motion.span>
                    <motion.span variants={item} className="block uppercase" style={{ color: NAVY }}>CONTACT &</motion.span>
                    <motion.span variants={item} className="inline-block text-[#C99A2E] gold-underline uppercase">
                      ADVISORY
                    </motion.span>
                  </>
                )}
              </h1>

              <motion.div variants={item} className="mb-4 flex flex-col gap-1">
                <p className="text-[17px] font-medium leading-[1.5]" style={{ color: '#3A4A63' }}>
                  {heroData.subheadline}
                </p>
                {heroData.subheadlineAccent && (
                  <p className="text-[17px] font-medium leading-[1.5]" style={{ color: GOLD }}>
                    {heroData.subheadlineAccent}
                  </p>
                )}
                <p className="text-[17px] font-medium leading-[1.5] mt-1.5" style={{ color: '#3A4A63' }}>
                  {heroData.description}
                </p>
              </motion.div>

              <motion.div variants={item} className="flex items-center gap-4 mb-5">
                <button
                  onClick={() => document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white text-[13.5px] font-semibold px-7 py-3 rounded hover:shadow-[0_12px_24px_rgba(11,29,58,0.2),0_0_0_1px_rgba(201,154,46,0.15)] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5"
                  style={{
                    background: NAVY,
                    boxShadow: `0 2px 8px rgba(11,29,58,0.15), 0 8px 24px rgba(11,29,58,0.08)`
                  }}
                >
                  {heroData.buttons.primary}
                </button>
              </motion.div>

              <motion.div variants={item} className="flex flex-wrap gap-2 mb-2">
                {heroData.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-[#0B1D3A]/[0.08] shadow-[0_2px_6px_rgba(11,29,58,0.03)] text-[#0B1D3A]/80 text-[11.5px] font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }}></span>
                    <span>{f}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p variants={item} className="text-[12px] italic text-[#0B1D3A]/45 font-medium mt-2">
                {heroData.footerText}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 relative w-full flex items-center justify-center"
            >
              <div className="relative w-full aspect-[4/5] max-w-[500px] flex items-center justify-center group mt-10 lg:mt-0">
                <motion.div
                  className="w-full h-full absolute inset-0 z-0 rounded-[2rem] overflow-hidden border border-white/60 shadow-[0_20px_60px_-15px_rgba(11,29,58,0.15)]"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
                  }}
                >
                  <motion.img
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                    src={contactHero}
                    alt="Contact Us Hero"
                    className="w-full h-full object-cover object-[center_35%]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -left-4 sm:-left-8 bottom-16 z-20 bg-white/95 backdrop-blur-xl p-4 shadow-[0_15px_40px_-10px_rgba(11,29,58,0.2)] border border-white/80 rounded-[24px] rounded-tl-[8px]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-[12px] rounded-br-[4px] bg-gradient-to-br from-[#34D399] to-[#10B981] flex items-center justify-center shadow-lg shadow-[#34D399]/30">
                      <Sparkles size={18} className="text-white" />
                    </div>
                    <div className="pr-2">
                      <div className="text-[14px] font-black text-[#0B1D3A] tracking-tight">{heroData.dashboard.floatingBadge.title}</div>
                      <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mt-0.5">{heroData.dashboard.floatingBadge.subtitle}</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -right-4 sm:-right-8 top-24 z-20 bg-white/95 backdrop-blur-xl p-3.5 shadow-[0_15px_50px_-12px_rgba(11,29,58,0.25)] border border-white/80 hidden lg:block rounded-[20px] rounded-tr-[6px]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-[10px] rounded-bl-[4px] flex items-center justify-center text-[15px] font-black text-white shadow-lg shadow-[#C99A2E]/30" style={{ background: `linear-gradient(135deg, ${GOLD}, #E2C068)` }}>
                      %
                    </div>
                    <div className="pr-3">
                      <div className="text-[16px] font-black text-[#0B1D3A] leading-none">{heroData.dashboard.stats[0].progress}</div>
                      <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mt-1">{heroData.dashboard.stats[0].title}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-20 relative font-['Outfit'] overflow-hidden bg-[#F8FAFD]">
        <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-gradient-radial from-[#C99A2E]/[0.06] to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-gradient-radial from-[#3B82F6]/[0.07] to-transparent rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-[1320px] mx-auto px-8 lg:px-12 w-full relative z-10">
          <div className="flex flex-row gap-12 lg:gap-16">
            
            <div className="flex-1">
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#0B1D3A]/[0.06] text-[#0B1D3A]">
                    {formData.section01.number}
                  </span>
                  <h2 className="text-[12px] font-bold tracking-[0.2em] text-[#0B1D3A] uppercase">
                    {formData.section01.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-5">
                  {formData.reasons.map((reason) => {
                    const isSelected = selectedReason === reason.id;
                    const Icon = reasonIcons[reason.id as ReasonId] || Briefcase;
                    return (
                      <motion.button
                        key={reason.id}
                        type="button"
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedReason(reason.id as ReasonId)}
                        className={`text-left p-6 rounded-2xl transition-all duration-300 relative cursor-pointer flex flex-col justify-between ${
                          isSelected 
                            ? 'bg-gradient-to-br from-[#0B1D3A] to-[#132D5F] text-white border-2 border-[#C99A2E] shadow-[0_16px_36px_-8px_rgba(11,29,58,0.38)]' 
                            : 'bg-white/95 backdrop-blur-md border border-[#0B1D3A]/[0.08] text-[#0B1D3A] hover:border-[#C99A2E]/50 hover:bg-white hover:shadow-[0_10px_25px_-6px_rgba(11,29,58,0.1)] shadow-xs'
                        }`}
                      >
                        <div className={`absolute top-4 right-4 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
                          isSelected 
                            ? 'bg-[#C99A2E] text-white shadow-xs scale-105' 
                            : 'border border-[#0B1D3A]/20 bg-white/60'
                        }`}>
                          {isSelected && <Check size={13} strokeWidth={3} className="text-white" />}
                        </div>

                        <p className={`text-[13px] leading-relaxed transition-colors mb-3 ${
                          isSelected ? 'text-white/80 font-normal' : 'text-[#64748B]'
                        }`}>
                          {reason.desc}
                        </p>

                        <div className="flex items-center gap-3.5 pr-8 mt-auto">
                          <div 
                            className="w-11 h-11 rounded-xl flex items-center justify-center shadow-xs shrink-0 transition-transform duration-300"
                            style={{ backgroundColor: reason.color }}
                          >
                            <Icon size={20} className="text-white" />
                          </div>
                          <h3 className={`font-bold text-[17px] leading-tight transition-colors ${
                            isSelected ? 'text-[#E2C068]' : 'text-[#0B1D3A]'
                          }`}>
                            {reason.title}
                          </h3>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="bg-white/85 backdrop-blur-sm border border-[#0B1D3A]/[0.06] rounded-xl p-4 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] mr-1">
                    {formData.section01.suggestedTopicsLabel}
                  </span>
                  {currentReasonData.tags.map((tag, tIdx) => (
                    <button
                      key={tIdx}
                      type="button"
                      onClick={() => handleAddTag(tag)}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-medium bg-[#F1F5F9] text-[#334155] border border-[#CBD5E1]/60 hover:bg-[#C99A2E]/10 hover:border-[#C99A2E]/40 hover:text-[#C99A2E] transition-colors cursor-pointer"
                    >
                      <span>+</span> {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#0B1D3A]/[0.06] text-[#0B1D3A]">
                    {formData.section02.number}
                  </span>
                  <h2 className="text-[12px] font-bold tracking-[0.2em] text-[#0B1D3A] uppercase">
                    {formData.section02.title}
                  </h2>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="submitted"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-white rounded-2xl border-2 border-[#C99A2E]/40 p-12 text-center shadow-[0_20px_50px_-10px_rgba(11,29,58,0.12)] relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-48 h-48 bg-[#C99A2E]/10 rounded-full blur-[50px] pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3B82F6]/10 rounded-full blur-[50px] pointer-events-none"></div>

                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-white mx-auto mb-6 shadow-[0_8px_20px_rgba(16,185,129,0.3)]">
                        <CheckCircle2 size={32} />
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#C99A2E]/10 text-[#C99A2E] border border-[#C99A2E]/30 mb-4">
                        {formData.confirmation.badge} • {referenceId}
                      </span>

                      <h3 className="text-[30px] font-bold text-[#0B1D3A] mb-3">
                        {formData.confirmation.titlePrefix} {currentReasonData.title} {formData.confirmation.titleSuffix}
                      </h3>

                      <p className="text-[16px] text-[#475569] max-w-[550px] mx-auto mb-8 leading-relaxed">
                        {formData.confirmation.thankYou}, <span className="font-bold text-[#0B1D3A]">{name || 'Executive'}</span>. {formData.confirmation.bodyText} <span className="font-bold text-[#0B1D3A]">{email}</span>.
                      </p>

                      <div className="flex justify-center">
                        <button
                          type="button"
                          onClick={resetForm}
                          className="px-6 py-3 rounded-lg bg-[#0B1D3A] hover:bg-[#132D5F] text-white font-bold text-[14px] transition-colors cursor-pointer shadow-md"
                        >
                          {formData.confirmation.resetBtn}
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6" 
                      onSubmit={handleSubmit}
                    >
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold tracking-[0.14em] text-[#0B1D3A]/80 uppercase flex items-center gap-1">
                            {formData.section02.nameLabel} <span className="text-[#C99A2E] font-bold">*</span>
                          </label>
                          <div className="relative">
                            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                            <input 
                              type="text" 
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder={formData.section02.namePlaceholder}
                              className="w-full bg-white/95 border border-[#0B1D3A]/15 rounded-xl pl-11 pr-4 py-3.5 text-[14.5px] text-[#0B1D3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 shadow-2xs transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold tracking-[0.14em] text-[#0B1D3A]/80 uppercase flex items-center gap-1">
                            {formData.section02.emailLabel} <span className="text-[#C99A2E] font-bold">*</span>
                          </label>
                          <div className="relative">
                            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                            <input 
                              type="email" 
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder={formData.section02.emailPlaceholder}
                              className="w-full bg-white/95 border border-[#0B1D3A]/15 rounded-xl pl-11 pr-4 py-3.5 text-[14.5px] text-[#0B1D3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 shadow-2xs transition-all"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-bold tracking-[0.14em] text-[#0B1D3A]/80 uppercase flex items-center gap-1">
                          {formData.section02.companyLabel} <span className="text-[#94A3B8] lowercase normal-case font-medium">{formData.section02.optionalText}</span>
                        </label>
                        <div className="relative">
                          <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                          <input 
                            type="text" 
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder={formData.section02.companyPlaceholder}
                            className="w-full bg-white/95 border border-[#0B1D3A]/15 rounded-xl pl-11 pr-4 py-3.5 text-[14.5px] text-[#0B1D3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 shadow-2xs transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-bold tracking-[0.14em] text-[#0B1D3A]/80 uppercase flex items-center gap-1">
                          {formData.section02.messageLabel} <span className="text-[#C99A2E] font-bold">*</span>
                        </label>
                        <div className="relative">
                          <MessageSquare size={16} className="absolute left-4 top-4 text-[#94A3B8]" />
                          <textarea 
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={formData.section02.messagePlaceholder}
                            className="w-full bg-white/95 border border-[#0B1D3A]/15 rounded-xl pl-11 pr-4 py-3.5 text-[14.5px] text-[#0B1D3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 shadow-2xs transition-all resize-none"
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 pt-1 text-[13px] text-[#64748B]">
                        <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0">
                          <ShieldCheck size={14} />
                        </div>
                        <span>{formData.section02.privacyNote}</span>
                      </div>

                      <div className="pt-2">
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative overflow-hidden text-white text-[15px] font-bold px-8 py-4 rounded-xl shadow-[0_10px_25px_rgba(11,29,58,0.25)] hover:shadow-[0_15px_35px_rgba(201,154,46,0.35)] transition-all duration-300 flex items-center gap-3 cursor-pointer disabled:opacity-70"
                          style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #132D5F 100%)' }}
                        >
                          <span className="relative z-10">
                            {isSubmitting ? formData.section02.submittingBtn : formData.section02.submitBtn}
                          </span>
                          <motion.div 
                            animate={isSubmitting ? { x: [0, 30, 30, 0], y: [0, -30, 30, 0], opacity: [1, 0, 0, 1] } : {}}
                            transition={isSubmitting ? { duration: 1.5, repeat: Infinity } : {}}
                            className="relative z-10 w-7 h-7 rounded-full bg-[#C99A2E] flex items-center justify-center text-white shadow-xs group-hover:bg-[#E2C068] transition-colors"
                          >
                            <Send size={14} strokeWidth={2.5} className="text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </motion.div>
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent z-0"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                          />
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

            </div>

            <div className="w-[410px] shrink-0">
              <div className="bg-[#0B1D3A] text-white border border-[#C99A2E]/25 rounded-2xl p-8 shadow-[0_25px_60px_-15px_rgba(11,29,58,0.45)] lg:sticky top-24 relative overflow-hidden">
                
                <div className="absolute top-0 right-0 w-56 h-56 bg-[#C99A2E]/15 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#3B82F6]/15 rounded-full blur-[60px] pointer-events-none"></div>

                <div className="flex items-center justify-between gap-2 border border-[#C99A2E]/30 bg-[#C99A2E]/10 px-3.5 py-1.5 rounded-full mb-8 backdrop-blur-md relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#34D399] relative flex items-center justify-center">
                      <span className="absolute w-3.5 h-3.5 rounded-full bg-[#34D399]/40 animate-ping"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.16em] text-[#E2C068] uppercase">
                      {sidebarData.deskBadge}
                    </span>
                  </div>
                  {currentTime && (
                    <span className="text-[11px] font-mono text-white/70">
                      {currentTime} IST
                    </span>
                  )}
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#C99A2E] flex items-center justify-center shrink-0 shadow-xs">
                      <Mail size={19} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#C99A2E] uppercase mb-1">
                        {sidebarData.directTitle}
                      </h4>
                      <div className="flex items-center gap-2">
                        <a href={`mailto:${sidebarData.email}`} className="text-[14px] text-white font-bold hover:text-[#E2C068] transition-colors truncate">
                          {sidebarData.email}
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          title="Copy email"
                          className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-[11px] font-medium flex items-center gap-1 transition-all cursor-pointer shrink-0"
                        >
                          {copiedEmail ? (
                            <>
                              <Check size={11} className="text-[#34D399]" />
                              <span className="text-[#34D399]">{sidebarData.copiedLabel}</span>
                            </>
                          ) : (
                            <>
                              <Copy size={11} />
                              <span>{sidebarData.copyLabel}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-white/10" />

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#10B981] flex items-center justify-center shrink-0 shadow-xs">
                      <Clock size={19} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#C99A2E] uppercase mb-1">
                        {sidebarData.responseTitle}
                      </h4>
                      <p className="text-[14px] font-semibold text-white">{sidebarData.responseTime}</p>
                      <p className="text-[12px] text-white/60">{sidebarData.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#3B82F6] flex items-center justify-center shrink-0 shadow-xs">
                      <MapPin size={19} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#C99A2E] uppercase mb-1">
                        {sidebarData.locationTitle}
                      </h4>
                      <p className="text-[14px] font-semibold text-white">{sidebarData.city}</p>
                      <p className="text-[12px] text-white/60">{sidebarData.center}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#8B5CF6] flex items-center justify-center shrink-0 shadow-xs">
                      <Building2 size={19} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#C99A2E] uppercase mb-1">
                        {sidebarData.officeTitle}
                      </h4>
                      <p className="text-[13px] text-white/80 leading-relaxed">
                        {sidebarData.address}
                      </p>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-white/10" />

                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#F59E0B] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <Sparkles size={14} className="text-white" />
                    </div>
                    <p className="text-[12px] text-white/80 leading-relaxed">
                      {sidebarData.partnersNote}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

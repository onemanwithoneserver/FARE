import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, MessageSquare, Video, BookOpen, Calendar, ArrowRight } from "lucide-react";
import { PrimaryButton } from "../ui";

export interface ExpertProfileData {
  name: string;
  role: string;
  image?: string;
  experience: string;
  verified?: boolean;
  languages: string[];
  price?: string;
  specialisedIn?: string[];
  canPractise?: string[];
  about?: string;
  reExperience?: string;
  expertise?: string[];
  scenarios?: { category: string; items: string[] }[];
  howICondut?: { roles: string; description: string };
  sessionOptions?: { duration: string; price: string }[];
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  expert: ExpertProfileData | null;
}

export default function ExpertProfileDialog({ isOpen, onClose, expert }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!expert) return null;

  // Rich defaults or specific expert details
  const about =
    expert.about ||
    `Real estate sales professional with ${expert.experience.toLowerCase()} across residential sales, customer handling, negotiation and team management.`;
  
  const reExperience =
    expert.reExperience || "Residential — Apartments · Villas · Gated Communities";

  const expertise =
    expert.expertise || expert.specialisedIn || [
      "Sales",
      "Customer Handling",
      "Negotiation",
      "Objection Handling",
      "Closing",
    ];

  const scenarios = expert.scenarios || [
    {
      category: "Sales",
      items: [
        "Price Objection",
        "Negotiation",
        "Need Analysis",
        "Site Visit",
        "Closing",
        "Lost Lead Recovery",
      ],
    },
    {
      category: "Customer Handling",
      items: [
        "Difficult Customer",
        "Comparison Objection",
        "Trust & Credibility",
        "Decision Delay",
      ],
    },
  ];

  const howICondut = expert.howICondut || {
    roles: "You: Sales Professional | Expert: Customer",
    description:
      "I will act as the customer and respond naturally to your conversation. I may introduce objections, ask questions or challenge your responses.\n\nAfter the role-play, you receive structured feedback on your performance.",
  };

  const sessionOptions = expert.sessionOptions || [
    { duration: "30 min", price: expert.price?.replace("From ", "") || "₹999" },
    { duration: "45 min", price: "₹1,399" },
    { duration: "60 min", price: "₹1,799" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B1D3A]/60 backdrop-blur-sm transition-opacity"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative w-full max-w-[940px] bg-white rounded-[24px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-[#E6EBF3] overflow-hidden flex flex-col md:flex-row max-h-[90vh] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#475569] hover:text-[#0B1D3A] flex items-center justify-center border border-[#E6EBF3] shadow-sm transition-all cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {/* Left Sidebar: Photo & Quick Info */}
            <div className="w-full md:w-[280px] bg-[#F8FAFD] p-6 sm:p-7 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#E6EBF3] shrink-0 overflow-y-auto">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 shrink-0">
                <img
                  src={expert.image || `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300`}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-[20px] sm:text-[22px] font-black text-[#0B1D3A] tracking-tight mb-1">
                {expert.name}
              </h2>

              {expert.verified && (
                <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full mb-3">
                  <ShieldCheck size={14} />
                  FARE Verified
                </span>
              )}

              <p className="text-[13px] font-bold text-[#0B1D3A] leading-snug mb-1">
                {expert.role}
              </p>
              <p className="text-[12px] font-medium text-[#7B8DAA] mb-5">
                {expert.experience}
              </p>

              <div className="w-full h-px bg-[#E6EBF3] mb-5" />

              <div className="w-full flex flex-col gap-4 text-left">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.1em] text-[#7B8DAA] mb-1.5 block">
                    Languages
                  </span>
                  <p className="text-[13px] font-semibold text-[#0B1D3A] flex items-center gap-2">
                    <MessageSquare size={14} className="text-[#C99A2E] shrink-0" />
                    {expert.languages.join(" · ")}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.1em] text-[#7B8DAA] mb-1.5 block">
                    Session Format
                  </span>
                  <p className="text-[13px] font-semibold text-[#0B1D3A] flex items-center gap-2">
                    <Video size={14} className="text-[#C99A2E] shrink-0" />
                    Online (Google Meet)
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Main Profile Details */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col gap-6 overflow-y-auto">
              {/* About */}
              <div>
                <h3 className="text-[16px] font-black text-[#0B1D3A] mb-2">About</h3>
                <p className="text-[13.5px] font-medium text-[#475569] leading-relaxed">
                  {about}
                </p>
              </div>

              {/* Real Estate Experience */}
              <div>
                <h3 className="text-[16px] font-black text-[#0B1D3A] mb-2">
                  Real Estate Experience
                </h3>
                <p className="text-[13px] font-bold text-[#0B1D3A] px-3.5 py-2 bg-[#F8FAFD] rounded-[10px] inline-block border border-[#E6EBF3]">
                  {reExperience}
                </p>
              </div>

              {/* Areas of Expertise */}
              <div>
                <h3 className="text-[16px] font-black text-[#0B1D3A] mb-2.5">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((exp) => (
                    <span
                      key={exp}
                      className="px-3 py-1.5 rounded-[8px] bg-white border border-[#CBD5E1] text-[13px] font-semibold text-[#0B1D3A]"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Scenarios Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {scenarios.map((cat) => (
                  <div key={cat.category}>
                    <h4 className="text-[11.5px] font-black uppercase tracking-[0.1em] text-[#475569] mb-3 flex items-center gap-2">
                      <BookOpen size={14} className="text-[#C99A2E]" />
                      {cat.category} Scenarios
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="text-[13px] font-semibold text-[#0B1D3A] flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Highlight Box: How I Conduct Mocks */}
              <div className="bg-[#FFFDF5] p-5 rounded-[14px] border border-[#F5D98B]">
                <h4 className="text-[14px] font-black text-[#8A5A00] mb-1">
                  How I Conduct Mocks
                </h4>
                <p className="text-[12px] font-bold text-[#8A5A00] mb-2.5">
                  {howICondut.roles}
                </p>
                <p className="text-[13px] font-medium text-[#8A5A00]/90 leading-relaxed whitespace-pre-line">
                  {howICondut.description}
                </p>
              </div>

              {/* Footer: Session Options & Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-5 border-t border-[#E6EBF3] mt-auto">
                <div className="flex items-center gap-4 sm:gap-6">
                  {sessionOptions.map((opt) => (
                    <div key={opt.duration} className="flex flex-col">
                      <span className="text-[11px] font-bold text-[#7B8DAA] uppercase">
                        {opt.duration}
                      </span>
                      <span className="text-[15px] font-black text-[#0B1D3A]">
                        {opt.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2.5">
                  <button className="h-11 px-4 flex items-center justify-center gap-1.5 bg-white hover:bg-[#F8FAFD] border border-[#CBD5E1] rounded-[10px] text-[13px] font-bold text-[#0B1D3A] transition-all shadow-xs cursor-pointer">
                    <Calendar size={14} />
                    View Available Slots
                    <ArrowRight size={13} />
                  </button>
                  <PrimaryButton
                    variant="gold"
                    className="!h-11 !px-5 text-[13px] !rounded-[10px] font-bold"
                  >
                    Book a Mock Session
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

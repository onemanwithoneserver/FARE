const fs = require('fs');
const path = require('path');

const basePath = path.join(process.cwd(), 'src/FARE for Employees');

// Utility to write files
const writeFile = (relPath, content) => {
  fs.writeFileSync(path.join(basePath, relPath), content.trim());
};

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";

// --- SECTION 1 ---
const data1 = `export const data = {
  badge: "FARE for Employees",
  headline: "Move Beyond Your Current Role",
  subheadline: "You have the experience. You put in the effort.",
  description: "But career growth often requires new skills, new approaches and continuous learning.\\n\\nFARE helps real estate employees identify their skill gaps, build relevant capabilities, practise real-world situations and prepare for the next stage of their career.",
  buttons: { primary: "Take Free Self-Evaluation", secondary: "Explore FARE" }
};`;

const desk1 = `import { motion } from "framer-motion";
import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#0B1D3A] text-white py-24 px-10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <span className="text-[#C99A2E] text-sm font-bold tracking-widest uppercase mb-4 block">{data.badge}</span>
        <h1 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">{data.headline}</h1>
        <p className="text-2xl font-semibold mb-6 text-white/90">{data.subheadline}</p>
        <p className="text-lg text-white/70 max-w-2xl mx-auto whitespace-pre-wrap leading-relaxed mb-10">{data.description}</p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-[#C99A2E] text-white px-8 py-4 rounded font-bold hover:bg-[#B38725] transition-colors shadow-lg">{data.buttons.primary}</button>
          <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">{data.buttons.secondary}</button>
        </div>
      </div>
    </section>
  );
}`;

const mob1 = `import { data } from "../data/data";
export default function Mobile() {
  return (
    <section className="w-full bg-[#0B1D3A] text-white py-16 px-6 relative overflow-hidden text-center">
      <span className="text-[#C99A2E] text-xs font-bold tracking-widest uppercase mb-3 block">{data.badge}</span>
      <h1 className="text-4xl font-black mb-4 tracking-tight leading-tight">{data.headline}</h1>
      <p className="text-xl font-semibold mb-5 text-white/90">{data.subheadline}</p>
      <p className="text-base text-white/70 whitespace-pre-wrap leading-relaxed mb-8">{data.description}</p>
      <div className="flex flex-col gap-3">
        <button className="bg-[#C99A2E] text-white px-6 py-3.5 rounded font-bold shadow-lg w-full">{data.buttons.primary}</button>
        <button className="bg-transparent border border-white/20 text-white px-6 py-3.5 rounded font-bold w-full">{data.buttons.secondary}</button>
      </div>
    </section>
  );
}`;

// --- SECTION 2 ---
const data2 = `export const data = {
  title: "Working Hard. But Is Your Career Moving Forward?",
  challenges: [
    { title: "Stuck in the Same Role", text: "Putting in the years, but not seeing the career progression you expected." },
    { title: "100% Effort. But Not the Desired Results", text: "Working hard, but your performance isn't translating into the outcomes you want." },
    { title: "Non-Sales Skills Are Holding You Back", text: "Communication, negotiation, planning, customer handling, digital skills or other capabilities may be affecting your performance." },
    { title: "Not Being Groomed for Leadership", text: "You may be ready for more responsibility, but haven't had the opportunity to build the skills needed to lead teams." },
    { title: "Unable to Leverage Your Experience", text: "You have years of experience, but may not be converting that experience into better performance, broader responsibilities or career growth." },
    { title: "Struggling to Adapt to Changing Market Demands", text: "Customer expectations, technology and business practices are changing. Staying with the same skills can make it difficult to keep up." },
    { title: "Still Relying on Traditional Selling Methods", text: "Customers are changing and digital channels are becoming increasingly important, but your selling approach may not have evolved with them." }
  ],
  closing: "Experience gives you a foundation. Continuous learning helps you build what's next.\\nThat's where FARE comes in."
};`;

const desk2 = `import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#F8FAFD] py-20 px-10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-black text-[#0B1D3A] text-center mb-16 tracking-tight">{data.title}</h2>
        <div className="grid grid-cols-3 gap-6 mb-16">
          {data.challenges.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-[#0B1D3A]/5 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#C99A2E] mb-3">{c.title}</h3>
              <p className="text-[#475569] font-medium leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center text-xl font-bold text-[#0B1D3A] whitespace-pre-wrap leading-relaxed">{data.closing}</div>
      </div>
    </section>
  );
}`;

const mob2 = `import { data } from "../data/data";
export default function Mobile() {
  return (
    <section className="w-full bg-[#F8FAFD] py-16 px-6">
      <h2 className="text-3xl font-black text-[#0B1D3A] text-center mb-10 tracking-tight">{data.title}</h2>
      <div className="flex flex-col gap-4 mb-10">
        {data.challenges.map((c, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-[#0B1D3A]/5">
            <h3 className="text-base font-bold text-[#C99A2E] mb-2">{c.title}</h3>
            <p className="text-sm text-[#475569] font-medium leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center text-lg font-bold text-[#0B1D3A] whitespace-pre-wrap">{data.closing}</div>
    </section>
  );
}`;

// --- SECTION 3 ---
const data3 = `export const data = {
  title: "Build the Skills Your Career Needs Next",
  subtitle: "FARE brings together real estate, sales, digital, communication, leadership and functional skills in one learning ecosystem.",
  categories: [
    { name: "SALES SKILLS", skills: ["Lead Handling", "Prospecting", "Customer Profiling", "Need Analysis", "Property Presentation", "Site Visit Skills", "Objection Handling", "Negotiation", "Follow-up", "Closing"] },
    { name: "CUSTOMER EXPERIENCE", skills: ["Customer Journey", "Customer Engagement", "Customer Communication", "Experience Management", "Complaint Handling", "Relationship Management", "Retention", "Referral & Loyalty"] },
    { name: "MARKETING", skills: ["Real Estate Marketing", "Project Marketing", "Brand Building", "Digital Marketing", "Lead Generation"] },
    { name: "PRODUCT & PROJECT KNOWLEDGE", skills: ["Project Knowledge", "Product Knowledge", "Location Knowledge", "Market Knowledge", "Property Types"] },
    { name: "COMMUNICATION", skills: ["Verbal Communication", "Business Communication", "Presentation Skills", "Storytelling", "Active Listening", "Questioning Skills", "Negotiation Communication", "Email & Written Communication", "Public Speaking"] },
    { name: "DIGITAL & TECHNOLOGY", skills: ["Digital Selling", "Digital Marketing", "Social Selling", "Content Marketing", "Personal Branding", "Lead Generation", "Marketing Automation", "CRM", "AI for Real Estate", "PropTech", "Data & Analytics", "Video Selling", "WhatsApp & Messaging"] },
    { name: "LEADERSHIP & MANAGEMENT", skills: ["Team Management", "Leadership", "Coaching", "Performance Management", "Goal Setting", "Sales Management", "Conflict Management", "Delegation", "Decision Making", "Team Building", "Manager Development", "Strategic Thinking"] },
    { name: "FUNCTIONAL SKILLS", skills: ["Pre-Sales", "Channel Partner Management", "CRM", "Inside Sales", "Sales Operations", "Business Development", "Leasing", "Property Management", "Customer Support"] }
  ]
};`;

const desk3 = `import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-white py-20 px-10">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-black text-[#0B1D3A] mb-4 tracking-tight">{data.title}</h2>
        <p className="text-lg text-[#475569] font-medium max-w-3xl mx-auto mb-16">{data.subtitle}</p>
        <div className="grid grid-cols-2 gap-8 text-left">
          {data.categories.map((c, i) => (
            <div key={i} className="p-6 border-b border-[#0B1D3A]/10">
              <h3 className="text-[#C99A2E] text-sm font-bold tracking-widest uppercase mb-4">{c.name}</h3>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((s, j) => (
                  <span key={j} className="px-3 py-1 bg-[#F8FAFD] text-[#0B1D3A] text-xs font-bold rounded-full">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const mob3 = `import { data } from "../data/data";
export default function Mobile() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <h2 className="text-3xl font-black text-[#0B1D3A] text-center mb-4 tracking-tight">{data.title}</h2>
      <p className="text-base text-[#475569] font-medium text-center mb-10">{data.subtitle}</p>
      <div className="flex flex-col gap-6">
        {data.categories.map((c, i) => (
          <div key={i} className="pb-6 border-b border-[#0B1D3A]/10">
            <h3 className="text-[#C99A2E] text-xs font-bold tracking-widest uppercase mb-3">{c.name}</h3>
            <div className="flex flex-wrap gap-2">
              {c.skills.map((s, j) => (
                <span key={j} className="px-2.5 py-1 bg-[#F8FAFD] text-[#0B1D3A] text-[11px] font-bold rounded-full">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`;

// --- SECTION 4 ---
const data4 = `export const data = {
  title: "Choose the Learning Experience That Fits You",
  experiences: [
    { title: "Build & Test Your Knowledge", label: "QUIZZES", text: "Test your understanding of real estate, products, projects, markets, processes and industry fundamentals." },
    { title: "Learn at Your Own Pace", label: "COURSES", text: "Structured programs covering real estate, sales, digital and professional skills." },
    { title: "Learn With Trainers", label: "LIVE CLASSES", text: "Interactive sessions with trainers and industry experts." },
    { title: "Practise Real Situations", label: "MOCKS", text: "Customer conversations, objections, negotiations, site visits, sales situations, leadership scenarios and more." },
    { title: "Learn & Practise Together", label: "WORKSHOPS", text: "Focused learning experiences around specific skills and business challenges." },
    { title: "Get Personal Guidance", label: "MENTORING", text: "Work with experienced trainers and mentors on specific skills, career goals and professional challenges." }
  ]
};`;

const desk4 = `import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#0B1D3A] text-white py-20 px-10">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-black mb-16 tracking-tight">{data.title}</h2>
        <div className="grid grid-cols-3 gap-6">
          {data.experiences.map((exp, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 text-left hover:bg-white/10 transition-colors">
              <span className="text-[#C99A2E] text-xs font-bold tracking-widest uppercase mb-3 block">{exp.label}</span>
              <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
              <p className="text-white/70 font-medium leading-relaxed">{exp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const mob4 = `import { data } from "../data/data";
export default function Mobile() {
  return (
    <section className="w-full bg-[#0B1D3A] text-white py-16 px-6">
      <h2 className="text-3xl font-black text-center mb-10 tracking-tight">{data.title}</h2>
      <div className="flex flex-col gap-4">
        {data.experiences.map((exp, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
            <span className="text-[#C99A2E] text-[10px] font-bold tracking-widest uppercase mb-2 block">{exp.label}</span>
            <h3 className="text-lg font-bold mb-2">{exp.title}</h3>
            <p className="text-sm text-white/70 font-medium leading-relaxed">{exp.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}`;

// --- SECTION 5 ---
const data5 = `export const data = {
  title: "Start Your Learning Journey Today",
  subtitle: "You don't have to wait for your next career move to start learning.",
  items: [
    { title: "JOIN OUR WHATSAPP COMMUNITY", text: "Stay connected with real estate learning, knowledge updates, tips and opportunities.", cta: "Join WhatsApp Community" },
    { title: "ENROLL FOR A FREE COURSE", text: "Experience FARE first-hand with a free course designed for real estate professionals.", cta: "Enroll for FREE Course" }
  ],
  closing: "Start free. Keep learning. Build what's next."
};`;

const desk5 = `import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#F8FAFD] py-20 px-10">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl font-black text-[#0B1D3A] mb-4 tracking-tight">{data.title}</h2>
        <p className="text-lg text-[#475569] font-medium mb-16">{data.subtitle}</p>
        <div className="grid grid-cols-2 gap-8 mb-16">
          {data.items.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-[#0B1D3A]/5 flex flex-col items-center">
              <h3 className="text-[#C99A2E] text-sm font-bold tracking-widest uppercase mb-4">{item.title}</h3>
              <p className="text-[#475569] font-medium mb-8 text-center">{item.text}</p>
              <button className="bg-[#0B1D3A] text-white px-8 py-3.5 rounded font-bold hover:bg-[#102B63] transition-colors mt-auto w-full">{item.cta}</button>
            </div>
          ))}
        </div>
        <div className="text-2xl font-bold text-[#0B1D3A]">{data.closing}</div>
      </div>
    </section>
  );
}`;

const mob5 = `import { data } from "../data/data";
export default function Mobile() {
  return (
    <section className="w-full bg-[#F8FAFD] py-16 px-6">
      <h2 className="text-3xl font-black text-[#0B1D3A] text-center mb-3 tracking-tight">{data.title}</h2>
      <p className="text-base text-[#475569] font-medium text-center mb-10">{data.subtitle}</p>
      <div className="flex flex-col gap-6 mb-10">
        {data.items.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-[#0B1D3A]/5 flex flex-col items-center text-center">
            <h3 className="text-[#C99A2E] text-[11px] font-bold tracking-widest uppercase mb-3">{item.title}</h3>
            <p className="text-sm text-[#475569] font-medium mb-6">{item.text}</p>
            <button className="bg-[#0B1D3A] text-white px-6 py-3 rounded font-bold w-full">{item.cta}</button>
          </div>
        ))}
      </div>
      <div className="text-xl font-bold text-[#0B1D3A] text-center">{data.closing}</div>
    </section>
  );
}`;

// --- SECTION 6 ---
const data6 = `export const data = {
  badge: "FARE Career Fastrack",
  title: "Turn Learning Into Career Opportunities",
  subtitle: "FARE Career Fastrack connects learning, mentoring and opportunities to help you take the next step in your career.",
  items: [
    { title: "PLACEMENT OPPORTUNITIES", text: "Explore relevant job opportunities with participating real estate companies based on your experience, skills and career interests.", cta: "Explore Placements" },
    { title: "NETWORKING", text: "Connect with real estate companies, professionals and industry experts to expand your professional network and discover new opportunities.", cta: "Explore Networking" },
    { title: "PERSONAL MENTORING", text: "Get one-to-one guidance from experienced trainers and mentors to work on specific skills, career goals and professional challenges.", cta: "Find a Mentor" }
  ]
};`;

const desk6 = `import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-white py-20 px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C99A2E] text-sm font-bold tracking-widest uppercase mb-4 block">{data.badge}</span>
          <h2 className="text-4xl font-black text-[#0B1D3A] mb-4 tracking-tight">{data.title}</h2>
          <p className="text-lg text-[#475569] font-medium max-w-2xl mx-auto">{data.subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {data.items.map((item, i) => (
            <div key={i} className="p-8 border border-[#0B1D3A]/10 rounded-xl flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-[#C99A2E] text-xs font-bold tracking-widest uppercase mb-4">{item.title}</h3>
              <p className="text-[#475569] font-medium mb-8 leading-relaxed">{item.text}</p>
              <button className="text-[#0B1D3A] font-bold border-b-2 border-[#C99A2E] self-start pb-1 hover:text-[#C99A2E] transition-colors mt-auto">{item.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const mob6 = `import { data } from "../data/data";
export default function Mobile() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="text-center mb-10">
        <span className="text-[#C99A2E] text-[11px] font-bold tracking-widest uppercase mb-3 block">{data.badge}</span>
        <h2 className="text-3xl font-black text-[#0B1D3A] mb-3 tracking-tight">{data.title}</h2>
        <p className="text-base text-[#475569] font-medium">{data.subtitle}</p>
      </div>
      <div className="flex flex-col gap-4">
        {data.items.map((item, i) => (
          <div key={i} className="p-6 border border-[#0B1D3A]/10 rounded-xl flex flex-col">
            <h3 className="text-[#C99A2E] text-[10px] font-bold tracking-widest uppercase mb-3">{item.title}</h3>
            <p className="text-sm text-[#475569] font-medium mb-6 leading-relaxed">{item.text}</p>
            <button className="text-[#0B1D3A] text-sm font-bold border-b-2 border-[#C99A2E] self-start pb-0.5">{item.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}`;

// --- SECTION 7 ---
const data7 = `export const data = {
  title: "What Can FARE Help You Achieve?",
  outcomes: [
    { title: "PERFORM BETTER", text: "Improve the skills that directly affect your current role and performance." },
    { title: "BECOME MORE VERSATILE", text: "Build capabilities beyond your core role and become equipped for changing business requirements." },
    { title: "ADAPT TO THE NEW REAL ESTATE", text: "Develop digital, technology and modern selling capabilities alongside traditional real estate skills." },
    { title: "PREPARE FOR LEADERSHIP", text: "Build the communication, people management, coaching and business skills needed for greater responsibility." },
    { title: "LEVERAGE YOUR EXPERIENCE", text: "Turn your years of experience into stronger capabilities, broader responsibilities and new possibilities." },
    { title: "EXPLORE NEW OPPORTUNITIES", text: "Use your skills, learning, network and experience to explore relevant career opportunities." }
  ],
  closing: "Don't let your experience define where you stop. Use it to build where you go next."
};`;

const desk7 = `import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#0B1D3A] text-white py-20 px-10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-black mb-16 text-center tracking-tight">{data.title}</h2>
        <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-16">
          {data.outcomes.map((o, i) => (
            <div key={i}>
              <h3 className="text-[#C99A2E] text-xs font-bold tracking-widest uppercase mb-3">{o.title}</h3>
              <p className="text-white/80 font-medium leading-relaxed">{o.text}</p>
            </div>
          ))}
        </div>
        <div className="text-2xl font-bold text-center text-white">{data.closing}</div>
      </div>
    </section>
  );
}`;

const mob7 = `import { data } from "../data/data";
export default function Mobile() {
  return (
    <section className="w-full bg-[#0B1D3A] text-white py-16 px-6">
      <h2 className="text-3xl font-black mb-10 text-center tracking-tight">{data.title}</h2>
      <div className="flex flex-col gap-8 mb-12">
        {data.outcomes.map((o, i) => (
          <div key={i}>
            <h3 className="text-[#C99A2E] text-[10px] font-bold tracking-widest uppercase mb-2">{o.title}</h3>
            <p className="text-sm text-white/80 font-medium leading-relaxed">{o.text}</p>
          </div>
        ))}
      </div>
      <div className="text-lg font-bold text-center text-white">{data.closing}</div>
    </section>
  );
}`;

// --- SECTION 8 ---
const data8 = `export const data = {
  title: "Ready for Your Next Step?",
  subtitle: "Know Where You Stand. Build What You're Missing. Move Forward.",
  description: "Start your FARE journey with a free self-evaluation and discover where you can grow.",
  buttons: { primary: "Start Free Self-Evaluation", secondary: "Register with FARE" },
  footer: "Self-Evaluation · Learning Programs · Skill Practice · Mentoring · Career Opportunities"
};`;

const desk8 = `import { data } from "../data/data";
export default function Desktop() {
  return (
    <section className="w-full bg-[#F8FAFD] py-24 px-10 text-center">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-5xl font-black text-[#0B1D3A] mb-6 tracking-tight">{data.title}</h2>
        <p className="text-2xl font-bold text-[#C99A2E] mb-6">{data.subtitle}</p>
        <p className="text-lg text-[#475569] font-medium mb-12">{data.description}</p>
        <div className="flex justify-center gap-4 mb-16">
          <button className="bg-[#0B1D3A] text-white px-8 py-4 rounded font-bold hover:bg-[#102B63] transition-colors shadow-md">{data.buttons.primary}</button>
          <button className="bg-transparent border border-[#0B1D3A]/20 text-[#0B1D3A] px-8 py-4 rounded font-bold hover:bg-[#0B1D3A]/5 transition-colors">{data.buttons.secondary}</button>
        </div>
        <div className="text-sm font-bold text-[#0B1D3A]/40 uppercase tracking-widest">{data.footer}</div>
      </div>
    </section>
  );
}`;

const mob8 = `import { data } from "../data/data";
export default function Mobile() {
  return (
    <section className="w-full bg-[#F8FAFD] py-16 px-6 text-center">
      <h2 className="text-4xl font-black text-[#0B1D3A] mb-4 tracking-tight">{data.title}</h2>
      <p className="text-xl font-bold text-[#C99A2E] mb-4 leading-snug">{data.subtitle}</p>
      <p className="text-base text-[#475569] font-medium mb-10">{data.description}</p>
      <div className="flex flex-col gap-3 mb-12">
        <button className="bg-[#0B1D3A] text-white px-6 py-3.5 rounded font-bold shadow-md w-full">{data.buttons.primary}</button>
        <button className="bg-transparent border border-[#0B1D3A]/20 text-[#0B1D3A] px-6 py-3.5 rounded font-bold w-full">{data.buttons.secondary}</button>
      </div>
      <div className="text-[10px] font-bold text-[#0B1D3A]/40 uppercase tracking-widest leading-relaxed">{data.footer}</div>
    </section>
  );
}`;

const sections = [
  { p: 'section-01-hero', data: data1, desk: desk1, mob: mob1 },
  { p: 'section-02-career-progression-challenges', data: data2, desk: desk2, mob: mob2 },
  { p: 'section-03-skills-you-can-build', data: data3, desk: desk3, mob: mob3 },
  { p: 'section-04-learn-practise-improve', data: data4, desk: desk4, mob: mob4 },
  { p: 'section-05-start-learning-for-free', data: data5, desk: desk5, mob: mob5 },
  { p: 'section-06-career-fastrack', data: data6, desk: desk6, mob: mob6 },
  { p: 'section-07-career-outcomes', data: data7, desk: desk7, mob: mob7 },
  { p: 'section-08-registration', data: data8, desk: desk8, mob: mob8 }
];

sections.forEach(sec => {
  writeFile(`${sec.p}/data/data.tsx`, sec.data);
  writeFile(`${sec.p}/desktop/desktop.tsx`, sec.desk);
  writeFile(`${sec.p}/mobile/mobile.tsx`, sec.mob);
});

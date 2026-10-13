import raviKumarImg from "../../../assets/experts/ravi_kumar.jpg";

export const data = {
  title: "Choose Session, Date & Time",
  subtitle: "Select duration, date & available time slot to reserve your live 1-on-1 real estate mock.",
  durations: [
    {
      id: "30",
      duration: "30 MIN",
      label: "Quick Practice",
      desc: "One focused objection session + rapid structured evaluation",
      price: "₹999",
      amount: 999,
      recommended: false,
      features: ["1 Realistic Scenario", "Instant Scorecard", "Audio/Video Google Meet"],
    },
    {
      id: "45",
      duration: "45 MIN",
      label: "Focused Practice",
      desc: "Multi-round mock simulation + in-depth rubrics & feedback",
      price: "₹1,399",
      amount: 1399,
      recommended: true,
      features: ["2 Realistic Scenarios", "Detailed Rubric Scorecard", "Actionable Improvement Plan", "Session Recording"],
    },
    {
      id: "60",
      duration: "60 MIN",
      label: "Deep Mastery",
      desc: "Comprehensive stress simulation + strategic role-play review",
      price: "₹1,799",
      amount: 1799,
      recommended: false,
      features: ["Full Scenario Playbook", "High-pressure Objections", "Comprehensive Mentoring", "Recorded Session + Playbook"],
    },
  ],
  scenarios: [
    { id: "sc-1", title: "Handling a Price Objection", tag: "Most Popular", desc: "Customer claims budget mismatch or requests 15% discount" },
    { id: "sc-2", title: "Negotiation & Discount Requests", tag: "Closing", desc: "Closing the token amount without losing developer margins" },
    { id: "sc-3", title: "First-Time Homebuyer Pitch", tag: "Consultative", desc: "Building trust & addressing loan / possession timeline fears" },
    { id: "sc-4", title: "Site Visit Closing & Urgency", tag: "High-Ticket", desc: "Converting site visit hesitation into an immediate spot booking" },
    { id: "sc-5", title: "Skeptical Investor / ROI Challenge", tag: "Commercial/Plots", desc: "Defending rental yields & capital appreciation potential" },
  ],
  dates: [
    { label: "Today", date: "10 Oct", day: "Sat", slotsCount: 2, badge: "Filling fast" },
    { label: "Tomorrow", date: "11 Oct", day: "Sun", slotsCount: 5, badge: "Popular" },
    { label: "Mon, 12 Oct", date: "12 Oct", day: "Mon", slotsCount: 6, badge: "Available" },
    { label: "Tue, 13 Oct", date: "13 Oct", day: "Tue", slotsCount: 4, badge: "Available" },
    { label: "Wed, 14 Oct", date: "14 Oct", day: "Wed", slotsCount: 5, badge: "Available" },
    { label: "Thu, 15 Oct", date: "15 Oct", day: "Thu", slotsCount: 3, badge: "Available" },
  ],
  timeSlots: [
    {
      period: "Morning",
      icon: "sun",
      slots: [
        { time: "10:00 AM", status: "Filling fast" },
        { time: "11:30 AM", status: "Available" },
      ],
    },
    {
      period: "Afternoon",
      icon: "cloud-sun",
      slots: [
        { time: "2:00 PM", status: "Available" },
        { time: "3:30 PM", status: "Popular" },
      ],
    },
    {
      period: "Evening",
      icon: "moon",
      slots: [
        { time: "5:30 PM", status: "Available" },
        { time: "6:30 PM", status: "Recommended" },
        { time: "7:30 PM", status: "Filling fast" },
        { time: "8:30 PM", status: "Available" },
      ],
    },
  ],
  defaultExpert: {
    name: "Ravi Kumar",
    image: raviKumarImg,
    role: "Sales Manager · Residential Real Estate",
    experience: "12+ Years Experience",
    age: 38,
    verified: true,
    sessionsCompleted: 126,
    rating: "4.9",
    languages: ["English", "Telugu", "Hindi"],
    specialisedIn: ["Residential Sales", "Customer Handling", "Negotiation", "Objection Handling"],
  },
  defaultCandidate: {
    name: "Arjun Verma",
    age: 27,
    experience: "2 Years in Real Estate Sales",
    currentRole: "Sales Executive · Residential",
    targetGoal: "Master Price Objection & Negotiation",
    email: "arjun.verma@example.com",
    phone: "+91 98765 43210",
  },
};

export function getExpertDurationPrice(expertPrice?: string | null, durationId?: string | null) {
  if (!expertPrice || !durationId) return null;
  const base = parseInt(expertPrice.replace(/[^\d]/g, ""), 10) || 999;
  if (durationId === "30") {
    return { price: `₹${base.toLocaleString("en-IN")}`, amount: base };
  }
  if (durationId === "45") {
    const p45 = Math.round((base * 1.4) / 10) * 10 - 1;
    return { price: `₹${p45.toLocaleString("en-IN")}`, amount: p45 };
  }
  if (durationId === "60") {
    const p60 = Math.round((base * 1.8) / 10) * 10 - 1;
    return { price: `₹${p60.toLocaleString("en-IN")}`, amount: p60 };
  }
  return { price: `₹${base.toLocaleString("en-IN")}`, amount: base };
}

export const data = {
  title: "Book Your Mock Session",
  subtitle: "Select your session duration, date & time slot to schedule your 1-on-1 practice.",
  durations: [
    {
      id: "30",
      duration: "30 MIN",
      label: "Quick Practice",
      desc: "One focused mock + instant feedback",
      price: "₹999",
      amount: 999,
      recommended: false,
    },
    {
      id: "45",
      duration: "45 MIN",
      label: "Focused Practice",
      desc: "One or more mocks + detailed structured feedback",
      price: "₹1,399",
      amount: 1399,
      recommended: true,
    },
    {
      id: "60",
      duration: "60 MIN",
      label: "Deep Practice",
      desc: "Multiple mock attempts + comprehensive feedback & guide",
      price: "₹1,799",
      amount: 1799,
      recommended: false,
    },
  ],
  dates: [
    { label: "Today", date: "10 Oct", day: "Sat" },
    { label: "Tomorrow", date: "11 Oct", day: "Sun" },
    { label: "Mon, 12 Oct", date: "12 Oct", day: "Mon" },
    { label: "Tue, 13 Oct", date: "13 Oct", day: "Tue" },
    { label: "Wed, 14 Oct", date: "14 Oct", day: "Wed" },
  ],
  timeSlots: [
    {
      period: "Morning",
      slots: ["10:00 AM", "11:30 AM"],
    },
    {
      period: "Afternoon",
      slots: ["2:00 PM", "3:30 PM"],
    },
    {
      period: "Evening",
      slots: ["5:30 PM", "6:30 PM", "7:30 PM"],
    },
  ],
  defaultScenario: "Handling a Price Objection",
  defaultExpert: {
    name: "Ravi Kumar",
    role: "Sales Manager · Residential",
    experience: "12+ Years Experience",
  },
  whatHappens: [
    { phase: "Before session", desc: "Review scenario briefs & buyer personas." },
    { phase: "During session", desc: "Expert acts as real buyer & conducts mock role-play." },
    { phase: "After session", desc: "Receive structured feedback & practice recommendations." },
  ],
};

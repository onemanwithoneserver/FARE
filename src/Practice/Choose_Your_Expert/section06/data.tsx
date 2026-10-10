export interface CompareExpert {
  name: string;
  role: string;
  image: string;
  values: string[];
}

export const data = {
  title: "Compare Experts",
  subtitle: "For learners who are unsure, allow comparison of up to 3 experts side-by-side.",
  criteria: [
    "RE Experience",
    "Segment",
    "Expertise",
    "This Scenario",
    "Mock Sessions",
    "Languages",
    "30 min Price",
    "Availability"
  ],
  allExperts: [
    {
      name: "Ravi Kumar",
      role: "Sales Manager · Residential",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      values: ["12+ yrs", "Residential", "Sales & Negotiation", "✓", "126 Sessions", "English, Telugu, Hindi", "₹999", "Today · 6:30 PM"]
    },
    {
      name: "Suresh Rao",
      role: "Channel Partner · Plotted Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      values: ["9+ yrs", "Plotted Development", "Sales & Investment", "✓", "84 Sessions", "English, Telugu", "₹799", "Tomorrow · 10:00 AM"]
    },
    {
      name: "Anita Desai",
      role: "Senior Consultant · Commercial",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
      values: ["15+ yrs", "Commercial Spaces", "B2B Sales & Leasing", "✓", "210 Sessions", "English, Hindi, Marathi", "₹1,499", "Today · 4:00 PM"]
    },
    {
      name: "Mohammad Ali",
      role: "Team Lead · Premium Residential",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300",
      values: ["8+ yrs", "Luxury Villas & NRI", "High-ticket Sales", "✓", "142 Sessions", "English, Hindi, Urdu", "₹1,199", "Tomorrow · 2:00 PM"]
    },
    {
      name: "Priya Sharma",
      role: "Sales Executive · Apartments",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
      values: ["5+ yrs", "Apartments", "First-time Buyers & CX", "✓", "56 Sessions", "English, Hindi", "₹599", "Today · 8:00 PM"]
    }
  ]
};

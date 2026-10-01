export const profileData = {
  id: "rajesh-kumar",
  initials: "RK",
  name: "Rajesh Kumar",
  title: "Real Estate Sales & Capability Trainer",
  positioningStatement: "Helping real estate organizations build high-performing sales teams through practical, field-tested capability programs.",
  isVerified: true,
  badges: [
    { icon: "industry", text: "15+ Years Industry Experience" },
    { icon: "training", text: "8+ Years Training Experience" },
    { icon: "users", text: "500+ Professionals Trained" },
    { icon: "location", text: "Hyderabad, Telangana" },
    { icon: "language", text: "English · Telugu · Hindi" }
  ],
  status: {
    label: "Available for Corporate Training",
    color: "green",
    notice: "Booking notice: 7 Days"
  },
  about: {
    text: "Rajesh has over 15 years of deep industry experience across residential and plotted real estate markets, followed by 8+ years of professional training practice. He designs and delivers structured capability programs for real estate sales teams, channel partner networks and new associates.",
    quote: '"Specialises in sales capability development for residential and plotted real estate teams."',
    stats: [
      { value: "15+ Years", label: "Industry Experience" },
      { value: "8+ Years", label: "Training Experience" },
      { value: "XX+", label: "Professionals Trained" },
      { value: "XX+", label: "Teams Trained" }
    ]
  },
  expertise: [
    {
      category: "SALES SKILLS",
      skills: [
        { name: "Lead Management", level: "Advanced" },
        { name: "Customer Profiling", level: "Advanced" },
        { name: "Sales Pitch", level: "Expert" },
        { name: "Objection Handling", level: "Advanced" },
        { name: "Negotiation", level: "Intermediate" },
        { name: "Follow up", level: "Advanced" },
        { name: "Closing", level: "Expert" },
        { name: "Channel Partner Management", level: "Intermediate" }
      ]
    },
    {
      category: "COMMUNICATION",
      skills: [
        { name: "Business Communication", level: "Advanced" },
        { name: "Presentation Skills", level: "Advanced" },
        { name: "Customer Communication", level: "Advanced" },
        { name: "Negotiation Communication", level: "Intermediate" }
      ]
    },
    {
      category: "LEADERSHIP & MANAGEMENT",
      skills: [
        { name: "Team Management", level: "Intermediate" },
        { name: "Performance Management", level: "Intermediate" },
        { name: "Coaching", level: "Advanced" },
        { name: "Delegation", level: "Beginner" }
      ]
    }
  ],
  segments: [
    {
      name: "RESIDENTIAL",
      items: ["Apartments", "Villas", "Gated Communities", "Affordable Housing", "Resale"]
    },
    {
      name: "PLOTTED DEVELOPMENT",
      items: ["Open Plots", "Gated Plots", "Layouts", "Plot Sales", "Investment-oriented Plots"]
    },
    {
      name: "COMMERCIAL",
      items: ["Office", "Commercial Leasing"]
    },
    {
      name: "GENERIC REAL ESTATE",
      items: ["Real Estate Fundamentals", "Industry Orientation"]
    }
  ],
  programs: [
    {
      title: "Residential Sales Mastery",
      description: "A comprehensive program designed to equip residential sales teams with end-to-end sales lifecycle skills.",
      audience: "New & Mid-Level Sales Execs",
      skillLevel: "Intermediate",
      duration: "2-Day Workshop",
      mode: "Online / Offline",
      format: "Workshop",
      topics: ["Lead Management", "Pitching", "Closing"],
      link: "#"
    },
    {
      title: "Real Estate Negotiation",
      description: "Advanced negotiation strategies focusing on value selling, objection handling, and closing deals.",
      audience: "Senior Sales Execs",
      skillLevel: "Advanced",
      duration: "Half-Day Session",
      mode: "Online / Offline",
      format: "Live Course",
      topics: ["Negotiation", "Objection Handling", "Value Selling"],
      link: "#"
    },
    {
      title: "Sales Team Mock Practice",
      description: "Simulated role-play sessions with structured feedback for immediate performance improvement.",
      audience: "Sales Teams",
      skillLevel: "All Levels",
      duration: "3 Sessions",
      mode: "Online / Offline",
      format: "Mock",
      topics: ["Role Plays", "Feedback", "Practical Application"],
      link: "#"
    },
    {
      title: "Plotted Development Sales",
      description: "Specialized training for plotted development sales, covering investment angles and plot specific objections.",
      audience: "Channel Partners & Execs",
      skillLevel: "Intermediate",
      duration: "Full-Day Workshop",
      mode: "Offline",
      format: "Workshop",
      topics: ["Plot Sales", "Investment Pitch", "Site Visits"],
      link: "#"
    }
  ],
  methodology: {
    tags: ["Instructor-led", "Interactive", "Role Plays", "Mock Calls", "Case Studies", "Real-world Scenarios", "Feedback-led", "Assessments"],
    quote: '"My programs combine short concept sessions with role plays, real-world cases, mock customer interactions and structured feedback. Every program is tailored to the team\'s segment and experience level."',
    quoteAuthor: "Rajesh Kumar",
    formats: [
      { name: "Workshops", description: "Structured half-day or full-day sessions with framework delivery and group activities." },
      { name: "Mocks", description: "Practical simulations, role plays and guided practice with instant feedback." },
      { name: "Full Day", description: "Intensive full-day programs with concept delivery, practice and assessment." },
      { name: "Coaching", description: "One-on-one or small group capability coaching with structured follow-up." },
      { name: "Custom Programs", description: "Bespoke multi-session programs designed around the team's specific requirements." }
    ]
  },
  experienceTimeline: [
    { year: "2023", company: "ABC Realty", team: "Residential Sales Team", program: "Sales Capability Workshop" },
    { year: "2024", company: "XYZ Developers", team: "Channel Partner Network", program: "Plotted Development Sales" },
    { year: "2024", company: "PQR Group", team: "New Associate Batch", program: "Real Estate Fundamentals" },
    { year: "2025", company: "MNO Builders", team: "Leadership Team", program: "Performance Coaching Program" }
  ],
  delivery: {
    modes: [
      { name: "Online Live", description: "Live virtual sessions via video platform.", icon: "video" },
      { name: "Offline / Classroom", description: "In-person training at company premises or venue.", icon: "building" },
      { name: "Blended", description: "Combination of online and in-person sessions.", icon: "blend" },
      { name: "Online Recorded", description: "Recorded modules for self-paced consumption.", icon: "play", disabled: true }
    ],
    locations: ["Hyderabad", "Telangana", "Pan India", "Online"],
    formats: ["Workshop", "Live Course", "Bootcamp", "Mock", "Mentoring"],
    durations: ["Half Day", "Full Day", "3 Days", "6 Weeks"]
  },
  investment: {
    pricing: {
      title: "Pricing on Request",
      subtitle: "Pricing is discussed based on team size, format and program requirements."
    },
    minimumEngagement: {
      title: "Half Day",
      options: ["Half Day", "Full Day", "Multi Day", "Custom"],
      selected: "Half Day"
    },
    pricingBasis: ["Per Session", "Per Day", "Custom Program"],
    footerNote: "Exact pricing is shared after FARE reviews your training requirement."
  },
  videos: [
    { title: "Trainer Introduction", duration: "01:30", thumbnail: "navy" },
    { title: "Sample Training", duration: "02:45", thumbnail: "gray" },
    { title: "Mock Demonstration", duration: "07:15", thumbnail: "gray" },
    { title: "Course Preview", duration: "01:10", thumbnail: "gray" }
  ],
  learnerAudience: [
    { title: "New Associates", description: "Foundational sales skills for new real estate agents." },
    { title: "Senior Sales Execs", description: "Advanced negotiation and closure techniques." },
    { title: "Channel Partners", description: "Relationship and network management strategies." }
  ],
  caseStudies: [
    {
      title: "150% Increase in Conversions",
      client: "ABC Realty",
      domain: "Sales Skills",
      segment: "Residential",
      audience: "New Associates",
      duration: "2 Weeks",
      challenge: "The sales team was struggling with low site visit conversions and poor follow-up techniques.",
      approach: "Implemented a structured objection handling framework and mock call sessions to build confidence.",
      outcome: "Significant spike in site visits and a 150% increase in final conversions within 3 months.",
      metrics: ["150% Conversion Increase", "30% Shorter Sales Cycle"]
    },
    {
      title: "Reduced Sales Cycle",
      client: "XYZ Developers",
      domain: "Negotiation",
      segment: "Plotted Development",
      audience: "Senior Sales Execs",
      duration: "3 Days",
      challenge: "High drop-off rate during final negotiations due to unstructured discounting.",
      approach: "Conducted intensive negotiation workshops focusing on value-selling rather than price-selling.",
      outcome: "Reduced the average closing time by 30% and improved profit margins.",
      metrics: ["30% Faster Closing", "15% Margin Improvement"]
    }
  ],
  trainingImpact: {
    metrics: [
      { value: "30%", name: "Average increase in sales conversion rates", source: "Post-training assessment" },
      { value: "4.8/5", name: "Average participant feedback score", source: "Learner feedback forms" },
      { value: "50+", name: "Corporate teams successfully trained", source: "Verified by FARE" }
    ],
    counts: [
      { value: "25+", label: "Organisations Trained" },
      { value: "120+", label: "Programs Delivered" }
    ]
  },
  credentials: [
    "Certified Real Estate Trainer by FARE",
    "Advanced Sales Management Certification",
    "Mastering Communication Strategies"
  ]
};

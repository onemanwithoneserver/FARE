import { useLanguage, type Language } from "../context/LanguageContext";

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
      title: "Doubling Site-Visit Conversions for a Residential Launch",
      client: "ABC Realty",
      domain: "Sales Skills",
      segment: "Residential",
      audience: "New Associates",
      teamSize: "32 Sales Executives",
      duration: "2 Weeks · 6 Sessions",
      program: "Residential Sales Mastery",
      challenge: "A newly assembled sales team of 32 executives was struggling with low site-visit to booking conversions (under 8%) and poor structured follow-up, causing the developer to miss quarterly targets ahead of a key project launch.",
      approach: "Designed a 6-session blended program covering customer profiling, structured objection handling, a 3-step follow-up cadence, and intensive mock call drills with recorded feedback. Each session was followed by on-floor coaching.",
      metrics: [
        { label: "Conversion Lift", value: "150%", sub: "Site-visit to booking" },
        { label: "Sales Cycle", value: "−30%", sub: "Faster average close" },
        { label: "Feedback Score", value: "4.9/5", sub: "Participant rating" },
      ],
      tags: ["Objection Handling", "Mock Drills", "Follow-up Cadence", "On-floor Coaching"],
    },
    {
      title: "Value-Based Negotiation for a Plotted Developer",
      client: "XYZ Developers",
      domain: "Negotiation",
      segment: "Plotted Development",
      audience: "Senior Sales Execs",
      teamSize: "18 Senior Executives",
      duration: "3 Days Intensive",
      program: "Real Estate Negotiation Bootcamp",
      challenge: "Senior sales executives were heavily reliant on discount-led closures, eroding margins by an average of 12% per deal. Unstructured discounting was creating pricing inconsistency across the sales floor.",
      approach: "Ran a 3-day intensive negotiation bootcamp focusing on value articulation, anchor pricing techniques, and structured concession models. Role-play scenarios used real client objections from the team's pipeline.",
      metrics: [
        { label: "Close Speed", value: "30%", sub: "Faster average closure" },
        { label: "Margin Recovery", value: "15%", sub: "Per-deal improvement" },
        { label: "Repeat Bookings", value: "+22%", sub: "Within 6 months" },
      ],
      tags: ["Value Selling", "Anchor Pricing", "Concession Models", "Role Plays"],
    },
    {
      title: "Onboarding Program for a Channel Partner Network",
      client: "PQR Group",
      domain: "Industry Orientation",
      segment: "Residential & Plotted",
      audience: "Channel Partners",
      teamSize: "55 Channel Partners",
      duration: "4 Days · Multi-Batch",
      program: "Channel Partner Capability Program",
      challenge: "A rapidly growing channel partner network lacked consistent product knowledge, pitch quality, and compliance awareness, resulting in misrepresentation and customer complaints post-booking.",
      approach: "Created a multi-batch 4-day onboarding curriculum covering project fundamentals, compliance do's and don'ts, site-visit conduct, and structured customer pitching. Delivered across 3 batches with certification assessment.",
      metrics: [
        { label: "Certification Rate", value: "94%", sub: "Partners certified" },
        { label: "Complaint Drop", value: "−60%", sub: "Post-training period" },
        { label: "Active Partners", value: "+40%", sub: "Active within 90 days" },
      ],
      tags: ["Compliance", "Product Knowledge", "Pitch Training", "Certification"],
    },
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

const profileTranslations: Record<string, string> = {
  "Real Estate Sales & Capability Trainer": "రియల్ ఎస్టేట్ సేల్స్ & సామర్థ్య శిక్షకుడు",
  "Helping real estate organizations build high-performing sales teams through practical, field-tested capability programs.": "ప్రాక్టికల్‌గా పరీక్షించిన సామర్థ్య కార్యక్రమాల ద్వారా అధిక పనితీరు కనబరిచే సేల్స్ టీమ్‌లను నిర్మించడంలో రియల్ ఎస్టేట్ సంస్థలకు సహాయం.",
  "15+ Years Industry Experience": "15+ సంవత్సరాల పరిశ్రమ అనుభవం",
  "8+ Years Training Experience": "8+ సంవత్సరాల శిక్షణ అనుభవం",
  "500+ Professionals Trained": "500+ నిపుణులకు శిక్షణ",
  "English · Telugu · Hindi": "ఇంగ్లీష్ · తెలుగు · హిందీ",
  "Available for Corporate Training": "కార్పొరేట్ శిక్షణకు అందుబాటులో ఉన్నారు",
  "Booking notice: 7 Days": "బుకింగ్‌కు 7 రోజుల ముందస్తు సమాచారం",
  "Rajesh has over 15 years of deep industry experience across residential and plotted real estate markets, followed by 8+ years of professional training practice. He designs and delivers structured capability programs for real estate sales teams, channel partner networks and new associates.": "రాజేష్‌కు నివాస మరియు ప్లాట్‌ అభివృద్ధి రియల్ ఎస్టేట్ మార్కెట్లలో 15 సంవత్సరాలకు పైగా పరిశ్రమ అనుభవం, అలాగే 8+ సంవత్సరాల వృత్తిపరమైన శిక్షణ అనుభవం ఉంది. రియల్ ఎస్టేట్ సేల్స్ టీమ్‌లు, ఛానల్ పార్టనర్ నెట్‌వర్క్‌లు మరియు కొత్త అసోసియేట్‌ల కోసం నిర్మాణాత్మక సామర్థ్య కార్యక్రమాలను రూపొందించి అందిస్తారు.",
  '"Specialises in sales capability development for residential and plotted real estate teams."': '"నివాస మరియు ప్లాట్‌ అభివృద్ధి రియల్ ఎస్టేట్ టీమ్‌ల సేల్స్ సామర్థ్య అభివృద్ధిలో ప్రత్యేకత."',
  "Industry Experience": "పరిశ్రమ అనుభవం",
  "Training Experience": "శిక్షణ అనుభవం",
  "Professionals Trained": "శిక్షణ పొందిన నిపుణులు",
  "Teams Trained": "శిక్షణ పొందిన టీమ్‌లు",
  "SALES SKILLS": "సేల్స్ నైపుణ్యాలు",
  "COMMUNICATION": "కమ్యూనికేషన్",
  "LEADERSHIP & MANAGEMENT": "నాయకత్వం & నిర్వహణ",
  "Lead Management": "లీడ్ నిర్వహణ",
  "Customer Profiling": "కస్టమర్ ప్రొఫైలింగ్",
  "Sales Pitch": "సేల్స్ పిచ్",
  "Objection Handling": "అభ్యంతరాల నిర్వహణ",
  "Negotiation": "చర్చలు",
  "Follow up": "ఫాలో-అప్",
  "Closing": "డీల్ ముగింపు",
  "Channel Partner Management": "ఛానల్ పార్టనర్ నిర్వహణ",
  "Business Communication": "వ్యాపార కమ్యూనికేషన్",
  "Presentation Skills": "ప్రెజెంటేషన్ నైపుణ్యాలు",
  "Customer Communication": "కస్టమర్ కమ్యూనికేషన్",
  "Negotiation Communication": "చర్చల కమ్యూనికేషన్",
  "Team Management": "టీమ్ నిర్వహణ",
  "Performance Management": "పనితీరు నిర్వహణ",
  "Coaching": "కోచింగ్",
  "Delegation": "బాధ్యతల అప్పగింత",
  "Expert": "నిపుణ స్థాయి",
  "Advanced": "అధునాతన స్థాయి",
  "Intermediate": "మధ్యంతర స్థాయి",
  "Beginner": "ప్రారంభ స్థాయి",
  "RESIDENTIAL": "నివాస రియల్ ఎస్టేట్",
  "PLOTTED DEVELOPMENT": "ప్లాట్ అభివృద్ధి",
  "COMMERCIAL": "వాణిజ్య రియల్ ఎస్టేట్",
  "GENERIC REAL ESTATE": "సాధారణ రియల్ ఎస్టేట్",
  "Apartments": "అపార్ట్‌మెంట్‌లు",
  "Villas": "విల్లాలు",
  "Gated Communities": "గేటెడ్ కమ్యూనిటీలు",
  "Affordable Housing": "అందుబాటు ధరల గృహాలు",
  "Resale": "రీ సేల్",
  "Open Plots": "ఓపెన్ ప్లాట్‌లు",
  "Gated Plots": "గేటెడ్ ప్లాట్‌లు",
  "Layouts": "లేఅవుట్‌లు",
  "Plot Sales": "ప్లాట్ సేల్స్",
  "Investment-oriented Plots": "పెట్టుబడి లక్ష్యిత ప్లాట్‌లు",
  "Office": "ఆఫీస్",
  "Commercial Leasing": "వాణిజ్య లీజింగ్",
  "Real Estate Fundamentals": "రియల్ ఎస్టేట్ ప్రాథమిక అంశాలు",
  "Industry Orientation": "పరిశ్రమ పరిచయం",
  "Residential Sales Mastery": "రెసిడెన్షియల్ సేల్స్‌లో నైపుణ్యం",
  "A comprehensive program designed to equip residential sales teams with end-to-end sales lifecycle skills.": "రెసిడెన్షియల్ సేల్స్ టీమ్‌లకు సేల్స్ ప్రక్రియలోని ప్రతి దశకు అవసరమైన నైపుణ్యాలను అందించే సమగ్ర కార్యక్రమం.",
  "New & Mid-Level Sales Execs": "కొత్త మరియు మధ్యస్థాయి సేల్స్ ఎగ్జిక్యూటివ్‌లు",
  "2-Day Workshop": "2-రోజుల వర్క్‌షాప్",
  "Online / Offline": "ఆన్‌లైన్ / ప్రత్యక్షంగా",
  "Workshop": "వర్క్‌షాప్",
  "Pitching": "పిచింగ్",
  "Real Estate Negotiation": "రియల్ ఎస్టేట్ చర్చల నైపుణ్యం",
  "Advanced negotiation strategies focusing on value selling, objection handling, and closing deals.": "విలువ ఆధారిత విక్రయం, అభ్యంతరాల నిర్వహణ మరియు డీల్ ముగింపుపై దృష్టి సారించే అధునాతన చర్చల వ్యూహాలు.",
  "Senior Sales Execs": "సీనియర్ సేల్స్ ఎగ్జిక్యూటివ్‌లు",
  "Half-Day Session": "అర్ధ-రోజు సెషన్",
  "Live Course": "లైవ్ కోర్స్",
  "Value Selling": "విలువ ఆధారిత విక్రయం",
  "Sales Team Mock Practice": "సేల్స్ టీమ్ మాక్ ప్రాక్టీస్",
  "Simulated role-play sessions with structured feedback for immediate performance improvement.": "పనితీరును వెంటనే మెరుగుపరచేందుకు నిర్మాణాత్మక ఫీడ్‌బ్యాక్‌తో మాక్ రోల్-ప్లే సెషన్‌లు.",
  "Sales Teams": "సేల్స్ టీమ్‌లు",
  "3 Sessions": "3 సెషన్‌లు",
  "Mock": "మాక్ సెషన్",
  "Role Plays": "రోల్-ప్లేలు",
  "Feedback": "ఫీడ్‌బ్యాక్",
  "Practical Application": "ప్రాక్టికల్ అమలు",
  "Plotted Development Sales": "ప్లాట్ అభివృద్ధి సేల్స్",
  "Specialized training for plotted development sales, covering investment angles and plot specific objections.": "పెట్టుబడి కోణాలు మరియు ప్లాట్‌లకు సంబంధించిన అభ్యంతరాలను కవర్ చేసే ప్లాట్ అభివృద్ధి సేల్స్ ప్రత్యేక శిక్షణ.",
  "Channel Partners & Execs": "ఛానల్ పార్టనర్‌లు మరియు ఎగ్జిక్యూటివ్‌లు",
  "Full-Day Workshop": "పూర్తి-రోజు వర్క్‌షాప్",
  "Offline": "ప్రత్యక్షంగా",
  "Investment Pitch": "పెట్టుబడి పిచ్",
  "Site Visits": "సైట్ సందర్శనలు",
  "Instructor-led": "శిక్షకుని ఆధ్వర్యంలో",
  "Interactive": "ఇంటరాక్టివ్",
  "Mock Calls": "మాక్ కాల్‌లు",
  "Case Studies": "కేస్ స్టడీలు",
  "Real-world Scenarios": "వాస్తవ ప్రపంచ సందర్భాలు",
  "Feedback-led": "ఫీడ్‌బ్యాక్ ఆధారిత",
  "Assessments": "అంచనాలు",
  '"My programs combine short concept sessions with role plays, real-world cases, mock customer interactions and structured feedback. Every program is tailored to the team\'s segment and experience level."': '"నా కార్యక్రమాల్లో చిన్న కాన్సెప్ట్ సెషన్‌లు, రోల్-ప్లేలు, వాస్తవ కేసులు, మాక్ కస్టమర్ సంభాషణలు మరియు నిర్మాణాత్మక ఫీడ్‌బ్యాక్ ఉంటాయి. ప్రతి కార్యక్రమాన్ని టీమ్ విభాగం మరియు అనుభవ స్థాయికి అనుగుణంగా రూపొందిస్తాను."',
  "Workshops": "వర్క్‌షాప్‌లు",
  "Structured half-day or full-day sessions with framework delivery and group activities.": "ఫ్రేమ్‌వర్క్ వివరణ మరియు గ్రూప్ కార్యకలాపాలతో కూడిన నిర్మాణాత్మక అర్ధ-రోజు లేదా పూర్తి-రోజు సెషన్‌లు.",
  "Mocks": "మాక్ సెషన్‌లు",
  "Practical simulations, role plays and guided practice with instant feedback.": "తక్షణ ఫీడ్‌బ్యాక్‌తో ప్రాక్టికల్ సిమ్యులేషన్‌లు, రోల్-ప్లేలు మరియు మార్గదర్శక ప్రాక్టీస్.",
  "Full Day": "పూర్తి రోజు",
  "Intensive full-day programs with concept delivery, practice and assessment.": "కాన్సెప్ట్ వివరణ, ప్రాక్టీస్ మరియు అంచనాలతో కూడిన సమగ్ర పూర్తి-రోజు కార్యక్రమాలు.",
  "One-on-one or small group capability coaching with structured follow-up.": "నిర్మాణాత్మక ఫాలో-అప్‌తో వ్యక్తిగత లేదా చిన్న గ్రూప్ సామర్థ్య కోచింగ్.",
  "Custom Programs": "కస్టమ్ కార్యక్రమాలు",
  "Bespoke multi-session programs designed around the team's specific requirements.": "టీమ్ నిర్దిష్ట అవసరాలకు అనుగుణంగా రూపొందించిన ప్రత్యేక మల్టీ-సెషన్ కార్యక్రమాలు.",
  "Residential Sales Team": "రెసిడెన్షియల్ సేల్స్ టీమ్",
  "Sales Capability Workshop": "సేల్స్ సామర్థ్య వర్క్‌షాప్",
  "Channel Partner Network": "ఛానల్ పార్టనర్ నెట్‌వర్క్",
  "New Associate Batch": "కొత్త అసోసియేట్ బ్యాచ్",
  "Performance Coaching Program": "పనితీరు కోచింగ్ కార్యక్రమం",
  "Online Live": "ఆన్‌లైన్ లైవ్",
  "Live virtual sessions via video platform.": "వీడియో ప్లాట్‌ఫామ్ ద్వారా లైవ్ వర్చువల్ సెషన్‌లు.",
  "Offline / Classroom": "ప్రత్యక్షంగా / తరగతి గదిలో",
  "In-person training at company premises or venue.": "కంపెనీ కార్యాలయం లేదా ఎంపిక చేసిన వేదికలో ప్రత్యక్ష శిక్షణ.",
  "Blended": "ఆన్‌లైన్ మరియు ప్రత్యక్ష శిక్షణ కలయిక",
  "Combination of online and in-person sessions.": "ఆన్‌లైన్ మరియు ప్రత్యక్ష సెషన్‌ల కలయిక.",
  "Online Recorded": "రికార్డ్ చేసిన ఆన్‌లైన్ శిక్షణ",
  "Recorded modules for self-paced consumption.": "స్వీయ వేగంతో నేర్చుకునేందుకు రికార్డ్ చేసిన మాడ్యూల్‌లు.",
  "Hyderabad": "హైదరాబాద్",
  "Telangana": "తెలంగాణ",
  "Pan India": "భారతదేశవ్యాప్తంగా",
  "Bootcamp": "బూట్‌క్యాంప్",
  "Mentoring": "మెంటరింగ్",
  "Half Day": "అర్ధ రోజు",
  "3 Days": "3 రోజులు",
  "6 Weeks": "6 వారాలు",
  "Pricing on Request": "ధర వివరాలకు సంప్రదించండి",
  "Pricing is discussed based on team size, format and program requirements.": "టీమ్ పరిమాణం, ఫార్మాట్ మరియు కార్యక్రమ అవసరాల ఆధారంగా ధర నిర్ణయించబడుతుంది.",
  "Multi Day": "బహుళ రోజులు",
  "Custom": "కస్టమ్",
  "Per Session": "ప్రతి సెషన్‌కు",
  "Per Day": "ప్రతి రోజుకు",
  "Custom Program": "కస్టమ్ కార్యక్రమం",
  "Exact pricing is shared after FARE reviews your training requirement.": "FARE మీ శిక్షణ అవసరాన్ని సమీక్షించిన తర్వాత ఖచ్చితమైన ధరను తెలియజేస్తుంది.",
  "Trainer Introduction": "శిక్షకుని పరిచయం",
  "Sample Training": "శిక్షణ నమూనా",
  "Mock Demonstration": "మాక్ ప్రదర్శన",
  "Course Preview": "కోర్స్ ప్రివ్యూ",
  "New Associates": "కొత్త అసోసియేట్‌లు",
  "Foundational sales skills for new real estate agents.": "కొత్త రియల్ ఎస్టేట్ ఏజెంట్‌లకు అవసరమైన ప్రాథమిక సేల్స్ నైపుణ్యాలు.",
  "Advanced negotiation and closure techniques.": "అధునాతన చర్చలు మరియు డీల్ ముగింపు పద్ధతులు.",
  "Channel Partners": "ఛానల్ పార్టనర్‌లు",
  "Relationship and network management strategies.": "సంబంధాలు మరియు నెట్‌వర్క్ నిర్వహణ వ్యూహాలు.",
  "Doubling Site-Visit Conversions for a Residential Launch": "రెసిడెన్షియల్ లాంచ్‌లో సైట్ విజిట్ కన్వర్షన్‌లను రెట్టింపు చేయడం",
  "32 Sales Executives": "32 సేల్స్ ఎగ్జిక్యూటివ్‌లు",
  "2 Weeks · 6 Sessions": "2 వారాలు · 6 సెషన్‌లు",
  "A newly assembled sales team of 32 executives was struggling with low site-visit to booking conversions (under 8%) and poor structured follow-up, causing the developer to miss quarterly targets ahead of a key project launch.": "కొత్తగా ఏర్పాటైన 32 మంది ఎగ్జిక్యూటివ్‌ల సేల్స్ టీమ్‌లో సైట్ విజిట్ నుంచి బుకింగ్ కన్వర్షన్‌లు తక్కువగా (8% కంటే తక్కువగా) ఉన్నాయి. క్రమబద్ధమైన ఫాలో-అప్ లేకపోవడంతో కీలక ప్రాజెక్ట్ లాంచ్‌కు ముందు త్రైమాసిక లక్ష్యాలు చేరలేదు.",
  "Designed a 6-session blended program covering customer profiling, structured objection handling, a 3-step follow-up cadence, and intensive mock call drills with recorded feedback. Each session was followed by on-floor coaching.": "కస్టమర్ ప్రొఫైలింగ్, క్రమబద్ధమైన అభ్యంతరాల నిర్వహణ, 3-దశల ఫాలో-అప్ విధానం మరియు రికార్డ్ చేసిన ఫీడ్‌బ్యాక్‌తో మాక్ కాల్ ప్రాక్టీస్‌ను కవర్ చేసే 6 సెషన్‌ల బ్లెండెడ్ కార్యక్రమాన్ని రూపొందించారు. ప్రతి సెషన్ తర్వాత ఫ్లోర్ కోచింగ్ అందించారు.",
  "Conversion Lift": "కన్వర్షన్ పెరుగుదల",
  "Site-visit to booking": "సైట్ విజిట్ నుంచి బుకింగ్",
  "Sales Cycle": "సేల్స్ సైకిల్",
  "Faster average close": "సగటు డీల్ త్వరగా ముగింపు",
  "Feedback Score": "ఫీడ్‌బ్యాక్ స్కోర్",
  "Participant rating": "పాల్గొన్న వారి రేటింగ్",
  "Mock Drills": "మాక్ ప్రాక్టీస్",
  "Follow-up Cadence": "ఫాలో-అప్ విధానం",
  "On-floor Coaching": "ఫ్లోర్ కోచింగ్",
  "Value-Based Negotiation for a Plotted Developer": "ప్లాట్ డెవలపర్ కోసం విలువ ఆధారిత చర్చలు",
  "18 Senior Executives": "18 మంది సీనియర్ ఎగ్జిక్యూటివ్‌లు",
  "3 Days Intensive": "3 రోజుల సమగ్ర శిక్షణ",
  "Real Estate Negotiation Bootcamp": "రియల్ ఎస్టేట్ చర్చల బూట్‌క్యాంప్",
  "Senior sales executives were heavily reliant on discount-led closures, eroding margins by an average of 12% per deal. Unstructured discounting was creating pricing inconsistency across the sales floor.": "సీనియర్ సేల్స్ ఎగ్జిక్యూటివ్‌లు డిస్కౌంట్‌ల ఆధారంగా డీల్‌లు ముగించడంతో ఒక్కో డీల్‌పై మార్జిన్ సగటున 12% తగ్గింది. క్రమబద్ధత లేని డిస్కౌంట్‌ల వల్ల సేల్స్ టీమ్‌లో ధరల అసమానత ఏర్పడింది.",
  "Ran a 3-day intensive negotiation bootcamp focusing on value articulation, anchor pricing techniques, and structured concession models. Role-play scenarios used real client objections from the team's pipeline.": "విలువను వివరించడం, యాంకర్ ప్రైసింగ్ పద్ధతులు మరియు క్రమబద్ధమైన రాయితీ నమూనాలపై దృష్టి సారించి 3 రోజుల చర్చల బూట్‌క్యాంప్ నిర్వహించారు. టీమ్ పైప్‌లైన్‌లోని నిజమైన క్లయింట్ అభ్యంతరాలతో రోల్-ప్లేలు నిర్వహించారు.",
  "Close Speed": "డీల్ ముగింపు వేగం",
  "Faster average closure": "సగటు డీల్ త్వరగా ముగింపు",
  "Margin Recovery": "మార్జిన్ పునరుద్ధరణ",
  "Per-deal improvement": "ప్రతి డీల్‌లో మెరుగుదల",
  "Repeat Bookings": "మళ్లీ వచ్చిన బుకింగ్‌లు",
  "Within 6 months": "6 నెలల్లో",
  "Anchor Pricing": "యాంకర్ ప్రైసింగ్",
  "Concession Models": "రాయితీ నమూనాలు",
  "Onboarding Program for a Channel Partner Network": "ఛానల్ పార్టనర్ నెట్‌వర్క్ కోసం ఆన్‌బోర్డింగ్ కార్యక్రమం",
  "Residential & Plotted": "రెసిడెన్షియల్ & ప్లాట్ అభివృద్ధి",
  "55 Channel Partners": "55 ఛానల్ పార్టనర్‌లు",
  "4 Days · Multi-Batch": "4 రోజులు · బహుళ బ్యాచ్‌లు",
  "Channel Partner Capability Program": "ఛానల్ పార్టనర్ సామర్థ్య కార్యక్రమం",
  "A rapidly growing channel partner network lacked consistent product knowledge, pitch quality, and compliance awareness, resulting in misrepresentation and customer complaints post-booking.": "వేగంగా విస్తరిస్తున్న ఛానల్ పార్టనర్ నెట్‌వర్క్‌లో ఉత్పత్తి పరిజ్ఞానం, పిచ్ నాణ్యత మరియు నియమాలపై అవగాహనలో ఏకరూపత లేదు. దాంతో తప్పుగా వివరించడం, బుకింగ్ తర్వాత కస్టమర్ ఫిర్యాదులు వచ్చాయి.",
  "Created a multi-batch 4-day onboarding curriculum covering project fundamentals, compliance do's and don'ts, site-visit conduct, and structured customer pitching. Delivered across 3 batches with certification assessment.": "ప్రాజెక్ట్ ప్రాథమికాలు, నియమ నిబంధనలు, సైట్ విజిట్ ప్రవర్తన మరియు క్రమబద్ధమైన కస్టమర్ పిచింగ్‌ను కవర్ చేసే 4-రోజుల బహుళ-బ్యాచ్ ఆన్‌బోర్డింగ్ పాఠ్యక్రమాన్ని రూపొందించారు. సర్టిఫికేషన్ అంచనాతో 3 బ్యాచ్‌లకు అందించారు.",
  "Certification Rate": "సర్టిఫికేషన్ రేటు",
  "Partners certified": "సర్టిఫై అయిన పార్టనర్‌లు",
  "Complaint Drop": "ఫిర్యాదుల తగ్గుదల",
  "Post-training period": "శిక్షణ అనంతర కాలం",
  "Active Partners": "యాక్టివ్ పార్టనర్‌లు",
  "Active within 90 days": "90 రోజుల్లో యాక్టివ్",
  "Product Knowledge": "ఉత్పత్తి పరిజ్ఞానం",
  "Pitch Training": "పిచ్ శిక్షణ",
  "Certification": "సర్టిఫికేషన్",
  "Average increase in sales conversion rates": "సేల్స్ కన్వర్షన్ రేట్లలో సగటు పెరుగుదల",
  "Post-training assessment": "శిక్షణ అనంతర అంచనా",
  "Average participant feedback score": "పాల్గొన్న వారి సగటు ఫీడ్‌బ్యాక్ స్కోర్",
  "Learner feedback forms": "నేర్చుకున్న వారి ఫీడ్‌బ్యాక్ ఫారమ్‌లు",
  "Corporate teams successfully trained": "విజయవంతంగా శిక్షణ పొందిన కార్పొరేట్ టీమ్‌లు",
  "Verified by FARE": "FARE ద్వారా ధృవీకరించబడింది",
  "Organisations Trained": "శిక్షణ పొందిన సంస్థలు",
  "Programs Delivered": "అందించిన కార్యక్రమాలు",
  "Certified Real Estate Trainer by FARE": "FARE సర్టిఫై చేసిన రియల్ ఎస్టేట్ ట్రైనర్",
  "Advanced Sales Management Certification": "అధునాతన సేల్స్ మేనేజ్‌మెంట్ సర్టిఫికేషన్",
  "Mastering Communication Strategies": "కమ్యూనికేషన్ వ్యూహాల్లో నైపుణ్యం",
  "Home": "హోమ్",
  "Directory": "డైరెక్టరీ",
  "Trainer Directory": "ట్రైనర్ డైరెక్టరీ",
  "Trainer Profile": "ట్రైనర్ ప్రొఫైల్",
  "FARE Verified": "FARE ధృవీకరించింది",
  "Industry Exp.": "పరిశ్రమ అనుభవం",
  "Training Exp.": "శిక్షణ అనుభవం",
  "Trained": "శిక్షణ పొందిన వారు",
  "Areas of Expertise": "నైపుణ్య రంగాలు",
  "Real Estate Segment": "రియల్ ఎస్టేట్ విభాగం",
  "Expertise": "నైపుణ్యం",
  "Learner": "నేర్చుకునేవారు",
  "Learner Audience": "శిక్షణ పొందే వర్గం",
  "Training": "శిక్షణ",
  "Language": "భాష",
  "English": "ఇంగ్లీష్",
  "Primary Language": "ప్రధాన భాష",
  "Secondary Languages": "ఇతర భాషలు",
  "Experience & Track Record": "అనుభవం & పని రికార్డు",
  "Experience &amp; Track Record": "అనుభవం & పని రికార్డు",
  "Selected Engagements": "ఎంచుకున్న శిక్షణ కార్యక్రమాలు",
  "Training Delivery": "శిక్షణ అందించే విధానం",
  "Training Durations": "శిక్షణ వ్యవధులు",
  "Training Formats": "శిక్షణ ఫార్మాట్‌లు",
  "Training Expertise": "శిక్షణ నైపుణ్యం",
  "Training Impact": "శిక్షణ ప్రభావం",
  "Training Investment": "శిక్షణ పెట్టుబడి",
  "Training Methodology": "శిక్షణ విధానం",
  "Training Programs": "శిక్షణ కార్యక్రమాలు",
  "Introduction Video": "పరిచయ వీడియో",
  "Introductory Video": "పరిచయ వీడియో",
  "Key Topics": "ప్రధాన అంశాలు",
  "Measurable outcomes from completed training engagements.": "పూర్తయిన శిక్షణ కార్యక్రమాల కొలవగల ఫలితాలు.",
  "See the Trainer in Action": "శిక్షణ ఇస్తున్న ట్రైనర్‌ను చూడండి",
  "NEW": "కొత్తది",
  "Audio Snippets": "ఆడియో క్లిప్‌లు",
  "Coming Soon": "త్వరలో",
  "Popular": "ప్రాచుర్యం పొందినది",
  "Credentials": "అర్హతలు",
  "Credential": "అర్హత",
  "Credentials & Qualifications": "అర్హతలు & ధృవపత్రాలు",
  "A selection of professional credentials and certifications listed on the trainer profile.": "ట్రైనర్ ప్రొఫైల్‌లో పేర్కొన్న వృత్తిపరమైన అర్హతలు మరియు సర్టిఫికేషన్‌ల ఎంపిక.",
  "Company Feedback": "కంపెనీ ఫీడ్‌బ్యాక్",
  "Feedback Pending": "ఫీడ్‌బ్యాక్ కోసం వేచి ఉంది",
  "Verified company feedback and testimonials will automatically appear here once training engagements are completed and reviewed.": "శిక్షణ కార్యక్రమాలు పూర్తై, సమీక్షించిన తర్వాత ధృవీకరించిన కంపెనీ ఫీడ్‌బ్యాక్ మరియు ప్రశంసలు ఇక్కడ కనిపిస్తాయి.",
  "Real outcomes from real engagements.": "నిజమైన శిక్షణ కార్యక్రమాల వాస్తవ ఫలితాలు.",
  "Real outcomes from real training engagements — anonymised with client consent.": "క్లయింట్ అనుమతితో పేర్లు వెల్లడించకుండా అందించిన వాస్తవ శిక్షణ ఫలితాలు.",
  "Watch Case Study": "కేస్ స్టడీని చూడండి",
  "The Challenge": "సవాలు",
  "The Approach": "అనుసరించిన విధానం",
  "Transparent engagement models tailored to your team\u0027s requirements.": "మీ టీమ్ అవసరాలకు అనుగుణంగా రూపొందించిన పారదర్శక శిక్షణ నమూనాలు.",
  "Minimum Engagement": "కనీస శిక్షణ వ్యవధి",
  "Pricing": "ధర",
  "Pricing Basis": "ధర నిర్ణయించే విధానం",
  "Request Pricing": "ధర వివరాలు కోరండి",
  "Corporate Request": "కార్పొరేట్ అభ్యర్థన",
  "Corporate Request Form": "కార్పొరేట్ అభ్యర్థన ఫారం",
  "Fill out the details below.": "దయచేసి క్రింది వివరాలను నమోదు చేయండి.",
  "Fill out the details below to initiate a training request.": "శిక్షణ అభ్యర్థనను ప్రారంభించడానికి క్రింది వివరాలను నమోదు చేయండి.",
  "Organisation Name": "సంస్థ పేరు",
  "Enter company name": "కంపెనీ పేరును నమోదు చేయండి",
  "Training Requirement": "శిక్షణ అవసరం",
  "e.g. Sales Capability Workshop": "ఉదా: సేల్స్ సామర్థ్య వర్క్‌షాప్",
  "Audience": "శిక్షణ పొందే వర్గం",
  "Freshers": "కొత్తగా చేరినవారు",
  "Sales Executives": "సేల్స్ ఎగ్జిక్యూటివ్‌లు",
  "Managers": "మేనేజర్‌లు",
  "Leadership": "నాయకత్వ స్థాయి",
  "Select Audience": "శిక్షణ పొందే వర్గాన్ని ఎంచుకోండి",
  "Participants": "పాల్గొనేవారు",
  "Participants (Approx)": "పాల్గొనేవారు (సుమారు)",
  "e.g. 20": "ఉదా: 20",
  "Preferred Format": "కావలసిన ఫార్మాట్",
  "Preferred Format (Multiple)": "కావలసిన ఫార్మాట్ (ఒకటి కంటే ఎక్కువ ఎంచుకోవచ్చు)",
  "Mock Sessions": "మాక్ సెషన్‌లు",
  "Preferred Mode": "కావలసిన శిక్షణ విధానం",
  "Preferred Date": "కావలసిన తేదీ",
  "Select Date": "తేదీని ఎంచుకోండి",
  "Location / Venue": "ప్రదేశం / వేదిక",
  "City or Office location": "నగరం లేదా కార్యాలయ ప్రదేశం",
  "Additional Message (Optional)": "అదనపు సందేశం (ఐచ్ఛికం)",
  "Message (Optional)": "సందేశం (ఐచ్ఛికం)",
  "Describe any specific requirements or focus areas for the training...": "శిక్షణకు సంబంధించిన ప్రత్యేక అవసరాలు లేదా దృష్టి పెట్టాల్సిన అంశాలను వివరించండి...",
  "Specific requirements...": "ప్రత్యేక అవసరాలను నమోదు చేయండి...",
  "Submit Request": "అభ్యర్థనను సమర్పించండి",
  "Request submitted successfully.": "అభ్యర్థన విజయవంతంగా సమర్పించబడింది.",
  "Please complete all required fields.": "అవసరమైన అన్ని వివరాలను పూరించండి.",
  "Please enter a valid number of participants.": "పాల్గొనేవారి సంఖ్యను సరిగ్గా నమోదు చేయండి.",
  "Please select at least one preferred format.": "కనీసం ఒక శిక్షణ ఫార్మాట్‌ను ఎంచుకోండి.",
  "Real Estate": "రియల్ ఎస్టేట్",
  "Segment Expertise": "విభాగ నైపుణ్యం",
  "Source": "మూలం",
  "Please enter your organisation name.": "దయచేసి మీ సంస్థ పేరును నమోదు చేయండి.",
  "Please describe the training requirement.": "దయచేసి శిక్షణ అవసరాన్ని వివరించండి.",
  "Please choose an audience and enter a valid participant count.": "దయచేసి శిక్షణ పొందే వర్గాన్ని ఎంచుకుని, పాల్గొనేవారి సంఖ్యను సరిగ్గా నమోదు చేయండి.",
  "Please provide a location or venue.": "దయచేసి ప్రదేశం లేదా వేదికను నమోదు చేయండి.",
  "Thank you. Your request has been submitted.": "ధన్యవాదాలు. మీ అభ్యర్థన సమర్పించబడింది."
};

function translateValue(value: unknown): unknown {
  if (typeof value === "string") return profileTranslations[value] ?? value;
  if (Array.isArray(value)) return value.map(translateValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, translateValue(entry)])
    );
  }
  return value;
}

export function getProfileData(language: Language = "en") {
  return language === "te" ? translateValue(profileData) as typeof profileData : profileData;
}

export function useProfileData() {
  const { language } = useLanguage();
  return getProfileData(language);
}

export function useProfileText() {
  const { language } = useLanguage();
  return (text: string) => translateProfileText(text, language);
}

export function translateProfileText(text: string, language: Language) {
  return language === "te" ? profileTranslations[text] ?? text : text;
}

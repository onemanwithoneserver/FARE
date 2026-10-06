export const data = {
  hero: {
    title: "FARE Live Mock Sessions",
    subtitle: "Practise Real Estate. With Real People.",
    description: "Learn how to handle real-world real estate situations by practising them live with experienced real estate professionals.\n\nChoose a scenario. Select an expert. Book a session. Practise live. Get feedback.",
    cta: "Explore Mock Scenarios",
    secondaryCta: "Become a Mock Expert",
    supportingLine: "30 · 45 · 60 Minute Sessions | Online via Google Meet | Real Scenarios | Expert Feedback",
  },
  problem: {
    title: "You Can't Learn Every Real Estate Situation From a Course",
    description: "Real estate is full of situations where knowing what to do is very different from actually doing it.",
    points: [
      {
        title: "You know the answer — but struggle to say it",
        desc: "You understand objection handling, but freeze when the customer pushes back.",
      },
      {
        title: "You have experience — but want to practise a difficult situation",
        desc: "You want to prepare before handling a high-value customer or difficult negotiation.",
      },
      {
        title: "You're entering real estate and don't have enough situations to practise",
        desc: "You need a safe environment to make mistakes before making them with real customers.",
      },
      {
        title: "You don't get enough feedback",
        desc: "Real customer interactions do not always give you a clear understanding of what you did right or wrong.",
      },
      {
        title: "Training sessions aren't always available when you need them",
        desc: "Sometimes you need to practise one specific situation, not attend another full-day training programme.",
      },
    ],
    closingLine: "What if you could simply choose the situation you want to practise and find someone who can practise it with you?",
  },
  solution: {
    title: "A Marketplace for Real Estate Practice",
    description: "FARE connects learners with real estate subject experts who can conduct live mock sessions around specific real-world situations.",
    parties: [
      {
        title: "Learners",
        desc: "Real estate professionals, aspirants, channel partners, agents, freelancers, managers and others can choose the situations they want to practise.",
      },
      {
        title: "Mock Experts",
        desc: "Experienced real estate professionals, working professionals, agents and subject experts can offer their expertise as mock-session experts.",
      },
      {
        title: "Together",
        desc: "They connect online for a structured practice session where the expert plays the role of the customer, manager, channel partner or another relevant stakeholder.",
      },
    ],
  },
  howItWorks: {
    title: "Choose. Book. Practise. Improve.",
    steps: [
      { step: "01", title: "Choose a Scenario", desc: "Browse real estate situations you want to practise." },
      { step: "02", title: "Select an Expert", desc: "See experts who offer practice for that particular scenario. Compare experience, role, expertise, real estate segment, scenarios offered, languages, availability and session pricing." },
      { step: "03", title: "Book Your Session", desc: "Choose 30 Minutes, 45 Minutes or 60 Minutes." },
      { step: "04", title: "Join Online", desc: "Receive the session details and connect with the expert through Google Meet." },
      { step: "05", title: "Practise Live", desc: "The expert acts as Customer, Manager, Channel Partner, Prospect or another stakeholder while the learner responds as they would in the real world." },
      { step: "06", title: "Get Feedback", desc: "The expert shares feedback on performance, communication, approach and areas for improvement." },
    ],
    coreFlow: "SCENARIO → EXPERT → BOOK → PRACTISE → FEEDBACK",
  },
  browseScenarios: {
    title: "What Do You Want to Practise?",
    description: "Interactive scenario discovery section.",
    categories: [
      { title: "Sales Scenarios", items: ["Prospecting", "Lead Qualification", "Need Analysis", "Product Presentation", "Site Visit", "Objection Handling", "Negotiation", "Closing", "Follow-up", "Lost Lead Recovery", "Price Discussion", "Discount Request", "Competitor Comparison"] },
      { title: "Customer Scenarios", items: ["Difficult Customer", "Complaint Handling", "Escalation", "Expectation Management", "Communication Breakdown", "Documentation Issue", "Possession Delay", "Service Recovery"] },
      { title: "Channel Partner Scenarios", items: ["CP Onboarding", "Lead Ownership", "CP Conflict", "Commission Discussion", "CP Motivation", "CP Relationship Management"] },
      { title: "Managerial Scenarios", items: ["Team Conflict", "Underperformance", "Target Pressure", "Coaching", "Delegation", "Team Motivation", "Performance Review", "Attrition", "Accountability"] },
      { title: "Leadership Scenarios", items: ["Decision Making", "Crisis Management", "Conflict Resolution", "Communication", "Change Management", "Team Leadership"] },
      { title: "Professional Scenarios", items: ["Workplace Communication", "Time Management", "Prioritisation", "Professional Etiquette", "Stakeholder Management"] },
    ],
  },
  scenarioDetail: {
    title: "Handling a Price Objection",
    scenarioType: "Sales Scenario",
    practiceRole: "Customer",
    duration: "30 / 45 / 60 Minutes",
    situation: "The customer likes the property but believes the price is too high and is comparing it with another project.",
    whatYouWillPractise: ["Understanding the customer's concern", "Responding to the objection", "Communicating value", "Handling price comparison", "Moving the conversation forward"],
    expertWill: "Act as the customer and respond based on the conversation.",
    youWill: "Handle the conversation as you would with a real customer.",
    cta: "Find Experts for This Scenario",
  },
  meetExperts: {
    title: "Practise With People Who Know the Situation",
    categories: [
      { title: "Working Real Estate Professionals", desc: "People currently handling real situations in the industry." },
      { title: "Real Estate Agents & Channel Partners", desc: "People experienced in customer conversations, negotiations and transactions." },
      { title: "Managers & Leaders", desc: "People who can simulate managerial and leadership situations." },
      { title: "Subject Experts", desc: "Professionals with deep expertise in specific functions or situations." },
    ],
    expertCard: {
      fields: ["Photo", "Name", "Current Role / Experience", "Real Estate Segment", "Experience", "Expertise", "Can Practise", "Languages", "Session Price"],
      ctas: ["View Profile →", "Book Session →"],
    },
    verificationNote: "FARE Verified should mean profile/identity/experience verification where applicable — not that FARE guarantees the expert's coaching quality.",
  },
  chooseSession: {
    title: "Practice as Much as You Can in Your Session",
    sessions: [
      { duration: "30 Minutes", label: "Quick Practice", desc: "Ideal for practising one focused situation." },
      { duration: "45 Minutes", label: "Focused Practice", desc: "Practise one scenario in greater depth or work through more than one related situation." },
      { duration: "60 Minutes", label: "Deep Practice", desc: "Use the session to practise multiple scenarios or repeat a difficult situation with feedback." },
    ],
    note: "Your session time is yours. Depending on the duration and complexity, you can practise more than one mock during a session.",
  },
  duringSession: {
    title: "It's Not a Video Class. It's a Practice Session.",
    phases: [
      {
        title: "Before the Session",
        desc: "You know the scenario, your role, the expert's role and what you are expected to practise.",
      },
      {
        title: "During the Session",
        desc: "The expert acts as Customer / Manager / CP / Stakeholder. The learner responds as they would in the real world. The expert can challenge the learner, ask questions, introduce objections and respond naturally.",
      },
      {
        title: "After the Mock — Expert Feedback",
        desc: "What you did well · Where you struggled · How you communicated · What you could have done differently · What to practise next",
      },
    ],
    practiceFlow: "BRIEF → ROLE PLAY → CHALLENGE → RESPONSE → FEEDBACK",
  },
  multiplePractice: {
    title: "Don't Stop After One Attempt.",
    description: "A 60-minute session could allow you to practise, receive feedback, attempt the scenario again and then use remaining time for another related scenario.",
    flow: "Attempt 1 → Feedback → Attempt 2 → Feedback → Scenario 2",
  },
  whoIsThisFor: {
    title: "Practice for Every Stage of Your Real Estate Journey",
    roles: [
      { title: "Aspirants & Freshers", desc: "Practise before facing real customers." },
      { title: "Real Estate Employees", desc: "Improve specific skills and prepare for difficult situations." },
      { title: "Channel Partners & Agents", desc: "Sharpen customer handling, negotiation and closing." },
      { title: "Freelancers", desc: "Build confidence in real-world conversations." },
      { title: "Managers", desc: "Practise team conversations, coaching and performance situations." },
      { title: "Leaders", desc: "Prepare for difficult leadership and business situations." },
      { title: "Anyone Entering a New Role", desc: "Practise the situations you are likely to encounter." },
    ],
  },
  segments: {
    title: "Practise the Real Estate You Work In",
    items: [
      { title: "Residential", items: ["Apartments", "Villas", "Gated Communities", "Resale"] },
      { title: "Plotted Development", items: ["Open Plots", "Layouts", "Land Investment"] },
      { title: "Commercial", items: ["Office", "Retail", "High Street", "Leasing", "Pre-Leased"] },
      { title: "Other Real Estate", items: ["Property Management", "Industrial", "Warehousing", "Hospitality", "Other RE Services"] },
    ],
    note: "This can eventually become a filter when browsing experts and scenarios.",
  },
  whatYouGet: {
    title: "More Than a Mock Call",
    items: [
      { title: "Real-World Practice", desc: "Practise situations that actually occur in real estate." },
      { title: "Role-Based Simulation", desc: "The expert plays the stakeholder you need to handle." },
      { title: "Live Interaction", desc: "Respond in real time instead of selecting answers from a quiz." },
      { title: "Expert Feedback", desc: "Understand what worked and what needs improvement." },
      { title: "Repeat Practice", desc: "Try again after receiving feedback." },
      { title: "Flexible Sessions", desc: "Choose 30, 45 or 60 minutes." },
      { title: "Multiple Mocks", desc: "Use the available session time to practise more than one situation." },
    ],
  },
  learnerJourney: {
    title: "Choose. Book. Practise. Improve.",
    steps: [
      { step: "BROWSE", label: "Mock Scenarios" },
      { step: "SELECT", label: "Scenario Detail" },
      { step: "DISCOVER", label: "Available Experts" },
      { step: "COMPARE", label: "Expert Profiles" },
      { step: "BOOK", label: "30 / 45 / 60 Minutes" },
      { step: "CONNECT", label: "Google Meet" },
      { step: "PRACTISE", label: "Live Mock" },
      { step: "FEEDBACK", label: "Expert Feedback" },
      { step: "IMPROVE", label: "Practise Again" },
    ],
  },
  forExperts: {
    title: "Are You Good at Handling Real Estate Situations?",
    description: "Turn your real-world experience into practice sessions for other real estate professionals.",
    note: "You do not need to be a traditional trainer.",
    expertise: ["Customers", "Negotiations", "Sales", "Channel Partners", "Teams", "Leadership", "Digital", "Real Estate Operations"],
    youDecide: ["What scenarios you offer", "Which roles you can simulate", "Your available timings", "Session duration", "Your session fee"],
    cta: "Become a Mock Expert",
  },
  trustQuality: {
    title: "Practice With Confidence",
    items: [
      "Expert profile verification",
      "Experience information",
      "Scenario-specific expertise",
      "Ratings / learner feedback",
      "Session history",
      "Clear pricing",
      "Clear cancellation policy",
      "Google Meet session access",
      "Post-session feedback",
    ],
    note: "Do not use \"Top Expert\" or \"Best Expert\" rankings initially. Keep discovery structured around relevant expertise and experience.",
  },
  finalCta: {
    title: "Your Next Real Customer Conversation Could Be Easier.",
    description: "Don't wait for the real situation to test your skills.\nChoose a scenario. Find an expert. Practise it live.",
    sections: [
      { title: "For Learners", subtitle: "Find a Mock Session", cta: "Find a Mock Session →" },
      { title: "For Experts", subtitle: "Become a Mock Expert", cta: "Become a Mock Expert →" },
      { title: "For Companies", subtitle: "Create Mock Practice for Your Team", cta: "Create Mock Practice →" },
    ],
    positioning: {
      knowledgeBank: "Test your knowledge",
      mockTemplates: "Explore what you can practise",
      liveMockSessions: "Actually practise with a real person",
    },
    coreJourney: "KNOW → EXPLORE → PRACTISE → FEEDBACK → IMPROVE",
  },
};

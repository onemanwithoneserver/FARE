import reCompaniesHero from "../../assets/re_companies_hero.png";
import openPlotHero from "../../assets/openplot_hero.jpg";
import residentialHero from "../../assets/freelancers_residential_hero.jpg";
import employeesHero from "../../assets/employees_hero.jpg";
import coursesHero from "../../assets/courses_hero.jpg";
import commercialHero from "../../assets/bg-04.jpg";
import fareLogoSvg from "../../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";
import fareVideo from "../../assets/FARE_Video.mp4";

import sureshRaoImg from "../../assets/experts/suresh_rao.jpg";
import anitaDesaiImg from "../../assets/experts/anita_desai.jpg";
import raviKumarImg from "../../assets/experts/ravi_kumar.jpg";
import priyaSharmaImg from "../../assets/experts/priya_sharma.jpg";
import mohammadAliImg from "../../assets/experts/mohammad_ali.jpg";

export interface CompanyStat {
  id: string;
  label: string;
  value: string;
  accent: "indigo" | "gold" | "cyan" | "emerald";
}

export interface CompanyLogoBadge {
  id: string;
  name: string;
  code: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
}

export interface CompanyVideoItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  videoSrc: string;
  thumbnail: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  bio: string;
  credentials: string[];
}

export interface SuccessStoryItem {
  id: string;
  category: "Storefront" | "Channel Partner" | "Enterprise Desk";
  title: string;
  entityName: string;
  location: string;
  duration: string;
  challenge: string;
  outcome: string;
  quote: string;
  metrics: { label: string; value: string }[];
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  status: "Ongoing" | "Completed";
  segment: string;
  location: string;
  reraId: string;
  specs: string;
  progressPercent: number;
  handover: string;
  image: string;
}

export interface CareerOpening {
  id: string;
  role: string;
  department: "Sales & Closings" | "Channel Partners" | "Operations" | "Marketing";
  location: string;
  type: string;
  openings: number;
  compensation: string;
  preferredCourse: string;
  highlights: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

export const companyHeroData = {
  companyName: "Horizon Plots & Realty Developers",
  positioningStatement:
    "Backed by 14+ years of zero-litigation land development and RERA-compliant masterplanning, Horizon Plots empowers FARE-certified advisors and regional channel partners with direct developer token desks, transparent brokerage payouts, and institutional buyer trust.",
  location: "HITEC City, Hyderabad · Outer Ring Road Exits 6 to 9",
  reraMasterId: "TG-RERA · P02400004812",
  isVerified: true,
  heroImage: reCompaniesHero,
  logo: fareLogoSvg,
  stats: [
    { id: "exp", label: "Legacy", value: "14+ Yrs", accent: "indigo" },
    { id: "ventures", label: "Ventures", value: "42+", accent: "gold" },
    { id: "families", label: "Families", value: "6,500+", accent: "cyan" },
    { id: "partners", label: "Partners", value: "1,200+", accent: "emerald" },
  ] as CompanyStat[],
};

export const aboutUsData = {
  overviewTitle: "Engineering High-Appreciation Land & Urban Living",
  paragraphs: [
    "Founded in 2012, Horizon Plots & Realty Developers has transformed high-growth corridors along Hyderabad's Outer Ring Road (Exits 6 to 9), Shamirpet, Medchal, and Shadnagar into vibrant, litigation-free residential communities and commercial hubs.",
    "Through our direct developer liaison desk and FARE Partner Guild integration, trained real estate advisors gain direct access to bank-approved inventory (SBI, HDFC, ICICI), instant commission releases, and priority token allotment windows.",
  ],
  mission:
    "Deliver 100% clear-title land and sustainable gated communities while building India's highest-earning, most ethically trained channel partner network.",
  vision:
    "Set the national benchmark for transparent pre-launch mandates, rapid registration cycles, and institutional-grade plotted infrastructure.",
  partnerLogos: [
    { id: "l1", name: "HMDA Approved", code: "HMDA", category: "Statutory Authority" },
    { id: "l2", name: "DTCP & RERA Verified", code: "RERA", category: "Compliance" },
    { id: "l3", name: "SBI Project Sanctioned", code: "SBI", category: "Banking Partner" },
    { id: "l4", name: "HDFC Approved Venture", code: "HDFC", category: "Home Finance" },
    { id: "l5", name: "ISO 9001:2015 Quality", code: "ISO", category: "Governance" },
    { id: "l6", name: "FARE Verified Employer", code: "FARE", category: "Talent Guild" },
  ] as CompanyLogoBadge[],
  gallery: [
    {
      id: "g1",
      title: "Horizon Corporate Experience Center",
      caption: "Flagship 18,000 sq.ft digital walkthrough hub at HITEC City",
      image: reCompaniesHero,
    },
    {
      id: "g2",
      title: "Medchal Spine Mega Layout",
      caption: "60-ft blacktop avenues, underground cabling & clubhouses",
      image: openPlotHero,
    },
    {
      id: "g3",
      title: "Emerald Enclave Luxury Villas",
      caption: "Biophilic landscaped parks and sustainable rainwater grids",
      image: residentialHero,
    },
    {
      id: "g4",
      title: "Channel Partner Summit 2026",
      caption: "Annual felicitation for top 250 FARE-certified closing leaders",
      image: coursesHero,
    },
  ] as GalleryItem[],
  videos: [
    {
      id: "v1",
      title: "Company Overview & Growth Corridor Vision",
      subtitle: "Explore our masterplanning standards, legal clearance framework & partner desk",
      duration: "02:15",
      videoSrc: fareVideo,
      thumbnail: openPlotHero,
    },
    {
      id: "v2",
      title: "Inside the Partner Token Desk & Payout Engine",
      subtitle: "See how verified agents close bookings and receive 48-hour brokerage settlements",
      duration: "01:45",
      videoSrc: fareVideo,
      thumbnail: employeesHero,
    },
  ] as CompanyVideoItem[],
};

export const leadershipData: LeadershipMember[] = [
  {
    id: "lead-1",
    name: "Suresh Rao",
    role: "Founder & Managing Director",
    experience: "22+ Years in Urban Masterplanning",
    image: sureshRaoImg,
    bio: "Pioneered HMDA-compliant plotted ecosystems along North & South Hyderabad. Oversaw over 2,400 acres of clear-title land transformation.",
    credentials: ["Land Acquisition", "Town Planning", "Governance"],
  },
  {
    id: "lead-2",
    name: "Anita Desai",
    role: "Executive Director — Channel Sales",
    experience: "16+ Years in High-Ticket Sales",
    image: anitaDesaiImg,
    bio: "Architected the 1,200+ partner broker guild and direct FARE Academy talent pipeline, scaling monthly bookings by 3.4x.",
    credentials: ["Partner Network", "Closer Enablement", "Mandate Strategy"],
  },
  {
    id: "lead-3",
    name: "Ravi Kumar",
    role: "Chief Operating Officer & Legal Head",
    experience: "18+ Years in RERA & Title Law",
    image: raviKumarImg,
    bio: "Leads zero-litigation link-document audits, bank tie-up clearances (SBI/HDFC), and turnkey site civil engineering delivery.",
    credentials: ["TG-RERA Compliance", "Legal Due Diligence", "Bank Sanctions"],
  },
  {
    id: "lead-4",
    name: "Priya Sharma",
    role: "VP — Commercial & NRI Desk",
    experience: "13+ Years in Institutional Realty",
    image: priyaSharmaImg,
    bio: "Heads commercial retail mandates along ORR exits and manages high-net-worth NRI portfolio allocations across 9 countries.",
    credentials: ["NRI Desk", "Commercial Yields", "Portfolio Advisory"],
  },
];

export const successStoriesData: SuccessStoryItem[] = [
  {
    id: "ss-1",
    category: "Storefront",
    title: "Medchal Experience Center Hits ₹142 Cr Annual Run Rate",
    entityName: "Horizon Flagship Store — Medchal Highway",
    location: "Medchal · NH-44 Corridor",
    duration: "Q1–Q4 Performance",
    challenge:
      "Walk-in investors lacked transparent link-document previews and live plot availability matrices during weekend site drives.",
    outcome:
      "Deployed digital GIS plot boards and dedicated FARE-certified briefing specialists, cutting decision cycles from 21 days to 6 days.",
    quote:
      "Having instant title dossiers and 3D drone flythroughs inside the Medchal store boosted our weekend closing ratio past 38%.",
    metrics: [
      { label: "Plots Booked", value: "310 Units" },
      { label: "Site Conversion", value: "38.4%" },
      { label: "CSAT Score", value: "4.9 / 5" },
    ],
    image: openPlotHero,
  },
  {
    id: "ss-2",
    category: "Channel Partner",
    title: "FARE Certified Team Leader Scales Team to 18 Closers",
    entityName: "K. Vikramaditya (Senior Partner & Team Leader)",
    location: "Shamirpet & Exit 7 Cluster",
    duration: "9 Months Since Onboarding",
    challenge:
      "Independent associates struggled with structured prospecting scripts and consistent pre-launch closing velocity.",
    outcome:
      "Completed FARE Team Scale-Up Mastery, plugged into Horizon's Direct Liaison Desk, and crossed ₹2.1 Cr in cumulative team brokerage.",
    quote:
      "Direct token access plus FARE's structured closing frameworks helped my team close 46 prime corner plots inside three quarters.",
    metrics: [
      { label: "Plots Closed", value: "46 Units" },
      { label: "Avg Payout Time", value: "48 Hours" },
      { label: "Team Retention", value: "94%" },
    ],
    image: mohammadAliImg,
  },
  {
    id: "ss-3",
    category: "Enterprise Desk",
    title: "Zero-Wait Registration Rollout at Shamirpet Commercial Square",
    entityName: "Corporate & NRI Advisory Store — Jubilee Hills",
    location: "Jubilee Hills · Global NRI Desk",
    duration: "6 Months Launch Sprint",
    challenge:
      "Overseas investors required end-to-end virtual power-of-attorney coordination and verified bank sanction letters before token wiring.",
    outcome:
      "Standardized video walkthrough kits with pre-approved HDFC legal opinions, locking 100% of Phase-1 retail frontage slots.",
    quote:
      "Every single document is audited upfront—our NRI buyers booked multi-acre commercial parcels purely over guided live video sessions.",
    metrics: [
      { label: "Phase-1 Sold", value: "100%" },
      { label: "NRI Share", value: "44%" },
      { label: "Closure Speed", value: "2.3x Faster" },
    ],
    image: commercialHero,
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "prj-1",
    title: "Horizon Emerald Ridge",
    status: "Ongoing",
    segment: "HMDA Open Plots & Club Living",
    location: "ORR Exit 6 · Medchal Spine",
    reraId: "P02400005190",
    specs: "48 Acres · 165–400 Sq. Yds · 60-ft BT Roads",
    progressPercent: 72,
    handover: "Phase-2 Registration Open",
    image: openPlotHero,
  },
  {
    id: "prj-2",
    title: "The Aurelia Commercial Enclave",
    status: "Ongoing",
    segment: "Highway Retail & High-Street Plazas",
    location: "ORR Exit 8 · Shamirpet",
    reraId: "P02400005412",
    specs: "18 Acres · Corner Mixed-Use Parcels · EV Hubs",
    progressPercent: 58,
    handover: "Q3 2027 Possession",
    image: commercialHero,
  },
  {
    id: "prj-3",
    title: "Meadowbrook Biophilic Villas",
    status: "Ongoing",
    segment: "Triplex Gated Villa Community",
    location: "Kompally North Extension",
    reraId: "P02400004988",
    specs: "260–350 Sq. Yds · 3,400+ Sq.ft · IGBC Gold",
    progressPercent: 84,
    handover: "Model Villa Ready",
    image: residentialHero,
  },
  {
    id: "prj-4",
    title: "Horizon Pearl Meadows — Phase I",
    status: "Completed",
    segment: "DTCP / RERA Plotted Community",
    location: "Shadnagar Logistics Belt",
    reraId: "P02400003105",
    specs: "64 Acres · 420+ Plots Handed Over · 100% Sold",
    progressPercent: 100,
    handover: "Delivered · +68% Appreciation",
    image: reCompaniesHero,
  },
  {
    id: "prj-5",
    title: "Silver Oak Executive Greens",
    status: "Completed",
    segment: "Weekend Farmsteads & Gated Estates",
    location: "Chevella — Shankarpally Road",
    reraId: "P02400002840",
    specs: "52 Acres · Orchard Landscapes · Operational Club",
    progressPercent: 100,
    handover: "Delivered · 140+ Occupied",
    image: coursesHero,
  },
  {
    id: "prj-6",
    title: "Crestview IT Corridor Residences",
    status: "Completed",
    segment: "Mid-Rise Smart Apartments",
    location: "Tellapur — Nallagandla Link",
    reraId: "P02400002219",
    specs: "310 Units · 100% Occupancy Certificate Issued",
    progressPercent: 100,
    handover: "Delivered · OC Obtained",
    image: employeesHero,
  },
];

export const careersData: CareerOpening[] = [
  {
    id: "job-1",
    role: "Team Leader — Medchal Plotted Layouts",
    department: "Channel Partners",
    location: "Medchal & ORR Exit 6",
    type: "Full-Time / Mandate Partner",
    openings: 6,
    compensation: "₹65,000 Retainer + 3.0% Closer Bonus",
    preferredCourse: "Team Scale-Up Mastery",
    highlights: ["Direct Token Desk", "48-Hr Commission Settlement", "Dedicated Closing Manager"],
  },
  {
    id: "job-2",
    role: "Senior Property Advisor (Luxury Villas)",
    department: "Sales & Closings",
    location: "Kompally & HITEC City",
    type: "Full-Time",
    openings: 4,
    compensation: "₹7.5L – ₹12L Fixed + Incentives",
    preferredCourse: "Residential Sales Placement Program",
    highlights: ["Inbound HNI Leads", "Digital Experience Center Access", "SBI/HDFC Finance Support"],
  },
  {
    id: "job-3",
    role: "Commercial Leasing & Mandate Specialist",
    department: "Sales & Closings",
    location: "Shamirpet ORR Exit 8",
    type: "Full-Time",
    openings: 3,
    compensation: "₹9L – ₹15L Fixed + Yield Bonus",
    preferredCourse: "Commercial Leasing & Negotiation Fundamentals",
    highlights: ["Institutional Retail Accounts", "Direct Builder Liaising", "Quarterly Overseas Trips"],
  },
  {
    id: "job-4",
    role: "Partner Onboarding & Enablement Manager",
    department: "Operations",
    location: "HITEC City HQ",
    type: "Full-Time",
    openings: 2,
    compensation: "₹8L – ₹11L CTC",
    preferredCourse: "Recruitment Pitch & Onboarding Mastery",
    highlights: ["Lead 150+ Broker Cohort", "Training & Kit Provisioning", "Fast-Track Growth"],
  },
  {
    id: "job-5",
    role: "Site Activation & Event Coordinator",
    department: "Marketing",
    location: "Hyderabad North Zones",
    type: "Full-Time",
    openings: 3,
    compensation: "₹5.5L – ₹7.5L CTC",
    preferredCourse: "New-Age Team Structure Mastery",
    highlights: ["Weekend Investor Drives", "Drone & Media Showcase", "Cross-Zone Travel Allowance"],
  },
];

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    tag: "Mandate & Trust",
    question: "Are all Horizon Plots ventures HMDA/DTCP & RERA verified with bank loans?",
    answer:
      "Yes. Every flagship residential, commercial, and open-plot mandate carries valid statutory approvals (HMDA/DTCP and TG-RERA registration) along with pre-approved project sanctions from leading banks including SBI and HDFC for qualified buyers.",
  },
  {
    id: "faq-2",
    tag: "Brokerage & Payouts",
    question: "How does the 3.0% Closer Bonus and 48-hour payout cycle work for FARE partners?",
    answer:
      "Verified FARE advisors and partner team leaders registered through our Direct Liaison Desk receive transparent tiered brokerage plus an accelerated 3.0% closer bonus on milestone bookings. Payouts are processed within 48 hours of booking agreement execution and clearance.",
  },
  {
    id: "faq-3",
    tag: "Careers",
    question: "Do FARE learners get priority interviews for Team Leader & Advisor roles?",
    answer:
      "Yes. Candidates who complete recommended FARE courses such as Team Scale-Up Mastery or Residential Sales Placement Program receive a Verified Talent badge that fast-tracks them directly to our hiring panel without initial screening delays.",
  },
  {
    id: "faq-4",
    tag: "Site Visits",
    question: "What client support does the Direct Developer Liaison Desk provide during site visits?",
    answer:
      "Once a visit is scheduled via your partner RM, the buyer receives a curated printed & digital RERA dossier, GIS layout briefing at our Medchal or HITEC City experience centers, and on-site legal/engineering Q&A support.",
  },
  {
    id: "faq-5",
    tag: "Legal Assurance",
    question: "How can channel partners inspect 30-year link documents before pitching?",
    answer:
      "Registered partners get read-only access to our Legal Clear-Title Vault upon activating their partner code, including mother deeds, EC extracts, LP numbers, and bank legal opinions for instant buyer reassurance.",
  },
  {
    id: "faq-6",
    tag: "Scale-Up",
    question: "Can an existing brokerage agency onboard an entire team under Horizon?",
    answer:
      "Yes. Independent RERA-registered agencies and team leaders can onboard sub-brokers under an enterprise sub-code with pooled slab benefits, co-branded digital marketing collaterals, and dedicated booth days at our experience stores.",
  },
];

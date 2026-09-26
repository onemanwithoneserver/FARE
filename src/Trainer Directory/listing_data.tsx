export interface Trainer {
  id: string;
  name: string;
  title: string;
  verified: boolean;
  industryExperience: number;
  trainingExperience: number;
  positioning: string;
  expertise: string[];
  segments: string[];
  formats: string[];
  delivery: string[];
  location: string;
  languages: string[];
  pricing: string;
  availability: "Available" | "Limited Availability" | "On Request";
}

export const trainersData: Trainer[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    title: "Real Estate Sales & Capability Trainer",
    verified: true,
    industryExperience: 15,
    trainingExperience: 8,
    positioning: "Specialises in sales capability development for residential and plotted real estate teams.",
    expertise: ["Sales Skills", "Leadership", "Communication"],
    segments: ["Residential", "Plotted", "Commercial"],
    formats: ["Workshops", "Full Day", "Mocks"],
    delivery: ["Online", "Offline", "Blended"],
    location: "Hyderabad, Telangana",
    languages: ["English", "Telugu", "Hindi"],
    pricing: "Pricing on Request",
    availability: "Available"
  },
  {
    id: "2",
    name: "Priya Merida",
    title: "Digital & Communication Trainer",
    verified: true,
    industryExperience: 10,
    trainingExperience: 5,
    positioning: "Helps real estate teams build digital presence, generate leads and communicate value effectively.",
    expertise: ["Digital & Technology", "Communication", "Marketing"],
    segments: ["Residential", "Commercial"],
    formats: ["Workshops", "Half-Day", "Coaching"],
    delivery: ["Online", "Blended"],
    location: "Bangalore, Karnataka",
    languages: ["English", "Hindi", "Kannada"],
    pricing: "Starting from ₹XX,XXX",
    availability: "Available"
  },
  {
    id: "3",
    name: "Suresh Iyer",
    title: "Leadership & Team Performance Trainer",
    verified: false,
    industryExperience: 20,
    trainingExperience: 12,
    positioning: "Builds leadership capacity and team performance culture within large real estate organisations.",
    expertise: ["Leadership & Management", "Communication", "Functional Skills"],
    segments: ["Commercial", "Residential", "Corporate Real Estate"],
    formats: ["Bootcamps", "Full Day", "Mentoring"],
    delivery: ["Online", "Offline"],
    location: "Mumbai, Maharashtra",
    languages: ["English", "Hindi", "Marathi"],
    pricing: "Starting from ₹XX,XXX",
    availability: "Limited Availability"
  },
  {
    id: "4",
    name: "Ananya Reddy",
    title: "Plotted Development & Sales Trainer",
    verified: true,
    industryExperience: 12,
    trainingExperience: 6,
    positioning: "Deep expertise in plotted development sales — land, layouts and investment-oriented projects.",
    expertise: ["Sales Skills", "Product & Project Knowledge"],
    segments: ["Plotted", "Residential"],
    formats: ["Workshops", "Mocks", "Custom Programs"],
    delivery: ["Online", "Offline", "Blended"],
    location: "Hyderabad, Telangana",
    languages: ["English", "Telugu"],
    pricing: "Pricing on Request",
    availability: "Available"
  },
  {
    id: "5",
    name: "Vikram Nair",
    title: "Commercial Real Estate & Leasing Trainer",
    verified: false,
    industryExperience: 18,
    trainingExperience: 7,
    positioning: "Focused on commercial leasing, investment sales and enterprise client relationship management.",
    expertise: ["Sales Skills", "Product & Project Knowledge", "Communication"],
    segments: ["Commercial"],
    formats: ["Full Day", "Half-Day", "Coaching"],
    delivery: ["Online", "Offline"],
    location: "Chennai, Tamil Nadu",
    languages: ["English", "Tamil", "Hindi"],
    pricing: "Pricing on Request",
    availability: "On Request"
  },
  {
    id: "6",
    name: "Deepa Sharma",
    title: "Customer Experience & Luxury Sales Trainer",
    verified: true,
    industryExperience: 14,
    trainingExperience: 9,
    positioning: "Specialises in luxury real estate sales, premium customer experience and high-value client management.",
    expertise: ["Customer Experience", "Sales Skills", "Communication"],
    segments: ["Residential", "Commercial"],
    formats: ["Workshops", "Mocks", "Mentoring"],
    delivery: ["Online", "Offline", "Blended"],
    location: "Delhi, NCR",
    languages: ["English", "Hindi"],
    pricing: "Starting from ₹XX,XXX",
    availability: "Available"
  }
];

export const filterOptions = {
  expertise: ["Sales Skills", "Digital & Technology", "Communication", "Leadership & Management", "Customer Experience", "Marketing", "Product & Project Knowledge", "Functional Skills"],
  segments: ["Residential", "Plotted", "Commercial", "Corporate Real Estate"],
  formats: ["Workshops", "Half-Day", "Full Day", "Short Sessions", "Mocks", "Bootcamps", "Coaching", "Mentoring", "Custom Programs"],
  delivery: ["Online", "Offline", "Blended", "Online Recorded"],
  availability: ["Available", "Limited Availability", "On Request"],
  languages: ["English", "Telugu", "Hindi", "Other"]
};

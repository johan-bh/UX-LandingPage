// Import all the icons we need for collabApps
import { 
  light,
  noise,
  temperatures,
  webAnalytics,
  assessment,
  iot,
  sleep,
  getUp
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Integrations",
    url: "#features",
  },
  {
    id: "1",
    title: "Data Security",
    url: "#about",
  },
  {
    id: "2",
    title: "About Us",
    url: "#testimonials",
  },
  {
    id: "3",
    title: "Sign In",
    url: "/signin",
    onlyMobile: true,
  },
  {
    id: "4",
    title: "Sign Up",
    url: "/signup",
    highlight: true,
  },
];

// Add collaboration-related constants
export const collabContent = [
  {
    id: "0",
    title: "Hurtig og præcis dokumentation",
    text: "Automatisk generering af journalnotater baseret på konsultationen"
  },
  // Add more items as needed
];


export const collabText = "Your collaboration text here";


export const collabApps = [
  {
    id: "0",
    title: "Wind Down Routine",
    description: "Through our sleep assessment we will determine your chronotype to optimize sleep scheduling",
    icon: sleep,
    width: 34,
    height: 34,
  },
  {
    id: "1",
    title: "Wake Up",
    description: "Smoothly transition to a wakeful state through gradual introduction of ambient light & noise",
    icon: getUp,
    width: 34,
    height: 34,
  },
  {
    id: "2",
    title: "Temperature",
    description: "Our system will autoregulate the ambient room temperature for ideal sleeping conditions",
    icon: temperatures,
    width: 34,
    height: 34,
  },
  {
    id: "3",
    title: "Analytics",
    description: "Monitor your sleep hygiene and progress with our advanced dashboards",
    icon: webAnalytics,
    width: 34,
    height: 34,
  },
  {
    id: "4",
    title: "Assessment",
    description: "Through our sleep assessment we will determine your chronotype to optimize sleep scheduling",
    icon: assessment,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Integrate",
    description: "Integrate your smart devices",
    icon: iot,
    width: 34,
    height: 34,
  }
];
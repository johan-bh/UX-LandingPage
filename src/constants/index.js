// Import all the icons we need for collabApps
import { 
  light,
  noise,
  temperatures,
  webAnalytics,
  assessment,
  iot,
  sleep,
  getUp,
  smartLight
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
    title: "IoT Hub",
    description: "Our centralized hub for all your smart devices will sync to your schedule and preferences",
    icon: iot,
    width: 34,
    height: 34,
  },
  {
    id: "1",
    title: "Climate Control",
    description: "Our system will autoregulate the ambient room temperature. Gradual cooling in the evening and gradual warming in the morning",
    icon: temperatures,
    width: 34,
    height: 34,
  },
  {
    id: "2",
    title: "Smart Light",
    description: "Adaptive lighting that adjusts based on your sleep cycle and circadian rhythm. Shifts to red light in the evening and blue light in the morning",
    icon: smartLight,
    width: 34,
    height: 34,
  },
  {
    id: "3",
    title: "Wind Down Routine",
    description: "Through our sleep assessment, daily schedule & ongoing calibration we initiate a wind down routine to induce sleep",
    icon: sleep,
    width: 34,
    height: 34,
  },
  {
    id: "4",
    title: "Wake Up",
    description: "Smoothly transition to a wakeful state through gradual introduction of ambient light & noise based on schedule and sleep state",
    icon: getUp,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Calibration",
    description: "Our system continously calibrate and improve the processes based on key metrics",
    icon: webAnalytics,
    width: 34,
    height: 34,
  }
];
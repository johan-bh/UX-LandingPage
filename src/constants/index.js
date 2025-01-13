import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  mic,
  doc,
  aiBrain,
  cyberShield,
  noCloud,
  speechRecognition,
  clock,
  file02,
  stethoscope,
  framer,
  homeSmile,
  instagram,
  // notification2,
  // notification3,
  // notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  // roadmap1,
  // roadmap2,
  // roadmap3,
  // roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Hjem",
    url: "#hero",
  },
  {
    id: "1",
    title: "Funktionaliteter",
    url: "/how-it-works",
  },
  {
    id: "2",
    title: "Om os",
    url: "/about",
  },
  {
    id: "3",
    title: "FAQ",
    url: "/faqs",
  },
  {
    id: "4",
    title: "Gå til webapp",
    url: "https://app.dokudok.dk",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Tilmeld",
    url: "/signup",
    highlight: true
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

// export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Find specifik patientinformation på få sekunder",
  "Automatiske resuméer af journaler, epikriser og attester",
  "Problemfri integration med kliniksystemer",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

// export const roadmap = [
//   {
//     id: "0",
//     title: "Voice recognition",
//     text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
//     date: "May 2023",
//     status: "done",
//     imageUrl: roadmap1,
//     colorful: true,
//   },
//   {
//     id: "1",
//     title: "Gamification",
//     text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
//     date: "May 2023",
//     status: "progress",
//     imageUrl: roadmap2,
//   },
//   {
//     id: "2",
//     title: "Chatbot customization",
//     text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
//     date: "May 2023",
//     status: "done",
//     imageUrl: roadmap3,
//   },
//   {
//     id: "3",
//     title: "Integration with APIs",
//     text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
//     date: "May 2023",
//     status: "progress",
//     imageUrl: roadmap4,
//   },
// ];

export const collabText =
  "Uanset om du bruger WinPLC, Clinea eller noget helt tredje, så kan vores løsning nemt anvendes i parallel og kræver minimal opsætning. Send blot jeres frase og interne forkortelser, så sørger vi for resten. Vi tilbyder desuden et stort frasekartotek, som kan tilpasses jeres klinik.";

export const collabText2 = 
 "Automatisér journalføringen med state-of-the-art talegenkendelse, der transskriberer præcist og hurtigt samt generativ AI baseret på dine kliniks egne fraser og forkortetelser. Vælg mellem post-konsulation diktering eller fuld transkribering af konsultationer (med patientens samtykke). Med denne løsning kan du flytte fokus fra notesblokken til patienten og spare tid på dokumentation.";

export const collabText3 = "Med avanceret sikkerhed sikrer vi, at patientdata håndteres med den højeste standard for beskyttelse og compliance. Vi anvender de sikreste enkrypteringsmetoder, opbevarer alt data i Danmark og gør IKKE brug af hverken cloud eller andre tredjepartsløsninger.";

export const collabContent = [
  {
    id: "1",
    title: "Journalisering med AI-assisteret transskribering",
    text: "Vælg mellem diktering eller konsultationsmode og få dine optagelser journaliseret i realtid. Tilføj kontekst og noter direkte i journalen. Vores avancerede frasevælger med multiselect og logiske operatorer gør det nemt at registrere biomarkører, medikamenter og andre objektive metrikker.",
    features: [
      "Realtids-transskribering med høj præcision",
      "Valgfri diktering eller konsultationsmode",
      "Intelligent notetilføjelse og konteksthåndtering",
      "Avanceret frasevælger med multiselect",
      "Effektiv registrering af biomarkører og medikamenter"
    ]
  },
  {
    id: "2",
    title: "Attest Hjælperen - Intelligent attestgenerering",
    text: "Generér udkast til et bredt udvalg af standardattester, herunder LÆ-helbredsattester. Vores multimodale attesthjælper kan skabe attester baseret på noter, lyd, filupload eller en kombination - du vælger rækkefølgen og metoden.",
    features: [
      "Omfattende udvalg af standardattester",
      "Multimodal input-håndtering",
      "Fleksibel rækkefølge i attestgenerering",
      "Intelligent sammenfletning af forskellige datakilder",
      "Brugervenlig redigering af genererede attester"
    ]
  },
  {
    id: "3",
    title: "GDPR-Compliant Medicinsk Chatbot",
    text: "Få adgang til en sikker, GDPR-compliant medicinsk chatbot, der hjælper med dokumentation og informationssøgning. Altid opdateret med de nyeste vejledninger fra Sundhedsstyrelsen om anbefalinger, forløbsprocedurer og behandlingsplaner.",
    features: [
      "Opdateret med nyeste sundhedsfaglige vejledninger",
      "Sikker og GDPR-compliant databehandling",
      "Intelligent informationssøgning",
      "Hurtig adgang til behandlingsplaner",
      "Automatisk opdatering af retningslinjer"
    ]
  },
  {
    id: "4",
    title: "Personalisering og Smarte Fraser",
    text: "Tilpas platformen til dine behov med personlige instrukser til vores generative AI. Udnyt vores omfattende frasekartotek og skab 'Smarte Fraser' med logiske operatorer, multiselect-knapper og sliders for effektiv journalføring.",
    features: [
      "Personlige AI-instrukser",
      "Omfattende frasekartotek",
      "Smarte Fraser med logiske operatorer",
      "Multiselect og slider-funktionalitet",
      "Tilpasset journalskrivning"
    ]
  }
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: stethoscope,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: mic,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: doc,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: aiBrain,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: cyberShield,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: noCloud,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: clock,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: speechRecognition,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Avanceret AI-dreven journalisering",
    price: "1299",
    features: [
      "AI-dreven diktering og journalisering",
      "Tilpasset til din klinik og dine fraser"
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Avanceret AI-dreven journalisering og informationssøgning",
    price: "1999",
    features: [
      "AI-dreven diktering og journalisering",
      "AI-dreven informationssøgning i journaler, epikriser og attester",
      "Tilpasset til din klinik og dine fraser",
    ],
  },
  // {
  //   id: "2",
  //   title: "Enterprise",
  //   description: "Custom AI chatbot, advanced analytics, dedicated account",
  //   price: null,
  //   features: [
  //     "An AI chatbot that can understand your queries",
  //     "Personalized recommendations based on your preferences",
  //     "Ability to explore the app and its features without any cost",
  //   ],
  // },
];

export const benefits = [
  {
    id: "0",
    title: "AI-assisteret journalføring",
    text: "Vores AI-drevne værktøj transskriberer automatisk tale til tekst og genererer hurtigt præcise journaler tilpasset jeres ønsker ift. jeres fraser og formalia. Spar tid på journalisering og fokuser i stedet på dine patienter.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Generér attester på få sekunder",
    text: "Vores AI-løsning gør det muligt at generére attestudkast på få sekunder. Med vores multimodale løsning kan udkastet baseres på lyd, noter, filer eller en kombination heraf.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Medicinsk Ekspert-Chatbot",
    text: "Få adgang til en GDPR-compliant chatbot, der er specialiseret i dansk medicin. Den opdateres løbende med de nyeste retningslinjer og best practices, så du altid har adgang til pålidelig og aktuel medicinsk information.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Løbende forbedringer",
    text: "Som et agilt startup drevet af ingeniører fra Danmarks Tekniske Universitet, vil du være med på AI frontlinjen. Hos DokuDok sætter vi en ære i at levere state-of-the-art løsninger samtidig med at gøre AI tilgængelig for alle.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Skræddersyet til din klinik",
    text: "Vi tilpasser løsningen til din kliniks skabeloner og udtryk, så din journalføring bliver så personlig og effektiv som muligt. Modsat andre systemhuse, er vi fleksible og tilpasser os dine behov.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Responsiv og brugervenlig",
    text: "Vores AI-løsning er designet til at levere hurtige og præcise resultater, så du får det nødvendige svar på kort tid. Vi har fokus på brugervenlighed og tilbyder en intuitiv platform, der er nem at navigere.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

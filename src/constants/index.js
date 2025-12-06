import {
  backend,
  bootstrap,
  CuteDog,
  docker,
  Ectrh,
  esprim,
  figma,
  firebase,
  Gemini,
  git,
  HealthTracker,
  javascript,
  JourneyBuddy,
  Ktabinet,
  mobile,
  mongodb,
  MyJungle,
  nexans,
  nodejs,
  php,
  reactjs,
  symfony,
  tailwind,
  threejs,
  typescript,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Native Mobile Developer",
    icon: web,
  },
  {
    title: "ReactJs Web Developer",
    icon: mobile,
  },
  {
    title: "Flutter Mobile Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "symfony",
    icon: symfony,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Mobelite",
    icon: esprim,
    iconBg: "#E6DEDD",
    date: "01 February 2025 - 31 July 2025",
    points: [
      "Built and launched JourneyBuddy, a mobile application supporting AI-assisted and manual trip planning.",
      "Integrated an interactive map system for destination exploration.",
      "Implemented an AI-powered chatbot for smart travel recommendations.",
      "Designed a scalable modular architecture improving performance and reliability.",
      "Managed full deployment (APK/AAB) ensuring seamless delivery.",
    ],
  },
  {
      title: "Flutter Mobile Developer",
      company_name: "ECT",
      icon: nexans,
      iconBg: "#E6DEDD",
      date: "1 Juillet 2024 - 30 Juillet 2024",
      points: [
        "Developing and maintaining mobile applications using Flutter and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {title: "ReactJs Developer",
      company_name: "ESPRIM",
      icon: esprim,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - March 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ]
  },
  {
    title: "Flutter Mobile Developer",
    company_name: "ESPRIM",
    icon: esprim,
    iconBg: "#383E56",
    date: "April 2023 - May 2023",
    points: [
      "Developing and maintaining mobile applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "JourneyBuddy",
    description: "JourneyBuddy is a React Native mobile application 📱 that helps travelers plan their trips efficiently using AI assistance 🤖. Features include AI-powered itinerary planning ✈️, interactive map exploration 🗺️, and smart travel recommendations 💡.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: JourneyBuddy,
    source_code_link: "https://github.com/amiraboubaker/Journey-Buddy.git",
  },

  {
    name: "HealthTracker",
    description:"HealthTracker A React Native mobile application 📱 powered by Firebase 🔥. It allows users to: Track their sleep hours 🛌. Monitor their water consumption 💧. Evaluate the quality of their diet 🍎.",
    tags: [
      {
        name:"reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: HealthTracker,
    source_code_link: "https://github.com/amiraboubaker/HealthTracker.git",
  },

  {
    name: "CuteDog",
    description:
      "CuteDog is a React Native mobile application that helps users to discover different dog breeds 🐶. Explore information on breeds, their characteristics, and care 🐾. Simple and fast interface ⚡ for a smooth experience..",
    tags: [
      {
        name:"React Native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: CuteDog,
    source_code_link: "https://github.com/amiraboubaker/CuteDog.git",
  },


  {
    name: "ECTRH",
    description:
      "💼 ECTRH A comprehensive HR management platform 👨‍💻 that allows you to efficiently manage employees, offices, and teams 🏢. Easily store, update, and delete HR data 🔄. Optimize daily HR tasks by up to 20% 🚀.",
    tags: [
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
      {
        name: "dart",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "white-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: Ectrh,
    source_code_link: "https://github.com/amiraboubaker/ECTRH.git",
  },

  {
    name: "Gemini v2.0",
    description:
      "GeminiApp v2.0 is a cutting-edge React web application that leverages the Gemini-Flash API 1.5 to provide instant responses to user questions. Designed for speed and accuracy, it delivers a seamless and efficient query resolution experience.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Gemini,
    source_code_link: "https://github.com/amiraboubaker/Google-Gemini-2.0.git",
  },

  {
    name: "Ktabinet",
    description:"📚 Ktabinet: An online book sales application 📖 offering a selection of the most recommended books ⭐, with the ability to purchase physical or digital books by adding a personalized order 🛒.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "symphony",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "white-text-gradient",
      },
      {
        name: "bootstrap",
        color: "red-text-gradient",
      },
    ],
    image: Ktabinet,
    source_code_link: "https://github.com/amiraboubaker/KtabiNet.git",
  },

  {
    name: "MyJungle",
    description:
      "🌿 MyJungle est une application web ReactJS 🌐 pour la vente de plantes 🪴, classées par catégorie 🏷️, permettant aux utilisateurs de trouver facilement leurs plantes préférées 🌱.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: MyJungle,
    source_code_link: "https://github.com/amiraboubaker/MyJungle.git",
  },
];

export { experiences, projects, services, technologies };


import { Bubbles, Experience, Project } from "./interfaces";

export const navLinks = [
  {
    name: "Home",
    path: "/#home",
  },
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Experience",
    path: "/#experience",
  },
  {
    name: "Projects",
    path: "/#projects",
  },
  {
    name: "Contact",
    path: "/#contact",
  },
];

export const aboutSkills = [
  "TypeScript",
  "ReactJS",
  "NextJS",
  "NodeJS",
  "React Native",
  "Go",
  "Python",
  "Django",
  "SAP",
  "Docker",
  "Linux",
  "Team Leadership",
];

export const additionalInfo = [
  {
    name: "Location",
    icon: "fa-location-crosshairs",
    content: " Commewijne, Suriname",
  },
  { name: "Email", icon: "fa-envelope", content: "hoftkenny@gmail.com" },
  { name: "Whatsapp", icon: "fa-brands fa-whatsapp", content: "+597 8534188" },
  { name: "Twitter", icon: "fa-brands fa-twitter", content: "@beefykenny" },
  { name: "Github", icon: "fa-brands fa-github", content: "Beefy-py" },
];

export const socialLinks = [
  {
    name: "Whatsapp",
    icon: "fa-brands fa-whatsapp",
    url: "https://wa.me/+5978534188",
  },
  {
    name: "Twitter",
    icon: "fa-brands fa-twitter",
    url: "https://twitter.com/beefykenny",
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    url: "https://www.instagram.com/beefykenny/",
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    url: "https://www.facebook.com/kenny.hoft/",
  },
  {
    name: "Github",
    icon: "fa-brands fa-github",
    url: "https://github.com/Beefy-py",
  },
];

export const workedAt: Experience[] = [
  {
    company: "Tune Creative Studios",
    role: "Full-Stack Developer",
    from: new Date("April 2022"),
    to: new Date("November 2022"),
    description: `
    Built a donation website supporting flood relief efforts on the
    outskirts of Suriname (sadelo.org), an admin dashboard for processing
    payments with dark mode and JWT authentication, a personal real
    estate website, and a React admin dashboard for the "Dalla" mobile
    app.`,
  },
  {
    company: "Bits Please Technologies",
    role: "Software Developer",
    from: new Date("December 2022"),
    to: new Date("March 2024"),
    description: `
    Migrated the BitsPlease website from ReactJS to Next.js and installed
    an ERP system on a VPS to streamline daily business operations. Fully
    built a Heineken anniversary website with a custom spinning-wheel
    game, and developed AI-driven recruitment software on the OpenAI
    GPT-4 model, hosted on a VPS.`,
  },
  {
    company: "The Key Fintech & Digital Services",
    role: "Lead Software Developer (SAP & React)",
    from: new Date("March 2024"),
    to: new Date("June 2026"),
    description: `
    Developed and managed a POS system built with Next.js and a NestJS
    backend, plus a companion mobile POS app in React Native. Supported
    administrative processes in SAP and designed SAP solutions, initiated
    an e-learning platform for arithmetic education in Surinamese primary
    schools, and developed and hosted dockerized Python servers on a VPS.`,
  },
  {
    company: "Big Will Group",
    role: "Lead Software Developer (SAP & React)",
    from: new Date("June 2026"),
    description: `
    Co-developing a .NET desktop application and building an offline-first
    mobile sales app with React Native (Expo). Developing dashboard
    applications backed by Golang (Gin) with ERPNext as the data source,
    managing app deployments with Dokploy, rolling out open-source tools
    for internal use, and leading a small dev team across several
    projects.`,
  },
];

export const projects: Project[] = [
  {
    image: `/projects/rijschool-loki-card.jpg`,
    name: `Rijschool Loki`,
    description: `A bilingual portal built to replace paper-based driving-lesson tracking for a Surinamese driving school. Students work through interactive lessons (traffic signs, written questions, scenario exercises, practice exams), while instructors manage schedules, exams, and student progress from a role-based dashboard.`,
    url: "#",
    tags: [
      { name: "Next.js" },
      { name: "React 19" },
      { name: "TypeScript" },
      { name: "Supabase" },
      { name: "Sanity" },
      { name: "Tailwind v4" },
    ],
  },
  {
    image: `/projects/gary-symor-card.jpg`,
    name: `Gary Symorr`,
    description: `A fully responsive artist portfolio giving the artist a fast, self-editable showcase for their work. Includes a dynamic gallery with infinite scroll and lightbox, dark mode, and a contact form. Currently in development: an academy platform for course management.`,
    url: "#",
    tags: [{ name: "Astro" }, { name: "Sanity" }, { name: "Vercel" }],
  },
  {
    image: `/projects/agrivision-card.jpg`,
    name: `Agrivision`,
    description: `A mobile app that uses AI to detect plant diseases from a photo and recommend care steps, aimed at helping farmers catch problems earlier. Placed 2nd at the DataSur Hackathon 2025.`,
    url: "#",
    tags: [{ name: "React Native" }, { name: "Expo" }, { name: "FastAPI" }],
  },
  {
    image: `/projects/donationapp-card.jpg`,
    name: `Donation website in Suriname`,
    description: `Built while at Tune Creative Studios, a donation site supporting people affected by flooding on the outskirts of Suriname.`,
    url: "https://www.sadelo.org/",
    tags: [{ name: "React" }, { name: "NodeJS" }, { name: "Tailwind" }],
  },
];

// sorted from left to right
export const bubbles: Bubbles = {
  desktop: [
    {
      height: 80,
      width: 80,
      xAxisPosition: 120,
      yAxisPosition: 450,
      color: "dark",
    },
    {
      height: 180,
      width: 180,
      xAxisPosition: 100,
      yAxisPosition: 120,
      color: "green",
      rotation: 4.57,
    },

    {
      height: 100,
      width: 100,
      xAxisPosition: 527,
      yAxisPosition: 124,
      color: "light-green",
    },
    {
      height: 40,
      width: 40,
      xAxisPosition: 850,
      yAxisPosition: 219,
      color: "green",
    },
    {
      height: 219,
      width: 219,
      xAxisPosition: 1396,
      yAxisPosition: 177,
      color: "light-green",
      rotation: 4.57,
    },
    {
      height: 89,
      width: 89,
      xAxisPosition: 1254,
      yAxisPosition: 425,
      color: "dark",
      rotation: 4.57,
    },
  ],
  mobile: [
    {
      height: 100,
      width: 100,
      xAxisPosition: -80,
      yAxisPosition: 130,
      color: "light-green",
    },
    {
      height: 50,
      width: 50,
      xAxisPosition: 250,
      yAxisPosition: 120,
      color: "green",
      rotation: 4.57,
    },
    {
      height: 60,
      width: 60,
      xAxisPosition: 720,
      yAxisPosition: 320,
      color: "dark",
      rotation: -143.94,
    },
  ],
};

export const bubbles404: Bubbles = {
  desktop: [
    {
      height: 120,
      width: 120,
      xAxisPosition: 120,
      yAxisPosition: 600,
      color: "dark",
    },
    {
      height: 230,
      width: 230,
      xAxisPosition: 100,
      yAxisPosition: 120,
      color: "green",
    },
    {
      height: 90,
      width: 90,
      xAxisPosition: 400,
      yAxisPosition: 650,
      color: "light-green",
    },
    {
      height: 100,
      width: 100,
      xAxisPosition: 527,
      yAxisPosition: 124,
      color: "light-green",
    },
    {
      height: 50,
      width: 50,
      xAxisPosition: 850,
      yAxisPosition: 219,
      color: "dark",
    },
    {
      height: 120,
      width: 120,
      xAxisPosition: 880,
      yAxisPosition: 700,
      color: "light-green",
    },
    {
      height: 140,
      width: 140,
      xAxisPosition: 1050,
      yAxisPosition: 150,
      color: "green",
    },

    {
      height: 89,
      width: 89,
      xAxisPosition: 1254,
      yAxisPosition: 425,
      color: "dark",
      rotation: 4.57,
    },
    {
      height: 219,
      width: 219,
      xAxisPosition: 1396,
      yAxisPosition: 177,
      color: "light-green",
      rotation: 4.57,
    },
  ],
  mobile: [
    {
      height: 100,
      width: 100,
      xAxisPosition: -20,
      yAxisPosition: 130,
      color: "dark",
    },
    {
      height: 60,
      width: 60,
      xAxisPosition: 60,
      yAxisPosition: 500,
      color: "green",
    },
    {
      height: 50,
      width: 50,
      xAxisPosition: 250,
      yAxisPosition: 120,
      color: "light-green",
      rotation: 4.57,
    },
    {
      height: 85,
      width: 85,
      xAxisPosition: 450,
      yAxisPosition: 500,
      color: "light-green",
      rotation: -143.94,
    },
    {
      height: 100,
      width: 100,
      xAxisPosition: 500,
      yAxisPosition: 200,
      color: "green",
      rotation: -143.94,
    },
    {
      height: 60,
      width: 60,
      xAxisPosition: 720,
      yAxisPosition: 320,
      color: "dark",
      rotation: -143.94,
    },
  ],
};

export const bubbles500: Bubbles = {
  desktop: [
    {
      height: 120,
      width: 120,
      xAxisPosition: 120,
      yAxisPosition: 600,
      color: "dark",
    },
    {
      height: 230,
      width: 230,
      xAxisPosition: 100,
      yAxisPosition: 120,
      color: "dark",
    },
    {
      height: 150,
      width: 150,
      xAxisPosition: 300,
      yAxisPosition: 550,
      color: "dark",
    },
    {
      height: 100,
      width: 100,
      xAxisPosition: 527,
      yAxisPosition: 124,
      color: "dark",
    },
    {
      height: 50,
      width: 50,
      xAxisPosition: 850,
      yAxisPosition: 219,
      color: "dark",
    },
    {
      height: 90,
      width: 90,
      xAxisPosition: 880,
      yAxisPosition: 700,
      color: "dark",
    },
    {
      height: 140,
      width: 140,
      xAxisPosition: 1050,
      yAxisPosition: 150,
      color: "dark",
    },

    {
      height: 89,
      width: 89,
      xAxisPosition: 1254,
      yAxisPosition: 425,
      color: "dark",
      rotation: 4.57,
    },
    {
      height: 219,
      width: 219,
      xAxisPosition: 1396,
      yAxisPosition: 177,
      color: "dark",
      rotation: 4.57,
    },
  ],
  mobile: [
    {
      height: 100,
      width: 100,
      xAxisPosition: -20,
      yAxisPosition: 130,
      color: "dark",
    },
    {
      height: 60,
      width: 60,
      xAxisPosition: 60,
      yAxisPosition: 500,
      color: "dark",
    },
    {
      height: 50,
      width: 50,
      xAxisPosition: 250,
      yAxisPosition: 120,
      color: "dark",
      rotation: 4.57,
    },
    {
      height: 85,
      width: 85,
      xAxisPosition: 450,
      yAxisPosition: 500,
      color: "dark",
      rotation: -143.94,
    },
    {
      height: 100,
      width: 100,
      xAxisPosition: 500,
      yAxisPosition: 200,
      color: "dark",
      rotation: -143.94,
    },
    {
      height: 60,
      width: 60,
      xAxisPosition: 720,
      yAxisPosition: 320,
      color: "dark",
      rotation: -143.94,
    },
  ],
};

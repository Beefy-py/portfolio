import { Bubbles, Project } from "./interfaces";

export const navLinks = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Experience",
    path: "#experience",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

export const aboutSkills = [
  "Javascript",
  "NodeJS",
  "ReactJS",
  "Python",
  "NextJS",
  "Django",
  "BeautifulSoup4",
  "Ubuntu",
  "HTML5",
  "CSS3",
  "Typescript",
  "Dart",
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

export const projects: Project[] = [
  {
    image: `/projects/chat-app.jpeg`,
    name: `Realtime Chat App`,
    description: `I had created this using the mern stack and socket.io`,
    url: "https://room-chat-app-mern.netlify.app/",
    github: "https://github.com/Beefy-py/chat-app-client",
    tags: [{ name: "React" }, { name: "Socket.io" }, { name: "NodeJS" }],
  },
  {
    image: `/projects/donationapp.png`,
    name: `Donation website in Suriname`,
    description: `I build this when I worked at Tune Creative Studios. This website was build for the people who were suffering because of the flood.`,
    url: "https://www.sadelo.org/",
    tags: [
      { name: "React" },
      { name: "Mope" },
      { name: "NodeJS" },
      { name: "Tailwind" },
    ],
  },
  {
    image: `/projects/blog-cms.png`,
    name: `Nerdy blog website`,
    description: `This one I build in NextJS using Tailwind also. And I fetched the blog articles from a graphql cms called Hygraph. This was the first project where I used the NextJS framework.`,
    url: "https://blog-app-cms.vercel.app/",
    github: "https://github.com/Beefy-py/blog_app_cms",
    tags: [{ name: "NextJS" }, { name: "GraphQl" }, { name: "Tailwind" }],
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

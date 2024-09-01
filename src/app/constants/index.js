import fincheck from "../../assets/projects/fincheck.jpg";
import waiterapp from "../../assets/projects/waiterapp.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, React Native and Next.js, as well as back-end technologies like Node.js, Express and Nest.js, PostgreSQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, Nest.js, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2024",
    role: "Full Stack Developer",
    company: "Personal",
    description: `Web App designed to control your finances in an easy way, being able to list your transactions with various filters.`,
    technologies: ["React / Vite ", "Typescript", "TailwindCSS", "Zod", "React Query","NestJS", "Prisma", "PostgreSQL",],
  },
  {
    year: "2023 - 2023",
    role: "Full Stack Developer",
    company: "Freelancer",
    description: `Hybrid application development with React Native and Type Script where I created an app to schedule orders for a relative who sells snacks, which integrated with the API developed with Node TS and WebSockets, with a dashboard that listed the orders made and could be set as ready to pick up the order.`,
    technologies: ["React / React Native", "Typescript", "Styled-Components", "NodeJS", "MongoDB","Websockets",],
  },
];

export const PROJECTS = [
  {
    title: "Fincheck Wep App",
    image: fincheck,
    description:
      "Fincheck is an application for personal finance management. Monitor your spending in a simple way, being able to filter by account, category, type of transaction and date.",
    technologies: ["React / Vite ", "Typescript", "TailwindCSS", "Zod", "React Query","NestJS", "Prisma", "PostgreSQL",],
  },
  {
    title: "WaiterApp",
    image: waiterapp,
    description:
      "WaiterApp is an application for placing and managing orders for a restaurant. The customer or waiter places the customer's order and this order is sent to the kitchen dashboard.",
    technologies: ["React / React Native", "Typescript", "Styled-Components", "NodeJS", "MongoDB","Websockets",],
  },
];

export const CONTACT = {
  WhatsApp: "+55 (65) 9 8127 5466 ",
  email: "ianbiel850@gmail.com",
};

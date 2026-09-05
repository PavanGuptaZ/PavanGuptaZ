export const profile = {
  name: "Pavan Gupta",
  initials: "PG",
  title: "Full Stack Developer",
  tagline: "MERN Stack · TypeScript · AWS",
  location: "Madhapur, Hyderabad, India",
  phone: "+91 9966336255",
  email: "uppalagupta123@gmail.com",
  github: "https://github.com/PavanGuptaZ",
  linkedin: "https://www.linkedin.com/in/pavanguptaz",
  website: "https://pavanguptaz.com",
  resumeUrl: "/Pavan_Gupta_Resume.pdf",
  summary:
    "Full Stack Developer focused on backend architecture, working across HTML, CSS, JavaScript, TypeScript, React, Next.js, Payload CMS, Node.js, Express, MongoDB, and PostgreSQL. I prioritize end-to-end type safety by maintaining a private NPM package that standardizes Zod validation schemas across client and server.",
  summaryExtended:
    "My backend workflow leverages Node.js and Express, using Mongoose for MongoDB and Sequelize for PostgreSQL, with complex MongoDB aggregation pipelines and Redis as a caching layer and message broker. On the frontend I manage server state with TanStack Query and Axios, global state with Zustand, useContext, and useReducer, and form handling with React Hook Form. On the infrastructure side, I Dockerize applications and manage AWS environments — orchestrating containers on EC2, ECR, and ECS, and building serverless, event-driven systems with Lambda, SQS, SNS, Kafka, and EventBridge, secured with IAM, Cognito, and Secrets Manager.",
} as const;

export const skillCategories = [
  {
    title: "Languages",
    description: "The foundation I build everything on top of.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "MongoDB"],
  },
  {
    title: "Frameworks & Libraries",
    description: "My day-to-day stack for shipping full-stack products.",
    skills: [
      "React JS",
      "Next JS",
      "Node JS",
      "Express JS",
      "Payload CMS",
      "React Native",
      "TanStack Query",
      "React Hook Form",
      "Zustand",
      "Zod",
    ],
  },
  {
    title: "Databases & Caching",
    description: "Modeling, querying, and caching data at scale.",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Mongoose", "Sequelize"],
  },
  {
    title: "Cloud & DevOps",
    description: "Containerizing and deploying production AWS infrastructure.",
    skills: [
      "Docker",
      "AWS EC2",
      "ECR / ECS",
      "Lambda",
      "SQS / SNS",
      "EventBridge",
      "CodeArtifact",
      "IAM / Cognito",
      "Secrets Manager",
    ],
  },
  {
    title: "Messaging & Streaming",
    description: "Event-driven systems and distributed messaging.",
    skills: ["Apache Kafka"],
  },
  {
    title: "UI/UX & Tools",
    description: "Design handoff, versioning, and daily tooling.",
    skills: ["Figma", "Photoshop", "GitHub", "VS Code", "Linux"],
  },
] as const;

export const coreStack = [
  "React JS",
  "Next JS",
  "Node JS",
  "TypeScript",
  "MongoDB",
  "React Native",
  "Docker",
  "Apache Kafka",
] as const;

export const currentlyLearning = ["Go", "Rust"] as const;

export const languages = [
  { name: "English", level: "Proficient" },
  { name: "Telugu", level: "Native" },
  { name: "Hindi", level: "Basic" },
] as const;

export const strengths = [
  "Leadership",
  "Teamwork",
  "Communication",
  "Quick Learning & Adaptability",
  "Attention to Detail",
  "Strong Mathematical Ability",
] as const;

export const interests = [
  "Badminton",
  "Photography",
  "Video Editing",
  "Exploring New Tech",
  "Tennis",
] as const;

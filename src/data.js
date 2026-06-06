export const profile = {
  name: "Shubham Bajaj",
  title: "Full Stack Developer",
  subtitle:
  "Around 5 years of experience building React, Node.js, SaaS platforms, LMS systems, workflow tools, dashboards, APIs, and mobile applications.",
  email: "shubhbajaj10@gmail.com",
  phone: "+91 8890188101",
  location: "Jaipur, India",
  linkedin: "https://www.linkedin.com/in/shubham-b-9a71b6107/",
  github: "https://github.com/bajajshubh/",
  resume: "/resume.pdf",
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Redux",
  "Redux Saga",
  "Flutter",
  "React Native",
  "D3.js",
  "REST APIs",
  "Git",
  "Docker",
  "AWS",
];

export const projects = [
  {
    title: "AI Workflow Platform / Agent Builder",
    type: "Case Study",
    description:
      "Worked on an enterprise AI workflow and agent builder platform involving React UI flows, Node.js backend APIs, workflow execution tracking, metadata persistence, and production issue debugging.",
    points: [
      "Contributed across frontend, backend APIs, orchestration logic, and database layers.",
      "Improved execution observability using run identifiers, metadata persistence, and state tracking.",
      "Debugged client-reported production issues across UI triggers, APIs, and database state.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Multi-Tenant LMS Platform",
    type: "Case Study",
    description:
      "Built and maintained a multi-tenant Learning Management System with learner, admin, and super-admin portals.",
    points: [
      "Worked on React.js frontend modules and Node.js APIs backed by PostgreSQL.",
      "Built features around white-labeling, dynamic layouts, subscriptions, quizzes, and language support.",
      "Supported content types like videos, PDFs, HTML, quizzes, webinars, and live sessions.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Flutter"],
  },
  {
    title: "Offline-First Mobile LMS App",
    type: "Mobile App",
    description:
      "Developed a cross-platform LMS mobile application with offline content access and tenant-specific branding.",
    points: [
      "Used Flutter with Bloc and hydrated state management.",
      "Implemented offline-first course access and dynamic theming.",
      "Supported multiple learning content formats and language preferences.",
    ],
    tech: ["Flutter", "Bloc", "Offline-first", "Mobile"],
  },
  {
    title: "JobTrace — HR Call & Interview Tracker",
    type: "Personal Project",
    description:
      "A planned React Native app for job seekers to track HR calls, recruiter numbers, company names, JDs, interview rounds, and follow-ups.",
    points: [
      "Designed around the real problem of losing context across multiple recruiter calls.",
      "Planned offline-first MVP with quick call logging, search, notes, statuses, and follow-up reminders.",
      "No login/backend needed for the first version.",
    ],
    tech: ["React Native", "Expo", "AsyncStorage", "Local Notifications"],
  },
];

export const experience = [
  {
    company: "The Hackett Group",
    role: "Software Engineer",
    duration: "Nov 2024 – May 2026",
    description:
      "Worked on ZBrain, an AI agent builder and workflow execution platform, contributing across React frontend, Node.js backend APIs, execution tracking, metadata persistence, and production debugging.",
    tech: ["React", "Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    company: "CloudBloom Systems",
    role: "Software Engineer",
    duration: "Mar 2022 – Nov 2024",
    description:
      "Worked on multi-tenant LMS web and mobile platforms with learner, admin, and super-admin portals, white-labeling, subscriptions, quizzes, language support, and offline-first mobile learning.",
    tech: ["React", "Node.js", "PostgreSQL", "Flutter", "Redux Saga"],
  },
  {
    company: "Celebal Technologies",
    role: "Software Developer",
    duration: "Jan 2021 – Mar 2022",
    description:
      "Developed REST APIs, Angular portals, chatbot features, referral flows, and event-management application modules.",
    tech: ["Node.js", "Angular", "REST APIs", "Microsoft Bot Framework"],
  },
];
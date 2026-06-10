export const profile = {
  name: "Shubham Bajaj",
  title: "Full Stack Developer",
  subtitle:
  "I build scalable web, mobile, and AI workflow products using React, Node.js, PostgreSQL, Flutter, and React Native.",
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
      "Enterprise AI workflow platform used to build, execute, monitor, and debug automated AI agents and business workflows.",
    points: [
      "Worked across React frontend, Node.js backend APIs, orchestration logic, and database layers.",
      "Contributed to execution flows, versioning, run tracking, metadata persistence, and production stability improvements.",
      "Debugged client-reported production issues across UI triggers, REST APIs, workflow execution, and database state.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
    liveUrl: "https://zbrain.ai/",
    companyUrl: "https://www.thehackettgroup.com/zbrain/",
    ctaLabel: "View Product",
    note: "Public product page. Internal work/code is private.",
    isPrivate: true,
  },
  {
    title: "Multi-Tenant LMS Web Platform",
    type: "Case Study",
    description:
      "SaaS-based learning management platform with learner, admin, and super-admin portals for managing courses, users, assessments, subscriptions, and tenant configuration.",
    points: [
      "Developed learner, admin, and super-admin modules using React, Node.js, and PostgreSQL.",
      "Built role-based workflows for course management, user management, subscriptions, assessments, and tenant-specific configurations.",
      "Implemented white-labeling, language translation, dynamic layouts, and quiz/question-bank features.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "REST APIs", "SaaS"],
    ctaLabel: "Private Case Study",
    note: "Enterprise/client project. Code and internal product links are private.",
    isPrivate: true,
  },
  {
    title: "Offline-First Mobile LMS App",
    type: "Mobile App",
    description:
      "White-labeled mobile learning app used by organizations to deliver courses, assessments, videos, PDFs, live sessions, and tenant-specific branded experiences.",
    points: [
      "Developed a cross-platform LMS mobile application using Flutter for multiple organizations and user roles.",
      "Implemented offline-first course access for low or no internet connectivity.",
      "Used Flutter flavors and Hydrated BLoC for white-labeling, dynamic theming, and tenant-specific configuration.",
    ],
    tech: ["Flutter", "BLoC", "Hydrated BLoC", "Offline-first", "Mobile"],
    ctaLabel: "Private Case Study",
    note: "Enterprise/client project. App links and code are private.",
    isPrivate: true,
  },
  {
    title: "Data Visualization Platform",
    type: "Case Study",
    description:
      "Interactive analytics platform where users could create, vote on, and visualize AI-generated or custom questions through charts and dashboards.",
    points: [
      "Built React, Redux-Saga, and D3.js-based visualization modules.",
      "Developed voting and question-management flows for AI-generated and custom questions.",
      "Improved code quality by reducing code smells by 50% and refactoring reusable UI/data components.",
    ],
    tech: ["React", "Redux Saga", "D3.js", "Data Visualization"],
    ctaLabel: "Private Case Study",
    note: "Client/internal product. Code and live access are private.",
    isPrivate: true,
  },
  {
    title: "VCINEMA Content Platform",
    type: "Live Project",
    description:
      "Entertainment content platform for movies, TV shows, celebrities, quizzes, and voting-based user engagement features.",
    points: [
      "Built content, voting, and quiz modules using Angular and PHP.",
      "Improved GTMetrix performance score from 15% to 53% using AMP pages, server-side rendering, and page caching.",
    ],
    tech: ["Angular", "PHP", "SSR", "AMP", "Performance Optimization"],
    liveUrl: "https://www.vcinema.com/",
    ctaLabel: "View Live Site",
    note: "Public website. Work contribution was during prior employment.",
    isPrivate: false,
  },
  {
    title: "JobTrace — HR Call & Interview Tracker",
    type: "In Progress",
    description:
      "A React Native app for job seekers to track HR calls, recruiter numbers, company names, JDs, interview rounds, and follow-ups.",
    points: [
      "Designed around the real problem of losing context across multiple recruiter calls.",
      "Planned offline-first MVP with quick call logging, search, notes, statuses, and follow-up reminders.",
      "First version focuses on local storage without login or backend dependency.",
    ],
    tech: ["React Native", "Expo", "AsyncStorage", "Local Notifications"],
    ctaLabel: "In Progress",
    isPrivate: false,
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
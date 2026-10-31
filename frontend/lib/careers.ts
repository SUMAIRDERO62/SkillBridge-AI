export type CareerDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type Career = {
  slug: string;
  title: string;
  description: string;
  skills: string[];
  duration: string;
  difficulty: CareerDifficulty;
  futureDemand: string;
  projects: string;
};

export const careers: Career[] = [
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    description: "Build intelligent products that make the future feel useful.",
    skills: ["Python", "Machine Learning", "Deep Learning", "LLMs"],
    duration: "6–9 months",
    difficulty: "Advanced",
    futureDemand: "Very high",
    projects: "12+ projects",
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    description: "Turn complex data into decisions people can act on.",
    skills: ["Python", "SQL", "Statistics", "Visualization"],
    duration: "5–8 months",
    difficulty: "Intermediate",
    futureDemand: "Very high",
    projects: "10+ projects",
  },
  {
    slug: "web-developer",
    title: "Web Developer",
    description: "Shape digital experiences that people return to every day.",
    skills: ["React", "Next.js", "TypeScript", "APIs"],
    duration: "4–6 months",
    difficulty: "Beginner",
    futureDemand: "High",
    projects: "8+ projects",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    description: "Protect the systems, people, and ideas the world depends on.",
    skills: ["Networks", "Linux", "Ethical Hacking", "SOC"],
    duration: "5–8 months",
    difficulty: "Intermediate",
    futureDemand: "Very high",
    projects: "9+ projects",
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    description: "Make ambitious software reliable, scalable, and ready to ship.",
    skills: ["Cloud", "Docker", "Kubernetes", "CI/CD"],
    duration: "6–10 months",
    difficulty: "Advanced",
    futureDemand: "Very high",
    projects: "11+ projects",
  },
  {
    slug: "mobile-developer",
    title: "Mobile Developer",
    description: "Create thoughtful experiences that move with people everywhere.",
    skills: ["React Native", "Mobile UX", "TypeScript", "APIs"],
    duration: "4–7 months",
    difficulty: "Intermediate",
    futureDemand: "High",
    projects: "8+ projects",
  },
];

export function getCareerBySlug(slug: string): Career | undefined {
  return careers.find((career) => career.slug === slug);
}

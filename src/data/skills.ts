export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React.js", "TypeScript", "Angular", "Tailwind CSS", "Figma"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Java", "Node.js", "REST API", "JWT / OAuth2"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Supabase", "MySQL", "SQLite"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "GitHub Actions", "Vercel", "Render", "Git", "Linux"],
  },
  {
    category: "Security",
    skills: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap"],
  },
];

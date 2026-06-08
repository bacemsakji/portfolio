export interface TimelineEntry {
  id: string;
  type: "work" | "education";
  icon: string;
  date: string;
  role: string;
  organization: string;
  location?: string;
  description: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "cimf-intern",
    type: "work",
    icon: "lock",
    date: "July 2025",
    role: "Cybersecurity Intern",
    organization: "CIMF",
    description:
      "Network traffic analysis and threat mitigation using Kali Linux, Wireshark, Nmap, and Hydra. Documented vulnerability findings and proposed hardening measures.",
  },
  {
    id: "instructor",
    type: "work",
    icon: "book",
    date: "July – August 2024",
    role: "Programming Instructor",
    organization: "Coworking Space",
    description:
      "Built structured programming courses and video content for pre-university students, covering fundamentals through practical projects.",
  },
  {
    id: "enicarthage",
    type: "education",
    icon: "graduation",
    date: "2024 – Present",
    role: "Engineering Cycle — Computer Engineering",
    organization: "ENICarthage",
    location: "Tunis, Tunisia",
    description:
      "Final-year student specializing in software engineering, distributed systems, and DevOps practices.",
  },
  {
    id: "preparatory",
    type: "education",
    icon: "graduation",
    date: "2022 – 2024",
    role: "Scientific Preparatory Class (MP)",
    organization: "Preparatory Institute of Monastir",
    location: "Monastir, Tunisia",
    description:
      "Intensive two-year mathematics and physics curriculum. Developed rigorous analytical problem-solving skills.",
  },
];

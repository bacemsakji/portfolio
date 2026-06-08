export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  stack: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "sakji-autoshop",
    title: "SakjiAutoshop",
    description:
      "Full-stack e-commerce platform built for a family auto-parts business. Handles product catalog, orders, and admin operations end-to-end.",
    details: [
      "React.js SPA frontend with a Node.js REST API backend",
      "Supabase (PostgreSQL) for auth, database, and real-time order updates",
      "Product catalog, shopping cart, and order tracking for customers",
      "Admin dashboard with role-based access control",
      "Frontend deployed on Vercel, backend on Render",
    ],
    stack: ["React.js", "Node.js", "Supabase", "PostgreSQL", "Vercel", "Render"],
    github: "https://github.com/bacemsakji",
  },
  {
    id: "q-ai-hub",
    title: "Q-AI Hub",
    description:
      "Incubator & accelerator management platform connecting startups, mentors, and investors through a structured multi-phase workflow.",
    details: [
      "React.js + TypeScript frontend with a Spring Boot REST API backend",
      "JWT multi-role authentication: Admin, Mentor, Startup",
      "Multi-phase application workflow management for startup lifecycle",
      "Dockerized full stack with Docker Compose for local dev parity",
      "GitHub Actions CI/CD pipeline for automated build & deployment",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    github: "https://github.com/bacemsakji",
  },
  {
    id: "netwatch",
    title: "NetWatch",
    description:
      "A Python-based network monitoring and intrusion detection system (NIDS) that analyzes real-time traffic to identify potential security threats.",
    details: [
      "Real-time packet sniffing and header parsing using Python and Scapy",
      "Built detection rules for common reconnaissance activity, including Nmap stealth scans (SYN/FIN/Null) and ARP spoofing",
      "Developed an interactive CLI interface visualizing network bandwidth, active sessions, and flagged alerts",
      "Exports traffic logs to JSON/CSV for integration with SIEM tools or external dashboard visualization",
      "Containerized using Docker for deployment as a headless monitoring agent on Linux systems",
    ],
    stack: ["Python", "Scapy", "Docker", "Linux", "Nmap"],
    github: "https://github.com/bacemsakji",
  },
  {
    id: "tsukuyomi",
    title: "Tsukuyomi",
    description:
      "An intelligent, automated conversational agent (bot) on Instagram designed to manage, process, and respond to Instagram Direct Messages (DMs) in real time.",
    details: [
      "Integrates Instagram Graph API for real-time DM monitoring and response handling",
      "Leverages advanced Large Language Model (LLM) for intelligent, context-aware conversations",
      "Automated message processing with natural language understanding and generation",
      "Real-time response system with low-latency message handling",
      "Scalable architecture supporting multiple concurrent conversations",
    ],
    stack: ["Instagram Graph API", "LLM", "Python", "REST API", "Real-time Processing"],
    github: "https://github.com/bacemsakji",
  },
  {
    id: "hafirewall",
    title: "HAfirewall",
    description:
      "Enterprise-grade, highly available (HA), and secure web infrastructure layer combining Virtual IP failover, Layer 4/7 Load Balancer, and Web Application Firewall array.",
    details: [
      "Virtual IP (VIP) failover mechanism for high availability and automatic failover",
      "Layer 4/7 Load Balancer for intelligent traffic distribution and optimization",
      "Web Application Firewall (WAF) array for comprehensive security protection",
      "Enterprise-grade security with DDoS mitigation and threat detection",
      "Scalable infrastructure supporting high-traffic applications",
    ],
    stack: ["VIP", "Load Balancer", "WAF", "Linux", "Network Security", "High Availability"],
    github: "https://github.com/bacemsakji",
  },
];

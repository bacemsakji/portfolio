import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ToolEntry {
  category: string;
  items: { name: string; note: string }[];
}

const tools: ToolEntry[] = [
  {
    category: "Editor & Terminal",
    items: [
      { name: "VS Code", note: "With vim keybindings and a dark minimal theme" },
      { name: "JetBrains IntelliJ IDEA", note: "For Spring Boot / Java work" },
      { name: "Windows Terminal + PowerShell", note: "Daily driver on Windows" },
      { name: "WSL2 (Ubuntu)", note: "For Linux tooling and Docker" },
    ],
  },
  {
    category: "Languages & Runtimes",
    items: [
      { name: "TypeScript", note: "Preferred over plain JS for every new project" },
      { name: "Java 21", note: "For Spring Boot backends" },
      { name: "Node.js (LTS)", note: "Express / REST APIs" },
      { name: "Python", note: "Scripting, CTF automation" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", note: "SPA apps and complex UI" },
      { name: "Vite", note: "Preferred build tool — fast and minimal config" },
      { name: "Tailwind CSS", note: "Utility-first — pairs well with component thinking" },
      { name: "Figma", note: "Wireframes and design before touching code" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Spring Boot", note: "REST APIs with JWT auth, full MVC stack" },
      { name: "Supabase", note: "PostgreSQL + auth + real-time for rapid deployment" },
      { name: "Docker + Docker Compose", note: "Local dev parity with production" },
      { name: "GitHub Actions", note: "CI/CD — build, test, deploy on push" },
    ],
  },
  {
    category: "Security & Network",
    items: [
      { name: "Kali Linux", note: "Penetration testing and CTF challenges" },
      { name: "Wireshark", note: "Packet-level traffic analysis" },
      { name: "Burp Suite", note: "Web app security testing" },
      { name: "Nmap / Hydra / Metasploit", note: "Network scanning and exploitation (lab only)" },
    ],
  },
  {
    category: "Productivity",
    items: [
      { name: "Notion", note: "Project management and note-taking" },
      { name: "Obsidian", note: "Long-form notes and knowledge linking" },
      { name: "Git + GitHub", note: "Everything is version-controlled" },
    ],
  },
];

export default function Uses() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div
        style={{
          maxWidth: "42rem",
          margin: "0 auto",
          padding: "5rem 1.5rem",
        }}
      >
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.875rem",
            color: "var(--text-muted)",
            textDecoration: "none",
            marginBottom: "2.5rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
          }
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "0.4rem",
          }}
        >
          Uses
        </h1>
        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.65 }}>
          The tools, apps, and setup I use day-to-day. Inspired by{" "}
          <a
            href="https://uses.tech"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            uses.tech
          </a>
          .
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {tools.map((section) => (
            <div key={section.category}>
              <h2
                className="font-mono"
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  marginBottom: "1.25rem",
                }}
              >
                {section.category}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.15rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "var(--text)",
                      }}
                    >
                      {item.name}
                    </span>
                    <span style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p
          className="font-mono"
          style={{ marginTop: "4rem", fontSize: "0.72rem", color: "var(--text-muted)" }}
        >
          Last updated: June 2025
        </p>
      </div>
    </div>
  );
}

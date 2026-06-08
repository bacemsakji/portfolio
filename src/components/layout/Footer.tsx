import { GitBranch, Link2, Mail, Code2 } from "lucide-react";

const SOCIAL = [
  { icon: <GitBranch size={16} />, href: "https://github.com/bacemsakji", label: "GitHub" },
  { icon: <Link2 size={16} />, href: "https://www.linkedin.com/in/bacemsakji", label: "LinkedIn" },
  { icon: <Code2 size={16} />, href: "https://leetcode.com/u/GK6MKKX2sl/", label: "LeetCode" },
  { icon: <Mail size={16} />, href: "mailto:bassems944@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2.25rem 0",
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <p
          className="font-mono"
          style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
        >
          © {new Date().getFullYear()} Bacem SAKJI
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
          {SOCIAL.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: "var(--text-muted)", transition: "color 0.2s ease" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
              }
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

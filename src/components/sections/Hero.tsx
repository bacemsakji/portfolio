import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import TerminalTyping from "../ui/TerminalTyping";
import DevSecOpsDashboard from "../ui/DevSecOpsDashboard";

const TERMINAL_LINES = [
  "bacem --init portfolio",
  "loading skills... done",
  "loading projects... done",
  "ready to ship.",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.65,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
});

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="section-main relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid dot texture */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 40%, transparent 20%, var(--bg) 100%)",
        }}
      />

      <div
        className="relative z-10 w-full hero-container"
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
        }}
      >
        <style>{`
          .hero-container {
            padding: 6rem 1.5rem;
          }
          .hero-grid-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
            align-items: center;
          }
          .hero-dashboard-wrapper {
            display: none;
          }
          .hero-text-col {
            margin-left: 0;
          }
          @media (min-width: 768px) {
            .hero-container {
              padding: 8rem 1.5rem;
            }
          }
          @media (min-width: 992px) {
            .hero-grid-layout {
              grid-template-columns: 1.25fr 1fr;
              gap: 4rem;
            }
            .hero-dashboard-wrapper {
              display: flex;
              justify-content: flex-end;
            }
            .hero-text-col {
              margin-left: -18rem;
            }
          }
        `}</style>

        <div className="hero-grid-layout">
          <div className="hero-text-col">

          {/* Status badge */}
          <motion.div {...fadeUp(0.05)} style={{ marginBottom: "2rem" }}>
            <span
              className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: "#22c55e" }} />
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.15)}
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text)",
              marginBottom: "0.75rem",
            }}
          >
            Bacem{" "}
            <span style={{ color: "var(--accent)" }}>SAKJI</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            {...fadeUp(0.25)}
            className="font-mono"
            style={{
              fontSize: "0.85rem",
              color: "var(--accent)",
              marginBottom: "1.25rem",
            }}
          >
            Computer Engineer
          </motion.p>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.35)}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "var(--text-muted)",
              marginBottom: "2.5rem",
              maxWidth: "36rem",
            }}
          >
            I build secure, resilient web applications and automate infrastructure pipelines —
            with a strong focus on DevOps practices and security engineering.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.45)}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3.5rem" }}
          >
            <button
              id="hero-view-projects"
              onClick={() => scrollTo("projects")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.625rem 1.25rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                backgroundColor: "var(--accent)",
                color: "#0a0a0a",
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              View Projects <ArrowDown size={14} />
            </button>

            <a
              id="hero-download-cv"
              href="/Bacem_SAKJI_CV.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.625rem 1.25rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                backgroundColor: "var(--bg-surface)",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--accent)";
                el.style.color = "var(--accent)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-muted)";
                el.style.transform = "translateY(0)";
              }}
            >
              <Download size={14} /> Download CV
            </a>

            <button
              id="hero-contact"
              onClick={() => scrollTo("contact")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.625rem 1.25rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                backgroundColor: "transparent",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "var(--accent)";
                el.style.color = "var(--accent)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-muted)";
                el.style.transform = "translateY(0)";
              }}
            >
              <Mail size={14} /> Contact Me
            </button>
          </motion.div>

          {/* Terminal block */}
          <motion.div
            {...fadeUp(0.6)}
            style={{
              maxWidth: "24rem",
              marginLeft: "-1.25rem",
            }}
          >
            <TerminalTyping lines={TERMINAL_LINES} typingSpeed={42} pauseMs={400} />
          </motion.div>
        </div>

        {/* Right column: Interactive DevSecOps Monitor */}
        <div className="hero-dashboard-wrapper">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <DevSecOpsDashboard />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  );
}

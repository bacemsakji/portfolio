import { motion } from "framer-motion";
import { MapPin, GraduationCap, ShieldCheck, Globe } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const INTERESTS = [
  "Formula 1",
  "Resident Evil",
  "CTF competitions",
];

const LEARNING = [
  { label: "k3s Kubernetes", note: "Container orchestration at scale" },
  { label: "GitOps", note: "Declarative infrastructure workflows" },
  { label: "HashiCorp Vault", note: "Secrets management" },
];

const FACTS = [
  { icon: <MapPin size={15} style={{ color: "var(--accent)" }} />, text: "La Soukra, Ariana, Tunisia" },
  { icon: <GraduationCap size={15} style={{ color: "var(--accent)" }} />, text: "ENICarthage · Computer Engineering" },
  { icon: <ShieldCheck size={15} style={{ color: "var(--accent)" }} />, text: "CCNA1 · CTF competitor" },
  { icon: <Globe size={15} style={{ color: "var(--accent)" }} />, text: "Arabic · French C1 · English" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function About() {
  return (
    <section id="about" className="section-main" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionHeader label="About" number="01" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 26rem), 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <p style={{ fontSize: "0.975rem", lineHeight: 1.75, color: "var(--text-muted)" }}>
              Final-year Computer Engineering student at{" "}
              <span style={{ color: "var(--text)", fontWeight: 500 }}>ENICarthage</span>{" "}
              (Tunis, Tunisia). My foundation is a rigorous two-year mathematics
              track (MP) at the Preparatory Institute of Monastir — which means I
              approach engineering problems analytically before reaching for a framework.
            </p>
            <p style={{ fontSize: "0.975rem", lineHeight: 1.75, color: "var(--text-muted)" }}>
              I care about{" "}
              <span style={{ color: "var(--text)", fontWeight: 500 }}>clean architecture</span>
              , proper DevOps culture, and shipping real products. My stack covers
              the full lifecycle: Spring Boot APIs, React.js frontends, PostgreSQL
              schemas, Docker deployments, and CI/CD pipelines.
            </p>

            {/* Interests */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", paddingTop: "0.25rem" }}>
              {INTERESTS.map((label) => (
                <span
                  key={label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: "0.83rem",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "9999px",
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--bg-surface)",
                    color: "var(--text-muted)",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {/* Currently learning */}
            <div className="card" style={{ padding: "1.5rem" }}>
              <p
                className="font-mono"
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                Currently learning
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {LEARNING.map(({ label, note }) => (
                  <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--accent)",
                        marginTop: "0.4rem",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <p className="font-mono" style={{ fontSize: "0.82rem", color: "var(--text)", fontWeight: 500 }}>
                        {label}
                      </p>
                      <p style={{ fontSize: "0.76rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>
                        {note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="card" style={{ padding: "1.5rem" }}>
              <p
                className="font-mono"
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                Quick facts
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {FACTS.map(({ icon, text }) => (
                  <div
                    key={text}
                    style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.875rem", color: "var(--text-muted)" }}
                  >
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

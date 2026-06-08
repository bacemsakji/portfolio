import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { certs } from "../../data/certs";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Certifications() {
  return (
    <section id="certifications" className="section-main" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionHeader label="Certifications & Extras" number="05" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))",
            gap: "1rem",
          }}
        >
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease }}
              className="card"
              style={{ padding: "1.25rem 1.5rem" }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.5rem" }}>
                <div>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.2rem" }}>
                    {cert.title}
                  </h3>
                  <p
                    className="font-mono"
                    style={{ fontSize: "0.75rem", color: "var(--accent)" }}
                  >
                    {cert.issuer}
                  </p>
                </div>
              </div>
              {cert.description && (
                <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-muted)" }}>
                  {cert.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

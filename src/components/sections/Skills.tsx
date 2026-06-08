import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { skillGroups } from "../../data/skills";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Skills() {
  return (
    <section id="skills" className="section-alt" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionHeader label="Skills" number="02" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 14rem), 1fr))",
            gap: "2.5rem",
          }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.07, ease }}
              style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
            >
              <p
                className="font-mono"
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                }}
              >
                {group.category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

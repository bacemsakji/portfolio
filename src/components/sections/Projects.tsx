import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Projects() {
  return (
    <section id="projects" className="section-main" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionHeader label="Projects" number="03" />

        <p
          className="font-mono"
          style={{
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            marginBottom: "2.5rem",
          }}
        >
          // click a card to expand implementation details
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 28rem), 1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

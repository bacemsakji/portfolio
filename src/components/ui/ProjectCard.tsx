import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import type { Project } from "../../data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
        borderRadius: "0.75rem",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        cursor: "pointer",
        transition: "border-color 0.2s ease",
        height: "100%",
      }}
      whileHover={{ borderColor: "rgba(107,163,190,0.4)" }}
      transition={{ duration: 0.2 }}
      onClick={() => setExpanded((e) => !e)}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "var(--text)",
              marginBottom: "0.375rem",
              transition: "color 0.2s",
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-muted)" }}>
            {project.description}
          </p>
        </div>
        <span style={{ color: "var(--text-muted)", marginTop: "0.1rem", flexShrink: 0 }}>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </div>

      {/* Stack tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="font-mono"
            style={{
              fontSize: "0.7rem",
              padding: "0.2rem 0.55rem",
              borderRadius: "0.375rem",
              border: "1px solid var(--accent-dim)",
              color: "var(--accent)",
              backgroundColor: "var(--accent-dim)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Expanded details */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                paddingTop: "0.75rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              {project.details.map((detail, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: "0.75rem", fontSize: "0.85rem", color: "var(--text-muted)" }}
                >
                  <span style={{ color: "var(--accent)", marginTop: "0.1rem", flexShrink: 0 }}>→</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          paddingTop: "0.75rem",
          borderTop: "1px solid var(--border)",
          marginTop: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <GitBranch size={13} />
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <ExternalLink size={13} />
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
}

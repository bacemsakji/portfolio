import { Lock, BookOpen, GraduationCap } from "lucide-react";
import type { TimelineEntry } from "../../data/timeline";

interface Props {
  entry: TimelineEntry;
  isLast: boolean;
}

export default function TimelineItem({ entry, isLast }: Props) {
  const renderIcon = () => {
    switch (entry.icon) {
      case "lock":
        return <Lock size={14} style={{ color: "var(--accent)" }} />;
      case "book":
        return <BookOpen size={14} style={{ color: "var(--accent)" }} />;
      case "graduation":
        return <GraduationCap size={14} style={{ color: "var(--accent)" }} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex", gap: "1.25rem" }}>
      {/* Left: icon + connector line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2.25rem",
            height: "2.25rem",
            borderRadius: "50%",
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg-surface)",
            flexShrink: 0,
          }}
        >
          {renderIcon()}
        </div>
        {!isLast && (
          <div
            style={{
              width: "1px",
              flex: 1,
              marginTop: "0.5rem",
              backgroundColor: "var(--border)",
            }}
          />
        )}
      </div>

      {/* Right: content */}
      <div style={{ paddingBottom: isLast ? "0" : "2.5rem", flex: 1 }}>
        {/* Date + location */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.4rem", marginBottom: "0.25rem" }}>
          <span
            className="font-mono"
            style={{ fontSize: "0.75rem", color: "var(--accent)" }}
          >
            {entry.date}
          </span>
          {entry.location && (
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              · {entry.location}
            </span>
          )}
        </div>

        {/* Role */}
        <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.15rem" }}>
          {entry.role}
        </h3>

        {/* Organization */}
        <p
          className="font-mono"
          style={{ fontSize: "0.78rem", color: "var(--accent)", fontWeight: 500, marginBottom: "0.5rem" }}
        >
          {entry.organization}
        </p>

        {/* Description */}
        <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
          {entry.description}
        </p>
      </div>
    </div>
  );
}

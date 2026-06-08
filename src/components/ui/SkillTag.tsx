
interface Props {
  skill: string;
}

export default function SkillTag({ skill }: Props) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-md text-xs font-mono font-medium border transition-all duration-200 cursor-default"
      style={{
        color: "var(--text-muted)",
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-surface)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLSpanElement;
        el.style.color = "var(--accent)";
        el.style.borderColor = "var(--accent)";
        el.style.backgroundColor = "var(--accent-dim)";
        el.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLSpanElement;
        el.style.color = "var(--text-muted)";
        el.style.borderColor = "var(--border)";
        el.style.backgroundColor = "var(--bg-surface)";
        el.style.transform = "translateY(0)";
      }}
    >
      {skill}
    </span>
  );
}

interface Props {
  label: string;
  number?: string;
}

export default function SectionHeader({ label, number }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "3rem",
      }}
    >
      {number && (
        <span
          className="font-mono"
          style={{ fontSize: "0.7rem", color: "var(--accent)", flexShrink: 0 }}
        >
          {number}
        </span>
      )}
      <h2
        style={{
          fontSize: "1.2rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "var(--text)",
          flexShrink: 0,
        }}
      >
        {label}
      </h2>
      <div
        style={{
          flex: 1,
          height: "1px",
          backgroundColor: "var(--border)",
        }}
      />
    </div>
  );
}

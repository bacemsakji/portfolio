import { useEffect, useState } from "react";

interface Props {
  lines: string[];
  typingSpeed?: number;
  pauseMs?: number;
}

export default function TerminalTyping({
  lines,
  typingSpeed = 45,
  pauseMs = 600,
}: Props) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }
    const line = lines[currentLine];
    if (currentChar <= line.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[currentLine] = line.slice(0, currentChar);
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, currentChar === 0 ? pauseMs : typingSpeed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, pauseMs);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, lines, typingSpeed, pauseMs]);

  return (
    <div className="terminal-window">
      {/* Title bar */}
      <div className="terminal-titlebar">
        <span className="terminal-dot" style={{ background: "#ff5f57" }} />
        <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
        <span className="terminal-dot" style={{ background: "#28c840" }} />
        <span
          className="font-mono"
          style={{
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            marginLeft: "0.5rem",
            opacity: 0.7,
          }}
        >
          ~/portfolio
        </span>
      </div>

      {/* Body */}
      <div className="terminal-body">
        {lines.map((_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              minHeight: "1.6rem",
            }}
          >
            {i < currentLine || (i === currentLine && currentChar > 0) ? (
              <>
                <span style={{ color: "var(--accent)", userSelect: "none" }}>▶</span>
                <span style={{ color: "var(--text)" }}>
                  {displayed[i] ?? ""}
                  {i === currentLine && !done && (
                    <span className="cursor-blink" style={{ color: "var(--accent)" }}>
                      █
                    </span>
                  )}
                </span>
              </>
            ) : null}
          </div>
        ))}
        {done && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
            <span style={{ color: "var(--accent)", userSelect: "none" }}>▶</span>
            <span className="cursor-blink" style={{ color: "var(--accent)" }}>█</span>
          </div>
        )}
      </div>
    </div>
  );
}

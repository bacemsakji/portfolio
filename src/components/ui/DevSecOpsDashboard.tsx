import { useEffect, useState } from "react";
import { Shield, Cpu, Activity, Server } from "lucide-react";

const LOG_MESSAGES = [
  "NetWatch v1.2.0 initialized.",
  "Auditing interfaces: eth0 (secure), wlan0 (idle)...",
  "Checking active docker containers... OK (8/8 online).",
  "Monitoring ports: 22/SSH, 80/HTTP, 443/HTTPS, 8080/App.",
  "Ingress packet throughput normal: 243.2 KB/s.",
  "Analyzing system logs for brute-force attempts... None.",
  "k3s cluster status verified: Healthy.",
  "Securing memory namespaces... completed.",
  "Host intrusion detection agent active.",
  "Packet sniffer alert: ICMP ping scan from 192.168.1.51 - Blocked.",
  "Active firewall rules enforced. Banned source IP.",
  "SSL certificates validated. Expiration: 182 days.",
  "Local database connection pool verified: Healthy.",
];

export default function DevSecOpsDashboard() {
  const [logs, setLogs] = useState<string[]>([
    "System initialization completed.",
    "Loading NetWatch telemetry...",
    "Securing local API interfaces...",
    "Ready for telemetry feed.",
  ]);

  const [points, setPoints] = useState<number[]>([30, 40, 20, 35, 45, 25, 30, 15, 35, 25]);
  const [connections, setConnections] = useState<number>(14);
  const [systemLoad, setSystemLoad] = useState<number>(34);

  // Animate the SVG telemetry chart
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => {
        const next = [...prev.slice(1), Math.floor(Math.random() * 35) + 15];
        return next;
      });
      setConnections((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next > 25 ? 25 : next < 8 ? 8 : next;
      });
      setSystemLoad(() => Math.floor(Math.random() * 20) + 20);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // Telemetry logs feed
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const time = new Date().toTimeString().split(" ")[0];
        const nextLog = `[${time}] ${LOG_MESSAGES[index]}`;
        index = (index + 1) % LOG_MESSAGES.length;
        return [...prev.slice(-5), nextLog];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // SVG Chart path data
  const pathData = points.map((p, i) => `${i * 28},${p}`).join(" L ");

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "28rem",
        borderRadius: "0.75rem",
        border: "1px solid var(--border)",
        backgroundColor: "rgba(10, 10, 10, 0.75)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(107, 163, 190, 0.05)",
        overflow: "hidden",
      }}
    >
      {/* CSS Keyframes */}
      <style>{`
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
        @keyframes signal-ping {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .radar-line {
          animation: radar-sweep 4s linear infinite;
          transform-origin: center;
        }
        .radar-node {
          animation: pulse-ring 2s ease-in-out infinite;
        }
        .signal-wave {
          animation: signal-ping 1.8s cubic-bezier(0.215, 0.610, 0.355, 1) infinite;
          transform-origin: center;
        }
      `}</style>

      {/* Terminal Titlebar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1rem",
          backgroundColor: "rgba(20, 20, 20, 0.6)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ display: "flex", gap: "0.4rem" }}>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#f59e0b" }} />
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10b981" }} />
        </div>
        <span
          className="font-mono"
          style={{ fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}
        >
          netwatch@agent_01
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#22c55e", display: "inline-block", animation: "pulse-ring 1.5s infinite" }}
          />
          <span className="font-mono" style={{ fontSize: "0.6rem", color: "#22c55e", fontWeight: 600 }}>
            LIVE
          </span>
        </div>
      </div>

      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {/* Metric widgets row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
          <div
            style={{
              padding: "0.6rem",
              borderRadius: "0.375rem",
              backgroundColor: "rgba(20, 20, 20, 0.4)",
              border: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
              <Cpu size={12} />
              <span className="font-mono" style={{ fontSize: "0.6rem", textTransform: "uppercase" }}>Load</span>
            </div>
            <p className="font-mono" style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text)" }}>
              {systemLoad}%
            </p>
          </div>

          <div
            style={{
              padding: "0.6rem",
              borderRadius: "0.375rem",
              backgroundColor: "rgba(20, 20, 20, 0.4)",
              border: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
              <Server size={12} />
              <span className="font-mono" style={{ fontSize: "0.6rem", textTransform: "uppercase" }}>Conns</span>
            </div>
            <p className="font-mono" style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text)" }}>
              {connections}
            </p>
          </div>

          <div
            style={{
              padding: "0.6rem",
              borderRadius: "0.375rem",
              backgroundColor: "rgba(20, 20, 20, 0.4)",
              border: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem", color: "#10b981", marginBottom: "0.25rem" }}>
              <Shield size={12} />
              <span className="font-mono" style={{ fontSize: "0.6rem", textTransform: "uppercase" }}>Status</span>
            </div>
            <p className="font-mono" style={{ fontSize: "0.85rem", fontWeight: 600, color: "#10b981" }}>
              SECURE
            </p>
          </div>
        </div>

        {/* Live SVG Chart */}
        <div
          style={{
            padding: "0.75rem",
            borderRadius: "0.375rem",
            backgroundColor: "rgba(15, 15, 15, 0.5)",
            border: "1px solid var(--border)",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-muted)", fontSize: "0.6rem", fontFamily: "monospace", marginBottom: "0.4rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
              <Activity size={10} style={{ color: "var(--accent)" }} /> Traffic Telemetry
            </span>
            <span>Scale: 1s</span>
          </div>
          <div style={{ height: "4.5rem", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
            <svg viewBox="0 0 250 60" style={{ width: "100%", height: "100%" }}>
              {/* Grid lines */}
              <line x1="0" y1="15" x2="250" y2="15" stroke="var(--border)" strokeDasharray="3,3" strokeWidth="0.5" />
              <line x1="0" y1="30" x2="250" y2="30" stroke="var(--border)" strokeDasharray="3,3" strokeWidth="0.5" />
              <line x1="0" y1="45" x2="250" y2="45" stroke="var(--border)" strokeDasharray="3,3" strokeWidth="0.5" />
              
              {/* Live line */}
              <path
                d={`M 0,${points[0]} L ${pathData}`}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "all 1.1s ease-in-out" }}
              />
            </svg>
          </div>
        </div>

        {/* Interactive Radar Scan Area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            height: "11rem",
            borderRadius: "0.375rem",
            backgroundColor: "rgba(15, 15, 15, 0.3)",
            border: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Grid back lines */}
          <div
            style={{
              position: "absolute",
              width: "8.5rem",
              height: "8.5rem",
              borderRadius: "50%",
              border: "1px solid rgba(107, 163, 190, 0.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "5.5rem",
              height: "5.5rem",
              borderRadius: "50%",
              border: "1px solid rgba(107, 163, 190, 0.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              border: "1px solid rgba(107, 163, 190, 0.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "9rem",
              height: "1px",
              backgroundColor: "rgba(107, 163, 190, 0.05)",
            }}
          />
          <div
            style={{
              position: "absolute",
              height: "9rem",
              width: "1px",
              backgroundColor: "rgba(107, 163, 190, 0.05)",
            }}
          />

          {/* Sweep radar */}
          <div
            className="radar-line"
            style={{
              position: "absolute",
              width: "9rem",
              height: "9rem",
              borderRadius: "50%",
              background: "conic-gradient(from 0deg, rgba(107, 163, 190, 0.15) 0deg, transparent 90deg, transparent 360deg)",
              pointerEvents: "none",
            }}
          />

          {/* Scanning targets */}
          <div style={{ position: "absolute", top: "25%", left: "32%" }}>
            <span
              className="radar-node"
              style={{
                display: "block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--accent)",
                boxShadow: "0 0 8px var(--accent)",
              }}
            />
          </div>
          <div style={{ position: "absolute", bottom: "35%", right: "28%" }}>
            <span
              className="radar-node"
              style={{
                display: "block",
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                boxShadow: "0 0 8px #10b981",
                animationDelay: "0.5s",
              }}
            />
          </div>
          <div style={{ position: "absolute", top: "45%", right: "35%" }}>
            <span
              className="radar-node"
              style={{
                display: "block",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "var(--accent)",
                animationDelay: "1.2s",
              }}
            />
          </div>

          {/* Node graph labels */}
          <span
            className="font-mono"
            style={{
              position: "absolute",
              top: "0.5rem",
              left: "0.75rem",
              fontSize: "0.58rem",
              color: "var(--text-muted)",
            }}
          >
            NIDS: PASSIVE_SCAN
          </span>

          <span
            className="font-mono"
            style={{
              position: "absolute",
              bottom: "0.5rem",
              right: "0.75rem",
              fontSize: "0.58rem",
              color: "var(--text-muted)",
            }}
          >
            TARGETS: 3 DETECTED
          </span>
        </div>

        {/* Console outputs */}
        <div
          className="font-mono"
          style={{
            padding: "0.75rem",
            borderRadius: "0.375rem",
            backgroundColor: "rgba(10, 10, 10, 0.9)",
            border: "1px solid var(--border)",
            fontSize: "0.68rem",
            lineHeight: 1.5,
            color: "var(--text-muted)",
            minHeight: "8.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem",
          }}
        >
          {logs.map((log, i) => {
            const isAlert = log.includes("ALERT") || log.includes("Blocked") || log.includes("Banned");
            const isOk = log.includes("OK") || log.includes("Healthy") || log.includes("Telemetry");
            let textColor = "var(--text-muted)";
            if (isAlert) textColor = "#f43f5e"; // soft red
            else if (isOk) textColor = "#10b981"; // soft green

            return (
              <div key={i} style={{ color: textColor, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {log}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

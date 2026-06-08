import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

const SECTION_IDS = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const active = useScrollSpy(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "3.5rem",
          borderBottom: "1px solid var(--border)",
          backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <nav
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            className="font-mono"
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--accent)",
              textDecoration: "none",
              letterSpacing: "-0.03em",
            }}
          >
            bs.
          </a>

          {/* Desktop nav */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      fontSize: "0.83rem",
                      fontWeight: 500,
                      color: isActive ? "var(--accent)" : "var(--text-muted)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = isActive ? "var(--accent)" : "var(--text-muted)";
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "2rem",
                height: "2rem",
                borderRadius: "0.375rem",
                border: "none",
                background: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
                (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-surface)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                (e.currentTarget as HTMLButtonElement).style.background = "none";
              }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile hamburger */}
            <button
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "2rem",
                height: "2rem",
                borderRadius: "0.375rem",
                border: "none",
                background: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
              }}
              className="mobile-menu-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              top: "3.5rem",
              left: 0,
              right: 0,
              zIndex: 40,
              borderBottom: "1px solid var(--border)",
              backgroundColor: "var(--bg)",
            }}
          >
            <ul style={{ listStyle: "none", padding: "0.5rem 0", margin: 0 }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "0.75rem 1.5rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, Phone, MapPin, Download, Send, Code2 } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "YOUR_FORM_ID";
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

type FormState = "idle" | "sending" | "success" | "error";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const CONTACT_INFO = [
  { icon: <Mail size={15} />, label: "bassems944@gmail.com", href: "mailto:bassems944@gmail.com" },
  { icon: <Phone size={15} />, label: "+216 55 733 616", href: "tel:+21655733616" },
  { icon: <MapPin size={15} />, label: "La Soukra, Ariana, Tunisia", href: undefined },
];

const SOCIAL_LINKS = [
  { icon: <GitBranch size={18} />, href: "https://github.com/bacemsakji", label: "GitHub" },
  { icon: <Link2 size={18} />, href: "https://www.linkedin.com/in/bacem-sakji-84183a245/", label: "LinkedIn" },
  { icon: <Code2 size={18} />, href: "https://leetcode.com/u/GK6MKKX2sl/", label: "LeetCode" },
];

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="section-alt" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionHeader label="Contact" number="06" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
            gap: "3rem",
          }}
        >
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
          >
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.5rem" }}>
                Let's work together
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-muted)" }}>
                I'm actively looking for internships and junior full-stack positions.
                If you have a project or an opportunity that needs a developer who ships, let's talk.
              </p>
            </div>

            {/* Contact rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {CONTACT_INFO.map(({ icon, label, href }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>{icon}</span>
                  {href ? (
                    <a
                      href={href}
                      className="link-accent"
                      style={{ fontSize: "0.875rem", textDecoration: "none" }}
                    >
                      {label}
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2.4rem",
                    height: "2.4rem",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--accent)";
                    el.style.color = "var(--accent)";
                    el.style.backgroundColor = "var(--accent-dim)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text-muted)";
                    el.style.backgroundColor = "transparent";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* CV download button */}
            <div>
              <a
                href="/Bacem_SAKJI_CV.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.55rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--border)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--accent)";
                  el.style.color = "var(--accent)";
                  el.style.backgroundColor = "var(--accent-dim)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--text-muted)";
                  el.style.backgroundColor = "transparent";
                }}
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
          >
            {formState === "success" ? (
              <div
                style={{
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(34,197,94,0.3)",
                  backgroundColor: "rgba(34,197,94,0.05)",
                  padding: "3rem 2rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "2.25rem" }}>✓</span>
                <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text)" }}>
                  Message sent — I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
                noValidate
              >
                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label
                    htmlFor="contact-name"
                    style={{ fontSize: "0.78rem", fontWeight: 500, color: "var(--text-muted)" }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label
                    htmlFor="contact-email"
                    style={{ fontSize: "0.78rem", fontWeight: 500, color: "var(--text-muted)" }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </div>

                {/* Message */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label
                    htmlFor="contact-message"
                    style={{ fontSize: "0.78rem", fontWeight: 500, color: "var(--text-muted)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    className="form-input"
                    style={{ resize: "none" }}
                  />
                </div>

                {formState === "error" && (
                  <p style={{ fontSize: "0.8rem", color: "#f87171" }}>
                    Something went wrong — please email me directly at bassems944@gmail.com
                  </p>
                )}

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={formState === "sending"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.65rem 1.5rem",
                    borderRadius: "0.5rem",
                    border: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    backgroundColor: "var(--accent)",
                    color: "#0a0a0a",
                    cursor: formState === "sending" ? "not-allowed" : "pointer",
                    opacity: formState === "sending" ? 0.65 : 1,
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (formState !== "sending")
                      (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = formState === "sending" ? "0.65" : "1";
                  }}
                >
                  <Send size={14} />
                  {formState === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

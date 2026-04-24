/*
 * HIGH BUSINESS — Contact Section
 * Design: Apple dark chip section style
 * - Background: #004225 (the one dark full-bleed section)
 * - All text: white
 * - Eyebrow: #FFCC01
 * - Form fields: rgba(255,255,255,0.08) bg, 0.5px white/20 border, 12px radius
 * - Submit button: #FFCC01 bg, #004225 text, 100px radius pill
 * - Address/contact details: rgba(255,255,255,0.6)
 * - Map + address same width as form (2-column grid)
 * - Map grows to fill right column height
 * - Header: left-justified
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const INTER = "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";

export default function ContactSection() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", note: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        background: "#004225",
        padding: "80px 0",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
          style={{ marginBottom: "48px" }}
        >
          <span
            className="eyebrow"
            style={{ color: "#FFCC01", marginBottom: "16px" }}
          >
            Contact
          </span>
          <h2
            style={{
              fontFamily: INTER,
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 600,
              letterSpacing: "-0.022em",
              color: "#ffffff",
              lineHeight: 1.08,
            }}
          >
            Where We Are
          </h2>
        </div>

        {/* 2-column layout */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}
        >
          {/* Left — Contact Form */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3
              style={{
                fontFamily: INTER,
                fontSize: "20px",
                fontWeight: 600,
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              Get Started
            </h3>

            {submitted ? (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  textAlign: "center",
                  padding: "40px 0",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "rgba(255,204,1,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4.5 4.5 9.5-9" stroke="#FFCC01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p style={{ fontFamily: INTER, fontSize: "18px", fontWeight: 600, color: "#ffffff" }}>
                  Thanks — we'll be in touch soon.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                  A member of our team will reach out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                  { name: "email", label: "Email", type: "email", placeholder: "jane@yourbusiness.com.au" },
                  { name: "mobile", label: "Mobile", type: "tel", placeholder: "04xx xxx xxx" },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      style={{
                        fontFamily: INTER,
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.45)",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      required={field.name !== "mobile"}
                      className="hb-input"
                    />
                  </div>
                ))}

                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <label
                    htmlFor="note"
                    style={{
                      fontFamily: INTER,
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.45)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Note
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={4}
                    placeholder="Tell us a little about your business..."
                    value={form.note}
                    onChange={handleChange}
                    className="hb-input"
                    style={{ resize: "none", flex: 1, minHeight: "80px" }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#FFCC01",
                    color: "#004225",
                    fontFamily: INTER,
                    fontSize: "15px",
                    fontWeight: 600,
                    padding: "14px 32px",
                    borderRadius: "100px",
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 0.2s ease",
                    marginTop: "4px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right — Map + Address */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", height: "100%" }}>
            {/* Map — grows to fill */}
            <div
              style={{
                flex: 1,
                borderRadius: "24px",
                overflow: "hidden",
                minHeight: "200px",
              }}
            >
              <iframe
                title="High Business Office Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, display: "block", minHeight: "200px", filter: "saturate(0.6) contrast(1.1) brightness(0.9)" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.3!2d151.2082!3d-33.8645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401a5c4e5b%3A0x5017d681632ccc0!2s1%20O'Connell%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sau!4v1714000000000!5m2!1sen!2sau"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address card */}
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "24px",
                padding: "24px 28px",
                border: "0.5px solid rgba(255,255,255,0.1)",
                flexShrink: 0,
              }}
            >
              <div style={{ marginBottom: "16px" }}>
                <span
                  style={{
                    fontFamily: INTER,
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  Address
                </span>
                <p style={{ fontFamily: INTER, fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                  Level 15, 1 O'Connell Street<br />Sydney NSW 2000
                </p>
              </div>

              <div
                style={{ width: "100%", height: "0.5px", background: "rgba(255,255,255,0.1)", marginBottom: "16px" }}
              />

              <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
                <div>
                  <span
                    style={{
                      fontFamily: INTER,
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Phone
                  </span>
                  <a
                    href="tel:0290556924"
                    style={{ fontFamily: INTER, fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    02 9055 6924
                  </a>
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: INTER,
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Email
                  </span>
                  <a
                    href="mailto:office@highbusiness.com.au"
                    style={{ fontFamily: INTER, fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    office@highbusiness.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

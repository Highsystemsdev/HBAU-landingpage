/*
 * HIGH BUSINESS — Navbar
 * Design: Apple-style 52px frosted glass bar
 * - Near-transparent white with backdrop blur
 * - 0.5px green divider bottom border
 * - Logo: always green (white bg nav)
 * - Nav links: 12px Inter, rgba(0,66,37,0.5)
 * - CTA pill: #004225 bg, #FFCC01 text
 * - Mobile: full-screen white overlay
 */

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const INTER = "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "52px",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "0.5px solid rgba(0,66,37,0.15)",
        }}
      >
        <div
          className="container"
          style={{
            height: "52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollTo("#"); }}
            style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          >
            <img
              src="/manus-storage/hb-green_76fb1525.webp"
              alt="High Business"
              style={{ height: "16px", width: "auto" }}
            />
          </a>

          {/* Desktop nav links — centred */}
          <nav
            className="hidden md:flex"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  fontFamily: INTER,
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "rgba(0,66,37,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#004225")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,66,37,0.5)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="btn-nav hidden md:inline-flex"
            >
              Get Started
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "none", padding: "6px", display: "flex", flexDirection: "column", gap: "5px" }}
              aria-label="Toggle menu"
            >
              <span style={{ display: "block", width: "18px", height: "1.5px", background: "#004225", transition: "transform 0.25s ease, opacity 0.25s ease", transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
              <span style={{ display: "block", width: "18px", height: "1.5px", background: "#004225", transition: "opacity 0.25s ease", opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "18px", height: "1.5px", background: "#004225", transition: "transform 0.25s ease, opacity 0.25s ease", transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        ref={overlayRef}
        className="md:hidden"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            style={{
              fontFamily: INTER,
              fontSize: "28px",
              fontWeight: 600,
              color: "#004225",
              textDecoration: "none",
              letterSpacing: "-0.02em",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.35s ease ${i * 55 + 80}ms, transform 0.35s ease ${i * 55 + 80}ms`,
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
          className="btn-primary"
          style={{
            marginTop: "8px",
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.35s ease 300ms, transform 0.35s ease 300ms",
          }}
        >
          Get Started
        </a>
      </div>
    </>
  );
}

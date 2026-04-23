/*
 * HIGH BUSINESS — Navbar Component
 * Design: Frosted glass, transparent over hero → glass on scroll
 * Logo: White version over hero, Green version in glass state
 * Mobile: Full-screen green overlay with staggered link reveal
 * Logo in navbar is always visible; hero logo fades in separately
 */

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const textColor = scrolled ? "text-[#111111]" : "text-white";

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 navbar-glass ${scrolled ? "scrolled" : ""}`}
      >
        <div className="container">
          <nav className="flex items-center h-16">
            {/* Logo — left of centre column */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavClick("#"); }}
              className="flex-shrink-0 mr-auto"
            >
              <img
                src={scrolled
                  ? "/manus-storage/hb-green_76fb1525.webp"
                  : "/manus-storage/hb-white_f52ae710.webp"
                }
                alt="High Business"
                className="h-5 w-auto"
                style={{ transition: "opacity 0.2s ease" }}
              />
            </a>

            {/* Centre nav links */}
            <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`nav-link ${textColor} bg-transparent border-none`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Right CTA */}
            <div className="hidden md:block ml-auto">
              <button
                onClick={() => handleNavClick("#contact")}
                className={`
                  font-['DM_Sans'] text-sm px-5 py-2 rounded-full border transition-all duration-200
                  ${scrolled
                    ? "border-[#004225] text-[#004225] hover:bg-[#004225] hover:text-white"
                    : "border-white/70 text-white hover:bg-white/15 hover:border-white"
                  }
                `}
                style={{ fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}
              >
                Get Started
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden flex flex-col gap-[5px] p-2 ml-auto ${textColor}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-5 h-[1.5px] bg-current" />
              <span className="block w-5 h-[1.5px] bg-current" />
              <span className="block w-3.5 h-[1.5px] bg-current ml-auto" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div className={`mobile-nav-overlay ${mobileOpen ? "open" : ""}`}>
        {/* Close button */}
        <button
          className="absolute top-5 right-5 text-white p-2"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Logo */}
        <img
          src="/manus-storage/hb-white_f52ae710.webp"
          alt="High Business"
          className="h-7 w-auto mb-14"
        />

        {/* Links */}
        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white bg-transparent border-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "2rem",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease ${i * 60 + 150}ms, transform 0.4s ease ${i * 60 + 150}ms`,
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile CTA */}
        <button
          onClick={() => handleNavClick("#contact")}
          className="mt-12"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.9375rem",
            letterSpacing: "0.02em",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            backgroundColor: "#FFCC01",
            color: "#004225",
            border: "none",
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.4s ease 400ms, transform 0.4s ease 400ms`,
          }}
        >
          Get Started
        </button>
      </div>
    </>
  );
}

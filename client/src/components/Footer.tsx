/*
 * HIGH BUSINESS — Footer
 * Design: Apple-style minimal footer
 * - Background: #ffffff
 * - border-top: 0.5px solid rgba(0,66,37,0.15)
 * - padding: 40px 0 20px
 * - All text: 12px, #6e6e73
 * - Logo: green version
 * - No dark background, no gold accent line
 */

const INTER = "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";

const FOOTER_SERVICES = [
  "Tax Returns",
  "BAS & GST",
  "Cashflow Forecasting",
  "Business Planning",
  "Xero Advisory",
  "SMSF",
  "ASIC Compliance",
];

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: "0.5px solid rgba(0,66,37,0.15)",
        padding: "40px 0 20px",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gap: "32px",
            marginBottom: "32px",
          }}
          className="grid grid-cols-1 md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollTo("#"); }}
              style={{ display: "inline-block", marginBottom: "12px" }}
            >
              <img
                src="/manus-storage/hb-green_76fb1525.webp"
                alt="High Business"
                style={{ height: "14px", width: "auto" }}
              />
            </a>
            <p style={{ fontFamily: INTER, fontSize: "12px", color: "#6e6e73", lineHeight: 1.6, maxWidth: "220px" }}>
              Chartered Accountants for ambitious Australian businesses.
            </p>
            <p style={{ fontFamily: INTER, fontSize: "12px", color: "#6e6e73", marginTop: "8px" }}>
              Level 15, 1 O'Connell Street, Sydney NSW 2000
            </p>
            <p style={{ fontFamily: INTER, fontSize: "12px", color: "#6e6e73", marginTop: "4px" }}>
              ABN 90 678 429 537
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: INTER,
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#004225",
                marginBottom: "12px",
              }}
            >
              Navigation
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{ fontFamily: INTER, fontSize: "12px", color: "#6e6e73", textDecoration: "none", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#004225")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6e73")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p
              style={{
                fontFamily: INTER,
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#004225",
                marginBottom: "12px",
              }}
            >
              Services
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <span style={{ fontFamily: INTER, fontSize: "12px", color: "#6e6e73" }}>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "0.5px", background: "rgba(0,66,37,0.15)", marginBottom: "16px" }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p style={{ fontFamily: INTER, fontSize: "12px", color: "#6e6e73" }}>
            © {new Date().getFullYear()} High Business Pty Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <a
              href="mailto:office@highbusiness.com.au"
              style={{ fontFamily: INTER, fontSize: "12px", color: "#6e6e73", textDecoration: "none", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#004225")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6e73")}
            >
              office@highbusiness.com.au
            </a>
            <a
              href="tel:0290556924"
              style={{ fontFamily: INTER, fontSize: "12px", color: "#6e6e73", textDecoration: "none", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#004225")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6e73")}
            >
              02 9055 6924
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

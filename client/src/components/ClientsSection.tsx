/*
 * HIGH BUSINESS — Clients Section
 * Design: Apple-style full-bleed rounded cards
 * - Page background: #ffffff
 * - "Clients who thrive with us" card: #FFCC01 bg, 24px radius, 52px 44px padding
 * - "Who needs a different solution" card: #f5f5f7 bg, same radius/padding
 * - 2-column grid, gap 12px, margin 0 20px
 * - No shadows, no border decorations
 * - Bullet dots: 5px filled circle — green (#004225) for ideal, muted rgba(0,0,0,0.2) for other
 * - Heading: left-justified, section-heading style
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const INTER = "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";

const IDEAL_ITEMS = [
  "Turnover between $300k and $5M",
  "Ambitious to grow and scale",
  "Values a proactive, strategic accountant",
  "Wants clean books and clear cashflow visibility",
  "Ready to invest in their business infrastructure",
  "Prefers fixed fees and transparent pricing",
];

const NOT_FIT_ITEMS = [
  "Turnover under $300k",
  "Looking for the cheapest option",
  "Needs only a once-a-year tax return",
  "Not open to business advice or process improvement",
  "Prefers to manage their own books without support",
];

export default function ClientsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="clients"
      style={{
        background: "#ffffff",
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
          <span className="eyebrow" style={{ marginBottom: "16px" }}>Clients</span>
          <h2 className="section-heading" style={{ marginBottom: "16px" }}>
            Who We Work With
          </h2>
          <p
            style={{
              fontFamily: INTER,
              fontSize: "17px",
              color: "#6e6e73",
              lineHeight: 1.6,
              maxWidth: "560px",
            }}
          >
            We do our best work with the right clients — here's how to know if that's you.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {/* Ideal client card — yellow */}
          <div
            style={{
              background: "#FFCC01",
              borderRadius: "24px",
              padding: "52px 44px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s",
            }}
          >
            <span
              style={{
                fontFamily: INTER,
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7a5f00",
                display: "block",
                marginBottom: "12px",
              }}
            >
              Clients who thrive with us
            </span>
            <h3
              style={{
                fontFamily: INTER,
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#004225",
                marginBottom: "20px",
                lineHeight: 1.1,
              }}
            >
              Built for ambitious<br />business owners.
            </h3>
            <p
              style={{
                fontFamily: INTER,
                fontSize: "15px",
                color: "rgba(0,66,37,0.65)",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}
            >
              We work best with established, growth-minded businesses that want more than just compliance.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {IDEAL_ITEMS.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontFamily: INTER,
                    fontSize: "15px",
                    color: "rgba(0,66,37,0.8)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#004225",
                      flexShrink: 0,
                      marginTop: "8px",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not a fit card — light grey */}
          <div
            style={{
              background: "#f5f5f7",
              borderRadius: "24px",
              padding: "52px 44px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
          >
            <span
              style={{
                fontFamily: INTER,
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6e6e73",
                display: "block",
                marginBottom: "12px",
              }}
            >
              Who needs a different solution
            </span>
            <h3
              style={{
                fontFamily: INTER,
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#1d1d1f",
                marginBottom: "20px",
                lineHeight: 1.1,
              }}
            >
              We might not be<br />the right fit.
            </h3>
            <p
              style={{
                fontFamily: INTER,
                fontSize: "15px",
                color: "#6e6e73",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}
            >
              We're selective about who we work with so we can give every client the attention they deserve.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {NOT_FIT_ITEMS.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontFamily: INTER,
                    fontSize: "15px",
                    color: "#6e6e73",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.2)",
                      flexShrink: 0,
                      marginTop: "8px",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

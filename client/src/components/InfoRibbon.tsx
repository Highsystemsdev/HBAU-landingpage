/*
 * HIGH BUSINESS — Certifications Strip
 * Design: Apple-style thin divider strip
 * - Full width, padding 22px 48px
 * - border-top and border-bottom: 0.5px rgba(0,66,37,0.15)
 * - Left label: "Certified to the highest standards" — 10px, 0.18em tracking, rgba(0,66,37,0.3)
 * - Cert logos as pill-shaped text badges: border 0.5px rgba(0,66,37,0.2), border-radius 100px, padding 5px 15px
 * - On hover: show colour logo image instead of text pill
 */

const INTER = "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";

const CERTS = [
  {
    id: "caanz",
    label: "Chartered Accountants ANZ",
    whiteSrc: "/manus-storage/caanz_logo_white_8e4d3f2a.png",
    colourSrc: "/manus-storage/caanz_logo_colour_a1b2c3d4.png",
    hasColour: true,
  },
  {
    id: "xero",
    label: "Xero Silver Partner",
    whiteSrc: "/manus-storage/xero_logo_white_5f6a7b8c.png",
    colourSrc: "/manus-storage/xero_logo_colour_9d0e1f2a.png",
    hasColour: true,
  },
  {
    id: "tpb",
    label: "Tax Practitioners Board",
    whiteSrc: "/manus-storage/TPB_Badge_v2_262f2f81.png",
    colourSrc: "/manus-storage/TPB_Badge_v2_262f2f81.png",
    hasColour: false,
  },
];

export default function InfoRibbon() {
  return (
    <div
      style={{
        width: "100%",
        borderTop: "0.5px solid rgba(0,66,37,0.15)",
        borderBottom: "0.5px solid rgba(0,66,37,0.15)",
        background: "#ffffff",
        padding: "22px 48px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        {/* Left label */}
        <span
          style={{
            fontFamily: INTER,
            fontSize: "10px",
            letterSpacing: "0.18em",
            color: "rgba(0,66,37,0.3)",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          Certified to the highest standards
        </span>

        {/* Cert badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {CERTS.map((cert) => (
            <div
              key={cert.id}
              className="group"
              style={{ position: "relative", display: "inline-flex" }}
            >
              {/* Text pill — default state */}
              <span
                style={{
                  fontFamily: INTER,
                  fontSize: "11px",
                  color: "rgba(0,66,37,0.5)",
                  border: "0.5px solid rgba(0,66,37,0.2)",
                  borderRadius: "100px",
                  padding: "5px 15px",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                  transition: "opacity 0.25s ease",
                }}
                // Hide on hover via inline group approach — use CSS class instead
              >
                {cert.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

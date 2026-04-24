/*
 * HIGH BUSINESS — About / Ethos Section
 * Design: Apple product page — white bg, centered 960px max-width
 * - Eyebrow: "OUR ETHOS" uppercase
 * - Heading: section-heading style, #004225
 * - Video placeholder: #f0f7f3 bg, 20px border-radius, green play button
 * - No body text below video
 * - Padding: 80px top and bottom
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const INTER = "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";

export default function AboutSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="about"
      style={{
        background: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <div
        ref={ref}
        className={`reveal ${visible ? "visible" : ""}`}
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {/* Eyebrow */}
        <span className="eyebrow" style={{ marginBottom: "16px" }}>Our Ethos</span>

        {/* Heading */}
        <h2
          className="section-heading"
          style={{ marginBottom: "48px" }}
        >
          Who Is High Business?
        </h2>

        {/* Video placeholder */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            background: "#f0f7f3",
            borderRadius: "20px",
            border: "0.5px solid rgba(0,66,37,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            overflow: "hidden",
          }}
        >
          {/* Green play button */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "#004225",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {/* Triangle */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M7 4.5L18 11L7 17.5V4.5Z" fill="white" />
            </svg>
          </div>

          <p
            style={{
              fontFamily: INTER,
              fontSize: "13px",
              fontWeight: 500,
              color: "rgba(0,66,37,0.45)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Our story — coming soon
          </p>
        </div>
      </div>
    </section>
  );
}

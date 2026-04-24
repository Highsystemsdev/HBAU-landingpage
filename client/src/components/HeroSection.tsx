/*
 * HIGH BUSINESS — Hero Section
 * Design: Apple iMac product page style
 * - Pure white background, centered text
 * - Enormous display heading: #004225, word "Business" in #FFCC01
 * - Soft mint (#f0f7f3) full-bleed visual band below text
 * - No background images, no scroll indicator
 * - Eyebrow: "High Business. Chartered Accountants." — 17px muted
 * - CTA: green pill + ghost text link
 * - Pricing line below CTAs
 */

import { useEffect, useState } from "react";

const INTER = "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section
      id="hero"
      style={{
        background: "#ffffff",
        paddingTop: "52px", // navbar height offset
      }}
    >
      {/* Text area — white background, centered */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px 0",
          maxWidth: "860px",
          margin: "0 auto",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: INTER,
            fontSize: "17px",
            fontWeight: 400,
            color: "#6e6e73",
            marginBottom: "16px",
          }}
        >
          High Business. Chartered Accountants.
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: INTER,
            fontSize: "clamp(52px, 9vw, 96px)",
            fontWeight: 600,
            letterSpacing: "-0.025em",
            lineHeight: 1.04,
            color: "#004225",
            marginBottom: "24px",
          }}
        >
          Helping Build{" "}
          <span
            style={{
              color: "#FFCC01",
              WebkitTextStroke: "1.5px #c9a200",
            }}
          >
            Beautiful
          </span>
          {" "}Business
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontFamily: INTER,
            fontSize: "19px",
            fontWeight: 400,
            color: "#6e6e73",
            lineHeight: 1.5,
            marginBottom: "36px",
            maxWidth: "560px",
            margin: "0 auto 36px",
          }}
        >
          Expert chartered accounting for visionary Australian businesses.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "16px",
          }}
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-primary"
          >
            Get Started
          </a>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-ghost"
          >
            Learn More &rsaquo;
          </a>
        </div>

        {/* Pricing line */}
        <p
          style={{
            fontFamily: INTER,
            fontSize: "13px",
            color: "#6e6e73",
            marginTop: "16px",
            marginBottom: "56px",
          }}
        >
          Fixed annual fee from $6,600 — no surprises, no hourly billing.
        </p>
      </div>

      {/* Soft mint visual band — full bleed */}
      <div
        style={{
          width: "100%",
          minHeight: "260px",
          background: "#f0f7f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Decorative abstract shape — subtle green gradient orb */}
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "260px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Large soft circle */}
          <div
            style={{
              position: "absolute",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,66,37,0.08) 0%, rgba(0,66,37,0) 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* Gold accent orb */}
          <div
            style={{
              position: "absolute",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,204,1,0.18) 0%, rgba(255,204,1,0) 70%)",
              top: "30%",
              left: "60%",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* Small green circle */}
          <div
            style={{
              position: "absolute",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,66,37,0.12) 0%, rgba(0,66,37,0) 70%)",
              top: "60%",
              left: "35%",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* Tagline inside band */}
          <p
            style={{
              fontFamily: INTER,
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(0,66,37,0.4)",
              position: "relative",
              zIndex: 1,
            }}
          >
            Chartered Accountants · Sydney, Australia
          </p>
        </div>
      </div>
    </section>
  );
}

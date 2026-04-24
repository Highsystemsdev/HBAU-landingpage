/*
 * HIGH BUSINESS — CTA Banner
 * Design: #004225 background with gold accent, final conversion section
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CtaBanner() {
  const { ref, visible } = useScrollReveal();

  const handleScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#004225] py-20">
      <div className="container text-center">
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
        >
          <span className="gold-rule mx-auto" />
          <h2
            className="mt-6 mb-4 text-white"
            style={{
              fontFamily: "-apple-system, 'SF Pro Display', BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              lineHeight: 1.2,
            }}
          >
            Ready to build a better business?
          </h2>
          <p
            className="text-white/70 mb-8 max-w-md mx-auto"
            style={{ fontFamily: "-apple-system, 'SF Pro Text', BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: "1.0625rem" }}
          >
            Let's talk about where you are and where you want to go.
          </p>
          <button
            onClick={handleScroll}
            style={{
              fontFamily: "-apple-system, 'SF Pro Text', BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 600,
              fontSize: "0.9375rem",
              letterSpacing: "0.02em",
              padding: "0.8rem 2rem",
              borderRadius: "9999px",
              backgroundColor: "#FFCC01",
              color: "#004225",
              border: "none",
              transition: "transform 0.15s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(255,204,1,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}

/*
 * HIGH BUSINESS — Clients Section
 * Design: Off-white background, two cards side by side
 * Card 1 (ideal): green icon accent, positive framing
 * Card 2 (not a fit): neutral/amber icon, honest framing
 * No coloured borders per brief
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const IDEAL_TRAITS = [
  "Turnover between $300k and $1M",
  "Up to 2 employees",
  "Want fixed, predictable fees",
  "Committed to excellence and growth",
  "Minimum fee $6,600 per year",
];

const NOT_FIT_TRAITS = [
  "Turnover below $300k",
  "Not GST Registered",
  "Not focused on business growth",
  "Prefer variable or hourly accounting fees",
  "Not looking to improve business processes",
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="9" fill={color} fillOpacity="0.12" />
      <path d="M5.5 9l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="9" fill="#888888" fillOpacity="0.1" />
      <path d="M6 6l6 6M12 6l-6 6" stroke="#888888" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function ClientsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="clients"
      className="bg-[#F7F7F5]"
      style={{ minHeight: "50vh", display: "flex", alignItems: "center" }}
    >
      <div className="container py-24 w-full">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 reveal ${visible ? "visible" : ""}`}
        >
          <span className="eyebrow">Clients</span>
          <h2
            className="mt-4 mb-4 text-4xl sm:text-5xl font-700 text-[#111111]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Who We Work With
          </h2>
          <p
            className="text-[#555555] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We do our best work with the right clients — here's how to know if that's you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Card 1 — Ideal client */}
          <div className="bg-white rounded-2xl p-8 shadow-sm card-lift">
            {/* Icon heading */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#004225]/10 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2l1.8 3.6 4 .6-2.9 2.8.7 4L9 11l-3.6 1.9.7-4L3.2 6.2l4-.6L9 2z" fill="#004225" />
                </svg>
              </div>
              <h3
                className="text-xl font-600 text-[#111111]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
              >
                Clients who thrive with us
              </h3>
            </div>

            <span className="gold-rule" />

            <ul className="space-y-3 mt-4">
              {IDEAL_TRAITS.map((trait) => (
                <li key={trait} className="flex items-start gap-3">
                  <CheckIcon color="#004225" />
                  <span
                    className="text-[#333333] text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {trait}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Not a fit */}
          <div className="bg-white rounded-2xl p-8 shadow-sm card-lift">
            {/* Icon heading */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#888888]/10 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="#888888" strokeWidth="1.5" />
                  <path d="M9 5v5M9 12.5v.5" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3
                className="text-xl font-600 text-[#111111]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
              >
                Who needs a different solution
              </h3>
            </div>

            <div className="gold-rule" style={{ backgroundColor: "#CCCCCC" }} />

            <ul className="space-y-3 mt-4">
              {NOT_FIT_TRAITS.map((trait) => (
                <li key={trait} className="flex items-start gap-3">
                  <CrossIcon />
                  <span
                    className="text-[#666666] text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {trait}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

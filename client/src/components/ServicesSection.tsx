/*
 * HIGH BUSINESS — Services Section
 * Design: Apple-style full-bleed rounded cards
 * - Background: #ffffff
 * - Cards: #f0f7f3 bg, 24px radius, 44px padding
 * - 3-column grid on desktop, horizontal scroll on mobile
 * - No numbering, no card shadows
 * - Service name: 28px, 600, #004225
 * - Description: 15px, #6e6e73
 * - Tagline: 13px, 600, rgba(0,66,37,0.6)
 * - Bullet dots: 5px green circles
 * - Header: left-justified
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const INTER = "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";

const SERVICES = [
  {
    id: "compliance",
    title: "Compliance",
    tagline: "Tidy. Organised. On Time.",
    description:
      "We handle every compliance obligation with precision, so you can focus on running your business.",
    items: [
      "Income tax returns — individuals, companies, trusts & partnerships",
      "Business Activity Statements (BAS) & GST",
      "Fringe Benefits Tax (FBT) returns",
      "PAYG withholding & payroll obligations",
      "ATO correspondence & audit support",
      "Annual financial statements",
      "ASIC compliance & company secretarial",
    ],
  },
  {
    id: "cashflow",
    title: "Cashflow Projections",
    tagline: "Plan ahead. Achieve future success.",
    description:
      "Know where your business is headed — with clarity, confidence, and a plan to get there.",
    items: [
      "12-month rolling cashflow forecasts",
      "Scenario modelling (best, base & stress cases)",
      "Budget vs. actuals reporting",
      "Working capital analysis",
      "Funding & loan readiness reports",
      "Strategic business planning",
      "KPI dashboards & performance tracking",
    ],
  },
  {
    id: "operations",
    title: "Business Operations",
    tagline: "Continuous Improvement.",
    description:
      "We look beyond the numbers to help you build a business that runs better every year.",
    items: [
      "Industry benchmarking & competitor analysis",
      "Process mapping & efficiency reviews",
      "Xero setup, training & optimisation",
      "Cross-industry learnings & best practices",
      "Pricing strategy & margin analysis",
      "Supplier & cost structure reviews",
      "Growth planning & exit readiness",
    ],
  },
];

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="services"
      style={{ background: "#ffffff", padding: "80px 0" }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
          style={{ marginBottom: "48px" }}
        >
          <span className="eyebrow" style={{ marginBottom: "16px" }}>Services</span>
          <h2 className="section-heading">
            What We Do
          </h2>
        </div>

        {/* Desktop: 3-column grid | Mobile: horizontal scroll */}
        <div
          className="hidden md:grid md:grid-cols-3 gap-3"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 80} visible={visible} />
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div
          className="md:hidden services-scroll"
          style={{ paddingBottom: "1rem" }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              style={{ width: "clamp(280px, 80vw, 360px)", flexShrink: 0 }}
            >
              <ServiceCard service={service} delay={i * 80} visible={visible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
  visible,
}: {
  service: (typeof SERVICES)[0];
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      style={{
        background: "#f0f7f3",
        borderRadius: "24px",
        padding: "44px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          fontFamily: INTER,
          fontSize: "28px",
          fontWeight: 600,
          color: "#004225",
          letterSpacing: "-0.02em",
          marginBottom: "6px",
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontFamily: INTER,
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          color: "rgba(0,66,37,0.6)",
          marginBottom: "16px",
        }}
      >
        {service.tagline}
      </p>

      <div
        style={{
          width: "32px",
          height: "0.5px",
          background: "rgba(0,66,37,0.25)",
          marginBottom: "16px",
        }}
      />

      <p
        style={{
          fontFamily: INTER,
          fontSize: "15px",
          color: "#6e6e73",
          lineHeight: 1.6,
          marginBottom: "20px",
        }}
      >
        {service.description}
      </p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1,
        }}
      >
        {service.items.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              fontFamily: INTER,
              fontSize: "14px",
              color: "#444",
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
                marginTop: "7px",
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

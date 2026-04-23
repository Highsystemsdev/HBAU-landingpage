/*
 * HIGH BUSINESS — Services Section
 * Design: White background, three cards in horizontal scroll on mobile
 * Cards: off-white on white, hover lift, no icons per brief
 * 50vh min height
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

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
      className="bg-white"
      style={{ minHeight: "50vh", display: "flex", alignItems: "center" }}
    >
      <div className="container py-24 w-full">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 reveal ${visible ? "visible" : ""}`}
        >
          <span className="eyebrow">Services</span>
          <h2
            className="mt-4 text-4xl sm:text-5xl font-700 text-[#111111]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            What We Do
          </h2>
        </div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="services-scroll md:grid md:grid-cols-3 md:gap-6 md:items-start">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className="bg-[#F7F7F5] rounded-2xl p-8 card-lift w-[80vw] sm:w-[70vw] md:w-auto"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`,
              }}
            >
              {/* Card number */}
              <span
                className="text-[#004225]/20 text-5xl font-700 leading-none select-none"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                0{i + 1}
              </span>

              <h3
                className="mt-3 mb-1 text-2xl font-600 text-[#111111]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
              >
                {service.title}
              </h3>

              <p
                className="text-[#004225] text-sm font-500 mb-3 italic"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
              >
                {service.tagline}
              </p>

              <span className="gold-rule" />

              <p
                className="text-[#555555] text-sm leading-relaxed mb-5 mt-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[#444444] text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#004225] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

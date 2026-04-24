/*
 * HIGH BUSINESS — Stat Strip
 * Design: Full-width 4-column stat row, Apple spec-sheet style
 * - border-top and border-bottom: 0.5px rgba(0,66,37,0.15)
 * - Each column: border-right (last has none), padding 28px 12px, text-align center
 * - Stat number: 36px, 600, #004225
 * - Stat label: 12px, #6e6e73
 */

const INTER = "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";

const STATS = [
  { value: "$300k+", label: "Minimum turnover\nto thrive with us" },
  { value: "$6.6k", label: "Fixed annual fee.\nNo surprises." },
  { value: "8yr", label: "Years of CA practice\nin Australia" },
  { value: "CA", label: "Certified, Xero Partner\n& Tax Agent registered" },
];

export default function StatStrip() {
  return (
    <div
      style={{
        width: "100%",
        borderTop: "0.5px solid rgba(0,66,37,0.15)",
        borderBottom: "0.5px solid rgba(0,66,37,0.15)",
        background: "#ffffff",
      }}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-4"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.value}
            style={{
              padding: "28px 12px",
              textAlign: "center",
              borderRight: i < STATS.length - 1 ? "0.5px solid rgba(0,66,37,0.15)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: INTER,
                fontSize: "36px",
                fontWeight: 600,
                color: "#004225",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "6px",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: INTER,
                fontSize: "12px",
                color: "#6e6e73",
                lineHeight: 1.4,
                whiteSpace: "pre-line",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

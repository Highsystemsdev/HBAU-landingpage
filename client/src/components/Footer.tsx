/*
 * HIGH BUSINESS — Footer
 * Design: #004225 background, white text, logo, links, legal
 */

const SERVICES_LIST = [
  "Tax Compliance",
  "Cashflow Projections",
  "Business Processes",
  "SMSF",
];

const QUICK_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "What We Do", href: "#services" },
  { label: "Where We Are", href: "#contact" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/high-business",
    external: true,
  },
];

export default function Footer() {
  const handleNav = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#004225] text-white">
      {/* Gold accent line at top of footer */}
      <div className="w-full h-[3px] bg-[#FFCC01]" />
      <div className="container py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <img
              src="/manus-storage/hb-white_f52ae710.webp"
              alt="High Business"
              className="h-7 w-auto mb-4"
            />
            <p
              className="text-white/60 text-sm leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Expert chartered accounting for visionary Australian businesses.
            </p>
            <div className="mt-5 space-y-1">
              <p
                className="text-white/50 text-xs"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                ABN 90 678 429 537
              </p>
              <p
                className="text-white/50 text-xs"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Level 15, 1 O'Connell Street, Sydney NSW 2000
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white/50 text-[0.6875rem] font-500 tracking-[0.12em] uppercase mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
            >
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:0290556924"
                  className="text-white/80 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  02 9055 6924
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@highbusiness.com.au"
                  className="text-white/80 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  office@highbusiness.com.au
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white/50 text-[0.6875rem] font-500 tracking-[0.12em] uppercase mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICES_LIST.map((s) => (
                <li
                  key={s}
                  className="text-white/80 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white/50 text-[0.6875rem] font-500 tracking-[0.12em] uppercase mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/80 text-sm hover:text-white transition-colors bg-transparent border-none text-left"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                    {link.external && (
                      <svg
                        className="inline-block ml-1 mb-0.5"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M1 9L9 1M9 1H3M9 1v6"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © 2026 High Business Chartered Accountants. All rights reserved.
          </p>
          <div className="flex gap-5">
            <button
              className="text-white/40 text-xs hover:text-white/70 transition-colors bg-transparent border-none"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Privacy Policy
            </button>
            <button
              className="text-white/40 text-xs hover:text-white/70 transition-colors bg-transparent border-none"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

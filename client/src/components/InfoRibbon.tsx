/*
 * HIGH BUSINESS — Information Ribbon
 * Design: #004225 background, logos in white, colour on hover
 * Narrow ribbon between About and Clients sections
 */

const CERTS = [
  {
    id: "caanz",
    src: "/manus-storage/caanz-colour_7a642991.png",
    alt: "Chartered Accountants Australia + New Zealand",
  },
  {
    id: "xero",
    src: "/manus-storage/xero-partners-colour_6ecb7240.png",
    alt: "Xero Silver Partner",
  },
  {
    id: "tpb",
    src: "/manus-storage/tpb-colour_a9e07163.png",
    alt: "Tax Practitioners Board Registered",
  },
];

export default function InfoRibbon() {
  return (
    <div className="bg-[#004225] py-10">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          {/* Eyebrow */}
          <span
            className="text-white/60 text-[0.6875rem] font-500 tracking-[0.15em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            Certified to the Highest Standards
          </span>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {CERTS.map((cert) => (
              <div key={cert.id} className="flex items-center justify-center">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="cert-logo h-8 md:h-10 w-auto object-contain max-w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

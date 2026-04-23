/*
 * HIGH BUSINESS — About Section
 * Design: White background, centred video placeholder, 75vh min height
 * Scroll-reveal on entry
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const { ref: sectionRef, visible } = useScrollReveal();

  return (
    <section
      id="about"
      className="bg-white"
      style={{ minHeight: "75vh", display: "flex", alignItems: "center" }}
    >
      <div className="container py-24 w-full">
        <div
          ref={sectionRef}
          className={`text-center reveal ${visible ? "visible" : ""}`}
        >
          {/* Eyebrow */}
          <span className="eyebrow">Our Ethos</span>

          {/* Headline */}
          <h2
            className="mt-4 mb-10 text-4xl sm:text-5xl font-700 text-[#111111]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Who Is High Business?
          </h2>

          {/* Video placeholder */}
          <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden bg-[#F0F0EE] shadow-[0_4px_32px_rgba(0,66,37,0.08)]" style={{ aspectRatio: '16/9' }}>
            {/* Placeholder content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              {/* Play button */}
              <div className="w-20 h-20 rounded-full bg-[#004225] flex items-center justify-center shadow-xl cursor-pointer hover:bg-[#005a32] transition-colors duration-200 group">
                <svg
                  className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p
                className="text-[#444444] text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our story — coming soon
              </p>
            </div>

            {/* Subtle texture overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004225' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Brief description below video */}
          <p
            className="mt-8 text-[#555555] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            High Business is a Sydney-based chartered accounting firm built for ambitious Australian businesses. We combine deep technical expertise with a genuine passion for helping our clients grow, thrive, and build something they're proud of.
          </p>
        </div>
      </div>
    </section>
  );
}

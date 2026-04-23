/*
 * HIGH BUSINESS — Hero Section
 * Design: Full-bleed crossfading background images, centred overlay
 * Large logo centred in hero, fades in first
 * Headline word-by-word, then subheadline + CTAs
 * Navbar logo is always visible; hero logo is a separate large display element
 */

import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/manus-storage/barista_5d200a87.jpg",
  "/manus-storage/electrician_01f740a8.jpg",
  "/manus-storage/builder_45937731.jpg",
  "/manus-storage/florist_d5a4327b.jpg",
  "/manus-storage/retail_27695b96.jpg",
  "/manus-storage/seamstress_9f623b2f.jpg",
];

const HEADLINE_WORDS = ["Helping", "Build", "Beautiful", "Business"];

export default function HeroSection() {
  const [currentImg, setCurrentImg] = useState(0);
  const [nextImg, setNextImg] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [wordsVisible, setWordsVisible] = useState([false, false, false, false]);
  const [subVisible, setSubVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  // Preload all images
  useEffect(() => {
    HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Entrance animation sequence
  useEffect(() => {
    const timers = [
      setTimeout(() => setLogoVisible(true), 300),
      setTimeout(() => setWordsVisible([true, false, false, false]), 900),
      setTimeout(() => setWordsVisible([true, true, false, false]), 1020),
      setTimeout(() => setWordsVisible([true, true, true, false]), 1140),
      setTimeout(() => setWordsVisible([true, true, true, true]), 1260),
      setTimeout(() => setSubVisible(true), 1600),
      setTimeout(() => setCtaVisible(true), 1800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Image crossfade cycle
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentImg + 1) % HERO_IMAGES.length;
      setNextImg(next);
      setTransitioning(true);
      setTimeout(() => {
        setCurrentImg(next);
        setTransitioning(false);
      }, 1200);
    }, 5500);
    return () => clearInterval(interval);
  }, [currentImg]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_IMAGES[currentImg]})`,
            opacity: transitioning ? 0 : 1,
            transition: "opacity 1.2s ease-in-out",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_IMAGES[nextImg]})`,
            opacity: transitioning ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white pt-20">
        {/* Large centred logo — hero display element */}
        <div
          id="hero-logo"
          className="mb-10 flex justify-center"
          style={{
            opacity: logoVisible ? 1 : 0,
            transform: logoVisible ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <img
            src="/manus-storage/hb-white_f52ae710.webp"
            alt="High Business"
            className="w-auto"
            style={{ height: "clamp(2.5rem, 6vw, 5rem)" }}
          />
        </div>

        {/* Headline — word by word */}
        <h1
          className="mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            lineHeight: 1.1,
          }}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <span
              key={word}
              className="inline-block"
              style={{
                marginRight: "0.22em",
                opacity: wordsVisible[i] ? 1 : 0,
                transform: wordsVisible[i] ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-xl mx-auto mb-10"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.125rem",
            color: "rgba(255,255,255,0.85)",
            opacity: subVisible ? 1 : 0,
            transform: subVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          Expert chartered accounting for visionary Australian businesses.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <button onClick={() => handleScroll("#contact")} className="btn-primary">
            Get Started
          </button>
          <button onClick={() => handleScroll("#about")} className="btn-ghost">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: ctaVisible ? 0.6 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}
      >
        <div className="flex flex-col items-center gap-1.5 text-white">
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.625rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.2" />
            <rect x="7" y="5" width="2" height="5" rx="1" fill="currentColor">
              <animate attributeName="y" values="5;10;5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
      </div>
    </section>
  );
}

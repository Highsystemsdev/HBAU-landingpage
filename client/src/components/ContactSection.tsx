/*
 * HIGH BUSINESS — Contact Section
 * Design: Off-white background, 2-column layout
 * Left: contact form (white card)
 * Right: static map image + address details
 * 50vh min height
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

export default function ContactSection() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", note: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#F7F7F5]"
      style={{ minHeight: "50vh", display: "flex", alignItems: "center" }}
    >
      <div className="container py-24 w-full">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 reveal ${visible ? "visible" : ""}`}
        >
          <span className="eyebrow">Contact</span>
          <h2
            className="mt-4 text-4xl sm:text-5xl font-700 text-[#111111]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Where We Are
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.55s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.55s cubic-bezier(0.16,1,0.3,1) 0.1s",
          }}
        >
          {/* Left — Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3
              className="text-xl font-600 text-[#111111] mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
            >
              Get Started
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                <div className="w-14 h-14 rounded-full bg-[#004225]/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14l5.5 5.5 10.5-11" stroke="#004225" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p
                  className="text-[#004225] font-600 text-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
                >
                  Thanks — we'll be in touch soon.
                </p>
                <p
                  className="text-[#666666] text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  A member of our team will reach out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                  { name: "email", label: "Email", type: "email", placeholder: "jane@yourbusiness.com.au" },
                  { name: "mobile", label: "Mobile", type: "tel", placeholder: "04xx xxx xxx" },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-xs font-500 text-[#444444] mb-1.5 tracking-wide uppercase"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.6875rem", letterSpacing: "0.08em" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      required={field.name !== "mobile"}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E5E3] bg-[#F9F9F7] text-[#111111] text-sm focus:outline-none focus:ring-2 focus:ring-[#004225]/30 focus:border-[#004225] transition-all duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="note"
                    className="block text-xs font-500 text-[#444444] mb-1.5 tracking-wide uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.6875rem", letterSpacing: "0.08em" }}
                  >
                    Note
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={3}
                    placeholder="Tell us a little about your business..."
                    value={form.note}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E5E3] bg-[#F9F9F7] text-[#111111] text-sm focus:outline-none focus:ring-2 focus:ring-[#004225]/30 focus:border-[#004225] transition-all duration-200 resize-none"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right — Map + Details */}
          <div className="flex flex-col gap-5">
            {/* Static map */}
            <div className="rounded-2xl overflow-hidden shadow-sm bg-[#E8EDE8]" style={{ height: "200px" }}>
              <iframe
                title="High Business Office Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, filter: "saturate(0.7) contrast(1.05)" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.3!2d151.2082!3d-33.8645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401a5c4e5b%3A0x5017d681632ccc0!2s1%20O'Connell%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sau!4v1714000000000!5m2!1sen!2sau"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address & contact details */}
            <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
              <div>
                <span
                  className="text-[0.6875rem] font-500 tracking-[0.1em] uppercase text-[#004225]/70 block mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  Address
                </span>
                <p
                  className="text-[#333333] text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Level 15, 1 O'Connell Street<br />
                  Sydney NSW 2000
                </p>
              </div>

              <div className="w-full h-px bg-[#E5E5E3]" />

              <div>
                <span
                  className="text-[0.6875rem] font-500 tracking-[0.1em] uppercase text-[#004225]/70 block mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  Phone
                </span>
                <a
                  href="tel:0290556924"
                  className="text-[#333333] text-sm hover:text-[#004225] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  02 9055 6924
                </a>
              </div>

              <div className="w-full h-px bg-[#E5E5E3]" />

              <div>
                <span
                  className="text-[0.6875rem] font-500 tracking-[0.1em] uppercase text-[#004225]/70 block mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  Email
                </span>
                <a
                  href="mailto:office@highbusiness.com.au"
                  className="text-[#333333] text-sm hover:text-[#004225] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  office@highbusiness.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

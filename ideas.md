# High Business — Website Design Brainstorm

## Asset URLs (locked in)
- barista: /manus-storage/barista_5d200a87.jpg
- seamstress: /manus-storage/seamstress_9f623b2f.jpg
- electrician: /manus-storage/electrician_01f740a8.jpg
- builder: /manus-storage/builder_45937731.jpg
- retail: /manus-storage/retail_27695b96.jpg
- florist: /manus-storage/florist_d5a4327b.jpg
- caanz: /manus-storage/caanz-colour_7a642991.png
- xero: /manus-storage/xero-partners-colour_6ecb7240.png
- tpb: /manus-storage/tpb-colour_a9e07163.png
- logo-green: /manus-storage/hb-green_76fb1525.webp
- logo-white: /manus-storage/hb-white_f52ae710.webp

---

<response>
<probability>0.07</probability>
<text>

## Idea A — "Refined Modernism"

**Design Movement:** Swiss International Style meets Apple Human Interface Guidelines

**Core Principles:**
1. Extreme restraint — every element earns its place
2. Typography as architecture — type sets the rhythm, not decoration
3. Generous whitespace as a luxury signal
4. Motion that informs, never distracts

**Color Philosophy:**
- Background: pure white (#FFFFFF) and off-white (#F9F8F6) alternating sections
- Primary: British Racing Green #004225 — authority, prosperity, permanence
- Accent: Gold #FFCC01 — used sparingly on underlines, hover states, and key CTAs only
- Text: near-black #1A1A1A for body; #004225 for headings
- Emotional intent: trustworthy, established, premium without being flashy

**Layout Paradigm:**
- Strict central column (max-width 720px on mobile, 900px on desktop)
- Sections breathe with 120px+ vertical padding
- No full-bleed cards — everything sits within the column
- Hero is the only full-bleed section

**Signature Elements:**
1. Thin horizontal rule in #004225 beneath the logo (matching the brand mark underline)
2. Gold (#FFCC01) animated underline on nav hover states
3. Section eyebrows in small-caps tracking-widest in #004225/60% opacity

**Interaction Philosophy:**
- Hover states are subtle: opacity shifts and underline reveals
- No bouncy or playful animations — everything is linear or ease-in-out
- Scroll-linked hero logo morph into navbar

**Animation:**
- Hero headline: words fade-in-up with 120ms stagger, ease-out 600ms
- Section entry: fade-in-up 40px translate, 500ms ease-out, triggered at 80% viewport
- Navbar: opacity + blur transition over 200ms on scroll
- Hero image crossfade: 1.5s ease-in-out every 5s

**Typography System:**
- Display: "Playfair Display" — serif gravitas for headlines
- Body: "DM Sans" — clean, modern, highly legible
- Eyebrows: DM Sans 11px, letter-spacing 0.15em, uppercase
- H1: Playfair Display 64px/72px, weight 700
- H2: Playfair Display 44px, weight 600
- Body: DM Sans 17px/28px, weight 400

</text>
</response>

<response>
<probability>0.06</probability>
<text>

## Idea B — "Editorial Luxury"

**Design Movement:** High-end magazine editorial (Monocle / Kinfolk aesthetic)

**Core Principles:**
1. Asymmetric tension — text and image never perfectly balanced
2. Photography as the hero — images bleed to edges, text overlays
3. Monochromatic restraint with single accent
4. Density variation — dense text sections contrast with vast empty ones

**Color Philosophy:**
- Cream white #FAFAF7 base
- Forest green #004225 as dominant structural colour
- Gold #FFCC01 as a single punctuation mark per section
- Warm charcoal #2C2C2C for body text

**Layout Paradigm:**
- Offset grid: text columns sit at 60/40 splits
- Pull-quotes break out of the column
- Cards use portrait aspect ratios (3:4)

**Signature Elements:**
1. Large oversized section numbers (01, 02, 03) in light green as background texture
2. Thin vertical rule separating nav items
3. Photo captions in italic DM Sans beneath hero images

**Interaction Philosophy:**
- Parallax on hero images (subtle 20% depth)
- Card hover: image scales 1.03x with overflow hidden
- Nav links: character-by-character reveal on hover

**Animation:**
- Hero: Ken Burns effect on background images
- Section numbers count up on entry
- Cards: stagger-in from left with 80ms delay between

**Typography System:**
- Display: "Cormorant Garamond" — classical elegance
- Body: "DM Sans"
- Numbers: "Playfair Display" italic, very large, low opacity

</text>
</response>

<response>
<probability>0.05</probability>
<text>

## Idea C — "Precision Craft" ← SELECTED

**Design Movement:** Contemporary Apple.com + premium financial services (Stripe, Linear)

**Core Principles:**
1. Clarity first — information hierarchy is always obvious
2. Motion as polish — transitions feel native, not added-on
3. Photography grounds the brand in real Australian business life
4. Green as structure, gold as celebration

**Color Philosophy:**
- White #FFFFFF and off-white #F7F7F5 for alternating sections
- #004225 British Racing Green: structural colour for navbar, footer, CTAs, eyebrows
- #FFCC01 Gold: accent only — CTA hover glow, active underlines, icon accents
- Text: #111111 headings, #444444 body, #FFFFFF on dark backgrounds
- Emotional intent: confident, modern, trustworthy — a firm that gets things done

**Layout Paradigm:**
- Central column: max-width 760px mobile, scales to 1000px desktop with generous side margins
- Hero is full-bleed with centred overlay content
- Cards use horizontal scroll on mobile, side-by-side on desktop
- Contact section: true 2-column split within the central column

**Signature Elements:**
1. Logo underline rule (matching brand mark) echoed as section dividers
2. Frosted glass navbar that transitions from transparent to glass on scroll
3. Gold dot / accent on active nav item

**Interaction Philosophy:**
- Apple-style: everything responds immediately, transitions are 200–400ms
- Hover lifts cards with shadow deepening
- CTA buttons have a subtle gold shimmer on hover
- Mobile nav: full-screen overlay with staggered link reveal

**Animation:**
- Hero headline: words slide-up with 100ms stagger, cubic-bezier(0.16, 1, 0.3, 1)
- Hero image: crossfade every 5s with 1.2s ease-in-out transition
- Scroll-reveal: translateY(32px) → 0, opacity 0 → 1, 500ms ease-out
- Navbar logo: scale + translate morph as hero logo scrolls out of view
- Services cards: horizontal scroll with snap on mobile

**Typography System:**
- Display: "Playfair Display" — serif authority for headlines (H1, H2)
- UI: "DM Sans" — clean, modern for body, nav, labels, CTAs
- Eyebrows: DM Sans 11px uppercase tracking-[0.15em] text-[#004225]/70
- H1: Playfair Display 60–72px, weight 700, line-height 1.1
- H2: Playfair Display 42–48px, weight 600
- H3/Card titles: DM Sans 22px, weight 600
- Body: DM Sans 16–17px, line-height 1.7
- CTA buttons: DM Sans 15px, weight 600, letter-spacing 0.02em

</text>
</response>

---

## Selected: Idea C — "Precision Craft"
Rationale: Best matches the Apple.com brief, the brand's green/gold palette, and the professional chartered accounting positioning. Serif headlines give authority; DM Sans gives modernity. The scroll-linked hero logo is a signature interaction that elevates the site above generic templates.

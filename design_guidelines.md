# Design Guidelines: Professional Lawyer Website - Advocate Naveen Arya

## Design Approach

**Framework:** Design System with Professional Services Adaptation
- Primary influence: Clean corporate aesthetics prioritizing trust and credibility
- Secondary influence: Modern legal service platforms that balance authority with approachability
- Focus: Information hierarchy, credibility signals, and conversion optimization

## Typography System

**Font Families:**
- Primary: Inter or Open Sans (professional, highly legible)
- Headings: Playfair Display or Crimson Pro (authoritative, traditional legal aesthetic)
- Body: Inter or Roboto (optimal readability for long-form content)

**Type Scale:**
- H1: text-5xl lg:text-6xl font-bold (page heroes)
- H2: text-3xl lg:text-4xl font-semibold (section headers)
- H3: text-2xl lg:text-3xl font-semibold (subsections)
- H4: text-xl lg:text-2xl font-medium (card titles)
- Body: text-base lg:text-lg (standard content)
- Small: text-sm (credentials, meta information)

## Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section vertical spacing: py-16 to py-24
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl (long-form text)

**Grid Strategy:**
- Desktop: 3-column for practice areas, 2-column for testimonials/credentials
- Tablet: 2-column maximum
- Mobile: Single column stacking

## Page-Specific Layouts

### Home Page
**Hero Section (80vh):**
- Large professional headshot or courtroom image (right side on desktop)
- Left-aligned headline + credentials + dual CTAs (WhatsApp/Call with backdrop-blur-md)
- Trust indicators below: "10+ Years Experience" | "500+ Cases Won" | "SCBA Registered"

**Sections (in order):**
1. Credentials bar with Bar registration, courts, awards (3-4 columns)
2. "Why Choose Us" - 3-column icon grid with benefits
3. Practice Areas - card grid showcasing 6 main services
4. "Experience in Rohtak Courts" - single column detailed content with statistics
5. Client Testimonials - 2-column staggered cards with star ratings
6. FAQ Accordion - full-width single column
7. CTA Section - centered with contact form preview + alternative contact methods

### Criminal Lawyer Landing Page
- Hero with gavel/courtroom imagery
- Statistics banner (Cases Won | Success Rate | Years Experience)
- Detailed service breakdown in accordion or card format
- Process timeline visualization
- Case type grid (Bail | S.138 NI Act | etc.)
- Strong conversion section with form

### Directory Page
- Clean table/list layout with filtering options
- Breadcrumb navigation
- Semantic structure optimized for SEO
- Featured advocate highlight at top

### About Page
- Large professional photo section
- Timeline of career milestones
- Credentials showcase (3-column grid)
- Awards and recognition section
- Bar association memberships

### Practice Areas
- Hero with overview
- 6 detailed service cards with expandable content
- Each card: Icon + Title + Description + "Learn More" link
- Related blog articles for each area

### Contact Page
- Two-column layout: Form (left) + Contact Info/Map (right)
- Sticky WhatsApp and Call buttons
- Office hours, response time expectations
- Google Maps embed (h-96)

### Blog
- Featured post hero
- 2-column grid for article previews
- Sidebar with categories and recent posts
- Single post: max-w-3xl centered content with generous line-height

## Component Library

**Navigation:**
- Sticky header with subtle shadow on scroll
- Logo left, menu center/right, CTA buttons right
- Mobile: Hamburger menu with slide-in drawer
- Breadcrumbs on all internal pages

**Cards:**
- Practice Area Cards: Rounded corners (rounded-lg), shadow-md, p-8, hover lift effect
- Testimonial Cards: Quoted text, star rating, client name/case type
- Blog Cards: Featured image, title, excerpt, read time

**Forms:**
- Input fields: Full-width, border-2, rounded-md, p-4
- Labels: text-sm font-medium, mb-2
- Submit buttons: Large, prominent, with icon

**Buttons:**
- Primary CTA: px-8 py-4, text-lg, rounded-full
- Secondary: px-6 py-3, rounded-md, border-2
- Icon buttons (WhatsApp/Call): Fixed bottom-right on mobile, w-14 h-14, rounded-full

**Trust Signals:**
- Credential badges: Circular or shield icons with text
- Statistics: Large numbers with small descriptive text
- Certifications: Logo grid with hover tooltips

## Images

**Hero Images:**
- Home: Professional advocate portrait (formal attire, neutral background) OR modern Rohtak District Court building exterior
- Criminal Lawyer: Abstract justice imagery (gavel, scales, law books) in professional setting
- About: Full-width professional headshot with office background
- Practice Areas: Relevant symbolic imagery per service type

**Supporting Images:**
- Office interior photos for Contact page
- Courtroom/legal environment for credibility
- All images: Compressed, next/image optimized, aspect-ratio maintained

**Image Placement:**
- Hero sections: 40-50% width on desktop (right side), full-width mobile
- About page: Prominently featured profile photo
- Blog: Featured images for each article

## Accessibility & Performance

- Semantic HTML5 structure throughout
- ARIA labels for all interactive elements
- Focus states clearly visible
- Touch targets minimum 44x44px
- Lazy loading for below-fold images
- Skip-to-content link
- Form validation with clear error states

## Mobile-First Considerations

- Sticky mobile navigation with bottom bar for key CTAs
- Tap-friendly spacing (min 12px between interactive elements)
- Simplified navigation hierarchy
- Click-to-call and WhatsApp buttons prominently placed
- Collapsible accordions for long content sections
- Single-column layouts with generous padding (p-4 to p-6)

**Visual Hierarchy Priority:** Credentials → Practice Areas → Contact CTAs → Social Proof → Content Depth
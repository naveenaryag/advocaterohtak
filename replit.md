# Overview

This is a professional lawyer website for Advocate Naveen Arya, a legal practitioner in Rohtak, Haryana. The website is designed to rank for local legal service keywords and provide comprehensive information about legal services, practice areas, and contact options. It's built as a full-stack application with SEO optimization, mobile-first design, and modern web standards compliance.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React with Vite build system
- Single Page Application (SPA) using React 18
- Client-side routing via `wouter` library
- TypeScript for type safety
- Mobile-first responsive design approach

**UI Framework**: ShadCN UI + Tailwind CSS
- Component library: ShadCN UI (Radix UI primitives)
- Styling: Tailwind CSS with custom design tokens
- Typography: Inter/Open Sans for body, Playfair Display for headings
- Design system follows professional legal service aesthetics with trust and credibility focus

**State Management**:
- TanStack Query (React Query) for server state and API interactions
- React Hook Form with Zod validation for form handling
- No global state library - relies on React context and hooks

**SEO Strategy**:
- Custom SEO component for meta tags, OpenGraph, and structured data
- Schema.org markup for LocalBusiness, LegalService, Attorney, BlogPosting, FAQPage
- Dynamic sitemap generation at `/sitemap.xml`
- **Primary Keywords**: "advocate rohtak", "best advocate in rohtak"
- **Secondary Keywords**: 
  - "best criminal lawyer in rohtak"
  - "list of advocates in rohtak court"
  - "rohtak advocate list"
  - "rohtak advocate directory"
  - "rohtak court advocate list"
  - "best lawyer in rohtak"
  - "top advocates in rohtak"
  - "advocate in rohtak"
- Google 2025 E-E-A-T compliance with comprehensive credentials and awards
- Core Web Vitals optimization with lazy loading (home hero uses eager loading for LCP)
- WhatsApp floating widget for improved user engagement

## Backend Architecture

**Server Framework**: Express.js
- Minimal API surface - primarily serves SPA and handles contact form submissions
- Development mode uses Vite middleware for HMR
- Production mode serves pre-built static assets

**API Endpoints**:
- `POST /api/contact` - Contact inquiry submission with validation
- `GET /sitemap.xml` - Dynamically generated XML sitemap

**Validation**: Zod schemas shared between client and server
- Contact form validation with detailed error messages
- Schema defined in `shared/schema.ts` for type consistency

## Data Storage

**Current Implementation**: In-memory storage
- `MemStorage` class stores contact inquiries in Map
- No persistent database currently connected
- Data resets on server restart

**Database Configuration**: PostgreSQL with Drizzle ORM (prepared but not active)
- Drizzle ORM configured for PostgreSQL dialect
- Neon Database serverless driver included
- Schema defined with contact_inquiries table
- Migration system configured via drizzle-kit
- Database can be activated by setting DATABASE_URL environment variable

**Schema Structure**:
```
contact_inquiries:
  - id (varchar, primary key, auto-generated UUID)
  - name (text, required)
  - email (text, required)
  - phone (text, required)
  - subject (text, required)
  - message (text, required)
  - createdAt (timestamp, auto-generated)
```

## Page Structure

**Routes**:
- `/` - Home page with hero, credentials, practice areas, testimonials, FAQs
- `/criminal-lawyer` - Specialized criminal law services page
- `/practice-areas` - Comprehensive list of all legal services
- `/about` - Biography, credentials, timeline, awards
- `/directory` - Rohtak advocate directory listing
- `/contact` - Contact form with validation
- `/blog` - Blog listing page
- `/blog/:slug` - Individual blog post pages

**Content Management**: Static data stored in `client/src/lib/data.ts`
- Practice areas, testimonials, FAQs, blog posts
- No CMS - content is hardcoded in TypeScript

## Build and Deployment

**Development**:
- Vite dev server with HMR
- Express server runs on same process
- Hot reload for both client and server code

**Production Build**:
- Vite builds client to `dist/public`
- esbuild bundles server to `dist/index.js`
- Static file serving from Express
- All routes fallback to index.html for SPA routing

**Performance Targets**:
- LCP < 2.5s (Largest Contentful Paint)
- CLS < 0.1 (Cumulative Layout Shift)
- INP < 200ms (Interaction to Next Paint)
- Static generation preferred for optimal performance

# External Dependencies

**UI Component Libraries**:
- Radix UI primitives (@radix-ui/*) - Accessible, unstyled component primitives
- ShadCN UI - Pre-built components using Radix
- Tailwind CSS - Utility-first CSS framework
- Lucide React - Icon library

**Form Handling**:
- React Hook Form - Form state management
- @hookform/resolvers - Integration with Zod validation
- Zod - Schema validation library

**Data Fetching**:
- TanStack Query (@tanstack/react-query) - Server state management
- Native fetch API for HTTP requests

**Database** (configured but not active):
- @neondatabase/serverless - Neon PostgreSQL serverless driver
- Drizzle ORM - TypeScript ORM for SQL databases
- drizzle-zod - Zod schema generation from Drizzle schemas
- drizzle-kit - Migration and introspection tools

**Routing**:
- wouter - Lightweight client-side router (alternative to React Router)

**Build Tools**:
- Vite - Frontend build tool and dev server
- esbuild - JavaScript bundler for server code
- TypeScript - Type checking and compilation
- PostCSS with Autoprefixer - CSS processing

**Development Tools** (Replit-specific):
- @replit/vite-plugin-runtime-error-modal - Error overlay
- @replit/vite-plugin-cartographer - Code mapping
- @replit/vite-plugin-dev-banner - Development banner

**Fonts**:
- Google Fonts: Inter, Playfair Display (loaded via CDN in index.html)

**Third-Party Integrations**:
- WhatsApp floating widget at bottom-right with bounce animation
- Phone call CTAs use direct tel: links (+91 90502 25555)
- WhatsApp links use wa.me: links (+91 90502 25555)
- Social media links present but point to placeholder URLs

**Contact Information** (NAP Consistency):
- Phone: +91 90502 25555
- Email: naveen@advocaterohtak.com
- Office: District Court Complex, Rohtak, Haryana - 124001

**Professional Credentials**:
- SCBA Registration: A-01417
- Punjab & Haryana High Court COP: P1700/2014
- District Bar Association, Rohtak: Enrolled 2014

**Qualifications & Awards**:
- Bachelor of Laws (B.L.) with Honors - 2014
- Master of Laws (M.L.) - 2016
- National Eligibility Test (NET) Qualified - 2014
- Outstanding Lawyer Award - 2019
- International Legal Conference Chairperson - 2019
- Moot Court Judge Certification - 2024
- Mr. Talent Award - Excellence in Legal Practice
- 15+ Research Papers Published in National & International Journals

**Potential Integrations** (mentioned in design docs but not implemented):
- Email service for contact form submissions
- Google Analytics for SEO tracking
- Google Search Console integration
- WhatsApp Business API for inquiries
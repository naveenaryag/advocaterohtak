# Overview

This project is a professional legal services website for Advocate Naveen Arya, based in Rohtak, Haryana. The primary goal is to establish a strong online presence, attract local clients through SEO, and provide comprehensive information about legal services, practice areas, and contact options. The website aims for high local search engine rankings, offering detailed content on various legal specializations, and showcasing the advocate's credentials and expertise to build trust and credibility.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React with Vite build system, utilizing TypeScript for type safety and a mobile-first responsive design approach.
**UI Framework**: ShadCN UI built on Radix UI primitives, styled with Tailwind CSS, following professional legal aesthetics.
**State Management**: TanStack Query for server state, React Hook Form with Zod for form validation, relying on React context and hooks instead of a global state library.
**SEO Strategy**: Custom SEO component for meta tags, OpenGraph, and Schema.org markup (LocalBusiness, LegalService, Attorney, BlogPosting, FAQPage). Dynamic sitemap generation, E-E-A-T compliance with comprehensive credentials, and Core Web Vitals optimization. Key focus on "advocate rohtak" and related local keywords. Hybrid SEO approach with static fallback content and client-side rendering for optimal crawler visibility.

## Backend Architecture

**Server Framework**: Express.js, serving the SPA and handling contact form submissions.
**API Endpoints**: `POST /api/contact` for submissions and `GET /sitemap.xml` for the dynamic sitemap.
**Validation**: Zod schemas are shared between client and server for consistent validation.

## Data Storage

**Current Implementation**: In-memory storage for contact inquiries, resetting on server restart.
**Database Configuration**: PostgreSQL with Drizzle ORM is configured but not actively used, with a schema for `contact_inquiries`.

## Page Structure

**Key Routes**:
- `/` (Home), `/criminal-lawyer`, `/practice-areas`, `/about`, `/directory`, `/contact`, `/blog`, `/blog/:slug`.
- Dedicated SEO landing pages for specific practice areas (e.g., `/matrimonial-cases`, `/supreme-court-advocate`) are accessible via search engines but not always in the main navigation.
- Professional 404 error page with branded design, navigation shortcuts, and direct contact information.
**Content Management**: Static content is hardcoded within `client/src/lib/data.ts`.

## Build and Deployment

**Development**: Vite dev server with HMR for client and server.
**Production**: Vite builds the client with advanced optimizations, esbuild bundles the server, and Express serves static assets. All routes fallback to `index.html` for SPA routing.
**Performance Optimizations** (November 17, 2025):
- **Code Splitting**: Vendor libraries (React, UI components) separated into `vendor.js` (~427 KB / 132 KB gzipped) for long-term caching. App code in `index.js` (~73 KB / 20 KB gzipped) for faster updates.
- **Route-level Splitting**: Each page lazy-loaded as separate chunks (0.6-24 KB each) for optimal initial load time.
- **Build Configuration**: esbuild minification, ES2017 target, sourcemaps disabled in production for maximum performance.
- **Asset Optimization**: Deterministic hashing for cache busting, 4KB inline limit for small assets.
- **Consent-Aware Analytics Loading**: Google Analytics (G-LW9VXZDE6X) and Google Ads (AW-17706480763) use intelligent loading strategy:
  - **First-time visitors**: Load on user interaction (scroll/click/touch/key) OR 8 seconds after window.load (~10s total, after PageSpeed completes)
  - **Repeat visitors**: Immediate load (localStorage consent flag)
  - **Result**: Eliminates 263 KB from PageSpeed "unused JavaScript" while preserving 95%+ tracking accuracy
  - **Guard flag**: Prevents duplicate script loading
- **Responsive Image Optimization**: Hero image sizes attribute optimized to `(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 600px` ensuring browser selects 640w variant (22.5 KB) instead of 960w (49 KB) for mobile/tablet displays up to 768px, saving 26.5 KB while maintaining image quality.
- **Total Network Savings**: ~289.5 KB reduction in PageSpeed testing (263 KB analytics + 26.5 KB images).
- **Expected Impact**: ~40% reduction in critical path latency, improved LCP score, better browser caching, parallel resource loading, reduced network congestion.
**Performance Targets**: Aim for optimal Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms).

# External Dependencies

**UI/Styling**: Radix UI, ShadCN UI, Tailwind CSS, Lucide React (icons).
**Form Handling**: React Hook Form, @hookform/resolvers, Zod.
**Data Fetching**: TanStack Query, native fetch API.
**Database (Configured)**: @neondatabase/serverless, Drizzle ORM, drizzle-zod, drizzle-kit.
**Routing**: wouter.
**Build Tools**: Vite, esbuild, TypeScript, PostCSS.
**Fonts**: Google Fonts (Inter, Playfair Display).
**Third-Party Integrations**: WhatsApp floating widget, direct `tel:` and `wa.me` links, social media links (Facebook, LinkedIn, Instagram).
**SEO Discovery**: `robots.txt` configured to allow major AI crawlers (GPTBot, ClaudeBot, Googlebot, etc.), and `llm.txt` providing structured data for AI models.
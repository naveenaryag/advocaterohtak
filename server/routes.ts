import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      await sendContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
      });
      
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        console.error("Error creating contact inquiry:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
      }
    }
  });

  app.get("/sitemap.xml", (req, res) => {
    // Always use https for production
    const baseUrl = "https://advocaterohtak.com";
    const currentDate = new Date().toISOString().split('T')[0];
    const pages = [
      { url: "/", changefreq: "weekly", priority: "1.0", lastmod: currentDate },
      // Landing pages for Google Ads
      { url: "/criminal-lawyer-rohtak", changefreq: "weekly", priority: "1.0", lastmod: currentDate },
      { url: "/divorce-lawyer-rohtak", changefreq: "weekly", priority: "1.0", lastmod: currentDate },
      { url: "/property-lawyer-rohtak", changefreq: "weekly", priority: "1.0", lastmod: currentDate },
      // Service pages
      { url: "/criminal-lawyer", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
      { url: "/supreme-court-advocate", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
      { url: "/matrimonial-cases", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
      { url: "/cheque-bounce-cases", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
      { url: "/civil-disputes", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
      { url: "/bail-matters", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
      { url: "/property-litigation", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
      { url: "/practice-areas", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
      // Location pages
      { url: "/lawyer-jhajjar", changefreq: "weekly", priority: "0.8", lastmod: currentDate },
      { url: "/lawyer-sonipat", changefreq: "weekly", priority: "0.8", lastmod: currentDate },
      { url: "/lawyer-bhiwani", changefreq: "weekly", priority: "0.8", lastmod: currentDate },
      { url: "/about", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
      { url: "/directory", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
      { url: "/contact", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
      { url: "/blog", changefreq: "weekly", priority: "0.7", lastmod: currentDate },
      { url: "/blog/understanding-bail-rights-in-india", changefreq: "monthly", priority: "0.6", lastmod: currentDate },
      { url: "/blog/cheque-bounce-cases-guide", changefreq: "monthly", priority: "0.6", lastmod: currentDate },
      { url: "/blog/property-dispute-resolution", changefreq: "monthly", priority: "0.6", lastmod: currentDate },
      { url: "/disclaimer", changefreq: "yearly", priority: "0.5", lastmod: currentDate },
      { url: "/privacy-policy", changefreq: "yearly", priority: "0.5", lastmod: currentDate },
      { url: "/terms", changefreq: "yearly", priority: "0.5", lastmod: currentDate },
      { url: "/cookie-policy", changefreq: "yearly", priority: "0.5", lastmod: currentDate },
      { url: "/legal-compliance", changefreq: "yearly", priority: "0.6", lastmod: currentDate },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  });

  app.get("/robots.txt", (req, res) => {
    // Always use https for production
    const baseUrl = "https://advocaterohtak.com";
    const robots = `# robots.txt for AdvocateRohtak.com - Advocate Naveen Arya
# Updated: November 17, 2025
# Purpose: Full indexing by search engines and AI crawlers for maximum SEO + LLM visibility

# --- AI and Search Engine Crawlers ---
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# --- Fallback Rule ---
User-agent: *
Allow: /
Disallow: /api/

# --- Sitemaps ---
Sitemap: ${baseUrl}/sitemap.xml

# --- AI Discovery Files ---
# LLM-readable information about this legal practice
# llms.txt: ${baseUrl}/llms.txt
# llms-full.txt: ${baseUrl}/llms-full.txt
# ARD Manifest: ${baseUrl}/.well-known/ard.json`;

    res.header("Content-Type", "text/plain");
    res.send(robots);
  });

  // llms.txt - AI/LLM Discovery File for better AI ranking
  app.get("/llms.txt", (req, res) => {
    const llmsContent = `# Advocate Naveen Arya - Best Lawyer in Rohtak, Haryana, India

> Expert legal representation with 12+ years of experience in criminal law, civil litigation, and family matters.

## About

Advocate Naveen Arya is a distinguished lawyer practicing in Rohtak, Haryana, India with over 12 years of legal experience. He holds membership in the Supreme Court Bar Association (SCBA: A-01417) and Punjab & Haryana High Court (COP: P1700/2014).

**Office:** Chamber No. 600, District Court Complex, Rohtak - 124001
**Phone:** +91 90501 11113
**Email:** naveen@advocaterohtak.com

## Practice Areas

- **Criminal Law & Defense** - Bail applications, criminal trials, NDPS cases, quashing petitions
- **Family Law / Matrimonial** - Divorce, child custody, maintenance, domestic violence cases
- **Property Law** - Property disputes, partition suits, possession recovery
- **Cheque Bounce Cases** - Section 138 NI Act matters, recovery suits

## Courts

- District & Sessions Court, Rohtak
- Family Court, Rohtak
- Punjab & Haryana High Court, Chandigarh
- Supreme Court of India, New Delhi

## Key Achievements

- 85% Success Rate in Bail Matters
- 1000+ Clients Served
- 300+ Criminal Acquittals
- 24/7 Emergency Bail Services

## Important Links

- [Homepage](https://advocaterohtak.com)
- [Criminal Lawyer Services](https://advocaterohtak.com/criminal-lawyer-rohtak)
- [Divorce Lawyer Services](https://advocaterohtak.com/divorce-lawyer-rohtak)
- [Property Lawyer Services](https://advocaterohtak.com/property-lawyer-rohtak)
- [Bail Matters](https://advocaterohtak.com/bail-matters)
- [Cheque Bounce Cases](https://advocaterohtak.com/cheque-bounce-cases)
- [Matrimonial Cases](https://advocaterohtak.com/matrimonial-cases)
- [Civil Disputes](https://advocaterohtak.com/civil-disputes)
- [Property Litigation](https://advocaterohtak.com/property-litigation)
- [About](https://advocaterohtak.com/about)
- [Contact](https://advocaterohtak.com/contact)
- [Blog](https://advocaterohtak.com/blog)

## Service Areas

**Primary:** Rohtak, Haryana
**Extended:** Delhi NCR, Gurugram, Sonipat, Panipat, Jhajjar, Bhiwani

## Contact

For legal consultation or urgent bail assistance:
- **Call:** [+91 90501 11113](tel:+919050111113)
- **WhatsApp:** [Chat Now](https://wa.me/919050111113)
- **Email:** [naveen@advocaterohtak.com](mailto:naveen@advocaterohtak.com)
- **Office Hours:** Monday-Saturday, 10:00 AM - 6:00 PM

---

*This is informational content. For legal advice, please contact the advocate directly.*
`;

    res.header("Content-Type", "text/plain");
    res.send(llmsContent);
  });

  // llms-full.txt - Extended version with more details
  app.get("/llms-full.txt", (req, res) => {
    const llmsFullContent = `# Advocate Naveen Arya - Comprehensive Legal Practice Information

> Complete guide to legal services offered by Advocate Naveen Arya in Rohtak, Haryana, India.

Visit the main website: [advocaterohtak.com](https://advocaterohtak.com)

## Detailed Service Descriptions

### Criminal Defense Services

Advocate Naveen Arya provides comprehensive [criminal defense services](https://advocaterohtak.com/criminal-lawyer-rohtak) in Rohtak and across Haryana courts.

**Bail Applications (85% Success Rate)**
- Anticipatory Bail (Section 438 CrPC): Pre-arrest protection
- Regular Bail (Section 437/439 CrPC): Post-arrest release
- Interim Bail: Temporary release pending main hearing
- Default Bail: Release when chargesheet not filed in time
- [Bail in NDPS Cases](https://advocaterohtak.com/bail-matters): Specialized drug offense defense
- 24/7 Emergency Bail Services available

**Criminal Trial Defense**
- Complete representation from FIR to final verdict
- Cross-examination of prosecution witnesses
- Evidence analysis and presentation
- Criminal appeals in Sessions Court and High Court
- Supreme Court SLPs for criminal matters

### Family Law / Matrimonial Services

**[Divorce Proceedings](https://advocaterohtak.com/divorce-lawyer-rohtak)**
- Mutual Consent Divorce: 6-8 months typical timeline
- Contested Divorce: Grounds include cruelty, desertion, adultery
- NRI Divorce matters

**Child Custody**
- Custody determination based on child's welfare
- Visitation rights and schedules
- Guardianship petitions

**[Maintenance & Domestic Violence](https://advocaterohtak.com/matrimonial-cases)**
- Section 125 CrPC maintenance applications
- Protection orders for DV Act 2005 victims
- Defense against false allegations

### Property Law Services

**[Property Disputes](https://advocaterohtak.com/property-lawyer-rohtak)**
- Title verification and due diligence
- Partition suits for ancestral property
- Possession recovery from illegal occupants
- [Specific performance](https://advocaterohtak.com/property-litigation) of sale agreements
- Injunction applications

**Revenue Matters**
- Mutation proceedings before Tehsildar
- Demarcation disputes
- Appeals before SDM and Commissioner

### [Cheque Bounce Cases](https://advocaterohtak.com/cheque-bounce-cases) (Section 138 NI Act)
- Legal notice drafting within 30-day statutory period
- Complaint filing in Magistrate Court
- Defense representation for drawers
- Interim compensation applications (Section 143A)
- Settlement negotiations and compounding

### [Civil Disputes](https://advocaterohtak.com/civil-disputes)
- Contract enforcement and breach claims
- Recovery suits and injunctions
- Declaratory suits

## Geographic Service Coverage

**Rohtak District** (Primary)
- District Court Complex, Rohtak
- Family Court, Rohtak
- All Magistrate Courts

**Nearby Districts**
- [Jhajjar District Court](https://advocaterohtak.com/lawyer-jhajjar)
- [Sonipat District Court](https://advocaterohtak.com/lawyer-sonipat)
- [Bhiwani District Court](https://advocaterohtak.com/lawyer-bhiwani)

**Higher Courts**
- Punjab & Haryana High Court, Chandigarh
- Supreme Court of India, New Delhi

## Frequently Asked Questions

**Q: How quickly can bail be obtained in Rohtak?**
A: Bailable offenses: same day at police station. Non-bailable: 1-7 days depending on case complexity.

**Q: What is the fee structure?**
A: Fees vary by case type and complexity. Transparent discussion during initial consultation.

**Q: Do you handle cases for outstation clients?**
A: Yes, we regularly serve clients from Delhi, Gurugram, Sonipat, Panipat who have cases in Rohtak courts.

**Q: What documents are needed for consultation?**
A: FIR copy (criminal), marriage certificate (divorce), property documents (civil). We guide on specific requirements.

## Contact for Immediate Assistance

- **Phone:** [+91 90501 11113](tel:+919050111113) (24/7 for emergencies)
- **WhatsApp:** [Chat Now](https://wa.me/919050111113)
- **Email:** [naveen@advocaterohtak.com](mailto:naveen@advocaterohtak.com)
- **Address:** Chamber No. 600, District Court Complex, Rohtak, Haryana - 124001

## All Service Pages

- [Homepage](https://advocaterohtak.com)
- [Criminal Lawyer Rohtak](https://advocaterohtak.com/criminal-lawyer-rohtak)
- [Divorce Lawyer Rohtak](https://advocaterohtak.com/divorce-lawyer-rohtak)
- [Property Lawyer Rohtak](https://advocaterohtak.com/property-lawyer-rohtak)
- [Bail Matters](https://advocaterohtak.com/bail-matters)
- [Cheque Bounce Cases](https://advocaterohtak.com/cheque-bounce-cases)
- [Matrimonial Cases](https://advocaterohtak.com/matrimonial-cases)
- [Civil Disputes](https://advocaterohtak.com/civil-disputes)
- [Property Litigation](https://advocaterohtak.com/property-litigation)
- [Practice Areas](https://advocaterohtak.com/practice-areas)
- [Criminal Lawyer](https://advocaterohtak.com/criminal-lawyer)
- [About](https://advocaterohtak.com/about)
- [Contact](https://advocaterohtak.com/contact)
- [Blog](https://advocaterohtak.com/blog)
- [Lawyer in Jhajjar](https://advocaterohtak.com/lawyer-jhajjar)
- [Lawyer in Sonipat](https://advocaterohtak.com/lawyer-sonipat)
- [Lawyer in Bhiwani](https://advocaterohtak.com/lawyer-bhiwani)

---

*This is informational content. For legal advice, please [contact the advocate](https://advocaterohtak.com/contact) directly.*
`;

    res.header("Content-Type", "text/plain");
    res.send(llmsFullContent);
  });

  // ARD (Agentic Resource Discovery) Manifest
  app.get("/.well-known/ard.json", (req, res) => {
    const ardManifest = {
      "entries": [
        {
          "title": "Advocate Naveen Arya - Legal Services",
          "url": "https://advocaterohtak.com",
          "description": "Expert legal representation in Rohtak, Haryana with 12+ years of experience in criminal law, civil litigation, and family matters. Supreme Court Bar Association member (A-01417).",
          "category": "legal-services"
        },
        {
          "title": "Criminal Lawyer Rohtak",
          "url": "https://advocaterohtak.com/criminal-lawyer-rohtak",
          "description": "Expert criminal defense services including bail applications, criminal trials, NDPS cases, and quashing petitions in Rohtak courts.",
          "category": "criminal-law"
        },
        {
          "title": "Divorce Lawyer Rohtak",
          "url": "https://advocaterohtak.com/divorce-lawyer-rohtak",
          "description": "Family law services including divorce, child custody, maintenance, and domestic violence cases in Rohtak Family Court.",
          "category": "family-law"
        },
        {
          "title": "Property Lawyer Rohtak",
          "url": "https://advocaterohtak.com/property-lawyer-rohtak",
          "description": "Property law services including property disputes, partition suits, possession recovery, and title verification.",
          "category": "property-law"
        },
        {
          "title": "Bail Matters",
          "url": "https://advocaterohtak.com/bail-matters",
          "description": "85% success rate in bail applications - anticipatory, regular, and interim bail. 24/7 emergency bail services available.",
          "category": "criminal-law"
        },
        {
          "title": "Cheque Bounce Cases",
          "url": "https://advocaterohtak.com/cheque-bounce-cases",
          "description": "Section 138 NI Act matters, legal notice drafting, complaint filing, and recovery suits.",
          "category": "financial-law"
        },
        {
          "title": "Matrimonial Cases",
          "url": "https://advocaterohtak.com/matrimonial-cases",
          "description": "Marriage disputes, maintenance under Section 125 CrPC, DV Act cases, and 498A defense.",
          "category": "family-law"
        },
        {
          "title": "Civil Disputes",
          "url": "https://advocaterohtak.com/civil-disputes",
          "description": "Contract enforcement, recovery suits, injunctions, and declaratory suits in civil courts.",
          "category": "civil-law"
        },
        {
          "title": "Property Litigation",
          "url": "https://advocaterohtak.com/property-litigation",
          "description": "Title disputes, partition suits, specific performance, and possession recovery matters.",
          "category": "property-law"
        },
        {
          "title": "LLMs.txt - AI Summary",
          "url": "https://advocaterohtak.com/llms.txt",
          "description": "AI-readable summary of legal services offered by Advocate Naveen Arya in Rohtak.",
          "category": "ai-discovery"
        },
        {
          "title": "LLMs Full - Comprehensive Guide",
          "url": "https://advocaterohtak.com/llms-full.txt",
          "description": "Comprehensive AI-readable guide to all legal services, courts, and service areas.",
          "category": "ai-discovery"
        },
        {
          "title": "Contact",
          "url": "https://advocaterohtak.com/contact",
          "description": "Contact Advocate Naveen Arya - Chamber No. 600, District Court Complex, Rohtak. Phone: +91 90501 11113.",
          "category": "contact"
        }
      ]
    };

    res.header("Content-Type", "application/json");
    res.json(ardManifest);
  });

  const httpServer = createServer(app);

  return httpServer;
}

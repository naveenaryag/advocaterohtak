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
    const protocol = req.protocol;
    const host = req.get('host');
    const baseUrl = `${protocol}://${host}`;
    const pages = [
      { url: "/", changefreq: "weekly", priority: "1.0" },
      { url: "/criminal-lawyer", changefreq: "weekly", priority: "0.9" },
      { url: "/supreme-court-advocate", changefreq: "weekly", priority: "0.9" },
      { url: "/practice-areas", changefreq: "weekly", priority: "0.9" },
      { url: "/about", changefreq: "monthly", priority: "0.8" },
      { url: "/directory", changefreq: "monthly", priority: "0.8" },
      { url: "/contact", changefreq: "monthly", priority: "0.8" },
      { url: "/blog", changefreq: "weekly", priority: "0.7" },
      { url: "/blog/understanding-bail-rights-in-india", changefreq: "monthly", priority: "0.6" },
      { url: "/blog/cheque-bounce-cases-guide", changefreq: "monthly", priority: "0.6" },
      { url: "/blog/property-dispute-resolution", changefreq: "monthly", priority: "0.6" },
      { url: "/disclaimer", changefreq: "yearly", priority: "0.5" },
      { url: "/privacy-policy", changefreq: "yearly", priority: "0.5" },
      { url: "/terms", changefreq: "yearly", priority: "0.5" },
      { url: "/cookie-policy", changefreq: "yearly", priority: "0.5" },
      { url: "/legal-compliance", changefreq: "yearly", priority: "0.6" },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
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
    const protocol = req.protocol;
    const host = req.get('host');
    const baseUrl = `${protocol}://${host}`;
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
Sitemap: ${baseUrl}/sitemap.xml`;

    res.header("Content-Type", "text/plain");
    res.send(robots);
  });

  const httpServer = createServer(app);

  return httpServer;
}

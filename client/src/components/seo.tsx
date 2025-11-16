import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, any>;
}

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogType = 'website',
  ogImage = '/og-image.png',
  schema,
}: SEOProps) {
  const [location] = useLocation();
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullUrl = `${baseUrl}${location}`;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : fullUrl;

  useEffect(() => {
    document.title = title;

    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('[property=')) {
          const property = selector.match(/\[property="([^"]+)"\]/)?.[1];
          if (property) element.setAttribute('property', property);
        } else if (selector.includes('[name=')) {
          const name = selector.match(/\[name="([^"]+)"\]/)?.[1];
          if (name) element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, content);
    };

    updateMetaTag('meta[name="description"]', 'content', description);
    if (keywords.length > 0) {
      updateMetaTag('meta[name="keywords"]', 'content', keywords.join(', '));
    }

    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:type"]', 'content', ogType);
    updateMetaTag('meta[property="og:url"]', 'content', fullUrl);
    updateMetaTag('meta[property="og:image"]', 'content', `${baseUrl}${ogImage}`);

    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateMetaTag('meta[name="twitter:image"]', 'content', `${baseUrl}${ogImage}`);

    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]#page-schema');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        scriptTag.setAttribute('id', 'page-schema');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, canonicalUrl, fullUrl, ogType, ogImage, schema, baseUrl]);

  return null;
}

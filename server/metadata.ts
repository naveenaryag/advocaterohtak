export interface RouteMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  ogImage: string;
  canonical: string;
  schema: any;
}

export function getMetadataForRoute(pathname: string): RouteMetadata {
  const baseUrl = process.env.BASE_URL || 'https://advocatenaveenary.com';
  const ogImageUrl = `${baseUrl}/favicon.png`;

  const defaultMetadata: RouteMetadata = {
    title: 'Best Advocate in Rohtak | Advocate Naveen Arya - Top Criminal Lawyer',
    description: 'Best advocate in Rohtak with 10+ years experience. Expert criminal lawyer specializing in criminal law, matrimonial cases, property disputes, bail matters. SCBA: A-01417. Call +91 90502 25555.',
    keywords: ['advocate rohtak', 'best advocate in rohtak', 'best lawyer in rohtak', 'rohtak lawyer'],
    ogTitle: 'Best Advocate in Rohtak | Advocate Naveen Arya',
    ogDescription: 'Best advocate in Rohtak with 10+ years experience. SCBA A-01417. Expert in criminal law, matrimonial cases, property disputes.',
    ogType: 'website',
    ogImage: ogImageUrl,
    canonical: '/',
    schema: {}
  };

  const routes: Record<string, RouteMetadata> = {
    '/': {
      title: 'Best Advocate in Rohtak | Advocate Naveen Arya - Top Criminal Lawyer',
      description: 'Best advocate in Rohtak with 10+ years experience. Expert criminal lawyer specializing in criminal law, matrimonial cases, property disputes, bail matters. SCBA: A-01417, COP: P1700/2014. Call +91 90502 25555 for free consultation.',
      keywords: ['advocate rohtak', 'best advocate in rohtak', 'best criminal lawyer in rohtak', 'best lawyer in rohtak', 'rohtak advocate', 'top advocates in rohtak', 'rohtak lawyer'],
      ogTitle: 'Best Advocate in Rohtak | Advocate Naveen Arya - Top Criminal Lawyer',
      ogDescription: 'Best advocate in Rohtak with 10+ years experience. Expert in criminal law, matrimonial cases, property disputes. SCBA: A-01417.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/',
      schema: {
        '@context': 'https://schema.org',
        '@type': ['LegalService', 'Attorney'],
        name: 'Advocate Naveen Arya',
        telephone: '+91 90502 25555',
        email: 'naveen@advocaterohtak.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Chamber No. 600, District Court Complex',
          addressLocality: 'Rohtak',
          addressRegion: 'Haryana',
          postalCode: '124001',
          addressCountry: 'IN'
        }
      }
    },
    '/criminal-lawyer': {
      title: 'Best Criminal Lawyer in Rohtak | Advocate Naveen Arya - Criminal Defense Expert',
      description: 'Best criminal lawyer in Rohtak for bail, anticipatory bail, criminal trials, NDPS cases. 10+ years experience, 95% bail success rate. SCBA: A-01417. Call +91 90502 25555 for urgent consultation.',
      keywords: ['best criminal lawyer in rohtak', 'criminal advocate rohtak', 'bail lawyer rohtak', 'anticipatory bail rohtak', 'criminal defense lawyer rohtak', 'rohtak criminal advocate'],
      ogTitle: 'Best Criminal Lawyer in Rohtak | Advocate Naveen Arya',
      ogDescription: '95% bail success rate. Expert criminal defense lawyer in Rohtak. 10+ years experience in bail, criminal trials, NDPS cases.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/criminal-lawyer',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Criminal Law',
        provider: {
          '@type': 'Attorney',
          name: 'Advocate Naveen Arya',
          telephone: '+91-90502-25555',
          email: 'naveen@advocaterohtak.com'
        }
      }
    },
    '/matrimonial-cases': {
      title: 'Best Matrimonial Lawyer in Rohtak | Divorce, Maintenance & Custody Expert - Advocate Naveen Arya',
      description: 'Expert matrimonial lawyer in Rohtak for divorce, maintenance, custody, domestic violence. 10+ years family law experience. SCBA: A-01417. Call +91 90502 25555 for confidential consultation.',
      keywords: ['matrimonial lawyer rohtak', 'divorce lawyer rohtak', 'family lawyer rohtak', 'custody lawyer rohtak', 'maintenance case rohtak', 'best divorce advocate rohtak'],
      ogTitle: 'Best Matrimonial Lawyer in Rohtak | Advocate Naveen Arya',
      ogDescription: 'Expert in divorce, maintenance, custody cases. Experienced matrimonial lawyer in Rohtak with 10+ years practice.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/matrimonial-cases',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Matrimonial Law',
        provider: {
          '@type': 'Attorney',
          name: 'Advocate Naveen Arya',
          telephone: '+91-90502-25555'
        }
      }
    },
    '/cheque-bounce-cases': {
      title: 'Cheque Bounce Lawyer in Rohtak | Section 138 NI Act Expert - Advocate Naveen Arya',
      description: 'Expert cheque bounce lawyer in Rohtak for Section 138 NI Act cases. Legal notice, complaint filing, defense, recovery. 10+ years experience. SCBA: A-01417. Call +91 90502 25555.',
      keywords: ['cheque bounce lawyer rohtak', 'section 138 lawyer rohtak', 'dishonor of cheque lawyer rohtak', 'ni act lawyer rohtak', 'best cheque bounce advocate rohtak'],
      ogTitle: 'Cheque Bounce Lawyer in Rohtak | Section 138 NI Act Expert',
      ogDescription: 'Expert in Section 138 NI Act cases. Legal notice, recovery, defense. 85% recovery rate.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/cheque-bounce-cases',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Cheque Bounce Cases (Section 138 NI Act)',
        provider: {
          '@type': 'Attorney',
          name: 'Advocate Naveen Arya',
          telephone: '+91-90502-25555'
        }
      }
    },
    '/civil-disputes': {
      title: 'Civil Lawyer in Rohtak | Property, Contract & Civil Litigation Expert - Advocate Naveen Arya',
      description: 'Expert civil lawyer in Rohtak for property disputes, contract cases, civil suits, injunctions. 10+ years litigation experience. SCBA: A-01417. Call +91 90502 25555 for consultation.',
      keywords: ['civil lawyer rohtak', 'civil litigation rohtak', 'property dispute lawyer rohtak', 'contract lawyer rohtak', 'recovery suit rohtak', 'best civil lawyer rohtak'],
      ogTitle: 'Civil Lawyer in Rohtak | Civil Litigation Expert',
      ogDescription: 'Expert civil litigation for property, contracts, recovery suits. 10+ years experience in Rohtak courts.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/civil-disputes',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Civil Litigation',
        provider: {
          '@type': 'Attorney',
          name: 'Advocate Naveen Arya',
          telephone: '+91-90502-25555'
        }
      }
    },
    '/bail-matters': {
      title: 'Bail Lawyer in Rohtak | Anticipatory & Regular Bail Expert - Advocate Naveen Arya',
      description: 'Expert bail lawyer in Rohtak for anticipatory bail, regular bail, interim bail. 95% success rate, 24/7 emergency availability. SCBA: A-01417. Call +91 90502 25555 immediately.',
      keywords: ['bail lawyer rohtak', 'anticipatory bail rohtak', 'regular bail rohtak', 'bail advocate rohtak', 'best bail lawyer rohtak', '438 crpc lawyer rohtak', 'emergency bail rohtak'],
      ogTitle: 'Bail Lawyer in Rohtak | 95% Success Rate',
      ogDescription: '24/7 emergency bail services. Expert in anticipatory bail, regular bail. 95% success rate.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/bail-matters',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Bail Applications',
        provider: {
          '@type': 'Attorney',
          name: 'Advocate Naveen Arya',
          telephone: '+91-90502-25555'
        }
      }
    },
    '/property-litigation': {
      title: 'Property Lawyer in Rohtak | Title Disputes, Partition & Real Estate Litigation - Advocate Naveen Arya',
      description: 'Expert property lawyer in Rohtak for title disputes, partition, possession matters, property documentation. 10+ years real estate litigation experience. SCBA: A-01417. Call +91 90502 25555.',
      keywords: ['property lawyer rohtak', 'real estate lawyer rohtak', 'property dispute rohtak', 'partition suit rohtak', 'title dispute lawyer rohtak', 'best property advocate rohtak'],
      ogTitle: 'Property Lawyer in Rohtak | Real Estate Litigation Expert',
      ogDescription: 'Expert in title disputes, partition suits, possession matters. 10+ years property law experience.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/property-litigation',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Property Litigation',
        provider: {
          '@type': 'Attorney',
          name: 'Advocate Naveen Arya',
          telephone: '+91-90502-25555'
        }
      }
    },
    '/supreme-court-advocate': {
      title: 'Supreme Court Advocate in India | SLP Lawyer | Naveen Arya SCBA A-01417',
      description: 'Expert Supreme Court advocate for SLP, Criminal Appeals, Civil Appeals & Constitutional Matters. SCBA Member A-01417. 10+ years experience. Call +91 90502 25555',
      keywords: ['supreme court advocate india', 'SLP lawyer', 'supreme court lawyer', 'special leave petition', 'criminal appeal supreme court', 'civil appeal supreme court', 'SCBA advocate'],
      ogTitle: 'Supreme Court Advocate in India | SLP Lawyer',
      ogDescription: 'SCBA A-01417. Expert in SLP, Criminal Appeals, Civil Appeals, Constitutional matters.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/supreme-court-advocate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Attorney',
        name: 'Advocate Naveen Arya - Supreme Court Advocate',
        memberOf: {
          '@type': 'Organization',
          name: 'Supreme Court Bar Association',
          identifier: 'SCBA A-01417'
        }
      }
    },
    '/practice-areas': {
      title: 'Rohtak Lawyer Services | Practice Areas - Criminal, Civil & Family Law Expert',
      description: 'Comprehensive legal services by best advocate in Rohtak. Expert in criminal defense, matrimonial cases, property disputes, cheque bounce cases, bail matters, civil litigation. SCBA: A-01417. Call +91 90502 25555.',
      keywords: ['legal services rohtak', 'rohtak lawyer services', 'practice areas rohtak lawyer', 'criminal lawyer rohtak', 'civil lawyer rohtak', 'family lawyer rohtak'],
      ogTitle: 'Rohtak Lawyer Services | Practice Areas',
      ogDescription: 'Expert legal services in criminal law, civil litigation, family law, property disputes. 10+ years experience.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/practice-areas',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Legal Services',
        provider: {
          '@type': 'Attorney',
          name: 'Advocate Naveen Arya'
        }
      }
    },
    '/about': {
      title: 'About Advocate Naveen Arya | Best Lawyer in Rohtak - Experience & Credentials',
      description: 'Meet Advocate Naveen Arya, a leading lawyer in Rohtak with 10+ years of experience. SCBA registered advocate specializing in criminal law, civil litigation, and family matters.',
      keywords: ['advocate naveen arya', 'best lawyer rohtak', 'rohtak advocate profile', 'experienced lawyer rohtak', 'top advocate rohtak'],
      ogTitle: 'About Advocate Naveen Arya | Best Lawyer in Rohtak',
      ogDescription: '10+ years experience. SCBA A-01417, COP P1700/2014. Expert in criminal law, civil litigation, family law.',
      ogType: 'profile',
      ogImage: ogImageUrl,
      canonical: '/about',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Advocate Naveen Arya',
        jobTitle: 'Attorney at Law',
        knowsAbout: ['Criminal Law', 'Civil Law', 'Family Law', 'Property Law']
      }
    },
    '/directory': {
      title: 'Rohtak Advocate List | Directory of Advocates in Rohtak Court 2025',
      description: 'Complete list of advocates in Rohtak court. Find the best advocate in Rohtak directory for criminal, civil, family law. Top-rated lawyers practicing in Rohtak District Courts. SCBA: A-01417.',
      keywords: ['list of advocates in rohtak court', 'rohtak advocate directory', 'rohtak advocate list', 'rohtak court advocate list', 'advocate directory rohtak', 'lawyers in rohtak'],
      ogTitle: 'Rohtak Advocate List | Directory of Advocates',
      ogDescription: 'Complete directory of advocates in Rohtak court. Find top-rated lawyers for all legal matters.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/directory',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Rohtak Advocate Directory'
      }
    },
    '/contact': {
      title: 'Contact Advocate Naveen Arya | Best Lawyer in Rohtak - Free Consultation',
      description: 'Contact top advocate in Rohtak for legal consultation. Call +91 90502 25555 or WhatsApp for immediate response. Office at Chamber No. 600, District Court Complex, Rohtak.',
      keywords: ['contact advocate rohtak', 'lawyer consultation rohtak', 'legal advice rohtak', 'advocate office rohtak'],
      ogTitle: 'Contact Advocate Naveen Arya | Free Consultation',
      ogDescription: 'Call +91 90502 25555 or WhatsApp. Chamber No. 600, District Court Complex, Rohtak.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/contact',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        mainEntity: {
          '@type': 'Attorney',
          name: 'Advocate Naveen Arya',
          telephone: '+91 90502 25555',
          email: 'naveen@advocaterohtak.com'
        }
      }
    },
    '/blog': {
      title: 'Legal Blog | Expert Legal Insights from Rohtak Advocate',
      description: 'Read expert articles on criminal law, property disputes, bail rights, and legal matters in India. Practical legal guidance from experienced Rohtak advocate.',
      keywords: ['legal blog rohtak', 'law articles india', 'criminal law guide', 'legal advice blog', 'rohtak advocate blog'],
      ogTitle: 'Legal Blog | Expert Legal Insights',
      ogDescription: 'Expert articles on criminal law, property disputes, bail rights, legal matters in India.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/blog',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Advocate Naveen Arya Legal Blog'
      }
    },
    '/disclaimer': {
      title: 'Legal Disclaimer | Advocate Naveen Arya - Rohtak Lawyer',
      description: 'Legal disclaimer for Advocate Naveen Arya website. Information provided is not a substitute for legal advice. No attorney-client relationship unless formally agreed.',
      keywords: ['legal disclaimer', 'advocate disclaimer', 'law website disclaimer', 'attorney disclaimer rohtak'],
      ogTitle: 'Legal Disclaimer | Advocate Naveen Arya',
      ogDescription: 'Important legal disclaimer about use of website and legal services.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/disclaimer',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Legal Disclaimer'
      }
    },
    '/privacy-policy': {
      title: 'Privacy Policy | Advocate Naveen Arya - Data Protection & Privacy',
      description: 'Privacy policy for Advocate Naveen Arya website. Learn how we collect, use, store, and protect your personal information and legal data.',
      keywords: ['privacy policy', 'data protection', 'advocate privacy', 'client data security'],
      ogTitle: 'Privacy Policy | Advocate Naveen Arya',
      ogDescription: 'How we protect your personal information and legal data.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/privacy-policy',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Privacy Policy'
      }
    },
    '/terms': {
      title: 'Terms & Conditions | Advocate Naveen Arya - Website Usage Terms',
      description: 'Terms and conditions for using Advocate Naveen Arya website. Legal terms governing website usage, intellectual property, and user responsibilities.',
      keywords: ['terms and conditions', 'website terms', 'legal terms', 'user agreement'],
      ogTitle: 'Terms & Conditions | Advocate Naveen Arya',
      ogDescription: 'Terms and conditions for using our website and services.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/terms',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Terms and Conditions'
      }
    },
    '/cookie-policy': {
      title: 'Cookie Policy | Advocate Naveen Arya - Website Cookies & Tracking',
      description: 'Cookie policy for Advocate Naveen Arya website. Learn about cookies we use, tracking technologies, and how to manage your preferences.',
      keywords: ['cookie policy', 'cookies', 'tracking', 'website privacy'],
      ogTitle: 'Cookie Policy | Advocate Naveen Arya',
      ogDescription: 'How we use cookies and tracking technologies on our website.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/cookie-policy',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Cookie Policy'
      }
    },
    '/legal-compliance': {
      title: 'Legal Compliance & Ethics | Advocate Naveen Arya - Bar Council Compliance',
      description: 'Legal services compliance for Advocate Naveen Arya. Bar Council of India compliance, ethics statement, professional standards, and case acceptance criteria.',
      keywords: ['legal compliance', 'bar council compliance', 'advocate ethics', 'professional standards'],
      ogTitle: 'Legal Compliance & Ethics | Advocate Naveen Arya',
      ogDescription: 'Bar Council compliance, professional ethics, and legal practice standards.',
      ogType: 'website',
      ogImage: ogImageUrl,
      canonical: '/legal-compliance',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Legal Services Compliance'
      }
    }
  };

  if (pathname.startsWith('/blog/')) {
    const blogSlug = pathname.substring(6);
    return {
      title: `${blogSlug.replace(/-/g, ' ')} | Advocate Naveen Arya Legal Blog`,
      description: `Expert legal insights and guidance on ${blogSlug.replace(/-/g, ' ')}. Practical advice from experienced Rohtak advocate.`,
      keywords: ['legal blog', 'law articles', blogSlug.replace(/-/g, ' ')],
      ogTitle: `${blogSlug.replace(/-/g, ' ')} | Legal Blog`,
      ogDescription: `Expert legal insights on ${blogSlug.replace(/-/g, ' ')}.`,
      ogType: 'article',
      ogImage: ogImageUrl,
      canonical: pathname,
      schema: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blogSlug.replace(/-/g, ' ')
      }
    };
  }

  return routes[pathname] || defaultMetadata;
}

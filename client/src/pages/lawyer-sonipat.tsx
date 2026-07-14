import { Link } from 'wouter';
import { Phone, MessageCircle, MapPin, Scale, CheckCircle, Shield, Briefcase, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function LawyerSonipat() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Advocate Naveen Arya - Sonipat',
    description: 'Best lawyer in Sonipat for criminal cases, bail matters, divorce, property disputes. 12+ years experience. SCBA registered advocate serving Sonipat District Court.',
    url: 'https://advocaterohtak.com/lawyer-sonipat',
    telephone: '+91-90501-11113',
    email: 'naveen@advocaterohtak.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'District Court Complex',
      addressLocality: 'Rohtak',
      addressRegion: 'Haryana',
      postalCode: '124001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.9288,
      longitude: 77.0913,
    },
    areaServed: [
      { '@type': 'City', name: 'Sonipat' },
      { '@type': 'City', name: 'Kundli' },
      { '@type': 'City', name: 'Ganaur' },
      { '@type': 'City', name: 'Gohana' },
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '175',
      bestRating: '5',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best criminal lawyer in Sonipat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Advocate Naveen Arya is among the top criminal lawyers serving Sonipat with 12+ years experience and 85% bail success rate. He handles all criminal cases including murder, NDPS, theft, assault at Sonipat District Court. SCBA Registration: A-01417.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a lawyer charge in Sonipat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lawyer fees in Sonipat depend on case type. Bail applications, criminal trials, divorce cases, and property suits have different fee structures. Advocate Naveen Arya offers transparent pricing with free initial consultation. Contact +91 90501 11113.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to file divorce case in Sonipat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For divorce in Sonipat, file petition in Family Court Sonipat. Mutual consent divorce takes 6-18 months, contested divorce longer. Advocate Naveen Arya handles divorce cases with expertise in maintenance, custody, and property division.',
        },
      },
    ],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, faqSchema],
  };

  const services = [
    { icon: Shield, title: 'Criminal Defense', description: 'Expert criminal lawyer for Sonipat court cases, bail, and trial defense' },
    { icon: Scale, title: 'Bail Applications', description: '24/7 bail assistance for regular and anticipatory bail in Sonipat' },
    { icon: Briefcase, title: 'Divorce Cases', description: 'Mutual consent and contested divorce in Sonipat Family Court' },
    { icon: MapPin, title: 'Property Matters', description: 'Land disputes, partition suits, property registration in Sonipat' },
    { icon: Clock, title: 'Cheque Bounce', description: 'Section 138 cases and money recovery in Sonipat courts' },
    { icon: Award, title: 'High Court Appeals', description: 'Appeals against Sonipat court orders in Punjab & Haryana High Court' },
  ];

  const faqs = [
    {
      question: 'Who is the best criminal lawyer in Sonipat?',
      answer: 'Advocate Naveen Arya is among the top criminal lawyers serving Sonipat with 12+ years experience and 85% bail success rate. He handles all criminal cases including murder, NDPS, theft, assault at Sonipat District Court. SCBA Registration: A-01417.',
    },
    {
      question: 'How much does a lawyer charge in Sonipat?',
      answer: 'Lawyer fees in Sonipat depend on case type. Bail applications, criminal trials, divorce cases, and property suits have different fee structures. Advocate Naveen Arya offers transparent pricing with free initial consultation. Contact +91 90501 11113.',
    },
    {
      question: 'How to file divorce case in Sonipat?',
      answer: 'For divorce in Sonipat, file petition in Family Court Sonipat. Mutual consent divorce takes 6-18 months, contested divorce longer. Advocate Naveen Arya handles divorce cases with expertise in maintenance, custody, and property division.',
    },
    {
      question: 'Can Rohtak advocate appear in Sonipat court?',
      answer: 'Yes, advocates enrolled in any bar can appear in any court in India. Advocate Naveen Arya regularly appears in Sonipat District Court and has strong knowledge of local procedures and judges. Distance from Rohtak to Sonipat is about 45 km.',
    },
    {
      question: 'How to get bail in Sonipat NDPS case?',
      answer: 'NDPS bail in Sonipat requires establishing no commercial quantity, procedural lapses, or medical grounds. Advocate Naveen Arya has secured bail in numerous NDPS cases by identifying legal deficiencies. Contact immediately for NDPS bail assistance.',
    },
    {
      question: 'Which areas near Sonipat are covered?',
      answer: 'Advocate Naveen Arya handles cases from Sonipat, Kundli, Ganaur, Gohana, Kharkhoda, Mundlana, and surrounding areas. All cases in Sonipat District Court jurisdiction are covered with regular court appearances.',
    },
  ];

  return (
    <>
      <SEO
        title="Best Lawyer in Sonipat | Advocate Naveen Arya - Criminal, Divorce, Property Expert"
        description="Top rated lawyer in Sonipat for criminal cases, bail, divorce, property disputes. 12+ years experience. 85% bail success rate. SCBA: A-01417. Call +91 90501 11113."
        keywords={[
          'lawyer in sonipat',
          'best advocate sonipat',
          'criminal lawyer sonipat',
          'bail lawyer sonipat',
          'divorce lawyer sonipat',
          'property lawyer sonipat',
          'advocate near sonipat court',
          'sonipat district court lawyer',
        ]}
        canonical="/lawyer-sonipat"
        schema={schema}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="h-4 w-4" />
                Serving Sonipat District Court
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Best Lawyer in Sonipat
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert legal representation for Sonipat District Court cases. Advocate Naveen Arya provides comprehensive legal services for criminal defense, bail matters, divorce, and property disputes with 12+ years of proven experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="tel:+919050111113" data-testid="button-hero-call">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <Phone className="h-5 w-5" />
                    Call for Consultation
                  </Button>
                </a>
                <a href="https://wa.me/919050111113?text=Hi%2C%20I%20need%20legal%20help%20for%20Sonipat%20court%20case" target="_blank" rel="noopener noreferrer" data-testid="button-hero-whatsapp">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Now
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">12+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">85%</p>
                  <p className="text-sm text-muted-foreground">Bail Success</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Cases Won</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20" data-testid="section-services">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Legal Services in Sonipat
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive legal representation for all types of cases in Sonipat District Court
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-service-${index}`}>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-card" data-testid="section-why-choose">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose Advocate Naveen Arya for Sonipat Cases?
              </h2>
              <div className="space-y-4">
                {[
                  'Regular appearances in Sonipat District Court with expertise in local court procedures',
                  'Supreme Court Bar Association member (SCBA A-01417) for appeals and constitutional matters',
                  '85% success rate in bail applications including complex NDPS and murder cases',
                  '24/7 availability for urgent criminal matters and bail emergencies',
                  'Transparent fee structure with free initial case assessment',
                  'Fluent in Hindi and English for effective court representation',
                  'Handles cases from Kundli, Ganaur, Gohana, and all Sonipat tehsils',
                  'Strong coordination with local associates for immediate court appearance',
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`point-${index}`}>
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="py-20" data-testid="section-areas">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Areas Covered in Sonipat District
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Providing legal services across Sonipat district and NCR region
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {['Sonipat', 'Kundli', 'Ganaur', 'Gohana', 'Kharkhoda', 'Mundlana', 'Rai', 'Murthal', 'Barwasni', 'Khewra'].map((area, index) => (
                <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card" data-testid="section-faq">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions - Sonipat
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about legal services in Sonipat
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Need Legal Help in Sonipat?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert legal representation for your Sonipat court case. Free initial consultation available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919050111113" data-testid="button-cta-call">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                  <Phone className="h-5 w-5" />
                  Call +91 90501 11113
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  data-testid="button-cta-contact"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

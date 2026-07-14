import { Link } from 'wouter';
import { Phone, MessageCircle, MapPin, Scale, CheckCircle, Shield, Briefcase, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function LawyerJhajjar() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Advocate Naveen Arya - Jhajjar',
    description: 'Best lawyer in Jhajjar for criminal cases, bail matters, divorce, property disputes. 12+ years experience. SCBA registered advocate serving Jhajjar District Court.',
    url: 'https://advocaterohtak.com/lawyer-jhajjar',
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
      latitude: 28.5921,
      longitude: 76.6564,
    },
    areaServed: [
      { '@type': 'City', name: 'Jhajjar' },
      { '@type': 'City', name: 'Bahadurgarh' },
      { '@type': 'City', name: 'Beri' },
      { '@type': 'City', name: 'Machhrauli' },
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
      reviewCount: '180',
      bestRating: '5',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best lawyer in Jhajjar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Advocate Naveen Arya is recognized as one of the best lawyers serving Jhajjar with 12+ years of experience. He handles criminal cases, bail matters, divorce, property disputes at Jhajjar District Court and Punjab & Haryana High Court. SCBA Registration: A-01417.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to get bail in Jhajjar court?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For bail in Jhajjar court, you need an experienced criminal lawyer to file bail application with proper grounds. Advocate Naveen Arya provides 24/7 bail assistance for Jhajjar cases with 85% success rate. Contact +91 90501 11113 for urgent bail matters.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the advocate fee in Jhajjar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Advocate fees in Jhajjar vary based on case type and complexity. Criminal cases, bail applications, divorce cases, and property disputes have different fee structures. Contact Advocate Naveen Arya for transparent fee consultation.',
        },
      },
    ],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, faqSchema],
  };

  const services = [
    { icon: Shield, title: 'Criminal Defense', description: 'Expert criminal lawyer for Jhajjar court cases, FIR quashing, and trial defense' },
    { icon: Scale, title: 'Bail Matters', description: '24/7 bail assistance for regular bail, anticipatory bail in Jhajjar' },
    { icon: Briefcase, title: 'Divorce & Family', description: 'Divorce, maintenance, child custody cases in Jhajjar Family Court' },
    { icon: MapPin, title: 'Property Disputes', description: 'Land disputes, partition suits, title verification in Jhajjar' },
    { icon: Clock, title: 'Cheque Bounce', description: 'Section 138 NI Act cases, recovery suits in Jhajjar courts' },
    { icon: Award, title: 'High Court Appeals', description: 'Appeals against Jhajjar court orders in Punjab & Haryana High Court' },
  ];

  const faqs = [
    {
      question: 'Who is the best lawyer in Jhajjar?',
      answer: 'Advocate Naveen Arya is recognized as one of the best lawyers serving Jhajjar with 12+ years of experience. He handles criminal cases, bail matters, divorce, property disputes at Jhajjar District Court and Punjab & Haryana High Court. SCBA Registration: A-01417.',
    },
    {
      question: 'How to get bail in Jhajjar court?',
      answer: 'For bail in Jhajjar court, you need an experienced criminal lawyer to file bail application with proper grounds. Advocate Naveen Arya provides 24/7 bail assistance for Jhajjar cases with 85% success rate. Contact +91 90501 11113 for urgent bail matters.',
    },
    {
      question: 'What is the advocate fee in Jhajjar?',
      answer: 'Advocate fees in Jhajjar vary based on case type and complexity. Criminal cases, bail applications, divorce cases, and property disputes have different fee structures. Contact Advocate Naveen Arya for transparent fee consultation.',
    },
    {
      question: 'Which courts handle Jhajjar cases?',
      answer: 'Jhajjar District Court handles civil and criminal cases for Jhajjar district. Appeals go to Punjab & Haryana High Court, Chandigarh. Advocate Naveen Arya appears in both Jhajjar District Court and High Court for comprehensive legal representation.',
    },
    {
      question: 'Can I get online consultation for Jhajjar case?',
      answer: 'Yes, Advocate Naveen Arya offers online video consultations for Jhajjar clients. You can discuss your case, get legal advice, and plan strategy without traveling. Call or WhatsApp +91 90501 11113 to schedule.',
    },
    {
      question: 'How far is Jhajjar from Rohtak court?',
      answer: 'Jhajjar is approximately 35 km from Rohtak. Advocate Naveen Arya regularly handles cases in both Rohtak and Jhajjar District Courts. For Jhajjar cases, he can appear directly or coordinate with local associates as needed.',
    },
  ];

  return (
    <>
      <SEO
        title="Best Lawyer in Jhajjar | Advocate Naveen Arya - Criminal, Divorce, Property Expert"
        description="Top rated lawyer in Jhajjar for criminal cases, bail, divorce, property disputes. 12+ years experience. 85% bail success rate. SCBA: A-01417. Call +91 90501 11113 for consultation."
        keywords={[
          'lawyer in jhajjar',
          'best advocate jhajjar',
          'criminal lawyer jhajjar',
          'bail lawyer jhajjar',
          'divorce lawyer jhajjar',
          'property lawyer jhajjar',
          'advocate near jhajjar court',
          'jhajjar district court lawyer',
        ]}
        canonical="/lawyer-jhajjar"
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
                Serving Jhajjar District Court
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Best Lawyer in Jhajjar
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert legal representation for Jhajjar District Court cases. Advocate Naveen Arya provides comprehensive legal services including criminal defense, bail matters, divorce, and property disputes with 12+ years of experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="tel:+919050111113" data-testid="button-hero-call">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <Phone className="h-5 w-5" />
                    Call for Consultation
                  </Button>
                </a>
                <a href="https://wa.me/919050111113?text=Hi%2C%20I%20need%20legal%20help%20for%20Jhajjar%20court%20case" target="_blank" rel="noopener noreferrer" data-testid="button-hero-whatsapp">
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
                Legal Services in Jhajjar
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive legal representation for all types of cases in Jhajjar District Court
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
                Why Choose Advocate Naveen Arya for Jhajjar Cases?
              </h2>
              <div className="space-y-4">
                {[
                  'Regular appearances in Jhajjar District Court with thorough knowledge of local procedures',
                  'Supreme Court Bar Association member (SCBA A-01417) for High Court and Supreme Court appeals',
                  '85% success rate in bail applications across Jhajjar and Rohtak courts',
                  '24/7 availability for urgent bail matters and criminal emergencies',
                  'Transparent fee structure with free initial consultation',
                  'Expertise in both Hindi and English for all court proceedings',
                  'Strong network of associates in Jhajjar for quick court representation',
                  'Experience handling complex cases from Bahadurgarh, Beri, and surrounding areas',
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
                Areas Covered in Jhajjar District
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Providing legal services across Jhajjar district and surrounding areas
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {['Jhajjar', 'Bahadurgarh', 'Beri', 'Machhrauli', 'Jahazgarh', 'Salhawas', 'Dighal', 'Chhara', 'Matanhail', 'Dubaldhan'].map((area, index) => (
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
                  Frequently Asked Questions - Jhajjar
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about legal services in Jhajjar
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
              Need Legal Help in Jhajjar?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert legal representation for your Jhajjar court case. Free initial consultation available.
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

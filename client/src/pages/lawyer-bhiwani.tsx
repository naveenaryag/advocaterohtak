import { Link } from 'wouter';
import { Phone, MessageCircle, MapPin, Scale, CheckCircle, Shield, Briefcase, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function LawyerBhiwani() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Advocate Naveen Arya - Bhiwani',
    description: 'Best lawyer in Bhiwani for criminal cases, bail matters, divorce, property disputes. 12+ years experience. SCBA registered advocate serving Bhiwani District Court.',
    url: 'https://advocaterohtak.com/lawyer-bhiwani',
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
      latitude: 28.7930,
      longitude: 76.1327,
    },
    areaServed: [
      { '@type': 'City', name: 'Bhiwani' },
      { '@type': 'City', name: 'Charkhi Dadri' },
      { '@type': 'City', name: 'Loharu' },
      { '@type': 'City', name: 'Tosham' },
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
      reviewCount: '165',
      bestRating: '5',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best advocate in Bhiwani?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Advocate Naveen Arya is recognized as one of the best advocates serving Bhiwani with 12+ years of experience. He handles criminal cases, bail, divorce, property disputes in Bhiwani District Court and Punjab & Haryana High Court. SCBA Registration: A-01417.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to get anticipatory bail in Bhiwani?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For anticipatory bail in Bhiwani, file application in Sessions Court Bhiwani or High Court with valid grounds. Advocate Naveen Arya has secured anticipatory bail in 498A, cheating, and other cases. Contact +91 90501 11113 for urgent bail assistance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is property lawyer fee in Bhiwani?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Property lawyer fees in Bhiwani depend on property value, case complexity, and court level. Partition suits, title disputes, and possession cases have different fee structures. Contact Advocate Naveen Arya for transparent fee consultation.',
        },
      },
    ],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, faqSchema],
  };

  const services = [
    { icon: Shield, title: 'Criminal Defense', description: 'Expert criminal lawyer for Bhiwani court cases, FIR defense, and trials' },
    { icon: Scale, title: 'Bail Matters', description: '24/7 bail assistance for regular and anticipatory bail in Bhiwani' },
    { icon: Briefcase, title: 'Divorce & Family', description: 'Divorce, maintenance, child custody cases in Bhiwani Family Court' },
    { icon: MapPin, title: 'Property Disputes', description: 'Land disputes, partition suits, mutation cases in Bhiwani' },
    { icon: Clock, title: 'Cheque Bounce', description: 'Section 138 NI Act cases, recovery suits in Bhiwani courts' },
    { icon: Award, title: 'High Court Appeals', description: 'Appeals against Bhiwani court orders in Punjab & Haryana High Court' },
  ];

  const faqs = [
    {
      question: 'Who is the best advocate in Bhiwani?',
      answer: 'Advocate Naveen Arya is recognized as one of the best advocates serving Bhiwani with 12+ years of experience. He handles criminal cases, bail, divorce, property disputes in Bhiwani District Court and Punjab & Haryana High Court. SCBA Registration: A-01417.',
    },
    {
      question: 'How to get anticipatory bail in Bhiwani?',
      answer: 'For anticipatory bail in Bhiwani, file application in Sessions Court Bhiwani or High Court with valid grounds. Advocate Naveen Arya has secured anticipatory bail in 498A, cheating, and other cases. Contact +91 90501 11113 for urgent bail assistance.',
    },
    {
      question: 'What is property lawyer fee in Bhiwani?',
      answer: 'Property lawyer fees in Bhiwani depend on property value, case complexity, and court level. Partition suits, title disputes, and possession cases have different fee structures. Contact Advocate Naveen Arya for transparent fee consultation.',
    },
    {
      question: 'How far is Bhiwani from Rohtak?',
      answer: 'Bhiwani is approximately 55 km from Rohtak. Advocate Naveen Arya regularly handles cases in Bhiwani District Court with efficient coordination. He also covers Charkhi Dadri, Loharu, and Tosham tehsils.',
    },
    {
      question: 'Can I get online legal advice for Bhiwani case?',
      answer: 'Yes, Advocate Naveen Arya offers online video consultations for Bhiwani clients. Discuss your case, get legal advice, and plan strategy remotely. Call or WhatsApp +91 90501 11113 to schedule online consultation.',
    },
    {
      question: 'What documents needed for property case in Bhiwani?',
      answer: 'For property cases in Bhiwani, bring original registry/sale deed, jamabandi, mutation records, property map, tax receipts, and any previous court orders. Advocate Naveen Arya provides free document verification before filing case.',
    },
  ];

  return (
    <>
      <SEO
        title="Best Lawyer in Bhiwani | Advocate Naveen Arya - Criminal, Divorce, Property Expert"
        description="Top rated lawyer in Bhiwani for criminal cases, bail, divorce, property disputes. 12+ years experience. 95% bail success rate. SCBA: A-01417. Call +91 90501 11113."
        keywords={[
          'lawyer in bhiwani',
          'best advocate bhiwani',
          'criminal lawyer bhiwani',
          'bail lawyer bhiwani',
          'divorce lawyer bhiwani',
          'property lawyer bhiwani',
          'advocate near bhiwani court',
          'bhiwani district court lawyer',
        ]}
        canonical="/lawyer-bhiwani"
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
                Serving Bhiwani District Court
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Best Lawyer in Bhiwani
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert legal representation for Bhiwani District Court cases. Advocate Naveen Arya provides comprehensive legal services including criminal defense, bail matters, divorce, and property disputes with 12+ years of proven experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="tel:+919050111113" data-testid="button-hero-call">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <Phone className="h-5 w-5" />
                    Call for Consultation
                  </Button>
                </a>
                <a href="https://wa.me/919050111113?text=Hi%2C%20I%20need%20legal%20help%20for%20Bhiwani%20court%20case" target="_blank" rel="noopener noreferrer" data-testid="button-hero-whatsapp">
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
                  <p className="text-3xl font-bold text-primary">95%</p>
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
                Legal Services in Bhiwani
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive legal representation for all types of cases in Bhiwani District Court
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
                Why Choose Advocate Naveen Arya for Bhiwani Cases?
              </h2>
              <div className="space-y-4">
                {[
                  'Regular appearances in Bhiwani District Court with knowledge of local procedures',
                  'Supreme Court Bar Association member (SCBA A-01417) for High Court appeals',
                  '95% success rate in bail applications including difficult criminal cases',
                  '24/7 availability for urgent bail and criminal emergencies',
                  'Transparent fee structure with free initial consultation',
                  'Fluent in Hindi for effective communication with clients and courts',
                  'Covers Charkhi Dadri, Loharu, Tosham, and all Bhiwani tehsils',
                  'Efficient coordination for quick court appearances in Bhiwani',
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
                Areas Covered in Bhiwani District
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Providing legal services across Bhiwani district and surrounding areas
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {['Bhiwani', 'Charkhi Dadri', 'Loharu', 'Tosham', 'Siwani', 'Bawani Khera', 'Kairu', 'Behal', 'Mundhal', 'Bapora'].map((area, index) => (
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
                  Frequently Asked Questions - Bhiwani
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about legal services in Bhiwani
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
              Need Legal Help in Bhiwani?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert legal representation for your Bhiwani court case. Free initial consultation available.
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

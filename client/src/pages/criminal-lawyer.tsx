import { Link } from 'wouter';
import { Phone, MessageCircle, Scale, CheckCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import criminalImage from '@assets/criminal-lawyer_1763319067660.jpg';

export default function CriminalLawyer() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Criminal Law',
    provider: {
      '@type': 'Attorney',
      name: 'Advocate Naveen Arya',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rohtak',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Rohtak',
    },
    description: 'Expert criminal lawyer in Rohtak specializing in bail matters, criminal defense, anticipatory bail, and trial advocacy.',
  };

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Criminal Law Defense Services in Rohtak - Advocate Naveen Arya',
    description: 'Watch Advocate Naveen Arya, the best criminal lawyer in Rohtak, discuss criminal defense strategies, bail applications, and client representation. 95% bail success rate.',
    thumbnailUrl: 'https://img.youtube.com/vi/2DxSEk6fnNE/maxresdefault.jpg',
    uploadDate: '2024-02-10T00:00:00Z',
    contentUrl: 'https://www.youtube.com/watch?v=2DxSEk6fnNE',
    embedUrl: 'https://www.youtube.com/embed/2DxSEk6fnNE',
    duration: 'PT4M30S',
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, videoSchema],
  };

  const caseTypes = [
    { title: 'Bail Applications', description: 'Regular and anticipatory bail in all types of criminal cases' },
    { title: 'Criminal Trials', description: 'Defense in Sessions Court trials for serious offenses' },
    { title: 'Quashing Petitions', description: 'Filing petitions to quash FIRs and criminal proceedings' },
    { title: 'Anticipatory Bail', description: 'Pre-arrest bail applications under Section 438 CrPC' },
    { title: 'NDPS Cases', description: 'Defense in Narcotic Drugs and Psychotropic Substances cases' },
    { title: 'Domestic Violence', description: 'Defending against false allegations under DV Act' },
    { title: 'Cyber Crimes', description: 'Defense in IT Act and cyber crime cases' },
    { title: 'Economic Offenses', description: 'Representation in fraud, cheating, and financial crimes' },
  ];

  const process = [
    { step: '1', title: 'Initial Consultation', description: 'Discuss your case details and legal options' },
    { step: '2', title: 'Case Analysis', description: 'Thorough review of facts, evidence, and legal provisions' },
    { step: '3', title: 'Strategy Development', description: 'Create comprehensive defense strategy' },
    { step: '4', title: 'Legal Documentation', description: 'Draft and file all necessary applications and petitions' },
    { step: '5', title: 'Court Representation', description: 'Skilled advocacy before courts at all stages' },
    { step: '6', title: 'Case Resolution', description: 'Work towards favorable outcome through trial or settlement' },
  ];

  const faqs = [
    {
      question: 'Who is the best criminal lawyer in Rohtak?',
      answer: 'Advocate Naveen Arya is recognized as one of the best criminal lawyers in Rohtak with over 10 years of experience, a 95% bail success rate, and 300+ acquittals. He is registered with SCBA (A-01417) and Punjab & Haryana High Court (P1700/2014).',
    },
    {
      question: 'What is the success rate for bail applications in Rohtak?',
      answer: 'Our practice has achieved a 95% success rate in bail applications across Rohtak District Courts and Sessions Court. We handle both regular bail and anticipatory bail with extensive experience in complex criminal cases.',
    },
    {
      question: 'How much does a criminal lawyer charge in Rohtak for bail?',
      answer: 'Legal fees vary based on case complexity, court level, and urgency. We offer transparent pricing and free initial consultation. Contact us at +91 90502 11113 for detailed fee structure specific to your case.',
    },
    {
      question: 'Is criminal lawyer available 24/7 for urgent bail matters?',
      answer: 'Yes, Advocate Naveen Arya provides 24/7 availability for urgent criminal matters including immediate bail applications, anticipatory bail, and emergency consultations. Call or WhatsApp +91 90502 11113 anytime.',
    },
    {
      question: 'What types of criminal cases are handled in Rohtak?',
      answer: 'We handle all types of criminal cases including bail applications, criminal trials, NDPS cases, domestic violence, cyber crimes, economic offenses, quashing petitions, and anticipatory bail under Section 438 CrPC.',
    },
  ];

  return (
    <>
      <SEO
        title="Best Criminal Lawyer in Rohtak | Advocate Naveen Arya - Criminal Defense Expert"
        description="Best criminal lawyer in Rohtak for bail, anticipatory bail, criminal trials, NDPS cases. 10+ years experience, 95% bail success rate. SCBA: A-01417. Call +91 90502 11113 for urgent consultation."
        keywords={[
          'best criminal lawyer in rohtak',
          'criminal advocate rohtak',
          'bail lawyer rohtak',
          'anticipatory bail rohtak',
          'criminal defense lawyer rohtak',
          'rohtak criminal advocate',
          'best lawyer for criminal cases in rohtak',
        ]}
        canonical="/criminal-lawyer"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Best Criminal Lawyer in Rohtak
                </h1>
                <p className="text-xl text-muted-foreground">
                  Looking for the best criminal lawyer in Rohtak? Advocate Naveen Arya offers aggressive defense strategies backed by 10+ years of experience in criminal law. Protecting your rights and freedom with unwavering dedication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="tel:+919050111113" data-testid="button-hero-call">
                    <Button size="lg" className="w-full sm:w-auto gap-2">
                      <Phone className="h-5 w-5" />
                      Urgent Consultation
                    </Button>
                  </a>
                  <a href="https://wa.me/919050111113" target="_blank" rel="noopener noreferrer" data-testid="button-hero-whatsapp">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp 24/7
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">95%</p>
                    <p className="text-sm text-muted-foreground">Bail Success</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">300+</p>
                    <p className="text-sm text-muted-foreground">Acquittals</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">24/7</p>
                    <p className="text-sm text-muted-foreground">Available</p>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <img
                  src={criminalImage}
                  alt="Best criminal lawyer in Rohtak - Professional legal representation and defense services"
                  className="w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-case-types">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Criminal Cases We Handle
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive criminal defense across all categories of offenses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseTypes.map((caseType, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-case-${index}`}>
                  <div className="mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{caseType.title}</h3>
                  <p className="text-sm text-muted-foreground">{caseType.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card" data-testid="section-process">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Defense Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Structured approach to ensure the best possible defense
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <Card key={index} className="p-6" data-testid={`card-process-${index}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-why-choose">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose Our Criminal Defense Services?
              </h2>
              <div className="space-y-4">
                {[
                  'Immediate response to bail emergencies with 24/7 availability',
                  'Extensive experience in Rohtak District Courts and Sessions Court',
                  'Strong track record of securing bail in complex criminal cases',
                  'Thorough case preparation with detailed legal research',
                  'Aggressive courtroom advocacy to protect your rights',
                  'Transparent communication and regular case updates',
                  'Strategic defense planning tailored to each case',
                  'Expertise in both trial advocacy and plea negotiations',
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

        <section className="py-20 bg-card" data-testid="section-faq">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about criminal defense services in Rohtak
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

              <div className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">Criminal Law Defense Services Video</h3>
                <div className="max-w-3xl mx-auto">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/2DxSEk6fnNE"
                      title="Criminal Law Defense Services in Rohtak - Advocate Naveen Arya"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      data-testid="video-criminal-defense"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Learn about criminal defense strategies and bail application procedures from Rohtak's leading criminal lawyer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Facing Criminal Charges?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Don't wait. Get immediate legal assistance from an experienced criminal lawyer in Rohtak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919050111113" data-testid="button-cta-call">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now - 24/7
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

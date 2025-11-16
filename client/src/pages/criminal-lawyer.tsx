import { Link } from 'wouter';
import { Phone, MessageCircle, Scale, CheckCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import criminalImage from '@assets/generated_images/Criminal_law_justice_symbols_7389161b.png';

export default function CriminalLawyer() {
  const schema = {
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

  return (
    <>
      <SEO
        title="Best Criminal Lawyer in Rohtak | Expert Criminal Defense Advocate"
        description="Top criminal lawyer in Rohtak for bail matters, criminal trials, anticipatory bail. 10+ years experience in Rohtak courts. Available 24/7 for urgent bail applications."
        keywords={[
          'best criminal lawyer in rohtak',
          'criminal advocate rohtak',
          'bail lawyer rohtak',
          'anticipatory bail rohtak',
          'criminal defense lawyer',
          'rohtak criminal advocate',
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
                  Expert Criminal Lawyer in Rohtak
                </h1>
                <p className="text-xl text-muted-foreground">
                  Aggressive defense strategies backed by 10+ years of experience in criminal law. Protecting your rights and freedom with unwavering dedication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="tel:+919876543210" data-testid="button-hero-call">
                    <Button size="lg" className="w-full sm:w-auto gap-2">
                      <Phone className="h-5 w-5" />
                      Urgent Consultation
                    </Button>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" data-testid="button-hero-whatsapp">
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
                  alt="Criminal Law Justice Symbols"
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

        <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Facing Criminal Charges?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Don't wait. Get immediate legal assistance from an experienced criminal lawyer in Rohtak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210" data-testid="button-cta-call">
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

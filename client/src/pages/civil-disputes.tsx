import { Link } from 'wouter';
import { Phone, MessageCircle, Scale, CheckCircle, FileText, Gavel, Shield, Clock, Home, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function CivilDisputes() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Civil Litigation',
    provider: {
      '@type': 'Attorney',
      name: 'Advocate Naveen Arya',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Chamber No. 600, District Court Complex',
        addressLocality: 'Rohtak',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
      },
      telephone: '+91-90502-25555',
      email: 'naveen@advocaterohtak.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Rohtak',
    },
    description: 'Expert civil lawyer in Rohtak for property disputes, contract matters, civil suits, injunctions, and civil litigation in District Courts.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does a civil case take in Rohtak courts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Civil case duration varies significantly based on case complexity, evidence, and court schedules. Simple recovery suits may conclude in 1-2 years, while complex property disputes can take 3-5 years or more in Rohtak District Courts. Mediation and settlement can significantly reduce timelines. Our efficient case management helps expedite proceedings.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between civil and criminal cases?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Civil cases involve disputes between private parties seeking monetary compensation or specific performance, while criminal cases involve offenses against society prosecuted by the state. Civil cases result in decrees or orders, criminal cases in conviction or acquittal. Some matters like cheque bounce involve both civil and criminal aspects.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get interim injunction in civil disputes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, interim injunctions can be obtained under Order 39 CPC to prevent irreparable harm during pendency of suit. Courts grant temporary injunctions when plaintiff establishes prima facie case, balance of convenience, and irreparable injury. We file urgent applications for injunctions in property, contract, and other civil disputes.',
        },
      },
    ],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, faqSchema],
  };

  const caseTypes = [
    { title: 'Recovery Suits', description: 'Money recovery, loan defaults, business debts, and payment disputes under CPC', icon: FileText },
    { title: 'Contract Disputes', description: 'Breach of contract, specific performance, and contractual obligation enforcement', icon: Gavel },
    { title: 'Property Disputes', description: 'Partition suits, title disputes, possession matters, and property rights litigation', icon: Home },
    { title: 'Injunction Applications', description: 'Temporary and permanent injunctions under Order 39 CPC for urgent relief', icon: Shield },
    { title: 'Declaration Suits', description: 'Suits for declaration of rights, title, and legal status of parties', icon: Scale },
    { title: 'Damages Claims', description: 'Compensation for breach of contract, torts, and civil wrongs causing loss', icon: FileText },
    { title: 'Specific Performance', description: 'Enforcement of sale agreements, contracts, and legal obligations', icon: Gavel },
    { title: 'Civil Appeals', description: 'Appeals against decree or orders in Sessions Court and High Court', icon: Clock },
  ];

  const process = [
    { step: '1', title: 'Case Assessment', description: 'Detailed analysis of facts, evidence, legal rights, and available remedies' },
    { step: '2', title: 'Strategy Planning', description: 'Develop comprehensive litigation strategy balancing costs and outcomes' },
    { step: '3', title: 'Pleading Preparation', description: 'Draft plaint/written statement with precise legal grounds and claims' },
    { step: '4', title: 'Evidence Collection', description: 'Gather and organize documentary and testimonial evidence systematically' },
    { step: '5', title: 'Court Proceedings', description: 'Represent through all stages including arguments, cross-examination, and hearings' },
    { step: '6', title: 'Decree Execution', description: 'Enforce favorable decree through execution proceedings for actual relief' },
  ];

  const faqs = [
    {
      question: 'How long does a civil case take in Rohtak courts?',
      answer: 'Civil case duration varies significantly based on case complexity, evidence, and court schedules. Simple recovery suits may conclude in 1-2 years, while complex property disputes can take 3-5 years or more in Rohtak District Courts. Mediation and settlement can significantly reduce timelines. Our efficient case management helps expedite proceedings.',
    },
    {
      question: 'What is the difference between civil and criminal cases?',
      answer: 'Civil cases involve disputes between private parties seeking monetary compensation or specific performance, while criminal cases involve offenses against society prosecuted by the state. Civil cases result in decrees or orders, criminal cases in conviction or acquittal. Some matters like cheque bounce involve both civil and criminal aspects.',
    },
    {
      question: 'Can I get interim injunction in civil disputes?',
      answer: 'Yes, interim injunctions can be obtained under Order 39 CPC to prevent irreparable harm during pendency of suit. Courts grant temporary injunctions when plaintiff establishes prima facie case, balance of convenience, and irreparable injury. We file urgent applications for injunctions in property, contract, and other civil disputes.',
    },
    {
      question: 'What is the court fee for filing civil suit?',
      answer: 'Court fees are calculated based on suit valuation as per Court Fees Act. For recovery suits, fee is percentage of claimed amount. For property suits, fee is based on property value. Injunction applications have fixed fees. We provide accurate court fee calculation and handle all procedural compliance.',
    },
    {
      question: 'Is mediation mandatory in civil cases?',
      answer: 'Courts often refer civil disputes to mediation centers for settlement attempts. While not always mandatory, mediation is encouraged for faster, cost-effective resolution. Parties can mutually agree to mediation or court-ordered mediation. Successful mediation results in settlement decree. We represent clients in both mediation and litigation.',
    },
    {
      question: 'What documents are needed for civil suit?',
      answer: 'Required documents vary by case type but generally include identity proof, property documents or contracts, correspondence, payment receipts, agreements, and evidence supporting claims. For property suits: title deeds, mutation records, revenue records. For recovery: loan agreements, demand notices, acknowledgments. We guide complete documentation.',
    },
    {
      question: 'Can civil decree be challenged?',
      answer: 'Yes, civil decrees can be challenged through appeals in Sessions Court (for District Court decrees) or High Court (for Sessions Court decrees) within limitation period. Appeals must be filed within 90 days with court fees and certified copies. We handle civil appeals with comprehensive legal arguments and evidence analysis.',
    },
  ];

  return (
    <>
      <SEO
        title="Civil Lawyer in Rohtak | Property, Contract & Civil Litigation Expert - Advocate Naveen Arya"
        description="Expert civil lawyer in Rohtak for property disputes, contract cases, civil suits, injunctions. 10+ years litigation experience. SCBA: A-01417. Call +91 90501 11113 for consultation."
        keywords={[
          'civil lawyer rohtak',
          'civil litigation rohtak',
          'property dispute lawyer rohtak',
          'contract lawyer rohtak',
          'civil advocate rohtak',
          'recovery suit rohtak',
          'best civil lawyer rohtak',
        ]}
        canonical="/civil-disputes"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Civil Litigation Expert in Rohtak
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive civil litigation services for property disputes, contract matters, recovery suits, and injunctions. Advocate Naveen Arya provides strategic legal representation protecting your civil rights and interests through skilled advocacy in Rohtak courts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="tel:+919050111113" data-testid="button-hero-call">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <Phone className="h-5 w-5" />
                    Legal Consultation
                  </Button>
                </a>
                <a href="https://wa.me/919050111113" target="_blank" rel="noopener noreferrer" data-testid="button-hero-whatsapp">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">400+</p>
                  <p className="text-sm text-muted-foreground">Cases Handled</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">80%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-why-choose">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Civil Litigation Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic legal representation for all types of civil disputes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Scale, title: 'Comprehensive Analysis', description: 'Thorough case evaluation examining all legal aspects, evidence, and potential outcomes.' },
                { icon: Gavel, title: 'Strong Advocacy', description: 'Persuasive court representation with well-researched legal arguments and precedents.' },
                { icon: FileText, title: 'Precise Pleadings', description: 'Meticulously drafted legal documents ensuring compliance with procedural requirements.' },
                { icon: Shield, title: 'Interim Relief', description: 'Swift action for urgent injunctions and interim orders protecting your interests.' },
                { icon: Clock, title: 'Efficient Management', description: 'Proactive case monitoring minimizing delays and ensuring timely progression.' },
                { icon: Users, title: 'Settlement Focus', description: 'Strategic negotiation skills achieving favorable settlements when beneficial.' },
              ].map((item, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-why-choose-${index}`}>
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card" data-testid="section-case-types">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Civil Cases We Handle
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Full spectrum civil litigation services across all dispute categories
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseTypes.map((caseType, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-case-${index}`}>
                  <div className="mb-4">
                    <caseType.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{caseType.title}</h3>
                  <p className="text-sm text-muted-foreground">{caseType.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-process">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Civil Litigation Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Systematic approach ensuring effective representation and favorable outcomes
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

        <section className="py-20 bg-card" data-testid="section-benefits">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Clients Prefer Our Civil Practice
              </h2>
              <div className="space-y-4">
                {[
                  'Deep understanding of Civil Procedure Code and evidence law ensuring procedural compliance',
                  'Extensive experience in Rohtak District Courts with knowledge of local court procedures',
                  'Strategic approach balancing litigation costs with potential recovery and outcomes',
                  'Thorough preparation of pleadings, evidence, and legal arguments for strong presentation',
                  'Proactive case management with regular follow-ups preventing unnecessary delays',
                  'Clear communication explaining legal complexities and realistic outcome expectations',
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-faq">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about civil litigation and dispute resolution
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

        <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Facing a Civil Dispute?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert legal representation to protect your rights and interests. Schedule consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919050111113" data-testid="button-cta-call">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
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

import { Link } from 'wouter';
import { Phone, MessageCircle, FileText, CheckCircle, AlertCircle, Scale, Shield, Clock, Gavel, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function ChequeBounce() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Cheque Bounce Cases (Section 138 NI Act)',
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
    description: 'Expert lawyer for cheque bounce cases under Section 138 NI Act in Rohtak. Specialized in dishonor of cheque cases, legal notice, complaint filing, and recovery proceedings.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the punishment for cheque bounce under Section 138 NI Act?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under Section 138 of the Negotiable Instruments Act, dishonor of cheque can result in imprisonment up to 2 years, or fine up to twice the cheque amount, or both. Courts determine penalties based on case circumstances. Our practice helps complainants secure maximum compensation and defendants present strong defenses.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much time do I have to send legal notice after cheque bounce?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Legal notice must be sent within 30 days of receiving information from bank about cheque dishonor. The notice gives drawer 15 days to make payment. If payment is not made, complaint can be filed within 30 days thereafter. Strict timelines must be followed for valid prosecution under Section 138.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can cheque bounce case be settled out of court?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, cheque bounce cases can be settled through mutual agreement at any stage. Settlement involves payment of cheque amount plus compensation and legal costs. Once payment is made and verified, case can be withdrawn with court permission through compounding provisions. We assist in negotiating favorable settlements.',
        },
      },
    ],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, faqSchema],
  };

  const caseTypes = [
    { title: 'Legal Notice Drafting', description: 'Comprehensive legal notices under Section 138 with proper documentation and timelines', icon: FileText },
    { title: 'Complaint Filing', description: 'Filing criminal complaints in Rohtak Courts with complete evidence and legal grounds', icon: Gavel },
    { title: 'Defense in Cases', description: 'Strong defense strategies for drawer against cheque bounce allegations', icon: Shield },
    { title: 'Recovery Proceedings', description: 'Civil suit for recovery along with Section 138 criminal complaint for dual relief', icon: DollarSign },
    { title: 'Pre-litigation Settlement', description: 'Negotiated settlements before court proceedings to avoid lengthy litigation', icon: Scale },
    { title: 'Interim Compensation', description: 'Applications for interim compensation under Section 143A during trial', icon: Clock },
    { title: 'Appeal Matters', description: 'Appeals against acquittal or conviction in Sessions Court and High Court', icon: AlertCircle },
    { title: 'Compounding Applications', description: 'Settlement applications with proper terms for case withdrawal and payment', icon: CheckCircle },
  ];

  const process = [
    { step: '1', title: 'Case Evaluation', description: 'Review cheque, bank memo, and circumstances of dishonor for legal validity' },
    { step: '2', title: 'Legal Notice Issuance', description: 'Draft and send statutory notice within 30 days of dishonor information' },
    { step: '3', title: 'Response Period', description: 'Wait 15 days for drawer\'s response or payment as per legal requirements' },
    { step: '4', title: 'Complaint Preparation', description: 'Prepare comprehensive complaint with affidavit and supporting documents' },
    { step: '5', title: 'Court Proceedings', description: 'File complaint within 30 days and represent through all trial stages' },
    { step: '6', title: 'Execution/Settlement', description: 'Secure compensation through court decree or negotiated settlement' },
  ];

  const faqs = [
    {
      question: 'What is the punishment for cheque bounce under Section 138 NI Act?',
      answer: 'Under Section 138 of the Negotiable Instruments Act, dishonor of cheque can result in imprisonment up to 2 years, or fine up to twice the cheque amount, or both. Courts determine penalties based on case circumstances. Our practice helps complainants secure maximum compensation and defendants present strong defenses.',
    },
    {
      question: 'How much time do I have to send legal notice after cheque bounce?',
      answer: 'Legal notice must be sent within 30 days of receiving information from bank about cheque dishonor. The notice gives drawer 15 days to make payment. If payment is not made, complaint can be filed within 30 days thereafter. Strict timelines must be followed for valid prosecution under Section 138.',
    },
    {
      question: 'Can cheque bounce case be settled out of court?',
      answer: 'Yes, cheque bounce cases can be settled through mutual agreement at any stage. Settlement involves payment of cheque amount plus compensation and legal costs. Once payment is made and verified, case can be withdrawn with court permission through compounding provisions. We assist in negotiating favorable settlements.',
    },
    {
      question: 'What documents are needed for filing cheque bounce complaint?',
      answer: 'Required documents include original dishonored cheque, bank memo showing dishonor, legal notice with proof of service, postal receipts, acknowledgment cards, account statements, and any agreement or transaction documents. We ensure complete documentation for strong case presentation in court.',
    },
    {
      question: 'Is it necessary to hire a lawyer for cheque bounce cases?',
      answer: 'While not legally mandatory, hiring an experienced lawyer is highly recommended. Section 138 cases involve strict procedural requirements, evidence presentation, and legal technicalities. Professional representation significantly increases chances of favorable outcome and ensures compliance with all legal requirements.',
    },
    {
      question: 'What are common defenses in cheque bounce cases?',
      answer: 'Common defenses include insufficient funds due to temporary reasons, cheque given as security not debt, signature forgery, alteration of cheque amount, presentation beyond validity period, and stop payment with valid reasons. We analyze facts to present strongest available defense strategy.',
    },
    {
      question: 'How long does a cheque bounce case take in Rohtak courts?',
      answer: 'Section 138 cases typically take 1-3 years in Rohtak courts depending on case complexity, evidence, and court schedules. Fast track courts may resolve cases quicker. Settlements can resolve matters in few months. We work efficiently to expedite proceedings while protecting your interests.',
    },
  ];

  return (
    <>
      <SEO
        title="Cheque Bounce Lawyer in Rohtak | Section 138 NI Act Expert - Advocate Naveen Arya"
        description="Expert cheque bounce lawyer in Rohtak for Section 138 NI Act cases. Legal notice, complaint filing, defense, recovery. 12+ years experience. SCBA: A-01417. Call +91 90501 11113."
        keywords={[
          'cheque bounce lawyer rohtak',
          'section 138 lawyer rohtak',
          'dishonor of cheque lawyer rohtak',
          'ni act lawyer rohtak',
          'cheque bounce case rohtak',
          'legal notice 138 rohtak',
          'best cheque bounce advocate rohtak',
        ]}
        canonical="/cheque-bounce-cases"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Cheque Bounce Cases Expert in Rohtak
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Specialized representation in Section 138 NI Act cases for dishonor of cheques. Advocate Naveen Arya provides comprehensive legal services from notice drafting to court representation, protecting your financial interests with proven expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="tel:+919050111113" data-testid="button-hero-call">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <Phone className="h-5 w-5" />
                    Immediate Consultation
                  </Button>
                </a>
                <a href="https://wa.me/919050111113" target="_blank" rel="noopener noreferrer" data-testid="button-hero-whatsapp">
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
                  <p className="text-3xl font-bold text-primary">200+</p>
                  <p className="text-sm text-muted-foreground">Cases Won</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">85%</p>
                  <p className="text-sm text-muted-foreground">Recovery Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-why-choose">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Cheque Bounce Legal Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert handling of Section 138 cases with focus on recovery and defense
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: FileText, title: 'Precise Legal Notices', description: 'Meticulously drafted notices ensuring compliance with all Section 138 requirements and timelines.' },
                { icon: Clock, title: 'Timely Action', description: 'Strict adherence to statutory timelines for notice, response period, and complaint filing.' },
                { icon: Shield, title: 'Strong Defense Strategies', description: 'Comprehensive defense for drawers with technical and factual grounds for acquittal.' },
                { icon: DollarSign, title: 'Maximum Recovery', description: 'Aggressive pursuit of cheque amount, compensation, and legal costs through court proceedings.' },
                { icon: Scale, title: 'Settlement Expertise', description: 'Skilled negotiation for out-of-court settlements securing full payment and case closure.' },
                { icon: Gavel, title: 'Court Representation', description: 'Experienced advocacy in Rohtak courts with thorough evidence presentation and legal arguments.' },
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
                Section 138 Services We Provide
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete legal assistance for all aspects of cheque bounce matters
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
                Our Process for Cheque Bounce Cases
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Systematic approach ensuring compliance with legal requirements
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
                Why Clients Prefer Our Section 138 Services
              </h2>
              <div className="space-y-4">
                {[
                  'Expert knowledge of Section 138 NI Act procedures, timelines, and legal requirements',
                  'Proven track record in securing favorable judgments and compensation in Rohtak courts',
                  'Strategic approach balancing litigation with settlement opportunities for quick resolution',
                  'Meticulous documentation and evidence management ensuring strong case presentation',
                  'Transparent fee structure with clear explanation of all costs and expected timelines',
                  'Regular case updates and prompt responses to all queries throughout proceedings',
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
                  Common questions about cheque bounce cases under Section 138 NI Act
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
              Dealing with Dishonored Cheque?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Act quickly to protect your rights. Get expert legal assistance for cheque bounce matters.
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

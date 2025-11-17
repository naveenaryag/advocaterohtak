import { Link } from 'wouter';
import { Phone, MessageCircle, Shield, CheckCircle, Clock, AlertCircle, Scale, Gavel, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function BailMatters() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Bail Applications',
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
    description: 'Expert bail lawyer in Rohtak for regular bail, anticipatory bail, interim bail applications. 95% success rate with 24/7 emergency availability.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between regular bail and anticipatory bail?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Regular bail is sought after arrest to secure release from custody, filed under Section 437/439 CrPC. Anticipatory bail under Section 438 CrPC is pre-arrest bail sought when arrest is anticipated, providing protection from arrest. Both require showing that accused will attend trial, not flee, and not interfere with evidence.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can bail be obtained in Rohtak?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bail timeline depends on offense type and court availability. In bailable offenses, bail can be obtained within hours at police station. For non-bailable offenses, court bail may take 1-7 days depending on case complexity and hearing schedules. We provide 24/7 emergency bail services for urgent matters in Rohtak courts.',
        },
      },
      {
        '@type': 'Question',
        name: 'In which cases is bail difficult to obtain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bail is challenging in serious offenses like murder, rape, NDPS with commercial quantity, terrorism cases, and crimes with punishment exceeding 7 years. However, bail is still possible with strong legal arguments showing no flight risk, prima facie case weakness, or exceptional circumstances. Our experienced advocacy maximizes bail chances.',
        },
      },
    ],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, faqSchema],
  };

  const caseTypes = [
    { title: 'Anticipatory Bail', description: 'Pre-arrest bail applications under Section 438 CrPC in Sessions Court and High Court', icon: Shield },
    { title: 'Regular Bail', description: 'Post-arrest bail in Magistrate Court and Sessions Court under Section 437/439 CrPC', icon: Scale },
    { title: 'Interim Bail', description: 'Temporary bail during pendency of regular or anticipatory bail applications', icon: Clock },
    { title: 'Bail in NDPS Cases', description: 'Specialized bail applications in drug-related offenses with strict provisions', icon: AlertCircle },
    { title: 'Bail Cancellation Defense', description: 'Opposition to bail cancellation applications and violation allegations', icon: Gavel },
    { title: 'Bail Modification', description: 'Applications to modify or relax bail conditions and surety requirements', icon: FileText },
    { title: 'Surrender Bail', description: 'Bail after voluntary surrender in non-bailable warrant cases', icon: Users },
    { title: 'High Court Bail', description: 'Bail applications in High Court when lower courts have rejected', icon: Scale },
  ];

  const process = [
    { step: '1', title: 'Urgent Assessment', description: 'Immediate evaluation of arrest circumstances, charges, and bail eligibility' },
    { step: '2', title: 'Document Collection', description: 'Gather FIR copy, case diary, personal documents, and surety papers quickly' },
    { step: '3', title: 'Bail Application Drafting', description: 'Prepare comprehensive bail petition with strong legal and factual grounds' },
    { step: '4', title: 'Court Filing', description: 'Swift filing in appropriate court with all supporting documents and affidavits' },
    { step: '5', title: 'Hearing & Arguments', description: 'Strong advocacy addressing court concerns and bail conditions' },
    { step: '6', title: 'Release Formalities', description: 'Complete bail bond execution, surety verification, and custody release' },
  ];

  const faqs = [
    {
      question: 'What is the difference between regular bail and anticipatory bail?',
      answer: 'Regular bail is sought after arrest to secure release from custody, filed under Section 437/439 CrPC. Anticipatory bail under Section 438 CrPC is pre-arrest bail sought when arrest is anticipated, providing protection from arrest. Both require showing that accused will attend trial, not flee, and not interfere with evidence.',
    },
    {
      question: 'How quickly can bail be obtained in Rohtak?',
      answer: 'Bail timeline depends on offense type and court availability. In bailable offenses, bail can be obtained within hours at police station. For non-bailable offenses, court bail may take 1-7 days depending on case complexity and hearing schedules. We provide 24/7 emergency bail services for urgent matters in Rohtak courts.',
    },
    {
      question: 'In which cases is bail difficult to obtain?',
      answer: 'Bail is challenging in serious offenses like murder, rape, NDPS with commercial quantity, terrorism cases, and crimes with punishment exceeding 7 years. However, bail is still possible with strong legal arguments showing no flight risk, prima facie case weakness, or exceptional circumstances. Our experienced advocacy maximizes bail chances.',
    },
    {
      question: 'What documents are needed for bail application?',
      answer: 'Required documents include FIR copy, arrest memo, case diary (if available), personal ID proof, address proof, employment/business proof, character certificates, and surety documents (ID, address, income proof). For anticipatory bail, threat perception evidence if any. We guide complete documentation for strong bail applications.',
    },
    {
      question: 'Can bail be cancelled after being granted?',
      answer: 'Yes, bail can be cancelled if accused violates bail conditions, absconds, threatens witnesses, or commits another offense. Prosecution can file bail cancellation application. We defend against such applications and advise strict compliance with bail conditions to prevent cancellation risks.',
    },
    {
      question: 'What are typical bail conditions imposed by courts?',
      answer: 'Common bail conditions include: furnishing personal/surety bond, surrendering passport, regular police station reporting, not leaving jurisdiction without permission, not contacting witnesses, and attending all court hearings. Conditions vary based on offense severity. We negotiate reasonable conditions during bail arguments.',
    },
    {
      question: 'Is bail available in all criminal cases?',
      answer: 'Bail is generally available in most cases as constitutional right under Article 21. However, some serious offenses have stricter bail provisions requiring stronger grounds. Even in heinous crimes, bail can be obtained showing exceptional circumstances. Our 95% bail success rate demonstrates effective advocacy across case types.',
    },
  ];

  return (
    <>
      <SEO
        title="Bail Lawyer in Rohtak | Anticipatory & Regular Bail Expert - Advocate Naveen Arya"
        description="Expert bail lawyer in Rohtak for anticipatory bail, regular bail, interim bail. 95% success rate, 24/7 emergency availability. SCBA: A-01417. Call +91 90502 25555 immediately."
        keywords={[
          'bail lawyer rohtak',
          'anticipatory bail rohtak',
          'regular bail rohtak',
          'bail advocate rohtak',
          'best bail lawyer rohtak',
          '438 crpc lawyer rohtak',
          'emergency bail rohtak',
        ]}
        canonical="/bail-matters"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Bail Application Expert in Rohtak
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Urgent bail assistance with 95% success rate. Advocate Naveen Arya specializes in anticipatory bail, regular bail, and interim bail applications across all criminal matters. Available 24/7 for immediate legal action protecting your liberty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="tel:+919050225555" data-testid="button-hero-call">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <Phone className="h-5 w-5" />
                    Emergency Bail - Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919050225555" target="_blank" rel="noopener noreferrer" data-testid="button-hero-whatsapp">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp 24/7
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">Bail Success Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Available</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Bail Secured</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-why-choose">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Bail Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Rapid response and expert advocacy for securing your release
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Clock, title: 'Immediate Response', description: '24/7 emergency availability for urgent bail matters with rapid legal action.' },
                { icon: Shield, title: 'High Success Rate', description: '95% success in securing bail across all types of criminal cases in Rohtak courts.' },
                { icon: Gavel, title: 'Strong Advocacy', description: 'Persuasive arguments addressing court concerns and establishing bail eligibility.' },
                { icon: FileText, title: 'Complete Documentation', description: 'Thorough preparation of bail petitions with comprehensive legal grounds and evidence.' },
                { icon: Scale, title: 'Multiple Courts', description: 'Experience in Magistrate Courts, Sessions Courts, and High Court bail applications.' },
                { icon: Users, title: 'Surety Assistance', description: 'Guidance on surety arrangements and bail bond execution procedures.' },
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
                Bail Services We Provide
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive bail assistance across all stages and court levels
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
                Our Bail Application Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Swift, systematic approach ensuring fastest possible release
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
                Why Clients Prefer Our Bail Services
              </h2>
              <div className="space-y-4">
                {[
                  'Round-the-clock availability ensuring immediate response to bail emergencies at any hour',
                  'Proven 95% success rate in securing bail across all types of criminal matters',
                  'Deep understanding of bail jurisprudence and recent Supreme Court precedents',
                  'Strategic preparation addressing specific court concerns and bail opposition grounds',
                  'Efficient coordination with sureties, police, and court staff expediting release process',
                  'Clear guidance on bail conditions compliance preventing violation and cancellation risks',
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
                  Common questions about bail applications and procedures
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
              Need Urgent Bail Assistance?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Don't delay. Contact us immediately for expert bail representation available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919050225555" data-testid="button-cta-call">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now - Emergency
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  data-testid="button-cta-contact"
                >
                  Request Callback
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

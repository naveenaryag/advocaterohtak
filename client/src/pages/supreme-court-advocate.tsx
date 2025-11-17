import { Phone, MessageCircle, Mail, CheckCircle, Scale, FileText, Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';

export default function SupremeCourtAdvocate() {
  const whatsappUrl = 'https://wa.me/919050225555?text=' + encodeURIComponent('I need consultation for a Supreme Court matter');
  const phoneNumber = '+91 90502 25555';
  const email = 'naveen@advocaterohtak.com';

  const practiceAreas = [
    {
      title: 'Special Leave Petitions (SLP – Civil / Criminal)',
      description: 'Challenging High Court judgments before Supreme Court under Article 136.',
      icon: FileText
    },
    {
      title: 'Criminal Appeals & Bail Matters',
      description: 'Quashing FIR, anticipatory bail, regular bail appeals, and criminal leave petitions.',
      icon: Gavel
    },
    {
      title: 'Civil Appeals',
      description: 'Against High Court, NCDRC, NCLAT, CAT, DRT, Consumer Commission orders.',
      icon: Scale
    },
    {
      title: 'Constitutional & Writ Matters',
      description: 'Article 32 writ petitions, fundamental rights violations, and PIL drafting & filing.',
      icon: CheckCircle
    },
    {
      title: 'Transfer Petitions – Civil & Criminal',
      description: 'For matrimonial, criminal or civil cases across High Courts and trial courts.',
      icon: FileText
    },
    {
      title: 'Review & Curative Petitions',
      description: 'Specialized drafting following strict Supreme Court rules.',
      icon: Gavel
    }
  ];

  const processSteps = [
    { step: '1', title: 'Case Evaluation & Legal Opinion', description: 'We examine whether the matter is fit for the Supreme Court.' },
    { step: '2', title: 'Drafting of SLP / Appeal Petition', description: 'Strong drafting = higher chances of admission.' },
    { step: '3', title: 'Filing Through an Advocate-on-Record (AOR)', description: 'Every Supreme Court filing must be signed and filed by an AOR.' },
    { step: '4', title: 'Listing Before Supreme Court Bench', description: 'Date is given through the automated listing system.' },
    { step: '5', title: 'Arguments on Admission', description: 'Court decides whether to issue notice or dismiss.' },
    { step: '6', title: 'Final Hearings & Disposal', description: 'Once admitted, case proceeds on merits.' }
  ];

  const faqs = [
    {
      question: 'How much does it cost to file an SLP in Supreme Court?',
      answer: 'Cost depends on nature of matter, documentation, and AOR filing charges. Contact us for a transparent fee estimate based on your specific case requirements.'
    },
    {
      question: 'Can I directly hire a Supreme Court lawyer?',
      answer: 'Yes. Anyone from any state in India can approach a Supreme Court advocate directly for consultation and representation.'
    },
    {
      question: 'Can the Supreme Court grant bail?',
      answer: 'Yes, the Supreme Court can grant bail in exceptional circumstances or when lower courts refuse relief, especially in cases involving fundamental rights or procedural irregularities.'
    },
    {
      question: 'How long does a Supreme Court case take?',
      answer: 'Admission hearing can happen within weeks; final disposal depends on the court schedule and complexity of the matter. We keep clients informed at every stage.'
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Attorney', 'LegalService'],
    name: 'Advocate Naveen Arya - Supreme Court Advocate',
    url: 'https://advocatenaveenary.com/supreme-court-advocate',
    description: 'Supreme Court advocate specializing in SLPs, Criminal Appeals, Civil Appeals, Constitutional Matters, and Writ Petitions before the Hon\'ble Supreme Court of India.',
    jobTitle: 'Supreme Court Advocate',
    memberOf: {
      '@type': 'Organization',
      name: 'Supreme Court Bar Association',
      identifier: 'SCBA A-01417'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'District Court Complex',
      addressLocality: 'Rohtak',
      addressRegion: 'Haryana',
      postalCode: '124001',
      addressCountry: 'IN'
    },
    telephone: '+91 90502 25555',
    email: 'naveen@advocaterohtak.com',
    priceRange: '₹₹',
    knowsAbout: [
      'Special Leave Petitions',
      'Supreme Court Appeals',
      'Constitutional Law',
      'Criminal Appeals',
      'Civil Appeals',
      'Writ Petitions',
      'Article 32',
      'Article 136',
      'SLP',
      'Supreme Court Practice'
    ]
  };

  return (
    <>
      <SEO
        title="Supreme Court Advocate in India | SLP Lawyer | Naveen Arya SCBA A-01417"
        description="Expert Supreme Court advocate for SLP, Criminal Appeals, Civil Appeals & Constitutional Matters. SCBA Member A-01417. 10+ years experience. Call +91 90502 25555"
        keywords={[
          'supreme court advocate india',
          'SLP lawyer',
          'supreme court lawyer',
          'special leave petition',
          'criminal appeal supreme court',
          'civil appeal supreme court',
          'article 32 writ petition',
          'advocate supreme court',
          'SCBA advocate'
        ]}
        canonical="/supreme-court-advocate"
        schema={schema}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12 sm:py-16" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Scale className="h-4 w-4" />
                SCBA Member A-01417
              </div>
              
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Supreme Court Advocate in India – Naveen Arya
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Top Supreme Court Lawyer for SLPs, Appeals & Constitutional Matters
              </p>
              
              <p className="text-base text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Expert legal representation before the Hon'ble Supreme Court of India. Specialized in Special Leave Petitions (SLP), Criminal Appeals, Civil Appeals, Writs and Constitutional matters. Over 10 years of litigation experience with deep understanding of Supreme Court procedures.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${phoneNumber}`} data-testid="link-call-hero">
                  <Button size="lg" className="min-w-[200px]" data-testid="button-call-hero">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp-hero">
                  <Button size="lg" variant="outline" className="min-w-[200px]" data-testid="button-whatsapp-hero">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Consult
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Supreme Court Lawyer */}
        <section className="py-12 sm:py-16 bg-card" data-testid="section-why-sc-lawyer">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Why Choose a Supreme Court Lawyer?
              </h2>
              
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                The Supreme Court of India is the highest constitutional court, and cases filed here require:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Precise drafting',
                  'Correct legal grounds',
                  'Deep knowledge of precedents',
                  'Strong court presentation',
                  'Understanding of AOR requirements',
                  'Experienced counsel familiar with Supreme Court norms'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-base text-foreground font-medium mt-6">
                A Supreme Court case is never "routine" — it needs a lawyer who has both strategic experience and courtroom expertise.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16" data-testid="section-about-advocate">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
                About Advocate Naveen Arya – Supreme Court Advocate
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground"><strong>Supreme Court Bar Association Member (SCBA A-01417)</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">Practicing Since 2014 with 10+ years of litigation experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">Appears regularly before the Supreme Court in criminal, civil, and writ matters</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">Expertise in SLPs against High Court orders</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">Known for strong drafting, sharp arguments, and high success ratio in admissions</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">Represents clients across Delhi, Haryana, Rajasthan, UP, Punjab, MP & all major states</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="py-12 sm:py-16 bg-card" data-testid="section-practice-areas">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                Practice Areas in Supreme Court
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {practiceAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <Card key={index} className="p-6 hover-elevate" data-testid={`practice-area-${index}`}>
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12 sm:py-16" data-testid="section-process">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
                How a Supreme Court Case Works
              </h2>
              <p className="text-center text-muted-foreground mb-8">Step-by-Step Process</p>
              
              <div className="space-y-6">
                {processSteps.map((item, index) => (
                  <div key={index} className="flex gap-4" data-testid={`process-step-${index}`}>
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Clients Prefer */}
        <section className="py-12 sm:py-16 bg-card" data-testid="section-why-prefer">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                Why Clients Prefer Advocate Naveen Arya
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Strong Drafting & Legal Strategy', desc: 'Drafts are prepared with deep legal research and citations.' },
                  { title: 'Clear Communication & Transparency', desc: 'Clients are informed at every step of the process.' },
                  { title: 'Experience Across Multiple States', desc: 'Handles matters arising from many High Courts.' },
                  { title: 'High Success Rate in Admissions', desc: 'Strategic grounds lead to better chances of notice.' },
                  { title: 'Affordable & Transparent Fee Structure', desc: 'No hidden charges or surprise costs.' },
                  { title: 'Prompt Response & Availability', desc: 'Available for urgent SLPs and time-sensitive matters.' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 sm:py-16" data-testid="section-faqs">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold" data-testid={`accordion-trigger-faq-${index}`}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 sm:py-16 bg-primary text-primary-foreground" data-testid="section-contact">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
                Contact – Consult a Supreme Court Advocate
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Available for urgent SLPs, appeals, and constitutional matters
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${phoneNumber}`} data-testid="link-call-footer">
                  <Button size="lg" variant="outline" className="min-w-[200px] bg-white text-primary hover:bg-white/90" data-testid="button-call-footer">
                    <Phone className="mr-2 h-5 w-5" />
                    {phoneNumber}
                  </Button>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp-footer">
                  <Button size="lg" variant="outline" className="min-w-[200px] bg-white text-primary hover:bg-white/90" data-testid="button-whatsapp-footer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
              
              <div className="flex justify-center gap-6 text-sm opacity-90">
                <a href={`mailto:${email}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity" data-testid="link-email-contact">
                  <Mail className="h-4 w-4" />
                  {email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

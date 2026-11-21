import { Link } from 'wouter';
import { Phone, MessageCircle, Shield, CheckCircle, Scale, Clock, MapPin, Users, FileText, Gavel } from 'lucide-react';
import { InlineConsultationForm } from '@/components/inline-consultation-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

// Images
import criminalLawyerImg from '@assets/criminal-lawyer_1763319067660.jpg';
import bailRightsImg from '@assets/stock_images/bail-rights-criminal-lawyer-rohtak.jpg';
import anticipatoryBailImg from '@assets/stock_images/anticipatory-bail-lawyer-rohtak.jpg';
import rohtakCourtImg from '@assets/rohtak-court_1763319002240.jpg';

export default function CriminalLawyerRohtak() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Advocate Naveen Arya - Criminal Lawyer Rohtak',
    description: 'Best criminal lawyer in Rohtak for bail, anticipatory bail, criminal defense. 12+ years experience with 85% bail success rate. SCBA A-01417.',
    url: 'https://advocaterohtak.com/criminal-lawyer-rohtak',
    telephone: '+91-90501-11113',
    email: 'naveen@advocaterohtak.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chamber No. 600, District Court Complex',
      addressLocality: 'Rohtak',
      addressRegion: 'Haryana',
      postalCode: '124001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.8935102,
      longitude: 76.5940006,
    },
    areaServed: [
      { '@type': 'City', name: 'Rohtak' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Sonipat' },
      { '@type': 'City', name: 'Gurugram' },
      { '@type': 'City', name: 'Panipat' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00',
    },
    priceRange: '₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
    attorney: {
      '@type': 'Attorney',
      name: 'Advocate Naveen Arya',
      jobTitle: 'Criminal Defense Lawyer',
      knowsAbout: ['Criminal Law', 'Bail Applications', 'Anticipatory Bail', 'NDPS Cases', 'Criminal Trials'],
    },
  };

  const faqs = [
    {
      question: 'How quickly can you get bail in Rohtak?',
      answer: 'For bailable offenses, bail can often be secured the same day. For non-bailable offenses, we file urgent bail applications that are typically listed within 1-3 days. Our 85% bail success rate reflects our experience in preparing strong grounds for bail in Rohtak Sessions Court and District Courts.',
    },
    {
      question: 'Do you handle cases for clients outside Rohtak?',
      answer: 'Yes, we regularly represent clients from Delhi, Gurugram, Sonipat, Panipat, and other NCR cities who have cases in Rohtak courts. We provide detailed phone/video briefings before hearings, share case documents via WhatsApp/email, and send immediate updates after every court appearance. Many clients never need to travel to Rohtak except for final hearings.',
    },
    {
      question: 'What is the consultation process for new criminal cases?',
      answer: 'Initial consultation is straightforward: Call or WhatsApp +91 90501 11113 to briefly explain your case. We will schedule a detailed discussion (in-person at our Rohtak chamber or via video call for outstation clients). After reviewing your case documents and understanding the facts, we provide clear advice on legal options, likely outcomes, and fees. No obligation until you decide to proceed.',
    },
    {
      question: 'What criminal cases do you handle?',
      answer: 'We handle all criminal matters including: bail and anticipatory bail (Section 438 CrPC), criminal trials, NDPS/drug cases, quashing petitions, domestic violence defense, cyber crimes, economic offenses, cheating/fraud cases, and appeals in Punjab & Haryana High Court. We also represent clients in Supreme Court through SLPs.',
    },
    {
      question: 'What is your success rate in anticipatory bail cases?',
      answer: 'Our anticipatory bail success rate is approximately 85% in Rohtak Sessions Court. We achieve this through thorough preparation of grounds, proper documentation showing no flight risk, and presenting strong arguments addressing the specific concerns courts consider for pre-arrest protection.',
    },
    {
      question: 'What documents should I bring for a bail application?',
      answer: 'Essential documents include: copy of FIR, arrest memo (if arrested), ID proof (Aadhaar/Voter ID), address proof, proof of employment or business, medical records (if relevant), and any evidence supporting your case. For anticipatory bail, bring documents showing local roots like property papers, family details, and character references.',
    },
    {
      question: 'Can you get bail in NDPS (drug) cases?',
      answer: 'Yes, bail is possible even in NDPS cases. For small quantity cases, regular bail provisions apply. For commercial quantity cases, we focus on procedural lapses, chain of custody issues, and FSL report defects. We have successfully secured bail in multiple NDPS cases by identifying investigation flaws.',
    },
    {
      question: 'What happens if anticipatory bail is rejected?',
      answer: 'If Sessions Court rejects anticipatory bail, we immediately file an appeal in Punjab & Haryana High Court. If arrest is imminent, we can seek interim protection from the High Court. The High Court often takes a broader view and may grant bail on grounds the lower court overlooked.',
    },
    {
      question: 'How much does a criminal lawyer charge in Rohtak?',
      answer: 'Fees depend on case complexity, court level, and expected duration. Bail applications typically have fixed fees. Criminal trials are charged based on number of hearings and evidence complexity. We provide transparent fee estimates during consultation with no hidden charges.',
    },
    {
      question: 'What is the difference between regular bail and anticipatory bail?',
      answer: 'Regular bail is applied for after arrest and detention, while anticipatory bail is sought before arrest when you apprehend being arrested. Anticipatory bail provides protection from arrest. Regular bail secures release from custody. Both require different legal strategies and documentation.',
    },
    {
      question: 'Can a 498A case be quashed?',
      answer: 'Yes, false or exaggerated 498A cases can be quashed by the High Court under Section 482 CrPC. We file quashing petitions when allegations are vague, motivated by matrimonial discord, or when settlement has been reached. We have successfully quashed numerous 498A cases in Punjab & Haryana High Court.',
    },
  ];

  const caseResults = [
    { title: 'Anticipatory Bail in False 498A', description: 'Secured pre-arrest protection for client falsely implicated in dowry case. FIR later quashed.', outcome: 'Bail Granted' },
    { title: 'NDPS Case - Commercial Quantity', description: 'Obtained bail in drug case by highlighting procedural violations in search and seizure.', outcome: 'Bail Granted' },
    { title: 'Murder Trial Acquittal', description: 'Client acquitted after 3-year trial. Cross-examination exposed contradictions in witness testimonies.', outcome: 'Acquitted' },
    { title: 'Cheating Case Defense', description: 'Successfully defended businessman in Rs. 50 lakh cheating case. Proved civil nature of dispute.', outcome: 'Discharged' },
  ];

  return (
    <>
      <SEO
        title="Criminal Lawyer in Rohtak | Bail & Anticipatory Bail Expert | Advocate Naveen Arya"
        description="Best criminal lawyer in Rohtak with 85% bail success rate. Expert in anticipatory bail, criminal defense, NDPS cases. 12+ years experience in Rohtak District Courts. SCBA A-01417. Call +91 90501 11113."
        keywords={[
          'criminal lawyer rohtak',
          'criminal lawyer in rohtak',
          'best criminal lawyer in rohtak',
          'bail lawyer rohtak',
          'anticipatory bail lawyer rohtak',
          'criminal advocate rohtak',
          'advocate in rohtak',
        ]}
        canonical="/criminal-lawyer-rohtak"
        schema={schema}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[auto] lg:min-h-[70vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">85% Bail Success Rate</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  Criminal Lawyer in Rohtak
                </h1>

                <p className="text-xl text-muted-foreground mb-4">
                  Expert criminal defense by Advocate Naveen Arya. Specializing in bail, anticipatory bail, criminal trials, and NDPS cases in Rohtak District Courts.
                </p>

                <p className="text-lg text-muted-foreground mb-8">
                  SCBA Registration: A-01417 | Punjab & Haryana High Court: P1700/2014
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                  <a href="tel:+919050111113">
                    <Button size="lg" className="w-full sm:w-auto gap-2 text-lg px-8">
                      <Phone className="h-5 w-5" />
                      Call Now: 90501 11113
                    </Button>
                  </a>
                  <a href="https://wa.me/919050111113?text=Hi%2C%20I%20need%20a%20criminal%20lawyer%20in%20Rohtak." target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 text-lg px-8">
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp 24/7
                    </Button>
                  </a>
                </div>
                <p className="text-sm text-primary font-medium mb-8 flex items-center gap-2 justify-center lg:justify-start">
                  <Clock className="h-4 w-4" />
                  Average response time: 15 minutes • Free initial consultation
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">12+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">85%</p>
                    <p className="text-sm text-muted-foreground">Bail Success</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">300+</p>
                    <p className="text-sm text-muted-foreground">Acquittals</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">24/7</p>
                    <p className="text-sm text-muted-foreground">Emergency Bail</p>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src={criminalLawyerImg}
                    alt="Criminal Lawyer in Rohtak - Advocate Naveen Arya"
                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-none"
                    width={600}
                    height={400}
                    loading="eager"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg hidden sm:block">
                    <p className="font-semibold">24/7 Bail Assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Consultation Form */}
        <section className="py-6 lg:py-10 bg-card lg:hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <InlineConsultationForm
              title="Get Free Bail Consultation"
              subtitle="Response within 15 minutes"
              source="Criminal Lawyer Rohtak"
            />
          </div>
        </section>

        {/* What We Handle */}
        <section className="py-10 lg:py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Criminal Matters We Handle in Rohtak
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-6 lg:mb-12 max-w-3xl mx-auto">
              Comprehensive criminal defense services across all categories of offenses in Rohtak District Courts, Sessions Court, and Punjab & Haryana High Court.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'Bail Applications', desc: 'Regular bail in bailable and non-bailable offenses. Same-day filing for urgent matters.' },
                { icon: Gavel, title: 'Anticipatory Bail', desc: 'Pre-arrest protection under Section 438 CrPC. Thorough preparation of grounds for strong arguments.' },
                { icon: FileText, title: 'Criminal Trials', desc: 'Full trial representation from charge to verdict. Cross-examination and evidence presentation.' },
                { icon: Scale, title: 'NDPS Cases', desc: 'Defense in drug cases under Narcotic Drugs and Psychotropic Substances Act with focus on procedural compliance.' },
                { icon: Users, title: 'Quashing Petitions', desc: 'High Court petitions to quash FIRs and criminal proceedings based on legal and factual grounds.' },
                { icon: Clock, title: 'Criminal Appeals', desc: 'Appeals against conviction in Sessions Court and High Court. Supreme Court SLPs.' },
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courts We Practice In */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Courts Where We Represent You
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-6 lg:mb-12 max-w-3xl mx-auto">
              Active practice across multiple court levels ensuring comprehensive legal coverage.
            </p>

            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Court Image */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <img
                  src={rohtakCourtImg}
                  alt="Rohtak District Court Complex"
                  className="rounded-xl shadow-lg w-full"
                  width={500}
                  height={350}
                  loading="lazy"
                />
                <p className="text-center text-sm text-muted-foreground mt-3">District Court Complex, Rohtak</p>
              </div>

              {/* Court Lists */}
              <div className="lg:col-span-3 order-1 lg:order-2 grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Rohtak Courts
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      District & Sessions Court, Rohtak - Criminal trials and bail
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      Additional Sessions Courts - Major criminal matters
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      Chief Judicial Magistrate Court - Bail and remand
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      JMIC Courts - Initial proceedings and evidence
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    Higher Courts
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      Punjab & Haryana High Court - Anticipatory bail, quashing, appeals
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      Supreme Court of India - SLPs and criminal appeals (SCBA: A-01417)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Outstation Clients */}
        <section className="py-10 lg:py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              For Clients in Delhi, Gurugram, Sonipat & Panipat
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-6 lg:mb-12 max-w-3xl mx-auto">
              Most of our clients live outside Rohtak. Here's how we keep you updated and handle your case without requiring frequent travel.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Video Consultation', desc: 'Initial and ongoing consultations via WhatsApp video or Google Meet. No need to travel for discussions.' },
                { title: 'Document Sharing', desc: 'All case documents, petitions, and court orders shared instantly via WhatsApp and email.' },
                { title: 'Court Date Updates', desc: 'Advance notice of every hearing date. Same-day update call after each court appearance.' },
                { title: 'Strategic Briefings', desc: 'Before important hearings, detailed phone briefing on what to expect and next steps.' },
              ].map((item, index) => (
                <Card key={index} className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Travel to Rohtak typically only needed for personal appearance during trial or final arguments.
              </p>
            </div>
          </div>
        </section>

        {/* First Consultation */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-center">
                How Your First Consultation Works
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Contact Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Call +91 90501 11113 or WhatsApp. Briefly describe your case and urgency. We respond within hours, often minutes.
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Detailed Discussion</h3>
                  <p className="text-sm text-muted-foreground">
                    Meet at our chamber in Rohtak or via video call. Share FIR/documents. We analyze facts and legal position.
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Clear Advice</h3>
                  <p className="text-sm text-muted-foreground">
                    You receive honest assessment of your case, available options, likely timeline, and transparent fee structure.
                  </p>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  <strong>Chamber Address:</strong> Chamber No. 600, District Court Complex, Rohtak, Haryana - 124001
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Know Your Bail Rights */}
        <section className="py-10 lg:py-16 bg-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Know Your Rights in Criminal Cases
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Understanding your legal rights is crucial when facing criminal charges. Bail is a constitutional right, not a privilege.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Right to Bail:</strong> In bailable offenses, bail is a matter of right under Section 436 CrPC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Anticipatory Bail:</strong> You can apply for pre-arrest protection under Section 438 CrPC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Right to Legal Aid:</strong> Free legal representation is guaranteed under Article 39A</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Speedy Trial:</strong> Constitutional right to timely disposal of your case</span>
                  </li>
                </ul>
                <a href="tel:+919050111113">
                  <Button size="lg" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Get Legal Help Now
                  </Button>
                </a>
              </div>
              <div>
                <img
                  src={bailRightsImg}
                  alt="Know Your Bail Rights - Criminal Lawyer Rohtak"
                  className="rounded-xl shadow-lg w-full"
                  width={500}
                  height={350}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 lg:py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-6 lg:mb-12">
                Common questions about criminal cases in Rohtak
              </p>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
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

        {/* Case Results */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Recent Case Results
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-6 lg:mb-12 max-w-3xl mx-auto">
              A sample of recent successful outcomes in criminal cases (details anonymized for client privacy)
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseResults.map((result, index) => (
                <Card key={index} className="p-6 border-t-4 border-t-primary">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {result.outcome}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.title}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Practice Areas */}
        <section className="py-10 lg:py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Related Legal Services
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-6 lg:mb-12 max-w-3xl mx-auto">
              Criminal cases often involve other legal matters. We provide comprehensive support.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/divorce-lawyer-rohtak">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Divorce & Family Law</h3>
                  <p className="text-sm text-muted-foreground mb-4">When criminal cases involve matrimonial disputes like 498A or domestic violence</p>
                  <span className="text-primary text-sm font-medium">Learn more →</span>
                </Card>
              </Link>
              <Link href="/property-lawyer-rohtak">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Property Disputes</h3>
                  <p className="text-sm text-muted-foreground mb-4">Property disputes that become criminal matters involving cheating or fraud allegations</p>
                  <span className="text-primary text-sm font-medium">Learn more →</span>
                </Card>
              </Link>
              <Link href="/practice-areas">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">All Practice Areas</h3>
                  <p className="text-sm text-muted-foreground mb-4">View complete list of legal services including civil, corporate, and specialized matters</p>
                  <span className="text-primary text-sm font-medium">View all →</span>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Helpful Resources
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-6 lg:mb-12 max-w-3xl mx-auto">
              Read our detailed guides on criminal law topics
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/blog/understanding-bail-rights-in-india">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <p className="text-sm text-primary font-medium mb-2">Blog Article</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Understanding Your Bail Rights in India</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive guide to bail provisions and your legal rights</p>
                </Card>
              </Link>
              <Link href="/blog/anticipatory-bail-complete-guide">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <p className="text-sm text-primary font-medium mb-2">Blog Article</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Anticipatory Bail: Complete Guide</h3>
                  <p className="text-sm text-muted-foreground">Everything about pre-arrest protection under Section 438 CrPC</p>
                </Card>
              </Link>
              <Link href="/blog/498a-case-complete-guide">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <p className="text-sm text-primary font-medium mb-2">Blog Article</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Section 498A: Defense Guide</h3>
                  <p className="text-sm text-muted-foreground">How to defend against false dowry harassment allegations</p>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 lg:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Need a Criminal Lawyer in Rohtak?
            </h2>
            <p className="text-lg mb-4 opacity-90 max-w-2xl mx-auto">
              Get immediate legal help. Available 24/7 for urgent bail matters.
            </p>
            <p className="text-sm mb-6 opacity-80 flex items-center justify-center gap-2">
              <Clock className="h-4 w-4" />
              Response within 15 minutes • Free case evaluation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919050111113">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 text-lg">
                  <Phone className="h-5 w-5" />
                  Call: 90501 11113
                </Button>
              </a>
              <a href="https://wa.me/919050111113?text=Hi%2C%20I%20need%20a%20criminal%20lawyer%20in%20Rohtak." target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2 text-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

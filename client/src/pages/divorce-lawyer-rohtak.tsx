import { Link } from 'wouter';
import { Phone, MessageCircle, Heart, CheckCircle, Scale, Clock, MapPin, Users, FileText, Shield, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

// Images
import divorceCourtImg from '@assets/stock_images/divorce-lawyer-rohtak-family-court.jpg';
import advocateImg from '@assets/advocate-rohtak-1536x1024_1763358725717.jpg';

export default function DivorceLawyerRohtak() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Advocate Naveen Arya - Divorce Lawyer Rohtak',
    description: 'Expert divorce lawyer in Rohtak for mutual consent divorce, contested divorce, child custody, and maintenance cases. 12+ years family law experience.',
    url: 'https://advocaterohtak.com/divorce-lawyer-rohtak',
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
      jobTitle: 'Divorce & Family Law Specialist',
      knowsAbout: ['Divorce', 'Mutual Consent Divorce', 'Child Custody', 'Maintenance', 'Domestic Violence'],
    },
  };

  const faqs = [
    {
      question: 'How long does mutual consent divorce take in Rohtak?',
      answer: 'Mutual consent divorce in Rohtak Family Court typically takes 6-8 months. The process involves filing joint petition, 6-month cooling-off period (can be waived in certain cases), and final decree. We handle all paperwork and court appearances, so you typically need to appear only 2-3 times in court.',
    },
    {
      question: 'What if my spouse lives in Delhi but marriage was in Rohtak?',
      answer: 'You can file divorce in Rohtak if: (a) the marriage was solemnized here, (b) you last resided together in Rohtak, or (c) the wife currently resides in Rohtak. We regularly handle cases where one spouse is in Delhi, Gurugram, or other cities. We coordinate schedules and can arrange for minimal court visits.',
    },
    {
      question: 'How much maintenance can I get/have to pay?',
      answer: 'Maintenance depends on many factors: husband\'s income and assets, wife\'s earning capacity, standard of living during marriage, children\'s needs, and duration of marriage. Courts typically award 20-30% of husband\'s net income as maintenance. We analyze your specific situation to advise on likely amounts and negotiate fair settlements.',
    },
    {
      question: 'Can fathers get child custody in Rohtak courts?',
      answer: 'Yes, fathers can get custody, especially of children above 7-9 years when the child\'s preference matters. Courts decide custody based on child\'s welfare, not gender. We present strong cases for fathers by demonstrating better living arrangements, stability, and relationship with the child. Joint custody arrangements are increasingly common.',
    },
    {
      question: 'What documents are needed for divorce filing?',
      answer: 'Essential documents include: marriage certificate, proof of residence, photographs, income documents (salary slips/ITR), wedding photos, and details of children if any. For contested divorce, evidence supporting grounds (cruelty, desertion, etc.) is needed. We guide you on exact requirements during consultation.',
    },
  ];

  return (
    <>
      <SEO
        title="Divorce Lawyer in Rohtak | Mutual Consent & Custody Expert | Advocate Naveen Arya"
        description="Best divorce lawyer in Rohtak for mutual consent divorce, contested divorce, child custody, and maintenance. 12+ years family law experience. Confidential consultations. Call +91 90501 11113."
        keywords={[
          'divorce lawyer rohtak',
          'divorce lawyer in rohtak',
          'best divorce lawyer in rohtak',
          'mutual consent divorce rohtak',
          'child custody lawyer rohtak',
          'maintenance lawyer rohtak',
          'family lawyer rohtak',
        ]}
        canonical="/divorce-lawyer-rohtak"
        schema={schema}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Compassionate Family Law Practice</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  Divorce Lawyer in Rohtak
                </h1>

                <p className="text-xl text-muted-foreground mb-4">
                  Expert guidance through divorce, custody, and maintenance matters by Advocate Naveen Arya. Sensitive handling of family disputes with focus on fair outcomes.
                </p>

                <p className="text-lg text-muted-foreground mb-8">
                  SCBA Registration: A-01417 | Punjab & Haryana High Court: P1700/2014
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <a href="tel:+919050111113">
                    <Button size="lg" className="w-full sm:w-auto gap-2 text-lg px-8">
                      <Phone className="h-5 w-5" />
                      Call Now: 90501 11113
                    </Button>
                  </a>
                  <a href="https://wa.me/919050111113" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 text-lg px-8">
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp (Confidential)
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">12+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Family Cases</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">100%</p>
                    <p className="text-sm text-muted-foreground">Confidential</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">Fair</p>
                    <p className="text-sm text-muted-foreground">Settlements</p>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src={divorceCourtImg}
                    alt="Divorce Lawyer in Rohtak - Family Court Expert"
                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-none"
                    width={600}
                    height={400}
                    loading="eager"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg hidden sm:block">
                    <p className="font-semibold">Confidential Consultations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Handle */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Family Law Matters We Handle in Rohtak
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Complete family law services in Rohtak Family Court and District Courts. Sensitive handling with focus on protecting your interests and your children's welfare.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: 'Mutual Consent Divorce', desc: 'Quickest route when both parties agree. We draft fair settlement terms covering maintenance, custody, and property division.' },
                { icon: Scale, title: 'Contested Divorce', desc: 'Full representation when agreement isn\'t possible. Building strong cases on grounds of cruelty, desertion, or other valid reasons.' },
                { icon: Users, title: 'Child Custody', desc: 'Fighting for your rights as a parent. Custody, visitation schedules, and guardianship matters prioritizing child welfare.' },
                { icon: FileText, title: 'Maintenance Cases', desc: 'Interim and permanent maintenance under Section 125 CrPC and Hindu Marriage Act. Fair calculation based on actual needs.' },
                { icon: Shield, title: 'Domestic Violence', desc: 'Protection orders under DV Act 2005. Residence rights, monetary relief, and custody orders for protection.' },
                { icon: Home, title: 'Property Settlement', desc: 'Division of matrimonial property, streedhan recovery, and settlement negotiations for equitable distribution.' },
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
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Family Courts Where We Represent You
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Active practice in Rohtak and appellate courts for all family law matters.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Rohtak Courts
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Family Court, Rohtak - Divorce, custody, maintenance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    District Court - Property matters and appeals
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Magistrate Courts - DV Act and Section 125 maintenance
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Appellate Courts
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Punjab & Haryana High Court - Family appeals, transfer petitions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Supreme Court - SLPs in custody and maintenance matters
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* For Outstation Clients */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              For Clients in Delhi, Gurugram, Sonipat & Panipat
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              We understand travel is difficult during family disputes. Here's how we work with clients who live outside Rohtak.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Private Video Calls', desc: 'Confidential consultations via WhatsApp video or Google Meet. Discuss sensitive matters from privacy of your home.' },
                { title: 'Document Handling', desc: 'Send documents via email/WhatsApp. We prepare all petitions and share drafts for review before filing.' },
                { title: 'Minimal Court Visits', desc: 'For mutual consent: usually 2-3 visits. For contested: we handle most hearings; you attend when legally required.' },
                { title: 'Regular Updates', desc: 'After every hearing: phone call with summary and next steps. No surprises about your case status.' },
              ].map((item, index) => (
                <Card key={index} className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* First Consultation */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-center">
                Your First Consultation
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                We understand divorce is difficult. Here's what to expect when you reach out.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Initial Contact</h3>
                  <p className="text-sm text-muted-foreground">
                    Call or WhatsApp +91 90501 11113. Briefly share your situation. All conversations are confidential.
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Detailed Meeting</h3>
                  <p className="text-sm text-muted-foreground">
                    In-person at our Rohtak chamber or video call. We review your marriage details, issues, and what you want to achieve.
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Clear Path Forward</h3>
                  <p className="text-sm text-muted-foreground">
                    Honest advice on your options (mutual consent vs contested), realistic timeline, and transparent fee discussion.
                  </p>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  <strong>Chamber:</strong> Chamber No. 600, District Court Complex, Rohtak, Haryana - 124001
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section with Image */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img
                  src={advocateImg}
                  alt="Advocate Naveen Arya - Divorce Lawyer Rohtak"
                  className="rounded-xl shadow-lg w-full"
                  width={500}
                  height={350}
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Sensitive Handling of Family Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Divorce is never easy. We understand the emotional, financial, and social challenges you face. Our approach focuses on protecting your interests while seeking fair resolution.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Complete Confidentiality:</strong> Your personal matters stay private. All consultations are strictly confidential.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Settlement Focus:</strong> We explore amicable solutions before litigation whenever possible.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Children First:</strong> In custody matters, we prioritize the child's best interests.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Fair Maintenance:</strong> Expert calculation based on actual needs and paying capacity.</span>
                  </li>
                </ul>
                <a href="tel:+919050111113">
                  <Button size="lg" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Schedule Confidential Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Common questions about divorce and family matters in Rohtak
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

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Need a Divorce Lawyer in Rohtak?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Confidential consultation. No judgment. Clear guidance on your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919050111113">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 text-lg">
                  <Phone className="h-5 w-5" />
                  Call: 90501 11113
                </Button>
              </a>
              <a href="https://wa.me/919050111113" target="_blank" rel="noopener noreferrer">
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

import { Link } from 'wouter';
import { Phone, MessageCircle, Home, CheckCircle, Scale, MapPin, FileText, Shield, Building, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

// Images
import propertyDisputeImg from '@assets/stock_images/property-dispute-lawyer-rohtak.jpg';
import rohtakCourtImg from '@assets/rohtak-court_1763319002240.jpg';

export default function PropertyLawyerRohtak() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Advocate Naveen Arya - Property Lawyer Rohtak',
    description: 'Expert property lawyer in Rohtak for property disputes, partition suits, land matters, and civil litigation. 12+ years experience in District Courts.',
    url: 'https://advocaterohtak.com/property-lawyer-rohtak',
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
      jobTitle: 'Property & Civil Law Specialist',
      knowsAbout: ['Property Law', 'Partition Suits', 'Land Disputes', 'Civil Litigation', 'Title Verification'],
    },
  };

  const faqs = [
    {
      question: 'How long does a property partition case take in Rohtak?',
      answer: 'Property partition cases in Rohtak District Court typically take 2-4 years for final decree. Timeline depends on number of parties, complexity of shares, need for property valuation, and whether parties cooperate. We work to expedite through proper documentation, settlement negotiations, and focused litigation strategy.',
    },
    {
      question: 'Can you handle property cases for land in Rohtak if I live in Delhi?',
      answer: 'Yes, we regularly represent clients from Delhi, Gurugram, Sonipat, and Panipat who own property in Rohtak district. We handle all court appearances, coordinate with revenue authorities, and keep you updated via calls and WhatsApp. You typically need to visit only for final arguments or settlement discussions.',
    },
    {
      question: 'What documents are needed for property dispute cases?',
      answer: 'Essential documents include: sale deed/registry, jamabandi (land record), mutation records, property tax receipts, family tree (for inheritance disputes), previous court orders if any, and power of attorney if acting through someone. During consultation, we review your documents and advise on additional evidence needed.',
    },
    {
      question: 'Do you handle cases in Tehsil courts and revenue offices?',
      answer: 'Yes, we represent clients before Tehsildar, SDM, and Deputy Commissioner offices for mutation, demarcation, and revenue matters. We also handle appeals in Commissioner and Financial Commissioner offices. Many property disputes require parallel action in civil courts and revenue forums.',
    },
    {
      question: 'What is the process for getting a stay on illegal possession?',
      answer: 'We file suit for possession/injunction along with application for temporary injunction. Courts in Rohtak typically hear injunction applications within 2-4 weeks. If urgency is established, ex-parte stay can be obtained. We prepare strong prima facie case to secure interim relief while main suit proceeds.',
    },
    {
      question: 'What is the court fee for property cases in Rohtak?',
      answer: 'Court fee depends on property value and suit type. For partition suits, it\'s calculated on share value. For declaration suits, fixed court fee applies. For specific performance, ad valorem court fee on agreement value. We provide exact court fee calculations during consultation based on your property value.',
    },
    {
      question: 'Can agricultural land disputes be resolved through courts?',
      answer: 'Yes, but agricultural land disputes often require action in both civil courts and revenue forums. Issues like partition, possession, and title are handled by civil courts. Mutation, tenancy, and ceiling matters go to revenue authorities. We handle both jurisdictions for comprehensive resolution.',
    },
    {
      question: 'How do I verify if property title is clear before buying?',
      answer: 'Title verification involves: checking 30-year chain of ownership in registry, examining jamabandi for encumbrances, verifying mutation records, checking for pending litigation, and ensuring no revenue court disputes. We provide thorough title verification services before property purchase.',
    },
    {
      question: 'What if someone is constructing on my land without permission?',
      answer: 'File immediate application for temporary injunction to stop construction. Courts can grant ex-parte stay within days if urgency is shown. We also send legal notice and file suit for mandatory injunction to demolish unauthorized construction. Quick action is essential to prevent further encroachment.',
    },
    {
      question: 'Do daughters have equal rights in ancestral property?',
      answer: 'Yes, after Hindu Succession Amendment Act 2005, daughters have equal rights as sons in ancestral property. This applies to all properties where partition wasn\'t completed before 2005. We handle partition cases ensuring daughters receive their rightful share.',
    },
    {
      question: 'What is the difference between mutation and registration?',
      answer: 'Registration (registry) is the legal transfer document executed before Sub-Registrar. Mutation is updating revenue records (jamabandi) to reflect the new owner. Registration gives legal ownership. Mutation updates tax records. Both are essential - registration for title, mutation for revenue purposes.',
    },
  ];

  const caseResults = [
    { title: 'Partition of 10 Acre Agricultural Land', description: 'Secured equal partition among 5 siblings after 3-year litigation. Commissioner appointed for demarcation.', outcome: 'Partition Decree' },
    { title: 'Possession from Illegal Occupant', description: 'Obtained possession of commercial property in Rohtak market occupied illegally for 8 years.', outcome: 'Possession Restored' },
    { title: 'Stay on Construction', description: 'Ex-parte injunction granted within 48 hours to stop unauthorized construction on client\'s plot.', outcome: 'Stay Granted' },
    { title: 'NRI Property Settlement', description: 'Helped NRI client settle family property dispute through mediation, avoiding years of litigation.', outcome: 'Settled' },
  ];

  return (
    <>
      <SEO
        title="Property Lawyer in Rohtak | Land Disputes & Partition Expert | Advocate Naveen Arya"
        description="Best property lawyer in Rohtak for property disputes, partition suits, land matters, possession cases. 12+ years experience in Rohtak District Courts. SCBA A-01417. Call +91 90501 11113."
        keywords={[
          'property lawyer rohtak',
          'property lawyer in rohtak',
          'best property lawyer in rohtak',
          'land dispute lawyer rohtak',
          'partition lawyer rohtak',
          'civil lawyer rohtak',
          'property advocate rohtak',
        ]}
        canonical="/property-lawyer-rohtak"
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
                  <Building className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Property & Land Law Expert</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  Property Lawyer in Rohtak
                </h1>

                <p className="text-xl text-muted-foreground mb-4">
                  Expert representation in property disputes, partition suits, land matters, and civil litigation by Advocate Naveen Arya. Protecting your property rights in Rohtak courts.
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
                      WhatsApp for Consultation
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">12+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">200+</p>
                    <p className="text-sm text-muted-foreground">Property Cases</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">Strong</p>
                    <p className="text-sm text-muted-foreground">Injunctions</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">Fair</p>
                    <p className="text-sm text-muted-foreground">Partitions</p>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src={propertyDisputeImg}
                    alt="Property Lawyer in Rohtak - Land Dispute Expert"
                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-none"
                    width={600}
                    height={400}
                    loading="eager"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg hidden sm:block">
                    <p className="font-semibold">Protect Your Property</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Handle */}
        <section className="py-10 lg:py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Property Matters We Handle in Rohtak
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-6 lg:mb-12 max-w-3xl mx-auto">
              Comprehensive property and civil law services in Rohtak District Courts, revenue offices, and Punjab & Haryana High Court.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Home, title: 'Partition Suits', desc: 'Division of ancestral and joint family property among legal heirs. Fair valuation and equitable distribution.' },
                { icon: Shield, title: 'Possession Cases', desc: 'Recovery of possession from illegal occupants. Suits for specific performance and injunctions.' },
                { icon: FileText, title: 'Title Disputes', desc: 'Suits for declaration of ownership, title verification, and clearing title defects.' },
                { icon: Landmark, title: 'Land Revenue Matters', desc: 'Mutation, demarcation, consolidation appeals before Tehsildar, SDM, and Commissioner.' },
                { icon: Scale, title: 'Specific Performance', desc: 'Enforcement of property sale agreements when seller refuses to execute sale deed.' },
                { icon: Building, title: 'Injunction Applications', desc: 'Stay orders against construction, sale, or transfer. Protecting your property rights during litigation.' },
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

        {/* Courts & Offices */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Courts & Revenue Offices Where We Practice
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-6 lg:mb-12 max-w-3xl mx-auto">
              Property matters often require action in multiple forums. We handle all levels.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Civil Courts - Rohtak
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    District Judge Court - Major property suits over ₹20 lakh
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Additional District Judge - Partition and possession cases
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Civil Judge (Senior Division) - Suits under ₹20 lakh
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Civil Judge (Junior Division) - Smaller value suits, rent matters
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-primary" />
                  Revenue Authorities
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Tehsildar Office - Mutation, land records, fard
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    SDM Court - Revenue appeals, demarcation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Deputy Commissioner - Major revenue matters
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Punjab & Haryana High Court - Civil and revenue appeals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* For Outstation Clients */}
        <section className="py-10 lg:py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              For Property Owners in Delhi, Gurugram & NCR
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-6 lg:mb-12 max-w-3xl mx-auto">
              Own property in Rohtak but live elsewhere? Here's how we manage your case without requiring frequent travel.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Remote Consultation', desc: 'Video calls to discuss your property matter. Share documents via WhatsApp/email for review.' },
                { title: 'Site Coordination', desc: 'We coordinate with local contacts for property inspection, measurement, or document collection.' },
                { title: 'Revenue Office Work', desc: 'Handle mutation, fard collection, and tehsil matters without you being present.' },
                { title: 'Court Representation', desc: 'Full representation in all hearings. You visit only when court specifically requires your presence.' },
              ].map((item, index) => (
                <Card key={index} className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Many NRI and outstation clients successfully resolve property disputes without visiting Rohtak more than 2-3 times.
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
                  <h3 className="text-lg font-semibold text-foreground mb-2">Share Property Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Call +91 90501 11113 or WhatsApp. Send property documents (registry, jamabandi, any existing court orders) for preliminary review.
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Detailed Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Meet at Rohtak chamber or via video call. We examine title chain, identify legal issues, and understand your objectives.
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Strategy & Fees</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear advice on litigation vs. settlement options, realistic timeline expectations, and transparent fee structure.
                  </p>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  <strong>Chamber:</strong> Chamber No. 600, District Court Complex, Rohtak, Haryana - 124001
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Protect Your Property Rights Section */}
        <section className="py-10 lg:py-16 bg-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Protecting Your Property Rights in Rohtak Courts
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Property disputes require careful strategy. Whether it's ancestral property division, illegal possession, or title verification, we provide comprehensive legal protection.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Title Verification:</strong> Thorough examination of ownership documents and land records</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Injunction Relief:</strong> Quick action to prevent unauthorized construction or transfer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Revenue Support:</strong> Mutation, fard, and tehsil office proceedings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Settlement Negotiation:</strong> Avoid lengthy litigation through fair compromise</span>
                  </li>
                </ul>
                <a href="tel:+919050111113">
                  <Button size="lg" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Get Property Legal Help
                  </Button>
                </a>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={rohtakCourtImg}
                  alt="Rohtak District Court - Property Cases"
                  className="rounded-xl shadow-lg w-full"
                  width={500}
                  height={350}
                  loading="lazy"
                />
                <p className="text-center text-sm text-muted-foreground mt-3">District Court Complex, Rohtak</p>
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
                Common questions about property cases in Rohtak
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
              Sample outcomes in property matters (details anonymized for client privacy)
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
              Property matters often intersect with other legal areas. We provide comprehensive support.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/criminal-lawyer-rohtak">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Criminal Defense</h3>
                  <p className="text-sm text-muted-foreground mb-4">When property disputes lead to criminal cases like cheating, fraud, or trespass allegations</p>
                  <span className="text-primary text-sm font-medium">Learn more →</span>
                </Card>
              </Link>
              <Link href="/divorce-lawyer-rohtak">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Family Property</h3>
                  <p className="text-sm text-muted-foreground mb-4">For matrimonial property division, inheritance disputes, and succession matters</p>
                  <span className="text-primary text-sm font-medium">Learn more →</span>
                </Card>
              </Link>
              <Link href="/practice-areas">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">All Practice Areas</h3>
                  <p className="text-sm text-muted-foreground mb-4">View complete list of legal services including civil, criminal, and specialized matters</p>
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
              Read our detailed guides on property law topics
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/blog/property-dispute-resolution">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <p className="text-sm text-primary font-medium mb-2">Blog Article</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Resolving Property Disputes</h3>
                  <p className="text-sm text-muted-foreground">Legal remedies and court procedures for property litigation</p>
                </Card>
              </Link>
              <Link href="/blog/how-to-file-fir-in-rohtak">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <p className="text-sm text-primary font-medium mb-2">Blog Article</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Filing FIR for Property Crimes</h3>
                  <p className="text-sm text-muted-foreground">When property disputes become criminal matters</p>
                </Card>
              </Link>
              <Link href="/blog/cheque-bounce-cases-guide">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <p className="text-sm text-primary font-medium mb-2">Blog Article</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cheque Bounce in Property Deals</h3>
                  <p className="text-sm text-muted-foreground">Section 138 cases arising from property transactions</p>
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
              Have a Property Dispute in Rohtak?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert legal advice to protect your property rights. Free document review during consultation.
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

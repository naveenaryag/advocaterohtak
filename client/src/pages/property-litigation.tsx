import { Link } from 'wouter';
import { Phone, MessageCircle, Home, CheckCircle, FileText, Scale, Gavel, Shield, Users, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function PropertyLitigation() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Property Litigation',
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
    description: 'Expert property lawyer in Rohtak for title disputes, partition suits, possession matters, property documentation, and real estate litigation.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does a property dispute case take in Rohtak?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Property litigation duration varies significantly based on dispute complexity and evidence. Simple possession suits may take 2-3 years, title disputes 3-5 years, and partition suits 4-7 years in Rohtak courts. Multiple appeals can extend timelines. Early settlement through mediation can significantly reduce duration.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents are needed for property litigation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Essential documents include sale deed, registry, mutation records (fard), jamabandi, revenue records (khasra/khatauni), property tax receipts, possession certificates, and previous ownership chain documents. For disputed properties: court case records if any, correspondence, photographs. We guide complete documentation for strong cases.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get possession through court injunction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Temporary possession or injunction can be obtained under Order 39 CPC if you establish prima facie ownership and irreparable injury. Permanent possession requires proving title and ownership through full trial. We file urgent injunction applications protecting your property rights during litigation.',
        },
      },
    ],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, faqSchema],
  };

  const caseTypes = [
    { title: 'Title Disputes', description: 'Suits for declaration of title, ownership rights, and challenging adverse claims', icon: FileText },
    { title: 'Partition Suits', description: 'Family property division, share determination, and partition by metes and bounds', icon: Users },
    { title: 'Possession Matters', description: 'Recovery of possession, eviction, and illegal occupation disputes', icon: Home },
    { title: 'Property Documentation', description: 'Title verification, due diligence, and document examination for transactions', icon: Shield },
    { title: 'Specific Performance', description: 'Enforcement of sale agreements and contractual obligations for property transfer', icon: Gavel },
    { title: 'Mutation Cases', description: 'Revenue court cases for mutation, correction of revenue records, and inheritance', icon: FileText },
    { title: 'Injunction Relief', description: 'Temporary and permanent injunctions preventing property alienation or construction', icon: AlertCircle },
    { title: 'Boundary Disputes', description: 'Encroachment issues, boundary demarcation, and survey-based litigation', icon: Scale },
  ];

  const process = [
    { step: '1', title: 'Title Verification', description: 'Comprehensive examination of property documents and ownership chain' },
    { step: '2', title: 'Legal Assessment', description: 'Evaluate legal rights, claims, and available remedies under property law' },
    { step: '3', title: 'Strategy Development', description: 'Plan litigation approach balancing time, costs, and desired outcomes' },
    { step: '4', title: 'Suit Filing', description: 'Prepare and file detailed plaint with supporting documents and evidence' },
    { step: '5', title: 'Evidence & Arguments', description: 'Present documentary evidence, examination of witnesses, and legal arguments' },
    { step: '6', title: 'Decree Execution', description: 'Enforce court decree through execution proceedings for actual possession' },
  ];

  const faqs = [
    {
      question: 'How long does a property dispute case take in Rohtak?',
      answer: 'Property litigation duration varies significantly based on dispute complexity and evidence. Simple possession suits may take 2-3 years, title disputes 3-5 years, and partition suits 4-7 years in Rohtak courts. Multiple appeals can extend timelines. Early settlement through mediation can significantly reduce duration.',
    },
    {
      question: 'What documents are needed for property litigation?',
      answer: 'Essential documents include sale deed, registry, mutation records (fard), jamabandi, revenue records (khasra/khatauni), property tax receipts, possession certificates, and previous ownership chain documents. For disputed properties: court case records if any, correspondence, photographs. We guide complete documentation for strong cases.',
    },
    {
      question: 'Can I get possession through court injunction?',
      answer: 'Temporary possession or injunction can be obtained under Order 39 CPC if you establish prima facie ownership and irreparable injury. Permanent possession requires proving title and ownership through full trial. We file urgent injunction applications protecting your property rights during litigation.',
    },
    {
      question: 'What is the cost of property litigation in Rohtak?',
      answer: 'Litigation costs include court fees based on property value, lawyer fees, stamp paper expenses, document certification costs, and miscellaneous expenses. Court fees are calculated as percentage of property valuation. We provide transparent fee structure with estimates for complete litigation process including trial and appeals if needed.',
    },
    {
      question: 'How is property partition done among family members?',
      answer: 'Partition can be done through mutual settlement or court decree. Court partition involves determining shares, property valuation, physical division or sale. Hindu Succession Act governs Hindu family partitions. Muslim law has different rules. We handle both amicable settlements and contested partition litigation ensuring fair distribution.',
    },
    {
      question: 'What is the difference between ownership and possession?',
      answer: 'Ownership is legal right to property based on valid title documents. Possession is physical control, which may or may not be with owner. Both ownership and possession can be disputed separately. Adverse possession can lead to ownership after 12 years of continuous possession. We handle both title disputes and possession matters.',
    },
    {
      question: 'Can property be sold while litigation is pending?',
      answer: 'Selling disputed property during litigation is legally permissible but practically difficult as buyers avoid litigated properties. Courts may grant injunctions preventing sale during litigation. Declaration of pending suit (lis pendens) binds future purchasers to case outcome. We advise on implications and protective measures.',
    },
  ];

  return (
    <>
      <SEO
        title="Property Lawyer in Rohtak | Title Disputes, Partition & Real Estate Litigation - Advocate Naveen Arya"
        description="Expert property lawyer in Rohtak for title disputes, partition, possession matters, property documentation. 10+ years real estate litigation experience. SCBA: A-01417. Call +91 90502 11113."
        keywords={[
          'property lawyer rohtak',
          'real estate lawyer rohtak',
          'property dispute rohtak',
          'partition suit rohtak',
          'title dispute lawyer rohtak',
          'property litigation rohtak',
          'best property advocate rohtak',
        ]}
        canonical="/property-litigation"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Property Litigation Expert in Rohtak
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive property law services for title disputes, partition suits, possession matters, and real estate transactions. Advocate Naveen Arya provides expert representation protecting your valuable property rights through skilled advocacy and thorough legal analysis.
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
                    WhatsApp Now
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">250+</p>
                  <p className="text-sm text-muted-foreground">Property Cases</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">90%</p>
                  <p className="text-sm text-muted-foreground">Favorable Outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-why-choose">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Property Law Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert guidance protecting your valuable real estate investments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: FileText, title: 'Title Verification', description: 'Thorough examination of property documents ensuring clear, marketable title.' },
                { icon: Shield, title: 'Preventive Advice', description: 'Due diligence and legal opinion preventing future disputes in transactions.' },
                { icon: Scale, title: 'Litigation Experience', description: 'Extensive courtroom expertise in complex property and land disputes.' },
                { icon: Gavel, title: 'Strong Advocacy', description: 'Persuasive arguments backed by property law precedents and evidence.' },
                { icon: Home, title: 'Possession Recovery', description: 'Effective strategies for recovering possession through legal proceedings.' },
                { icon: Users, title: 'Partition Expertise', description: 'Fair division of family properties balancing legal rights and relationships.' },
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
                Property Matters We Handle
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete property law services from documentation to litigation
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
                Our Property Litigation Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Systematic approach ensuring thorough representation and protection
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
                Why Clients Prefer Our Property Services
              </h2>
              <div className="space-y-4">
                {[
                  'Comprehensive title verification preventing future disputes in property transactions',
                  'Extensive litigation experience in Rohtak courts handling complex property disputes',
                  'Strategic approach protecting your property rights through preventive and curative measures',
                  'Thorough documentation review ensuring clear title and marketable ownership',
                  'Efficient coordination with revenue departments for mutation and record corrections',
                  'Clear communication explaining property law complexities and realistic timelines',
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
                  Common questions about property litigation and real estate matters
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
              Facing Property Dispute?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Protect your property rights with expert legal guidance. Get comprehensive consultation today.
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

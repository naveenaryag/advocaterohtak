import { Link } from 'wouter';
import { Phone, MessageCircle, Heart, CheckCircle, Users, FileText, Scale, Shield, AlertCircle, Home, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function MatrimonialCases() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Matrimonial Law',
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
    description: 'Expert matrimonial lawyer in Rohtak specializing in divorce, maintenance, custody, domestic violence, and family dispute resolution.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does a divorce case take in Rohtak courts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Divorce case duration varies based on type and circumstances. Mutual consent divorce typically takes 6-18 months in Rohtak District Courts. Contested divorces may take 2-5 years depending on complexity, evidence, and court schedules. Our experienced approach helps streamline the process while protecting your interests.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the maintenance amount in divorce cases?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Maintenance amounts are determined by courts based on various factors including husband\'s income, wife\'s needs, standard of living, children\'s requirements, and other circumstances. Courts generally award 25-30% of husband\'s income as maintenance, though each case is assessed individually. We provide detailed guidance specific to your situation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get custody of my children in divorce?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Child custody is decided based on the child\'s best interests and welfare. Courts consider factors like parent\'s financial stability, living conditions, child\'s age, emotional bonding, and ability to provide care. Mothers typically get custody of young children, while older children\'s preferences are considered. We help present strong custody cases.',
        },
      },
    ],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, faqSchema],
  };

  const caseTypes = [
    { title: 'Divorce Petitions', description: 'Mutual consent and contested divorce proceedings under Hindu Marriage Act, Special Marriage Act', icon: Heart },
    { title: 'Maintenance Cases', description: 'Section 125 CrPC, Hindu Adoption & Maintenance Act for wife and children maintenance', icon: FileText },
    { title: 'Child Custody', description: 'Custody battles, visitation rights, and guardianship matters prioritizing child welfare', icon: Users },
    { title: 'Domestic Violence', description: 'Protection orders under DV Act 2005, residence orders, and monetary relief applications', icon: Shield },
    { title: 'Restitution of Conjugal Rights', description: 'RCR petitions and defense for restoration of marital relationship', icon: Home },
    { title: 'Alimony & Settlement', description: 'Permanent alimony, one-time settlements, and property division negotiations', icon: Scale },
    { title: 'Annulment Cases', description: 'Void and voidable marriage annulment petitions based on legal grounds', icon: AlertCircle },
    { title: 'Mediation Services', description: 'Family dispute mediation and out-of-court settlement negotiations', icon: Users },
  ];

  const process = [
    { step: '1', title: 'Confidential Consultation', description: 'Private discussion of your matrimonial situation with complete confidentiality' },
    { step: '2', title: 'Legal Assessment', description: 'Comprehensive review of marriage documents, grounds, and available legal remedies' },
    { step: '3', title: 'Strategy Planning', description: 'Develop tailored approach considering your goals and family circumstances' },
    { step: '4', title: 'Documentation & Filing', description: 'Prepare and file petitions with proper evidence and supporting documents' },
    { step: '5', title: 'Court Proceedings', description: 'Represent you through all hearings with focus on amicable resolution when possible' },
    { step: '6', title: 'Final Resolution', description: 'Secure favorable decree with clear terms for all future obligations' },
  ];

  const faqs = [
    {
      question: 'How long does a divorce case take in Rohtak courts?',
      answer: 'Divorce case duration varies based on type and circumstances. Mutual consent divorce typically takes 6-18 months in Rohtak District Courts. Contested divorces may take 2-5 years depending on complexity, evidence, and court schedules. Our experienced approach helps streamline the process while protecting your interests.',
    },
    {
      question: 'What is the maintenance amount in divorce cases?',
      answer: 'Maintenance amounts are determined by courts based on various factors including husband\'s income, wife\'s needs, standard of living, children\'s requirements, and other circumstances. Courts generally award 25-30% of husband\'s income as maintenance, though each case is assessed individually. We provide detailed guidance specific to your situation.',
    },
    {
      question: 'Can I get custody of my children in divorce?',
      answer: 'Child custody is decided based on the child\'s best interests and welfare. Courts consider factors like parent\'s financial stability, living conditions, child\'s age, emotional bonding, and ability to provide care. Mothers typically get custody of young children, while older children\'s preferences are considered. We help present strong custody cases.',
    },
    {
      question: 'What are valid grounds for divorce in India?',
      answer: 'Valid grounds include adultery, cruelty, desertion for 2+ years, conversion to another religion, mental disorder, communicable disease, renunciation of world, and presumption of death. Mutual consent divorce is available when both parties agree. We evaluate your specific circumstances to determine the most appropriate legal grounds.',
    },
    {
      question: 'Is it mandatory to try mediation before divorce?',
      answer: 'Courts often encourage mediation in family disputes to promote amicable settlements. While not always mandatory, mediation can be beneficial for faster resolution and reduced legal costs. Our practice offers both litigation and mediation services based on your case requirements and preferences.',
    },
    {
      question: 'How much does a matrimonial lawyer charge in Rohtak?',
      answer: 'Legal fees vary based on case complexity, type of proceeding, and duration. We offer transparent pricing with no hidden charges. Initial consultation is available to discuss your case and provide a clear fee structure. Contact us at +91 90501 11113 for detailed information specific to your situation.',
    },
    {
      question: 'Can domestic violence cases be filed along with divorce?',
      answer: 'Yes, domestic violence cases under DV Act 2005 can be filed independently or alongside divorce proceedings. DV cases provide immediate relief through protection orders, residence orders, and monetary relief. Our practice handles both proceedings comprehensively to protect your rights and safety.',
    },
  ];

  return (
    <>
      <SEO
        title="Matrimonial Lawyer in Rohtak | Divorce, Custody & Family Law Expert - Advocate Naveen Arya"
        description="Expert matrimonial lawyer in Rohtak for divorce, child custody, maintenance, domestic violence. 12+ years experience in family law. SCBA: A-01417. Call +91 90501 11113 for confidential consultation."
        keywords={[
          'matrimonial lawyer rohtak',
          'divorce lawyer rohtak',
          'family lawyer rohtak',
          'child custody lawyer rohtak',
          'maintenance lawyer rohtak',
          'domestic violence lawyer rohtak',
          'best divorce advocate rohtak',
        ]}
        canonical="/matrimonial-cases"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Matrimonial & Family Law Expert in Rohtak
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Navigate divorce, custody, and family disputes with compassionate legal guidance. Advocate Naveen Arya provides experienced representation in all matrimonial matters, prioritizing your family's well-being while protecting your legal rights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="tel:+919050111113" data-testid="button-hero-call">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <Phone className="h-5 w-5" />
                    Confidential Consultation
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
                  <p className="text-3xl font-bold text-primary">12+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Cases Handled</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-why-choose">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Matrimonial Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Compassionate, experienced legal representation for sensitive family matters
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: 'Complete Confidentiality', description: 'Your privacy is our priority. All consultations and case details remain strictly confidential.' },
                { icon: Heart, title: 'Compassionate Approach', description: 'Understanding the emotional aspects while providing strong legal guidance through difficult times.' },
                { icon: Scale, title: 'Fair Settlements', description: 'Focus on equitable outcomes for maintenance, custody, and property division matters.' },
                { icon: FileText, title: 'Thorough Documentation', description: 'Meticulous preparation of petitions with comprehensive evidence and legal precedents.' },
                { icon: Users, title: 'Child-Centric Advocacy', description: 'Prioritizing children\'s best interests in custody and visitation arrangements.' },
                { icon: Clock, title: 'Efficient Resolution', description: 'Streamlined processes to minimize delays while protecting your rights at every stage.' },
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
                Matrimonial Cases We Handle
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive family law services across all matrimonial matters
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
                Our Process for Matrimonial Cases
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Step-by-step approach ensuring clarity and support throughout your case
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
                Why Clients Prefer Our Matrimonial Services
              </h2>
              <div className="space-y-4">
                {[
                  'Sensitive handling of emotionally challenging family disputes with empathy and professionalism',
                  'Extensive experience in Rohtak Family Courts and matrimonial dispute resolution',
                  'Strong track record in securing favorable custody, maintenance, and settlement outcomes',
                  'Confidential consultations with complete privacy for sensitive family matters',
                  'Strategic approach balancing amicable settlements with strong litigation when necessary',
                  'Clear communication keeping you informed at every stage of proceedings',
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
                  Common questions about matrimonial and family law matters in Rohtak
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
              Need Expert Matrimonial Legal Guidance?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get compassionate, experienced representation for your family law matter. Confidential consultation available.
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

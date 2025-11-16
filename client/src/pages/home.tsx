import { Link } from 'wouter';
import { Phone, MessageCircle, Scale, Award, Users, TrendingUp, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { practiceAreas, testimonials, faqs } from '@/lib/data';
import heroImage from '@assets/advocate-rohtak_1763319067660.jpg';
import rohtakCourtImage from '@assets/rohtak-court_1763319002240.jpg';

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'Attorney'],
    name: 'Advocate Naveen Arya',
    image: heroImage,
    '@id': 'https://advocatenaveenary.com',
    url: 'https://advocatenaveenary.com',
    telephone: '+91 90502 25555',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'District Court Complex',
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
    hasMap: 'https://www.google.com/maps/place/Advocate+Naveen+Arya/@28.8935102,76.5914257,17z/data=!3m1!4b1!4m6!3m5!1s0x390d85a7e4fa23ed:0xa4af0adba6e2ec69!8m2!3d28.8935102!4d76.5940006!16s%2Fg%2F11b779dh2m',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.facebook.com/naveenaryapresident',
      'https://www.linkedin.com/in/true-lawyer/',
      'https://www.instagram.com/truelawyer2/',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Rohtak',
    },
    description: 'Best advocate in Rohtak specializing in criminal law, matrimonial cases, property disputes, and cheque bounce cases. Over 10 years experience with 500+ successful cases.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '150',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, faqSchema],
  };

  return (
    <>
      <SEO
        title="Best Advocate in Rohtak | Advocate Naveen Arya - Top Criminal Lawyer"
        description="Best advocate in Rohtak with 10+ years experience. Expert criminal lawyer specializing in criminal law, matrimonial cases, property disputes, bail matters. SCBA: A-01417, COP: P1700/2014. Call +91 90502 25555 for free consultation."
        keywords={[
          'advocate rohtak',
          'best advocate in rohtak',
          'best criminal lawyer in rohtak',
          'best lawyer in rohtak',
          'list of advocates in rohtak court',
          'rohtak advocate',
          'rohtak advocate directory',
          'rohtak advocate list',
          'rohtak court advocate list',
          'top advocates in rohtak',
          'rohtak lawyer',
        ]}
        canonical="/"
        schema={combinedSchema}
      />
      <Header />

      <main>
        <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden" data-testid="section-hero">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-40" />
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-full">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20" data-testid="badge-scba">
                    <Scale className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">SCBA Registered</span>
                  </div>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Best Advocate in Rohtak - Advocate Naveen Arya
                  </h1>
                  <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                    Top Criminal Lawyer & Legal Expert in Rohtak
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                    Looking for the best advocate in Rohtak? With over 10 years of exceptional legal service, Advocate Naveen Arya is recognized as one of the top advocates in Rohtak, specializing in criminal law, matrimonial cases, property disputes, and civil litigation across Rohtak District Courts.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+919050225555" data-testid="button-hero-call" className="inline-block">
                    <Button size="lg" className="w-full sm:w-auto text-lg rounded-full gap-2">
                      <Phone className="h-5 w-5" />
                      Call Now
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/919050225555"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-hero-whatsapp"
                    className="inline-block"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto text-lg rounded-full gap-2 bg-background/50 backdrop-blur-sm border-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 border-t">
                  <div className="flex items-center gap-2" data-testid="stat-experience">
                    <Award className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">10+</p>
                      <p className="text-sm text-muted-foreground">Years Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2" data-testid="stat-cases">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">500+</p>
                      <p className="text-sm text-muted-foreground">Cases Won</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2" data-testid="stat-clients">
                    <Users className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">1000+</p>
                      <p className="text-sm text-muted-foreground">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full max-w-full mb-16 sm:mb-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10">
                  <img
                    src={heroImage}
                    alt="Advocate Naveen Arya - Best Advocate in Rohtak addressing legal conference, SCBA A-01417"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute bottom-4 left-4 sm:bottom-auto sm:-bottom-6 sm:left-auto sm:-left-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl shadow-lg max-w-[calc(100%-2rem)]">
                  <div className="flex items-center gap-3">
                    <Scale className="h-6 w-6 sm:h-8 sm:w-8" />
                    <div>
                      <p className="text-xs sm:text-sm opacity-90 whitespace-nowrap">Practicing Since</p>
                      <p className="text-xl sm:text-2xl font-bold">2014</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 bg-card" data-testid="section-why-choose">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Advocate Naveen Arya?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated legal expertise backed by proven results and client satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Extensive Experience',
                  description: 'Over 10 years of practice in Rohtak District Courts with deep understanding of local legal procedures and court systems.',
                },
                {
                  title: 'Proven Track Record',
                  description: '500+ successful cases across criminal law, civil litigation, family matters, and property disputes with high success rate.',
                },
                {
                  title: 'Client-Focused Approach',
                  description: 'Personalized attention to each case with regular updates, transparent communication, and strategic legal planning.',
                },
                {
                  title: 'Comprehensive Legal Services',
                  description: 'Full spectrum of legal services from consultation to trial advocacy, covering multiple practice areas under one roof.',
                },
                {
                  title: '24/7 Availability',
                  description: 'Emergency legal assistance available round the clock, especially for urgent matters like bail applications.',
                },
                {
                  title: 'Affordable Pricing',
                  description: 'Transparent and competitive fee structure with flexible payment options to ensure access to quality legal services.',
                },
              ].map((item, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-benefit-${index}`}>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-practice-areas">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Practice Areas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive legal services across multiple areas of law
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceAreas.map((area) => (
                <Card key={area.id} className="p-6 hover-elevate transition-all group w-full" data-testid={`card-practice-${area.id}`}>
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                      <Scale className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors break-words">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 break-words">{area.description}</p>
                  <Link href="/practice-areas" className="block">
                    <Button variant="ghost" className="p-0 h-auto font-medium text-left w-full justify-start whitespace-normal" data-testid={`link-learn-more-${area.id}`}>
                      <span className="break-words">Learn More About {area.title}</span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0 ml-1" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/practice-areas">
                <Button size="lg" variant="outline" data-testid="button-view-all-services">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card" data-testid="section-experience">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Experience in Rohtak Courts
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  With over a decade of practice in Rohtak District Courts, I have developed deep expertise in navigating the local legal system. My extensive experience includes regular appearances before District Courts, Additional District Courts, and various civil and criminal courts in Rohtak.
                </p>
                <p>
                  I maintain strong professional relationships with the judicial system and possess comprehensive knowledge of local court procedures, which translates into efficient case management and favorable outcomes for my clients.
                </p>
                <div className="grid sm:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-primary/5 rounded-lg">
                    <p className="text-4xl font-bold text-primary mb-2">95%</p>
                    <p className="text-sm text-foreground font-medium">Success Rate</p>
                  </div>
                  <div className="text-center p-6 bg-primary/5 rounded-lg">
                    <p className="text-4xl font-bold text-primary mb-2">500+</p>
                    <p className="text-sm text-foreground font-medium">Cases Handled</p>
                  </div>
                  <div className="text-center p-6 bg-primary/5 rounded-lg">
                    <p className="text-4xl font-bold text-primary mb-2">10+</p>
                    <p className="text-sm text-foreground font-medium">Years Practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-testimonials">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Client Testimonials
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What our satisfied clients say about our legal services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-6" data-testid={`card-testimonial-${testimonial.id}`}>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center justify-between border-t pt-4">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.caseType}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card" data-testid="section-local-advocate">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Why Choose a Local Rohtak Advocate?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  When facing legal challenges in Rohtak, hiring a local advocate who understands the nuances of Rohtak District Courts makes all the difference. As an experienced Rohtak advocate, I offer distinct advantages that out-of-town lawyers simply cannot match.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Scale className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Deep Knowledge of Rohtak Courts</h3>
                      <p className="text-muted-foreground">
                        Over 10 years of daily practice in Rohtak District Courts means I know every procedure, every official, and every legal nuance specific to Rohtak. This local expertise translates to faster case resolution and better outcomes for my clients.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Established Local Relationships</h3>
                      <p className="text-muted-foreground">
                        As a trusted advocate in Rohtak, I have built strong professional relationships with court staff, revenue officials, and local authorities. These connections ensure smooth processing of your legal matters without unnecessary delays.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Proven Success in Rohtak</h3>
                      <p className="text-muted-foreground">
                        With a 95% success rate in Rohtak courts and 500+ cases won, my track record speaks for itself. I understand what works in Rohtak's legal environment and apply this knowledge to maximize your chances of success.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Immediate Availability for Rohtak Residents</h3>
                      <p className="text-muted-foreground">
                        Being based in Rohtak means I'm always accessible when you need me. Whether it's an emergency bail application or urgent legal consultation, I can be at the Rohtak court within minutes, not hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-primary/10">
                  <img
                    src={rohtakCourtImage}
                    alt="Rohtak District Court Complex - Where advocate Rohtak Naveen Arya practices law, best advocate in Rohtak serving local residents"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <p className="text-white text-lg font-semibold mb-2">Rohtak District Court Complex</p>
                    <p className="text-white/80 text-sm">Serving justice in Rohtak for over 10 years with dedication and expertise</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Card className="p-4 text-center hover-elevate">
                    <div className="text-2xl font-bold text-primary mb-1">10+</div>
                    <p className="text-xs text-muted-foreground">Years in Rohtak Courts</p>
                  </Card>
                  <Card className="p-4 text-center hover-elevate">
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <p className="text-xs text-muted-foreground">Rohtak Cases Won</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-faq">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about legal services in Rohtak
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.id} value={`item-${index}`} className="border rounded-lg px-6" data-testid={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
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
              Need Legal Assistance in Rohtak?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert legal consultation today. Available 24/7 for emergency matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919050225555" data-testid="button-cta-call">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg px-8 py-6 rounded-full gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  data-testid="button-cta-contact"
                >
                  Contact Us
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

import { Phone, Scale, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Link } from 'wouter';
import { practiceAreas, blogPosts } from '@/lib/data';

export default function PracticeAreas() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Legal Services',
    provider: {
      '@type': 'Attorney',
      name: 'Advocate Naveen Arya',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rohtak',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Legal Services',
      itemListElement: practiceAreas.map((area) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: area.title,
          description: area.description,
        },
      })),
    },
  };

  return (
    <>
      <SEO
        title="Rohtak Lawyer Services | Practice Areas - Criminal, Civil & Family Law Expert"
        description="Comprehensive legal services by best advocate in Rohtak. Expert in criminal defense, matrimonial cases, property disputes, cheque bounce cases, bail matters, civil litigation. SCBA: A-01417. Call +91 90502 25555."
        keywords={[
          'legal services rohtak',
          'rohtak lawyer services',
          'practice areas rohtak lawyer',
          'criminal lawyer rohtak',
          'civil lawyer rohtak',
          'family lawyer rohtak',
          'best advocate in rohtak',
        ]}
        canonical="/practice-areas"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Rohtak Lawyer Services - Practice Areas
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expert legal services in Rohtak across multiple areas of law. As one of the best advocates in Rohtak, we provide comprehensive representation in Rohtak District Courts, Sessions Court, and High Court.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-practice-areas">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="space-y-6">
              {practiceAreas.map((area, index) => (
                <AccordionItem key={area.id} value={`area-${index}`} className="border-none" data-testid={`accordion-${area.id}`}>
                  <Card className="overflow-hidden">
                    <AccordionTrigger className="px-8 py-6 hover:no-underline hover-elevate transition-all [&[data-state=open]]:bg-primary/5">
                      <div className="flex items-center gap-4 text-left w-full">
                        <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary">
                          <Scale className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-foreground mb-1">{area.title}</h3>
                          <p className="text-sm text-muted-foreground">{area.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 py-6 bg-card">
                      <div className="space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">{area.detailedDescription}</p>

                        {area.relatedBlogSlugs.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-3">Related Articles</h4>
                            <div className="space-y-2">
                              {area.relatedBlogSlugs.map((slug) => {
                                const post = blogPosts.find((p) => p.slug === slug);
                                return post ? (
                                  <Link key={slug} href={`/blog/${slug}`}>
                                    <div className="flex items-center gap-2 text-sm text-primary hover:underline hover-elevate p-2 rounded-md transition-all">
                                      <ChevronRight className="h-4 w-4" />
                                      <span>{post.title}</span>
                                    </div>
                                  </Link>
                                ) : null;
                              })}
                            </div>
                          </div>
                        )}

                        <div className="pt-4 border-t">
                          <Link href="/contact">
                            <Button variant="default" data-testid={`button-consult-${area.id}`}>
                              Get Consultation
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 bg-card" data-testid="section-additional-services">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Additional Legal Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Legal Consultation',
                    description: 'Initial case assessment and legal advice on your rights and options',
                  },
                  {
                    title: 'Document Drafting',
                    description: 'Preparation of legal documents, agreements, and contracts',
                  },
                  {
                    title: 'Legal Notice',
                    description: 'Drafting and sending legal notices for various matters',
                  },
                  {
                    title: 'Title Verification',
                    description: 'Property title search and verification services',
                  },
                  {
                    title: 'Court Representation',
                    description: 'Appearing before courts on your behalf at all stages',
                  },
                  {
                    title: 'Legal Research',
                    description: 'Thorough research on case law and legal precedents',
                  },
                  {
                    title: 'Mediation Support',
                    description: 'Assistance in alternative dispute resolution',
                  },
                  {
                    title: 'Appeals',
                    description: 'Filing and arguing appeals before higher courts',
                  },
                ].map((service, index) => (
                  <Card key={index} className="p-6" data-testid={`card-service-${index}`}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-approach">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Approach to Legal Representation
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Client-Centered Strategy',
                    description: 'Every case strategy is tailored to your specific situation, goals, and circumstances rather than applying one-size-fits-all solutions.',
                  },
                  {
                    title: 'Thorough Case Preparation',
                    description: 'Meticulous research, evidence gathering, and legal analysis to build the strongest possible case foundation.',
                  },
                  {
                    title: 'Clear Communication',
                    description: 'Regular updates on case progress, explaining legal concepts in understandable terms, and maintaining transparency throughout.',
                  },
                  {
                    title: 'Aggressive Advocacy',
                    description: 'Strong courtroom representation protecting your rights and interests with persuasive arguments and strategic litigation.',
                  },
                  {
                    title: 'Ethical Practice',
                    description: 'Maintaining highest standards of professional ethics and integrity in all legal matters and client relationships.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start" data-testid={`approach-${index}`}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Need Expert Legal Assistance?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Discuss your legal matter with an experienced advocate. Call now for consultation.
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

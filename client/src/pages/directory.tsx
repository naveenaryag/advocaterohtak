import { Scale, Award, MapPin, Phone, Mail, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'wouter';
import rohtakCourtImage from '@assets/rohtak-court_1763319002240.jpg';

export default function Directory() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Attorney',
        position: 1,
        name: 'Advocate Naveen Arya',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'District Court Complex',
          addressLocality: 'Rohtak',
          addressRegion: 'Haryana',
          postalCode: '124001',
          addressCountry: 'IN',
        },
        telephone: '+91 90502 11113',
        email: 'naveen@advocaterohtak.com',
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://advocatenaveenary.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Advocate Directory',
        item: 'https://advocatenaveenary.com/directory',
      },
    ],
  };

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [schema, breadcrumbSchema],
  };

  return (
    <>
      <SEO
        title="Rohtak Advocate List | Directory of Advocates in Rohtak Court 2025"
        description="Complete list of advocates in Rohtak court. Find the best advocate in Rohtak directory for criminal, civil, family law. Top-rated lawyers practicing in Rohtak District Courts. SCBA: A-01417."
        keywords={[
          'list of advocates in rohtak court',
          'rohtak advocate directory',
          'rohtak advocate list',
          'rohtak court advocate list',
          'advocate directory rohtak',
          'lawyers in rohtak',
          'best advocate in rohtak',
        ]}
        canonical="/directory"
        schema={combinedSchema}
      />
      <Header />

      <main>
        <section className="bg-card border-b py-6" data-testid="section-breadcrumb">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Advocate Directory</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <section className="py-16" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
                  Rohtak Advocate List - Complete Directory
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Looking for the list of advocates in Rohtak court? Our comprehensive Rohtak advocate directory features the best lawyers practicing in Rohtak District Courts with expertise across criminal, civil, and family law practice areas.
                </p>
              </div>
              <div className="relative">
                <img
                  src={rohtakCourtImage}
                  alt="Judicial Complex Rohtak - District Court where top advocates practice law"
                  className="w-full rounded-2xl shadow-xl border-2 border-primary/10"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-4 rounded-lg border">
                  <p className="text-sm font-medium text-foreground">District Court Complex, Rohtak</p>
                  <p className="text-xs text-muted-foreground">Haryana - 124001</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20" data-testid="section-featured">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-accent-foreground">Featured Advocate</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Top Advocate in Rohtak
              </h2>
            </div>

            <Card className="overflow-hidden" data-testid="card-featured-advocate">
              <div className="grid lg:grid-cols-3 gap-0">
                <div className="bg-primary text-primary-foreground p-8 lg:p-10">
                  <div className="mb-6">
                    <Scale className="h-12 w-12 mb-4" />
                    <h3 className="font-serif text-2xl font-bold mb-2">Advocate Naveen Arya</h3>
                    <p className="text-sm opacity-90">SCBA: A-01417 | COP: P1700/2014</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 opacity-80" />
                      <div>
                        <p className="text-sm opacity-80">Experience</p>
                        <p className="font-semibold">10+ Years</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 opacity-80" />
                      <div>
                        <p className="text-sm opacity-80">Cases Won</p>
                        <p className="font-semibold">500+</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 p-8 lg:p-10 bg-card">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Specializations</h4>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {[
                      'Criminal Law',
                      'Matrimonial Cases',
                      'Property Disputes',
                      'Civil Litigation',
                      'Cheque Bounce Cases (S.138)',
                      'Bail Matters',
                    ].map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Office Address</p>
                        <p className="text-sm text-muted-foreground">District Court Complex, Rohtak, Haryana - 124001</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Contact Number</p>
                        <a href="tel:+919050111113" className="text-sm text-primary hover:underline">
                          +91 90502 11113
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <a href="mailto:naveen@advocaterohtak.com" className="text-sm text-primary hover:underline">
                          naveen@advocaterohtak.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t">
                    <a href="tel:+919050111113" data-testid="button-call-advocate">
                      <Button className="w-full sm:w-auto gap-2">
                        <Phone className="h-4 w-4" />
                        Call Now
                      </Button>
                    </a>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full sm:w-auto" data-testid="button-contact-advocate">
                        Get Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-card" data-testid="section-courts">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Courts in Rohtak
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'District & Sessions Court, Rohtak',
                  description: 'Main civil and criminal court handling serious offenses and appeals',
                },
                {
                  name: 'Additional District Courts',
                  description: 'Civil and criminal matters of original and appellate jurisdiction',
                },
                {
                  name: 'Family Courts',
                  description: 'Matrimonial disputes, custody, maintenance, and family matters',
                },
                {
                  name: 'Motor Accident Claims Tribunal',
                  description: 'Claims for compensation arising from motor vehicle accidents',
                },
              ].map((court, index) => (
                <Card key={index} className="p-6" data-testid={`card-court-${index}`}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{court.name}</h3>
                  <p className="text-sm text-muted-foreground">{court.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-info">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                About Rohtak Legal System
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  Rohtak District Courts serve as the primary judicial institution for the Rohtak district in Haryana. The court complex houses various courts including the District & Sessions Court, Additional District Courts, Civil Courts, and Criminal Courts.
                </p>
                <p className="text-muted-foreground mb-4">
                  Advocates practicing in Rohtak courts handle a wide range of legal matters including criminal cases, civil disputes, family law matters, property litigation, and commercial disputes. The Rohtak Bar Association maintains a registry of all enrolled advocates practicing in the district.
                </p>
                <p className="text-muted-foreground">
                  When choosing an advocate in Rohtak, it's important to consider their experience in the relevant practice area, familiarity with local court procedures, and track record of successful case outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Need Legal Representation?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact Advocate Naveen Arya for expert legal services in Rohtak
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" data-testid="button-cta-contact">
                Contact Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

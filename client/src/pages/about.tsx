import { Scale, Award, GraduationCap, Briefcase, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Link } from 'wouter';
import officeImage from '@assets/generated_images/Law_office_interior_background_4b6d99e9.png';

export default function About() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Advocate Naveen Arya',
    jobTitle: 'Attorney at Law',
    worksFor: {
      '@type': 'LegalService',
      name: 'Advocate Naveen Arya Law Practice',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rohtak',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
      },
    },
    alumniOf: 'Law College (Placeholder)',
    knowsAbout: ['Criminal Law', 'Civil Law', 'Family Law', 'Property Law'],
    memberOf: 'Bar Council of Haryana',
  };

  const timeline = [
    { year: '2014', event: 'Enrolled with Bar Council of Haryana', description: 'Began legal practice in Rohtak District Courts' },
    { year: '2015', event: 'Joined Senior Advocate', description: 'Apprenticeship under renowned criminal lawyer' },
    { year: '2017', event: 'Independent Practice', description: 'Established independent law practice' },
    { year: '2019', event: 'Expanded Practice Areas', description: 'Added civil and family law expertise' },
    { year: '2021', event: '500+ Cases Milestone', description: 'Achieved significant case resolution milestone' },
    { year: '2024', event: 'Decade of Service', description: 'Completed 10 years of dedicated legal service' },
  ];

  const credentials = [
    { icon: GraduationCap, title: 'Legal Education', value: 'B.L. (Honors), M.L.' },
    { icon: Scale, title: 'SCBA Registration', value: 'No. A-01417' },
    { icon: Scale, title: 'COP Registration', value: 'P1700/2014' },
    { icon: Briefcase, title: 'Experience', value: '10+ Years in Practice' },
    { icon: TrendingUp, title: 'Success Rate', value: '95% Case Success' },
    { icon: Users, title: 'Clients Served', value: '1000+ Happy Clients' },
  ];

  const awards = [
    'Bachelor of Laws (B.L.) with Honors - 2014',
    'Certificate of Practice (COP) - P1700/2014',
    'Master of Laws (M.L.) - 2016',
    'National Eligibility Test (NET) Qualified - 2014',
    'Outstanding Lawyer Award - 2019',
    'International Legal Conference - Chairperson - 2019',
    'Moot Court Judge Certification - 2024',
    'Mr. Talent Award - Excellence in Legal Practice',
    '15+ Research Papers Published in National & International Journals',
  ];

  const memberships = [
    {
      title: 'Supreme Court Bar Association',
      registration: 'Registration No. A-01417',
      description: 'Active member with Supreme Court practice rights'
    },
    {
      title: 'Punjab & Haryana High Court',
      registration: 'Certificate of Practice: P1700/2014',
      description: 'Authorized to practice before High Court'
    },
    {
      title: 'District Bar Association, Rohtak',
      registration: 'Enrolled Member Since 2014',
      description: 'Active participant in district bar activities'
    },
  ];

  return (
    <>
      <SEO
        title="About Advocate Naveen Arya | Best Lawyer in Rohtak - Experience & Credentials"
        description="Meet Advocate Naveen Arya, a leading lawyer in Rohtak with 10+ years of experience. SCBA registered advocate specializing in criminal law, civil litigation, and family matters."
        keywords={[
          'advocate naveen arya',
          'best lawyer rohtak',
          'rohtak advocate profile',
          'experienced lawyer rohtak',
          'top advocate rohtak',
        ]}
        canonical="/about"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                About Advocate Naveen Arya
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A dedicated legal professional committed to delivering justice and protecting the rights of clients across Rohtak with unwavering integrity and expertise.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-profile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-primary/10 sticky top-24">
                  <img
                    src={officeImage}
                    alt="Law Office of Advocate Naveen Arya"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-6 text-primary-foreground">
                    <p className="text-sm opacity-90">Law Practice Since 2014</p>
                    <p className="text-2xl font-bold">Advocate Naveen Arya</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Professional Profile</h2>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Advocate Naveen Arya is a distinguished legal practitioner with over 10 years of experience in Rohtak District Courts. Enrolled with the Bar Council of Haryana in 2014, he has established himself as one of the most trusted advocates in the region.
                    </p>
                    <p>
                      His practice encompasses a wide spectrum of legal services including criminal defense, civil litigation, matrimonial disputes, property matters, and commercial law. With a client-first approach and commitment to excellence, Advocate Arya has successfully represented over 1000 clients and achieved favorable outcomes in 500+ cases.
                    </p>
                    <p>
                      Known for his meticulous case preparation, strong courtroom advocacy, and ethical practice, he has earned the respect of both clients and peers in the legal community. His deep understanding of local court procedures and strong professional relationships ensure efficient case management and optimal results.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contact">
                    <Button size="lg" data-testid="button-schedule-consultation">
                      Schedule Consultation
                    </Button>
                  </Link>
                  <a href="tel:+919050225555" data-testid="button-call-now">
                    <Button variant="outline" size="lg">
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card" data-testid="section-credentials">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Credentials & Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional qualifications and achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {credentials.map((credential, index) => (
                <Card key={index} className="p-6 text-center hover-elevate transition-all" data-testid={`card-credential-${index}`}>
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                    <credential.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">{credential.title}</h3>
                  <p className="text-lg font-semibold text-foreground">{credential.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-timeline">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
                Career Timeline
              </h2>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start" data-testid={`timeline-${index}`}>
                    <div className="flex-shrink-0 w-20 text-right">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 pb-8 border-l-2 border-border pl-6 relative">
                      <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[9px]" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.event}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card" data-testid="section-awards">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Awards & Recognition
                </h2>
                <p className="text-lg text-muted-foreground">
                  Academic excellence and professional achievements
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {awards.map((award, index) => (
                  <Card key={index} className="p-6 flex items-start gap-4 hover-elevate transition-all" data-testid={`card-award-${index}`}>
                    <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-base text-foreground">{award}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-memberships">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Professional Memberships
                </h2>
                <p className="text-lg text-muted-foreground">
                  Registered with leading bar associations
                </p>
              </div>

              <div className="space-y-6">
                {memberships.map((membership, index) => (
                  <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-membership-${index}`}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Scale className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{membership.title}</h3>
                        <p className="text-sm font-medium text-primary mb-2">{membership.registration}</p>
                        <p className="text-muted-foreground">{membership.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-philosophy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Legal Philosophy
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  My approach to legal practice is built on three fundamental principles: integrity, dedication, and excellence. I believe that every client deserves not just legal representation, but a committed advocate who will fight tirelessly for their rights and interests.
                </p>
                <p>
                  Access to justice should not be a privilege but a right. I strive to make quality legal services accessible while maintaining the highest standards of professional ethics and competence. Each case is approached with fresh perspective, thorough research, and strategic planning tailored to achieve the best possible outcome.
                </p>
                <p>
                  Building strong attorney-client relationships based on trust and transparent communication is at the heart of my practice. I believe in keeping clients informed, involved, and empowered throughout the legal process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Ready to Discuss Your Legal Matter?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a consultation to discuss your case with an experienced advocate
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

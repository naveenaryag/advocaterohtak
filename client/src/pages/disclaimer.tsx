import { AlertTriangle, Shield, FileText, Scale } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Link } from 'wouter';

export default function Disclaimer() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Legal Disclaimer',
    description: 'Legal disclaimer for Advocate Naveen Arya law practice website',
    publisher: {
      '@type': 'Attorney',
      name: 'Advocate Naveen Arya',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rohtak',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <SEO
        title="Legal Disclaimer | Advocate Naveen Arya - Rohtak Lawyer"
        description="Legal disclaimer for Advocate Naveen Arya website. Information provided is not a substitute for legal advice. No attorney-client relationship unless formally agreed."
        keywords={[
          'legal disclaimer',
          'advocate disclaimer',
          'law website disclaimer',
          'attorney disclaimer rohtak',
        ]}
        canonical="/disclaimer"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-10 h-10 text-primary" />
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  Legal Disclaimer
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Important information regarding the use of this website and legal services offered by Advocate Naveen Arya.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-disclaimer-content">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-8">
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Scale className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">No Attorney-Client Relationship</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p>
                        The use of this website, submission of contact forms, or any communication through email, phone, or WhatsApp does not create an attorney-client relationship between you and Advocate Naveen Arya or the law practice.
                      </p>
                      <p>
                        An attorney-client relationship is formed only when:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>A formal written engagement agreement is executed</li>
                        <li>Acceptance of representation is communicated in writing</li>
                        <li>Professional fees are discussed and agreed upon</li>
                        <li>Conflict of interest check is completed</li>
                      </ul>
                      <p className="font-semibold text-foreground">
                        Do not send confidential or time-sensitive information through this website until an attorney-client relationship has been formally established.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Not a Substitute for Legal Advice</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p>
                        The information provided on this website is for general informational purposes only and should not be construed as legal advice. Every legal situation is unique and depends on specific facts and circumstances.
                      </p>
                      <p>
                        This website does not provide:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Legal opinions on specific cases or matters</li>
                        <li>Recommendations for particular legal actions</li>
                        <li>Guaranteed outcomes or results</li>
                        <li>Current updates on rapidly changing laws</li>
                      </ul>
                      <p>
                        For legal advice tailored to your specific situation, please schedule a formal consultation with Advocate Naveen Arya.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Jurisdiction & Applicability</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p>
                        Advocate Naveen Arya is enrolled with the Bar Council of India and practices primarily in:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>District Courts, Rohtak, Haryana</li>
                        <li>Punjab & Haryana High Court (COP: P1700/2014)</li>
                        <li>Supreme Court of India (SCBA: A-01417)</li>
                      </ul>
                      <p>
                        The information on this website is primarily applicable to laws of India, particularly those relevant to Haryana jurisdiction. Laws vary by state, country, and jurisdiction. Information provided may not be applicable outside India or in jurisdictions other than Haryana.
                      </p>
                      <p>
                        The practice of law is governed by the Bar Council of India and the Advocates Act, 1961.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-accent/20 border-accent">
                <h2 className="text-2xl font-bold mb-4">No Guarantee of Results</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    Past results, case studies, testimonials, or statistics mentioned on this website do not guarantee, warrant, or predict the outcome of your case. Every legal matter is different and must be evaluated on its own merits.
                  </p>
                  <p>
                    The outcome of any legal matter depends on numerous factors including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Specific facts and evidence of the case</li>
                    <li>Applicable laws and judicial precedents</li>
                    <li>Court procedures and timelines</li>
                    <li>Actions of opposing parties</li>
                    <li>Judicial discretion and interpretation</li>
                  </ul>
                  <p className="font-semibold text-foreground">
                    Advocate Naveen Arya makes no representations or warranties regarding the outcome of any legal matter.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Website Content Accuracy</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    While we strive to keep the information on this website current and accurate, laws change frequently and without notice. We make no representations or warranties about the completeness, accuracy, reliability, or timeliness of the content.
                  </p>
                  <p>
                    Users are advised to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Verify information with current legal sources</li>
                    <li>Consult with a qualified attorney before taking action</li>
                    <li>Not rely solely on website content for legal decisions</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    Advocate Naveen Arya and this law practice shall not be liable for any damages, losses, or injuries arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use or inability to use this website</li>
                    <li>Reliance on information provided on this website</li>
                    <li>Delays or interruptions in website availability</li>
                    <li>Technical errors or inaccuracies in content</li>
                    <li>Unauthorized access to or alteration of transmissions or data</li>
                  </ul>
                </div>
              </Card>

              <div className="bg-muted/50 p-8 rounded-lg border-l-4 border-primary">
                <h2 className="text-2xl font-bold mb-4">Contact for Legal Advice</h2>
                <p className="text-muted-foreground mb-4">
                  If you require legal advice or wish to engage our services, please contact us to schedule a formal consultation:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Phone:</strong> <a href="tel:+919050111113" className="text-primary hover:underline">+91 90501 11113</a></p>
                  <p><strong>Email:</strong> <a href="mailto:naveen@advocaterohtak.com" className="text-primary hover:underline">naveen@advocaterohtak.com</a></p>
                  <p><strong>Office:</strong> District Court Complex, Rohtak, Haryana - 124001</p>
                </div>
                <div className="mt-6">
                  <Link href="/contact">
                    <a className="text-primary font-semibold hover:underline" data-testid="link-contact">
                      Schedule a Consultation →
                    </a>
                  </Link>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center pt-8">
                Last Updated: November 16, 2025
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

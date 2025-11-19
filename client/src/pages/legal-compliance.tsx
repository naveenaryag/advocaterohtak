import { Scale, Shield, Award, FileCheck, Users, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function LegalCompliance() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Legal Services Compliance',
    description: 'Legal services compliance and ethics statement for Advocate Naveen Arya law practice',
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
        title="Legal Compliance & Ethics | Advocate Naveen Arya - Bar Council Compliance"
        description="Legal services compliance for Advocate Naveen Arya. Bar Council of India compliance, ethics statement, professional standards, and case acceptance criteria."
        keywords={[
          'legal compliance',
          'bar council compliance',
          'advocate ethics',
          'professional standards',
        ]}
        canonical="/legal-compliance"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-10 h-10 text-primary" />
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  Legal Services Compliance
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our commitment to professional ethics, Bar Council compliance, and highest standards of legal practice.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-compliance-content">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-8">
              <Card className="p-8 bg-primary/5">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Bar Council of India Compliance</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p className="font-semibold text-foreground text-lg">
                        Advocate Naveen Arya is a duly enrolled advocate in full compliance with the Bar Council of India and the Advocates Act, 1961.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-foreground mt-6">Professional Enrollment & Registration</h3>
                      <div className="space-y-3 not-prose">
                        <div className="bg-background p-4 rounded-lg border">
                          <p className="font-semibold text-foreground">Supreme Court Bar Association (SCBA)</p>
                          <p className="text-sm">Registration Number: <span className="text-primary font-mono">A-01417</span></p>
                          <p className="text-sm text-muted-foreground">Authorized to practice before the Supreme Court of India</p>
                        </div>
                        
                        <div className="bg-background p-4 rounded-lg border">
                          <p className="font-semibold text-foreground">Punjab & Haryana High Court</p>
                          <p className="text-sm">Certificate of Practice (COP): <span className="text-primary font-mono">P1700/2014</span></p>
                          <p className="text-sm text-muted-foreground">Enrolled to practice before Punjab & Haryana High Court</p>
                        </div>
                        
                        <div className="bg-background p-4 rounded-lg border">
                          <p className="font-semibold text-foreground">District Bar Association, Rohtak</p>
                          <p className="text-sm">Enrolled Member Since: <span className="text-primary font-mono">2014</span></p>
                          <p className="text-sm text-muted-foreground">Active member practicing in Rohtak District Courts</p>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Adherence to Bar Council Rules</h3>
                      <p>
                        Our practice strictly adheres to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Bar Council of India Rules (Part VI of Rules)</li>
                        <li>Standards of Professional Conduct and Etiquette</li>
                        <li>Rules governing advocate advertising and solicitation</li>
                        <li>Continuing Legal Education (CLE) requirements</li>
                        <li>Client account rules and financial regulations</li>
                        <li>Conflict of interest guidelines</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Professional Ethics Statement</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p className="font-semibold text-foreground">
                        We are committed to upholding the highest standards of professional ethics and integrity in all aspects of our legal practice.
                      </p>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Our Ethical Commitments</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Client Confidentiality:</strong> Absolute protection of attorney-client privilege and confidential communications</li>
                        <li><strong>Conflict of Interest:</strong> Rigorous screening to avoid representing conflicting interests</li>
                        <li><strong>Competent Representation:</strong> Maintaining legal knowledge and skills through continuous education</li>
                        <li><strong>Zealous Advocacy:</strong> Providing diligent and competent representation within legal and ethical bounds</li>
                        <li><strong>Truthfulness:</strong> Honest and candid communication with clients, courts, and opposing parties</li>
                        <li><strong>Professional Courtesy:</strong> Treating all parties, judges, and fellow advocates with respect</li>
                        <li><strong>Pro Bono Service:</strong> Contributing to legal aid and access to justice initiatives</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Independence & Integrity</h3>
                      <p>
                        We maintain professional independence and do not:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Accept cases involving conflicts of interest</li>
                        <li>Share fees with non-lawyers</li>
                        <li>Engage in misleading or false advertising</li>
                        <li>Guarantee specific case outcomes</li>
                        <li>Solicit professional employment through improper means</li>
                        <li>Engage in conduct prejudicial to the administration of justice</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <FileCheck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Case Acceptance Criteria</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p>
                        We carefully evaluate each potential matter to ensure we can provide competent and ethical representation. We accept cases based on the following criteria:
                      </p>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Cases We Accept</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Criminal Law:</strong> Bail applications, trial defense, anticipatory bail, appeals, NDPS cases</li>
                        <li><strong>Civil Law:</strong> Property disputes, contract disputes, recovery suits, injunctions</li>
                        <li><strong>Family Law:</strong> Divorce, child custody, maintenance, domestic violence, adoption</li>
                        <li><strong>Matrimonial Matters:</strong> Mutual consent divorce, contested divorce, alimony</li>
                        <li><strong>Cheque Bounce Cases:</strong> Section 138 NI Act proceedings</li>
                        <li><strong>Consumer Disputes:</strong> Consumer court representation</li>
                        <li><strong>Service Matters:</strong> Employment disputes, service tribunals</li>
                        <li><strong>Writ Petitions:</strong> High Court constitutional matters</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Pre-Acceptance Evaluation</h3>
                      <p>
                        Before accepting representation, we assess:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Whether we have the expertise required for the matter</li>
                        <li>Absence of conflicts of interest</li>
                        <li>Legal merit and viability of the case</li>
                        <li>Client's ability to meet fee obligations</li>
                        <li>Compatibility with our ethical standards</li>
                        <li>Availability of time and resources</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-accent/20 border-accent">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Cases We Do NOT Accept</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p className="font-semibold text-foreground">
                        In accordance with professional ethics and Bar Council rules, we do not accept cases involving:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Conflicts of interest with existing or former clients</li>
                        <li>Matters outside our areas of expertise or jurisdiction</li>
                        <li>Cases that would require us to violate professional ethics</li>
                        <li>Frivolous or vexatious litigation</li>
                        <li>Cases where the prospective client seeks illegal or unethical outcomes</li>
                        <li>Matters where we cannot provide competent representation</li>
                        <li>Cases involving opposing parties we have represented previously</li>
                        <li>Representation that would compromise our professional independence</li>
                      </ul>
                      <p className="bg-background p-4 rounded-lg border-l-4 border-primary mt-4">
                        <strong className="text-foreground">Note:</strong> Declining representation does not reflect on the merit of your case. It may be due to conflicts, capacity constraints, or practice area limitations.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Consumer Protection & Client Rights</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Your Rights as a Client</h3>
                      <p>
                        As our client, you have the right to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Competent Representation:</strong> Receive diligent and skilled legal services</li>
                        <li><strong>Confidentiality:</strong> Have your communications protected by attorney-client privilege</li>
                        <li><strong>Communication:</strong> Be kept informed about your case status and developments</li>
                        <li><strong>Transparency:</strong> Receive clear explanations of legal strategies and options</li>
                        <li><strong>Fair Fees:</strong> Be charged reasonable and transparent fees for services</li>
                        <li><strong>File Access:</strong> Access your case files and documents</li>
                        <li><strong>Termination:</strong> Terminate representation at any time (subject to certain conditions)</li>
                        <li><strong>Grievance Redressal:</strong> File complaints regarding our services</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Fee Transparency</h3>
                      <p>
                        We provide:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Written fee agreements before engagement</li>
                        <li>Clear breakdown of legal fees and expenses</li>
                        <li>Regular billing statements</li>
                        <li>Advance notice of any fee changes</li>
                        <li>Explanation of billing practices and rates</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Complaint Mechanism</h3>
                      <p>
                        If you are dissatisfied with our services, you may:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Contact us directly at <a href="mailto:naveen@advocaterohtak.com" className="text-primary hover:underline">naveen@advocaterohtak.com</a></li>
                        <li>File a complaint with the District Bar Association, Rohtak</li>
                        <li>File a complaint with the Bar Council of Punjab & Haryana</li>
                        <li>Approach the Consumer Forum for service deficiency matters</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Continuing Legal Education</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    We are committed to maintaining and enhancing our legal knowledge through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Regular participation in Continuing Legal Education (CLE) programs</li>
                    <li>Attendance at legal conferences and seminars</li>
                    <li>Study of recent judgments and legislative changes</li>
                    <li>Membership in professional legal organizations</li>
                    <li>Legal research and publication of papers</li>
                    <li>Collaboration with legal experts and specialists</li>
                  </ul>
                  <p className="bg-primary/5 p-4 rounded-lg mt-4">
                    <strong className="text-foreground">Professional Development:</strong> We have published 15+ research papers in national and international legal journals and regularly participate in moot court judging and legal education activities.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-accent/20 border-accent">
                <h2 className="text-2xl font-bold mb-4">Contact for Compliance Queries</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    For questions regarding our professional compliance, ethics, or case acceptance criteria, please contact:
                  </p>
                  <div className="not-prose space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:naveen@advocaterohtak.com" className="text-primary hover:underline">naveen@advocaterohtak.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+919050111113" className="text-primary hover:underline">+91 90501 11113</a></p>
                    <p><strong>Office:</strong> District Court Complex, Rohtak, Haryana - 124001</p>
                  </div>
                </div>
              </Card>

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

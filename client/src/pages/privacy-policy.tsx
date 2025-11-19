import { Shield, Lock, Database, Mail, Eye, UserCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function PrivacyPolicy() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description: 'Privacy policy for Advocate Naveen Arya law practice website',
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
        title="Privacy Policy | Advocate Naveen Arya - Data Protection & Privacy"
        description="Privacy policy for Advocate Naveen Arya website. Learn how we collect, use, store, and protect your personal information and legal data."
        keywords={[
          'privacy policy',
          'data protection',
          'advocate privacy',
          'client data security',
        ]}
        canonical="/privacy-policy"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-10 h-10 text-primary" />
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  Privacy Policy
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-privacy-content">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-8">
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Database className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p>
                        We collect information that you voluntarily provide to us when you:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Contact Forms:</strong> Name, email address, phone number, subject, and message content</li>
                        <li><strong>Email Communication:</strong> Email address, message content, attachments</li>
                        <li><strong>Phone/WhatsApp:</strong> Phone number, call/message logs, conversation content</li>
                        <li><strong>Consultations:</strong> Legal case details, documents, personal information relevant to your matter</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold text-foreground mt-6">Automatically Collected Information</h3>
                      <p>
                        When you visit our website, we may automatically collect certain technical information:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>IP address and geographic location</li>
                        <li>Browser type and version</li>
                        <li>Device information (mobile, desktop, tablet)</li>
                        <li>Pages visited and time spent on pages</li>
                        <li>Referring website or source</li>
                        <li>Date and time of visit</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold text-foreground mt-6">Cookies and Tracking</h3>
                      <p>
                        We may use cookies and similar tracking technologies for website functionality and analytics. See our <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a> for more details.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Eye className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p>
                        We use the collected information for the following purposes:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Legal Services:</strong> To provide legal consultation, representation, and advice</li>
                        <li><strong>Communication:</strong> To respond to inquiries, schedule appointments, and maintain client communication</li>
                        <li><strong>Case Management:</strong> To prepare legal documents, file cases, and manage ongoing legal matters</li>
                        <li><strong>Billing & Payments:</strong> To process fees, generate invoices, and maintain financial records</li>
                        <li><strong>Website Improvement:</strong> To analyze usage patterns and improve user experience</li>
                        <li><strong>Legal Compliance:</strong> To comply with Bar Council regulations, court requirements, and legal obligations</li>
                        <li><strong>Security:</strong> To protect against fraud, unauthorized access, and security threats</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Lock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Data Storage & Protection</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">How We Store Your Data</h3>
                      <p>
                        Your personal information and legal data are stored:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>In secure, password-protected systems</li>
                        <li>On encrypted servers with restricted access</li>
                        <li>In physical files stored in locked premises</li>
                        <li>With reputable cloud service providers with appropriate security measures</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Security Measures</h3>
                      <p>
                        We implement reasonable security measures to protect your information:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>SSL/TLS encryption for data transmission</li>
                        <li>Access controls and authentication mechanisms</li>
                        <li>Regular security audits and updates</li>
                        <li>Employee confidentiality agreements</li>
                        <li>Secure backup and disaster recovery procedures</li>
                      </ul>

                      <p className="bg-accent/20 p-4 rounded-lg border-l-4 border-primary mt-4">
                        <strong className="text-foreground">Note:</strong> While we use reasonable security measures, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <UserCheck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Third-Party Services & Disclosure</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Third-Party Tools</h3>
                      <p>
                        We may use the following third-party services that may collect or process your information:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>WhatsApp Business:</strong> For client communication (governed by WhatsApp's privacy policy)</li>
                        <li><strong>Email Service Providers:</strong> For email communication and newsletters</li>
                        <li><strong>Web Analytics:</strong> Google Analytics or similar tools (if implemented) for website usage analysis</li>
                        <li><strong>Payment Processors:</strong> For processing consultation fees and legal fees</li>
                        <li><strong>Cloud Storage:</strong> For secure document storage and backup</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mt-6">When We Share Your Information</h3>
                      <p>
                        We may disclose your information in the following circumstances:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Legal Requirements:</strong> When required by court orders, subpoenas, or legal process</li>
                        <li><strong>Professional Consultations:</strong> With other legal professionals (with your consent or as necessary)</li>
                        <li><strong>Expert Witnesses:</strong> When necessary for case preparation</li>
                        <li><strong>Court Filings:</strong> As required for legal proceedings</li>
                        <li><strong>Service Providers:</strong> With trusted third parties who assist in providing our services</li>
                      </ul>

                      <p className="font-semibold text-foreground mt-4">
                        We do NOT sell, rent, or trade your personal information to third parties for marketing purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary/5">
                <h2 className="text-2xl font-bold mb-4">Attorney-Client Privilege & Confidentiality</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    Once an attorney-client relationship is established, all communications and information you share are protected by attorney-client privilege and professional confidentiality rules under the Advocates Act, 1961 and Bar Council of India rules.
                  </p>
                  <p>
                    This privilege means:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your confidential communications cannot be disclosed without your consent</li>
                    <li>Information is protected from disclosure in legal proceedings</li>
                    <li>We maintain strict confidentiality obligations as legal professionals</li>
                  </ul>
                  <p className="font-semibold text-foreground">
                    However, this privilege only applies after a formal attorney-client relationship is established. See our <a href="/disclaimer" className="text-primary hover:underline">Disclaimer</a> for details.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Your Rights & Choices</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your information (subject to legal and professional obligations)</li>
                    <li><strong>Object:</strong> Object to certain processing of your information</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing (where applicable)</li>
                    <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
                  </ul>
                  <p className="bg-accent/20 p-4 rounded-lg border-l-4 border-primary mt-4">
                    <strong className="text-foreground">Note:</strong> Some data may need to be retained for legal, professional, or regulatory compliance purposes even after you request deletion.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    We retain your personal information for as long as necessary to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide legal services and maintain client relationships</li>
                    <li>Comply with legal and professional obligations</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Meet Bar Council record-keeping requirements</li>
                  </ul>
                  <p>
                    Typically, client files and records are retained for a minimum of 7-10 years after case closure, as per professional guidelines and legal requirements.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground">
                  <p>
                    Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Changes to Privacy Policy</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will post the updated policy on this page with a new "Last Updated" date.
                  </p>
                  <p>
                    Continued use of our website and services after changes indicates your acceptance of the updated Privacy Policy.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-accent/20 border-accent">
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Grievance Redressal & Contact</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p>
                        If you have any questions, concerns, or complaints regarding this Privacy Policy, data protection, or wish to exercise your rights, please contact:
                      </p>
                      
                      <div className="bg-background p-6 rounded-lg border space-y-3 not-prose">
                        <p className="font-semibold text-foreground text-lg">Grievance Officer</p>
                        <p><strong>Name:</strong> Advocate Naveen Arya</p>
                        <p><strong>Email:</strong> <a href="mailto:naveen@advocaterohtak.com" className="text-primary hover:underline">naveen@advocaterohtak.com</a></p>
                        <p><strong>Phone:</strong> <a href="tel:+919050111113" className="text-primary hover:underline">+91 90501 11113</a></p>
                        <p><strong>Office Address:</strong> District Court Complex, Rohtak, Haryana - 124001</p>
                        <p className="text-sm text-muted-foreground pt-2">
                          <strong>Response Time:</strong> We will acknowledge your grievance within 48 hours and provide a resolution within 72 hours of acknowledgment.
                        </p>
                      </div>

                      <p className="mt-4">
                        For urgent privacy concerns or data breach notifications, please call us directly at <a href="tel:+919050111113" className="text-primary hover:underline">+91 90501 11113</a>.
                      </p>
                    </div>
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

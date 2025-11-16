import { FileText, Scale, AlertCircle, Copyright } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Terms() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms and Conditions',
    description: 'Terms and conditions for using Advocate Naveen Arya law practice website',
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
        title="Terms & Conditions | Advocate Naveen Arya - Website Usage Terms"
        description="Terms and conditions for using Advocate Naveen Arya website. Legal terms governing website usage, intellectual property, and user responsibilities."
        keywords={[
          'terms and conditions',
          'website terms',
          'legal terms',
          'user agreement',
        ]}
        canonical="/terms"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-10 h-10 text-primary" />
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  Terms & Conditions
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Please read these terms and conditions carefully before using our website and services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-terms-content">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    By accessing and using this website (advocatenaveenary.com), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website.
                  </p>
                  <p>
                    These terms apply to all visitors, users, and others who access or use the website.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Scale className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Website Usage</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Permitted Use</h3>
                      <p>
                        This website is intended for:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Obtaining information about legal services offered by Advocate Naveen Arya</li>
                        <li>Contacting the law practice for consultation or engagement</li>
                        <li>Reading educational content and legal information</li>
                        <li>Learning about practice areas and professional credentials</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Prohibited Use</h3>
                      <p>
                        You agree NOT to use this website to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Violate any applicable laws or regulations</li>
                        <li>Transmit harmful or malicious code, viruses, or malware</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Harass, abuse, or harm other users or our staff</li>
                        <li>Use automated systems (bots, scrapers) without permission</li>
                        <li>Impersonate any person or entity</li>
                        <li>Collect or harvest user information</li>
                        <li>Interfere with or disrupt website functionality</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Copyright className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p>
                        All content on this website, including but not limited to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Text, articles, and blog posts</li>
                        <li>Graphics, images, and photographs</li>
                        <li>Logo, trademarks, and branding</li>
                        <li>Website design and layout</li>
                        <li>Software and source code</li>
                        <li>Videos and multimedia content</li>
                      </ul>
                      <p>
                        ...is the exclusive property of Advocate Naveen Arya or licensed to us, and is protected by Indian and international copyright, trademark, and intellectual property laws.
                      </p>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Permitted Use of Content</h3>
                      <p>
                        You may:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>View and read content for personal, non-commercial use</li>
                        <li>Print single copies for personal reference</li>
                        <li>Share links to our pages on social media</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Prohibited Use of Content</h3>
                      <p>
                        Without our prior written permission, you may NOT:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Reproduce, duplicate, or copy website content</li>
                        <li>Republish or redistribute content on other websites</li>
                        <li>Modify, adapt, or create derivative works</li>
                        <li>Use content for commercial purposes</li>
                        <li>Remove copyright notices or attributions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties & Limitation of Liability</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Website "As Is"</h3>
                      <p>
                        This website is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, regarding:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>The accuracy, reliability, or completeness of website content</li>
                        <li>The availability or uninterrupted operation of the website</li>
                        <li>The security of data transmission</li>
                        <li>The absence of errors, viruses, or harmful components</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Limitation of Liability</h3>
                      <p className="font-semibold text-foreground">
                        To the fullest extent permitted by law, Advocate Naveen Arya and this law practice shall NOT be liable for:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Any direct, indirect, incidental, special, or consequential damages</li>
                        <li>Loss of profits, revenue, data, or business opportunities</li>
                        <li>Damages arising from use or inability to use the website</li>
                        <li>Damages from unauthorized access to your data</li>
                        <li>Damages from errors or omissions in website content</li>
                        <li>Damages from third-party websites linked from our site</li>
                      </ul>

                      <p className="bg-accent/20 p-4 rounded-lg border-l-4 border-primary mt-4">
                        <strong className="text-foreground">Important:</strong> This limitation of liability applies even if we have been advised of the possibility of such damages.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    This website may contain links to third-party websites, services, or resources. These links are provided for your convenience only.
                  </p>
                  <p>
                    We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. By using this website, you release us from any liability arising from your use of third-party websites.
                  </p>
                  <p className="font-semibold text-foreground">
                    We strongly advise you to read the terms and conditions and privacy policies of any third-party websites you visit.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    As a user of this website, you are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maintaining the confidentiality of any account credentials</li>
                    <li>All activities conducted under your account or IP address</li>
                    <li>Ensuring the accuracy of information you provide</li>
                    <li>Complying with all applicable laws when using this website</li>
                    <li>Immediately notifying us of any unauthorized use of your account</li>
                    <li>Keeping your contact information current and accurate</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground">
                  <p>
                    You agree to indemnify, defend, and hold harmless Advocate Naveen Arya, the law practice, and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your violation of these Terms and Conditions</li>
                    <li>Your violation of any rights of third parties</li>
                    <li>Your misuse of the website or services</li>
                    <li>Your submission of false or misleading information</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 bg-primary/5">
                <div className="flex items-start gap-4">
                  <Scale className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Governing Law & Jurisdiction</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p className="font-semibold text-foreground">
                        These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
                      </p>
                      <p>
                        Any disputes arising from or relating to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>These Terms and Conditions</li>
                        <li>Use of this website</li>
                        <li>Legal services provided by Advocate Naveen Arya</li>
                      </ul>
                      <p>
                        ...shall be subject to the exclusive jurisdiction of the courts in Rohtak, Haryana, India.
                      </p>
                      <p className="mt-4">
                        By using this website, you irrevocably consent to the jurisdiction of the courts in Rohtak, Haryana for the resolution of any disputes.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Modification of Terms</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    We reserve the right to modify or replace these Terms and Conditions at any time at our sole discretion. Changes will be effective immediately upon posting to this website.
                  </p>
                  <p>
                    Your continued use of the website after any changes indicates your acceptance of the new terms.
                  </p>
                  <p className="font-semibold text-foreground">
                    It is your responsibility to review these Terms periodically for changes.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Termination</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground">
                  <p>
                    We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms and Conditions.
                  </p>
                  <p>
                    Upon termination, your right to use the website will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Severability</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground">
                  <p>
                    If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-accent/20 border-accent">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="not-prose space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:naveen@advocaterohtak.com" className="text-primary hover:underline">naveen@advocaterohtak.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+919050225555" className="text-primary hover:underline">+91 90502 25555</a></p>
                    <p><strong>Address:</strong> District Court Complex, Rohtak, Haryana - 124001</p>
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

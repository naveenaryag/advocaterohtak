import { Cookie, Settings, Eye, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function CookiePolicy() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Cookie Policy',
    description: 'Cookie policy for Advocate Naveen Arya law practice website',
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
        title="Cookie Policy | Advocate Naveen Arya - Website Cookies & Tracking"
        description="Cookie policy for Advocate Naveen Arya website. Learn about cookies we use, tracking technologies, and how to manage your preferences."
        keywords={[
          'cookie policy',
          'cookies',
          'tracking',
          'website privacy',
        ]}
        canonical="/cookie-policy"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="w-10 h-10 text-primary" />
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  Cookie Policy
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                This policy explains how we use cookies and similar technologies on our website.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-cookie-content">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                  <p>
                    Cookies allow websites to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you use the website</li>
                    <li>Improve your browsing experience</li>
                    <li>Provide personalized content and features</li>
                    <li>Analyze website traffic and performance</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Eye className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p>
                        We use cookies to enhance your experience on our website and understand how visitors interact with our site. Currently, our website uses minimal cookies, primarily for:
                      </p>
                      
                      <h3 className="text-lg font-semibold text-foreground mt-6">Essential Cookies</h3>
                      <p>
                        These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                        <li><strong>Security Cookies:</strong> Help ensure the security of your connection</li>
                        <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Analytics Cookies (If Enabled)</h3>
                      <p>
                        If we implement analytics tools like Google Analytics in the future, these cookies would help us understand:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>How visitors find and use our website</li>
                        <li>Which pages are most popular</li>
                        <li>How long visitors stay on pages</li>
                        <li>Technical information like browser type and screen resolution</li>
                      </ul>
                      <p className="bg-accent/20 p-4 rounded-lg border-l-4 border-primary">
                        <strong className="text-foreground">Note:</strong> Analytics cookies are currently not active on this website. If implemented, we will update this policy and notify users.
                      </p>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Third-Party Cookies</h3>
                      <p>
                        We may allow third-party services to set cookies on your device for:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Google Analytics:</strong> (If implemented) Website traffic analysis</li>
                        <li><strong>Social Media:</strong> Share buttons and embedded content</li>
                        <li><strong>Maps:</strong> Google Maps for office location display</li>
                      </ul>
                      <p>
                        These third-party cookies are governed by the respective privacy policies of these services.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Types of Cookies We May Use</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground">
                  <div className="space-y-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Strictly Necessary Cookies</h3>
                      <p><strong>Purpose:</strong> Enable core website functionality</p>
                      <p><strong>Duration:</strong> Session or up to 1 year</p>
                      <p><strong>Can be disabled:</strong> No (required for website operation)</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Performance Cookies</h3>
                      <p><strong>Purpose:</strong> Collect anonymous data on website usage</p>
                      <p><strong>Duration:</strong> Up to 2 years</p>
                      <p><strong>Can be disabled:</strong> Yes</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Functionality Cookies</h3>
                      <p><strong>Purpose:</strong> Remember your preferences and choices</p>
                      <p><strong>Duration:</strong> Up to 1 year</p>
                      <p><strong>Can be disabled:</strong> Yes</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary/5">
                <div className="flex items-start gap-4">
                  <Settings className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p>
                        You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in several ways:
                      </p>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Browser Settings</h3>
                      <p>
                        Most web browsers allow you to control cookies through their settings. You can:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Block all cookies</li>
                        <li>Accept only first-party cookies</li>
                        <li>Delete cookies after each session</li>
                        <li>Be notified when a cookie is set</li>
                      </ul>

                      <p className="mt-4">
                        To manage cookies in popular browsers:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
                        <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
                        <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
                        <li><strong>Microsoft Edge:</strong> Settings &gt; Privacy, search, and services &gt; Cookies</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mt-6">Mobile Devices</h3>
                      <p>
                        For mobile browsers, please refer to your device's help documentation for information on managing cookies.
                      </p>

                      <div className="bg-accent/20 p-4 rounded-lg border-l-4 border-primary mt-4">
                        <p className="font-semibold text-foreground mb-2">Important Note:</p>
                        <p>
                          Disabling cookies may affect the functionality of our website. Some features may not work properly if cookies are blocked. Essential cookies cannot be disabled as they are required for the website to function.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Google Analytics (If Implemented)</h2>
                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                      <p>
                        If we implement Google Analytics in the future, it would use cookies to help us analyze how users interact with our website. The information collected includes:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Pages visited and time spent on each page</li>
                        <li>Browser and device information</li>
                        <li>Geographic location (city/country level)</li>
                        <li>Referral source (how you found our website)</li>
                      </ul>
                      
                      <p>
                        Google Analytics data is anonymous and does not identify individual users. For more information about Google Analytics cookies and privacy, visit:
                      </p>
                      <p>
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Google Privacy Policy
                        </a>
                      </p>

                      <p className="mt-4">
                        You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on:
                      </p>
                      <p>
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Google Analytics Opt-out Add-on
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in technology, law, our business operations, or cookie usage practices.
                  </p>
                  <p>
                    When we make changes, we will update the "Last Updated" date at the bottom of this page. We encourage you to review this policy periodically.
                  </p>
                  <p>
                    Significant changes will be communicated through a notice on our website.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-accent/20 border-accent">
                <h2 className="text-2xl font-bold mb-4">Questions About Cookies</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="not-prose space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:naveen@advocaterohtak.com" className="text-primary hover:underline">naveen@advocaterohtak.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+919050111113" className="text-primary hover:underline">+91 90502 11113</a></p>
                    <p><strong>Address:</strong> District Court Complex, Rohtak, Haryana - 124001</p>
                  </div>
                  <p className="mt-4">
                    For more information about data protection, please see our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                  </p>
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

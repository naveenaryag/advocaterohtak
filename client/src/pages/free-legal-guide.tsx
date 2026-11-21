import { Phone, Download, CheckCircle, FileText, Shield, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useState } from 'react';
import { trackFormSubmit } from '@/lib/tracking';

export default function FreeLegalGuide() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isDownloaded, setIsDownloaded] = useState(false);

  const submitMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; phone: string }) => {
      const res = await apiRequest('POST', '/api/contact', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: 'Lead Magnet Download - Free Legal Guide',
        message: `Downloaded Free Legal Guide. Contact for follow-up consultation.`,
      });
      return res.json();
    },
    onSuccess: () => {
      setIsDownloaded(true);
      toast({
        title: 'Guide Ready!',
        description: 'Your free guide is ready for download.',
      });
      trackFormSubmit('Lead Magnet - Free Legal Guide');
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to process. Please try again or call us directly.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: 'Required Fields',
        description: 'Please enter your name and phone number.',
        variant: 'destructive',
      });
      return;
    }
    submitMutation.mutate(formData);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Free Legal Guide - Know Your Rights',
    description: 'Download free legal guide on your rights when dealing with police, courts, and legal matters in Haryana.',
    provider: {
      '@type': 'Attorney',
      name: 'Advocate Naveen Arya',
      telephone: '+91 90501 11113',
    },
  };

  const guideTopics = [
    'What to do if police comes to your home',
    'Your rights during arrest and detention',
    'How to apply for anticipatory bail',
    'Documents needed for court cases',
    'Understanding maintenance and alimony',
    'Property dispute resolution steps',
    'Cheque bounce case procedures',
    'How to file an FIR in Rohtak',
  ];

  return (
    <>
      <SEO
        title="Free Legal Guide - Know Your Rights | Advocate Naveen Arya, Rohtak"
        description="Download free legal guide covering your rights during arrest, bail procedures, divorce process, and property disputes. Expert guidance from top Rohtak lawyer."
        keywords={[
          'free legal guide',
          'legal rights india',
          'bail procedure guide',
          'divorce guide haryana',
          'property dispute guide',
          'lawyer rohtak',
        ]}
        canonical="/free-legal-guide"
        schema={schema}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                  <Download className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">Free Download</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  Free Legal Guide:<br />
                  <span className="text-primary">Know Your Rights</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  Essential legal knowledge every citizen should have. Covers arrest procedures, bail rights, divorce process, property disputes, and more.
                </p>

                <div className="flex items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground mb-8">
                  <span className="flex items-center gap-1">
                    <FileText className="h-4 w-4 text-primary" />
                    20+ Pages
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-primary" />
                    Expert Content
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-primary" />
                    Instant Access
                  </span>
                </div>
              </div>

              {/* Download Form */}
              <div>
                <Card className="p-6 lg:p-8 shadow-xl border-2 border-primary/20">
                  {!isDownloaded ? (
                    <>
                      <div className="text-center mb-6">
                        <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                          <Download className="h-8 w-8" />
                        </div>
                        <h2 className="text-xl font-semibold text-foreground mb-2">
                          Get Your Free Guide
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Enter your details below for instant access
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Input
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            disabled={submitMutation.isPending}
                            className="h-12"
                          />
                        </div>
                        <div>
                          <Input
                            type="tel"
                            placeholder="Phone Number *"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            disabled={submitMutation.isPending}
                            className="h-12"
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            placeholder="Email (Optional)"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            disabled={submitMutation.isPending}
                            className="h-12"
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full gap-2 h-12 text-base"
                          disabled={submitMutation.isPending}
                        >
                          {submitMutation.isPending ? (
                            'Processing...'
                          ) : (
                            <>
                              <Download className="h-5 w-5" />
                              Download Free Guide
                            </>
                          )}
                        </Button>
                      </form>

                      <p className="text-xs text-muted-foreground text-center mt-4">
                        We respect your privacy. Your information is secure.
                      </p>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex p-4 rounded-full bg-green-500/10 text-green-600 mb-4">
                        <CheckCircle className="h-12 w-12" />
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">
                        Your Guide is Ready!
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Thank you, {formData.name}! Click below to download your free legal guide.
                      </p>
                      <a href="/guides/legal-rights-guide.pdf" download>
                        <Button size="lg" className="gap-2 mb-4">
                          <Download className="h-5 w-5" />
                          Download PDF Now
                        </Button>
                      </a>
                      <p className="text-sm text-muted-foreground">
                        We'll also send it to your phone via WhatsApp.
                      </p>

                      <div className="mt-8 pt-6 border-t">
                        <p className="text-sm font-medium text-foreground mb-3">
                          Need immediate legal help?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <a href="tel:+919050111113">
                            <Button variant="outline" className="gap-2 w-full sm:w-auto">
                              <Phone className="h-4 w-4" />
                              Call Now
                            </Button>
                          </a>
                          <a href="https://wa.me/919050111113?text=Hi%2C%20I%20downloaded%20the%20legal%20guide.%20I%20need%20help." target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="gap-2 w-full sm:w-auto">
                              <MessageCircle className="h-4 w-4" />
                              WhatsApp
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="py-12 lg:py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              What's Inside the Guide
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {guideTopics.map((topic, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Download */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                Why This Guide is Important
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Know Your Rights</h3>
                  <p className="text-sm text-muted-foreground">
                    Understanding your legal rights can protect you from exploitation and wrongful actions.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Be Prepared</h3>
                  <p className="text-sm text-muted-foreground">
                    Legal emergencies don't come with warning. Being informed helps you act quickly and correctly.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Save Money</h3>
                  <p className="text-sm text-muted-foreground">
                    Avoid common mistakes that lead to lengthy legal battles and unnecessary expenses.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About the Author */}
        <section className="py-12 lg:py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Created by Advocate Naveen Arya
              </h2>
              <p className="text-muted-foreground mb-6">
                With 12+ years of legal experience in Rohtak courts, including Punjab & Haryana High Court and Supreme Court of India, Advocate Naveen Arya has helped thousands of clients navigate complex legal situations.
              </p>
              <p className="text-muted-foreground mb-8">
                This guide compiles the most common questions and concerns he has addressed throughout his career, presented in simple, easy-to-understand language.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919050111113">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Phone className="h-5 w-5" />
                    Free Consultation: 90501 11113
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
              Have a Legal Question Right Now?
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Don't wait for a problem to become a crisis. Get expert legal advice today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919050111113">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/919050111113?text=Hi%2C%20I%20need%20legal%20consultation." target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

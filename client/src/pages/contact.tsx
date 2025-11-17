import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { SEO } from '@/components/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { insertContactInquirySchema } from '@shared/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

type ContactFormValues = z.infer<typeof insertContactInquirySchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const res = await apiRequest('POST', '/api/contact', data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });
      form.reset();
    },
    onError: (error: Error) => {
      let errorMessage = 'Failed to send message. Please try again or call directly.';
      
      try {
        const match = error.message.match(/^\d+:\s*(.+)$/);
        if (match) {
          const jsonStr = match[1];
          const parsed = JSON.parse(jsonStr);
          if (parsed.errors && parsed.errors.length > 0) {
            errorMessage = parsed.errors.map((e: any) => e.message).join(', ');
          } else if (parsed.error) {
            errorMessage = parsed.error;
          }
        }
      } catch {
        errorMessage = error.message || errorMessage;
      }
      
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Attorney',
      name: 'Advocate Naveen Arya',
      telephone: '+91 90502 25555',
      email: 'naveen@advocaterohtak.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Chamber No. 600, District Court Complex',
        addressLocality: 'Rohtak',
        addressRegion: 'Haryana',
        postalCode: '124001',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <SEO
        title="Contact Advocate Naveen Arya | Best Lawyer in Rohtak - Free Consultation"
        description="Contact top advocate in Rohtak for legal consultation. Call +91 90502 25555 or WhatsApp for immediate response. Office at Chamber No. 600, District Court Complex, Rohtak."
        keywords={[
          'contact advocate rohtak',
          'lawyer consultation rohtak',
          'legal advice rohtak',
          'advocate office rohtak',
        ]}
        canonical="/contact"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Get in touch for legal consultation. We're here to help you with your legal matters.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-contact-methods">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-phone">
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                <a href="tel:+919050225555" className="text-primary hover:underline font-medium">
                  +91 90502 25555
                </a>
                <p className="text-sm text-muted-foreground mt-2">Available 24/7</p>
              </Card>

              <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-email">
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                <a href="mailto:naveen@advocaterohtak.com" className="text-primary hover:underline font-medium break-all">
                  naveen@advocaterohtak.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
              </Card>

              <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-whatsapp">
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/919050225555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Chat with us
                </a>
                <p className="text-sm text-muted-foreground mt-2">Quick response</p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} disabled={contactMutation.isPending} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} disabled={contactMutation.isPending} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+91 90502 25555" {...field} disabled={contactMutation.isPending} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <FormControl>
                            <Input placeholder="Brief subject of your inquiry" {...field} disabled={contactMutation.isPending} data-testid="input-subject" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea rows={6} placeholder="Describe your legal matter in detail..." {...field} disabled={contactMutation.isPending} data-testid="textarea-message" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Office Information</h2>
                  <Card className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                        <p className="text-muted-foreground">
                          Chamber No. 600<br />
                          District Court Complex<br />
                          Rohtak, Haryana - 124001<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Saturday: 10:00 AM - 6:00 PM<br />
                          Sunday: By Appointment Only<br />
                          Emergency: Available 24/7
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4">Office Location</h3>
                  <div className="aspect-video rounded-lg overflow-hidden border bg-muted" data-testid="map-container">
                    <iframe
                      title="Office Location - Rohtak District Court"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.8899!2d76.6066!3d28.8955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDUzJzQzLjgiTiA3NsKwMzYnMjMuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-card border-y" data-testid="section-quick-actions">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="text-lg font-medium text-foreground">Need immediate assistance?</p>
              <div className="flex gap-3">
                <a href="tel:+919050111113" data-testid="button-quick-call">
                  <Button variant="default" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919050111113" target="_blank" rel="noopener noreferrer" data-testid="button-quick-whatsapp">
                  <Button variant="outline" className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

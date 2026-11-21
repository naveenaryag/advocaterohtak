import { Phone, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useState } from 'react';
import { trackFormSubmit } from '@/lib/tracking';

interface InlineConsultationFormProps {
  title?: string;
  subtitle?: string;
  source: string;
}

export function InlineConsultationForm({
  title = "Get Free Case Evaluation",
  subtitle = "Response within 15 minutes",
  source
}: InlineConsultationFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const submitMutation = useMutation({
    mutationFn: async (data: { name: string; phone: string; source: string }) => {
      const res = await apiRequest('POST', '/api/contact', {
        name: data.name,
        phone: data.phone,
        email: '',
        subject: `Quick Consultation - ${data.source}`,
        message: `Quick consultation request from ${data.source} page. Please call back.`,
      });
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: 'Request Received!',
        description: 'We will call you back within 15 minutes.',
      });
      setFormData({ name: '', phone: '' });
      // Track conversion for Google Ads
      trackFormSubmit(source);
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to submit. Please call directly.',
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
    submitMutation.mutate({ ...formData, source });
  };

  return (
    <Card className="p-6 bg-primary/5 border-primary/20">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          <Clock className="h-3 w-3" />
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={submitMutation.isPending}
          className="bg-background"
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          disabled={submitMutation.isPending}
          className="bg-background"
        />
        <Button
          type="submit"
          className="w-full gap-2"
          disabled={submitMutation.isPending}
        >
          {submitMutation.isPending ? (
            'Sending...'
          ) : (
            <>
              <Send className="h-4 w-4" />
              Request Callback
            </>
          )}
        </Button>
      </form>

      <div className="mt-4 pt-4 border-t text-center">
        <p className="text-xs text-muted-foreground mb-2">Or call directly</p>
        <a
          href="tel:+919050111113"
          className="inline-flex items-center gap-2 text-primary font-semibold"
        >
          <Phone className="h-4 w-4" />
          +91 90501 11113
        </a>
      </div>
    </Card>
  );
}

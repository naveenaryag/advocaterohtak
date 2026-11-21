import { useState, useEffect, useCallback } from 'react';
import { X, Download, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { trackFormSubmit } from '@/lib/tracking';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const submitMutation = useMutation({
    mutationFn: async (data: { name: string; phone: string }) => {
      const res = await apiRequest('POST', '/api/contact', {
        name: data.name,
        phone: data.phone,
        email: '',
        subject: 'Exit Intent Popup - Free Consultation',
        message: 'Requested free consultation via exit popup.',
      });
      return res.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      trackFormSubmit('Exit Intent Popup');
      toast({
        title: 'Request Received!',
        description: 'We will call you within 15 minutes.',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Please call us directly at 90501 11113',
        variant: 'destructive',
      });
    },
  });

  const showPopup = useCallback(() => {
    if (hasShown) return;

    // Check if already shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) return;

    // Don't show on lead magnet page (they're already there)
    if (window.location.pathname === '/free-legal-guide') return;

    // Don't show on contact page (they're already engaging)
    if (window.location.pathname === '/contact') return;

    setIsVisible(true);
    setHasShown(true);
    sessionStorage.setItem('exitPopupShown', 'true');
  }, [hasShown]);

  useEffect(() => {
    // Skip if already shown
    if (sessionStorage.getItem('exitPopupShown')) {
      setHasShown(true);
      return;
    }

    let lastScrollY = window.scrollY;
    let scrollUpCount = 0;
    let timeOnPage = 0;
    let hasScrolledDown = false;

    // MOBILE: Detect rapid scroll-up (user going to address bar)
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = lastScrollY - currentScrollY;

      // Track if user has engaged (scrolled down)
      if (currentScrollY > 300) {
        hasScrolledDown = true;
      }

      // Detect scroll-up pattern (mobile exit behavior)
      if (scrollDiff > 50 && hasScrolledDown && currentScrollY < 200) {
        scrollUpCount++;
        // Show after 2 rapid scroll-ups near top
        if (scrollUpCount >= 2 && timeOnPage > 15) {
          showPopup();
        }
      } else if (scrollDiff < -20) {
        scrollUpCount = 0; // Reset if scrolling down
      }

      lastScrollY = currentScrollY;
    };

    // DESKTOP: Traditional exit intent (mouse leaving viewport)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && timeOnPage > 10) {
        showPopup();
      }
    };

    // TIME-BASED: Show after 45 seconds if engaged
    const timeInterval = setInterval(() => {
      timeOnPage++;

      // Show after 45 seconds if user has scrolled and is still on page
      if (timeOnPage >= 45 && hasScrolledDown && !hasShown) {
        showPopup();
      }
    }, 1000);

    // VISIBILITY: When user switches tabs/apps
    const handleVisibilityChange = () => {
      if (document.hidden && timeOnPage > 20 && hasScrolledDown) {
        // User switched away - show when they come back
        const handleReturn = () => {
          setTimeout(showPopup, 1000);
          document.removeEventListener('visibilitychange', handleReturn);
        };
        document.addEventListener('visibilitychange', handleReturn);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(timeInterval);
    };
  }, [showPopup, hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: 'Required',
        description: 'Please enter name and phone number.',
        variant: 'destructive',
      });
      return;
    }
    submitMutation.mutate(formData);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-muted transition-colors z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="bg-primary px-6 py-5 text-primary-foreground">
              <h2 className="text-xl font-bold mb-1">Wait! Before You Go...</h2>
              <p className="text-sm opacity-90">Get FREE Legal Consultation</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-muted-foreground mb-4 text-sm">
                Have a legal question? Get expert advice from Advocate Naveen Arya.
                We'll call you back within <strong>15 minutes</strong>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={submitMutation.isPending}
                  className="h-12"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={submitMutation.isPending}
                  className="h-12"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? 'Sending...' : 'Get Free Consultation'}
                </Button>
              </form>

              <div className="mt-4 pt-4 border-t flex items-center justify-center gap-4">
                <a
                  href="tel:+919050111113"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <span className="text-muted-foreground">|</span>
                <a
                  href="https://wa.me/919050111113?text=Hi%2C%20I%20need%20legal%20help."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-4">
                12+ years experience • 1000+ clients helped
              </p>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="p-8 text-center">
            <div className="inline-flex p-4 rounded-full bg-green-500/10 text-green-600 mb-4">
              <Phone className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">
              We'll Call You Soon!
            </h2>
            <p className="text-muted-foreground mb-6">
              Expect a call within 15 minutes from Advocate Naveen Arya's office.
            </p>

            <div className="space-y-3">
              <a href="/free-legal-guide" className="block">
                <Button variant="outline" className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Download Free Legal Guide
                </Button>
              </a>
              <Button variant="ghost" onClick={handleClose} className="w-full">
                Continue Browsing
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

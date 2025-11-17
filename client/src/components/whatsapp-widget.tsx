import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  
  const phoneNumber = '919050111113';
  const message = encodeURIComponent('Hello, I need legal consultation. Can you help me?');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const callUrl = `tel:+919050111113`;

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <div 
      ref={widgetRef}
      className="fixed bottom-6 right-6 z-50"
      data-testid="whatsapp-widget"
    >
      {/* Popup Menu */}
      <div
        className={`absolute bottom-20 right-0 transition-all duration-300 ease-out origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-card border border-border rounded-xl shadow-xl p-2 min-w-[200px]">
          {/* Call Now Button */}
          <a
            href={callUrl}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover-elevate active-elevate-2 transition-all group min-h-12"
            data-testid="button-call"
            aria-label="Call Now"
          >
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">Call Now</span>
              <span className="text-xs text-muted-foreground">+91 90501 11113</span>
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover-elevate active-elevate-2 transition-all group min-h-12 mt-1"
            data-testid="button-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <div className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">WhatsApp</span>
              <span className="text-xs text-muted-foreground">Quick response</span>
            </div>
          </a>
        </div>
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group min-h-14 min-w-14 flex items-center justify-center"
        aria-label="Contact Options"
        data-testid="button-contact-toggle"
      >
        <Button
          size="icon"
          className={`h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all bg-[#25D366] hover:bg-[#1fb855] text-white border-0 ${
            !isOpen ? 'animate-bounce-subtle' : ''
          }`}
          aria-label="Toggle Contact Menu"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
        
        {/* Tooltip - only show when menu is closed */}
        {!isOpen && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            Get in Touch
          </span>
        )}
      </button>
    </div>
  );
}

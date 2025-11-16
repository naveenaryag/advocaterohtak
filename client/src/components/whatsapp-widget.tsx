import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppWidget() {
  const phoneNumber = '919050225555';
  const message = encodeURIComponent('Hello, I need legal consultation. Can you help me?');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group min-h-14 min-w-14 flex items-center justify-center"
      data-testid="whatsapp-widget"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all bg-[#25D366] hover:bg-[#1fb855] text-white border-0 animate-bounce-subtle"
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}

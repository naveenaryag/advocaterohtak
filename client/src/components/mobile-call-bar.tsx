import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-sm border-t shadow-lg safe-area-pb">
      <div className="flex items-center justify-center gap-3 px-4 py-3">
        <a href="tel:+919050111113" className="flex-1">
          <Button size="lg" className="w-full gap-2 text-base font-semibold h-12">
            <Phone className="h-5 w-5" />
            Call Now
          </Button>
        </a>
        <a
          href="https://wa.me/919050111113"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button
            size="lg"
            variant="outline"
            className="w-full gap-2 text-base font-semibold h-12 bg-green-700 hover:bg-green-800 text-white border-green-700 hover:border-green-800"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
}

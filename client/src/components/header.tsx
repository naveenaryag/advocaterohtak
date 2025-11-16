import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Criminal Lawyer', href: '/criminal-lawyer' },
  { name: 'Practice Areas', href: '/practice-areas' },
  { name: 'About', href: '/about' },
  { name: 'Directory', href: '/directory' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
      data-testid="header-main"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 hover-elevate rounded-md px-2 py-1" data-testid="link-home-logo">
            <Scale className="h-7 w-7 text-primary" />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-foreground">Advocate Naveen Arya</span>
              <span className="text-xs text-muted-foreground">Law Practice, Rohtak</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className={`${
                    location === item.href
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground'
                  }`}
                  data-testid={`link-${item.name.toLowerCase().replace(' ', '-')}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:+919050225555" className="hidden sm:inline-flex" data-testid="link-call-header">
              <Button variant="default" size="default" className="gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">Call Now</span>
              </Button>
            </a>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <nav className="flex flex-col gap-2 mt-8" data-testid="nav-mobile">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                      <Button
                        variant={location === item.href ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        data-testid={`link-mobile-${item.name.toLowerCase().replace(' ', '-')}`}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t">
                    <a href="tel:+919050225555" className="block" data-testid="link-call-mobile">
                      <Button variant="default" className="w-full gap-2">
                        <Phone className="h-4 w-4" />
                        Call Now
                      </Button>
                    </a>
                    <a
                      href="https://wa.me/919050225555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2"
                      data-testid="link-whatsapp-mobile"
                    >
                      <Button variant="outline" className="w-full gap-2">
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

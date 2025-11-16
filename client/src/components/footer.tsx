import { Link } from 'wouter';
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t" data-testid="footer-main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6 text-primary" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold">Advocate Naveen Arya</span>
                <span className="text-xs text-muted-foreground">Law Practice, Rohtak</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Expert legal representation in Rohtak with over 10 years of experience in criminal law, civil litigation, and family matters.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded-md"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded-md"
                data-testid="link-twitter"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded-md"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/criminal-lawyer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-criminal">
                  Criminal Lawyer
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-practice">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Practice Areas</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Criminal Law</li>
              <li>Matrimonial Cases</li>
              <li>Cheque Bounce (S.138)</li>
              <li>Civil Disputes</li>
              <li>Bail Matters</li>
              <li>Property Litigation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>District Court Complex, Rohtak, Haryana - 124001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+919050225555" className="hover:text-primary transition-colors" data-testid="link-footer-phone">
                  +91 90502 25555
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:naveen@advocaterohtak.com" className="hover:text-primary transition-colors" data-testid="link-footer-email">
                  naveen@advocaterohtak.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Advocate Naveen Arya. All rights reserved.</p>
          <p className="mt-2">
            SCBA Registration: A-01417 | COP: P1700/2014 | Bar Council of India
          </p>
        </div>
      </div>
    </footer>
  );
}

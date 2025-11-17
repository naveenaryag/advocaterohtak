import { Link } from 'wouter';
import { Scale, Phone, Mail, MapPin, Facebook, Linkedin, Map } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t" data-testid="footer-main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
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
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/naveenaryapresident"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate min-h-12 min-w-12 flex items-center justify-center rounded-md"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/true-lawyer/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate min-h-12 min-w-12 flex items-center justify-center rounded-md"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://www.instagram.com/truelawyer2/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate min-h-12 min-w-12 flex items-center justify-center rounded-md"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://www.google.com/maps/place/Advocate+Naveen+Arya/@28.8935102,76.5914257,17z/data=!3m1!4b1!4m6!3m5!1s0x390d85a7e4fa23ed:0xa4af0adba6e2ec69!8m2!3d28.8935102!4d76.5940006!16s%2Fg%2F11b779dh2m"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate min-h-12 min-w-12 flex items-center justify-center rounded-md"
                data-testid="link-google-maps"
                aria-label="Find us on Google Maps"
              >
                <Map className="h-5 w-5 text-muted-foreground" />
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
                <Link href="/directory" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-directory">
                  Directory
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
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/criminal-lawyer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-criminal-law">
                  Criminal Law
                </Link>
              </li>
              <li>
                <Link href="/matrimonial-cases" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-matrimonial">
                  Matrimonial Cases
                </Link>
              </li>
              <li>
                <Link href="/cheque-bounce-cases" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-cheque-bounce">
                  Cheque Bounce (S.138)
                </Link>
              </li>
              <li>
                <Link href="/civil-disputes" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-civil">
                  Civil Disputes
                </Link>
              </li>
              <li>
                <Link href="/bail-matters" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-bail">
                  Bail Matters
                </Link>
              </li>
              <li>
                <Link href="/property-litigation" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-property">
                  Property Litigation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-disclaimer">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-terms">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-cookies">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/legal-compliance" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-compliance">
                  Legal Compliance
                </Link>
              </li>
            </ul>
            <h3 className="font-semibold text-foreground mb-4 mt-6">Court Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://rohtak.dcourts.gov.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-district-court">
                  Rohtak District Court
                </a>
              </li>
              <li>
                <a href="https://highcourtchd.gov.in/3_har/district/rohtak/clc_dist.php" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-high-court">
                  Punjab & Haryana High Court
                </a>
              </li>
              <li>
                <a href="https://delhihighcourt.nic.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-delhi-high-court">
                  Delhi High Court
                </a>
              </li>
              <li>
                <a href="https://www.sci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-supreme-court">
                  Supreme Court of India
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <a 
                  href="https://www.google.com/maps/place/Advocate+Naveen+Arya/@28.8935102,76.5914257,17z/data=!3m1!4b1!4m6!3m5!1s0x390d85a7e4fa23ed:0xa4af0adba6e2ec69!8m2!3d28.8935102!4d76.5940006!16s%2Fg%2F11b779dh2m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-address"
                >
                  Chamber No. 600, District Court Complex, Rohtak, Haryana - 124001
                </a>
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

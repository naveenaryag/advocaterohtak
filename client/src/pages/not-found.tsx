import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Home, Phone, FileText } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found - 404 | Advocate Naveen Arya"
        description="The page you're looking for could not be found. Contact Advocate Naveen Arya in Rohtak for expert legal services."
        canonical="https://advocaterohtak.com/404"
      />
      
      <div className="min-h-screen w-full flex items-center justify-center bg-background px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Scale className="h-24 w-24 text-primary" />
              <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                404
              </div>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="heading-404">
            Page Not Found
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            We couldn't find the page you're looking for. It may have been moved or no longer exists.
          </p>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="font-semibold text-lg text-foreground mb-4">
                How can we help you today?
              </h2>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full h-auto flex flex-col items-center gap-2 py-4"
                  data-testid="button-home"
                >
                  <Link href="/">
                    <Home className="h-6 w-6" />
                    <span className="font-medium">Home</span>
                    <span className="text-xs text-muted-foreground">Return to homepage</span>
                  </Link>
                </Button>

                <Button 
                  asChild
                  variant="outline" 
                  className="w-full h-auto flex flex-col items-center gap-2 py-4"
                  data-testid="button-practice-areas"
                >
                  <Link href="/practice-areas">
                    <FileText className="h-6 w-6" />
                    <span className="font-medium">Practice Areas</span>
                    <span className="text-xs text-muted-foreground">View legal services</span>
                  </Link>
                </Button>

                <Button 
                  asChild
                  variant="outline" 
                  className="w-full h-auto flex flex-col items-center gap-2 py-4"
                  data-testid="button-contact"
                >
                  <Link href="/contact">
                    <Phone className="h-6 w-6" />
                    <span className="font-medium">Contact Us</span>
                    <span className="text-xs text-muted-foreground">Get in touch</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-sm text-muted-foreground">
            <p className="mb-2">Need immediate legal assistance?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+919050225555" 
                className="text-primary hover:underline font-medium"
                data-testid="link-phone"
              >
                +91 90502 25555
              </a>
              <span className="text-border">|</span>
              <a 
                href="mailto:naveen@advocaterohtak.com" 
                className="text-primary hover:underline font-medium"
                data-testid="link-email"
              >
                naveen@advocaterohtak.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

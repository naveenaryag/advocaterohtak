import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import Home from "@/pages/home";

const CriminalLawyer = lazy(() => import("@/pages/criminal-lawyer"));
const MatrimonialCases = lazy(() => import("@/pages/matrimonial-cases"));
const ChequeBounce = lazy(() => import("@/pages/cheque-bounce-cases"));
const CivilDisputes = lazy(() => import("@/pages/civil-disputes"));
const BailMatters = lazy(() => import("@/pages/bail-matters"));
const PropertyLitigation = lazy(() => import("@/pages/property-litigation"));
const SupremeCourtAdvocate = lazy(() => import("@/pages/supreme-court-advocate"));
const Directory = lazy(() => import("@/pages/directory"));
const About = lazy(() => import("@/pages/about"));
const PracticeAreas = lazy(() => import("@/pages/practice-areas"));
const Contact = lazy(() => import("@/pages/contact"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog-post"));
const Disclaimer = lazy(() => import("@/pages/disclaimer"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const Terms = lazy(() => import("@/pages/terms"));
const CookiePolicy = lazy(() => import("@/pages/cookie-policy"));
const LegalCompliance = lazy(() => import("@/pages/legal-compliance"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/criminal-lawyer" component={CriminalLawyer} />
        <Route path="/matrimonial-cases" component={MatrimonialCases} />
        <Route path="/cheque-bounce-cases" component={ChequeBounce} />
        <Route path="/civil-disputes" component={CivilDisputes} />
        <Route path="/bail-matters" component={BailMatters} />
        <Route path="/property-litigation" component={PropertyLitigation} />
        <Route path="/supreme-court-advocate" component={SupremeCourtAdvocate} />
        <Route path="/directory" component={Directory} />
        <Route path="/about" component={About} />
        <Route path="/practice-areas" component={PracticeAreas} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms" component={Terms} />
        <Route path="/cookie-policy" component={CookiePolicy} />
        <Route path="/legal-compliance" component={LegalCompliance} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WhatsAppWidget />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

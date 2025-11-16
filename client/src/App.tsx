import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import Home from "@/pages/home";
import CriminalLawyer from "@/pages/criminal-lawyer";
import Directory from "@/pages/directory";
import About from "@/pages/about";
import PracticeAreas from "@/pages/practice-areas";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Disclaimer from "@/pages/disclaimer";
import PrivacyPolicy from "@/pages/privacy-policy";
import Terms from "@/pages/terms";
import CookiePolicy from "@/pages/cookie-policy";
import LegalCompliance from "@/pages/legal-compliance";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/criminal-lawyer" component={CriminalLawyer} />
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

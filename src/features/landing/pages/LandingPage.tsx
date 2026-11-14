import { BusinessSection } from "../components/BusinessSection";
import { CounterQuestions } from "../components/CounterQuestions";
import { GetTheApp, SiteFooter } from "../components/GetTheApp";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { PrivacySection } from "../components/PrivacySection";
import { ScannerSection } from "../components/ScannerSection";
import { SiteHeader } from "../components/SiteHeader";

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CounterQuestions />
        <HowItWorks />
        <ScannerSection />
        <PrivacySection />
        <BusinessSection />
        <GetTheApp />
      </main>
      <SiteFooter />
    </>
  );
}

import { ApproachSection } from "~/components/pages/about/approach-section";
import { ContactForm } from "~/components/pages/about/contact-form";
import { HeroSection } from "~/components/pages/about/hero-section";
import { StatsSection } from "~/components/pages/about/stats-section";
import { StepsSection } from "~/components/pages/about/steps-section";
import { WorkWithUsSection } from "~/components/pages/about/work-with-us-section";

export default function AboutPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsSection />
      <ApproachSection />
      <WorkWithUsSection />
      <StepsSection />
      <ContactForm />
    </div>
  );
}

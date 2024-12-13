import { BlogSection } from "~/components/pages/home/blog-section";
import { ChooseSection } from "~/components/pages/home/choose-section";
import { ERPSection } from "~/components/pages/home/erp-section";
import { HeroSection } from "~/components/pages/home/hero-section";
import { HireSection } from "~/components/pages/home/hire-section";
import { IndustrySection } from "~/components/pages/home/industries-section";
import { PartnersSection } from "~/components/pages/home/partners-section";
import { ServiceSection } from "~/components/pages/home/service-section";
import { StatsSection } from "~/components/pages/home/stats-section";
import { TestimonialSection } from "~/components/pages/home/testimonial-section";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div>
      <HeroSection />
      <PartnersSection />
      <ChooseSection />
      <StatsSection />
      <ServiceSection />
      <ERPSection />
      <HireSection />
      <IndustrySection />
      <TestimonialSection />
      <BlogSection />
    </div>
  );
}

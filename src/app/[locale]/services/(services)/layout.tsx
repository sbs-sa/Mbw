import { TestimonialSection } from "~/components/pages/home/testimonial-section";
import { BenefitsSection } from "~/components/pages/services/benefits-section";
import { CategoriesSection } from "~/components/pages/services/categories-section";
import { ContactSection } from "~/components/pages/services/contact-section";
import { HelpSection } from "~/components/pages/services/help-section";
import { PartnersSection } from "~/components/pages/services/partners-section";
import { PricingSection } from "~/components/pages/services/pricing-section";
import { WorkBanner } from "~/components/pages/services/work-banner";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 p-10 lg:p-20">
        <div className="col-span-3 space-y-10">
          <div>{children}</div>
          <BenefitsSection />
          <HelpSection />
        </div>
        <div className="space-y-10">
          <CategoriesSection />
          <WorkBanner />
        </div>
      </div>
      <PricingSection />
      <ContactSection />
      <TestimonialSection />
      <PartnersSection />
    </div>
  );
}

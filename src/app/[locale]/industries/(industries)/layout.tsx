import { ContactForm } from "~/components/pages/about/contact-form";
import { WhySection } from "~/components/pages/industries/why-section";

export default function IndustryLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <div>
      <div>{children}</div>
      <WhySection />
      <ContactForm />
    </div>
  );
}

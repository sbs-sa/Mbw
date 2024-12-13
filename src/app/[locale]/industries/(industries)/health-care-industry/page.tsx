import { Cloud, Heart, ServerCog } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function HealthCareIndustryPage() {
  return (
    <div>
      <Banner
        title="Healthcare Industry"
        imageUrl="/assets/pages/industries/medical.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Healthcare Industry" />
        <NoteSection title="Healthcare Industry" />
        <SolutionSection
          industry="Healthcare Industry"
          title="Custom Solutions for Healthcare Industry"
          cardTitle1="Medical Equipment Maintenance and Compliance Management"
          cardIcon1={ServerCog}
          cardTitle2="Patient Data Privacy and Consent Management"
          cardIcon2={Cloud}
          cardTitle3="Telemedicine and Remote Patient Monitoring Integration"
          cardIcon3={Heart}
        />
      </div>
    </div>
  );
}

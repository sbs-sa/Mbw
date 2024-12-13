import { Activity, Pill } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function PharmaceuticalIndustryPage() {
  return (
    <div>
      <Banner
        title="Pharmaceutical Industry"
        imageUrl="/assets/pages/industries/pharmaceutical.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Pharmaceutical Industry" />
        <NoteSection title="Pharmaceutical Industry" />
        <SolutionSection
          industry="Pharmaceutical Industry"
          title="Customer Odoo Solutions for Pharma Industry"
          cardTitle1="Batch and Expiry Tracking System"
          cardIcon1={Activity}
          cardTitle2="Pharma CRM with Medical Representative (MR) Portal"
          cardIcon2={Pill}
        />
      </div>
    </div>
  );
}

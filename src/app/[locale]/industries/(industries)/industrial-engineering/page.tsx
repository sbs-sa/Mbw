import { LineChart, List, DollarSign } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function IndustrialEngineeringPage() {
  return (
    <div>
      <Banner
        title="Industrial Engineering"
        imageUrl="/assets/pages/industries/industrial-engineering.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Industrial Engineering" />
        <NoteSection title="Industrial Engineering" />
        <SolutionSection
          industry="Industrial Engineering"
          title="Tailored Industrial Engineering Solutions"
          cardTitle1="Advanced Work Order Scheduling and Resource Allocation"
          cardIcon1={List}
          cardTitle2="Customized Product Configuration and Bill of Materials (BOM) Management"
          cardIcon2={DollarSign}
          cardTitle3="Integrated Quality Assurance and Inspection Workflow"
          cardIcon3={LineChart}
        />
      </div>
    </div>
  );
}

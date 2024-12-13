import { LineChart, List, Users } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function InsuranceIndustryPage() {
  return (
    <div>
      <Banner
        title="Insurance Industry"
        imageUrl="/assets/pages/industries/insurance.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Insurance Industry" />
        <NoteSection title="Insurance Industry" />
        <SolutionSection
          industry="Insurance Industry"
          title="Custom Insurance Solutions for Insurance Services"
          cardTitle1="Custom Policy Management and Underriting Module"
          cardIcon1={List}
          cardTitle2="Claims Processing and Automation System"
          cardIcon2={LineChart}
          cardTitle3="Compliance and Regulatory Reporting Solution"
          cardIcon3={Users}
        />
      </div>
    </div>
  );
}

import { LineChart, Settings, Users } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function RetailECommercePage() {
  return (
    <div>
      <Banner title="IT Industry" imageUrl="/assets/pages/industries/it.jpg" />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="IT Industry" />
        <NoteSection title="IT Industry" />
        <SolutionSection
          industry="IT Industry"
          title="Custom Odoo Solutions For Managing IT Operations"
          cardTitle1="Custom IT Asset Management System"
          cardIcon1={Settings}
          cardTitle2="Service Level Agreement (SLA) Management Module"
          cardIcon2={LineChart}
          cardTitle3="Customized Incident and Problem Management System"
          cardIcon3={Users}
        />
      </div>
    </div>
  );
}

import { Bus, DollarSign } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function TransportIndustryPage() {
  return (
    <div>
      <Banner
        title="Retail E-Commerce"
        imageUrl="/assets/pages/industries/transport.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Transport Industry" />
        <NoteSection title="Transport Industry" />
        <SolutionSection
          title="Custom Odoo Solutions for Transport Industries"
          industry="Transport Industry"
          cardTitle1="Integrated Fleet Management Solution"
          cardIcon1={Bus}
          cardTitle2="Dynamic Freight Cost Calculation and Optimization"
          cardIcon2={DollarSign}
        />
      </div>
    </div>
  );
}

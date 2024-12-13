import { Route, Scroll, Weight } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function WholesaleIndustryPage() {
  return (
    <div>
      <Banner
        title="Wholesale Industry"
        imageUrl="/assets/pages/industries/wholesale.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Wholesale Industry" />
        <NoteSection title="Reliution's Innovative Approach" />
        <SolutionSection
          industry="Wholesale Industry"
          title="Unique Wholesale Industry Solutions with Odoo"
          cardTitle1="Customized Pricing and Discount Structures"
          cardIcon1={Scroll}
          cardTitle2="Advanced Purchase Order Workflow Automation"
          cardIcon2={Route}
          cardTitle3="Multi-Warehouse Inventory Optimization"
          cardIcon3={Weight}
        />
      </div>
    </div>
  );
}

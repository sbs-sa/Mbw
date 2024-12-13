import { Check, List, Settings } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function RetailECommercePage() {
  return (
    <div>
      <Banner
        title="Food and Beverages"
        imageUrl="/assets/pages/industries/ecommerce.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Food and Beverages" />
        <SolutionSection
          title="Exclusive Offerings"
          industry="Food and Beverages"
          cardTitle1="Recipe Management and Costing Optimization"
          cardIcon1={List}
          cardTitle2="Compliance and Traceability Enhancement"
          cardIcon2={Check}
          cardTitle3="Dynamic Menu Engineering and Stock Synchronization"
          cardIcon3={Settings}
        />
      </div>
    </div>
  );
}

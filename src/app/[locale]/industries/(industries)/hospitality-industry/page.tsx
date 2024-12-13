import { Search, Server, User2 } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function HospitalityIndustryPage() {
  return (
    <div>
      <Banner
        title="Hospitality Industry"
        imageUrl="/assets/pages/industries/hospitality.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Hospitality Industry" />
        <SolutionSection
          industry="Hospitality Industry"
          title="Custom solution for Hospitality Industry"
          cardTitle1="Dynamic Room Rate Optimization Engine"
          cardIcon1={Server}
          cardTitle2="Guest Experience Enhancement Suite"
          cardIcon2={User2}
          cardTitle3="Energy and Resource Management"
          cardIcon3={Search}
        />
      </div>
    </div>
  );
}

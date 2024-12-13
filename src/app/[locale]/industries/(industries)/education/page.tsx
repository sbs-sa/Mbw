import { LoaderPinwheel, Scroll, Users } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function RetailECommercePage() {
  return (
    <div>
      <Banner
        title="Retail Education"
        imageUrl="/assets/pages/industries/education.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Retail Education" />
        <SolutionSection
          title="Unique Solutions for Education Industry"
          industry="Retail Education"
          cardTitle1="Comprehensive Student Performance Analytics and Intervention System"
          cardIcon1={Scroll}
          cardTitle2="Integrated Curriculum Management and Learning Resource Platform"
          cardIcon2={LoaderPinwheel}
          cardTitle3="Parent-Teacher-Student Communication Portal"
          cardIcon3={Users}
        />
      </div>
    </div>
  );
}

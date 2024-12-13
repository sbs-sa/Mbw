import { FolderSearch, Tv, Users } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function SaaSCompaniesPage() {
  return (
    <div>
      <Banner
        title="SAAS Companies"
        imageUrl="/assets/pages/industries/saas.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="SaaS Companies" />
        <NoteSection title="SaaS Companies" />
        <SolutionSection
          industry="SaaS Companies"
          title="Custom Solutions for Saas Companies"
          cardTitle1="Subscription Management and Usage Analytics Dashboard"
          cardIcon1={Tv}
          cardTitle2="Advanced Multi-Tenant Infrastructure"
          cardIcon2={Users}
          cardTitle3="Customizable White-Label Branding Toolkit"
          cardIcon3={FolderSearch}
        />
      </div>
    </div>
  );
}

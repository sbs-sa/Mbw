import { Dice6, Settings, User } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function VapeIndustryPage() {
  return (
    <div>
      <Banner
        title="Vape Industry"
        imageUrl="/assets/pages/industries/vape.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Vape Industry" />
        <NoteSection title="Why Odoo for Vape Industry?" />
        <SolutionSection
          industry="Vape Industry"
          title="Custom Odoo Solutions for Vape Industry"
          cardTitle1="Age Verification and Compliance"
          cardIcon1={Dice6}
          cardTitle2="Flavor and Nicotine Strength Customization Tool"
          cardIcon2={Settings}
          cardTitle3="Restricted Geographic Sales Area Management"
          cardIcon3={User}
        />
      </div>
    </div>
  );
}

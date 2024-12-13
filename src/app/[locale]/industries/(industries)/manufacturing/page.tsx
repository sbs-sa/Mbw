import { List, SearchX, Server } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function ManufacturingPage() {
  return (
    <div>
      <Banner
        title="Manufacturing"
        imageUrl="/assets/pages/industries/manufacturing.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Manufacturing" />
        <NoteSection title="Manufacturing" />
        <SolutionSection
          industry="Manufacturing"
          title="Custom Solution"
          cardTitle1="Advanced Work Order and Shop Floor Management"
          cardIcon1={List}
          cardTitle2="Regulatory Compliance and Traceability"
          cardIcon2={Server}
          cardTitle3="Complex Product Configuration and Quoting"
          cardIcon3={SearchX}
        />
      </div>
    </div>
  );
}

import { Layers, Route, Tv } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function TextileIndustryPage() {
  return (
    <div>
      <Banner
        title="Textile Industry"
        imageUrl="/assets/pages/industries/textile.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Textile Industry" />
        <NoteSection title="Textile Industry" />
        <SolutionSection
          industry="Textile Industry"
          title="Tailored Textile Solutions with Odoo"
          cardTitle1="Fabric Pattern and Color Management Module"
          cardIcon1={Layers}
          cardTitle2="Textile Design Approval Workflow"
          cardIcon2={Route}
          cardTitle3="Textile Quality Control and Inspection Module"
          cardIcon3={Tv}
        />
      </div>
    </div>
  );
}

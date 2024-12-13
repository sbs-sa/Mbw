import { Search, Users } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function BankingIndustryPage() {
  return (
    <div>
      <Banner
        title="Banking Industry"
        imageUrl="/assets/pages/industries/banking.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Banking Industry" />
        <NoteSection title="Banking Industry" />
        <SolutionSection
          industry="Banking Industry"
          title="Custom Odoo Solutions for Banking Services"
          cardTitle1="Advanced Risk Management and Portfolio Analysis Tool"
          cardIcon1={Search}
          cardTitle2="Tailored Loan Origination and Management System"
          cardIcon2={Users}
        />
      </div>
    </div>
  );
}

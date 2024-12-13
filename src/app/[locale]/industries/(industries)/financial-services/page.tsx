import { ChartLine, FolderKanban, Users } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function FinanceIndustryPage() {
  return (
    <div>
      <Banner
        title="Finance Industry"
        imageUrl="/assets/pages/industries/finance.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Finance Industry" />
        <NoteSection title="Finance Industry" />
        <SolutionSection
          industry="Finance Industry"
          title="Tailored Solutions for Financial Services in Odoo"
          cardTitle1="Comprehensive Financial Compliance Management"
          cardIcon1={ChartLine}
          cardTitle2="Advanced Risk Assessment and Portfolio Analysis"
          cardIcon2={FolderKanban}
          cardTitle3="Client Portal for Personalized Financial Insights"
          cardIcon3={Users}
        />
      </div>
    </div>
  );
}

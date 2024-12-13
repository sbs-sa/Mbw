import { List, Search, User } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function TravelIndustryPage() {
  return (
    <div>
      <Banner
        title="Travel Industry"
        imageUrl="/assets/pages/industries/travel.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Travel Industry" />
        <NoteSection title="Why Odoo for The Travel Industry?" />
        <SolutionSection
          industry="Travel Industry"
          title="Customer Odoo Solutions for Travel Industry"
          cardTitle1="Custom Travel Itinerary Management"
          cardIcon1={List}
          cardTitle2="Advanced Risk Assessment and Portfolio Analysis"
          cardIcon2={Search}
          cardTitle3="Client Portal for Personalized Financial Insights"
          cardIcon3={User}
        />
      </div>
    </div>
  );
}

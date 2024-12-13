import { List, ShoppingCart, Users } from "lucide-react";
import { Banner } from "~/components/pages/industries/banner";
import { NoteSection } from "~/components/pages/industries/note-section";
import { OverviewSection } from "~/components/pages/industries/overview-section";
import { SolutionSection } from "~/components/pages/industries/solution-section";

export default function RetailECommercePage() {
  return (
    <div>
      <Banner
        title="Retail E-Commerce"
        imageUrl="/assets/pages/industries/ecommerce.jpg"
      />
      <div className="mt-28 md:mt-32 lg:mt-52">
        <OverviewSection title="Retail E-Commerce" />
        <NoteSection title="Retail E-Commerce" />
        <SolutionSection
          industry="Retail E-Commerce"
          title="Custom Solution"
          cardTitle1="Advanced Inventory Forecasting and Replenishment System"
          cardIcon1={List}
          cardTitle2="Personalized Customer Loyalty and Rewards Program"
          cardIcon2={Users}
          cardTitle3="Integrated E-commerce and Brick-and-Mortar Solution"
          cardIcon3={ShoppingCart}
        />
      </div>
    </div>
  );
}

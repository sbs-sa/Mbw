import { FC } from "react";
import { SolutionCard } from "./solution-card";
import { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  title: string;
  cardTitle1?: string;
  cardIcon1?: LucideIcon;
  cardTitle2?: string;
  cardIcon2?: LucideIcon;
  cardTitle3?: string;
  cardIcon3?: LucideIcon;
  industry: string;
};

export const SolutionSection: FC<Props> = ({
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardIcon1,
  cardIcon2,
  cardIcon3,
  industry,
}) => {
  const solutions = useTranslations(industry);
  return (
    <div className="w-full px-20 py-10">
      <h1 className="text-center text-4xl font-bold uppercase">
        {solutions("solution title")}
      </h1>
      <div className="space-y-5 mt-10 h-full w-full">
        {cardTitle1 && (
          <SolutionCard
            title={solutions("solution 1 title")}
            description={solutions("solution 1 desc")}
            Icon={cardIcon1}
          />
        )}
        {cardTitle2 && (
          <SolutionCard
            title={solutions("solution 2 title")}
            description={solutions("solution 2 desc")}
            Icon={cardIcon2}
          />
        )}
        {cardTitle3 && (
          <SolutionCard
            title={solutions("solution 3 title")}
            description={solutions("solution 3 desc")}
            Icon={cardIcon3}
          />
        )}
      </div>
    </div>
  );
};

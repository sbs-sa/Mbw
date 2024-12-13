import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { Card } from "~/components/ui/card";

export const WorkWithUsSection: FC = () => {
  const work = useTranslations("About Page");
  return (
    <div className="w-full h-fit">
      <div className="bg-work-with-us-background top-0 w-full h-full flex flex-col items-center justify-center p-20 text-white space-y-10 bg-cover object-contain">
        <h1 className="text-4xl font-bold uppercase">{work("Work with us")}</h1>
        <div className="text-lg space-y-10">
          <p>{work("first para")}</p>
          <p>{work("second para")}</p>
          <p>{work("third para")}</p>
          <p>{work("Factors title")}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <Card className="p-4 flex items-center space-x-5">
            <div className="text-sm flex items-center -space-x-5">
              <ChevronRight />
              <ChevronRight />
            </div>
            {work("Quality Service")}
          </Card>
          <Card className="p-4 flex items-center space-x-5">
            <div className="text-sm flex items-center -space-x-5">
              <ChevronRight />
              <ChevronRight />
            </div>
            {work("Experienced Team")}
          </Card>
          <Card className="p-4 flex items-center space-x-5">
            <div className="text-sm flex items-center -space-x-5">
              <ChevronRight />
              <ChevronRight />
            </div>
            {work("Cost Effective")}
          </Card>
        </div>
      </div>
    </div>
  );
};

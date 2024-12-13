import { FC } from "react";
import { Laptop, Lightbulb, PenTool } from "lucide-react";
import { Card } from "~/components/ui/card";
import { useTranslations } from "next-intl";

export const BenefitsSection: FC = () => {
  const benefits = useTranslations("Service Benefits");
  return (
    <div>
      <h1 className="text-2xl font-bold uppercase">{benefits("title")}</h1>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-10 mt-10">
        <Card className="p-4 flex items-center gap-5">
          <PenTool className="text-blue-500 h-10 w-10" />
          <p>{benefits("Creative Design")}</p>
        </Card>
        <Card className="p-4 flex items-center gap-5">
          <Laptop className="text-indigo-500 h-10 w-10" />
          <p>{benefits("Quick Development")}</p>
        </Card>
        <Card className="p-4 flex items-center gap-5">
          <Lightbulb className="text-purple-500 h-10 w-10" />
          <p>{benefits("Quality Assurance")}</p>
        </Card>
      </div>
    </div>
  );
};

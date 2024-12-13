import { BadgeDollarSign, ShoppingCartIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const WhySection: FC = () => {
  const why = useTranslations("Why Reliution");
  return (
    <div className="w-full h-fit">
      <div className="bg-work-with-us-background top-0 w-full h-full flex flex-col items-center justify-center p-20 text-white space-y-10 bg-cover object-contain">
        <h1 className="text-4xl font-bold uppercase">{why("title")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card className="flex flex-col items-center space-x-5 text-center justify-center h-full">
            <CardHeader className="space-y-4 items-center justify-center">
              <ShoppingCartIcon className="h-20 w-20 bg-blue-500 p-4 text-white rounded-full" />
              <CardTitle className="uppercase">
                {why("ECommerce Enterprise")}
              </CardTitle>
              <CardDescription>
                {why("ECommerce Enterprise Desc")}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="flex flex-col items-center space-x-5 text-center justify-center">
            <CardHeader className="space-y-4 items-center justify-center">
              <BadgeDollarSign className="h-20 w-20 bg-blue-500 p-4 text-white rounded-full" />
              <CardTitle className="uppercase">
                {why("Customization for Your Business")}
              </CardTitle>
              <CardDescription>
                {why("Customization for Your Business Desc")}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="flex flex-col items-center space-x-5 text-center justify-center">
            <CardHeader className="space-y-4 items-center justify-center">
              <ShoppingCartIcon className="h-20 w-20 bg-blue-500 p-4 text-white rounded-full" />
              <CardTitle className="uppercase">
                {why("Dedicated Support")}
              </CardTitle>
              <CardDescription>{why("Dedicated Support Desc")}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

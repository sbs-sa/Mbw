import { CheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const PricingSection: FC = () => {
  const pricing = useTranslations("Pricing");
  return (
    <div className="w-full h-full bg-[#F3F5F9] p-10 lg:p-20">
      <div className="space-y-5">
        <h1 className="text-4xl font-bold uppercase">{pricing("title")}</h1>
        <p className="text-sm">{pricing("description")}</p>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center mt-10 gap-10">
        <Card className="text-center">
          <CardHeader className="space-y-2">
            <CardTitle>{pricing("$ 49 / per month")}</CardTitle>
            <CardDescription className="font-semibold">
              {pricing("Basic Plan")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("Structure of Project")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("Quality Customer Support")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("Database Construction")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("24/7 System Monitoring")}</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="w-full">
            <Button size="lg" className="w-full">
              {pricing("Choose Plan")}
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center">
          <CardHeader className="space-y-2">
            <CardTitle>{pricing("$ 69 / per month")}</CardTitle>
            <CardDescription className="font-semibold">
              {pricing("Basic Plan")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("Structure of Project")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("Quality Customer Support")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("Database Construction")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("24/7 System Monitoring")}</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="w-full">
            <Button size="lg" className="w-full">
              {pricing("Choose Plan")}
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center">
          <CardHeader className="space-y-2">
            <CardTitle>{pricing("$ 89 / per month")}</CardTitle>
            <CardDescription className="font-semibold">
              {pricing("Basic Plan")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("Structure of Project")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("Quality Customer Support")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("Database Construction")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("24/7 System Monitoring")}</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="w-full">
            <Button size="lg" className="w-full">
              {pricing("Choose Plan")}
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center">
          <CardHeader className="space-y-2">
            <CardTitle>{pricing("$ 95 / per month")}</CardTitle>
            <CardDescription className="font-semibold">
              {pricing("Basic Plan")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("Structure of Project")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("Quality Customer Support")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("Database Construction")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="p-3 h-10 w-10" />
                <p>{pricing("24/7 System Monitoring")}</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="w-full">
            <Button size="lg" className="w-full">
              {pricing("Choose Plan")}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

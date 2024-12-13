import { useTranslations } from "next-intl";
import { FC } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const WorkBanner: FC = () => {
  const banner = useTranslations("Work Banner");
  return (
    <Card className="rounded-3xl p-4 bg-[#2559A7] text-white">
      <CardHeader>
        <CardTitle className="text-3xl font-bold uppercase">
          {banner("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>{banner("description")}</CardContent>
      <CardFooter className="w-full">
        <Button className="w-full" size="lg">
          {banner("Contact Us")}
        </Button>
      </CardFooter>
    </Card>
  );
};

import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const ChooseSection: FC = () => {
  const chooseSection = useTranslations("Choose Section");
  return (
    <div className="h-fit w-full flex flex-col items-center space-y-10 p-6 md:p-12 xl:p-20">
      <h1 className="text-4xl font-bold">{chooseSection("Why Choose Us")}</h1>
      <div className="w-3/4 text-center space-y-10">
        <p>{chooseSection("First Paragraph")}</p>
        <p>{chooseSection("Second Paragraph")}</p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        <div className="flex flex-col space-y-10 items-center xl:items-end w-full justify-end">
          <Card className="flex flex-col items-end w-3/4 rounded-t-3xl rounded-bl-3xl rounded-br-none p-4 h-96">
            <Image
              src="/assets/customer-support.png"
              alt="customer-support"
              height={100}
              width={100}
            />
            <CardHeader>
              <CardTitle>{chooseSection("Superior Support")}</CardTitle>
            </CardHeader>
            <CardContent className="text-right">
              {chooseSection("Superior Support Content")}
            </CardContent>
          </Card>
          <Card className="flex flex-col items-end w-3/4 rounded-b-3xl rounded-tl-3xl rounded-tr-none p-4 h-96">
            <Image
              src="/assets/bulb.png"
              alt="solution"
              height={100}
              width={100}
            />
            <CardHeader>
              <CardTitle>{chooseSection("Comphrensive Solutions")}</CardTitle>
            </CardHeader>
            <CardContent className="text-right">
              {chooseSection("Comphrensive Solutions Content")}
            </CardContent>
          </Card>
        </div>
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/assets/support-image.png"
            alt="support"
            height={100}
            width={100}
            className="xl:h-full xl:w-fit h-96 w-fit"
          />
        </div>
        <div className="flex flex-col xl:items-start items-center space-y-10 w-full">
          <Card className="flex flex-col items-start w-3/4 rounded-t-3xl rounded-br-3xl rounded-bl-none p-4 h-96">
            <Image
              src="/assets/customer-support.png"
              alt="customer-support"
              height={100}
              width={100}
            />
            <CardHeader>
              <CardTitle>{chooseSection("Our Expertise")}</CardTitle>
            </CardHeader>
            <CardContent>{chooseSection("Our Expertise Content")}</CardContent>
          </Card>
          <Card className="flex flex-col items-start w-3/4 rounded-b-3xl rounded-tr-3xl rounded-tl-none p-4 h-96">
            <Image
              src="/assets/bulb.png"
              alt="solution"
              height={100}
              width={100}
            />
            <CardHeader>
              <CardTitle>{chooseSection("24/7 Support")}</CardTitle>
            </CardHeader>
            <CardContent>{chooseSection("24/7 Support Content")}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

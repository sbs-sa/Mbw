import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import { Button } from "~/components/ui/button";

export const HireSection: FC = () => {
  const hireSection = useTranslations("Hire Section");
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full gap-10 p-6 md:p-12 xl:p-20">
      <div>
        <Image
          src="/assets/hire.png"
          alt="hire"
          height={500}
          width={500}
          className="w-full h-full"
        />
      </div>
      <div className="h-full w-full justify-evenly flex flex-col items-start space-y-10 md:mt-0 mt-10">
        <h1 className="text-4xl font-bold">{hireSection("title")}</h1>
        <p>{hireSection("First Paragraph")}</p>
        <p>{hireSection("Second Paragraph")}</p>
        <Button size="lg" className="w-full lg:w-fit">
          {hireSection("Know More")}
        </Button>
      </div>
    </div>
  );
};

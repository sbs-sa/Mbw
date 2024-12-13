import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { SERVICES } from "~/lib/constants";
import { generateUrl, toCamelCase } from "~/lib/helpers";

export const ServiceSection: FC = () => {
  const services = useTranslations("Services");
  return (
    <div className="h-fit w-full flex flex-col items-center p-6 md:p-12 xl:p-20">
      <h1 className="text-4xl font-bold">{services("title")}</h1>
      <div className="mt-20 w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex items-center justify-center w-full h-full"
          >
            <Card className="rounded-3xl flex flex-col items-center justify-center p-8 text-center w-3/4">
              <Image
                src={`/assets/${service.icon}`}
                alt={service.title}
                height={50}
                width={50}
              />
              <CardHeader>
                <CardTitle>{services(toCamelCase(service.title))}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{services(toCamelCase(service.title) + "Desc")}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/service/${generateUrl(service.title)}`}
                  className="flex space-x-2 hover:underline"
                >
                  <p>{services("Read More")}</p>
                  <span>&gt;</span>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

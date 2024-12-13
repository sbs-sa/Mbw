import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Card, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { INDUSTRIES } from "~/lib/constants";
import { generateUrl, toCamelCase } from "~/lib/helpers";

export default function IndustriesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const industries = useTranslations("Industries");
  return (
    <div className="w-full h-full p-10">
      <h1 className="text-5xl font-bold uppercase text-center">Industries</h1>
      <div className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center px-0 lg:px-20">
        {INDUSTRIES.map((industry) => (
          <Card className="hover:shadow-xl duration-500" key={industry}>
            <CardHeader className="space-y-5">
              <CardTitle className="uppercase">
                {industries(toCamelCase(industry))}
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <Link
                href={`/${locale}/industries/${generateUrl(industry)}`}
                className="hover:text-blue-500 duration-300 flex items-center space-x-2 text-lg"
              >
                <p> Read More</p>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

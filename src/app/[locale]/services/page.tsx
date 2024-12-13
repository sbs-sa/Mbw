import {
  Brain,
  Code,
  FileCode,
  Laptop,
  PcCase,
  PenLine,
  PenTool,
  Shield,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function ServicesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const services = useTranslations("Services Page");
  return (
    <div className="w-full h-full p-10">
      <h1 className="text-5xl font-bold uppercase text-center">
        {services("title")}
      </h1>
      <div className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center px-0 lg:px-20">
        <Link href={`/${locale}/services/data-security`}>
          <Card className="hover:shadow-xl duration-500">
            <CardHeader className="space-y-5">
              <CardTitle className="uppercase">
                {services("Data Security")}
              </CardTitle>
              <CardDescription>
                {services("PricesChoose YourPerfect Pricing Plan")}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Shield className="text-purple-500 h-10 w-10" />
            </CardFooter>
          </Card>
        </Link>
        <Link href={`/${locale}/services/devops-and-qa`}>
          <Card className="hover:shadow-xl duration-500">
            <CardHeader className="space-y-5">
              <CardTitle className="uppercase">
                {services("Devops & QA")}
              </CardTitle>
              <CardDescription>
                {services("PricesChoose YourPerfect Pricing Plan")}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <PcCase className="text-indigo-500 h-10 w-10" />
            </CardFooter>
          </Card>
        </Link>
        <Link href={`/${locale}/services/dedicated-team`}>
          <Card className="hover:shadow-xl duration-500">
            <CardHeader className="space-y-5">
              <CardTitle className="uppercase">
                {services("Dedicated Team")}
              </CardTitle>
              <CardDescription>
                {services("PricesChoose YourPerfect Pricing Plan")}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Brain className="text-blue-500 h-10 w-10" />
            </CardFooter>
          </Card>
        </Link>
        <Link href={`/${locale}/services/software-testing`}>
          <Card className="hover:shadow-xl duration-500">
            <CardHeader className="space-y-5">
              <CardTitle className="uppercase">
                {services("Software Testing")}
              </CardTitle>
              <CardDescription>
                {services("PricesChoose YourPerfect Pricing Plan")}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <FileCode className="text-emerald-500 h-10 w-10" />
            </CardFooter>
          </Card>
        </Link>
        <Link href={`/${locale}/services/app-development`}>
          <Card className="hover:shadow-xl duration-500">
            <CardHeader className="space-y-5">
              <CardTitle className="uppercase">
                {services("App Development")}
              </CardTitle>
              <CardDescription>
                {services("PricesChoose YourPerfect Pricing Plan")}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Code className="text-emerald-500 h-10 w-10" />
            </CardFooter>
          </Card>
        </Link>
        <Link href={`/${locale}/services/ui-ux-design`}>
          <Card className="hover:shadow-xl duration-500">
            <CardHeader className="space-y-5">
              <CardTitle className="uppercase">
                {services("UI/UX Design")}
              </CardTitle>
              <CardDescription>
                {services("PricesChoose YourPerfect Pricing Plan")}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <PenTool className="text-blue-500 h-10 w-10" />
            </CardFooter>
          </Card>
        </Link>
        <Link href={`/${locale}/services/it-consulting`}>
          <Card className="hover:shadow-xl duration-500">
            <CardHeader className="space-y-5">
              <CardTitle className="uppercase">
                {services("IT Consulting")}
              </CardTitle>
              <CardDescription>
                {services("PricesChoose YourPerfect Pricing Plan")}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <PenLine className="text-purple-500 h-10 w-10" />
            </CardFooter>
          </Card>
        </Link>
        <Link href={`/${locale}/services/web-development`}>
          <Card className="hover:shadow-xl duration-500">
            <CardHeader className="space-y-5">
              <CardTitle className="uppercase">
                {services("Web Development")}
              </CardTitle>
              <CardDescription>
                {services("PricesChoose YourPerfect Pricing Plan")}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Laptop className="text-blue-300 h-10 w-10" />
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
}

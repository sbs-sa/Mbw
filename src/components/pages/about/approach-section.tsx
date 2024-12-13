import { CheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const ApproachSection: FC = () => {
  const about = useTranslations("About Page");
  return (
    <div className="w-full flex flex-col items-center justify-center p-10 space-y-10">
      <h1 className="text-4xl uppercase font-bold">{about("Steps Title")}</h1>
      <p className="text-lg">{about("Steps Description")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-between w-full p-10">
        <Card className="w-full text-center items-center p-4">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/pages/about-us/steps/project-initiation.png"
              alt="project-initiation"
              width={100}
              height={100}
              className="w-fit h-48"
            />
          </div>
          <CardHeader>
            <CardTitle>{about("Project Initiation")}</CardTitle>
          </CardHeader>
          <CardContent className="w-full flex items-center justify-center">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Requirement Gathering")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Proposal")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Project Plan")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Solution document")}</p>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="w-full text-center items-center p-4">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/pages/about-us/steps/approval.png"
              alt="approval"
              width={100}
              height={100}
              className="w-fit h-48"
            />
          </div>
          <CardHeader>
            <CardTitle>{about("Approval")}</CardTitle>
          </CardHeader>
          <CardContent className="w-full flex items-center justify-center">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Designs Docs")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Functional Requirements")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Solution Guide")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Approval")}</p>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="w-full text-center items-center p-4">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/pages/about-us/steps/development.png"
              alt="development"
              width={100}
              height={100}
              className="w-fit h-48"
            />
          </div>
          <CardHeader>
            <CardTitle>{about("Development")}</CardTitle>
          </CardHeader>
          <CardContent className="w-full flex items-center justify-center">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Frontend Development")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Integrations")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Backend Development")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Quality Assurance")}</p>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="w-full text-center items-center p-4">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/pages/about-us/steps/support.png"
              alt="support"
              width={100}
              height={100}
              className="w-fit h-48"
            />
          </div>
          <CardHeader>
            <CardTitle>{about("Support")}</CardTitle>
          </CardHeader>
          <CardContent className="w-full flex items-center justify-center">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Analytics")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Timely Support")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Security Scans")}</p>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <p>{about("Enhancements")}</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

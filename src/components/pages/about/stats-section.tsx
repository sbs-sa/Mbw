"use client";

import Image from "next/image";
import { CheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import CountUp from "react-countup";

export const StatsSection: FC = () => {
  const about = useTranslations("About Page");
  return (
    <div className="w-full h-full">
      <div className="p-10 lg:px-40 lg:py-20 w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="h-full">
            <Image
              src="/assets/pages/about-us/services.jpg"
              alt=""
              width={100}
              height={100}
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col items-center justify-between w-full h-full p-0 py-10 lg:py-0 lg:p-10 col-span-2">
            <h1 className="uppercase font-bold text-5xl">
              {about("Stats Title")}
            </h1>
            <div className="space-y-4 text-lg">
              <p className="font-bold">{about("Bold Description")}</p>
              <p>{about("Description")}</p>
            </div>
            <div className="flex justify-between w-full h-fit py-5 px-10">
              <ul className="space-y-5">
                <li className="flex items-center space-x-3">
                  <CheckIcon className="p-3 h-10 w-10" />
                  <span>{about("Global Reach")}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="p-3 h-10 w-10" />
                  <span>{about("Comphrensive Services")}</span>
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-center space-x-3">
                  <CheckIcon className="p-3 h-10 w-10" />
                  <span>{about("User Empowerment")}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="p-3 h-10 w-10" />
                  <span>{about("Proactive Support")}</span>
                </li>
              </ul>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="font-bold text-2xl flex items-center justify-center flex-col space-y-5">
                <p className="text-6xl">
                  <CountUp start={0} end={30} duration={10} />
                  <span className="ml-2">+</span>
                </p>
                <p>{about("Global Reach")}</p>
              </div>
              <div className="font-bold text-2xl flex items-center justify-center flex-col space-y-5">
                <p className="text-6xl">
                  <CountUp start={0} end={100} duration={15} />
                  <span className="ml-2">+</span>
                </p>
                <p>{about("Happy Customers")}</p>
              </div>
              <div className="font-bold text-2xl flex items-center justify-center flex-col space-y-5">
                <p className="text-6xl">
                  <CountUp start={0} end={30} duration={10} />
                  <span className="ml-2">+</span>
                </p>
                <p>{about("Qualified Employees")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

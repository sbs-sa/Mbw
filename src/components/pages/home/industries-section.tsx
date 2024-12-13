import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

export const IndustrySection: FC = () => {
  const industries = useTranslations("Industries Section");
  return (
    <div className="h-full w-full bg-[url('/assets/industry.jpg')] bg-cover mt-20 object-contain">
      <div className="flex flex-col items-center justify-center h-full w-full p-6 md:p-12 lg:p-20">
        <h1 className="font-bold text-3xl md:text-6xl text-white">
          {industries("title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-full gap-10 mt-10 md:mt-40 items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <div className="bg-white p-4 rounded-lg flex items-center w-80 space-x-5 border border-green-500">
              <Image
                src="/assets/industry-icons/conveyor.png"
                alt="conveyor"
                width={50}
                height={50}
              />
              <h1 className="text-2xl font-semibold">
                {industries("Manufacturing")}
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="bg-white p-4 rounded-lg flex items-center w-80 space-x-5">
              <Image
                src="/assets/industry-icons/supply-chain.png"
                alt="conveyor"
                width={50}
                height={50}
              />
              <h1 className="text-2xl font-semibold">
                {industries("Supply Chain")}
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="bg-white p-4 rounded-lg flex items-center w-80 space-x-5">
              <Image
                src="/assets/industry-icons/solidarity.png"
                alt="conveyor"
                width={50}
                height={50}
              />
              <h1 className="text-2xl font-semibold">
                {industries("Health Care")}
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="bg-white p-4 rounded-lg flex items-center w-80 space-x-5">
              <Image
                src="/assets/industry-icons/online-store.png"
                alt="conveyor"
                width={50}
                height={50}
              />
              <h1 className="text-2xl font-semibold">{industries("Retail")}</h1>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="bg-white p-4 rounded-lg flex items-center w-80 space-x-5">
              <Image
                src="/assets/industry-icons/finance.png"
                alt="conveyor"
                width={50}
                height={50}
              />
              <h1 className="text-2xl font-semibold">
                {industries("Finance")}
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="bg-white p-4 rounded-lg flex items-center w-80 space-x-5">
              <Image
                src="/assets/industry-icons/telecom.png"
                alt="conveyor"
                width={50}
                height={50}
              />
              <h1 className="text-2xl font-semibold">
                {industries("Telecom")}
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="bg-white p-4 rounded-lg flex items-center w-80 space-x-5">
              <Image
                src="/assets/industry-icons/takeaway.png"
                alt="conveyor"
                width={50}
                height={50}
              />
              <h1 className="text-2xl font-semibold">
                {industries("Food Distribution")}
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="bg-white p-4 rounded-lg flex items-center w-80 space-x-5">
              <Image
                src="/assets/industry-icons/store.png"
                alt="conveyor"
                width={50}
                height={50}
              />
              <h1 className="text-2xl font-semibold">
                {industries("E Commerce")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

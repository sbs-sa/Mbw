import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

export const HeroSection: FC = () => {
  const about = useTranslations("About Page");
  return (
    <div className="w-full">
      <div className="relative">
        <Image
          src="/assets/pages/about-us/banner.jpg"
          alt="about-banner"
          width={100}
          height={100}
          className="h-fit w-full object-cover bg-no-repeat"
        />
        <div className="absolute top-0 w-full h-full">
          <div className="w-full flex items-center justify-start h-full px-72">
            <h1 className="text-white uppercase font-bold text-8xl">
              {about("title")}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

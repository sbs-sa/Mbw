import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

export const PartnersSection: FC = () => {
  const partners = useTranslations("Partners");
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-5 py-10 mx-auto">
      <h1 className="text-4xl font-bold">{partners("partners")}</h1>
      <div className="flex flex-wrap items-center justify-evenly w-full">
        <Image
          src="/assets/janak.png"
          alt="janak"
          height={200}
          width={200}
          className="hover:opacity-100 opacity-50 duration-500 transition-opacity"
        />
        <Image
          src="/assets/guestify.png"
          alt="janak"
          height={200}
          width={200}
          className="hover:opacity-100 opacity-50 duration-500 transition-opacity"
        />
        <Image
          src="/assets/progressive.png"
          alt="janak"
          height={200}
          width={200}
          className="hover:opacity-100 opacity-50 duration-500 transition-opacity"
        />
        <Image
          src="/assets/roofworks.png"
          alt="janak"
          height={200}
          width={200}
          className="hover:opacity-100 opacity-50 duration-500 transition-opacity"
        />
        <Image
          src="/assets/nasc.png"
          alt="janak"
          height={200}
          width={200}
          className="hover:opacity-100 opacity-50 duration-500 transition-opacity"
        />
      </div>
    </div>
  );
};

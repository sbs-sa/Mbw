"use client";

import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const PartnersSection: FC = () => {
  const partners = useTranslations("Partners");
  return (
    <div className="w-full h-fit p-10 lg:p-20">
      <h1 className="text-4xl font-bold uppercase">
        {partners("services partners")}
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-evenly w-full">
        <Image
          src="/assets/pages/services/logos/client-logo-1.png"
          alt="client-logo-1"
          width={100}
          height={100}
        />
        <Image
          src="/assets/pages/services/logos/client-logo-2.png"
          alt="client-logo-2"
          width={100}
          height={100}
        />
        <Image
          src="/assets/pages/services/logos/client-logo-3.png"
          alt="client-logo-3"
          width={100}
          height={100}
        />
        <Image
          src="/assets/pages/services/logos/client-logo-4.png"
          alt="client-logo-4"
          width={100}
          height={100}
        />
        <Image
          src="/assets/pages/services/logos/client-logo-5.png"
          alt="client-logo-5"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

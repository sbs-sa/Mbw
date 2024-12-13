"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import { Button } from "~/components/ui/button";
import Typewriter from "typewriter-effect";
import { SERVICES } from "~/lib/constants";

export const HeroSection: FC = () => {
  const heroSection = useTranslations("HeroSection");
  return (
    <div className="relative bg-hero-background h-[60vh] w-full bg-cover">
      <div className="absolute flex flex-col space-y-10 items-center justify-center h-full w-full">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
          {heroSection("heroTitle")}
        </h1>
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green-400">
          <Typewriter
            options={{
              strings: SERVICES.map((service) => heroSection(service.title)),
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
              delay: 100,
            }}
          />
        </div>
        <Button size="lg">{heroSection("Contact Us")}</Button>

        <div className="flex items-center justify-center space-x-5 w-1/2">
          <Image
            src="/assets/odoo.png"
            alt="odoo"
            height={100}
            width={100}
            className="bg-white p-2 rounded-t-3xl rounded-bl-3xl hover:border hover:border-blue-500"
          />
          <Image
            src="/assets/rank.png"
            alt="rank"
            height={100}
            width={100}
            className="bg-white p-2 rounded-t-3xl rounded-br-3xl hover:border hover:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

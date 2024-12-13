"use client";

import { FC, useRef } from "react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";

export const StepsSection: FC = () => {
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));
  const steps = useTranslations("About Page");
  return (
    <div className="w-full p-20 flex flex-col items-center justify-center space-y-10">
      <h1 className="font-bold text-5xl uppercase text-center">
        Approach To Excellence
      </h1>
      <div className="hidden lg:block">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="gap-10 mt-10 p-10">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="p-8 rounded-3xl h-full w-full hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/assets/pages/about-us/numbers/1.png"
                  alt="1"
                  width={100}
                  height={100}
                />
                <CardHeader>
                  <CardTitle>{steps("Unique Solutions")}</CardTitle>
                </CardHeader>
                <CardContent>{steps("Unique Solutions Desc")}</CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="p-8 rounded-3xl h-full w-full hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/assets/pages/about-us/numbers/2.png"
                  alt="2"
                  width={100}
                  height={100}
                />
                <CardHeader>
                  <CardTitle>{steps("Honesty")}</CardTitle>
                </CardHeader>
                <CardContent>{steps("Honesty Desc")}</CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="p-8 rounded-3xl h-full w-full hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/assets/pages/about-us/numbers/3.png"
                  alt="3"
                  width={100}
                  height={100}
                />
                <CardHeader>
                  <CardTitle>{steps("Communication")}</CardTitle>
                </CardHeader>
                <CardContent>{steps("Communication Desc")}</CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="p-8 rounded-3xl h-full w-full hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/assets/pages/about-us/numbers/4.png"
                  alt="4"
                  width={100}
                  height={100}
                />
                <CardHeader>
                  <CardTitle>{steps("Teamwork")}</CardTitle>
                </CardHeader>
                <CardContent>{steps("Teamwork Desc")}</CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="p-8 rounded-3xl h-full w-full hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/assets/pages/about-us/numbers/5.png"
                  alt="5"
                  width={100}
                  height={100}
                />
                <CardHeader>
                  <CardTitle>{steps("Passion")}</CardTitle>
                </CardHeader>
                <CardContent>{steps("Passion Desc")}</CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="lg:hidden flex flex-col justify-center items-center space-y-10">
        <Card className="p-8 rounded-3xl h-full w-full hover:shadow-2xl transition-all duration-500">
          <Image
            src="/assets/pages/about-us/numbers/1.png"
            alt="1"
            width={100}
            height={100}
          />
          <CardHeader>
            <CardTitle>{steps("Unique Solutions")}</CardTitle>
          </CardHeader>
          <CardContent>{steps("Unique Solutions Desc")}</CardContent>
        </Card>
        <Card className="p-8 rounded-3xl h-full w-full hover:shadow-2xl transition-all duration-500">
          <Image
            src="/assets/pages/about-us/numbers/2.png"
            alt="2"
            width={100}
            height={100}
          />
          <CardHeader>
            <CardTitle>{steps("Honesty")}</CardTitle>
          </CardHeader>
          <CardContent>{steps("Honesty Desc")}</CardContent>
        </Card>
        <Card className="p-8 rounded-3xl h-full w-full hover:shadow-2xl transition-all duration-500">
          <Image
            src="/assets/pages/about-us/numbers/3.png"
            alt="3"
            width={100}
            height={100}
          />
          <CardHeader>
            <CardTitle>{steps("Communication")}</CardTitle>
          </CardHeader>
          <CardContent>{steps("Communication Desc")}</CardContent>
        </Card>
        <Card className="p-8 rounded-3xl h-full w-full hover:shadow-2xl transition-all duration-500">
          <Image
            src="/assets/pages/about-us/numbers/4.png"
            alt="4"
            width={100}
            height={100}
          />
          <CardHeader>
            <CardTitle>{steps("Teamwork")}</CardTitle>
          </CardHeader>
          <CardContent>{steps("Teamwork Desc")}</CardContent>
        </Card>
        <Card className="p-8 rounded-3xl h-full w-full hover:shadow-2xl transition-all duration-500">
          <Image
            src="/assets/pages/about-us/numbers/5.png"
            alt="5"
            width={100}
            height={100}
          />
          <CardHeader>
            <CardTitle>{steps("Passion")}</CardTitle>
          </CardHeader>
          <CardContent>{steps("Passion Desc")}</CardContent>
        </Card>
      </div>
    </div>
  );
};

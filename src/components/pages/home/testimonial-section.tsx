"use client";

import { FC, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { useTranslations } from "next-intl";

export const TestimonialSection: FC = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const testimonials = useTranslations("Testimonial Section");
  return (
    <div className="h-full w-full flex flex-col items-center justify-between p-10 lg:p-20">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
        {testimonials("title")}
      </h1>
      <div className="mt-20 flex items-center justify-center w-3/4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="w-full flex items-center justify-center">
            <CarouselItem>
              <Card className="p-8 rounded-3xl text-center">
                <div className="mt-5">
                  <p>{testimonials("testimonial1")}</p>

                  <div className="mt-10">
                    <p className="font-bold text-xl">{testimonials("Aalap")}</p>
                    <p>{testimonials("CEO")}</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 rounded-3xl text-center">
                <div className="mt-5">
                  <p>{testimonials("testimonial1")}</p>

                  <div className="mt-10">
                    <p className="font-bold text-xl">{testimonials("Aalap")}</p>
                    <p>{testimonials("CEO")}</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 rounded-3xl text-center">
                <div className="mt-5">
                  <p>{testimonials("testimonial1")}</p>

                  <div className="mt-10">
                    <p className="font-bold text-xl">
                      {testimonials("Mathew Turnbull")}
                    </p>
                    <p>{testimonials("Works Manager")}</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 rounded-3xl text-center">
                <div className="mt-5">
                  <p>{testimonials("testimonial2")}</p>

                  <div className="mt-10">
                    <p className="font-bold text-xl">
                      {testimonials("Thomas Ahamed")}
                    </p>
                    <p>{testimonials("CEO")}</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 rounded-3xl text-center">
                <div className="mt-5">
                  <p>{testimonials("testimonial3")}</p>

                  <div className="mt-10">
                    <p className="font-bold text-xl">{testimonials("Aalap")}</p>
                    <p>{testimonials("CEO")}</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

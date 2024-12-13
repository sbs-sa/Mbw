"use client";

import { FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { INDUSTRIES, SERVICES } from "~/lib/constants";
import { generateUrl } from "~/lib/helpers";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import Image from "next/image";

export const Sidebar: FC = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full xl:hidden items-center justify-between px-10 py-6 border-b">
      <h1 className="text-4xl font-bold"><Image src="/logo.png" alt="logo" width={100} height={100} /></h1>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className="space-y-5 flex flex-col mt-10 uppercase font-semibold">
            <Link
              href="/"
              className={cn(pathname === "/" ? "underline" : "hover:underline")}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                pathname === "/about" ? "underline" : "hover:underline",
              )}
            >
              About
            </Link>
            <Accordion type="single" collapsible className="w-full border-none">
              <AccordionItem value="services" className="border-none">
                <AccordionTrigger
                  className={cn(
                    "border-none uppercase font-semibold py-0",
                    pathname === "/services" ? "underline" : "hover:underline",
                  )}
                >
                  Services
                </AccordionTrigger>
                <AccordionContent className="mt-5">
                  <ul className="flex flex-col space-y-5">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.title}
                        href={generateUrl(service.title)}
                        className={cn(
                          pathname === `/${generateUrl(service.title)}`
                            ? "underline"
                            : "hover:underline",
                        )}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </ul>
                </AccordionContent>
                <AccordionItem value="industries" className="border-none">
                  <AccordionTrigger
                    className={cn(
                      "border-none uppercase font-semibold py-0 mt-5",
                      pathname === "/industries"
                        ? "underline"
                        : "hover:underline",
                    )}
                  >
                    Industries
                  </AccordionTrigger>
                  <AccordionContent className="mt-5">
                    <ul className="flex flex-col space-y-5">
                      {INDUSTRIES.map((industry: string) => (
                        <Link
                          href={generateUrl(industry)}
                          className={cn(
                            pathname === `/${generateUrl(industry)}`
                              ? "underline"
                              : "hover:underline",
                          )}
                          key={industry}
                        >
                          {industry}
                        </Link>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </AccordionItem>
            </Accordion>
            <Link
              href="/blogs"
              className={cn(
                pathname === "/blogs" ? "underline" : "hover:underline",
              )}
            >
              Blogs
            </Link>
            <Link
              href="/contact-us"
              className={cn(
                pathname === "/contact-us" ? "underline" : "hover:underline",
              )}
            >
              Contact Us
            </Link>
            <Link href="/" className="w-full">
              <Button className="mt-5 w-full">Get a quote</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
